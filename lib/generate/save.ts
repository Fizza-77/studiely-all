import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { getFirebaseDb } from "@/lib/firebase/client";
import { COLLECTIONS } from "@/lib/config/constants";

export type SaveNoteInput = {
  subject: string;
  topic: string;
  studyMode: string;
  difficulty: string;
  notes: string;
  includeMnemonics: boolean;
  includeExamStyleQs: boolean;
  curriculumId?: string;
  curriculumName?: string;
  grade?: string;
  programmeComponent?: string;
  courseLevel?: string;
};

/** Same field names as Flutter `_saveNotesToFirestore`. */
export async function saveGeneratedNote(
  uid: string,
  input: SaveNoteInput,
): Promise<string> {
  const noteData: Record<string, unknown> = {
    subject: input.subject,
    topic: input.topic,
    study_mode: input.studyMode,
    difficulty: input.difficulty,
    notes: input.notes,
    include_mnemonics: input.includeMnemonics,
    include_exam_style_qs: input.includeExamStyleQs,
    created_at: serverTimestamp(),
  };

  if (input.curriculumId) noteData.curriculum_id = input.curriculumId;
  if (input.curriculumName) noteData.curriculum_name = input.curriculumName;
  if (input.grade) noteData.grade = input.grade;
  if (input.programmeComponent) {
    noteData.programme_component = input.programmeComponent;
  }
  if (input.courseLevel) noteData.course_level = input.courseLevel;

  const ref = await addDoc(
    collection(getFirebaseDb(), COLLECTIONS.students, uid, "generated_notes"),
    noteData,
  );
  return ref.id;
}
