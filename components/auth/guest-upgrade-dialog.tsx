"use client";

import Link from "next/link";

import { PrimaryButton, SecondaryButton } from "@/components/ui/auth-form";

type GuestUpgradeDialogProps = {
  studyMode: string;
  onClose: () => void;
};

function headlineForStudyMode(studyMode: string): string {
  const labels: Record<string, string> = {
    "Summary Notes": "notes",
    Flashcards: "flashcards",
    Quiz: "quiz",
    "Exam Focus": "exam questions",
    "Common Mistakes": "common mistakes",
    Examples: "examples",
  };
  const label = labels[studyMode] ?? studyMode.toLowerCase();
  return `Sign in to generate your ${label}`;
}

/**
 * Guests may browse generate UI but must sign in/up for 5 free credits.
 */
export function GuestUpgradeDialog({
  studyMode,
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
          {headlineForStudyMode(studyMode)}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
          Get 5 free credits on your first sign in.
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
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full text-center text-xs font-semibold text-[#9CA3AF] hover:text-[#6B7280]"
        >
          Keep browsing
        </button>
      </div>
    </div>
  );
}
