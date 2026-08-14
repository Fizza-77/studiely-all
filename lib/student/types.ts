export const FREE_MONTHLY_GENERATION_LIMIT = 5; // legacy alias — prefer study-credits.ts
export const FREE_TOTAL_GENERATION_LIMIT = 5;
export const DEFAULT_WEEKLY_GOAL_SESSIONS = 5;

export type StudyMode =
  | "Summary Notes"
  | "Flashcards"
  | "Quiz"
  | "Exam Focus"
  | "Common Mistakes"
  | "Examples"
  | string;

export type GeneratedNote = {
  id: string;
  subject: string;
  topic: string;
  studyMode: StudyMode;
  difficulty?: string;
  notes: string;
  createdAt: Date | null;
  isFavorite: boolean;
  includeMnemonics?: boolean;
  includeExamStyleQs?: boolean;
  curriculumId?: string;
  curriculumName?: string;
  grade?: string;
};

export type QuizAttempt = {
  id: string;
  subject: string;
  topic: string;
  score: number;
  totalQuestions: number;
  createdAt: Date | null;
};

export type StudentProfile = {
  uid: string;
  name: string;
  email: string;
  membershipType: string;
  subscriptionPlan: string;
  isPremiumFlag: boolean;
  weeklyGoalSessions: number;
  avatarSource: string;
  avatarSeed: string;
  profileImageUrl: string | null;
  topLevelCurriculumId: string | null;
  pathwayId: string | null;
  gradeId: string | null;
  directCurriculumId: string | null;
  curriculumDisplayName: string | null;
  pathwayDisplayName: string | null;
  gradeDisplayName: string | null;
  school: string | null;
  streakDaysStored: number;
  lastStreakActivity: Date | null;
  subscriptionEndDate: Date | null;
  subscriptionPlatform: string | null;
  stripeCustomerId: string | null;
};

export type DashboardStats = {
  totalNotes: number;
  streakDays: number;
  weeklyGoalPercent: number;
  weeklySessions: number;
  weeklyGoalSessions: number;
  monthlyUsed: number;
  monthlyLimit: number; // -1 = unlimited (legacy note-count UI)
  /** From Cloud Function getStudyCredits (authoritative for free/Pro tokens). */
  studyCreditsUsed: number;
  studyCreditsTotal: number;
  studyCreditsRemaining: number;
  studyCreditsIsPremium: boolean;
  studyCreditsRewardRemaining: number;
  topSubject: string | null;
  subjectMasteryPercent: number;
  planLabel: string;
  isPremium: boolean;
};

export type LibraryTab =
  | "notes"
  | "flashcards"
  | "quizzes"
  | "exam"
  | "favorites";

/** Flutter getSubscriptionStatus / notes premium parity. */
export function resolvePlan(
  profile: Pick<
    StudentProfile,
    | "subscriptionPlan"
    | "membershipType"
    | "isPremiumFlag"
    | "subscriptionEndDate"
  >,
): {
  plan: string;
  isPremium: boolean;
  planLabel: string;
} {
  const plan = (
    profile.subscriptionPlan ||
    profile.membershipType ||
    "free"
  ).toLowerCase();
  const notExpired =
    !profile.subscriptionEndDate ||
    profile.subscriptionEndDate.getTime() > Date.now();
  const isPremium =
    notExpired &&
    (plan === "pro" ||
      plan === "premium" ||
      profile.isPremiumFlag === true);
  return {
    plan: isPremium ? plan || "premium" : "free",
    isPremium,
    planLabel: isPremium ? "Pro" : "Free Starter",
  };
}

export function filterNotesByTab(
  notes: GeneratedNote[],
  tab: LibraryTab,
): GeneratedNote[] {
  switch (tab) {
    case "notes":
      return notes.filter((n) => n.studyMode === "Summary Notes");
    case "flashcards":
      return notes.filter((n) => n.studyMode === "Flashcards");
    case "quizzes":
      return notes.filter((n) => n.studyMode === "Quiz");
    case "exam":
      return notes.filter((n) =>
        ["Exam Focus", "Common Mistakes", "Examples"].includes(n.studyMode),
      );
    case "favorites":
      return notes.filter((n) => n.isFavorite);
    default:
      return notes;
  }
}
