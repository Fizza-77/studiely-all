"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { onAuthStateChanged, type User } from "firebase/auth";

import { isFirebaseConfigured } from "@/lib/firebase/config";
import { getFirebaseAuth } from "@/lib/firebase/client";

type FirebaseStatus = "idle" | "ready" | "error";

type FirebaseContextValue = {
  status: FirebaseStatus;
  error: string | null;
  user: User | null;
  authReady: boolean;
};

const FirebaseContext = createContext<FirebaseContextValue>({
  status: "idle",
  error: null,
  user: null,
  authReady: false,
});

export function FirebaseProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<FirebaseStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setStatus("error");
      setError("Firebase env is not configured (.env.local).");
      setAuthReady(true);
      return;
    }

    try {
      const auth = getFirebaseAuth();
      setStatus("ready");

      const unsub = onAuthStateChanged(
        auth,
        (next) => {
          setUser(next);
          setAuthReady(true);
        },
        (err) => {
          setError(err.message);
          setStatus("error");
          setAuthReady(true);
        },
      );

      return () => unsub();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Firebase init failed");
      setAuthReady(true);
    }
  }, []);

  const value = useMemo(
    () => ({ status, error, user, authReady }),
    [status, error, user, authReady],
  );

  return (
    <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
  );
}

export function useFirebase() {
  return useContext(FirebaseContext);
}
