import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Prefer apex host so www / http variants do not compete in Search Console. */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  if (host === "www.studiely.com") {
    const url = request.nextUrl.clone();
    url.host = "studiely.com";
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip Next internals and static assets; still run for HTML/document routes.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};
