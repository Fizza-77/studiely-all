/**
 * Web rewarded ads — EduPlayce `RewardedAdService` behaviour on the web.
 *
 * EduPlayce mobile uses AdMob (`ca-app-pub-…` unit IDs, default `AdRequest()`).
 * AdMob does not run in the browser, so web uses Google Publisher Tag rewarded
 * slots, then the same `grantRewardedAdCredit` callable (+ Firestore fallback).
 *
 * No AdMob/OpenAI-style API key is required. A GAM web rewarded unit path is
 * optional (`NEXT_PUBLIC_GAM_REWARDED_AD_UNIT`). EduPlayce AdMob IDs cannot be
 * pasted here — they only work in the Android/iOS apps.
 */

import { doc, increment, setDoc } from "firebase/firestore";

import { COLLECTIONS } from "@/lib/config/constants";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase/client";
import { callFunction } from "@/lib/firebase/functions";
import { FREE_TOTAL_GENERATION_LIMIT } from "@/lib/student/study-credits";

/** Google's official GPT rewarded sample (same role as AdMob test unit IDs). */
const DEFAULT_REWARDED_AD_UNIT = "/22639388115/rewarded_web_example";

export const REWARDED_AD_UNIT_PATH =
  process.env.NEXT_PUBLIC_GAM_REWARDED_AD_UNIT?.trim() ||
  DEFAULT_REWARDED_AD_UNIT;

type GptSlot = {
  addService: (service: GptPubAds) => GptSlot;
};

type RewardedSlotReadyEvent = {
  slot: GptSlot;
  makeRewardedVisible: () => void;
};

type SlotEvent = {
  slot: GptSlot;
  isEmpty?: boolean;
};

type GptPubAds = {
  addEventListener: (event: string, handler: (event: unknown) => void) => void;
  removeEventListener: (
    event: string,
    handler: (event: unknown) => void,
  ) => void;
};

type Gpt = {
  cmd: Array<() => void>;
  pubads: () => GptPubAds;
  enums?: { OutOfPageFormat?: { REWARDED?: unknown } };
  defineOutOfPageSlot: (adUnitPath: string, format: unknown) => GptSlot | null;
  enableServices: () => void;
  display: (slot: GptSlot) => void;
  destroySlots: (slots: GptSlot[]) => void;
  setConfig?: (config: { safeFrame?: { forceSafeFrame?: boolean } }) => void;
};

declare global {
  interface Window {
    googletag?: Gpt;
  }
}

/** Standard GPT URL — EduPlayce uses a default AdRequest (not limited ads). */
const GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";

let gptScriptPromise: Promise<void> | null = null;

function ensureGpt(): Gpt {
  if (typeof window === "undefined") {
    throw new Error("Rewarded ads are only available in the browser.");
  }
  const existing = window.googletag;
  if (existing?.cmd) return existing;
  const googletag: Gpt = { cmd: [] } as Gpt;
  window.googletag = googletag;
  return googletag;
}

function isGptLibraryReady(googletag: Gpt | undefined): boolean {
  return !!googletag && typeof googletag.pubads === "function";
}

function waitForGptReady(): Promise<void> {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const tick = () => {
      if (isGptLibraryReady(window.googletag)) {
        resolve();
        return;
      }
      if (Date.now() - started > 15_000) {
        reject(new Error("Unable to load video ad. Please try again later."));
        return;
      }
      window.setTimeout(tick, 50);
    };
    tick();
  });
}

function loadGptScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("Rewarded ads are only available in the browser."),
    );
  }
  if (gptScriptPromise) return gptScriptPromise;

  gptScriptPromise = (async () => {
    ensureGpt();
    const already = document.querySelector(`script[src="${GPT_SRC}"]`);
    if (!already) {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = GPT_SRC;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => {
          gptScriptPromise = null;
          reject(new Error("Unable to load video ad. Please try again later."));
        };
        document.head.appendChild(script);
      });
    }
    await waitForGptReady();
  })();

  return gptScriptPromise;
}

/** Preload GPT when the watch-ad dialog opens (EduPlayce `loadRewardedAd`). */
export function preloadRewardedAd(): void {
  void loadGptScript().catch(() => {
    gptScriptPromise = null;
  });
}

function sameSlot(a: GptSlot | undefined, b: GptSlot | undefined): boolean {
  return !!a && !!b && a === b;
}

function requireSignedInUserId(userId?: string): string {
  const uid =
    userId?.trim() || getFirebaseAuth().currentUser?.uid?.trim() || "";
  if (!uid) {
    throw new Error("Please sign in to earn generation credits.");
  }
  return uid;
}

/**
 * Show a rewarded video ad. Resolves when the user earned the reward.
 */
export function showRewardedVideoAd(userId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(
        new Error("Unable to load video ad: timed out. Please try again later."),
      );
    }, 25_000);

    let slot: GptSlot | null = null;
    let granted = false;
    let settled = false;

    const onReady = (raw: unknown) => {
      const event = raw as RewardedSlotReadyEvent;
      if (!sameSlot(event.slot, slot ?? undefined)) return;
      try {
        event.makeRewardedVisible();
        window.gtag?.("event", "rewarded_ad_started", { user_id: userId });
      } catch {
        finish(new Error("Failed to play ad. Please try again."));
      }
    };

    const onGranted = (raw: unknown) => {
      const event = raw as SlotEvent;
      if (!sameSlot(event.slot, slot ?? undefined)) return;
      granted = true;
    };

    const onClosed = (raw: unknown) => {
      const event = raw as SlotEvent;
      if (!sameSlot(event.slot, slot ?? undefined)) return;
      if (granted) {
        finish();
      } else {
        finish(
          new Error("Watch the full video ad to earn a generation credit."),
        );
      }
    };

    const onRenderEnded = (raw: unknown) => {
      const event = raw as SlotEvent;
      if (!sameSlot(event.slot, slot ?? undefined)) return;
      if (event.isEmpty) {
        finish(
          new Error(
            "No video ad is available right now. Please try again later.",
          ),
        );
      }
    };

    function pubads(): GptPubAds | null {
      try {
        return window.googletag?.pubads?.() ?? null;
      } catch {
        return null;
      }
    }

    function cleanup() {
      window.clearTimeout(timeout);
      const ads = pubads();
      if (ads) {
        ads.removeEventListener("rewardedSlotReady", onReady);
        ads.removeEventListener("rewardedSlotGranted", onGranted);
        ads.removeEventListener("rewardedSlotClosed", onClosed);
        ads.removeEventListener("slotRenderEnded", onRenderEnded);
      }
      if (slot) {
        try {
          window.googletag?.destroySlots([slot]);
        } catch {
          /* ignore */
        }
        slot = null;
      }
    }

    function finish(error?: Error) {
      if (settled) return;
      settled = true;
      cleanup();
      if (error) reject(error);
      else resolve();
    }

    void loadGptScript()
      .then(() => {
        const googletag = ensureGpt();
        googletag.cmd.push(() => {
          try {
            const format = googletag.enums?.OutOfPageFormat?.REWARDED;
            if (format == null) {
              finish(
                new Error("Rewarded ads are not supported in this browser."),
              );
              return;
            }

            const defined = googletag.defineOutOfPageSlot(
              REWARDED_AD_UNIT_PATH,
              format,
            );
            if (!defined) {
              finish(
                new Error(
                  "Unable to load video ad. Try a larger screen or disable blockers, then retry.",
                ),
              );
              return;
            }
            slot = defined;

            googletag.setConfig?.({ safeFrame: { forceSafeFrame: true } });
            const ads = googletag.pubads();
            defined.addService(ads);
            ads.addEventListener("rewardedSlotReady", onReady);
            ads.addEventListener("rewardedSlotGranted", onGranted);
            ads.addEventListener("rewardedSlotClosed", onClosed);
            ads.addEventListener("slotRenderEnded", onRenderEnded);

            googletag.enableServices();
            googletag.display(defined);
          } catch (err) {
            finish(
              err instanceof Error
                ? err
                : new Error("Failed to play ad. Please try again."),
            );
          }
        });
      })
      .catch((err) => {
        finish(
          err instanceof Error
            ? err
            : new Error("Unable to load video ad. Please try again later."),
        );
      });
  });
}

export type GrantRewardedAdCreditResult = {
  ok?: boolean;
  writing_credits_balance?: number;
};

/** Existing callable — same as EduPlayce `RewardedAdService`. */
export async function grantRewardedAdCredit(): Promise<GrantRewardedAdCreditResult> {
  return callFunction<Record<string, never>, GrantRewardedAdCreditResult>(
    "grantRewardedAdCredit",
    {},
    { requireAuth: true },
  );
}

/** Client fallback if the callable fails — same Students fields as EduPlayce. */
async function grantRewardedAdCreditFallback(userId: string): Promise<void> {
  const currentUser = getFirebaseAuth().currentUser;
  const name =
    currentUser?.displayName && currentUser.displayName.trim()
      ? currentUser.displayName
      : "Student";
  await setDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, userId),
    {
      uid: userId,
      email: currentUser?.email ?? "",
      name,
      writing_credits_balance: increment(1),
      notes_free_generations_used: FREE_TOTAL_GENERATION_LIMIT,
      study_credits_migrated_v2: true,
    },
    { merge: true },
  );
}

/**
 * Play a rewarded ad, then grant +1 generation credit (callable, then Firestore).
 */
export async function watchAdAndGrantCredit(userId: string): Promise<void> {
  const uid = requireSignedInUserId(userId);
  await showRewardedVideoAd(uid);
  try {
    await grantRewardedAdCredit();
  } catch {
    await grantRewardedAdCreditFallback(uid);
  }
}
