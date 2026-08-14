import { getFirebaseAuth } from "./client";
import { FIREBASE_PROJECT, FUNCTIONS_REGION } from "@/lib/config/constants";
import { withBasePath } from "@/lib/config/base-path";

/**
 * Default callable URL (2nd gen cloudfunctions.net), same as Flutter helper.
 * Prefer the Next.js proxy from the browser to avoid CORS on localhost / custom domains.
 */
export function callableUrl(functionName: string): string {
  return `https://${FUNCTIONS_REGION}-${FIREBASE_PROJECT.id}.cloudfunctions.net/${functionName}`;
}

function proxyPath(functionName: string): string {
  return withBasePath(`/api/callable/${encodeURIComponent(functionName)}`);
}

function callableErrorMessage(
  functionName: string,
  status: number,
  json: { error?: { message?: string; status?: string } },
): string {
  return (
    json.error?.message ??
    `Callable ${functionName} failed with HTTP ${status}`
  );
}

/**
 * Invoke an existing Cloud Function callable via same-origin Next.js proxy.
 * Does not modify backend — only forwards to deployed Flutter callables.
 */
export async function callFunction<
  TData extends Record<string, unknown>,
  TResult = unknown,
>(
  functionName: string,
  data: TData,
  options?: { requireAuth?: boolean; urlOverride?: string },
): Promise<TResult> {
  return callCallableWithHttp<TData, TResult>(functionName, data, options);
}

/**
 * HTTP callable protocol (Flutter `callCallableWithHttp` parity).
 * Browser → `/api/callable/{name}` (no CORS) → Cloud Functions.
 * Optional `urlOverride` still goes direct (e.g. RC run.app URL) — may hit CORS.
 */
export async function callCallableWithHttp<
  TData extends Record<string, unknown>,
  TResult = Record<string, unknown>,
>(
  functionName: string,
  data: TData,
  options?: { requireAuth?: boolean; urlOverride?: string },
): Promise<TResult> {
  const requireAuth = options?.requireAuth !== false;
  const url = options?.urlOverride ?? proxyPath(functionName);

  const headers: Record<string, string> = {
    "Content-Type": "application/json; charset=utf-8",
  };

  if (requireAuth) {
    const user = getFirebaseAuth().currentUser;
    if (user) {
      const idToken = await user.getIdToken(true);
      headers.Authorization = `Bearer ${idToken}`;
    }
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ data }),
  });

  const json = (await response.json().catch(() => ({}))) as {
    result?: TResult;
    error?: { message?: string; status?: string; code?: number };
  };

  if (!response.ok) {
    throw new Error(callableErrorMessage(functionName, response.status, json));
  }

  // Some callables return { result: … }; empty success may be { result: null }
  if (!("result" in json)) {
    throw new Error(`Callable ${functionName} returned no result`);
  }

  return json.result as TResult;
}
