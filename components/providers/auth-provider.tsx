"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { User } from "firebase/auth";

import { isFirebaseConfigured } from "@/lib/firebase/config";
import { guestMode } from "@/lib/auth/guest";
import type { AuthPhase, StudentDocSummary } from "@/lib/auth/types";

type AuthContextValue = {
  phase: AuthPhase;
  user: User | null;
  student: StudentDocSummary | null;
  error: string | null;
  firebaseReady: boolean;
  refreshPhase: () => Promise<void>;
  recheckEmailVerification: () => Promise<void>;
  enterGuestMode: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
  /** Delay Firebase Auth (iframe + SDK) until idle — use on marketing pages for LCP. */
  deferFirebase?: boolean;
};

const AuthContext = createContext<AuthContextValue>({
  phase: "initializing",
  user: null,
  student: null,
  error: null,
  firebaseReady: false,
  refreshPhase: async () => {},
  recheckEmailVerification: async () => {},
  enterGuestMode: () => {},
});

async function mapAuthError(err: unknown): Promise<string> {
  const { mapFirebaseError } = await import("@/lib/auth/service");
  return mapFirebaseError(err);
}

async function friendlyStorageError(raw: string): Promise<string> {
  const msg = raw.toLowerCase();
  if (
    msg.includes("database is closing") ||
    msg.includes("closing/hidden") ||
    msg.includes("indexeddb") ||
    msg.includes("idbdatabase")
  ) {
    return "Couldn’t finish loading your session. Please try again.";
  }
  if (msg.includes("quota") || msg.includes("space") || msg.includes("disk")) {
    return "Browser storage is full. Free some space, then reload.";
  }
  return mapAuthError(new Error(raw));
}

function phaseFromUser(
  user: User,
  student: StudentDocSummary | null,
): AuthPhase {
  if (student?.parentConsentPending) {
    return "studentPendingParentConsent";
  }
  if (user.emailVerified) {
    return "student";
  }
  return "studentUnverified";
}

async function resolvePhase(user: User | null): Promise<{
  phase: AuthPhase;
  student: StudentDocSummary | null;
  softError?: string | null;
}> {
  if (!user) {
    guestMode.enable();
    return { phase: "guest", student: null };
  }

  if (user.isAnonymous) {
    guestMode.enable();
    return { phase: "guest", student: null };
  }

  const {
    fetchStudentDoc,
    hasParentalConsent,
    isChildAccount,
    signOutUser,
  } = await import("@/lib/auth/service");

  await user.reload();

  let student: StudentDocSummary | null;
  try {
    student = await fetchStudentDoc(user.uid);
  } catch (err) {
    // IndexedDB / disk / network failures must NOT wipe a valid Auth session to guest.
    const message =
      err instanceof Error ? err.message : "Could not load profile from Firestore.";
    const soft = await friendlyStorageError(message);
    return {
      phase: phaseFromUser(user, null),
      student: null,
      softError: soft,
    };
  }

  if (!student) {
    await signOutUser();
    return { phase: "invalidUser", student: null };
  }

  if (isChildAccount(student) && !hasParentalConsent(student)) {
    await signOutUser();
    return { phase: "invalidUser", student: null };
  }

  guestMode.exit();
  return {
    phase: phaseFromUser(user, student),
    student,
  };
}

export function AuthProvider({
  children,
  deferFirebase = false,
}: AuthProviderProps) {
  const [phase, setPhase] = useState<AuthPhase>("initializing");
  const [user, setUser] = useState<User | null>(null);
  const [student, setStudent] = useState<StudentDocSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [firebaseReady, setFirebaseReady] = useState(false);

  const applyUser = useCallback(async (next: User | null) => {
    try {
      const resolved = await resolvePhase(next);
      if (resolved.phase === "invalidUser") {
        guestMode.enable();
        setUser(null);
        setStudent(null);
        setPhase("guest");
        setError(null);
        return;
      }
      setUser(next);
      setStudent(resolved.student);
      setPhase(resolved.phase);
      setError(resolved.softError ?? null);
    } catch (err) {
      const message = await friendlyStorageError(
        err instanceof Error ? err.message : "Auth failed",
      );
      // Keep Firebase Auth user if present — only go guest when there is no session.
      if (next) {
        setUser(next);
        setStudent(null);
        setPhase(phaseFromUser(next, null));
        setError(message);
      } else {
        guestMode.enable();
        setPhase("guest");
        setUser(null);
        setStudent(null);
        setError(message);
      }
    }
  }, []);

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setError("Firebase env is not configured (.env.local).");
      setFirebaseReady(true);
      setPhase("guest");
      return;
    }

    let cancelled = false;
    let unsub = () => {};
    let timeout = 0;
    let idleId: number | undefined;
    let deferTimer = 0;

    const failStart = async (err: unknown) => {
      if (cancelled) return;
      const message = await friendlyStorageError(
        err instanceof Error ? err.message : "Auth failed to initialize",
      );
      guestMode.enable();
      setFirebaseReady(true);
      setPhase("guest");
      setError(message);
    };

    const start = async () => {
      if (cancelled) return;
      const [{ onAuthStateChanged }, { getFirebaseAuth }, { completeOAuthRedirectLogin }] =
        await Promise.all([
          import("firebase/auth"),
          import("@/lib/firebase/client"),
          import("@/lib/auth/service"),
        ]);
      if (cancelled) return;

      const auth = getFirebaseAuth();
      setFirebaseReady(true);

      // Finish Google/Apple redirect sign-in (PWA / mobile) before relying on auth state.
      void completeOAuthRedirectLogin().catch(async (err) => {
        if (cancelled) return;
        setError(await mapAuthError(err));
      });

      unsub = onAuthStateChanged(auth, (next) => {
        void (async () => {
          if (cancelled) return;
          setPhase("initializing");
          await applyUser(next);
        })();
      });

      timeout = window.setTimeout(() => {
        if (cancelled) return;
        // Never force guest while Firebase still has a signed-in user (slow Firestore).
        if (auth.currentUser) return;
        setPhase((current) => {
          if (current === "initializing") {
            guestMode.enable();
            return "guest";
          }
          return current;
        });
      }, 8000);
    };

    if (deferFirebase) {
      // Paint marketing LCP first; treat as guest until Auth catches up.
      guestMode.enable();
      setPhase("guest");
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => {
          void start().catch(failStart);
        }, { timeout: 4000 });
      } else {
        deferTimer = window.setTimeout(() => {
          void start().catch(failStart);
        }, 2500);
      }
    } else {
      void start().catch(failStart);
    }

    return () => {
      cancelled = true;
      unsub();
      window.clearTimeout(timeout);
      if (idleId != null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (deferTimer) window.clearTimeout(deferTimer);
    };
  }, [applyUser, deferFirebase]);

  const refreshPhase = useCallback(async () => {
    const { getFirebaseAuth } = await import("@/lib/firebase/client");
    await applyUser(getFirebaseAuth().currentUser);
  }, [applyUser]);

  const recheckEmailVerification = useCallback(async () => {
    const { getFirebaseAuth } = await import("@/lib/firebase/client");
    const current = getFirebaseAuth().currentUser;
    if (!current) return;
    await current.reload();
    await current.getIdToken(true);
    await applyUser(current);
  }, [applyUser]);

  const enterGuestMode = useCallback(() => {
    void (async () => {
      try {
        const { initGuestWebTrialSession } = await import(
          "@/lib/trial/guest-trial-session"
        );
        guestMode.enable();
        setStudent(null);
        setPhase("guest");
        setError(null);
        await initGuestWebTrialSession();
        const { getFirebaseAuth } = await import("@/lib/firebase/client");
        setUser(getFirebaseAuth().currentUser);
      } catch {
        guestMode.enable();
        setUser(null);
        setStudent(null);
        setPhase("guest");
        setError(null);
      }
    })();
  }, []);

  useEffect(() => {
    if (phase !== "guest") return;
    const onVisible = () => {
      if (document.visibilityState !== "visible") return;
      void refreshPhase();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [phase, refreshPhase]);

  const value = useMemo(
    () => ({
      phase,
      user,
      student,
      error,
      firebaseReady,
      refreshPhase,
      recheckEmailVerification,
      enterGuestMode,
    }),
    [
      phase,
      user,
      student,
      error,
      firebaseReady,
      refreshPhase,
      recheckEmailVerification,
      enterGuestMode,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
