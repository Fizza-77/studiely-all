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
      if (!silent) setLoading(true);
      setError(null);
      try {
        const c = await fetchStudyCredits({ guest: true });
        setCredits(c);
        setStats(null);
      } catch (err) {
        setCredits(null);
        setError(
          err instanceof Error ? err.message : "Failed to load study credits",
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

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { loading, error, profile, notes, attempts, stats, credits, refresh };
}
