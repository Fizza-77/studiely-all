import { getFirebaseAuth } from "@/lib/firebase/client";
import { signInAnonymously } from "firebase/auth";
import {
  syncGuestTrialCredits,
  consumeGuestTrialCreditBeforeGenerate as consumeTrialCreditOnServer,
} from "@/lib/trial/guest-trial-cache";
import type { StudyCredits } from "@/lib/student/study-credits";

/**
 * Ensure an anonymous Firebase user exists for web trial callables.
 * Idempotent — safe to call on every guest page load.
 */
export async function ensureAnonymousGuestAuth(): Promise<void> {
  const auth = getFirebaseAuth();
  if (auth.currentUser?.isAnonymous) return;
  if (auth.currentUser && !auth.currentUser.isAnonymous) return;
  await signInAnonymously(auth);
}

export async function initGuestWebTrialSession(): Promise<StudyCredits> {
  await ensureAnonymousGuestAuth();
  return syncGuestTrialCredits();
}

/** Returns false if consume failed (no credits or CF error). */
export async function consumeGuestTrialCreditBeforeGenerate(): Promise<boolean> {
  try {
    await ensureAnonymousGuestAuth();
    await consumeTrialCreditOnServer();
    return true;
  } catch {
    return false;
  }
}
