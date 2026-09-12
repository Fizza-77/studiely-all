"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  preloadRewardedAd,
  watchAdAndGrantCredit,
} from "@/lib/ads/rewarded-ad";

type WatchAdCreditDialogProps = {
  userId: string;
  onCreditEarned: () => void | Promise<void>;
  onClose: () => void;
};

function logEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

export function WatchAdCreditDialog({
  userId,
  onCreditEarned,
  onClose,
}: WatchAdCreditDialogProps) {
  const [loadingAd, setLoadingAd] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    preloadRewardedAd();
  }, []);

  async function onWatchAd() {
    if (loadingAd) return;
    if (!userId.trim()) {
      setError("Please sign in to earn generation credits.");
      return;
    }
    setLoadingAd(true);
    setError(null);
    try {
      await watchAdAndGrantCredit(userId);
      logEvent("rewarded_ad_completed", { user_id: userId });
      await onCreditEarned();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not grant generation credit. Please try again.",
      );
      setLoadingAd(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="watch-ad-title"
        className="w-full max-w-md rounded-2xl border border-[#E8E6F0] bg-white p-6 shadow-xl"
      >
        <div className="flex items-start gap-3">
          <span
            className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#4566EE]/12 text-[#4566EE]"
            aria-hidden
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1.75 14.2V7.8L16.5 12Z" />
            </svg>
          </span>
          <h2
            id="watch-ad-title"
            className="font-heading text-xl font-extrabold text-[#111827]"
          >
            Watch Ad to Generate
          </h2>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
          You&apos;ve used all 5 free generations. Watch a short video ad to
          generate your content now, or upgrade to Premium for unlimited access.
        </p>
        {error ? (
          <p
            role="alert"
            className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
          >
            {error}
          </p>
        ) : null}
        <div className="mt-6 flex flex-col gap-2.5">
          <button
            type="button"
            disabled={loadingAd}
            onClick={() => void onWatchAd()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10B981] px-4 py-3.5 text-sm font-extrabold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loadingAd ? (
              <>
                <span
                  className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                  aria-hidden
                />
                Loading Video Ad...
              </>
            ) : (
              "Watch Ad & Generate"
            )}
          </button>
          <Link
            href="/pricing"
            onClick={() => {
              logEvent("watch_ad_dialog_upgrade_clicked", { user_id: userId });
              onClose();
            }}
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm font-semibold text-[#1E293B] hover:bg-[#F9FAFB]"
          >
            Upgrade to Premium
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-1 text-center text-xs font-semibold text-[#9CA3AF] hover:text-[#6B7280]"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
