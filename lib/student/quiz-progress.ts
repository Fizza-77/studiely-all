import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { getFirebaseDb } from "@/lib/firebase/client";
import { COLLECTIONS } from "@/lib/config/constants";

/**
 * Flutter StudyProgressService.saveQuizAttempt — client write only.
 * Existing rules: owner create; no schema/backend changes.
 */
export async function saveQuizAttempt(
  uid: string,
  input: {
    subject: string;
    topic: string;
    score: number;
    totalQuestions: number;
  },
): Promise<string> {
  const ref = await addDoc(
    collection(getFirebaseDb(), COLLECTIONS.students, uid, "quiz_attempts"),
    {
      subject: input.subject,
      topic: input.topic,
      score: input.score,
      total_questions: input.totalQuestions,
      created_at: serverTimestamp(),
    },
  );
  return ref.id;
}
