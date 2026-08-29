import { callFunction } from "@/lib/firebase/functions";
import { deviceFreeUsage, guestIds } from "@/lib/auth/guest";

/** Matches `FREE_TOTAL_GENERATION_LIMIT` in EduPlayce `functions/lib/index.js`. */
export const FREE_TOTAL_GENERATION_LIMIT = 5;

export type StudyCredits = {
  used: number;
  total: number;
  /** Generations left (free pool + rewards, or sub tokens + rewards for Pro). */
  remaining: number;
  isPremium: boolean;
  rewardCreditsRemaining: number;
  freeBaseLimit: number | null;
};

type GetStudyCreditsResult = {
  used?: number;
  total?: number;
  isPremium?: boolean;
  rewardCreditsRemaining?: number;
  freeBaseLimit?: number;
  remainingIncludingRewards?: number;
  subscriptionTokensGrant?: number;
  subscriptionTokensUsed?: number;
};

function normalize(
  raw: GetStudyCreditsResult,
  options?: { guest?: boolean },
): StudyCredits {
  const used = Math.max(0, Math.floor(Number(raw.used) || 0));
  const total = Math.max(
    0,
    Math.floor(Number(raw.total) || FREE_TOTAL_GENERATION_LIMIT),
  );
  const reward = Math.max(
    0,
    Math.floor(Number(raw.rewardCreditsRemaining) || 0),
  );
  const remaining =
    raw.remainingIncludingRewards != null
      ? Math.max(0, Math.floor(Number(raw.remainingIncludingRewards)))
      : Math.max(0, total - used);

  return {
    used,
    total,
    remaining,
    isPremium: raw.isPremium === true,
    rewardCreditsRemaining: reward,
    freeBaseLimit:
      typeof raw.freeBaseLimit === "number"
        ? raw.freeBaseLimit
        : raw.isPremium
          ? null
          : FREE_TOTAL_GENERATION_LIMIT,
  };
}

function accountFreeUsed(credits: StudyCredits): number {
  const rewards = credits.rewardCreditsRemaining ?? 0;
  const freeBase = credits.freeBaseLimit ?? FREE_TOTAL_GENERATION_LIMIT;
  return Math.min(
    freeBase,
    Math.max(0, credits.total - credits.remaining - rewards),
  );
}

/** Merge server device quota with persisted per-device usage on this browser. */
function withDeviceUsageFloor(credits: StudyCredits): StudyCredits {
  if (credits.isPremium) return credits;

  const freeBase = credits.freeBaseLimit ?? FREE_TOTAL_GENERATION_LIMIT;
  const serverUsed = Math.min(freeBase, credits.used);
  deviceFreeUsage.sync(serverUsed);

  const used = Math.min(freeBase, Math.max(serverUsed, deviceFreeUsage.get()));
  const remaining = Math.max(0, freeBase - used);

  return {
    ...credits,
    total: freeBase,
    used,
    remaining,
    rewardCreditsRemaining: 0,
    freeBaseLimit: freeBase,
  };
}

export function recordFreeGenerationUsed(): void {
  deviceFreeUsage.bump(FREE_TOTAL_GENERATION_LIMIT);
}

async function fetchDeviceFreeCredits(): Promise<StudyCredits> {
  const raw = await callFunction<
    { deviceId: string },
    GetStudyCreditsResult
  >(
    "getStudyCredits",
    { deviceId: guestIds.getDeviceId() },
    { requireAuth: false },
  );
  return withDeviceUsageFloor(normalize(raw ?? {}, { guest: true }));
}

/**
 * Free accounts: lifetime free pool is the higher of account usage and device usage.
 */
function mergeAccountWithDeviceUsage(
  account: StudyCredits,
  device: StudyCredits,
): StudyCredits {
  if (account.isPremium) return account;

  const rewards = account.rewardCreditsRemaining ?? 0;
  const freeBase = account.freeBaseLimit ?? FREE_TOTAL_GENERATION_LIMIT;
  const combinedFreeUsed = Math.min(
    freeBase,
    Math.max(accountFreeUsed(account), device.used, deviceFreeUsage.get()),
  );
  deviceFreeUsage.sync(combinedFreeUsed);

  const freeRemaining = Math.max(0, freeBase - combinedFreeUsed);
  const effectiveRemaining = freeRemaining + rewards;

  return {
    ...account,
    used: Math.max(0, account.total - effectiveRemaining),
    remaining: effectiveRemaining,
  };
}

/**
 * Existing Cloud Function `getStudyCredits` — same source callOpenAI uses for free limits.
 */
export async function fetchStudyCredits(options?: {
  guest?: boolean;
}): Promise<StudyCredits> {
  if (options?.guest) {
    return fetchDeviceFreeCredits();
  }

  const [raw, device] = await Promise.all([
    callFunction<Record<string, never>, GetStudyCreditsResult>(
      "getStudyCredits",
      {},
      { requireAuth: true },
    ),
    fetchDeviceFreeCredits().catch(() => null),
  ]);

  const account = normalize(raw ?? {});
  if (!account.isPremium) {
    deviceFreeUsage.sync(
      Math.max(deviceFreeUsage.get(), accountFreeUsed(account)),
    );
  }
  if (!device) {
    return account.isPremium ? account : mergeAccountWithDeviceUsage(
      account,
      withDeviceUsageFloor({
        used: 0,
        total: FREE_TOTAL_GENERATION_LIMIT,
        remaining: FREE_TOTAL_GENERATION_LIMIT,
        isPremium: false,
        rewardCreditsRemaining: 0,
        freeBaseLimit: FREE_TOTAL_GENERATION_LIMIT,
      }),
    );
  }
  return mergeAccountWithDeviceUsage(account, device);
}

export function formatStudyCreditsLabel(credits: StudyCredits): string {
  if (credits.isPremium) {
    return `${credits.used} / ${credits.total} used · ${credits.remaining} left`;
  }
  return `${credits.used} used · ${credits.remaining} left of ${credits.total}`;
}
