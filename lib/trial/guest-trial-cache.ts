import type { WebTrialStatus } from "@/lib/trial/trial-api.client";
import {
  bootstrapWebTrialCredits,
  consumeWebTrialCreditOnServer,
  fetchWebTrialStatusFromServer,
} from "@/lib/trial/trial-api.client";
import { FREE_TOTAL_GENERATION_LIMIT, type StudyCredits } from "@/lib/student/study-credits";

const CACHE_KEY = "studiely_web_trial_cache_v1";

type TrialCache = {
  totalUsed: number;
  remaining: number;
  configured: boolean;
  updatedAt: number;
};

function readCache(): TrialCache | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TrialCache;
    if (typeof parsed.remaining !== "number") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(status: WebTrialStatus) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(
    CACHE_KEY,
    JSON.stringify({
      totalUsed: status.totalUsed,
      remaining: status.remaining,
      configured: status.configured,
      updatedAt: Date.now(),
    } satisfies TrialCache),
  );
}

/** Merge server status with cache — take max used, never grant extra credits. */
function mergeStatus(server: WebTrialStatus): WebTrialStatus {
  const cached = readCache();
  if (!cached) {
    writeCache(server);
    return server;
  }
  const used = Math.max(server.totalUsed, cached.totalUsed);
  const cap = server.cap || FREE_TOTAL_GENERATION_LIMIT;
  const merged: WebTrialStatus = {
    configured: server.configured,
    cap,
    totalUsed: Math.min(cap, used),
    remaining: Math.max(0, cap - Math.min(cap, used)),
  };
  writeCache(merged);
  return merged;
}

export function webTrialStatusToStudyCredits(status: WebTrialStatus): StudyCredits {
  const cap = status.cap || FREE_TOTAL_GENERATION_LIMIT;
  const used = Math.min(cap, Math.max(0, status.totalUsed));
  const remaining = Math.max(0, status.remaining);
  return {
    used,
    total: cap,
    remaining,
    isPremium: false,
    rewardCreditsRemaining: 0,
    freeBaseLimit: cap,
  };
}

export async function fetchGuestWebTrialCredits(): Promise<StudyCredits> {
  const server = mergeStatus(await fetchWebTrialStatusFromServer());
  return webTrialStatusToStudyCredits(server);
}

export async function syncGuestTrialCredits(): Promise<StudyCredits> {
  const server = mergeStatus(await bootstrapWebTrialCredits());
  return webTrialStatusToStudyCredits(server);
}

export async function consumeGuestTrialCreditBeforeGenerate(): Promise<StudyCredits> {
  const status = mergeStatus(await consumeWebTrialCreditOnServer());
  return webTrialStatusToStudyCredits(status);
}

export function clearGuestTrialCache() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(CACHE_KEY);
}
