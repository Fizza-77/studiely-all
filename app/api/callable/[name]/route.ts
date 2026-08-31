import { NextResponse } from "next/server";

import { resolveCallableUpstreamUrl } from "@/lib/firebase/callable-urls";
import { getTrustedClientIp } from "@/lib/security/client-ip";
import { rateLimitTake } from "@/lib/security/rate-limit";

/**
 * Allowlist of existing Cloud Functions callables used by the Flutter/web apps.
 * Do not add Admin/secret endpoints here.
 */
const ALLOWED_CALLABLES = new Set([
  "sendPasswordReset",
  "sendPasswordChangedEmail",
  "sendVerificationOTP",
  "verifyEmailOTP",
  "sendParentConsentEmail",
  "callOpenAI",
  "callOpenAIGuest",
  "callGemini",
  "callNylaSupport",
  "getWrittenResponseFeedback",
  "generateWritingTask",
  "getWritingPracticeFeedback",
  "getWritingExamSimulationFeedback",
  "verifyAndGrantSubscription",
  "getStudyCredits",
  "getWebProPricingQuote",
  "createPayPalProAccessOrder",
  "finalizePayPalProAccessOrder",
  "mergeGuestProfileOnLogin",
  // Studiely web-only functions (codebase: studiely-web — deploy from studiely_web/functions)
  "getWebTrialStatus",
  "bootstrapWebTrial",
  "consumeWebTrial",
  "sealWebTrialIp",
  "mergeWebTrialOnSignIn",
]);

const AUTH_REQUIRED = new Set([
  "callOpenAI",
  "getWrittenResponseFeedback",
  "generateWritingTask",
  "getWritingPracticeFeedback",
  "getWritingExamSimulationFeedback",
  "verifyAndGrantSubscription",
  "createPayPalProAccessOrder",
  "finalizePayPalProAccessOrder",
  "mergeGuestProfileOnLogin",
  "bootstrapWebTrial",
  "consumeWebTrial",
  "sealWebTrialIp",
  "mergeWebTrialOnSignIn",
  "sendPasswordChangedEmail",
  "sendVerificationOTP",
  "verifyEmailOTP",
  "sendParentConsentEmail",
]);

const HOUR_MS = 60 * 60 * 1000;

/** Per-callable hourly limits (read-light callables get higher caps). */
const CALLABLE_HOURLY_LIMITS: Record<string, number> = {
  getStudyCredits: 300,
  getWebTrialStatus: 300,
  callOpenAIGuest: 40,
  consumeWebTrial: 40,
  sendPasswordReset: 15,
};

const DEFAULT_CALLABLE_HOURLY_LIMIT = 60;

function callableRateLimitKey(
  name: string,
  ip: string,
  data: unknown,
): string {
  if (name === "getStudyCredits") {
    if (typeof data === "object" && data !== null && "deviceId" in data) {
      const deviceId = String(
        (data as { deviceId?: unknown }).deviceId ?? "",
      ).trim();
      if (deviceId) {
        return `callable:${name}:device:${deviceId.slice(0, 80)}`;
      }
    }
  }
  return `callable:${name}:${ip}`;
}

type RouteContext = {
  params: Promise<{ name: string }>;
};

export async function POST(request: Request, context: RouteContext) {
  const { name } = await context.params;

  if (!ALLOWED_CALLABLES.has(name)) {
    return NextResponse.json(
      {
        error: {
          message: "Callable is not allowed",
          status: "INVALID_ARGUMENT",
        },
      },
      { status: 400 },
    );
  }

  const ip = getTrustedClientIp(request.headers) || "unknown";

  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 400_000) {
      return NextResponse.json(
        { error: { message: "Request too large", status: "INVALID_ARGUMENT" } },
        { status: 413 },
      );
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      {
        error: {
          message: "Invalid JSON body",
          status: "INVALID_ARGUMENT",
        },
      },
      { status: 400 },
    );
  }

  if (typeof body !== "object" || body === null || !("data" in body)) {
    return NextResponse.json(
      {
        error: {
          message: 'Body must be { "data": … }',
          status: "INVALID_ARGUMENT",
        },
      },
      { status: 400 },
    );
  }

  const requestData = (body as { data: unknown }).data;

  if (process.env.NODE_ENV !== "development") {
    const limit =
      CALLABLE_HOURLY_LIMITS[name] ?? DEFAULT_CALLABLE_HOURLY_LIMIT;
    const limited = rateLimitTake(
      callableRateLimitKey(name, ip, requestData),
      limit,
      HOUR_MS,
    );
    if (!limited.ok) {
      return NextResponse.json(
        {
          error: {
            message: "Too many requests. Please try again later.",
            status: "RESOURCE_EXHAUSTED",
          },
        },
        {
          status: 429,
          headers: { "Retry-After": String(limited.retryAfterSec) },
        },
      );
    }
  }

  const auth = request.headers.get("authorization");
  if (AUTH_REQUIRED.has(name)) {
    if (!auth?.startsWith("Bearer ") || auth.length < 20) {
      return NextResponse.json(
        {
          error: {
            message: "Authentication required",
            status: "UNAUTHENTICATED",
          },
        },
        { status: 401 },
      );
    }
  }

  const url = await resolveCallableUpstreamUrl(name);
  const headers: Record<string, string> = {
    "Content-Type": "application/json; charset=utf-8",
  };
  if (auth?.startsWith("Bearer ")) {
    headers.Authorization = `Bearer ${auth.slice(7).trim()}`;
  }

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const text = await upstream.text();
    let json: unknown;
    try {
      json = text ? JSON.parse(text) : {};
    } catch {
      console.error("[callable] upstream non-JSON", name, upstream.status);
      return NextResponse.json(
        {
          error: {
            message: "Upstream service error",
            status: "INTERNAL",
          },
        },
        { status: 502 },
      );
    }

    return NextResponse.json(json, { status: upstream.status });
  } catch (err) {
    console.error(
      "[callable] proxy failed",
      name,
      err instanceof Error ? err.message : "unknown",
    );
    return NextResponse.json(
      {
        error: {
          message: "Service temporarily unavailable",
          status: "INTERNAL",
        },
      },
      { status: 502 },
    );
  }
}
