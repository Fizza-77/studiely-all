export type AuthPhase =
  | "initializing"
  | "guest"
  | "student"
  | "studentUnverified"
  | "studentPendingParentConsent"
  | "invalidUser";

export type StudentDocSummary = {
  parentConsentPending: boolean;
  isMinor: boolean;
  parentId: string | null;
  parentalConsentGiven: boolean;
  name: string;
  email: string;
  parentEmail: string | null;
};

export function calculateAge(dob: Date, now = new Date()): number {
  let age = now.getFullYear() - dob.getFullYear();
  const monthDiff = now.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
    age -= 1;
  }
  return age;
}

export const MINIMUM_AGE = 13;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
