import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  deleteDoc,
  Timestamp,
  type DocumentData,
} from "firebase/firestore";

import { getFirebaseDb } from "@/lib/firebase/client";
import { COLLECTIONS } from "@/lib/config/constants";
import {
  DEFAULT_WEEKLY_GOAL_SESSIONS,
  FREE_MONTHLY_GENERATION_LIMIT,
  resolvePlan,
  type DashboardStats,
  type GeneratedNote,
  type QuizAttempt,
  type StudentProfile,
} from "@/lib/student/types";
import type { StudyCredits } from "@/lib/student/study-credits";
import { FREE_TOTAL_GENERATION_LIMIT } from "@/lib/student/study-credits";

function toDate(value: unknown): Date | null {
  if (!value) return null;
  if (value instanceof Timestamp) return value.toDate();
  if (value instanceof Date) return value;
  if (typeof value === "object" && value !== null && "toDate" in value) {
    try {
      return (value as Timestamp).toDate();
    } catch {
      return null;
    }
  }
  return null;
}

function mapNote(id: string, data: DocumentData): GeneratedNote {
  return {
    id,
    subject: String(data.subject ?? ""),
    topic: String(data.topic ?? ""),
    studyMode: String(data.study_mode ?? ""),
    difficulty: data.difficulty ? String(data.difficulty) : undefined,
    notes: String(data.notes ?? ""),
    createdAt: toDate(data.created_at),
    isFavorite: data.is_favorite === true,
    includeMnemonics: data.include_mnemonics === true,
    includeExamStyleQs: data.include_exam_style_qs === true,
    curriculumId: data.curriculum_id ? String(data.curriculum_id) : undefined,
    curriculumName: data.curriculum_name
      ? String(data.curriculum_name)
      : undefined,
    grade: data.grade ? String(data.grade) : undefined,
  };
}

function mapAttempt(id: string, data: DocumentData): QuizAttempt {
  return {
    id,
    subject: String(data.subject ?? ""),
    topic: String(data.topic ?? ""),
    score: Number(data.score ?? 0),
    totalQuestions: Number(data.total_questions ?? 0),
    createdAt: toDate(data.created_at),
  };
}

export async function fetchStudentProfile(
  uid: string,
): Promise<StudentProfile | null> {
  const snap = await getDoc(doc(getFirebaseDb(), COLLECTIONS.students, uid));
  if (!snap.exists()) return null;
  const data = snap.data();
  const weekly = Number(data.weekly_goal_sessions ?? DEFAULT_WEEKLY_GOAL_SESSIONS);
  return {
    uid,
    name: String(data.name ?? ""),
    email: String(data.email ?? ""),
    membershipType: String(data.membership_type ?? "free"),
    subscriptionPlan: String(data.subscription_plan ?? data.membership_type ?? "free"),
    isPremiumFlag: data.is_premium === true,
    weeklyGoalSessions: Math.min(99, Math.max(1, weekly || DEFAULT_WEEKLY_GOAL_SESSIONS)),
    avatarSource: String(data.avatar_source ?? "none"),
    avatarSeed: String(data.avatar_seed ?? ""),
    profileImageUrl: data.profile_image_url
      ? String(data.profile_image_url)
      : null,
    topLevelCurriculumId: data.profile_top_level_curriculum_id
      ? String(data.profile_top_level_curriculum_id)
      : null,
    pathwayId: data.profile_pathway_id
      ? String(data.profile_pathway_id)
      : null,
    gradeId: data.profile_grade_id ? String(data.profile_grade_id) : null,
    directCurriculumId: data.profile_direct_curriculum_id
      ? String(data.profile_direct_curriculum_id)
      : null,
    curriculumDisplayName: data.profile_curriculum_display_name
      ? String(data.profile_curriculum_display_name)
      : null,
    pathwayDisplayName: data.profile_pathway_display_name
      ? String(data.profile_pathway_display_name)
      : null,
    gradeDisplayName: data.profile_grade_display_name
      ? String(data.profile_grade_display_name)
      : null,
    school: data.profile_school ? String(data.profile_school) : null,
    streakDaysStored: Number(data.streak_days ?? 0),
    lastStreakActivity: toDate(data.last_streak_activity),
    subscriptionEndDate: toDate(data.subscription_end_date),
    subscriptionPlatform: data.subscription_platform
      ? String(data.subscription_platform)
      : null,
    stripeCustomerId: data.stripe_customer_id
      ? String(data.stripe_customer_id)
      : null,
  };
}

export async function fetchGeneratedNotes(
  uid: string,
): Promise<GeneratedNote[]> {
  const q = query(
    collection(getFirebaseDb(), COLLECTIONS.students, uid, "generated_notes"),
    orderBy("created_at", "desc"),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => mapNote(d.id, d.data()));
}

export async function fetchNoteById(
  uid: string,
  noteId: string,
): Promise<GeneratedNote | null> {
  const snap = await getDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, uid, "generated_notes", noteId),
  );
  if (!snap.exists()) return null;
  return mapNote(snap.id, snap.data());
}

export async function fetchQuizAttempts(uid: string): Promise<QuizAttempt[]> {
  const q = query(
    collection(getFirebaseDb(), COLLECTIONS.students, uid, "quiz_attempts"),
    orderBy("created_at", "desc"),
  );
  try {
    const snap = await getDocs(q);
    return snap.docs.map((d) => mapAttempt(d.id, d.data()));
  } catch {
    return [];
  }
}

export async function setNoteFavorite(
  uid: string,
  noteId: string,
  isFavorite: boolean,
): Promise<void> {
  await updateDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, uid, "generated_notes", noteId),
    { is_favorite: isFavorite },
  );
}

export async function deleteNote(uid: string, noteId: string): Promise<void> {
  await deleteDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, uid, "generated_notes", noteId),
  );
}

export async function updateWeeklyGoal(
  uid: string,
  sessions: number,
): Promise<void> {
  const clamped = Math.min(99, Math.max(1, Math.round(sessions)));
  await updateDoc(doc(getFirebaseDb(), COLLECTIONS.students, uid), {
    weekly_goal_sessions: clamped,
  });
}

/** Distinct calendar days with note activity; Flutter home streak formula. */
export function calculateStreak(notes: GeneratedNote[]): number {
  const days = new Set<string>();
  for (const n of notes) {
    if (!n.createdAt) continue;
    const d = n.createdAt;
    days.add(
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`,
    );
  }
  if (days.size === 0) return 0;

  const sorted = [...days].sort().reverse();
  const today = new Date();
  const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;

  if (sorted[0] !== todayKey && sorted[0] !== yesterdayKey) return 0;

  let streak = 1;
  let cursor = new Date(
    Number(sorted[0].slice(0, 4)),
    Number(sorted[0].slice(5, 7)) - 1,
    Number(sorted[0].slice(8, 10)),
  );

  for (let i = 1; i < sorted.length; i++) {
    cursor.setDate(cursor.getDate() - 1);
    const expected = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(cursor.getDate()).padStart(2, "0")}`;
    if (sorted[i] === expected) streak += 1;
    else break;
  }
  return streak;
}

function startOfWeekSunday(now = new Date()): Date {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

export function calculateWeeklySessions(notes: GeneratedNote[]): number {
  const start = startOfWeekSunday();
  return notes.filter((n) => n.createdAt && n.createdAt >= start).length;
}

export function calculateMonthlyUsage(notes: GeneratedNote[]): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return notes.filter(
    (n) => n.createdAt && n.createdAt >= start && n.createdAt < end,
  ).length;
}

export function calculateTopSubject(notes: GeneratedNote[]): string | null {
  if (notes.length === 0) return null;
  const counts = new Map<string, number>();
  for (const n of notes) {
    if (!n.subject) continue;
    counts.set(n.subject, (counts.get(n.subject) ?? 0) + 1);
  }
  let best: string | null = null;
  let bestCount = 0;
  for (const [subject, count] of counts) {
    if (count > bestCount) {
      best = subject;
      bestCount = count;
    }
  }
  return best;
}

/** Quiz 50% + Flashcards 20% + Exam 30% (Flutter mastery heuristic). */
export function calculateSubjectMastery(
  notes: GeneratedNote[],
  attempts: QuizAttempt[],
): number {
  let quizScore = 0;
  if (attempts.length > 0) {
    const accuracies = attempts.map((a) =>
      a.totalQuestions > 0 ? a.score / a.totalQuestions : 0,
    );
    quizScore =
      accuracies.reduce((s, v) => s + v, 0) / accuracies.length;
  }

  const flashCount = notes.filter((n) => n.studyMode === "Flashcards").length;
  const flashScore = Math.min(1, flashCount / 5);

  const examCount = notes.filter(
    (n) =>
      n.studyMode === "Exam Focus" || n.includeExamStyleQs === true,
  ).length;
  const examScore = Math.min(1, examCount / 5);

  return Math.round((quizScore * 0.5 + flashScore * 0.2 + examScore * 0.3) * 100);
}

export function buildDashboardStats(
  profile: StudentProfile,
  notes: GeneratedNote[],
  attempts: QuizAttempt[],
  credits?: StudyCredits | null,
): DashboardStats {
  const { isPremium, planLabel } = resolvePlan(profile);
  const weeklySessions = calculateWeeklySessions(notes);
  const weeklyGoal = profile.weeklyGoalSessions;
  const weeklyGoalPercent = Math.min(
    100,
    Math.round((weeklySessions / weeklyGoal) * 100),
  );
  const monthlyUsed = calculateMonthlyUsage(notes);

  const studyCreditsIsPremium = credits?.isPremium ?? isPremium;
  const studyCreditsUsed = credits?.used ?? monthlyUsed;
  const studyCreditsTotal =
    credits?.total ??
    (studyCreditsIsPremium ? -1 : FREE_TOTAL_GENERATION_LIMIT);
  const studyCreditsRemaining =
    credits?.remaining ??
    (studyCreditsIsPremium
      ? -1
      : Math.max(0, FREE_TOTAL_GENERATION_LIMIT - studyCreditsUsed));

  // Prefer Firestore streak (StreakService) with same “stale day → 0” rule as Flutter.
  let streakDays = calculateStreak(notes);
  if (profile.streakDaysStored > 0) {
    const last = profile.lastStreakActivity;
    if (last) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const lastDay = new Date(last);
      lastDay.setHours(0, 0, 0, 0);
      const diffDays = Math.round(
        (today.getTime() - lastDay.getTime()) / 86_400_000,
      );
      streakDays = diffDays > 1 ? 0 : profile.streakDaysStored;
    } else {
      streakDays = profile.streakDaysStored;
    }
  }

  return {
    totalNotes: notes.length,
    streakDays,
    weeklyGoalPercent,
    weeklySessions,
    weeklyGoalSessions: weeklyGoal,
    monthlyUsed,
    monthlyLimit: studyCreditsIsPremium ? -1 : FREE_MONTHLY_GENERATION_LIMIT,
    studyCreditsUsed,
    studyCreditsTotal,
    studyCreditsRemaining,
    studyCreditsIsPremium,
    studyCreditsRewardRemaining: credits?.rewardCreditsRemaining ?? 0,
    topSubject: calculateTopSubject(notes),
    subjectMasteryPercent: calculateSubjectMastery(notes, attempts),
    planLabel,
    isPremium,
  };
}

export function formatRelativeTime(date: Date | null): string {
  if (!date) return "";
  const diffMs = Date.now() - date.getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return date.toLocaleDateString();
}
