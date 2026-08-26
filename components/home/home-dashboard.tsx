"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { NylaChatCard } from "@/components/nyla/nyla-chat-card";
import { generateHref } from "@/lib/generate/modes";
import type {
  DashboardStats,
  GeneratedNote,
  QuizAttempt,
} from "@/lib/student/types";
import { calculateSubjectMastery } from "@/lib/student/data";
import { librarySubjectPath } from "@/lib/student/library-paths";

const PINK = "#FF2D8A";
const PURPLE = "#4F35F2";
const LIME = "#E8FF2F";

const TOOLS = [
  {
    id: "notes",
    title: "Study Notes",
    body: "Clear, structured notes on any topic you type.",
    cta: "LEARN IT",
    mode: "Summary Notes",
    icon: "/notes.png",
  },
  {
    id: "flashcards",
    title: "Flashcards",
    body: "Flip-and-recall decks built for you in seconds.",
    cta: "REMEMBER IT",
    mode: "Flashcards",
    icon: "/flashcards.png",
  },
  {
    id: "quiz",
    title: "Quiz",
    body: "Test yourself before the real test does.",
    cta: "PROVE IT",
    mode: "Quiz",
    icon: "/quizz.png",
  },
  {
    id: "exam",
    title: "Exam Focus",
    body: "Fix your weak spots before exam day.",
    cta: "MASTER IT",
    mode: "Exam Focus",
    icon: "/focus.png",
  },
] as const;

const TIPS = [
  {
    title: "Study in short bursts",
    body: "25 minutes of focus, then a 5-minute break. Your brain remembers more when it gets to rest.",
  },
  {
    title: "Teach it back",
    body: "Explain a topic out loud like you’re teaching a friend. Gaps show up fast.",
  },
  {
    title: "Mix your subjects",
    body: "Switching topics between sessions improves long-term recall.",
  },
  {
    title: "Quiz before you reread",
    body: "Active recall first, notes second — you’ll remember more with less time.",
  },
  {
    title: "Sleep on it",
    body: "A good night’s sleep consolidates what you studied today.",
  },
] as const;

function formatDatePill(d = new Date()) {
  return d
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
}

function relativeOpened(date: Date | null): string {
  if (!date) return "recently";
  const days = Math.max(
    0,
    Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24)),
  );
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

type HomeDashboardProps = {
  firstName: string;
  isGuest: boolean;
  loading: boolean;
  error: string | null;
  notes: GeneratedNote[];
  attempts?: QuizAttempt[];
  stats: DashboardStats | null;
  onEditWeeklyGoal?: () => void;
};

export function HomeDashboard({
  firstName,
  isGuest,
  loading,
  error,
  notes,
  attempts = [],
  stats,
  onEditWeeklyGoal,
}: HomeDashboardProps) {
  const resume = notes[0] ?? null;
  const recent = useMemo(() => notes.slice(0, 4), [notes]);
  const subjects = useMemo(
    () => buildSubjectCards(notes, attempts),
    [notes, attempts],
  );
  const displayName = firstName || (isGuest ? "there" : "friend");
  const mastery = stats?.subjectMasteryPercent ?? 0;
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTipIndex((i) => (i + 1) % TIPS.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  const tip = TIPS[tipIndex];

  const homeNylaPrompts = useMemo(
    () => [
      {
        label: "Quiz me",
        tone: "pink" as const,
        icon: <QuizChipIcon />,
        prompt:
          "Quiz me on a topic from my curriculum — ask one question at a time and wait for my answer.",
      },
      {
        label: "Explain a topic",
        tone: "yellow" as const,
        icon: <BulbChipIcon />,
        prompt:
          "Explain a topic from my curriculum clearly, step by step, at my grade level.",
      },
      {
        label: "Exam help",
        tone: "white" as const,
        icon: <BoltChipIcon />,
        prompt:
          "Help me prepare for an exam — suggest how to revise and approach typical questions.",
      },
    ],
    [],
  );

  return (
    <div className="mx-auto w-full max-w-none">
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-8">
        <div className="min-w-0 space-y-6">
          <header className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="font-heading text-[clamp(1.75rem,3vw,2.35rem)] font-extrabold tracking-tight text-[#111827]">
                Hi{" "}
                <span className="relative inline-block px-0.5">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-[0.06em] -z-0 h-[9px] origin-left -rotate-1"
                    style={{ background: LIME }}
                  />
                  <span className="relative z-10">{displayName}!</span>
                </span>
              </h1>
              <p className="mt-1 text-[15px] text-[#6B7280]">
                What would you like to improve today?
              </p>
            </div>
            <span
              className="inline-flex items-center rounded-lg px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-white"
              style={{ background: PINK }}
            >
              {formatDatePill()}
            </span>
          </header>

          {error ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
              {error}
            </div>
          ) : null}

          <ResumeCard
            note={resume}
            mastery={mastery}
            loading={loading && !isGuest}
            isGuest={isGuest}
          />

          <section>
            <h2 className="mb-4 font-heading text-xl font-bold text-[#111827] sm:text-2xl">
              Choose a tool to{" "}
              <span style={{ color: PINK }}>get started</span>
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {TOOLS.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>

          <StatsBar stats={stats} isGuest={isGuest} onEditWeeklyGoal={onEditWeeklyGoal} />

          <div className="space-y-10 pt-4">
            <RecentlyOpenedSection
              notes={recent}
              loading={loading && !isGuest}
              isGuest={isGuest}
            />
            <YourSubjectsSection
              subjects={subjects}
              loading={loading && !isGuest}
              isGuest={isGuest}
            />
          </div>
        </div>

        <aside className="min-w-0 h-fit lg:sticky lg:top-[4.75rem] lg:max-h-[calc(100dvh-5.5rem)] lg:self-start lg:overflow-y-auto lg:overscroll-y-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col gap-4 lg:pt-1">
          <NylaChatCard
            displayName={displayName}
            subtitle="Your study partner · online"
            greeting={`Hey ${displayName}! Stuck on something, or want a quick challenge? Ask me anything about what you're studying.`}
            quickPrompts={homeNylaPrompts}
            chipLayout="wrap"
            surface="home_dashboard"
            placeholder="Ask Nyla anything about your studies..."
          />

          <section className="overflow-hidden rounded-[28px] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
            <div className="h-2.5 w-full" style={{ background: PURPLE }} />
            <div className="p-5">
              <div className="mb-5 flex items-center justify-between gap-2">
                <h3 className="font-heading text-lg font-extrabold text-[#111827]">
                  Tips &amp; Tricks
                </h3>
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold text-[#111827]"
                  style={{ background: LIME }}
                >
                  <SparkleIcon />
                  New tip daily
                </span>
              </div>

              <div
                className="mb-4 flex size-12 items-center justify-center rounded-2xl text-white"
                style={{ background: PURPLE }}
              >
                <TimerIcon />
              </div>

              <p className="font-heading text-lg font-extrabold text-[#111827]">
                {tip.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                {tip.body}
              </p>

              <div className="mt-6 flex items-center gap-1.5">
                {TIPS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Tip ${i + 1}`}
                    aria-current={i === tipIndex ? "true" : undefined}
                    onClick={() => setTipIndex(i)}
                    className="h-2 w-5 rounded-full border border-[#111827] transition-colors"
                    style={{
                      background: i === tipIndex ? PINK : "#FFFFFF",
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
          </div>
        </aside>
      </div>
    </div>
  );
}

type SubjectIconKind =
  | "english"
  | "literature"
  | "math"
  | "science"
  | "biology"
  | "chemistry"
  | "physics"
  | "music"
  | "history"
  | "geography"
  | "art"
  | "computing"
  | "business"
  | "pe"
  | "general";

type SubjectCard = {
  name: string;
  mastery: number;
  modes: string[];
  accent: string;
  icon: SubjectIconKind;
};

function subjectIconKind(name: string): SubjectIconKind {
  const s = name.toLowerCase();
  if (/\b(music|band|choir|orchestra)\b/.test(s)) return "music";
  if (/\b(math|maths|algebra|calculus|geometry|arithmetic)\b/.test(s))
    return "math";
  if (/\b(biology|bio)\b/.test(s)) return "biology";
  if (/\b(chemistry|chem)\b/.test(s)) return "chemistry";
  if (/\b(physics)\b/.test(s)) return "physics";
  if (/\b(science|stem)\b/.test(s)) return "science";
  if (/\b(history|ancient|medieval)\b/.test(s)) return "history";
  if (/\b(geography|geo)\b/.test(s)) return "geography";
  if (/\b(art|design|drama|theatre|theater)\b/.test(s)) return "art";
  if (/\b(computer|computing|coding|programming|ict|cs)\b/.test(s))
    return "computing";
  if (/\b(business|economics|finance|accounting|commerce)\b/.test(s))
    return "business";
  if (/\b(pe|sport|physical|fitness)\b/.test(s)) return "pe";
  if (/\b(literature|lit)\b/.test(s)) return "literature";
  if (/\b(english|language|french|spanish|german|latin|mandarin|arabic)\b/.test(s))
    return "english";
  return "general";
}

function subjectAccent(kind: SubjectIconKind, index: number): string {
  const byKind: Partial<Record<SubjectIconKind, string>> = {
    english: PURPLE,
    literature: PINK,
    math: "#3B82F6",
    science: "#10B981",
    biology: "#059669",
    chemistry: "#0EA5E9",
    physics: "#6366F1",
    music: "#EC4899",
    history: "#D97706",
    geography: "#14B8A6",
    art: "#F43F5E",
    computing: "#8B5CF6",
    business: "#0F766E",
    pe: "#F97316",
    general: "#64748B",
  };
  const accents = [PURPLE, PINK, "#3B82F6", "#10B981", "#F59E0B"];
  return byKind[kind] ?? accents[index % accents.length];
}

function modeBadge(studyMode: string): { label: string; bg: string; color: string } {
  const mode = studyMode.toLowerCase();
  if (mode.includes("flash")) {
    return { label: "FLASHCARDS", bg: PINK, color: "#fff" };
  }
  if (mode.includes("quiz")) {
    return { label: "QUIZ", bg: "#F5E14A", color: "#111827" };
  }
  if (mode.includes("exam")) {
    return { label: "EXAM FOCUS", bg: PURPLE, color: "#fff" };
  }
  return { label: "SUMMARY NOTES", bg: "#C4B5FD", color: "#1E1B4B" };
}

function buildSubjectCards(
  notes: GeneratedNote[],
  attempts: QuizAttempt[],
): SubjectCard[] {
  const bySubject = new Map<string, GeneratedNote[]>();
  for (const note of notes) {
    const name = (note.subject || "").trim() || "General";
    const list = bySubject.get(name) ?? [];
    list.push(note);
    bySubject.set(name, list);
  }

  const cards: SubjectCard[] = [];
  let i = 0;
  for (const [name, subjectNotes] of bySubject) {
    const subjectAttempts = attempts.filter(
      (a) => a.subject.trim().toLowerCase() === name.toLowerCase(),
    );
    const modes = Array.from(
      new Set(
        subjectNotes.map((n) => {
          const m = n.studyMode;
          if (m === "Summary Notes") return "Notes";
          if (m === "Flashcards") return "Flashcards";
          if (m === "Quiz") return "Quizzes";
          if (m.includes("Exam") || m === "Common Mistakes" || m === "Examples") {
            return "Exam Focus";
          }
          return m;
        }),
      ),
    );
    const ordered = ["Notes", "Flashcards", "Quizzes", "Exam Focus"].filter((m) =>
      modes.includes(m),
    );
    const icon = subjectIconKind(name);
    cards.push({
      name,
      mastery: calculateSubjectMastery(subjectNotes, subjectAttempts),
      modes:
        ordered.length > 0
          ? ordered
          : ["Notes", "Flashcards", "Quizzes", "Exam Focus"],
      accent: subjectAccent(icon, i),
      icon,
    });
    i += 1;
  }

  return cards.sort((a, b) => b.mastery - a.mastery || a.name.localeCompare(b.name));
}

function SectionHeading({
  title,
  href,
  linkLabel,
}: {
  title: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="font-heading text-xl font-bold text-[#111827] sm:text-2xl">
        {title}
      </h2>
      <Link
        href={href}
        className="shrink-0 text-sm font-semibold transition hover:opacity-80"
        style={{ color: PURPLE }}
      >
        {linkLabel}
      </Link>
    </div>
  );
}

function RecentlyOpenedSection({
  notes,
  loading,
  isGuest,
}: {
  notes: GeneratedNote[];
  loading: boolean;
  isGuest: boolean;
}) {
  return (
    <section>
      <SectionHeading
        title="Recently opened"
        href="/library"
        linkLabel="Show all →"
      />
      {loading ? (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-[22px] bg-white ring-1 ring-[#E8E6F0]"
            />
          ))}
        </div>
      ) : notes.length === 0 ? (
        <div className="rounded-[22px] border border-[#E8E6F0] bg-white px-5 py-8 text-center shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
          <p className="text-sm text-[#6B7280]">
            {isGuest
              ? "Sign in to see your recent study notes here."
              : "Nothing here yet — generate notes, flashcards, or a quiz to get started."}
          </p>
          <Link
            href={isGuest ? "/login" : "/generate"}
            className="mt-3 inline-flex text-sm font-semibold"
            style={{ color: PURPLE }}
          >
            {isGuest ? "Log in →" : "Create notes →"}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {notes.map((note) => {
            const badge = modeBadge(note.studyMode);
            return (
              <Link
                key={note.id}
                href={`/library/${note.id}`}
                className="rounded-[22px] border border-[#E8E6F0] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(17,24,39,0.08)]"
              >
                <span
                  className="inline-flex rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide"
                  style={{ background: badge.bg, color: badge.color }}
                >
                  {badge.label}
                </span>
                <h3 className="mt-3 truncate font-heading text-base font-extrabold text-[#111827]">
                  {(note.topic || "Untitled").toLowerCase()}
                </h3>
                <p className="mt-1 truncate text-xs text-[#6B7280]">
                  {note.subject || "Study"} · {relativeOpened(note.createdAt)}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

function YourSubjectsSection({
  subjects,
  loading,
  isGuest,
}: {
  subjects: SubjectCard[];
  loading: boolean;
  isGuest: boolean;
}) {
  return (
    <section>
      <SectionHeading
        title="Your subjects"
        href="/library"
        linkLabel="Open library →"
      />
      {loading ? (
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="h-36 animate-pulse rounded-[24px] bg-white ring-1 ring-[#E8E6F0]"
            />
          ))}
        </div>
      ) : subjects.length === 0 ? (
        <div className="rounded-[24px] border border-[#E8E6F0] bg-white px-5 py-8 text-center shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
          <p className="text-sm text-[#6B7280]">
            {isGuest
              ? "Sign in to track subject mastery across your library."
              : "Subjects appear here as you create notes for them."}
          </p>
          <Link
            href={isGuest ? "/signup" : "/generate"}
            className="mt-3 inline-flex text-sm font-semibold"
            style={{ color: PURPLE }}
          >
            {isGuest ? "Start free →" : "Add a subject →"}
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {subjects.map((subject) => {
            const started = subject.mastery > 0;
            return (
              <Link
                key={subject.name}
                href={librarySubjectPath(subject.name)}
                className="rounded-[24px] border border-[#E8E6F0] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(17,24,39,0.08)]"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-2xl text-white"
                    style={{ background: subject.accent }}
                  >
                    <SubjectGlyph kind={subject.icon} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate font-heading text-lg font-extrabold text-[#111827]">
                          {subject.name}
                        </h3>
                        <p className="mt-0.5 truncate text-xs text-[#6B7280]">
                          {subject.modes.join(" · ")}
                        </p>
                      </div>
                      <span
                        className="shrink-0 text-2xl font-extrabold"
                        style={{
                          color: started ? subject.accent : "#D1D5DB",
                        }}
                      >
                        {subject.mastery}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#EDE9FE]">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min(100, Math.max(started ? 4 : 2, subject.mastery))}%`,
                      background: subject.accent,
                    }}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-xs text-[#6B7280]">
                    {started ? "Subject mastery" : "Just getting started"}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: PURPLE }}
                  >
                    {started ? "Keep going →" : "Start now →"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

function openCtaForStudyMode(studyMode: string): string {
  switch (studyMode) {
    case "Flashcards":
      return "Open cards";
    case "Quiz":
      return "Open quiz";
    case "Exam Focus":
      return "Open exam questions";
    case "Common Mistakes":
      return "Open mistakes";
    case "Examples":
      return "Open examples";
    case "Summary Notes":
    default:
      return "Open notes";
  }
}

function ResumeCard({
  note,
  mastery,
  loading,
  isGuest,
}: {
  note: GeneratedNote | null;
  mastery: number;
  loading: boolean;
  isGuest: boolean;
}) {
  if (loading) {
    return (
      <div className="h-48 animate-pulse overflow-hidden rounded-[28px] bg-white/80 ring-1 ring-[#E8E6F0]" />
    );
  }

  const topic = note?.topic || (isGuest ? "Your first topic" : "Untitled");
  const subject = note?.subject || "Study";
  const studyMode = note?.studyMode || "Summary Notes";
  const modeLabel = studyMode.toUpperCase();
  const subjectShort = subject.split(" ")[0]?.toUpperCase() || "STUDY";
  const href = note
    ? `/library/${note.id}`
    : isGuest
      ? "/login"
      : generateHref("Summary Notes");
  const title = note
    ? `${topic} — ${studyMode}`
    : isGuest
      ? "Try your first study tool"
      : "No notes yet — let’s make one";
  const subtitle = note
    ? `${subject} · last opened ${relativeOpened(note.createdAt)}`
    : "Generate summary notes, flashcards, or a quiz in seconds.";
  const cta = note
    ? openCtaForStudyMode(studyMode)
    : isGuest
      ? "Log in"
      : "Create notes";

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white">
      <div className="h-[3px] w-full" style={{ background: PURPLE }} />

      {/* Diagonal blue/lavender panel on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[46%] bg-[#EDE9FE]"
        style={{
          clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6 lg:p-7">
        <div className="min-w-0 flex-1">
          <span
            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-extrabold tracking-[0.06em] text-[#1E1B4B] uppercase"
            style={{ background: "#F3F7A8" }}
          >
            <BoltIcon />
            Pick up where you left off
          </span>

          <h3 className="font-heading text-xl font-extrabold text-[#111827] sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1.5 text-sm text-[#6B7280]">{subtitle}</p>

          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-1.5 rounded-2xl px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
            style={{ background: PURPLE }}
          >
            {cta}
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[240px] shrink-0 sm:mx-0 sm:w-[230px]">
          {/* Pink offset layer */}
          <div
            aria-hidden
            className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl"
            style={{ background: PINK }}
          />

          <div className="relative rounded-2xl bg-white p-4 pt-5 shadow-sm">
            <span
              className="absolute -top-2 left-3 rounded-md px-2 py-0.5 text-[9px] font-extrabold tracking-wide text-[#111827] uppercase"
              style={{ background: LIME }}
            >
              {modeLabel}
            </span>

            <div className="mb-2 flex items-start justify-between gap-2">
              <p className="truncate pr-1 text-sm font-extrabold text-[#111827]">
                {topic}
              </p>
              <span className="shrink-0 rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[9px] font-extrabold tracking-wide text-[#4F35F2] uppercase">
                {subjectShort}
              </span>
            </div>

            <div className="mb-4 space-y-1.5" aria-hidden>
              <div className="h-1.5 w-full rounded-full bg-[#E5E7EB]" />
              <div className="h-1.5 w-[85%] rounded-full bg-[#E5E7EB]" />
              <div className="h-1.5 w-[60%] rounded-full bg-[#E5E7EB]" />
            </div>

            <div className="mb-1.5 flex items-center justify-between text-[11px] font-semibold text-[#374151]">
              <span>{subject} Mastery</span>
              <span>{mastery}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#EDE9FE]">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${Math.min(100, Math.max(note ? 0 : 2, mastery || 2))}%`,
                  background: PURPLE,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: (typeof TOOLS)[number] }) {
  return (
    <Link
      href={generateHref(tool.mode)}
      className="group relative z-[1] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F35F2] focus-visible:ring-offset-2 hover:z-10"
    >
      {/* Twisted green card behind (marketing hover) — no flower */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 origin-bottom rotate-0 rounded-[28px] shadow-[0_8px_22px_rgba(79,53,242,0.12)] transition-transform duration-500 ease-out will-change-transform group-hover:-rotate-[5deg] motion-reduce:rotate-0 motion-reduce:transition-none sm:rounded-[32px]"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, #B8FF3A 0%, #E8FF2F 42%, #9AE82A 100%)",
        }}
      />

      <div
        className="relative flex min-h-[185px] flex-col overflow-visible rounded-[28px] border-b-[4px] border-[#3A24C4] p-3.5 text-white shadow-[0_10px_22px_rgba(79,53,242,0.26),0_4px_10px_rgba(79,53,242,0.14)] transition-transform duration-500 ease-out origin-bottom rotate-0 group-hover:rotate-[5deg] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[200px] sm:rounded-[32px] sm:p-4"
        style={{ backgroundColor: PURPLE }}
      >
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="flex size-10 items-center justify-center sm:size-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.icon}
              alt=""
              className="h-8 w-auto object-contain sm:h-10"
            />
          </div>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#111827] transition group-hover:translate-x-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <h3 className="font-heading text-base font-extrabold sm:text-lg">
          {tool.title}
        </h3>
        <p className="mt-1.5 flex-1 text-[12px] leading-snug text-white/90 sm:text-[13px]">
          {tool.body}
        </p>
        <span className="mt-3 inline-flex w-fit items-center rounded-lg bg-white px-3 py-1.5 text-[10px] font-extrabold tracking-wide text-[#111827] sm:text-[11px]">
          {tool.cta}
        </span>
      </div>
    </Link>
  );
}

function StatsBar({
  stats,
  isGuest,
  onEditWeeklyGoal,
}: {
  stats: DashboardStats | null;
  isGuest: boolean;
  onEditWeeklyGoal?: () => void;
}) {
  const streakDays = stats?.streakDays ?? 0;
  const items = [
    {
      key: "mastery",
      icon: <BarsIcon />,
      value: `${stats?.subjectMasteryPercent ?? 0}%`,
      label: "SUBJECT MASTERY",
    },
    {
      key: "weekly",
      icon: <CalendarIcon />,
      value: `${stats?.weeklySessions ?? 0} / ${stats?.weeklyGoalSessions ?? 5}`,
      label: "WEEKLY GOAL · DAYS",
      onClick: onEditWeeklyGoal,
    },
    {
      key: "streak",
      icon: <FireIcon />,
      value: `${streakDays} days`,
      label: streakDays > 0 ? "STREAK · KEEP GOING" : "STREAK · START TODAY",
    },
    {
      key: "notes",
      icon: <DocIcon />,
      value: `${isGuest ? 0 : stats?.totalNotes ?? 0}`,
      label: "NOTES CREATED",
    },
  ];

  return (
    <div
      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-full px-4 py-3 sm:gap-x-6 sm:px-6 sm:py-3.5"
      style={{ background: LIME }}
    >
      {items.map((item) => {
        const content = (
          <>
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl text-white sm:size-12"
              style={{ background: PURPLE }}
            >
              {item.icon}
            </span>
            <span className="min-w-0 text-left">
              <span className="block font-heading text-base font-extrabold leading-none text-black sm:text-lg">
                {item.value}
              </span>
              <span className="mt-1 block text-[9px] font-bold tracking-[0.04em] text-black uppercase sm:text-[10px]">
                {item.label}
              </span>
            </span>
          </>
        );

        if (item.onClick) {
          return (
            <button
              key={item.key}
              type="button"
              onClick={item.onClick}
              className="flex min-w-0 flex-1 items-center gap-2.5 rounded-2xl px-1 py-0.5 text-left transition hover:bg-black/5 sm:gap-3"
            >
              {content}
            </button>
          );
        }

        return (
          <div
            key={item.key}
            className="flex min-w-0 flex-1 items-center gap-2.5 px-1 sm:gap-3"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

function QuizChipIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 12.5 10.5 15 16 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BulbChipIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 18h6M10 22h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltChipIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2 5 13h6l-1 9 9-13h-6l0-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 2 4 14h7l-1 8 10-14h-7l1-6z" />
    </svg>
  );
}

function TimerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 9v4l2.5 1.5M9 2h6M12 5V3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5 13.8 9.2 20.5 11 13.8 12.8 12 19.5 10.2 12.8 3.5 11 10.2 9.2 12 2.5Z" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 20h3V10H4v10zm6 0h3V4h-3v16zm6 0h3v-7h-3v7z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 23c-4.4 0-8-3.1-8-7.5 0-3.3 1.8-5.6 3.7-7.4C9 6.6 10.2 5.3 10.5 3c2.2 1.4 3.4 3.5 3.8 5.3.3-1 1-2.2 2.2-3.2.3 2.1 1.3 3.7 2.3 5 1.6 2 3.2 4.1 3.2 7.4C22 19.9 18.4 23 12 23z" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-6z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M14 2v6h6M9 13h6M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 8h8M9 8c0 4-2 7-6 8M12 8c0 2-.5 4-2 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 17l2.5-6L18 17M14 15h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SubjectGlyph({ kind }: { kind: SubjectIconKind }) {
  switch (kind) {
    case "english":
      return <TranslateIcon />;
    case "literature":
      return <BookIcon />;
    case "math":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "science":
    case "chemistry":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 3h6M10 3v6.5L5.5 18a3 3 0 0 0 2.6 4.5h8a3 3 0 0 0 2.6-4.5L14 9.5V3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8.5 14h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "biology":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 22c4-3 7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 3 8 7 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M12 8v8M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "physics":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(120 12 12)" />
        </svg>
      );
    case "music":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 18V6l10-2v12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="18" r="2.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="16" r="2.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "history":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M12 9v4l2.5 1.5M9 2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "geography":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path
            d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "art":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 21a9 9 0 1 1 9-9c0 2-1.2 3.5-3 3.5h-1.2a1.8 1.8 0 0 0-1.6 2.7A2.4 2.4 0 0 1 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="7.5" cy="11" r="1" fill="currentColor" />
          <circle cx="10.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="14.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="17" cy="11" r="1" fill="currentColor" />
        </svg>
      );
    case "computing":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 8 4 12l4 4M16 8l4 4-4 4M13 5l-2 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "business":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 20h16M6 20V11l4-3 4 5 4-4v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "pe":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M8 22l2-8 2 3 2-3 2 8M7 10l5 2 5-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return <BookIcon />;
  }
}
