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

function stripLeadingTrailingAsterisks(line: string): string {
  return line.replace(/^\*+/, "").replace(/\*+$/, "").trim();
}

function extractAnswerLetter(raw: string): string | null {
  const leading = raw.match(/^\s*[([{]?\s*([A-Da-d])\s*[)\]}]?[.)]?\s*/);
  if (leading) return leading[1].toUpperCase();
  const any = raw.match(/\b([A-Da-d])\b/);
  if (any) return any[1].toUpperCase();
  return null;
}

/** Prefer the Quiz body; drop Overview / Common Mistakes / Examples tails. */
function extractQuizBody(notes: string): string {
  const lines = notes.split("\n");
  let startIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const t = stripLeadingTrailingAsterisks(lines[i].trim());
    // Standalone "Quiz" section heading (not "Study Notes: … Quiz").
    if (/^#{0,6}\s*Quiz\s*$/i.test(t)) startIdx = i;
  }
  let body =
    startIdx >= 0 ? lines.slice(startIdx + 1).join("\n") : notes;

  const cut = body.search(
    /(?:^|\n)\s*(?:#{1,6}\s*)?\*{0,2}\s*(?:Common Mistakes|Examples|Mnemonics)\s*\*{0,2}\s*(?:\n|$)/im,
  );
  if (cut >= 0) body = body.slice(0, cut);
  return body.trim();
}

/**
 * Find the Answers / Answer Key section. Tolerates markdown headings and bold.
 * Falls back to synthesizing a split when answers are listed as "1. A" near the end.
 */
function findAnswersSplit(
  notes: string,
): { questionsText: string; answersText: string } | null {
  const answersPattern =
    /(?:^|\n)\s*(?:#{1,6}\s*)?\*{0,2}\s*(?:answer\s*key|answer\s*section|answers)\s*\*{0,2}\s*:?\s*(?:\n|$)/im;
  const answersMatch = answersPattern.exec(notes);
  if (answersMatch && answersMatch.index !== undefined) {
    return {
      questionsText: notes.slice(0, answersMatch.index).trim(),
      answersText: notes.slice(answersMatch.index).trim(),
    };
  }

  const lines = notes.split("\n");
  let start = -1;
  let letterHits = 0;
  for (let i = lines.length - 1; i >= 0; i--) {
    const t = stripLeadingTrailingAsterisks(lines[i].trim());
    if (!t) continue;
    const m = t.match(/^(\d+)\s*[.）：:\-]\s*(.+)$/);
    if (m && extractAnswerLetter(m[2])) {
      start = i;
      letterHits += 1;
      continue;
    }
    if (start >= 0) break;
  }
  if (start >= 0 && letterHits >= 2) {
    return {
      questionsText: lines.slice(0, start).join("\n").trim(),
      answersText: lines.slice(start).join("\n").trim(),
    };
  }

  return null;
}

function parseAnswerMap(answersText: string): Map<number, string> {
  const answerMap = new Map<number, string>();
  for (const line of answersText.split("\n")) {
    const trimmed = stripLeadingTrailingAsterisks(line.trim());
    if (!trimmed) continue;
    if (
      /^(?:#{1,6}\s*)?\*{0,2}\s*(answer\s*key|answer\s*section|answers)\b/i.test(
        trimmed,
      )
    ) {
      continue;
    }
    const match = trimmed.match(/^(\d+)\s*[.）):\-]\s*(.+?)\s*$/);
    if (!match) continue;
    const num = Number.parseInt(match[1], 10);
    const raw = match[2].trim();
    if (!num || !raw) continue;
    const letter = extractAnswerLetter(raw);
    answerMap.set(num, letter ?? raw);
  }
  return answerMap;
}

const OPTION_LINE =
  /^(?:[-*•]\s*)?[([{]?\s*([A-Da-d])\s*[.）):\-]\s*(.+?)\s*$/;
const OPTION_LINE_LOOSE = /^([A-Da-d])\s+(.+?)\s*$/;
const CORRECT_INLINE =
  /^(?:correct(?:\s*answer)?|answer)\s*[:\-]\s*(.+?)\s*$/i;
const SKIP_LINE =
  /^(?:study notes|overview|curriculum|subject|grade|difficulty|topic)\b/i;

type ParsedBlock = {
  questionText: string;
  options: string[];
  correct: string | null;
  questionNum: number | null;
};

function parseBlockLines(lines: string[], fallbackNum: number): ParsedBlock | null {
  const options: string[] = [];
  let inlineCorrect: string | null = null;
  const questionParts: string[] = [];
  let questionNum: number | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = stripLeadingTrailingAsterisks(lines[i].trim());
    if (!line) continue;
    if (SKIP_LINE.test(line)) continue;

    const correctInline = line.match(CORRECT_INLINE);
    if (correctInline) {
      const raw = correctInline[1].trim();
      const letter = extractAnswerLetter(raw);
      // Letter answers drive MCQs; numeric/text-only "Answer: 2" means short-answer — skip block later.
      inlineCorrect = letter ?? raw;
      continue;
    }

    const opt = line.match(OPTION_LINE) || line.match(OPTION_LINE_LOOSE);
    if (opt) {
      let text = opt[2].trim().replace(/\*+$/, "").trim();
      const marked = /(?:✓|✔|\(correct\))\s*$/i.test(text);
      text = text
        .replace(/\s*(?:✓|✔|\(correct\))\s*$/i, "")
        .replace(/\*+$/g, "")
        .trim();
      if (marked) inlineCorrect = opt[1].toUpperCase();
      if (text) options.push(`${opt[1].toUpperCase()}. ${text}`);
      continue;
    }

    if (questionParts.length === 0) {
      const numMatch = line.match(/^(\d+)\s*[.）):\-]\s*(.+)$/);
      if (numMatch) {
        questionNum = Number.parseInt(numMatch[1], 10);
        questionParts.push(numMatch[2].trim());
        continue;
      }
    }

    questionParts.push(line);
  }

  const questionText = questionParts.join(" ").trim();
  if (!questionText) return null;

  return {
    questionText,
    options,
    correct: inlineCorrect,
    questionNum: questionNum ?? fallbackNum,
  };
}

function toMcQuestion(
  block: ParsedBlock,
  answerMap: Map<number, string>,
): QuizQuestion | null {
  const shortMarker = /\[SHORT_ANSWER\s*(?:100-200)?\s*words?\]/i;
  const essayMarker = /\[ESSAY\s*(?:250-800)?\s*words?\]/i;
  if (shortMarker.test(block.questionText) || essayMarker.test(block.questionText)) {
    return null;
  }
  if (block.options.length < 2) return null;

  const num = block.questionNum ?? 0;
  let correct = (answerMap.get(num) ?? block.correct ?? "").trim().toUpperCase();
  if (!/^[A-D]$/.test(correct)) {
    const letter = extractAnswerLetter(correct);
    if (!letter) return null;
    correct = letter;
  }

  const mcOptions = block.options.slice(0, 4);
  const correctIndex = letterToIndex(correct);
  if (correctIndex < 0 || correctIndex >= mcOptions.length) return null;

  return {
    questionNumber: num,
    questionText: block.questionText
      .replace(/\[SHORT_ANSWER[^\]]*\]/gi, "")
      .replace(/\[ESSAY[^\]]*\]/gi, "")
      .trim(),
    options: mcOptions,
    correctAnswer: correct,
    type: "multipleChoice",
  };
}

/**
 * Hide answer keys and inline correct markers so preview markdown does not spoil the quiz.
 * Interactive quiz scoring still uses the full original notes via parseQuizFromMarkdown.
 */
export function stripQuizAnswersForDisplay(notes: string): string {
  const body = extractQuizBody(notes);
  const split = findAnswersSplit(body);
  let text = split?.questionsText ?? body;

  const out: string[] = [];
  for (const raw of text.split("\n")) {
    const line = stripLeadingTrailingAsterisks(raw.trim());
    if (!line) {
      out.push(raw);
      continue;
    }
    if (CORRECT_INLINE.test(line)) continue;
    if (
      /^(?:#{1,6}\s*)?\*{0,2}\s*(?:answer\s*key|answer\s*section|answers)\s*\*{0,2}\s*:?\s*$/i.test(
        line,
      )
    ) {
      continue;
    }

    const opt = line.match(OPTION_LINE) || line.match(OPTION_LINE_LOOSE);
    if (opt) {
      let optionText = opt[2]
        .trim()
        .replace(/\s*(?:✓|✔|\(correct\))\s*$/i, "")
        .replace(/\*+$/g, "")
        .trim();
      out.push(`${opt[1].toUpperCase()}. ${optionText}`);
      continue;
    }

    out.push(raw);
  }

  return out
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Port of Flutter QuizParserService — MCQ-focused interactive quizzes.
 * Also handles unnumbered AI quizzes with A)/B) options and "Correct Answer: D".
 */
export function parseQuizFromMarkdown(
  notes: string,
  meta?: { subject?: string; topic?: string; difficulty?: string },
): Quiz | null {
  const body = extractQuizBody(notes);
  const split = findAnswersSplit(body);
  const questionsText = split?.questionsText ?? body;
  const answerMap = split
    ? parseAnswerMap(split.answersText)
    : new Map<number, string>();

  const questions: QuizQuestion[] = [];
  const seen = new Set<string>();

  // 1) Numbered blocks (Flutter format): "1. …"
  const numberedBlocks = questionsText.split(
    /\n\s*(?=\*{0,2}\d+\s*[.）):\-])/,
  );
  let autoNum = 1;
  for (const block of numberedBlocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    const cleanedStart = stripLeadingTrailingAsterisks(trimmed);
    if (!/^\d+\s*[.）):\-]/.test(cleanedStart)) continue;
    const parsed = parseBlockLines(trimmed.split("\n"), autoNum);
    if (!parsed) continue;
    const q = toMcQuestion(parsed, answerMap);
    if (!q) continue;
    const key = q.questionText.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    questions.push(q);
    autoNum = Math.max(autoNum, q.questionNumber) + 1;
  }

  // 2) Loose / unnumbered blocks (blank-line separated), common web AI output.
  if (questions.length === 0) {
    const looseBlocks = questionsText
      .split(/\n\s*\n+/)
      .map((b) => b.trim())
      .filter(Boolean);

    autoNum = 1;
    for (const block of looseBlocks) {
      const parsed = parseBlockLines(block.split("\n"), autoNum);
      if (!parsed) continue;
      const q = toMcQuestion(parsed, answerMap);
      if (!q) continue;
      const key = q.questionText.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      questions.push({ ...q, questionNumber: autoNum });
      autoNum += 1;
    }
  }

  // 3) Line-scan fallback: start a new question when we hit text after an answer/options run.
  if (questions.length === 0) {
    const lines = questionsText.split("\n");
    let buf: string[] = [];
    autoNum = 1;
    const flush = () => {
      if (buf.length === 0) return;
      const parsed = parseBlockLines(buf, autoNum);
      buf = [];
      if (!parsed) return;
      const q = toMcQuestion(parsed, answerMap);
      if (!q) return;
      const key = q.questionText.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      questions.push({ ...q, questionNumber: autoNum });
      autoNum += 1;
    };

    for (const raw of lines) {
      const line = stripLeadingTrailingAsterisks(raw.trim());
      if (!line) {
        flush();
        continue;
      }
      const startsQuestion =
        buf.length > 0 &&
        (CORRECT_INLINE.test(buf[buf.length - 1]!) ||
          OPTION_LINE.test(buf[buf.length - 1]!) ||
          OPTION_LINE_LOOSE.test(buf[buf.length - 1]!)) &&
        !OPTION_LINE.test(line) &&
        !OPTION_LINE_LOOSE.test(line) &&
        !CORRECT_INLINE.test(line);

      if (startsQuestion) flush();
      buf.push(raw);
    }
    flush();
  }

  if (questions.length === 0) return null;

  questions.sort((a, b) => a.questionNumber - b.questionNumber);

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
