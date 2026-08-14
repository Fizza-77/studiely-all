import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getFunctions, type Functions } from "firebase/functions";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getRemoteConfig, type RemoteConfig } from "firebase/remote-config";

import { getFirebaseClientConfig } from "./config";
import { FUNCTIONS_REGION } from "@/lib/config/constants";

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;
let functions: Functions | undefined;
let storage: FirebaseStorage | undefined;
let remoteConfig: RemoteConfig | undefined;

/**
 * Singleton Firebase client (browser only).
 * Read-only against the live project — no Admin SDK, no rule changes.
 */
export function getFirebaseApp(): FirebaseApp {
  if (typeof window === "undefined") {
    throw new Error("Firebase client SDK must only be used in the browser.");
  }
  if (!app) {
    app = getApps().length ? getApp() : initializeApp(getFirebaseClientConfig());
  }
  return app;
}

export function getFirebaseAuth(): Auth {
  if (!auth) auth = getAuth(getFirebaseApp());
  return auth;
}

export function getFirebaseDb(): Firestore {
  if (!db) db = getFirestore(getFirebaseApp());
  return db;
}

export function getFirebaseFunctions(): Functions {
  if (!functions) {
    functions = getFunctions(getFirebaseApp(), FUNCTIONS_REGION);
  }
  return functions;
}

export function getFirebaseStorage(): FirebaseStorage {
  if (!storage) storage = getStorage(getFirebaseApp());
  return storage;
}

export function getFirebaseRemoteConfig(): RemoteConfig {
  if (!remoteConfig) {
    remoteConfig = getRemoteConfig(getFirebaseApp());
    // Match Flutter defaults: short fetch in dev, longer in prod.
    remoteConfig.settings = {
      minimumFetchIntervalMillis:
        process.env.NODE_ENV === "development" ? 60_000 : 3_600_000,
      fetchTimeoutMillis: 60_000,
    };
  }
  return remoteConfig;
}
