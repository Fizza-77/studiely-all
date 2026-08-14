/** Clean generate URLs — never use `?mode=Summary%20Notes`. */

export const GENERATE_MODE_SLUGS = [
  "notes",
  "flashcards",
  "quiz",
  "exam-focus",
] as const;

export type GenerateModeSlug = (typeof GENERATE_MODE_SLUGS)[number];

export type GenerateModeName =
  | "Summary Notes"
  | "Flashcards"
  | "Quiz"
  | "Exam Focus";

const SLUG_TO_NAME: Record<GenerateModeSlug, GenerateModeName> = {
  notes: "Summary Notes",
  flashcards: "Flashcards",
  quiz: "Quiz",
  "exam-focus": "Exam Focus",
};

const NAME_TO_SLUG: Record<GenerateModeName, GenerateModeSlug> = {
  "Summary Notes": "notes",
  Flashcards: "flashcards",
  Quiz: "quiz",
  "Exam Focus": "exam-focus",
};

export function isGenerateModeSlug(value: string): value is GenerateModeSlug {
  return (GENERATE_MODE_SLUGS as readonly string[]).includes(value);
}

export function generateModeNameFromSlug(
  slug: string | undefined | null,
): GenerateModeName {
  if (slug && isGenerateModeSlug(slug)) return SLUG_TO_NAME[slug];
  return "Summary Notes";
}

export function generateModeSlugFromName(name: string): GenerateModeSlug {
  if (name in NAME_TO_SLUG) {
    return NAME_TO_SLUG[name as GenerateModeName];
  }
  if (name === "Common Mistakes" || name === "Examples") return "exam-focus";
  return "notes";
}

/** Path for a study mode, e.g. `/generate/flashcards`. */
export function generateHref(mode?: string | null): string {
  if (!mode) return "/generate";
  return `/generate/${generateModeSlugFromName(mode)}`;
}

/**
 * Accepts legacy query values (`Summary Notes`) or path slugs (`notes`).
 */
export function resolveGenerateModeName(
  raw: string | undefined | null,
): GenerateModeName {
  if (!raw) return "Summary Notes";
  const decoded = decodeURIComponent(raw).trim();
  if (isGenerateModeSlug(decoded)) return SLUG_TO_NAME[decoded];
  if (decoded in NAME_TO_SLUG) return decoded as GenerateModeName;
  if (decoded === "Common Mistakes" || decoded === "Examples") {
    return "Exam Focus";
  }
  return "Summary Notes";
}
