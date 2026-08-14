"use client";

import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase/client";
import { COLLECTIONS } from "@/lib/config/constants";
import type { StudentProfile } from "@/lib/student/types";
import { resolvePlan } from "@/lib/student/types";

export type DeletionResult =
  | "success"
  | "requiresReauth"
  | "hasActiveSubscriptions"
  | "failure";

/** Flutter AccountDeletionService.hasActiveSubscriptions parity (client-only). */
export function hasActiveSubscriptions(profile: StudentProfile): boolean {
  const { isPremium } = resolvePlan(profile);
  if (!isPremium) return false;
  if (!profile.subscriptionEndDate) return true;
  return profile.subscriptionEndDate.getTime() > Date.now();
}

export async function deleteStudentAccount(
  profile: StudentProfile,
  password?: string,
): Promise<DeletionResult> {
  if (hasActiveSubscriptions(profile)) {
    return "hasActiveSubscriptions";
  }

  const auth = getFirebaseAuth();
  const user = auth.currentUser;
  if (!user || user.uid !== profile.uid) return "failure";

  const db = getFirebaseDb();

  try {
    if (password && user.email) {
      const cred = EmailAuthProvider.credential(user.email, password);
      await reauthenticateWithCredential(user, cred);
    }

    const notesSnap = await getDocs(
      collection(db, COLLECTIONS.students, profile.uid, "generated_notes"),
    );
    await Promise.all(notesSnap.docs.map((d) => deleteDoc(d.ref)));

    try {
      const analyticsQ = query(
        collection(db, COLLECTIONS.analytics),
        where("user_id", "==", profile.uid),
      );
      const analyticsSnap = await getDocs(analyticsQ);
      await Promise.all(analyticsSnap.docs.map((d) => deleteDoc(d.ref)));
    } catch {
      /* best-effort */
    }

    await deleteDoc(doc(db, COLLECTIONS.students, profile.uid));
    await deleteUser(user);
    return "success";
  } catch (err) {
    const code =
      err && typeof err === "object" && "code" in err
        ? String((err as { code: string }).code)
        : "";
    if (code === "auth/requires-recent-login") return "requiresReauth";
    return "failure";
  }
}
