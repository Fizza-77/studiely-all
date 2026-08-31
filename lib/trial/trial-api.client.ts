export type WebTrialStatus = {
  configured: boolean;
  cap: number;
  totalUsed: number;
  remaining: number;
};

const FAIL_CLOSED: WebTrialStatus = {
  configured: false,
  cap: 5,
  totalUsed: 5,
  remaining: 0,
};

export async function fetchWebTrialStatusFromServer(): Promise<WebTrialStatus> {
  try {
    const { callFunction } = await import("@/lib/firebase/functions");
    const result = await callFunction<Record<string, never>, WebTrialStatus>(
      "getWebTrialStatus",
      {},
      { requireAuth: false },
    );
    if (!result || result.configured === false) return FAIL_CLOSED;
    return {
      configured: true,
      cap: Number(result.cap) || 5,
      totalUsed: Math.max(0, Math.floor(Number(result.totalUsed) || 0)),
      remaining: Math.max(0, Math.floor(Number(result.remaining) || 0)),
    };
  } catch {
    return FAIL_CLOSED;
  }
}

export async function bootstrapWebTrialCredits(): Promise<WebTrialStatus> {
  try {
    const { callFunction } = await import("@/lib/firebase/functions");
    const result = await callFunction<Record<string, never>, WebTrialStatus>(
      "bootstrapWebTrial",
      {},
      { requireAuth: true },
    );
    if (!result || result.configured === false) return FAIL_CLOSED;
    return result;
  } catch {
    return FAIL_CLOSED;
  }
}

export async function consumeWebTrialCreditOnServer(): Promise<WebTrialStatus> {
  const maxAttempts = 3;
  let lastError: unknown;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    try {
      const { callFunction } = await import("@/lib/firebase/functions");
      const result = await callFunction<Record<string, never>, WebTrialStatus>(
        "consumeWebTrial",
        {},
        { requireAuth: true },
      );
      if (!result || result.configured === false) return FAIL_CLOSED;
      return result;
    } catch (err) {
      lastError = err;
      if (attempt < maxAttempts - 1) {
        await new Promise((r) => setTimeout(r, 250 * (attempt + 1)));
      }
    }
  }
  throw lastError instanceof Error ? lastError : new Error("consumeWebTrial failed");
}

export async function sealWebTrialIpOnServer(): Promise<void> {
  try {
    const { callFunction } = await import("@/lib/firebase/functions");
    await callFunction("sealWebTrialIp", {}, { requireAuth: true });
  } catch {
    /* best-effort */
  }
}

export async function mergeWebTrialOnSignIn(deviceId: string): Promise<void> {
  try {
    const { callFunction } = await import("@/lib/firebase/functions");
    await callFunction("mergeWebTrialOnSignIn", { deviceId }, { requireAuth: true });
  } catch {
    /* best-effort — don't block sign-in */
  }
}
