import { FIREBASE_PROJECT, FUNCTIONS_REGION } from "@/lib/config/constants";

/**
 * Resolve Cloud Run (run.app) URLs the same way Flutter does:
 * Remote Config key `callable_{functionName}_url`.
 *
 * cloudfunctions.net returns 404 for these 2nd-gen callables — do not use it first.
 */

type Cache = {
  fetchedAt: number;
  urls: Record<string, string>;
};

let cache: Cache | null = null;
const CACHE_TTL_MS = 5 * 60 * 1000;

/** Deployed from studiely_web/functions (codebase studiely-web). Set run.app URLs after first deploy. */
const STUDIELY_WEB_CALLABLES = new Set([
  "getWebTrialStatus",
  "bootstrapWebTrial",
  "consumeWebTrial",
  "sealWebTrialIp",
  "mergeWebTrialOnSignIn",
]);

/** Cloud Run URLs for studiely-web codebase (us-central1, same suffix as callOpenAI). */
const STUDIELY_WEB_FALLBACKS: Record<string, string> = {
  getWebTrialStatus: "https://getwebtrialstatus-tgu7j2etxq-uc.a.run.app",
  bootstrapWebTrial: "https://bootstrapwebtrial-tgu7j2etxq-uc.a.run.app",
  consumeWebTrial: "https://consumewebtrial-tgu7j2etxq-uc.a.run.app",
  sealWebTrialIp: "https://sealwebtrialip-tgu7j2etxq-uc.a.run.app",
  mergeWebTrialOnSignIn: "https://mergewebtrialonsignin-tgu7j2etxq-uc.a.run.app",
};

/** Fallbacks when RC has no key (verified live against Cloud Run). */
const HARDCODED_FALLBACKS: Record<string, string> = {
  sendVerificationOTP:
    "https://sendverificationotp-tgu7j2etxq-uc.a.run.app",
  verifyEmailOTP:
    "https://verifyemailotp-422350849829.asia-south1.run.app",
  sendPasswordReset: "https://sendpasswordreset-tgu7j2etxq-el.a.run.app",
  sendPasswordChangedEmail:
    "https://sendpasswordchangedemail-tgu7j2etxq-el.a.run.app",
  sendParentConsentEmail:
    "https://sendparentconsentemail-tgu7j2etxq-uc.a.run.app",
  callOpenAI: "https://callopenai-tgu7j2etxq-uc.a.run.app",
  callOpenAIGuest: "https://callopenaiguest-tgu7j2etxq-uc.a.run.app",
  callGemini: "https://callgemini-tgu7j2etxq-uc.a.run.app",
  callNylaSupport: "https://callnylasupport-tgu7j2etxq-uc.a.run.app",
  grantRewardedAdCredit:
    "https://grantrewardedadcredit-tgu7j2etxq-uc.a.run.app",
};

function cloudfunctionsNetUrl(functionName: string): string {
  return `https://${FUNCTIONS_REGION}-${FIREBASE_PROJECT.id}.cloudfunctions.net/${functionName}`;
}

async function fetchRemoteConfigCallableUrls(): Promise<Record<string, string>> {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
  const projectId =
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? FIREBASE_PROJECT.id;

  if (!apiKey || !appId) return {};

  const res = await fetch(
    `https://firebaseremoteconfig.googleapis.com/v1/projects/${projectId}/namespaces/firebase:fetch?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        appId,
        appInstanceId: "studiely-web-server",
      }),
      cache: "no-store",
    },
  );

  if (!res.ok) return {};

  const json = (await res.json()) as { entries?: Record<string, string> };
  const entries = json.entries ?? {};
  const urls: Record<string, string> = {};

  for (const [key, value] of Object.entries(entries)) {
    const trimmed = String(value ?? "").trim();
    if (!trimmed) continue;

    if (key.startsWith("callable_") && key.endsWith("_url")) {
      // callable_verifyEmailOTP_url → verifyEmailOTP
      const name = key.slice("callable_".length, -"_url".length);
      urls[name] = trimmed;
    } else if (/^https?:\/\//i.test(trimmed)) {
      // Alternate RC keys that are just the function name
      urls[key] = trimmed;
    }
  }

  return urls;
}

async function getUrlMap(): Promise<Record<string, string>> {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.urls;
  }
  try {
    const urls = await fetchRemoteConfigCallableUrls();
    cache = { fetchedAt: Date.now(), urls };
    return urls;
  } catch {
    return cache?.urls ?? {};
  }
}

/** Resolve upstream callable URL (RC → hardcoded → cloudfunctions.net last). */
export async function resolveCallableUpstreamUrl(
  functionName: string,
): Promise<string> {
  const map = await getUrlMap();
  const fromRc = map[functionName]?.trim();
  if (fromRc) return fromRc.replace(/\/+$/, "");

  if (STUDIELY_WEB_CALLABLES.has(functionName)) {
    const webFallback = STUDIELY_WEB_FALLBACKS[functionName];
    if (webFallback) return webFallback;
    return cloudfunctionsNetUrl(functionName);
  }

  const hardcoded = HARDCODED_FALLBACKS[functionName];
  if (hardcoded) return hardcoded;

  return cloudfunctionsNetUrl(functionName);
}
