/**
 * Port of Flutter CurriculumService.getCurriculumIdFromPathway.
 * Maps pathway + grade → leaf curriculumId used by the Vercel AI proxy.
 */

function auMap(
  gradeId: string,
  primary: string,
  secondary: string,
  senior: string,
): string | null {
  if (gradeId === "foundation") return primary;
  if (!gradeId.startsWith("year_")) return null;
  const year = Number.parseInt(gradeId.slice(5), 10);
  if (Number.isNaN(year)) return null;
  if (year >= 1 && year <= 6) return primary;
  if (year >= 7 && year <= 10) return secondary;
  if (year >= 11 && year <= 12) return senior;
  return null;
}

function caMap(
  gradeId: string,
  elementary: string,
  secondary: string,
  senior: string,
): string | null {
  if (gradeId === "kindergarten") return elementary;
  if (!gradeId.startsWith("grade_")) return null;
  const grade = Number.parseInt(gradeId.slice(6), 10);
  if (Number.isNaN(grade)) return null;
  if (grade >= 1 && grade <= 6) return elementary;
  if (grade >= 7 && grade <= 10) return secondary;
  if (grade >= 11 && grade <= 12) return senior;
  return null;
}

export function getCurriculumIdFromPathway(
  pathwayId: string,
  gradeId: string,
): string | null {
  switch (pathwayId) {
    case "uk_national": {
      if (gradeId === "nursery" || gradeId === "reception") {
        return "uk_national_ks1_ks2";
      }
      if (gradeId === "gcse") return "uk_national_ks4_gcse";
      if (gradeId === "as_level" || gradeId === "a_level") {
        return "uk_national_ks5_as_a_level";
      }
      {
        const grade = Number.parseInt(gradeId, 10);
        if (Number.isNaN(grade)) return null;
        if (grade >= 1 && grade <= 6) return "uk_national_ks1_ks2";
        if (grade >= 7 && grade <= 9) return "uk_national_ks3";
      }
      break;
    }
    case "cambridge_international": {
      if (gradeId === "nursery" || gradeId === "reception") {
        return "cambridge_primary";
      }
      if (gradeId === "primary_checkpoint") return "cambridge_primary_checkpoint";
      if (gradeId === "lower_secondary_checkpoint") {
        return "cambridge_lower_secondary_checkpoint";
      }
      if (gradeId === "igcse") return "cambridge_igcse";
      if (gradeId === "as_level" || gradeId === "a_level") {
        return "cambridge_as_a_level";
      }
      {
        const grade = Number.parseInt(gradeId, 10);
        if (Number.isNaN(grade)) return null;
        if (grade >= 1 && grade <= 6) return "cambridge_primary";
        if (grade >= 7 && grade <= 9) return "cambridge_lower_secondary";
      }
      break;
    }
    case "pearson_edexcel": {
      if (gradeId === "nursery" || gradeId === "reception") {
        return "pearson_edexcel_ks1_ks2";
      }
      if (gradeId === "gcse_edexcel") return "pearson_edexcel_ks4";
      if (gradeId === "as_level" || gradeId === "a_level") {
        return "pearson_edexcel_ks5";
      }
      {
        const grade = Number.parseInt(gradeId, 10);
        if (Number.isNaN(grade)) return null;
        if (grade >= 1 && grade <= 6) return "pearson_edexcel_ks1_ks2";
        if (grade >= 7 && grade <= 9) return "pearson_edexcel_ks3";
      }
      break;
    }
    case "us_standards": {
      if (gradeId === "k") return "us_elementary";
      {
        const grade = Number.parseInt(gradeId, 10);
        if (Number.isNaN(grade)) return null;
        if (grade >= 1 && grade <= 5) return "us_elementary";
        if (grade >= 6 && grade <= 8) return "us_middle_school";
        if (grade >= 9 && grade <= 12) return "us_high_school";
      }
      break;
    }
    case "ap_pathway": {
      const grade = Number.parseInt(gradeId, 10);
      if (Number.isNaN(grade)) return null;
      if (grade >= 9 && grade <= 12) return "us_ap_pathway";
      break;
    }
    case "ib_pyp": {
      const grade = Number.parseInt(gradeId, 10);
      if (Number.isNaN(grade)) return null;
      if (grade >= 1 && grade <= 5) return "ib_pyp";
      break;
    }
    case "ib_myp": {
      const grade = Number.parseInt(gradeId, 10);
      if (Number.isNaN(grade)) return null;
      if (grade >= 6 && grade <= 10) return "ib_myp";
      break;
    }
    case "ib_dp": {
      const grade = Number.parseInt(gradeId, 10);
      if (Number.isNaN(grade)) return null;
      if (grade >= 11 && grade <= 12) return "ib_dp";
      break;
    }
    case "australian_nsw":
      return auMap(
        gradeId,
        "australian_nsw_primary",
        "australian_nsw_secondary",
        "australian_nsw_hsc",
      );
    case "australian_vic":
      return auMap(
        gradeId,
        "australian_vic_primary",
        "australian_vic_secondary",
        "australian_vic_vce",
      );
    case "australian_qld":
      return auMap(
        gradeId,
        "australian_qld_primary",
        "australian_qld_secondary",
        "australian_qld_qce",
      );
    case "australian_wa":
      return auMap(
        gradeId,
        "australian_wa_primary",
        "australian_wa_secondary",
        "australian_wa_wace",
      );
    case "australian_sa":
      return auMap(
        gradeId,
        "australian_sa_primary",
        "australian_sa_secondary",
        "australian_sa_sace",
      );
    case "australian_tas":
      return auMap(
        gradeId,
        "australian_tas_primary",
        "australian_tas_secondary",
        "australian_tas_tce",
      );
    case "australian_act":
      return auMap(
        gradeId,
        "australian_act_primary",
        "australian_act_secondary",
        "australian_act_senior",
      );
    case "australian_nt":
      return auMap(
        gradeId,
        "australian_nt_primary",
        "australian_nt_secondary",
        "australian_nt_ntcet",
      );
    case "canadian_ontario":
      return caMap(
        gradeId,
        "canadian_ontario_elementary",
        "canadian_ontario_secondary",
        "canadian_ontario_ossd",
      );
    case "canadian_bc":
      return caMap(
        gradeId,
        "canadian_bc_elementary",
        "canadian_bc_secondary",
        "canadian_bc_dogwood",
      );
    case "canadian_alberta":
      return caMap(
        gradeId,
        "canadian_alberta_elementary",
        "canadian_alberta_secondary",
        "canadian_alberta_diploma",
      );
    case "canadian_quebec":
      return caMap(
        gradeId,
        "canadian_quebec_elementary",
        "canadian_quebec_secondary",
        "canadian_quebec_des",
      );
    case "canadian_manitoba":
      return caMap(
        gradeId,
        "canadian_manitoba_elementary",
        "canadian_manitoba_secondary",
        "canadian_manitoba_diploma",
      );
    case "canadian_saskatchewan":
      return caMap(
        gradeId,
        "canadian_saskatchewan_elementary",
        "canadian_saskatchewan_secondary",
        "canadian_saskatchewan_diploma",
      );
    case "canadian_maritimes":
      return caMap(
        gradeId,
        "canadian_maritimes_elementary",
        "canadian_maritimes_secondary",
        "canadian_maritimes_diploma",
      );
    case "canadian_territories":
      return caMap(
        gradeId,
        "canadian_territories_elementary",
        "canadian_territories_secondary",
        "canadian_territories_diploma",
      );
    default:
      return null;
  }
  return null;
}
