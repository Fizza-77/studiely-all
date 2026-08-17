"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { DataConsentGate } from "@/components/auth/data-consent-gate";
import { useAuth } from "@/components/providers/auth-provider";
import { PrimaryButton, SecondaryButton } from "@/components/ui/auth-form";
import { InteractiveQuiz } from "@/components/ui/interactive-quiz";
import { MarkdownMathView } from "@/components/ui/markdown-math-view";
import { EmptyState, LoadingBlock } from "@/components/ui/student-ui";
import { fetchNoteById } from "@/lib/student/data";
import { parseQuizFromMarkdown, type Quiz } from "@/lib/student/quiz-parser";
import type { GeneratedNote } from "@/lib/student/types";

/** Deep-link route; same player also embeds on the note detail screen. */
export default function InteractiveQuizPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { phase: authPhase, user } = useAuth();
  const noteId = params.id;

  const [note, setNote] = useState<GeneratedNote | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [session, setSession] = useState(0);

  useEffect(() => {
    if (authPhase === "guest" || !user || !noteId) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    void (async () => {
      setLoading(true);
      try {
        const n = await fetchNoteById(user.uid, noteId);
        if (cancelled) return;
        if (!n) {
          setError("Note not found.");
          return;
        }
        if (n.studyMode !== "Quiz") {
          setError("This note is not a Quiz. Generate a Quiz study mode first.");
          setNote(n);
          return;
        }
        const parsed = parseQuizFromMarkdown(n.notes, {
          subject: n.subject,
          topic: n.topic,
          difficulty: n.difficulty,
        });
        if (!parsed) {
          setError(
            "Could not parse quiz questions. The note needs numbered questions and an Answers section.",
          );
          setNote(n);
          return;
        }
        setNote(n);
        setQuiz(parsed);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load quiz");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [authPhase, user, noteId]);

  return (
    <DataConsentGate>
      <AppShell>
        {authPhase === "guest" ? (
          <EmptyState
            title="Sign in required"
            body="Interactive quizzes sync attempts to your account."
            action={
              <Link href="/login">
                <PrimaryButton type="button" className="w-auto px-5">
                  Sign in
                </PrimaryButton>
              </Link>
            }
          />
        ) : loading ? (
          <LoadingBlock label="Loading quiz…" />
        ) : error && !quiz ? (
          <EmptyState
            title="Quiz unavailable"
            body={error}
            action={
              <Link href={`/library/${noteId}`}>
                <SecondaryButton type="button" className="w-auto px-5">
                  Back to note
                </SecondaryButton>
              </Link>
            }
          />
        ) : !quiz || !note || !user ? null : started ? (
          <div className="mx-auto w-full max-w-5xl xl:max-w-6xl">
            <InteractiveQuiz
              key={`${note.id}-quiz-${session}`}
              quiz={quiz}
              uid={user.uid}
              subject={note.subject}
              topic={note.topic}
              onExit={() => {
                setStarted(false);
                router.push(`/library/${noteId}`);
              }}
            />
          </div>
        ) : (
          <div className="mx-auto w-full max-w-5xl xl:max-w-6xl">
            <div className="mb-6 flex justify-center">
              <PrimaryButton
                type="button"
                className="w-auto px-6"
                onClick={() => {
                  setSession((n) => n + 1);
                  setStarted(true);
                }}
              >
                Start interactive quiz
              </PrimaryButton>
            </div>
            <article className="rounded-[24px] border-[5px] border-[#F3F7A8] bg-white p-6 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-8 md:p-10 lg:p-12">
              <MarkdownMathView
                size="reading"
                content={note.notes || "No content."}
              />
            </article>
            <div className="mt-6 flex justify-center">
              <SecondaryButton
                type="button"
                className="w-auto px-5"
                onClick={() => router.push(`/library/${noteId}`)}
              >
                Back to note
              </SecondaryButton>
            </div>
          </div>
        )}
      </AppShell>
    </DataConsentGate>
  );
}
