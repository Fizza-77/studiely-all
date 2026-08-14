/**
 * Barrel for Firebase client helpers.
 * Browser-only client SDK. Callables go through /api/callable (CORS-safe).
 * Never import Admin SDK here.
 */
export { getFirebaseClientConfig, isFirebaseConfigured } from "./config";
export {
  getFirebaseApp,
  getFirebaseAuth,
  getFirebaseDb,
  getFirebaseFunctions,
  getFirebaseStorage,
  getFirebaseRemoteConfig,
} from "./client";
export {
  callableUrl,
  callFunction,
  callCallableWithHttp,
} from "./functions";
