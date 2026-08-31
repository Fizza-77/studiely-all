"use strict";

const crypto = require("crypto");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");

const WEB_TRIAL_CAP = 5;
const WEB_TRIAL_COLLECTION = "webTrialIpUsage";
const WEB_GUEST_SESSIONS_COLLECTION = "WebGuestSessions";
const STUDENTS_COLLECTION = "Students";
const GUEST_GENERATION_COUNTS_COLLECTION = "GuestGenerationCounts";
const FREE_TOTAL_GENERATION_LIMIT = 5;
const GUEST_DEVICE_ID_RE = /^[A-Za-z0-9._:-]{8,128}$/;

const webTrialIpSalt = defineSecret("WEB_TRIAL_IP_SALT");

const STUDIELY_WEB_CALLABLE_OPTS = {
  region: "us-central1",
  invoker: "public",
  secrets: [webTrialIpSalt],
};

function ensureAdmin() {
  try {
    admin.app();
  } catch {
    admin.initializeApp();
  }
}

function clientIp(request) {
  try {
    const raw = request.rawRequest;
    if (!raw) return null;
    const headers = raw.headers || {};
    const cf = headers["cf-connecting-ip"];
    if (typeof cf === "string" && cf.trim()) return cf.trim().slice(0, 64);
    const xri = headers["x-real-ip"];
    if (typeof xri === "string" && xri.trim()) return xri.trim().slice(0, 64);
    const xf = headers["x-forwarded-for"] || headers["X-Forwarded-For"];
    if (typeof xf === "string" && xf.trim()) {
      return xf.split(",")[0].trim().slice(0, 64);
    }
    if (typeof raw.ip === "string" && raw.ip.trim()) return raw.ip.trim().slice(0, 64);
  } catch {
    /* ignore */
  }
  return null;
}

function hashIp(ip, salt) {
  return crypto.createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

function buildStatus(totalUsed) {
  const used = Math.max(0, Math.min(WEB_TRIAL_CAP, Math.floor(Number(totalUsed) || 0)));
  return {
    configured: true,
    cap: WEB_TRIAL_CAP,
    totalUsed: used,
    remaining: Math.max(0, WEB_TRIAL_CAP - used),
  };
}

function failClosedStatus() {
  return {
    configured: false,
    cap: WEB_TRIAL_CAP,
    totalUsed: WEB_TRIAL_CAP,
    remaining: 0,
  };
}

function isAnonymousWebGuest(request) {
  const token = request.auth?.token;
  if (!token) return false;
  return token.firebase?.sign_in_provider === "anonymous";
}

async function readIpLedger(db, ipHash) {
  const snap = await db.collection(WEB_TRIAL_COLLECTION).doc(ipHash).get();
  if (!snap.exists) return 0;
  const n = Number(snap.data()?.totalUsed ?? 0);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}

async function syncGuestSession(db, uid, status) {
  await db.collection(WEB_GUEST_SESSIONS_COLLECTION).doc(uid).set(
    {
      webTrialUsed: status.totalUsed,
      webTrialRemaining: status.remaining,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true },
  );
}

async function ipContext(request) {
  ensureAdmin();
  const salt = webTrialIpSalt.value();
  if (!salt || !salt.trim()) {
    return { configured: false, db: admin.firestore(), ipHash: null };
  }
  const ip = clientIp(request);
  if (!ip) {
    return { configured: false, db: admin.firestore(), ipHash: null };
  }
  return {
    configured: true,
    db: admin.firestore(),
    ipHash: hashIp(ip, salt.trim()),
    ip,
  };
}

async function readDeviceGuestCount(db, deviceId) {
  if (!deviceId || !GUEST_DEVICE_ID_RE.test(deviceId.trim())) return 0;
  const snap = await db
    .collection(GUEST_GENERATION_COUNTS_COLLECTION)
    .doc(deviceId.trim())
    .get();
  if (!snap.exists) return 0;
  const n = Number(snap.data()?.count ?? 0);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}

function attachWebTrial(exports) {
  exports.getWebTrialStatus = onCall(STUDIELY_WEB_CALLABLE_OPTS, async (request) => {
    const ctx = await ipContext(request);
    if (!ctx.configured || !ctx.ipHash) return failClosedStatus();
    const totalUsed = await readIpLedger(ctx.db, ctx.ipHash);
    return buildStatus(totalUsed);
  });

  exports.bootstrapWebTrial = onCall(STUDIELY_WEB_CALLABLE_OPTS, async (request) => {
    if (!request.auth?.uid) {
      throw new HttpsError("unauthenticated", "Authentication required to bootstrap web trial.");
    }
    if (!isAnonymousWebGuest(request)) {
      throw new HttpsError(
        "permission-denied",
        "bootstrapWebTrial is for anonymous web guests only.",
      );
    }
    const ctx = await ipContext(request);
    if (!ctx.configured || !ctx.ipHash) return failClosedStatus();
    const totalUsed = await readIpLedger(ctx.db, ctx.ipHash);
    const status = buildStatus(totalUsed);
    await syncGuestSession(ctx.db, request.auth.uid, status);
    return status;
  });

  exports.consumeWebTrial = onCall(STUDIELY_WEB_CALLABLE_OPTS, async (request) => {
    if (!request.auth?.uid) {
      throw new HttpsError("unauthenticated", "Authentication required to consume web trial credit.");
    }
    if (!isAnonymousWebGuest(request)) {
      throw new HttpsError(
        "permission-denied",
        "consumeWebTrial is for anonymous web guests only.",
      );
    }
    const ctx = await ipContext(request);
    if (!ctx.configured || !ctx.ipHash) {
      throw new HttpsError(
        "resource-exhausted",
        "Web trial is unavailable. Please sign in or try again later.",
      );
    }
    const uid = request.auth.uid;
    const ipRef = ctx.db.collection(WEB_TRIAL_COLLECTION).doc(ctx.ipHash);
    const sessionRef = ctx.db.collection(WEB_GUEST_SESSIONS_COLLECTION).doc(uid);

    return ctx.db.runTransaction(async (tx) => {
      const ipSnap = await tx.get(ipRef);
      const prev = ipSnap.exists ? ipSnap.data() || {} : {};
      let totalUsed = Number(prev.totalUsed ?? 0);
      if (!Number.isFinite(totalUsed) || totalUsed < 0) totalUsed = 0;
      totalUsed = Math.floor(totalUsed);
      if (totalUsed >= WEB_TRIAL_CAP) {
        throw new HttpsError(
          "resource-exhausted",
          "You've used all free web trial credits on this network.",
        );
      }
      const nextUsed = totalUsed + 1;
      tx.set(
        ipRef,
        {
          totalUsed: nextUsed,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
      tx.set(
        sessionRef,
        {
          webTrialUsed: nextUsed,
          webTrialRemaining: Math.max(0, WEB_TRIAL_CAP - nextUsed),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
      return buildStatus(nextUsed);
    });
  });

  exports.sealWebTrialIp = onCall(STUDIELY_WEB_CALLABLE_OPTS, async (request) => {
    if (!request.auth?.uid) {
      throw new HttpsError("unauthenticated", "Authentication required to seal web trial IP.");
    }
    const ctx = await ipContext(request);
    if (!ctx.configured || !ctx.ipHash) return failClosedStatus();
    await ctx.db.collection(WEB_TRIAL_COLLECTION).doc(ctx.ipHash).set(
      {
        totalUsed: WEB_TRIAL_CAP,
        sealedAt: admin.firestore.FieldValue.serverTimestamp(),
        sealedByUid: request.auth.uid,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
    return buildStatus(WEB_TRIAL_CAP);
  });

  /**
   * After real sign-in/sign-up: merge IP + optional device usage into Students/{uid}.
   * Also seals IP when the account free pool is already exhausted.
   */
  exports.mergeWebTrialOnSignIn = onCall(STUDIELY_WEB_CALLABLE_OPTS, async (request) => {
    if (!request.auth?.uid) {
      throw new HttpsError("unauthenticated", "Authentication required.");
    }
    if (isAnonymousWebGuest(request)) {
      throw new HttpsError("permission-denied", "Use a full account to merge web trial.");
    }

    const ctx = await ipContext(request);
    const uid = request.auth.uid;
    const data = request.data || {};
    const deviceId =
      typeof data.deviceId === "string" ? data.deviceId.trim() : "";

    if (!ctx.configured || !ctx.ipHash) {
      return { merged: false, reason: "not_configured" };
    }

    const db = ctx.db;
    const ipUsed = await readIpLedger(db, ctx.ipHash);
    const deviceCount = await readDeviceGuestCount(db, deviceId);
    const mergedUsed = Math.min(
      FREE_TOTAL_GENERATION_LIMIT,
      Math.max(ipUsed, deviceCount),
    );

    const studentRef = db.collection(STUDENTS_COLLECTION).doc(uid);
    const studentSnap = await studentRef.get();
    const studentData = studentSnap.exists ? studentSnap.data() || {} : {};
    const accountUsed = Math.max(
      0,
      Math.floor(Number(studentData.notes_free_generations_used) || 0),
    );
    const nextUsed = Math.min(
      FREE_TOTAL_GENERATION_LIMIT,
      Math.max(accountUsed, mergedUsed),
    );

    if (nextUsed > accountUsed) {
      await studentRef.set(
        {
          notes_free_generations_used: nextUsed,
          web_trial_merged_at: admin.firestore.FieldValue.serverTimestamp(),
          web_trial_merged_from_ip_used: ipUsed,
          web_trial_merged_from_device_count: deviceCount,
        },
        { merge: true },
      );
    }

    let sealed = false;
    if (nextUsed >= FREE_TOTAL_GENERATION_LIMIT) {
      await db.collection(WEB_TRIAL_COLLECTION).doc(ctx.ipHash).set(
        {
          totalUsed: WEB_TRIAL_CAP,
          sealedAt: admin.firestore.FieldValue.serverTimestamp(),
          sealedByUid: uid,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
      sealed = true;
    }

    return {
      merged: nextUsed > accountUsed,
      accountUsed: nextUsed,
      ipUsed,
      deviceCount,
      sealed,
      remaining: Math.max(0, FREE_TOTAL_GENERATION_LIMIT - nextUsed),
    };
  });
}

module.exports = {
  attachWebTrial,
  WEB_TRIAL_CAP,
  WEB_TRIAL_COLLECTION,
  WEB_GUEST_SESSIONS_COLLECTION,
  webTrialIpSalt,
  ensureAdmin,
  clientIp,
  buildStatus,
  failClosedStatus,
  isAnonymousWebGuest,
};
