"use client";

import Link from "next/link";

import { PrimaryButton, SecondaryButton } from "@/components/ui/auth-form";

export type GuestUpgradeReason = "save" | "exhausted";

type GuestUpgradeDialogProps = {
  reason: GuestUpgradeReason;
  studyMode?: string;
  guestCreditsTotal?: number;
  onClose: () => void;
};

function headlineForReason(reason: GuestUpgradeReason, studyMode?: string): string {
  if (reason === "exhausted") {
    return "Free credits used up";
  }
  const labels: Record<string, string> = {
    "Summary Notes": "notes",
    Flashcards: "flashcards",
    Quiz: "quiz",
    "Exam Focus": "exam questions",
  };
  const label = studyMode ? labels[studyMode] ?? studyMode.toLowerCase() : "content";
  return `Sign in to save your ${label}`;
}

function descriptionForReason(
  reason: GuestUpgradeReason,
  guestCreditsTotal?: number,
): string {
  if (reason === "exhausted") {
    if (typeof guestCreditsTotal === "number" && guestCreditsTotal > 0) {
      return `You've used all ${guestCreditsTotal} guest credit${guestCreditsTotal === 1 ? "" : "s"} on this device. Sign in for account credits or upgrade your plan to keep generating.`;
    }
    return "You've used all guest credits on this device. Sign in for account credits or upgrade your plan to keep generating.";
  }
  return "Sign in for free account credits and save to My Library.";
}

export function GuestUpgradeDialog({
  reason,
  studyMode,
  guestCreditsTotal,
  onClose,
}: GuestUpgradeDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="guest-upgrade-title"
        className="w-full max-w-md rounded-2xl border border-[#E8E6F0] bg-white p-6 shadow-xl"
      >
        <h2
          id="guest-upgrade-title"
          className="font-heading text-xl font-extrabold text-[#111827]"
        >
          {headlineForReason(reason, studyMode)}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
          {descriptionForReason(reason, guestCreditsTotal)}
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link href="/signup" className="flex-1" onClick={onClose}>
            <PrimaryButton type="button" className="w-full">
              Create free account
            </PrimaryButton>
          </Link>
          <Link href="/login" className="flex-1" onClick={onClose}>
            <SecondaryButton type="button" className="w-full">
              Sign in
            </SecondaryButton>
          </Link>
        </div>
        {reason === "exhausted" ? (
          <Link
            href="/pricing"
            className="mt-3 block text-center text-sm font-semibold text-[#4F35F2] hover:underline"
            onClick={onClose}
          >
            View plans &amp; upgrade
          </Link>
        ) : null}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full text-center text-xs font-semibold text-[#9CA3AF] hover:text-[#6B7280]"
        >
          {reason === "save" ? "Keep preview" : "Close"}
        </button>
      </div>
    </div>
  );
}
