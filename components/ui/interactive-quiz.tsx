"use client";

import { useMemo, useState } from "react";

import {
  Alert,
  PrimaryButton,
  SecondaryButton,
  TextArea,
} from "@/components/ui/auth-form";
import { MarkdownMathView } from "@/components/ui/markdown-math-view";
import { fetchQuizWrittenFeedback } from "@/lib/generate/quiz-feedback";
import {
  isCorrectAnswer,
  isMultipleChoice,
  isWrittenResponse,
  optionLetter,
  scoreQuiz,
  trimToWordCount,
  wordCount,
  type Quiz,
} from "@/lib/student/quiz-parser";
import { saveQuizAttempt } from "@/lib/student/quiz-progress";

const HARD_MAX_WORDS = 1000;

type Phase = "play" | "results";

type InteractiveQuizProps = {
  quiz: Quiz;
  uid: string;
  subject?: string;
  topic?: string;
  /** Compact layout for embedding inside the note content card. */
  embedded?: boolean;
  onExit?: () => void;
};

export function InteractiveQuiz({
  quiz,
  uid,
  subject,
  topic,
  embedded = false,
  onExit,
}: InteractiveQuizProps) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [writtenDraft, setWrittenDraft] = useState("");
  const [uiPhase, setUiPhase] = useState<Phase>("play");
  const [score, setScore] = useState(0);
  const [mcTotal, setMcTotal] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [feedbackByQ, setFeedbackByQ] = useState<Record<number, string>>({});
  const [feedbackBusy, setFeedbackBusy] = useState<number | null>(null);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);

  const question = quiz.questions[index];
  const answeredCount = useMemo(() => {
    return quiz.questions.reduce((acc, _q, i) => {
      const a = answers[i]?.trim();
      return acc + (a ? 1 : 0);
    }, 0);
  }, [quiz, answers]);

  function persistWrittenIfNeeded(fromIndex: number) {
    const q = quiz.questions[fromIndex];
    if (!q || !isWrittenResponse(q)) return;
    let text = writtenDraft.trim();
    const max = Math.min(q.maxWords ?? HARD_MAX_WORDS, HARD_MAX_WORDS);
    if (wordCount(text) > max) text = trimToWordCount(text, max);
    setAnswers((prev) => ({ ...prev, [fromIndex]: text }));
  }

  function goTo(next: number) {
    persistWrittenIfNeeded(index);
    setIndex(next);
    const q = quiz.questions[next];
    if (q && isWrittenResponse(q)) {
      setWrittenDraft(answers[next] ?? "");
    } else {
      setWrittenDraft("");
    }
  }

  async function onSubmit() {
    persistWrittenIfNeeded(index);

    const nextAnswers = { ...answers };
    const q = quiz.questions[index];
    if (q && isWrittenResponse(q)) {
      let text = writtenDraft.trim();
      const max = Math.min(q.maxWords ?? HARD_MAX_WORDS, HARD_MAX_WORDS);
      if (wordCount(text) > max) text = trimToWordCount(text, max);
      nextAnswers[index] = text;
      setAnswers(nextAnswers);
    }

    const { score: s, mcTotal: m } = scoreQuiz(quiz, nextAnswers);
    setScore(s);
    setMcTotal(m);
    setSaving(true);
    setError(null);
    try {
      await saveQuizAttempt(uid, {
        subject: quiz.subject || subject || "",
        topic: quiz.topic || topic || "",
        score: s,
        totalQuestions: quiz.questions.length,
      });
      setUiPhase("results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save attempt");
    } finally {
      setSaving(false);
    }
  }

  async function requestFeedback(qi: number) {
    const q = quiz.questions[qi];
    const response = answers[qi]?.trim();
    if (!q || !response || !isWrittenResponse(q)) return;
    setFeedbackError(null);
    setFeedbackBusy(qi);
    try {
      const feedback = await fetchQuizWrittenFeedback({
        questionText: q.questionText,
        userResponse: response,
        questionType:
          q.type === "essay" ? "longWrittenResponse" : "shortAnswer",
        maxWords: q.maxWords,
      });
      setFeedbackByQ((prev) => ({ ...prev, [qi]: feedback }));
    } catch (err) {
      setFeedbackError(
        err instanceof Error ? err.message : "Feedback failed",
      );
    } finally {
      setFeedbackBusy(null);
    }
  }

  function retake() {
    setAnswers({});
    setWrittenDraft("");
    setIndex(0);
    setFeedbackByQ({});
    setError(null);
    setFeedbackError(null);
    setUiPhase("play");
  }

  if (uiPhase === "results") {
    return (
      <div className="mx-auto w-full max-w-3xl lg:max-w-none">
        <div className="mb-5 text-center sm:text-left">
          <p
            className="font-semibold tracking-wide text-[#4F35F2] uppercase"
            style={{ fontSize: "0.75rem" }}
          >
            Results
          </p>
          <h2
            className="mt-1 font-heading font-extrabold text-[#111827]"
            style={{ fontSize: "1.5rem" }}
          >
            {score} / {mcTotal || quiz.questions.length} correct
          </h2>
          <p className="mt-1 text-[#6B7280]" style={{ fontSize: "0.9375rem" }}>
            {mcTotal > 0
              ? `Multiple-choice accuracy ${Math.round((score / mcTotal) * 100)}% · Attempt saved`
              : "Written responses saved (not auto-scored) · Attempt saved"}
          </p>
        </div>

        {feedbackError ? <Alert>{feedbackError}</Alert> : null}

        <div className="space-y-4">
          {quiz.questions.map((q, qi) => {
            const selected = answers[qi];
            const mc = isMultipleChoice(q);
            const correct =
              mc && selected ? isCorrectAnswer(q, selected) : false;
            return (
              <div
                key={q.questionNumber}
                className={`rounded-2xl border p-4 sm:p-5 ${
                  mc
                    ? correct
                      ? "border-[var(--color-soft-green)]/50 bg-[#FAFAFC]"
                      : "border-[var(--color-error)]/35 bg-[#FAFAFC]"
                    : "border-[#E8E6F0] bg-[#FAFAFC]"
                }`}
              >
                <p
                  className="font-semibold text-[#6B7280]"
                  style={{ fontSize: "0.75rem" }}
                >
                  Q{q.questionNumber}
                  {mc
                    ? correct
                      ? " · Correct"
                      : " · Incorrect"
                    : " · Written"}
                </p>
                <p
                  className="mt-1 font-medium text-[#111827]"
                  style={{ fontSize: "1.0625rem" }}
                >
                  {q.questionText}
                </p>
                {mc ? (
                  <p className="mt-2 text-[#6B7280]" style={{ fontSize: "0.9375rem" }}>
                    Your answer: {selected || "—"} · Correct:{" "}
                    {q.correctAnswer || "—"}
                  </p>
                ) : (
                  <div className="mt-2">
                    <p
                      className="whitespace-pre-wrap text-[#6B7280]"
                      style={{ fontSize: "0.9375rem" }}
                    >
                      {selected || "(blank)"}
                    </p>
                    {selected ? (
                      <div className="mt-3">
                        <SecondaryButton
                          type="button"
                          className="w-auto px-4"
                          disabled={feedbackBusy === qi}
                          onClick={() => void requestFeedback(qi)}
                        >
                          {feedbackBusy === qi
                            ? "Getting feedback…"
                            : "Get AI feedback"}
                        </SecondaryButton>
                        {feedbackByQ[qi] ? (
                          <div className="mt-3 rounded-xl border border-[#E8E6F0] bg-white p-3">
                            <MarkdownMathView content={feedbackByQ[qi]} />
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <PrimaryButton
            type="button"
            className="w-auto px-5"
            onClick={retake}
          >
            Retake
          </PrimaryButton>
          {onExit ? (
            <SecondaryButton
              type="button"
              className="w-auto px-5"
              onClick={onExit}
            >
              {embedded ? "Back to preview" : "Back to note"}
            </SecondaryButton>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl lg:max-w-none">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p
          className="font-semibold tracking-wide text-[#4F35F2] uppercase"
          style={{ fontSize: "0.75rem" }}
        >
          Interactive quiz · {answeredCount}/{quiz.questions.length} answered
        </p>
        {onExit && embedded ? (
          <button
            type="button"
            onClick={onExit}
            className="text-sm font-semibold text-[#6B7280] transition hover:text-[#4F35F2]"
          >
            Exit quiz
          </button>
        ) : null}
      </div>

      {error ? (
        <div className="mb-4">
          <Alert>{error}</Alert>
        </div>
      ) : null}

      {question ? (
        <div className="min-h-[14rem] rounded-2xl border border-[#E8E6F0] bg-[#FAFAFC] p-5 sm:min-h-[16rem] sm:p-6 md:min-h-[18rem] md:p-8 lg:min-h-[20rem] lg:p-10">
          <p
            className="font-semibold tracking-wide text-[#4F35F2] uppercase"
            style={{ fontSize: "0.75rem" }}
          >
            Question {index + 1} / {quiz.questions.length}
            {isWrittenResponse(question)
              ? ` · ${question.type === "essay" ? "Essay" : "Short answer"}`
              : ""}
          </p>
          <p
            className="mt-3 font-medium text-[#111827]"
            style={{ fontSize: "1.125rem", lineHeight: 1.6 }}
          >
            {question.questionText}
          </p>

          {isMultipleChoice(question) ? (
            <ul className="mt-4 space-y-2">
              {question.options.map((opt, oi) => {
                const letter = optionLetter(opt, oi);
                const selected = answers[index] === letter;
                return (
                  <li key={opt}>
                    <button
                      type="button"
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [index]: letter,
                        }))
                      }
                      className={`w-full rounded-xl border px-3 py-2.5 text-left transition sm:px-4 sm:py-3 ${
                        selected
                          ? "border-[#4F35F2] bg-[#4F35F2]/10 text-[#111827]"
                          : "border-[#E8E6F0] bg-white text-[#111827] hover:border-[#4F35F2]/40"
                      }`}
                      style={{ fontSize: "1rem" }}
                    >
                      {opt}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="mt-4">
              <TextArea
                value={writtenDraft}
                onChange={(e) => setWrittenDraft(e.target.value)}
                placeholder="Type your answer…"
                rows={6}
              />
              <p className="mt-1 text-[#6B7280]" style={{ fontSize: "0.75rem" }}>
                {wordCount(writtenDraft)} /{" "}
                {Math.min(
                  question.maxWords ?? HARD_MAX_WORDS,
                  HARD_MAX_WORDS,
                )}{" "}
                words
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-nowrap items-center justify-between gap-3">
            <SecondaryButton
              type="button"
              className="!w-auto shrink-0 px-4"
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
            >
              Previous
            </SecondaryButton>
            {index < quiz.questions.length - 1 ? (
              <PrimaryButton
                type="button"
                className="!w-auto shrink-0 px-5"
                onClick={() => goTo(index + 1)}
              >
                Next
              </PrimaryButton>
            ) : (
              <PrimaryButton
                type="button"
                className="!w-auto shrink-0 px-5"
                loading={saving}
                onClick={() => void onSubmit()}
              >
                Submit quiz
              </PrimaryButton>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
