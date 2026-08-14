"use client";

import { NylaChatCard } from "@/components/nyla/nyla-chat-card";

const PINK = "#FF2D8A";
const PURPLE = "#4F35F2";

export type GenerateTip = {
  title: string;
  bullets: string[];
};

const GENERATE_QUICK_PROMPTS = [
  { label: "Understand a concept", tone: "glass" as const },
  { label: "Clarify a question", tone: "glass" as const },
  { label: "Navigate Studiely", tone: "glass" as const },
  { label: "Troubleshoot", tone: "glass" as const },
];

export function GenerateStickySidebar({
  tip,
  displayName = "there",
}: {
  tip: GenerateTip;
  displayName?: string;
}) {
  return (
    <aside
      className="min-w-0 h-fit lg:sticky lg:self-start"
      style={{ top: "min(4.75rem, calc(100vh - 100%))" }}
    >
      <div className="flex flex-col gap-4">
        <section className="relative overflow-hidden rounded-[28px] bg-[#E8FF2F] p-5 shadow-[0_8px_24px_rgba(17,24,39,0.06)]">
          <div
            aria-hidden
            className="absolute top-4 right-5 h-1.5 w-10 rounded-full"
            style={{ background: PINK }}
          />
          <div className="mb-3 flex items-center gap-2">
            <span
              className="flex size-8 items-center justify-center rounded-xl text-sm font-extrabold text-white"
              style={{ background: PURPLE }}
            >
              ✦
            </span>
            <h2 className="font-heading text-base font-extrabold text-[#111827]">
              Tips for this step
            </h2>
          </div>
          <p className="font-heading text-lg font-extrabold text-[#111827]">
            {tip.title}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#1F2937]">
            {tip.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#111827]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <NylaChatCard
          displayName={displayName}
          subtitle="Here to guide you"
          greeting={`Hi ${displayName}! I'm Nyla. Stuck on this step? Tap what you need or just ask me.`}
          quickPrompts={GENERATE_QUICK_PROMPTS}
          chipLayout="grid"
          showContact
          surface="generate_sidebar"
          placeholder="Ask Nyla..."
        />
      </div>
    </aside>
  );
}
