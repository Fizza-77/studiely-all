import { doc, updateDoc, serverTimestamp } from "firebase/firestore";

import { getFirebaseDb } from "@/lib/firebase/client";
import { COLLECTIONS } from "@/lib/config/constants";

/** Overwrite note body after regenerate (Flutter-style replace in place). */
export async function updateGeneratedNoteContent(
  uid: string,
  noteId: string,
  notes: string,
  extras?: {
    includeMnemonics?: boolean;
    includeExamStyleQs?: boolean;
    difficulty?: string;
  },
): Promise<void> {
  const payload: Record<string, unknown> = {
    notes,
    updated_at: serverTimestamp(),
  };
  if (extras?.includeMnemonics !== undefined) {
    payload.include_mnemonics = extras.includeMnemonics;
  }
  if (extras?.includeExamStyleQs !== undefined) {
    payload.include_exam_style_qs = extras.includeExamStyleQs;
  }
  if (extras?.difficulty) payload.difficulty = extras.difficulty;

  await updateDoc(
    doc(getFirebaseDb(), COLLECTIONS.students, uid, "generated_notes", noteId),
    payload,
  );
}
