/**
 * Public app constants. Safe for the browser.
 * Never put API keys (OpenAI, Gemini, Resend, Stripe secrets) here.
 */

export const APP_DISPLAY_NAME = "Studiely";
export const APP_PACKAGE_NAME = "Eduplayce";

export const FIREBASE_PROJECT = {
  name: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_NAME ?? "Eduplayce",
  id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "eduplayce-5e68d",
  number: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_NUMBER ?? "422350849829",
} as const;

/** Must match Cloud Functions deploy region used by the Flutter app. */
export const FUNCTIONS_REGION =
  process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_REGION ?? "us-central1";

/**
 * Existing Vercel AI proxy used by Flutter.
 * Auth: Firebase ID token (Bearer) or guest deviceId/sessionId — same as mobile.
 * API keys live only on that server / Cloud Functions secrets.
 */
export const AI_PROXY_BASE_URL =
  process.env.NEXT_PUBLIC_AI_PROXY_BASE_URL ??
  "https://studiely-new.vercel.app";

/** Firestore collection names — mirror Flutter; do not invent new schemas. */
export const COLLECTIONS = {
  students: "Students",
  parents: "Parents",
  analytics: "analytics",
  supportRequests: "support_requests",
} as const;

/** Marketing legal pages only (same-origin). */
export const LEGAL_URLS = {
  privacy: "/privacy-policy",
  privacyApple: "/legal/privacy-policy-apple",
  privacyGoogle: "/legal/privacy-policy",
  terms: "/terms-of-service",
  cookie: "/cookie-policy",
  acceptableUse: "/acceptable-use",
  disclaimer: "/disclaimer",
  refund: "/refund-payments-policy",
} as const;

export const SUPPORT_SUBJECTS = [
  "General",
  "Account",
  "Billing",
  "Technical",
  "Other",
] as const;
