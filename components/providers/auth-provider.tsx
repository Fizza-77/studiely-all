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
import { onAuthStateChanged, type User } from "firebase/auth";

import { isFirebaseConfigured } from "@/lib/firebase/config";
import { getFirebaseAuth } from "@/lib/firebase/client";
import { guestMode } from "@/lib/auth/guest";
import {
  fetchStudentDoc,
  hasParentalConsent,
  isChildAccount,
  completeGoogleRedirectLogin,
  mapFirebaseError,
  signOutUser,
} from "@/lib/auth/service";
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

function friendlyStorageError(raw: string): string {
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
  return mapFirebaseError(new Error(raw));
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

  await user.reload();

  let student: StudentDocSummary | null;
  try {
    student = await fetchStudentDoc(user.uid);
  } catch (err) {
    // IndexedDB / disk / network failures must NOT wipe a valid Auth session to guest.
    const message =
      err instanceof Error ? err.message : "Could not load profile from Firestore.";
    const soft = friendlyStorageError(message);
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

export function AuthProvider({ children }: { children: ReactNode }) {
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
      const message = friendlyStorageError(
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
    const auth = getFirebaseAuth();
    setFirebaseReady(true);

    // Finish Google redirect sign-in (PWA / mobile) before relying on auth state.
    void completeGoogleRedirectLogin().catch((err) => {
      if (cancelled) return;
      setError(mapFirebaseError(err));
    });

    const unsub = onAuthStateChanged(auth, (next) => {
      void (async () => {
        if (cancelled) return;
        setPhase("initializing");
        await applyUser(next);
      })();
    });

    const timeout = window.setTimeout(() => {
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

    return () => {
      cancelled = true;
      unsub();
      window.clearTimeout(timeout);
    };
  }, [applyUser]);

  const refreshPhase = useCallback(async () => {
    await applyUser(getFirebaseAuth().currentUser);
  }, [applyUser]);

  const recheckEmailVerification = useCallback(async () => {
    const current = getFirebaseAuth().currentUser;
    if (!current) return;
    await current.reload();
    await current.getIdToken(true);
    await applyUser(current);
  }, [applyUser]);

  const enterGuestMode = useCallback(() => {
    guestMode.enable();
    setUser(null);
    setStudent(null);
    setPhase("guest");
    setError(null);
  }, []);

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
