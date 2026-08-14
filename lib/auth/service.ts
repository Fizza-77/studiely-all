import {
  createUserWithEmailAndPassword,
  deleteUser,
  EmailAuthProvider,
  GoogleAuthProvider,
  getRedirectResult,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updatePassword,
  type User,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";

import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase/client";
import { callFunction } from "@/lib/firebase/functions";
import { COLLECTIONS } from "@/lib/config/constants";
import { guestMode } from "@/lib/auth/guest";
import {
  calculateAge,
  MINIMUM_AGE,
  type StudentDocSummary,
} from "@/lib/auth/types";

export function mapFirebaseError(err: unknown): string {
  if (err instanceof FirebaseError) {
    switch (err.code) {
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        return "Incorrect email or password.";
      case "auth/email-already-in-use":
        return "An account already exists with this email.";
      case "auth/weak-password":
        return "Password must be at least 6 characters.";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";
      case "auth/popup-closed-by-user":
        return "Google sign-in was cancelled.";
      case "auth/popup-blocked":
        return "Pop-up blocked. Allow pop-ups for this site and try again.";
      case "auth/account-exists-with-different-credential":
        return "An account already exists with this email using a different sign-in method.";
      case "functions/resource-exhausted":
        return "Rate limit reached. Please wait and try again.";
      default:
        return friendlyAuthMessage(err.message) || "Something went wrong.";
    }
  }
  if (err instanceof Error) {
    if (err.message.includes("resource-exhausted") || err.message.includes("429")) {
      return "Rate limit reached. Please wait and try again.";
    }
    return friendlyAuthMessage(err.message) || "Something went wrong.";
  }
  return "Something went wrong.";
}

/** Never surface raw IndexedDB / SDK internals to end users. */
function friendlyAuthMessage(raw: string | undefined): string | null {
  if (!raw) return null;
  const msg = raw.toLowerCase();
  if (
    msg.includes("database is closing") ||
    msg.includes("closing/hidden") ||
    msg.includes("indexeddb") ||
    msg.includes("idbdatabase")
  ) {
    return "Sign-in was interrupted. Please try again.";
  }
  // Keep short, human messages; drop long SDK dumps.
  if (raw.length > 160 || /at\s+\w+/.test(raw)) {
    return "Something went wrong. Please try again.";
  }
  return raw;
}

export async function fetchStudentDoc(
  uid: string,
): Promise<StudentDocSummary | null> {
  const snap = await getDoc(doc(getFirebaseDb(), COLLECTIONS.students, uid));
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    parentConsentPending: data.parent_consent_pending === true,
    isMinor: data.is_minor === true,
    parentId: typeof data.parent_id === "string" ? data.parent_id : null,
    parentalConsentGiven: data.parental_consent_given === true,
    name: typeof data.name === "string" ? data.name : "",
    email: typeof data.email === "string" ? data.email : "",
    parentEmail:
      typeof data.parent_email === "string" ? data.parent_email : null,
  };
}

export function isChildAccount(student: StudentDocSummary): boolean {
  return student.isMinor && student.parentId != null;
}

export function hasParentalConsent(student: StudentDocSummary): boolean {
  return student.parentalConsentGiven && student.parentId != null;
}

export async function loginWithEmail(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(
    getFirebaseAuth(),
    email.trim(),
    password.trim(),
  );
  guestMode.exit();
  return cred.user;
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const auth = getFirebaseAuth();

  // Popups hide the opener (esp. PWA / mobile) and trigger a Firebase Auth
  // IndexedDB bug ("Database is closing/hidden") on firebase 12.17.x.
  // Prefer redirect when the document cannot stay visible with a popup.
  const preferRedirect =
    typeof window !== "undefined" &&
    (window.matchMedia("(display-mode: standalone)").matches ||
      window.matchMedia("(display-mode: fullscreen)").matches ||
      window.matchMedia("(display-mode: minimal-ui)").matches ||
      ("standalone" in navigator &&
        Boolean(
          (navigator as Navigator & { standalone?: boolean }).standalone,
        )) ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

  if (preferRedirect) {
    await signInWithRedirect(auth, provider);
    // Navigation away — caller should not expect a User return.
    return null as unknown as User;
  }

  let cred;
  try {
    cred = await signInWithPopup(auth, provider);
  } catch (err) {
    const raw = err instanceof Error ? err.message : "";
    if (
      raw.includes("Database is closing") ||
      raw.includes("closing/hidden") ||
      (err instanceof FirebaseError && err.code === "auth/popup-blocked")
    ) {
      await signInWithRedirect(auth, provider);
      return null as unknown as User;
    }
    throw err;
  }

  const student = await fetchStudentDoc(cred.user.uid);
  if (!student) {
    try {
      await signOut(auth);
    } catch {
      /* ignore */
    }
    throw new Error(
      "No Studiely account is linked to this Google login. Sign up first, or use Open app sign-in with your Studiely email.",
    );
  }
  guestMode.exit();
  return cred.user;
}

/** Complete Google redirect sign-in after returning to the app. */
export async function completeGoogleRedirectLogin(): Promise<User | null> {
  const auth = getFirebaseAuth();
  const result = await getRedirectResult(auth);
  if (!result?.user) return null;

  const student = await fetchStudentDoc(result.user.uid);
  if (!student) {
    try {
      await signOut(auth);
    } catch {
      /* ignore */
    }
    throw new Error(
      "No Studiely account is linked to this Google login. Sign up first, or use Open app sign-in with your Studiely email.",
    );
  }
  guestMode.exit();
  return result.user;
}

export async function sendPasswordResetEmail(email: string) {
  await callFunction(
    "sendPasswordReset",
    { email: email.trim() },
    { requireAuth: false },
  );
}

export async function sendVerificationOtp() {
  await callFunction("sendVerificationOTP", {});
}

export async function verifyEmailOtp(otp: string) {
  await callFunction("verifyEmailOTP", { otp });
}

export async function sendParentConsentEmail(payload: {
  uid: string;
  parentEmail: string;
  childName: string;
  childEmail?: string;
}) {
  await callFunction("sendParentConsentEmail", payload);
}

export type AdultSignupInput = {
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
};

/** Age ≥ 13: create Auth + Students doc + send OTP. */
export async function signUpAdult(input: AdultSignupInput): Promise<User> {
  const age = calculateAge(input.dateOfBirth);
  if (age < MINIMUM_AGE) {
    throw new Error("Use the under-13 flow for this date of birth.");
  }

  const auth = getFirebaseAuth();
  const cred = await createUserWithEmailAndPassword(
    auth,
    input.email.trim(),
    input.password,
  );
  const { user } = cred;

  try {
    await setDoc(doc(getFirebaseDb(), COLLECTIONS.students, user.uid), {
      name: input.name.trim(),
      email: input.email.trim(),
      uid: user.uid,
      membership_type: "free",
      subscription_plan: "free",
      date_of_birth: Timestamp.fromDate(input.dateOfBirth),
      age,
      age_verified: true,
      email_verified: false,
      createdAt: serverTimestamp(),
    });
    await sendVerificationOtp();
    guestMode.exit();
    return user;
  } catch (err) {
    try {
      await deleteUser(user);
    } catch {
      /* ignore */
    }
    throw err;
  }
}

export type Under13SignupInput = AdultSignupInput & {
  parentEmail: string;
};

/** Under-13 self signup with parent consent email. */
export async function signUpUnder13(
  input: Under13SignupInput,
): Promise<User> {
  const age = calculateAge(input.dateOfBirth);
  if (age >= MINIMUM_AGE) {
    throw new Error("This flow is only for under-13 accounts.");
  }

  const auth = getFirebaseAuth();
  const cred = await createUserWithEmailAndPassword(
    auth,
    input.email.trim(),
    input.password,
  );
  const { user } = cred;
  const db = getFirebaseDb();
  const studentRef = doc(db, COLLECTIONS.students, user.uid);

  try {
    await setDoc(studentRef, {
      name: input.name.trim(),
      email: input.email.trim(),
      uid: user.uid,
      membership_type: "free",
      subscription_plan: "free",
      date_of_birth: Timestamp.fromDate(input.dateOfBirth),
      age,
      age_verified: true,
      email_verified: false,
      parent_consent_pending: true,
      parent_email: input.parentEmail.trim(),
      createdAt: serverTimestamp(),
    });

    await sendParentConsentEmail({
      uid: user.uid,
      parentEmail: input.parentEmail.trim(),
      childName: input.name.trim(),
      childEmail: input.email.trim(),
    });

    guestMode.exit();
    return user;
  } catch (err) {
    try {
      await deleteDoc(studentRef);
    } catch {
      /* ignore */
    }
    try {
      await deleteUser(user);
    } catch {
      /* ignore */
    }
    throw err;
  }
}

export type ParentalSignupInput = {
  parentName: string;
  parentEmail: string;
  parentPassword: string;
  relationship: string;
  childName: string;
  childEmail: string;
  childPassword: string;
  childDateOfBirth: Date;
};

/**
 * Parent creates account + child. Ends signed in as the child (Flutter parity).
 * Uses existing Students / Parents schemas only.
 */
export async function signUpParental(
  input: ParentalSignupInput,
): Promise<User> {
  const age = calculateAge(input.childDateOfBirth);
  if (age >= MINIMUM_AGE) {
    throw new Error("Child must be under 13 for parental sign-up.");
  }

  const auth = getFirebaseAuth();
  const db = getFirebaseDb();

  const parentCred = await createUserWithEmailAndPassword(
    auth,
    input.parentEmail.trim(),
    input.parentPassword,
  );
  const parent = parentCred.user;
  const relationship = input.relationship.trim() || "Parent";

  try {
    await setDoc(doc(db, COLLECTIONS.parents, parent.uid), {
      name: input.parentName.trim(),
      email: input.parentEmail.trim(),
      uid: parent.uid,
      relationship_type: relationship,
      createdAt: serverTimestamp(),
      coppa_compliant: true,
      parental_consent_version: 1,
    });

    try {
      await sendVerificationOtp();
    } catch {
      /* parent OTP is best-effort; Flutter continues */
    }

    await signOut(auth);

    const childCred = await createUserWithEmailAndPassword(
      auth,
      input.childEmail.trim(),
      input.childPassword,
    );
    const child = childCred.user;

    try {
      await setDoc(doc(db, COLLECTIONS.students, child.uid), {
        name: input.childName.trim(),
        email: input.childEmail.trim(),
        uid: child.uid,
        membership_type: "free",
        subscription_plan: "free",
        date_of_birth: Timestamp.fromDate(input.childDateOfBirth),
        age,
        age_verified: true,
        email_verified: false,
        is_minor: true,
        parent_id: parent.uid,
        parental_consent_given: true,
        parental_consent_date: serverTimestamp(),
        parental_consent_version: 1,
        createdAt: serverTimestamp(),
        coppa_compliant: true,
      });

      await setDoc(
        doc(db, COLLECTIONS.parents, parent.uid, "children", child.uid),
        {
          child_name: input.childName.trim(),
          child_email: input.childEmail.trim(),
          child_id: child.uid,
          date_of_birth: Timestamp.fromDate(input.childDateOfBirth),
          age,
          created_at: serverTimestamp(),
        },
      );

      await addDoc(
        collection(db, COLLECTIONS.parents, parent.uid, "consent_records"),
        {
          child_id: child.uid,
          child_name: input.childName.trim(),
          consent_given: true,
          consent_date: serverTimestamp(),
          consent_version: 1,
          parent_email: input.parentEmail.trim(),
        },
      );

      await sendVerificationOtp();
      guestMode.exit();
      return child;
    } catch (err) {
      try {
        await deleteDoc(doc(db, COLLECTIONS.students, child.uid));
      } catch {
        /* ignore */
      }
      try {
        await deleteUser(child);
      } catch {
        /* ignore */
      }
      throw err;
    }
  } catch (err) {
    try {
      await deleteDoc(doc(db, COLLECTIONS.parents, parent.uid));
    } catch {
      /* ignore */
    }
    try {
      if (auth.currentUser?.uid === parent.uid) {
        await deleteUser(parent);
      }
    } catch {
      /* ignore */
    }
    throw err;
  }
}

export async function signOutUser() {
  await signOut(getFirebaseAuth());
  guestMode.enable();
}

/** Flutter profile Change Password flow — reauth, updatePassword, notify email. */
export async function changePassword(
  currentPassword: string,
  newPassword: string,
): Promise<void> {
  const auth = getFirebaseAuth();
  const user = auth.currentUser;
  if (!user?.email) {
    throw new Error("Cannot change password for this account.");
  }
  if (newPassword.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }
  const cred = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, cred);
  await updatePassword(user, newPassword);
  try {
    await callFunction("sendPasswordChangedEmail", {});
  } catch {
    /* password already updated — email is best-effort */
  }
}
