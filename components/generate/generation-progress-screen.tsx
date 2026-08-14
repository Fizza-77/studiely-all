"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";

const PINK = "#FF2D8A";
const PURPLE = "#4F35F2";
const LIME = "#E8FF2F";

export type GenerationProgressMeta = {
  studyMode: string;
  subject: string;
  topic: string;
  gradeLabel: string;
  curriculumLabel: string;
  difficulty: string;
  includeMnemonics: boolean;
  isGuest: boolean;
};

type GenerationProgressScreenProps = {
  phase: "generating" | "complete";
  meta: GenerationProgressMeta;
  onCancel: () => void;
  onOpenNotes: () => void;
  onReplay: () => void;
};

const WAIT_TIPS = [
  "a quick 5-minute review before bed helps your brain file today's learning while you sleep.",
  "saying key terms out loud once locks them in better than rereading silently.",
  "teaching the idea to a friend (or a stuffed animal) exposes gaps fast.",
  "a short stretch break mid-study can boost focus for the next block.",
];

function modeNoun(studyMode: string) {
  if (studyMode === "Flashcards") return "flashcards";
  if (studyMode === "Quiz") return "quiz";
  if (studyMode === "Exam Focus") return "exam questions";
  return "notes";
}

function creatingLabel(studyMode: string) {
  if (studyMode === "Flashcards") return "CREATING YOUR FLASHCARDS";
  if (studyMode === "Quiz") return "CREATING YOUR QUIZ";
  if (studyMode === "Exam Focus") return "CREATING YOUR EXAM QUESTIONS";
  return "CREATING YOUR NOTES";
}

function buildSteps(meta: GenerationProgressMeta): string[] {
  const noun = modeNoun(meta.studyMode);
  const levelBits = [meta.gradeLabel, meta.curriculumLabel]
    .filter(Boolean)
    .join(", ");
  return [
    `Reading your level — ${levelBits || "your curriculum"}`,
    `Structuring key ideas for ${meta.subject}: ${meta.topic}`,
    `Setting difficulty to ${meta.difficulty} — right for your grade`,
    meta.includeMnemonics
      ? "Adding mnemonics to make it stick"
      : "Weaving clear examples into each section",
    `Polishing & saving to your library`,
  ].map((s, i) => (i === 4 && meta.isGuest ? `Polishing your ${noun} preview` : s));
}

export function GenerationProgressScreen({
  phase,
  meta,
  onCancel,
  onOpenNotes,
  onReplay,
}: GenerationProgressScreenProps) {
  const steps = useMemo(() => buildSteps(meta), [meta]);
  const [progress, setProgress] = useState(8);
  const [completedCount, setCompletedCount] = useState(0);
  const [tipIndex] = useState(() => Math.floor(Math.random() * WAIT_TIPS.length));
  const done = phase === "complete";
  const noun = modeNoun(meta.studyMode);

  useEffect(() => {
    if (done) {
      setProgress(100);
      setCompletedCount(steps.length);
      return;
    }

    setProgress(8);
    setCompletedCount(0);
    const started = Date.now();
    const id = window.setInterval(() => {
      const elapsed = Date.now() - started;
      const nextProgress = Math.min(92, 8 + elapsed / 180);
      setProgress(nextProgress);
      const stepTarget = Math.min(
        steps.length - 1,
        Math.floor(elapsed / 1400),
      );
      setCompletedCount(stepTarget);
    }, 120);

    return () => window.clearInterval(id);
  }, [done, steps.length, meta.topic, meta.studyMode]);

  return (
    <div className="fixed inset-0 z-[500] flex min-h-0 flex-col overflow-hidden bg-[#FFFBEF]">
      {/* Lime top bar */}
      <div className="shrink-0 px-3 pt-2 sm:px-4 sm:pt-2.5 md:px-6">
        <div className="mx-auto flex h-14 min-h-14 max-w-[min(100%,2400px)] items-center justify-between gap-3 rounded-[24px] bg-[#E8FF2F] px-3 sm:rounded-[32px] sm:px-5 md:px-[clamp(1.25rem,2.5vw,2.5rem)]">
          <div className="flex min-w-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-group.svg?v=blue"
              alt="Studiely"
              width={140}
              height={40}
              className="h-7 w-auto object-contain sm:h-8"
            />
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-[#6B7280] shadow-sm transition hover:bg-white/90"
          >
            <CancelIcon />
            Cancel
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto grid w-full max-w-none gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-10">
          {/* Left column */}
          <div className="min-w-0">
            <div
              className="flex size-16 items-center justify-center rounded-[22px] text-white sm:size-[72px]"
              style={{
                background: done
                  ? `linear-gradient(145deg, ${PURPLE} 0%, #6366F1 100%)`
                  : `linear-gradient(145deg, ${PURPLE} 0%, #7C6CF0 100%)`,
              }}
              aria-hidden
            >
              {done ? <SmileIcon /> : <SparkIcon />}
            </div>

            <h1 className="mt-5 font-heading text-[clamp(1.85rem,3.5vw,2.6rem)] font-extrabold tracking-tight text-[#111827]">
              {done ? "All done!" : "Almost there…"}
            </h1>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[#6B7280]">
              {done
                ? meta.isGuest
                  ? `Nyla finished your ${noun} — preview them below, then sign up to save.`
                  : `Nyla finished your ${noun} — they're saved in your library.`
                : `Nyla is crafting your ${noun}. Hang tight.`}
            </p>

            <div className="mt-7">
              <div className="mb-2 flex items-center justify-between gap-3">
                <p
                  className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
                  style={{ color: PURPLE }}
                >
                  {creatingLabel(meta.studyMode)}
                </p>
                <p
                  className="text-sm font-extrabold tabular-nums"
                  style={{ color: PURPLE }}
                >
                  {Math.round(progress)}%
                </p>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[#ECEAFF]">
                <div
                  className="h-full rounded-full transition-[width] duration-300 ease-out"
                  style={{
                    width: `${Math.max(6, progress)}%`,
                    background: `linear-gradient(90deg, ${PURPLE} 0%, #F59E0B 55%, ${LIME} 100%)`,
                  }}
                />
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-2.5">
              {steps.map((label, i) => {
                const checked = i < completedCount || done;
                return (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-2xl border border-[#F0E7C8] bg-[#FFF9E8] px-3.5 py-3"
                  >
                    <span
                      className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg ${
                        checked ? "text-[#1E1B4B]" : "text-[#9CA3AF]"
                      }`}
                      style={{ background: checked ? LIME : "#F3F4F6" }}
                      aria-hidden
                    >
                      {checked ? <CheckIcon /> : <DotIcon />}
                    </span>
                    <p
                      className={`min-w-0 pt-0.5 text-sm leading-snug ${
                        checked
                          ? "font-semibold text-[#111827]"
                          : "text-[#6B7280]"
                      }`}
                    >
                      {label}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#F9C2D8] bg-[#FFF0F6] px-4 py-3.5">
              <span
                className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl text-[#FF2D8A]"
                style={{ background: "#FFE4F1" }}
                aria-hidden
              >
                <MoonIcon />
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-[#6B7280]">
                <span className="font-bold" style={{ color: PINK }}>
                  While you wait:
                </span>{" "}
                {WAIT_TIPS[tipIndex]}
              </p>
            </div>

            {done ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={onOpenNotes}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-extrabold text-white transition hover:brightness-110"
                  style={{ background: PINK }}
                >
                  <BookIcon />
                  {meta.isGuest ? "View preview" : "Open my notes"}
                </button>
                <button
                  type="button"
                  onClick={onReplay}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-3.5 text-sm font-bold text-[#6B7280] transition hover:bg-[#FAFAFC]"
                >
                  <ReplayIcon />
                  Replay preview
                </button>
              </div>
            ) : null}
          </div>

          {/* Right column */}
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.14em] text-[#9CA3AF] uppercase">
                Making
              </span>
              <MetaPill tone="purple" icon={<NotesPillIcon />}>
                {meta.studyMode}
              </MetaPill>
              <MetaPill tone="pink" icon={<GlobeIcon />}>
                {meta.subject}
              </MetaPill>
              <MetaPill tone="lime">{meta.topic}</MetaPill>
              <MetaPill tone="gray" icon={<CapIcon />}>
                {meta.gradeLabel}
              </MetaPill>
              <MetaPill tone="outline" icon={<StairsIcon />}>
                {meta.difficulty}
              </MetaPill>
              {meta.includeMnemonics ? (
                <MetaPill tone="pink" icon={<BrainIcon />}>
                  Mnemonics
                </MetaPill>
              ) : null}
            </div>

            <div className="relative flex min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-[#E8E6F0] bg-white px-6 py-12 text-center shadow-[0_16px_40px_rgba(17,24,39,0.08)] sm:min-h-[420px]">
              <span
                className="pointer-events-none absolute right-5 top-5 h-6 w-14 rounded-full opacity-80"
                style={{ background: "#FEF3C7" }}
                aria-hidden
              />

              {done ? (
                <>
                  <span
                    className="mb-4 flex size-14 items-center justify-center rounded-2xl"
                    style={{ background: "#ECEAFF", color: PURPLE }}
                    aria-hidden
                  >
                    <BigCheckIcon />
                  </span>
                  <p className="font-heading text-xl font-extrabold text-[#111827]">
                    Your {noun} are ready!
                  </p>
                  <p className="mt-2 text-sm text-[#6B7280]">
                    {meta.isGuest
                      ? `Preview ready • ${meta.subject}`
                      : `Saved to your library • ${meta.subject}`}
                  </p>
                </>
              ) : (
                <>
                  <span
                    className="mb-4 flex size-14 items-center justify-center rounded-2xl"
                    style={{ background: "#ECEAFF", color: PURPLE }}
                    aria-hidden
                  >
                    <span className="animate-pulse">
                      <SparkIcon />
                    </span>
                  </span>
                  <p className="font-heading text-xl font-extrabold text-[#111827]">
                    Crafting your {noun}…
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-[#6B7280]">
                    {meta.subject} · {meta.topic}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaPill({
  children,
  tone,
  icon,
}: {
  children: ReactNode;
  tone: "purple" | "pink" | "lime" | "gray" | "outline";
  icon?: ReactNode;
}) {
  const styles: Record<typeof tone, string> = {
    purple: "bg-[#ECEAFF] text-[#4F35F2]",
    pink: "bg-[#FFE4F1] text-[#FF2D8A]",
    lime: "bg-[#F4F9C8] text-[#5B6B1A]",
    gray: "bg-[#F3F4F6] text-[#111827]",
    outline: "border border-[#E5E7EB] bg-white text-[#6B7280]",
  };
  return (
    <span
      className={`inline-flex max-w-full items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${styles[tone]}`}
    >
      {icon}
      <span className="truncate">{children}</span>
    </span>
  );
}

function CancelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="10" r="1.4" fill="currentColor" />
      <circle cx="15" cy="10" r="1.4" fill="currentColor" />
      <path
        d="M8.5 14.5c1.2 1.4 2.6 2 3.5 2s2.3-.6 3.5-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5c.4 3.4 1.7 5.7 5.5 7-3.8 1.3-5.1 3.6-5.5 7-.4-3.4-1.7-5.7-5.5-7 3.8-1.3 5.1-3.6 5.5-7Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3.5" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16.5 3.5A8.5 8.5 0 1 0 20.5 14 7 7 0 0 1 16.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M4 18.5h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ReplayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 4.5v5h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NotesPillIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 9h6M9 12.5h6M9 16h3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 12h16M12 4c2.5 2.8 2.5 13.2 0 16M12 4c-2.5 2.8-2.5 13.2 0 16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 10l9-5 9 5-9 5-9-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 12.5v4.2c0 .8 2.2 2.3 5 2.3s5-1.5 5-2.3v-4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StairsIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 18h5v-4h5V10h5V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 4.5a3 3 0 0 0-3 3v.4A3 3 0 0 0 4.5 10.5c0 1.2.7 2.2 1.7 2.7V16a3 3 0 0 0 3 3h.3M15 4.5a3 3 0 0 1 3 3v.4a3 3 0 0 1 1.5 2.6c0 1.2-.7 2.2-1.7 2.7V16a3 3 0 0 1-3 3h-.3M9 8.5h6M9 12h6M9 15.5h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BigCheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
