"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { DataConsentGate } from "@/components/auth/data-consent-gate";
import { useAuth } from "@/components/providers/auth-provider";
import {
  Alert,
  Field,
  PrimaryButton,
  SecondaryButton,
  Select,
  TextArea,
  TextInput,
} from "@/components/ui/auth-form";
import { MarkdownMathView } from "@/components/ui/markdown-math-view";
import { EmptyState, PageHeader } from "@/components/ui/student-ui";
import {
  getBoards,
  getPathway,
  getSubjectOptions,
  resolveLeafCurriculum,
} from "@/lib/curriculum";
import {
  generateWritingTask,
  getWritingExamSimulationFeedback,
  getWritingPracticeFeedback,
  type WritingTask,
} from "@/lib/generate/writing";
import { wordCount } from "@/lib/student/quiz-parser";

const boards = getBoards();
const ALLOCATED_SECONDS = 20 * 60;

/**
 * Writing practice / timed exam feedback against existing Cloud Functions only.
 * Full exam matrix engine deferred — no backend changes.
 */
export default function WritingPracticePage() {
  const { phase, user } = useAuth();
  const isGuest = phase === "guest";

  const [boardId, setBoardId] = useState(boards[0]?.id ?? "");
  const [pathwayId, setPathwayId] = useState(
    boards[0]?.pathways[0]?.id ?? "",
  );
  const [gradeId, setGradeId] = useState(
    boards[0]?.pathways[0]?.grades.find((g) => g.subjectsKey)?.id ?? "",
  );
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState<"practice" | "timed">("practice");
  const [task, setTask] = useState<WritingTask | null>(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(ALLOCATED_SECONDS);
  const [timerExpired, setTimerExpired] = useState(false);

  const board = boards.find((b) => b.id === boardId);
  const pathway = board ? getPathway(boardId, pathwayId) : undefined;
  const grades = pathway?.grades ?? [];
  const subjectOptions = useMemo(
    () =>
      boardId && pathwayId && gradeId
        ? getSubjectOptions(boardId, pathwayId, gradeId)
        : [],
    [boardId, pathwayId, gradeId],
  );
  const leaf =
    pathwayId && gradeId ? resolveLeafCurriculum(pathwayId, gradeId) : null;

  useEffect(() => {
    if (mode !== "timed" || !task || !startedAt || feedback) return;
    const id = window.setInterval(() => {
      const used = Math.floor((Date.now() - startedAt) / 1000);
      const left = Math.max(0, ALLOCATED_SECONDS - used);
      setSecondsLeft(left);
      if (left === 0) setTimerExpired(true);
    }, 1000);
    return () => window.clearInterval(id);
  }, [mode, task, startedAt, feedback]);

  function onBoardChange(next: string) {
    setBoardId(next);
    const b = boards.find((x) => x.id === next);
    const p = b?.pathways[0];
    setPathwayId(p?.id ?? "");
    const g = p?.grades.find((gr) => gr.subjectsKey) ?? p?.grades[0];
    setGradeId(g?.id ?? "");
    setSubject("");
  }

  async function onGenerateTask(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setFeedback(null);
    setTask(null);
    if (!leaf) {
      setError("Select a valid curriculum.");
      return;
    }
    if (!subject.trim() || !topic.trim()) {
      setError("Subject and topic are required.");
      return;
    }
    setBusy(true);
    try {
      const t = await generateWritingTask({
        curriculumId: leaf.id,
        curriculumName: leaf.name,
        grade: gradeId,
        subject: subject.trim(),
        topic: topic.trim(),
        mode: mode === "timed" ? "simulation" : "practice",
        responseType: "short",
      });
      setTask(t);
      setAnswer("");
      setFeedback(null);
      setTimerExpired(false);
      setSecondsLeft(ALLOCATED_SECONDS);
      setStartedAt(Date.now());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not generate task");
    } finally {
      setBusy(false);
    }
  }

  async function onGetFeedback() {
    if (!leaf || !task) return;
    setError(null);
    const wc = wordCount(answer);
    if (wc < 20) {
      setError("Write a bit more before requesting feedback.");
      return;
    }
    setBusy(true);
    try {
      const fb =
        mode === "timed"
          ? await getWritingExamSimulationFeedback({
              questionText: task.questionText,
              stimulusText: task.stimulusText ?? "",
              studentAnswer: answer.trim(),
              curriculumId: leaf.id,
              grade: gradeId,
              subject: subject.trim(),
              topic: topic.trim(),
              wordCount: wc,
              timeUsedSeconds: startedAt
                ? Math.min(
                    ALLOCATED_SECONDS,
                    Math.floor((Date.now() - startedAt) / 1000),
                  )
                : ALLOCATED_SECONDS,
              timeAllocatedSeconds: ALLOCATED_SECONDS,
              timerExpired,
            })
          : await getWritingPracticeFeedback({
              questionText: task.questionText,
              stimulusText: task.stimulusText ?? "",
              studentAnswer: answer.trim(),
              curriculumId: leaf.id,
              grade: gradeId,
              subject: subject.trim(),
              topic: topic.trim(),
              wordCount: wc,
            });
      setFeedback(fb);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Feedback failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <DataConsentGate>
      <AppShell>
        <PageHeader
          eyebrow="Practice"
          title="Writing practice"
          subtitle="Practice or timed exam-style writing via existing Cloud Functions — no backend changes."
        />

        {isGuest || !user ? (
          <EmptyState
            title="Sign in required"
            body="Writing practice uses authenticated callables."
            action={
              <Link href="/login">
                <PrimaryButton type="button" className="w-auto px-5">
                  Sign in
                </PrimaryButton>
              </Link>
            }
          />
        ) : (
          <div className="mx-auto max-w-2xl space-y-6">
            {error ? <Alert>{error}</Alert> : null}

            <form
              onSubmit={(e) => void onGenerateTask(e)}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:p-6"
            >
              <Field label="Mode">
                <Select
                  value={mode}
                  onChange={(e) =>
                    setMode(e.target.value as "practice" | "timed")
                  }
                  disabled={busy}
                >
                  <option value="practice">Practice (untimed)</option>
                  <option value="timed">Exam simulation (timed)</option>
                </Select>
              </Field>
              <Field label="Curriculum">
                <Select
                  value={boardId}
                  onChange={(e) => onBoardChange(e.target.value)}
                  disabled={busy}
                >
                  {boards.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label={board?.pathwayLabel ?? "Pathway"}>
                <Select
                  value={pathwayId}
                  onChange={(e) => {
                    setPathwayId(e.target.value);
                    const p = getPathway(boardId, e.target.value);
                    const g =
                      p?.grades.find((gr) => gr.subjectsKey) ?? p?.grades[0];
                    setGradeId(g?.id ?? "");
                    setSubject("");
                  }}
                  disabled={busy}
                >
                  {(board?.pathways ?? []).map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Grade">
                <Select
                  value={gradeId}
                  onChange={(e) => {
                    setGradeId(e.target.value);
                    setSubject("");
                  }}
                  disabled={busy}
                >
                  {grades.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Subject">
                {subjectOptions.length > 0 ? (
                  <Select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled={busy}
                  >
                    <option value="">Select subject</option>
                    {subjectOptions.map((s) => (
                      <option key={s} value={s.split("(")[0].trim()}>
                        {s}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <TextInput
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. English"
                    disabled={busy}
                  />
                )}
              </Field>
              <Field label="Topic">
                <TextInput
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Persuasive writing"
                  disabled={busy}
                  required
                />
              </Field>
              <PrimaryButton type="submit" loading={busy}>
                Generate writing task
              </PrimaryButton>
            </form>

            {task ? (
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="text-lg font-semibold text-[var(--color-text)]">
                    Your task
                  </h2>
                  {mode === "timed" ? (
                    <p
                      className={`text-sm font-semibold tabular-nums ${
                        secondsLeft <= 60
                          ? "text-[var(--color-error)]"
                          : "text-[var(--color-vivid-cyan)]"
                      }`}
                    >
                      {Math.floor(secondsLeft / 60)}:
                      {String(secondsLeft % 60).padStart(2, "0")}
                      {timerExpired ? " · time up" : ""}
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text)]">
                  {task.questionText}
                </p>
                {task.stimulusText ? (
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    {task.stimulusText}
                  </p>
                ) : null}
                {task.planningGuidance?.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-muted)]">
                    {task.planningGuidance.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-4">
                  <TextArea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    rows={8}
                    placeholder="Write your response…"
                    disabled={busy}
                  />
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {wordCount(answer)} words
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <PrimaryButton
                    type="button"
                    className="w-auto px-5"
                    loading={busy}
                    onClick={() => void onGetFeedback()}
                  >
                    Get{" "}
                    {mode === "timed" ? "exam simulation" : "practice"} feedback
                  </PrimaryButton>
                  <SecondaryButton
                    type="button"
                    className="w-auto px-5"
                    disabled={busy}
                    onClick={() => {
                      setTask(null);
                      setAnswer("");
                      setFeedback(null);
                      setStartedAt(null);
                      setTimerExpired(false);
                      setSecondsLeft(ALLOCATED_SECONDS);
                    }}
                  >
                    Clear
                  </SecondaryButton>
                </div>
              </div>
            ) : null}

            {feedback ? (
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
                <h2 className="text-lg font-semibold text-[var(--color-text)]">
                  Feedback
                </h2>
                <div className="mt-3">
                  <MarkdownMathView content={feedback} />
                </div>
              </div>
            ) : null}
          </div>
        )}
      </AppShell>
    </DataConsentGate>
  );
}
