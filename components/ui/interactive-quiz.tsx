"use client";

import { useState } from "react";

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
const BLUE = "#4F35F2";

type Phase = "play" | "results";

type InteractiveQuizProps = {
  quiz: Quiz;
  uid?: string;
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
      if (uid) {
        await saveQuizAttempt(uid, {
          subject: quiz.subject || subject || "",
          topic: quiz.topic || topic || "",
          score: s,
          totalQuestions: quiz.questions.length,
        });
      }
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
      <div className="mx-auto w-full max-w-5xl xl:max-w-6xl">
        <div
          className="mb-5 flex min-h-40 flex-col items-center justify-center rounded-2xl px-6 py-8 text-center shadow-[0_8px_24px_rgba(17,24,39,0.1)] sm:min-h-48 sm:rounded-3xl sm:px-10 sm:py-10 md:min-h-56 md:px-12 lg:min-h-64 lg:px-14 lg:py-12"
          style={{ background: BLUE, color: "#FFFFFF" }}
        >
          <p
            className="text-xs font-semibold tracking-wide uppercase sm:text-sm"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Results
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold sm:text-4xl md:text-[2.5rem]">
            {score} / {mcTotal || quiz.questions.length} correct
          </h2>
          <p
            className="mt-2 max-w-2xl text-base sm:text-lg"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
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
                className={`rounded-2xl border p-4 text-center sm:p-5 md:p-6 ${
                  mc
                    ? correct
                      ? "border-[var(--color-soft-green)]/50 bg-[#FAFAFC]"
                      : "border-[var(--color-error)]/35 bg-[#FAFAFC]"
                    : "border-[#E8E6F0] bg-[#FAFAFC]"
                }`}
              >
                <p className="text-xs font-semibold text-[#6B7280] sm:text-sm">
                  Q{q.questionNumber}
                  {mc
                    ? correct
                      ? " · Correct"
                      : " · Incorrect"
                    : " · Written"}
                </p>
                <p className="mt-1 text-lg font-medium text-[#111827] sm:text-xl md:text-[1.35rem]">
                  {q.questionText}
                </p>
                {mc ? (
                  <p className="mt-2 text-base text-[#6B7280] sm:text-lg">
                    Your answer: {selected || "—"} · Correct:{" "}
                    {q.correctAnswer || "—"}
                  </p>
                ) : (
                  <div className="mt-2">
                    <p className="whitespace-pre-wrap text-base text-[#6B7280] sm:text-lg">
                      {selected || "(blank)"}
                    </p>
                    {selected ? (
                      <div className="mt-3 flex flex-col items-center">
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
                          <div className="mt-3 w-full rounded-xl border border-[#E8E6F0] bg-white p-3 text-left sm:p-4">
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

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
    <div className="mx-auto w-full max-w-5xl xl:max-w-6xl">
      {onExit && embedded ? (
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={onExit}
            className="text-sm font-semibold text-[#6B7280] transition hover:text-[#4F35F2] sm:text-base"
          >
            Exit quiz
          </button>
        </div>
      ) : null}

      {error ? (
        <div className="mb-4">
          <Alert>{error}</Alert>
        </div>
      ) : null}

      {question ? (
        <>
          <div
            key={index}
            className="flex min-h-64 flex-col items-center justify-center rounded-2xl px-6 py-8 text-center shadow-[0_8px_24px_rgba(17,24,39,0.1)] sm:min-h-72 sm:rounded-3xl sm:px-10 sm:py-10 md:min-h-80 md:px-12 md:py-12 lg:min-h-[28rem] lg:px-14 lg:py-14 xl:min-h-[32rem]"
            style={{ background: BLUE, color: "#FFFFFF" }}
          >
            <p
              className="text-xs font-semibold tracking-wide uppercase sm:text-sm md:text-base"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Question {index + 1} / {quiz.questions.length}
              {isWrittenResponse(question)
                ? ` · ${question.type === "essay" ? "Essay" : "Short answer"}`
                : ""}
            </p>
            <p className="mt-4 w-full max-w-4xl text-xl font-medium leading-relaxed sm:mt-5 sm:text-2xl md:text-[1.75rem] lg:text-[2rem]">
              {question.questionText}
            </p>

            {isMultipleChoice(question) ? (
              <ul className="mt-6 w-full max-w-3xl space-y-2.5 sm:mt-8 sm:space-y-3 md:max-w-4xl">
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
                        className={`w-full rounded-xl border px-4 py-3 text-center text-base transition sm:rounded-2xl sm:px-5 sm:py-3.5 sm:text-lg md:text-xl ${
                          selected
                            ? "border-[#E8FF2F] bg-[#E8FF2F] text-[#4F35F2]"
                            : "border-white/25 bg-white/15 text-white hover:bg-white/25"
                        }`}
                      >
                        {opt}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="mt-6 w-full max-w-3xl text-left sm:mt-8 md:max-w-4xl">
                <TextArea
                  value={writtenDraft}
                  onChange={(e) => setWrittenDraft(e.target.value)}
                  placeholder="Type your answer…"
                  rows={6}
                />
                <p
                  className="mt-1 text-center text-xs sm:text-sm"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {wordCount(writtenDraft)} /{" "}
                  {Math.min(
                    question.maxWords ?? HARD_MAX_WORDS,
                    HARD_MAX_WORDS,
                  )}{" "}
                  words
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-nowrap items-center justify-between gap-3 sm:mt-6">
            <SecondaryButton
              type="button"
              className="!w-auto shrink-0 px-4 sm:px-5"
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
            >
              Previous
            </SecondaryButton>
            {index < quiz.questions.length - 1 ? (
              <PrimaryButton
                type="button"
                className="!w-auto shrink-0 px-5 sm:px-6"
                onClick={() => goTo(index + 1)}
              >
                Next
              </PrimaryButton>
            ) : (
              <PrimaryButton
                type="button"
                className="!w-auto shrink-0 px-5 sm:px-6"
                loading={saving}
                onClick={() => void onSubmit()}
              >
                Submit quiz
              </PrimaryButton>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
