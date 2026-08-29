export type SubjectInfo = {
  name: string;
  code?: string;
};

export type GradeInfo = {
  id: string;
  name: string;
  ageRange?: string;
  subjectsKey: string | null;
};

export type PathwayInfo = {
  id: string;
  name: string;
  grades: GradeInfo[];
};

export type BoardInfo = {
  id: string;
  name: string;
  pathwayLabel: string;
  pathways: PathwayInfo[];
};

export type LeafCurriculum = {
  id: string;
  name: string;
};

export type StudyModeOption = {
  name: string;
  locked: boolean;
  isPremium: boolean;
};

export const STUDY_MODES: StudyModeOption[] = [
  { name: "Summary Notes", locked: false, isPremium: false },
  { name: "Flashcards", locked: false, isPremium: false },
  { name: "Quiz", locked: false, isPremium: false },
  { name: "Exam Focus", locked: false, isPremium: false },
  { name: "Common Mistakes", locked: true, isPremium: true },
  { name: "Examples", locked: true, isPremium: true },
];

export const DIFFICULTIES = ["Easy", "Medium", "Hard"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export function subjectDisplayName(subject: SubjectInfo): string {
  return subject.code ? `${subject.name} (${subject.code})` : subject.name;
}

export function parseSubjectInput(value: string): {
  subject: string;
  subjectCode: string;
} {
  const match = /\((\d+)\)/.exec(value);
  const subjectCode = match?.[1] ?? "";
  const subject = value.split("(")[0]?.trim() ?? value.trim();
  return { subject, subjectCode };
}
