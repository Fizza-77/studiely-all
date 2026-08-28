import { callFunction } from "@/lib/firebase/functions";
import type { Difficulty } from "@/lib/curriculum/types";
import {
  buildSystemPrompt,
  buildUserPrompt,
} from "@/lib/generate/prompts";

export type GenerateParams = {
  curriculumId: string;
  curriculumName: string;
  subject: string;
  subjectCode?: string;
  topic: string;
  studyMode: string;
  difficulty: Difficulty;
  grade: string;
  isPremium: boolean;
  premiumModes?: string[];
  includeMnemonics?: boolean;
  includeExamStyleQs?: boolean;
  includeWrittenResponse?: boolean;
  includeCommonMistakes?: boolean;
  age?: string;
  programmeComponent?: string | null;
  courseLevel?: string | null;
};

/**
 * Generate via Firebase `callOpenAI` (authenticated users only).
 * Guest generation is blocked — same as the Flutter app: browse /generate, sign up for 5 free credits.
 */
export async function generateStudyContent(
  params: GenerateParams,
): Promise<string> {
  const systemPrompt = buildSystemPrompt(params);
  const userPrompt = buildUserPrompt(params);
  const studyMode = params.studyMode;

  const result = await callFunction<
    {
      systemPrompt: string;
      userPrompt: string;
      studyMode: string;
    },
    { content?: string }
  >(
    "callOpenAI",
    {
      systemPrompt,
      userPrompt,
      studyMode,
    },
    { requireAuth: true },
  );

  const content = result?.content;
  if (!content) throw new Error("Invalid response from notes generation");
  return content;
}
