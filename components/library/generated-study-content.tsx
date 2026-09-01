"use client";

import { useMemo, useState, type CSSProperties } from "react";

import { PrimaryButton, SecondaryButton } from "@/components/ui/auth-form";
import { InteractiveQuiz } from "@/components/ui/interactive-quiz";
import { MarkdownMathView } from "@/components/ui/markdown-math-view";
import { parseFlashcardsFromMarkdown } from "@/lib/student/flashcard-parser";
import {
  parseQuizFromMarkdown,
  stripQuizAnswersForDisplay,
  type Quiz,
} from "@/lib/student/quiz-parser";

export type StudyContentInput = {
  studyMode: string;
  subject: string;
  topic: string;
  difficulty?: string;
  notes: string;
};

type GeneratedStudyContentProps = {
  note: StudyContentInput;
  /** When set, quiz attempts are saved to the account. Omit for guest preview. */
  uid?: string | null;
  showRawMarkdownToggle?: boolean;
};

const CONTENT_CARD_CLASS =
  "library-content-card w-full min-h-[22rem] rounded-[24px] border-[5px] border-[#F3F7A8] bg-white p-6 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:min-h-[26rem] sm:rounded-[28px] sm:p-8 md:min-h-[30rem] md:p-10 lg:min-h-[34rem] lg:p-12 xl:min-h-[38rem] xl:p-14";

const LIME = "#E8FF2F";
const BLUE = "#4F35F2";
const PINK = "#FF2D8A";

const FLASHCARD_THEMES = [
  {
    front: {
      bg: BLUE,
      label: "rgba(255,255,255,0.9)",
      text: "#FFFFFF",
      hint: "rgba(255,255,255,0.75)",
    },
    back: { bg: "#E4DEFF", label: BLUE, text: "#1E1B4B", hint: "#6B7280" },
  },
  {
    front: {
      bg: PINK,
      label: "rgba(255,255,255,0.9)",
      text: "#FFFFFF",
      hint: "rgba(255,255,255,0.75)",
    },
    back: { bg: "#FFE0EF", label: PINK, text: "#1E1B4B", hint: "#6B7280" },
  },
  {
    front: { bg: LIME, label: BLUE, text: "#1E1B4B", hint: "#5B5A6A" },
    back: { bg: "#F5FFB8", label: BLUE, text: "#1E1B4B", hint: "#6B7280" },
  },
] as const;

function flashcardTheme(index: number) {
  return FLASHCARD_THEMES[index % FLASHCARD_THEMES.length]!;
}

export function GeneratedStudyContent({
  note,
  uid,
  showRawMarkdownToggle = true,
}: GeneratedStudyContentProps) {
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizSession, setQuizSession] = useState(0);

  const flashcards = useMemo(() => {
    if (note.studyMode !== "Flashcards") return null;
    return parseFlashcardsFromMarkdown(note.notes);
  }, [note.notes, note.studyMode]);

  const quiz = useMemo(() => {
    if (note.studyMode !== "Quiz") return null;
    return parseQuizFromMarkdown(note.notes, {
      subject: note.subject,
      topic: note.topic,
      difficulty: note.difficulty,
    });
  }, [note.difficulty, note.notes, note.studyMode, note.subject, note.topic]);

  const flashTheme = flashcardTheme(cardIndex);

  if (flashcards && flashcards.length > 0) {
    return (
      <div className={CONTENT_CARD_CLASS}>
        <div className="mx-auto w-full max-w-5xl xl:max-w-6xl">
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="flashcard-scene block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
            aria-label={flipped ? "Show front of card" : "Show back of card"}
          >
            <div
              key={cardIndex}
              className={`flashcard-inner min-h-64 sm:min-h-72 md:min-h-80 lg:min-h-[28rem] xl:min-h-[32rem] ${
                flipped ? "is-flipped" : ""
              }`}
            >
              <div
                className="flashcard-face flashcard-face-front"
                style={
                  {
                    background: flashTheme.front.bg,
                    color: flashTheme.front.text,
                    ["--color-text"]: flashTheme.front.text,
                  } as CSSProperties
                }
              >
                <p
                  className="text-xs font-semibold tracking-wide uppercase sm:text-sm md:text-base"
                  style={{ color: flashTheme.front.label }}
                >
                  Front · {cardIndex + 1}/{flashcards.length}
                </p>
                <div
                  className="flashcard-body mt-4 w-full max-w-4xl font-medium"
                  style={{ color: flashTheme.front.text }}
                >
                  <MarkdownMathView
                    size="reading"
                    content={flashcards[cardIndex].front}
                  />
                </div>
                <p
                  className="mt-6 text-xs sm:text-sm md:text-base"
                  style={{ color: flashTheme.front.hint }}
                >
                  Tap to flip
                </p>
              </div>
              <div
                className="flashcard-face flashcard-face-back"
                style={
                  {
                    background: flashTheme.back.bg,
                    color: flashTheme.back.text,
                    ["--color-text"]: flashTheme.back.text,
                  } as CSSProperties
                }
              >
                <p
                  className="text-xs font-semibold tracking-wide uppercase sm:text-sm md:text-base"
                  style={{ color: flashTheme.back.label }}
                >
                  Back · {cardIndex + 1}/{flashcards.length}
                </p>
                <div
                  className="flashcard-body mt-4 w-full max-w-4xl font-medium"
                  style={{ color: flashTheme.back.text }}
                >
                  <MarkdownMathView
                    size="reading"
                    content={flashcards[cardIndex].back}
                  />
                </div>
                <p
                  className="mt-6 text-xs sm:text-sm md:text-base"
                  style={{ color: flashTheme.back.hint }}
                >
                  Tap to flip
                </p>
              </div>
            </div>
          </button>
          <div className="mt-4 flex flex-nowrap items-center justify-between gap-3">
            <SecondaryButton
              type="button"
              className="!w-auto shrink-0 px-4"
              disabled={cardIndex === 0}
              onClick={() => {
                setCardIndex((i) => Math.max(0, i - 1));
                setFlipped(false);
              }}
            >
              Previous
            </SecondaryButton>
            <SecondaryButton
              type="button"
              className="!w-auto shrink-0 px-4"
              disabled={cardIndex >= flashcards.length - 1}
              onClick={() => {
                setCardIndex((i) => Math.min(flashcards.length - 1, i + 1));
                setFlipped(false);
              }}
            >
              Next
            </SecondaryButton>
          </div>
          {showRawMarkdownToggle ? (
            <details className="mt-6 rounded-2xl border border-[#E8E6F0] bg-[#FAFAFC] p-4">
              <summary className="cursor-pointer text-sm font-semibold text-[#111827]">
                View raw markdown
              </summary>
              <div className="mt-3">
                <MarkdownMathView size="reading" content={note.notes} />
              </div>
            </details>
          ) : null}
        </div>
      </div>
    );
  }

  if (note.studyMode === "Quiz") {
    return (
      <div className={CONTENT_CARD_CLASS}>
        {quizStarted && quiz && quiz.questions.length > 0 ? (
          <InteractiveQuiz
            key={`guest-quiz-${quizSession}`}
            quiz={quiz}
            uid={uid ?? undefined}
            subject={note.subject}
            topic={note.topic}
            embedded
            onExit={() => setQuizStarted(false)}
          />
        ) : (
          <>
            <div className="mb-6 flex flex-col items-center gap-2">
              <PrimaryButton
                type="button"
                className="w-auto px-6"
                disabled={!quiz || quiz.questions.length === 0}
                onClick={() => {
                  if (!quiz || quiz.questions.length === 0) return;
                  setQuizSession((n) => n + 1);
                  setQuizStarted(true);
                }}
              >
                Start interactive quiz
              </PrimaryButton>
              {!quiz || quiz.questions.length === 0 ? (
                <p
                  className="max-w-md text-center text-[#6B7280]"
                  style={{ fontSize: "0.875rem" }}
                >
                  This quiz needs multiple-choice questions (A–D) with a clear
                  correct answer to run interactively. You can still review the
                  content below.
                </p>
              ) : null}
            </div>
            <article className="mx-auto w-full max-w-5xl xl:max-w-6xl">
              {quiz && quiz.questions.length > 0 ? (
                <QuizQuestionsPreview quiz={quiz} />
              ) : (
                <MarkdownMathView
                  size="reading"
                  content={
                    stripQuizAnswersForDisplay(note.notes) || "No content."
                  }
                />
              )}
            </article>
          </>
        )}
      </div>
    );
  }

  return (
    <article className={CONTENT_CARD_CLASS}>
      <MarkdownMathView size="reading" content={note.notes || "No content."} />
    </article>
  );
}

/** Questions + options only — no correct answers until interactive results. */
function QuizQuestionsPreview({ quiz }: { quiz: Quiz }) {
  return (
    <div className="space-y-6">
      {quiz.questions.map((q) => (
        <div
          key={q.questionNumber}
          className="rounded-2xl border border-[#E8E6F0] bg-[#FAFAFC] p-4 sm:p-5 md:p-6"
        >
          <p className="text-xs font-semibold tracking-wide text-[#6B7280] uppercase">
            Question {q.questionNumber}
          </p>
          <p className="mt-2 text-base font-medium text-[#111827] sm:text-lg">
            {q.questionText}
          </p>
          {q.options.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {q.options.map((opt) => (
                <li
                  key={opt}
                  className="rounded-xl border border-[#E8E6F0] bg-white px-3 py-2.5 text-sm text-[#111827] sm:px-4 sm:py-3 sm:text-base"
                >
                  {opt}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
