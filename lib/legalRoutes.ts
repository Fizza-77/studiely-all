/**
 * Marketing-site paths for legal & compliance documents (aligned with Footer).
 * Website policies are Skyen Systems Pty Ltd. App-store policies stay with
 * Skyen Solutions (Qismat Ventures W.L.L.).
 */
export const LEGAL_ROUTES = {
  privacyPolicy: "/privacy-policy",
  privacyPolicyApple: "/legal/privacy-policy-apple",
  privacyPolicyGoogle: "/legal/privacy-policy",
  termsOfService: "/terms-of-service",
  cookiePolicy: "/cookie-policy",
  acceptableUse: "/acceptable-use",
  acceptableUsePolicy: "/acceptable-use-policy",
  disclaimer: "/disclaimer",
  refundPaymentsPolicy: "/refund-payments-policy",
} as const;

export const complianceLinkClass =
  "text-teal hover:text-teal-dk underline underline-offset-2";
