/**
 * Same-origin student app URLs on studiely.com (no /app, not studiely.app).
 * Landing CTAs should use these paths.
 */
export const STUDIELY_APP_ORIGIN =
  process.env.NEXT_PUBLIC_STUDIELY_APP_ORIGIN?.replace(/\/$/, "") ?? "";

const origin = STUDIELY_APP_ORIGIN;

function appPath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return origin ? `${origin}${p}` : p;
}

export const STUDIELY_APP = {
  home: appPath("/home"),
  login: appPath("/login"),
  signUp: appPath("/signup"),
  library: appPath("/library"),
  examPractice: appPath("/practice/writing"),
  notes: appPath("/generate/notes"),
  summaryNotes: appPath("/generate/notes"),
  flashcards: appPath("/generate/flashcards"),
  quiz: appPath("/generate/quiz"),
  examFocus: appPath("/generate/exam-focus"),
  nyla: appPath("/smartlink"),
  pricing: appPath("/pricing"), // marketing pricing page (navbar + PayPal checkout)
} as const;
