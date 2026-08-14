"use client";

import { useState } from "react";

import type { Quiz } from "@/lib/student/quiz-parser";
import { SecondaryButton } from "@/components/ui/auth-form";

/** Review-mode quiz (Phase 3). Interactive scoring lands in Phase 4. */
export function QuizReview({ quiz }: { quiz: Quiz }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const q = quiz.questions[index];
  if (!q) return null;

  return (
    <div className="mx-auto w-full max-w-3xl lg:max-w-none">
      <p
        className="mb-3 font-semibold tracking-wide text-[var(--color-vivid-cyan)] uppercase"
        style={{ fontSize: "0.75rem" }}
      >
        Question {index + 1} / {quiz.questions.length}
        {q.type !== "multipleChoice" ? ` · ${q.type}` : ""}
      </p>
      <div className="min-h-[14rem] rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:min-h-[16rem] sm:p-6 md:min-h-[18rem] md:p-8 lg:min-h-[20rem] lg:p-10">
        <p
          className="font-medium text-[var(--color-text)]"
          style={{ fontSize: "1.125rem", lineHeight: 1.6 }}
        >
          {q.questionText}
        </p>
        {q.options.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {q.options.map((opt) => {
              const letter = opt.charAt(0).toUpperCase();
              const isCorrect =
                revealed &&
                q.correctAnswer &&
                letter === q.correctAnswer.toUpperCase();
              return (
                <li
                  key={opt}
                  className={`rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3 ${
                    isCorrect
                      ? "border-[var(--color-soft-green)] bg-[var(--color-soft-green-light)] text-[var(--color-text)]"
                      : "border-[var(--color-border)] bg-[var(--color-input-bg)] text-[var(--color-text)]"
                  }`}
                  style={{ fontSize: "1rem" }}
                >
                  {opt}
                </li>
              );
            })}
          </ul>
        ) : (
          <p
            className="mt-3 text-[var(--color-text-muted)]"
            style={{ fontSize: "1rem" }}
          >
            Written response
            {q.maxWords ? ` · up to ~${q.maxWords} words` : ""}
          </p>
        )}

        {revealed && q.correctAnswer ? (
          <p
            className="mt-4 font-semibold text-[var(--color-soft-green)]"
            style={{ fontSize: "1rem" }}
          >
            Answer: {q.correctAnswer}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {q.correctAnswer || q.options.length > 0 ? (
            <SecondaryButton
              type="button"
              className="w-auto px-4"
              onClick={() => setRevealed((r) => !r)}
            >
              {revealed ? "Hide answer" : "Reveal answer"}
            </SecondaryButton>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-nowrap items-center justify-between gap-3">
        <SecondaryButton
          type="button"
          className="!w-auto shrink-0 px-4"
          disabled={index === 0}
          onClick={() => {
            setIndex((i) => Math.max(0, i - 1));
            setRevealed(false);
          }}
        >
          Previous
        </SecondaryButton>
        <SecondaryButton
          type="button"
          className="!w-auto shrink-0 px-4"
          disabled={index >= quiz.questions.length - 1}
          onClick={() => {
            setIndex((i) => Math.min(quiz.questions.length - 1, i + 1));
            setRevealed(false);
          }}
        >
          Next
        </SecondaryButton>
      </div>
    </div>
  );
}
