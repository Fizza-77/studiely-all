import Link from "next/link";
import type { ReactNode } from "react";

/** Marketing feature pages (Navbar Features dropdown). */
export const SUBJECT_FEATURE_HREFS = {
  notes: "/features/notes-generator",
  flashcards: "/features/flashcard-maker",
  quiz: "/features/quiz-generator",
  examFocus: "/features/exam-focus",
  home: "/",
} as const;

/** Map subject tool card ids → feature marketing pages. */
export const SUBJECT_TOOL_FEATURE_HREF: Record<string, string> = {
  notes: SUBJECT_FEATURE_HREFS.notes,
  flashcards: SUBJECT_FEATURE_HREFS.flashcards,
  quiz: SUBJECT_FEATURE_HREFS.quiz,
  "exam-focus": SUBJECT_FEATURE_HREFS.examFocus,
};

type LinkRule = {
  phrase: string;
  href: string;
  once?: boolean;
};

/**
 * Longer phrases first so "revision notes" wins over a bare "notes" rule
 * (we intentionally do not link bare "notes" — too many false positives).
 */
const RULES: LinkRule[] = [
  { phrase: "notes generator", href: SUBJECT_FEATURE_HREFS.notes },
  { phrase: "revision notes", href: SUBJECT_FEATURE_HREFS.notes },
  { phrase: "summary notes", href: SUBJECT_FEATURE_HREFS.notes },
  { phrase: "study notes", href: SUBJECT_FEATURE_HREFS.notes },
  { phrase: "flashcard maker", href: SUBJECT_FEATURE_HREFS.flashcards },
  { phrase: "quiz generator", href: SUBJECT_FEATURE_HREFS.quiz },
  { phrase: "quiz practice", href: SUBJECT_FEATURE_HREFS.quiz },
  { phrase: "exam focus", href: SUBJECT_FEATURE_HREFS.examFocus },
  { phrase: "assessment focus", href: SUBJECT_FEATURE_HREFS.examFocus },
  { phrase: "flashcards", href: SUBJECT_FEATURE_HREFS.flashcards },
  { phrase: "flashcard", href: SUBJECT_FEATURE_HREFS.flashcards },
  { phrase: "quizzes", href: SUBJECT_FEATURE_HREFS.quiz },
  { phrase: "quiz", href: SUBJECT_FEATURE_HREFS.quiz },
  { phrase: "Studiely", href: SUBJECT_FEATURE_HREFS.home, once: true },
];

const COMBINED = new RegExp(
  `\\b(${RULES.map((r) => r.phrase).join("|")})\\b`,
  "gi",
);

function ruleForMatch(matched: string): LinkRule | undefined {
  const lower = matched.toLowerCase();
  return RULES.find((r) => r.phrase.toLowerCase() === lower);
}

/** Active during a single SubjectLandingPage render (sync). */
let activePageHrefBudget: Map<string, number> | null = null;
const DEFAULT_MAX_PER_FEATURE_HREF = 2;

/**
 * Run a subject-page render with a shared feature-link budget
 * (max 2 inline links per feature URL across the whole page).
 */
export function withSubjectFeatureLinkBudget<T>(render: () => T): T {
  activePageHrefBudget = new Map();
  try {
    return render();
  } finally {
    activePageHrefBudget = null;
  }
}

export type LinkifySubjectCopyOptions = {
  className?: string;
};

/**
 * Turn feature / brand phrases in plain subject copy into internal links.
 * Safe for plain text only (no HTML in content strings).
 */
export function linkifySubjectCopy(
  text: string,
  options: LinkifySubjectCopyOptions = {},
): ReactNode {
  const className =
    options.className ??
    "font-semibold underline decoration-current/40 underline-offset-[3px] transition-colors hover:decoration-current";

  const onceUsed = new Set<string>();
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  COMBINED.lastIndex = 0;
  while ((match = COMBINED.exec(text)) !== null) {
    const matched = match[1] ?? match[0];
    const rule = ruleForMatch(matched);
    if (!rule) continue;

    if (rule.once) {
      const onceKey = rule.phrase.toLowerCase();
      if (onceUsed.has(onceKey)) continue;
      onceUsed.add(onceKey);
    }

    if (
      activePageHrefBudget &&
      rule.href !== SUBJECT_FEATURE_HREFS.home
    ) {
      const used = activePageHrefBudget.get(rule.href) ?? 0;
      if (used >= DEFAULT_MAX_PER_FEATURE_HREF) continue;
    }

    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (
      activePageHrefBudget &&
      rule.href !== SUBJECT_FEATURE_HREFS.home
    ) {
      activePageHrefBudget.set(
        rule.href,
        (activePageHrefBudget.get(rule.href) ?? 0) + 1,
      );
    }

    nodes.push(
      <Link key={`sl-${key++}`} href={rule.href} className={className}>
        {matched}
      </Link>,
    );
    lastIndex = match.index + matched.length;
  }

  if (lastIndex === 0) return text;
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}
