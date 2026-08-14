import { callFunction } from "@/lib/firebase/functions";

/** Existing Cloud Function — proxied via /api/callable (no backend edits). */
export type WritingTask = {
  questionText: string;
  stimulusText?: string | null;
  planningGuidance?: string[];
  skillsFocus?: string[];
};

export async function generateWritingTask(input: {
  curriculumId: string;
  curriculumName?: string;
  stage?: string;
  grade?: string;
  subject: string;
  subjectGroup?: string;
  topic: string;
  mode?: string;
  responseType?: string;
  recommendedMin?: number;
  recommendedMax?: number;
  hardMax?: number;
}): Promise<WritingTask> {
  const result = await callFunction<Record<string, unknown>, WritingTask>(
    "generateWritingTask",
    {
      curriculumId: input.curriculumId,
      curriculumName: input.curriculumName ?? "",
      stage: input.stage ?? "",
      grade: input.grade ?? "",
      subject: input.subject,
      subjectGroup: input.subjectGroup ?? "",
      topic: input.topic,
      mode: input.mode ?? "practice",
      responseType: input.responseType ?? "short",
      recommendedMin: input.recommendedMin ?? 100,
      recommendedMax: input.recommendedMax ?? 200,
      hardMax: input.hardMax ?? 250,
    },
  );
  return result;
}

export async function getWritingPracticeFeedback(input: {
  questionText: string;
  stimulusText?: string;
  studentAnswer: string;
  curriculumId: string;
  stage?: string;
  grade?: string;
  subject: string;
  topic: string;
  responseType?: string;
  wordCount: number;
  recommendedMin?: number;
  recommendedMax?: number;
  hardMax?: number;
}): Promise<string> {
  const result = await callFunction<
    Record<string, unknown>,
    { feedbackText?: string }
  >("getWritingPracticeFeedback", {
    questionText: input.questionText,
    stimulusText: input.stimulusText ?? "",
    studentAnswer: input.studentAnswer,
    curriculumId: input.curriculumId,
    stage: input.stage ?? "",
    grade: input.grade ?? "",
    subject: input.subject,
    topic: input.topic,
    responseType: input.responseType ?? "short",
    integrityMode: "review_written_work",
    wordCount: input.wordCount,
    recommendedMin: input.recommendedMin ?? 100,
    recommendedMax: input.recommendedMax ?? 200,
    hardMax: input.hardMax ?? 250,
  });

  if (!result?.feedbackText) throw new Error("No feedback returned");
  return result.feedbackText;
}

/** Existing callable — exam/timed simulation feedback (no backend changes). */
export async function getWritingExamSimulationFeedback(input: {
  questionText: string;
  stimulusText?: string;
  studentAnswer: string;
  curriculumId: string;
  stage?: string;
  grade?: string;
  subject: string;
  topic: string;
  responseType?: string;
  wordCount: number;
  timeUsedSeconds: number;
  timeAllocatedSeconds: number;
  timerExpired?: boolean;
  recommendedMin?: number;
  recommendedMax?: number;
  hardMax?: number;
}): Promise<string> {
  const result = await callFunction<
    Record<string, unknown>,
    { feedbackText?: string }
  >("getWritingExamSimulationFeedback", {
    questionText: input.questionText,
    stimulusText: input.stimulusText ?? "",
    studentAnswer: input.studentAnswer,
    curriculumId: input.curriculumId,
    stage: input.stage ?? "",
    grade: input.grade ?? "",
    subject: input.subject,
    topic: input.topic,
    responseType: input.responseType ?? "short",
    wordCount: input.wordCount,
    timeUsedSeconds: input.timeUsedSeconds,
    timeAllocatedSeconds: input.timeAllocatedSeconds,
    timerExpired: input.timerExpired ?? false,
    recommendedMin: input.recommendedMin ?? 100,
    recommendedMax: input.recommendedMax ?? 200,
    hardMax: input.hardMax ?? 250,
  });

  if (!result?.feedbackText) throw new Error("No feedback returned");
  return result.feedbackText;
}
