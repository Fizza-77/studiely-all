/**
 * Best-effort reactor identity for blog reactions.
 * Prefer platform IP headers; fall back to a short-lived cookie id.
 * Do not trust raw client-supplied X-Forwarded-For alone for security-critical auth —
 * reactions remain gated by Turnstile on POST.
 */

import { createHash, randomUUID } from "crypto";
import type { NextRequest } from "next/server";

import { getTrustedClientIp } from "@/lib/security/client-ip";

const COOKIE_NAME = "studiely_reactor";

export function getClientIpFromHeaders(headers: Headers): string | null {
  return getTrustedClientIp(headers);
}

function cookieReactorId(req: NextRequest): string | null {
  const raw = req.cookies.get(COOKIE_NAME)?.value?.trim();
  if (!raw) return null;
  if (!/^[A-Za-z0-9_-]{8,64}$/.test(raw)) return null;
  return raw;
}

/**
 * Stable reactor id for API: trusted IP hash when available, else cookie UUID.
 */
export function resolveReactorId(req: NextRequest | Headers): string {
  const headers = req instanceof Headers ? req : req.headers;
  const ip = getTrustedClientIp(headers);
  if (ip) {
    return createHash("sha256").update(`reactor-ip:${ip}`).digest("hex").slice(0, 32);
  }
  if (!(req instanceof Headers)) {
    const fromCookie = cookieReactorId(req);
    if (fromCookie) return fromCookie;
  }
  return randomUUID().replace(/-/g, "").slice(0, 32);
}

export function reactorIdForSsr(headers: Headers): string | null {
  const ip = getTrustedClientIp(headers);
  if (!ip) return null;
  return createHash("sha256").update(`reactor-ip:${ip}`).digest("hex").slice(0, 32);
}

export { COOKIE_NAME as REACTOR_COOKIE_NAME };
