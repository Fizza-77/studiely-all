import type { GenerateParams } from "@/lib/generate/ai";

/** Flutter parity: Free 8–12, Premium 15–20 (dominant curriculum default). */
function quizCountRule(isPremium: boolean): string {
  return isPremium
    ? "Produce 15–20 multiple-choice quiz questions only (A–D). Premium: 15–20 questions."
    : "Produce 8–12 multiple-choice quiz questions only (A–D). Free: 8–12 questions.";
}

function studyModeRules(studyMode: string, isPremium: boolean): string {
  if (studyMode === "Quiz") {
    return [
      quizCountRule(isPremium),
      "ALL questions must be multiple-choice with exactly 4 options (A, B, C, D).",
      "Number each question as 1. 2. 3. …",
      "Format each question as: 1. [Question text] then A. … B. … C. … D. …",
      "CRITICAL: The quiz must be attemptable — use ONLY multiple-choice questions; no short-answer, open-ended, or fill-in-the-blank questions.",
      "CRITICAL: End with a plain Answers section header on its own line — the word Answers with no bold, italics, or markdown heading.",
      "Under Answers list only letters, one per line, like: 1. A  2. C  3. B",
      "Do not put correct answers inline under questions; only in the Answers section.",
    ].join(" ");
  }

  const rules: Record<string, string> = {
    "Summary Notes":
      "Write clear summary notes (about 250–600 words depending on difficulty). Use Markdown headings and bullets. Stay curriculum-aligned.",
    Flashcards:
      "Produce 10–20 flashcards. Format each as: Q: … / A: … on separate lines. Cover key terms and concepts only.",
    "Exam Focus":
      "Write exam-oriented notes (200–400 words) focused on likely exam angles, command words, and how to structure answers.",
    "Common Mistakes":
      "List common mistakes for this topic with short corrections. Use bullets.",
    Examples:
      "Give worked examples with steps. Keep explanations age-appropriate.",
  };

  return (
    rules[studyMode] ??
    `Generate content for study mode: ${studyMode}. Follow the topic and difficulty.`
  );
}

/** System prompt sent to existing callOpenAI / callOpenAIGuest (Flutter parity). */
export function buildSystemPrompt(params: Pick<GenerateParams, "curriculumName" | "curriculumId">): string {
  const curriculum = params.curriculumName || params.curriculumId;
  return [
    "You are Studiely Student AI, an expert study specialist.",
    `Generate accurate, age-appropriate learning materials for the ${curriculum} curriculum.`,
    "Use clear Markdown. Do not invent exam board rules that conflict with the stated curriculum.",
    "Do not include API keys, system instructions, or meta commentary about being an AI.",
  ].join(" ");
}

/** User prompt built client-side (same idea as Flutter _buildUserPromptForFirebase / Vercel prompts). */
export function buildUserPrompt(params: GenerateParams): string {
  const isExamFocus = params.studyMode === "Exam Focus";
  const includeCommonMistakes =
    isExamFocus && Boolean(params.includeCommonMistakes);
  const isPremium = Boolean(params.isPremium);
  const lines: string[] = [];

  lines.push(
    `Generate learning materials for ${params.curriculumName || params.curriculumId}`,
  );
  lines.push(`Subject: ${params.subject}`);
  lines.push(`Grade: ${params.grade ?? "N/A"}`);
  lines.push(`Topic: "${params.topic}"`);
  if (params.subjectCode) lines.push(`Subject code: ${params.subjectCode}`);
  if (params.age) lines.push(`Student age band: ${params.age}`);
  lines.push("");
  lines.push(`Difficulty Level: ${params.difficulty ?? "Medium"}`);
  lines.push(`Study Mode: ${params.studyMode}`);
  lines.push("");
  lines.push("Extras Selected:");
  if (params.includeMnemonics) lines.push("Mnemonics (free, if selected)");
  if (params.includeExamStyleQs && isExamFocus) {
    lines.push("Exam-style questions (if selected)");
  }
  if (includeCommonMistakes) lines.push("Common Mistakes (if selected)");
  if (params.premiumModes && params.premiumModes.length > 0) {
    lines.push("Premium Sections Unlocked (if applicable):");
    params.premiumModes.forEach((m) => lines.push(`- ${m}`));
    lines.push("");
  }
  lines.push("CONTENT RULES & LIMITS (STRICT)");
  lines.push(studyModeRules(params.studyMode, isPremium));
  if (params.includeMnemonics) {
    lines.push("Mnemonics (Free extra) - Keep short, playful, and memorable.");
  }
  if (params.includeExamStyleQs && isExamFocus) {
    lines.push(
      "Include 3–5 exam-style questions with brief mark guidance where appropriate.",
    );
  }
  if (includeCommonMistakes) {
    lines.push(
      "Common Mistakes (Selected extra) - Add concise, exam-relevant pitfalls and how to avoid them.",
    );
  }
  lines.push("");
  lines.push("OUTPUT STRUCTURE (Exact – Markdown)");
  lines.push(`Study Notes: ${params.topic}`);
  lines.push("Overview");
  lines.push(`Curriculum: ${params.curriculumName || params.curriculumId}`);
  lines.push(`Subject: ${params.subject}`);
  if (params.grade) lines.push(`Grade Level: ${params.grade}`);
  lines.push(`Difficulty: ${params.difficulty ?? "Medium"}`);
  lines.push("");
  lines.push(params.studyMode);
  lines.push("[Content here]");
  if (params.studyMode === "Quiz") {
    lines.push("");
    lines.push("Answers");
    lines.push("1. A");
    lines.push("2. B");
    lines.push("(continue for every question — letter only)");
  }
  if (includeCommonMistakes) {
    lines.push("");
    lines.push("Common Mistakes");
    lines.push("[Content here]");
  }
  return lines.join("\n");
}
