"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import {
  Alert,
  AuthCard,
  AuthShell,
  Field,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "@/components/ui/auth-form";
import {
  mapFirebaseError,
  signUpAdult,
  signUpUnder13,
} from "@/lib/auth/service";
import { calculateAge, EMAIL_REGEX, MINIMUM_AGE } from "@/lib/auth/types";
import { LEGAL_URLS } from "@/lib/config/constants";

function defaultDob(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 16);
  return d.toISOString().slice(0, 10);
}

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(defaultDob);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [parentDialog, setParentDialog] = useState(false);
  const [parentEmail, setParentEmail] = useState("");

  const age = useMemo(() => {
    if (!dob) return null;
    return calculateAge(new Date(dob));
  }, [dob]);

  async function submitAdult() {
    setLoading(true);
    setError(null);
    try {
      await signUpAdult({
        name,
        email,
        password,
        dateOfBirth: new Date(dob),
      });
      router.replace("/verify-email");
    } catch (err) {
      setError(mapFirebaseError(err));
    } finally {
      setLoading(false);
    }
  }

  async function submitUnder13() {
    if (!EMAIL_REGEX.test(parentEmail.trim())) {
      setError("Please enter a valid parent or guardian email.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await signUpUnder13({
        name,
        email,
        password,
        dateOfBirth: new Date(dob),
        parentEmail,
      });
      setParentDialog(false);
      router.replace("/parent-consent");
    } catch (err) {
      setError(mapFirebaseError(err));
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!dob) {
      setError("Please select your date of birth.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!agree) {
      setError("Please agree to the Terms to continue.");
      return;
    }

    if (age != null && age < MINIMUM_AGE) {
      setParentDialog(true);
      return;
    }

    await submitAdult();
  }

  return (
    <AuthShell>
      <AuthCard
        title="Create your account"
        subtitle="Free plan includes study notes, flashcards, and quizzes."
      >
        {error ? <Alert>{error}</Alert> : null}

        <form onSubmit={(e) => void onSubmit(e)}>
          <Field label="Full name">
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </Field>
          <Field label="Email">
            <TextInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </Field>
          <Field label="Date of birth">
            <TextInput
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={new Date().toISOString().slice(0, 10)}
              min="1950-01-01"
              required
            />
          </Field>
          <Field label="Password">
            <TextInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </Field>
          <Field label="Confirm password">
            <TextInput
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </Field>

          <label className="mb-4 flex items-start gap-2 text-sm text-[var(--color-gray-text)]">
            <input
              type="checkbox"
              className="mt-1"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span>
              I agree to the{" "}
              <a
                href={LEGAL_URLS.terms}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[var(--color-vivid-cyan)]"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href={LEGAL_URLS.privacy}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[var(--color-vivid-cyan)]"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>

          <PrimaryButton type="submit" loading={loading && !parentDialog}>
            Create account
          </PrimaryButton>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--color-gray-text)]">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[var(--color-vivid-cyan)]">
            Sign in
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-[var(--color-gray-text)]">
          Parent creating a child account?{" "}
          <Link
            href="/signup/parental"
            className="font-semibold text-[var(--color-vivid-cyan)]"
          >
            Parental sign-up
          </Link>
        </p>
      </AuthCard>

      {parentDialog ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)] p-4">
          <div className="w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)]">
              Parent consent required
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Because you are under {MINIMUM_AGE}, a parent or guardian must
              approve your account before you can use Studiely.
            </p>
            <div className="mt-4">
              <Field label="Parent or guardian email">
                <TextInput
                  type="email"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                />
              </Field>
            </div>
            <div className="flex flex-col gap-2">
              <PrimaryButton
                type="button"
                loading={loading}
                onClick={() => void submitUnder13()}
              >
                Send consent email
              </PrimaryButton>
              <SecondaryButton
                type="button"
                onClick={() => {
                  setParentDialog(false);
                  router.push("/signup/parental");
                }}
              >
                Or have your parent create an account
              </SecondaryButton>
              <SecondaryButton
                type="button"
                onClick={() => setParentDialog(false)}
              >
                Cancel
              </SecondaryButton>
            </div>
          </div>
        </div>
      ) : null}
    </AuthShell>
  );
}
