import { getFirebaseAuth } from "@/lib/firebase/client";
import { withBasePath } from "@/lib/config/base-path";

/**
 * Flutter quiz-results written feedback — same-origin BFF → Vercel.
 */
export async function fetchQuizWrittenFeedback(input: {
  questionText: string;
  userResponse: string;
  questionType: "shortAnswer" | "longWrittenResponse";
  maxWords?: number;
}): Promise<string> {
  const user = getFirebaseAuth().currentUser;
  if (!user) throw new Error("Sign in to get feedback.");

  const idToken = await user.getIdToken(true);
  const url = withBasePath("/api/ai/quiz-feedback");

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        questionText: input.questionText,
        userResponse: input.userResponse,
        questionType: input.questionType,
        ...(input.maxWords != null ? { maxWords: input.maxWords } : {}),
      }),
    });
  } catch {
    throw new Error("Could not reach feedback service. Check your connection.");
  }

  const json = (await response.json().catch(() => ({}))) as {
    feedback?: string;
    error?: { message?: string };
  };

  if (!response.ok) {
    throw new Error(
      json.error?.message || `Feedback failed (${response.status})`,
    );
  }

  if (!json.feedback) throw new Error("No feedback returned");
  return json.feedback;
}
