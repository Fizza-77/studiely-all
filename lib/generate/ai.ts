import { callFunction } from "@/lib/firebase/functions";
import { guestIds } from "@/lib/auth/guest";
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
 * Generate via existing Firebase callables (same as Flutter `_callFirebaseGenerate`).
 * Vercel `/api/ai/generate` is currently crashing (FUNCTION_INVOCATION_FAILED).
 */
export async function generateStudyContent(
  params: GenerateParams,
  options?: { guest?: boolean },
): Promise<string> {
  const isGuest = options?.guest === true;
  const systemPrompt = buildSystemPrompt(params);
  const userPrompt = buildUserPrompt(params);
  const studyMode = params.studyMode;

  if (isGuest) {
    const result = await callFunction<
      {
        deviceId: string;
        sessionId: string;
        systemPrompt: string;
        userPrompt: string;
        studyMode: string;
      },
      { content?: string }
    >(
      "callOpenAIGuest",
      {
        deviceId: guestIds.getDeviceId(),
        sessionId: guestIds.getSessionId(),
        systemPrompt,
        userPrompt,
        studyMode,
      },
      { requireAuth: false },
    );
    const content = result?.content;
    if (!content) throw new Error("Invalid response from notes generation");
    return content;
  }

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
