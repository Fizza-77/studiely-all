import { NextResponse } from "next/server";

import { AI_PROXY_BASE_URL } from "@/lib/config/constants";
import { getTrustedClientIp } from "@/lib/security/client-ip";
import { rateLimitTake } from "@/lib/security/rate-limit";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

/** Only paths the Studiely web app legitimately calls today. */
const ALLOWED_AI_PATHS = new Set(["quiz-feedback"]);

function normalizeAiPath(segments: string[]): string | null {
  if (!segments?.length) return null;
  // Reject traversal / empty / encoded dots
  for (const seg of segments) {
    const decoded = decodeURIComponent(seg);
    if (!decoded || decoded.includes("..") || decoded.includes("/") || decoded.includes("\\")) {
      return null;
    }
  }
  const joined = segments.map((s) => encodeURIComponent(decodeURIComponent(s))).join("/");
  return ALLOWED_AI_PATHS.has(decodeURIComponent(joined)) ? joined : null;
}

function upstreamAiUrl(path: string): string {
  const base = (
    process.env.AI_PROXY_BASE_URL ||
    process.env.NEXT_PUBLIC_AI_PROXY_BASE_URL ||
    AI_PROXY_BASE_URL
  ).replace(/\/+$/, "");
  return `${base}/api/ai/${path}`;
}

/**
 * Same-origin BFF for the Vercel AI proxy — allowlisted paths only.
 */
export async function POST(request: Request, context: RouteContext) {
  const { path: segments } = await context.params;
  const path = normalizeAiPath(segments ?? []);
  if (!path) {
    return NextResponse.json(
      { error: { message: "Not found", status: "NOT_FOUND" } },
      { status: 404 },
    );
  }

  const ip = getTrustedClientIp(request.headers) || "unknown";
  const limited = rateLimitTake(`ai:${path}:${ip}`, 30, 60 * 60 * 1000);
  if (!limited.ok) {
    return NextResponse.json(
      { error: { message: "Too many requests. Please try again later.", status: "RESOURCE_EXHAUSTED" } },
      { status: 429, headers: { "Retry-After": String(limited.retryAfterSec) } },
    );
  }

  const auth = request.headers.get("authorization");
  if (path === "quiz-feedback") {
    if (!auth?.startsWith("Bearer ") || auth.length < 20) {
      return NextResponse.json(
        { error: { message: "Authentication required.", status: "UNAUTHENTICATED" } },
        { status: 401 },
      );
    }
  }

  let body: string;
  try {
    body = await request.text();
  } catch {
    return NextResponse.json(
      { error: { message: "Invalid body", status: "INVALID_ARGUMENT" } },
      { status: 400 },
    );
  }
  if (body.length > 100_000) {
    return NextResponse.json(
      { error: { message: "Request too large", status: "INVALID_ARGUMENT" } },
      { status: 413 },
    );
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json; charset=utf-8",
  };
  if (auth?.startsWith("Bearer ")) {
    headers.Authorization = `Bearer ${auth.slice(7).trim()}`;
  }

  try {
    const upstream = await fetch(upstreamAiUrl(path), {
      method: "POST",
      headers,
      body,
      cache: "no-store",
    });
    const text = await upstream.text();
    const contentType =
      upstream.headers.get("content-type") || "application/json; charset=utf-8";
    return new NextResponse(text, {
      status: upstream.status,
      headers: { "Content-Type": contentType },
    });
  } catch (err) {
    console.error("[api/ai] upstream error", err instanceof Error ? err.message : err);
    return NextResponse.json(
      {
        error: {
          message: "AI service temporarily unavailable.",
          status: "INTERNAL",
        },
      },
      { status: 502 },
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
