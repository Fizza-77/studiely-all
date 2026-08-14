import { NextResponse } from "next/server";

import { AI_PROXY_BASE_URL } from "@/lib/config/constants";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

function upstreamAiUrl(pathSegments: string[]): string {
  const base = (
    process.env.AI_PROXY_BASE_URL ||
    process.env.NEXT_PUBLIC_AI_PROXY_BASE_URL ||
    AI_PROXY_BASE_URL
  ).replace(/\/+$/, "");
  const path = pathSegments.map(encodeURIComponent).join("/");
  return `${base}/api/ai/${path}`;
}

/**
 * Same-origin BFF for the existing Vercel AI proxy.
 * Avoids browser CORS (localhost / LAN IP / custom domains).
 */
export async function POST(request: Request, context: RouteContext) {
  const { path } = await context.params;
  if (!path?.length) {
    return NextResponse.json(
      { error: { message: "Missing AI path", status: "INVALID_ARGUMENT" } },
      { status: 400 },
    );
  }

  const url = upstreamAiUrl(path);
  const headers: Record<string, string> = {
    "Content-Type": "application/json; charset=utf-8",
  };
  const auth = request.headers.get("authorization");
  if (auth) headers.Authorization = auth;

  let body: string;
  try {
    body = await request.text();
  } catch {
    return NextResponse.json(
      { error: { message: "Invalid body", status: "INVALID_ARGUMENT" } },
      { status: 400 },
    );
  }

  try {
    const upstream = await fetch(url, {
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
    const message =
      err instanceof Error ? err.message : "Upstream AI proxy unreachable";
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

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
