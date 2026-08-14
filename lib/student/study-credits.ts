import { callFunction } from "@/lib/firebase/functions";
import { guestIds } from "@/lib/auth/guest";

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

function normalize(raw: GetStudyCreditsResult): StudyCredits {
  const used = Math.max(0, Math.floor(Number(raw.used) || 0));
  const total = Math.max(0, Math.floor(Number(raw.total) || FREE_TOTAL_GENERATION_LIMIT));
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

/**
 * Existing Cloud Function `getStudyCredits` — same source callOpenAI uses for free limits.
 * No backend changes.
 */
export async function fetchStudyCredits(options?: {
  guest?: boolean;
}): Promise<StudyCredits> {
  if (options?.guest) {
    const raw = await callFunction<
      { deviceId: string },
      GetStudyCreditsResult
    >(
      "getStudyCredits",
      { deviceId: guestIds.getDeviceId() },
      { requireAuth: false },
    );
    return normalize(raw ?? {});
  }

  const raw = await callFunction<
    Record<string, never>,
    GetStudyCreditsResult
  >("getStudyCredits", {}, { requireAuth: true });
  return normalize(raw ?? {});
}

export function formatStudyCreditsLabel(credits: StudyCredits): string {
  if (credits.isPremium) {
    return `${credits.used} / ${credits.total} used · ${credits.remaining} left`;
  }
  return `${credits.used} used · ${credits.remaining} left of ${credits.total}`;
}
