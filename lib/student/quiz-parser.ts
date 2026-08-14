export type QuizQuestionType = "multipleChoice" | "shortAnswer" | "essay";

export type QuizQuestion = {
  questionNumber: number;
  questionText: string;
  /** Stored as "A. text" lines for display; scoring uses the letter. */
  options: string[];
  correctAnswer: string;
  type: QuizQuestionType;
  maxWords?: number;
};

export type Quiz = {
  questions: QuizQuestion[];
  subject: string;
  topic: string;
  difficulty: string;
};

export function isMultipleChoice(q: QuizQuestion): boolean {
  return q.type === "multipleChoice" && q.options.length > 0;
}

export function isWrittenResponse(q: QuizQuestion): boolean {
  return q.type === "shortAnswer" || q.type === "essay";
}

/** Flutter QuizQuestion.isCorrect parity — letters A–D. */
export function isCorrectAnswer(
  question: QuizQuestion,
  selectedAnswer: string,
): boolean {
  if (!isMultipleChoice(question)) return false;
  const selected = selectedAnswer.trim().toUpperCase();
  const correct = question.correctAnswer.trim().toUpperCase();
  if (selected === correct) return true;

  const index = letterToIndex(correct);
  if (index >= 0 && index < question.options.length) {
    const optionText = question.options[index].trim().toUpperCase();
    if (selected === optionText) return true;
    // Compare without leading "A. "
    const stripped = optionText.replace(/^[A-D]\.\s*/i, "");
    if (selected === stripped) return true;
  }
  return false;
}

export function letterToIndex(letter: string): number {
  switch (letter.trim().toUpperCase()) {
    case "A":
      return 0;
    case "B":
      return 1;
    case "C":
      return 2;
    case "D":
      return 3;
    default:
      return -1;
  }
}

export function optionLetter(option: string, index: number): string {
  const match = option.match(/^([A-Da-d])\./);
  if (match) return match[1].toUpperCase();
  return String.fromCharCode(65 + index);
}

/**
 * Minimal port of Flutter QuizParserService — MC + written markers.
 * Returns null if no Answers section / no questions parsed.
 */
export function parseQuizFromMarkdown(
  notes: string,
  meta?: { subject?: string; topic?: string; difficulty?: string },
): Quiz | null {
  const answersPattern =
    /(?:^|\n)\s*(?:#{1,6}\s*|\*\*|\*)?\s*(?:answers?|answer\s*key|answer\s*section)\s*:?\s*\n/im;
  const answersMatch = answersPattern.exec(notes);
  if (!answersMatch || answersMatch.index === undefined) return null;

  const questionsText = notes.slice(0, answersMatch.index).trim();
  const answersText = notes.slice(answersMatch.index).trim();

  const answerMap = new Map<number, string>();
  for (const line of answersText.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (
      /^(?:#{1,6}\s*|\*\*|\*)?\s*(answers?|answer\s*key|answer\s*section)/i.test(
        trimmed,
      )
    ) {
      continue;
    }
    const match = trimmed.match(/^(\d+)[.)]\s*([A-Da-d]|.*?)$/);
    if (!match) continue;
    const num = Number.parseInt(match[1], 10);
    const answer = match[2].trim();
    if (!num || !answer) continue;
    const letter = answer.match(/^([A-Da-d])/);
    answerMap.set(num, letter ? letter[1].toUpperCase() : answer);
  }

  const questions: QuizQuestion[] = [];
  const blocks = questionsText.split(/\n\s*(?=\d+[.)])/);

  for (const block of blocks) {
    const trimmedBlock = block.trim();
    if (!trimmedBlock) continue;

    const numMatch = trimmedBlock.match(/^(\d+)[.)]/);
    if (!numMatch) continue;
    const questionNum = Number.parseInt(numMatch[1], 10);
    if (!questionNum) continue;

    const lines = trimmedBlock.split("\n");
    let questionText = lines[0].replace(/^\d+[.)]\s*/, "").trim();
    if (!questionText) continue;

    const shortMarker = /\[SHORT_ANSWER\s*(?:100-200)?\s*words?\]/i;
    const essayMarker = /\[ESSAY\s*(?:250-800)?\s*words?\]/i;

    if (shortMarker.test(questionText)) {
      questionText = questionText.replace(shortMarker, "").trim();
      questions.push({
        questionNumber: questionNum,
        questionText,
        options: [],
        correctAnswer: "",
        type: "shortAnswer",
        maxWords: 200,
      });
      continue;
    }
    if (essayMarker.test(questionText)) {
      questionText = questionText.replace(essayMarker, "").trim();
      questions.push({
        questionNumber: questionNum,
        questionText,
        options: [],
        correctAnswer: "",
        type: "essay",
        maxWords: 800,
      });
      continue;
    }

    const options: string[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const opt = line.match(/^([A-Da-d])[.)]\s*(.+)$/);
      if (opt) options.push(`${opt[1].toUpperCase()}. ${opt[2].trim()}`);
    }

    const correct = answerMap.get(questionNum) ?? "";
    questions.push({
      questionNumber: questionNum,
      questionText,
      options,
      correctAnswer: correct,
      type: options.length > 0 ? "multipleChoice" : "shortAnswer",
    });
  }

  if (questions.length === 0) return null;

  return {
    questions,
    subject: meta?.subject ?? "",
    topic: meta?.topic ?? "",
    difficulty: meta?.difficulty ?? "",
  };
}

export function scoreQuiz(
  quiz: Quiz,
  selectedAnswers: Record<number, string>,
): { score: number; mcTotal: number } {
  let score = 0;
  let mcTotal = 0;
  for (let i = 0; i < quiz.questions.length; i++) {
    const q = quiz.questions[i];
    if (!isMultipleChoice(q)) continue;
    mcTotal += 1;
    const selected = selectedAnswers[i];
    if (selected && isCorrectAnswer(q, selected)) score += 1;
  }
  return { score, mcTotal };
}

export function wordCount(text: string): number {
  const t = text.trim();
  if (!t) return 0;
  return t.split(/\s+/).length;
}

export function trimToWordCount(text: string, max: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= max) return text.trim();
  return words.slice(0, max).join(" ");
}
