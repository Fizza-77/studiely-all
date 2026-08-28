/**
 * Client IP for rate limiting.
 * Prefer platform headers when the reverse proxy is trusted (VPS/nginx, Vercel).
 * Never trust a client-spoofable first XFF hop alone without a known proxy.
 */

export function getTrustedClientIp(headers: Headers): string | null {
  const vercel = headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim();
  if (vercel) return vercel.slice(0, 64);

  const realIp = headers.get("x-real-ip")?.trim();
  if (realIp) return realIp.slice(0, 64);

  // Last resort: first XFF hop (requires trusted reverse proxy that overwrites/sets this).
  const xf = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (xf) return xf.slice(0, 64);

  return null;
}
