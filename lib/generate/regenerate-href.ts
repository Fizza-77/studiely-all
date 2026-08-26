import { getBoards, getCurriculumIdFromPathway } from "@/lib/curriculum";
import { generateHref } from "@/lib/generate/modes";
import type { GeneratedNote } from "@/lib/student/types";

export type CurriculumSelection = {
  boardId: string;
  pathwayId: string;
  gradeId: string;
};

/**
 * Reverse-map a saved leaf curriculum id (+ optional grade id) back to the
 * generate form's board / pathway / grade selectors.
 */
export function findCurriculumSelection(
  curriculumId: string | undefined | null,
  preferredGradeId?: string | null,
): CurriculumSelection | null {
  const leafId = curriculumId?.trim();
  if (!leafId) return null;

  const preferred = preferredGradeId?.trim() || "";
  let fallback: CurriculumSelection | null = null;

  for (const board of getBoards()) {
    for (const pathway of board.pathways) {
      for (const grade of pathway.grades) {
        const id = getCurriculumIdFromPathway(pathway.id, grade.id);
        if (id !== leafId) continue;
        const match = {
          boardId: board.id,
          pathwayId: pathway.id,
          gradeId: grade.id,
        };
        if (preferred && grade.id === preferred) return match;
        if (!fallback) fallback = match;
      }
    }
  }

  return fallback;
}

/** Build `/generate/{mode}?…` with the note's original generation fields. */
export function regenerateHrefFromNote(note: GeneratedNote): string {
  const base = generateHref(note.studyMode);
  const params = new URLSearchParams();

  const selection = findCurriculumSelection(note.curriculumId, note.grade);
  if (selection) {
    params.set("board", selection.boardId);
    params.set("pathway", selection.pathwayId);
    params.set("grade", selection.gradeId);
  } else if (note.grade?.trim()) {
    params.set("grade", note.grade.trim());
  }

  if (note.subject.trim()) params.set("subject", note.subject.trim());
  if (note.topic.trim()) params.set("topic", note.topic.trim());

  const difficulty = note.difficulty?.trim();
  if (
    difficulty === "Easy" ||
    difficulty === "Medium" ||
    difficulty === "Hard"
  ) {
    params.set("difficulty", difficulty);
  }

  if (note.includeMnemonics) params.set("mnemonics", "1");
  if (note.includeExamStyleQs) params.set("examQs", "1");

  params.set("regen", "1");

  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}
