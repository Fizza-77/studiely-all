import hierarchy from "./data/hierarchy.json";
import subjects from "./data/subjects.json";
import leaves from "./data/leaves.json";

import { getCurriculumIdFromPathway } from "./mapping";
import type {
  BoardInfo,
  LeafCurriculum,
  PathwayInfo,
  SubjectInfo,
} from "./types";
import { subjectDisplayName } from "./types";

const subjectCatalog = subjects as Record<string, SubjectInfo[]>;
const boards = (hierarchy as { boards: BoardInfo[] }).boards;
const leafList = leaves as LeafCurriculum[];

const leafById = new Map(leafList.map((l) => [l.id, l]));

export function getBoards(): BoardInfo[] {
  return boards;
}

export function getBoard(boardId: string): BoardInfo | undefined {
  return boards.find((b) => b.id === boardId);
}

export function getPathway(
  boardId: string,
  pathwayId: string,
): PathwayInfo | undefined {
  return getBoard(boardId)?.pathways.find((p) => p.id === pathwayId);
}

export function getSubjectsForGrade(
  boardId: string,
  pathwayId: string,
  gradeId: string,
): SubjectInfo[] {
  const pathway = getPathway(boardId, pathwayId);
  const grade = pathway?.grades.find((g) => g.id === gradeId);
  if (!grade?.subjectsKey) return [];
  return subjectCatalog[grade.subjectsKey] ?? [];
}

export function getSubjectOptions(
  boardId: string,
  pathwayId: string,
  gradeId: string,
): string[] {
  return getSubjectsForGrade(boardId, pathwayId, gradeId).map(subjectDisplayName);
}

export function resolveLeafCurriculum(
  pathwayId: string,
  gradeId: string,
): LeafCurriculum | null {
  const id = getCurriculumIdFromPathway(pathwayId, gradeId);
  if (!id) return null;
  return leafById.get(id) ?? { id, name: id };
}

export function getAgeForGrade(
  boardId: string,
  pathwayId: string,
  gradeId: string,
): string | undefined {
  const grade = getPathway(boardId, pathwayId)?.grades.find(
    (g) => g.id === gradeId,
  );
  if (!grade?.ageRange) return undefined;
  const parts = grade.ageRange.split("-");
  if (parts.length !== 2) return undefined;
  // Prefer lower bound as Flutter's getAgeForGrade approx for display
  return parts[0]?.trim();
}
