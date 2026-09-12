/**
 * Web rewarded ads (Google Publisher Tag) — AdMob is mobile-only.
 * After the user earns the reward, credits are granted by the existing
 * Cloud Function `grantRewardedAdCredit` (same as EduPlayce).
 */

import { callFunction } from "@/lib/firebase/functions";

/** Official Google GPT sample unit used when no production slot is configured. */
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
  setPrivacySettings: (settings: {
    childDirectedTreatment?: boolean;
    limitedAds?: boolean;
    nonPersonalizedAds?: boolean;
  }) => void;
};

type Gpt = {
  cmd: Array<() => void>;
  enums?: { OutOfPageFormat?: { REWARDED?: unknown } };
  pubads: () => GptPubAds;
  defineOutOfPageSlot: (adUnitPath: string, format: unknown) => GptSlot | null;
  enableServices: () => void;
  display: (slot: GptSlot) => void;
  destroySlots: (slots: GptSlot[]) => void;
};

declare global {
  interface Window {
    googletag?: Gpt;
  }
}

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

function loadGptScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Rewarded ads are only available in the browser."));
  }
  if (gptScriptPromise) return gptScriptPromise;

  gptScriptPromise = new Promise((resolve, reject) => {
    ensureGpt();
    const already = document.querySelector(`script[src="${GPT_SRC}"]`);
    if (already) {
      resolve();
      return;
    }
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

  return gptScriptPromise;
}

function sameSlot(a: GptSlot | undefined, b: GptSlot | undefined): boolean {
  return !!a && !!b && a === b;
}

/**
 * Show a rewarded video ad. Resolves when the user earned the reward.
 */
export function showRewardedVideoAd(): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("Unable to load video ad: timed out. Please try again later."));
    }, 25_000);

    let slot: GptSlot | null = null;
    let granted = false;
    let settled = false;

    const onReady = (raw: unknown) => {
      const event = raw as RewardedSlotReadyEvent;
      if (!sameSlot(event.slot, slot ?? undefined)) return;
      try {
        event.makeRewardedVisible();
        window.gtag?.("event", "rewarded_ad_started");
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
        finish(new Error("Watch the full video ad to earn a generation credit."));
      }
    };

    const onRenderEnded = (raw: unknown) => {
      const event = raw as SlotEvent;
      if (!sameSlot(event.slot, slot ?? undefined)) return;
      if (event.isEmpty) {
        finish(new Error("No video ad is available right now. Please try again later."));
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
              finish(new Error("Rewarded ads are not supported in this browser."));
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

            const ads = googletag.pubads();
            ads.setPrivacySettings({
              childDirectedTreatment: true,
              limitedAds: true,
              nonPersonalizedAds: true,
            });
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

/**
 * Play a rewarded ad, then grant +1 generation credit server-side.
 */
export async function watchAdAndGrantCredit(): Promise<void> {
  await showRewardedVideoAd();
  await grantRewardedAdCredit();
}
