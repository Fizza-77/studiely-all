import { NextResponse } from "next/server";

import { resolveCallableUpstreamUrl } from "@/lib/firebase/callable-urls";

/**
 * Allowlist of existing Cloud Functions callables used by the Flutter app.
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
]);

type RouteContext = {
  params: Promise<{ name: string }>;
};

/**
 * Same-origin BFF proxy for Firebase HTTPS callables.
 * Resolves Cloud Run (run.app) URLs via Remote Config — same as Flutter.
 * Does not modify backend Functions.
 */
export async function POST(request: Request, context: RouteContext) {
  const { name } = await context.params;

  if (!ALLOWED_CALLABLES.has(name)) {
    return NextResponse.json(
      {
        error: {
          message: `Callable "${name}" is not allowed`,
          status: "INVALID_ARGUMENT",
        },
      },
      { status: 400 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
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

  const url = await resolveCallableUpstreamUrl(name);
  const headers: Record<string, string> = {
    "Content-Type": "application/json; charset=utf-8",
  };

  const auth = request.headers.get("authorization");
  if (auth) headers.Authorization = auth;

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
      return NextResponse.json(
        {
          error: {
            message: `Upstream non-JSON from ${url} (HTTP ${upstream.status})`,
            status: "INTERNAL",
          },
        },
        { status: 502 },
      );
    }

    return NextResponse.json(json, { status: upstream.status });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Proxy request failed";
    return NextResponse.json(
      {
        error: {
          message: `${message} (url=${url})`,
          status: "INTERNAL",
        },
      },
      { status: 502 },
    );
  }
}
