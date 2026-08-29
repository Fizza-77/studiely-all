"use client";

import { useCallback, useEffect, useState } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import {
  buildDashboardStats,
  fetchGeneratedNotes,
  fetchQuizAttempts,
  fetchStudentProfile,
} from "@/lib/student/data";
import {
  fetchStudyCredits,
  FREE_TOTAL_GENERATION_LIMIT,
  recordFreeGenerationUsed,
  type StudyCredits,
} from "@/lib/student/study-credits";
import type {
  DashboardStats,
  GeneratedNote,
  QuizAttempt,
  StudentProfile,
} from "@/lib/student/types";

type RefreshOptions = { silent?: boolean };

type StudentDataState = {
  loading: boolean;
  error: string | null;
  profile: StudentProfile | null;
  notes: GeneratedNote[];
  attempts: QuizAttempt[];
  stats: DashboardStats | null;
  credits: StudyCredits | null;
  refresh: (options?: RefreshOptions) => Promise<void>;
  /** Persist + optimistically apply one free generation used on this device. */
  bumpCreditsUsed: () => void;
};

export function useStudentData(): StudentDataState {
  const { phase, user } = useAuth();
  const isGuest = phase === "guest" && !user;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [notes, setNotes] = useState<GeneratedNote[]>([]);
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [credits, setCredits] = useState<StudyCredits | null>(null);

  const refresh = useCallback(async (options?: RefreshOptions) => {
    const silent = options?.silent === true;

    if (isGuest) {
      setProfile(null);
      setNotes([]);
      setAttempts([]);
      setStats(null);
      if (!silent) setLoading(true);
      setError(null);
      try {
        const c = await fetchStudyCredits({ guest: true });
        setCredits(c);
      } catch (err) {
        setCredits(null);
        setError(
          err instanceof Error ? err.message : "Failed to load guest credits",
        );
      } finally {
        if (!silent) setLoading(false);
      }
      return;
    }

    if (phase === "guest" || !user) {
      setProfile(null);
      setNotes([]);
      setAttempts([]);
      setStats(null);
      setCredits(null);
      setLoading(false);
      setError(null);
      return;
    }

    if (!silent) setLoading(true);
    setError(null);
    try {
      const [p, n, a, c] = await Promise.all([
        fetchStudentProfile(user.uid),
        fetchGeneratedNotes(user.uid),
        fetchQuizAttempts(user.uid),
        fetchStudyCredits().catch(() => null),
      ]);
      setProfile(p);
      setNotes(n);
      setAttempts(a);
      setCredits(c);
      setStats(p ? buildDashboardStats(p, n, a, c) : null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      if (!silent) setLoading(false);
    }
  }, [phase, user, isGuest]);

  const bumpCreditsUsed = useCallback(() => {
    recordFreeGenerationUsed();
    setCredits((prev) => {
      if (!prev || prev.isPremium) return prev;
      const freeBase = prev.freeBaseLimit ?? FREE_TOTAL_GENERATION_LIMIT;
      const rewards = prev.rewardCreditsRemaining ?? 0;
      const nextFreeUsed = Math.min(freeBase, accountFreeUsedFrom(prev) + 1);
      const remaining = Math.max(0, freeBase - nextFreeUsed) + rewards;
      return {
        ...prev,
        used: Math.max(0, prev.total - remaining),
        remaining,
      };
    });
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return {
    loading,
    error,
    profile,
    notes,
    attempts,
    stats,
    credits,
    refresh,
    bumpCreditsUsed,
  };
}

function accountFreeUsedFrom(credits: StudyCredits): number {
  const rewards = credits.rewardCreditsRemaining ?? 0;
  const freeBase = credits.freeBaseLimit ?? FREE_TOTAL_GENERATION_LIMIT;
  return Math.min(
    freeBase,
    Math.max(0, credits.total - credits.remaining - rewards),
  );
}
