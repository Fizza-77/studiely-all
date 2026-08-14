import { deleteField, doc, setDoc } from "firebase/firestore";

import { getFirebaseDb } from "@/lib/firebase/client";
import { COLLECTIONS } from "@/lib/config/constants";
import type { StudentProfile } from "@/lib/student/types";

export type UserProfileCurriculum = {
  topLevelCurriculumId: string | null;
  pathwayId: string | null;
  gradeId: string | null;
  directCurriculumId: string | null;
  curriculumDisplayName: string | null;
  pathwayDisplayName: string | null;
  gradeDisplayName: string | null;
  school: string | null;
};

const PROFILE_KEYS = [
  "profile_top_level_curriculum_id",
  "profile_pathway_id",
  "profile_grade_id",
  "profile_direct_curriculum_id",
  "profile_curriculum_display_name",
  "profile_pathway_display_name",
  "profile_grade_display_name",
  "profile_school",
] as const;

/** Flutter UserProfileCurriculum.isComplete parity. */
export function isProfileCurriculumComplete(
  profile: Pick<
    UserProfileCurriculum,
    "topLevelCurriculumId" | "pathwayId" | "gradeId" | "directCurriculumId"
  > | null,
): boolean {
  if (!profile) return false;
  if (profile.topLevelCurriculumId) {
    return Boolean(profile.pathwayId && profile.gradeId);
  }
  if (profile.directCurriculumId) return true;
  return false;
}

export function curriculumFromStudentProfile(
  profile: StudentProfile | null,
): UserProfileCurriculum | null {
  if (!profile) return null;
  if (!profile.topLevelCurriculumId && !profile.directCurriculumId) {
    return null;
  }
  return {
    topLevelCurriculumId: profile.topLevelCurriculumId,
    pathwayId: profile.pathwayId,
    gradeId: profile.gradeId,
    directCurriculumId: profile.directCurriculumId,
    curriculumDisplayName: profile.curriculumDisplayName,
    pathwayDisplayName: profile.pathwayDisplayName,
    gradeDisplayName: profile.gradeDisplayName,
    school: profile.school,
  };
}

/**
 * Save curriculum/school to Students/{uid} — same fields as Flutter
 * UserProfileCurriculumService.setProfileCurriculum.
 */
export async function setProfileCurriculum(
  uid: string,
  profile: UserProfileCurriculum,
): Promise<void> {
  const map: Record<string, string | ReturnType<typeof deleteField>> = {
    profile_top_level_curriculum_id: profile.topLevelCurriculumId ?? "",
    profile_pathway_id: profile.pathwayId ?? "",
    profile_grade_id: profile.gradeId ?? "",
    profile_direct_curriculum_id: profile.directCurriculumId ?? "",
    profile_curriculum_display_name: profile.curriculumDisplayName ?? "",
    profile_pathway_display_name: profile.pathwayDisplayName ?? "",
    profile_grade_display_name: profile.gradeDisplayName ?? "",
    profile_school: profile.school ?? "",
  };

  for (const key of PROFILE_KEYS) {
    const v = map[key];
    if (v == null || v === "") {
      map[key] = deleteField();
    }
  }

  await setDoc(doc(getFirebaseDb(), COLLECTIONS.students, uid), map, {
    merge: true,
  });
}
