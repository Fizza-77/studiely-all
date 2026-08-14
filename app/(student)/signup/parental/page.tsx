"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import {
  Alert,
  AuthCard,
  AuthShell,
  Field,
  PrimaryButton,
  TextInput,
} from "@/components/ui/auth-form";
import { mapFirebaseError, signUpParental } from "@/lib/auth/service";
import { calculateAge, EMAIL_REGEX, MINIMUM_AGE } from "@/lib/auth/types";
import { LEGAL_URLS } from "@/lib/config/constants";

function defaultChildDob(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 10);
  return d.toISOString().slice(0, 10);
}

export default function ParentalSignupPage() {
  const router = useRouter();
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPassword, setParentPassword] = useState("");
  const [parentConfirm, setParentConfirm] = useState("");
  const [relationship, setRelationship] = useState("Parent");
  const [childName, setChildName] = useState("");
  const [childEmail, setChildEmail] = useState("");
  const [childPassword, setChildPassword] = useState("");
  const [childConfirm, setChildConfirm] = useState("");
  const [childDob, setChildDob] = useState(defaultChildDob);
  const [consent, setConsent] = useState(false);
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!parentName.trim() || !childName.trim()) {
      setError("Please enter parent and child names.");
      return;
    }
    if (
      !EMAIL_REGEX.test(parentEmail.trim()) ||
      !EMAIL_REGEX.test(childEmail.trim())
    ) {
      setError("Please enter valid email addresses.");
      return;
    }
    if (parentEmail.trim().toLowerCase() === childEmail.trim().toLowerCase()) {
      setError("Child email must be different from parent email.");
      return;
    }
    if (parentPassword.length < 6 || childPassword.length < 6) {
      setError("Passwords must be at least 6 characters.");
      return;
    }
    if (parentPassword !== parentConfirm || childPassword !== childConfirm) {
      setError("Passwords do not match.");
      return;
    }
    const age = calculateAge(new Date(childDob));
    if (age >= MINIMUM_AGE) {
      setError(`Child must be under ${MINIMUM_AGE} for parental sign-up.`);
      return;
    }
    if (!consent || !terms) {
      setError("Please confirm parental consent and accept the Terms.");
      return;
    }

    setLoading(true);
    try {
      await signUpParental({
        parentName,
        parentEmail,
        parentPassword,
        relationship,
        childName,
        childEmail,
        childPassword,
        childDateOfBirth: new Date(childDob),
      });
      router.replace("/verify-email");
    } catch (err) {
      setError(mapFirebaseError(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell>
      <AuthCard
        title="Parent sign-up"
        subtitle="Create a parent account and a linked child account (under 13)."
      >
        {error ? <Alert>{error}</Alert> : null}

        <form onSubmit={(e) => void onSubmit(e)} className="space-y-1">
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-[var(--color-core-blue)] uppercase">
            Parent
          </h2>
          <Field label="Parent full name">
            <TextInput
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              required
            />
          </Field>
          <Field label="Parent email">
            <TextInput
              type="email"
              value={parentEmail}
              onChange={(e) => setParentEmail(e.target.value)}
              required
            />
          </Field>
          <Field label="Relationship">
            <TextInput
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              placeholder="Parent"
            />
          </Field>
          <Field label="Parent password">
            <TextInput
              type="password"
              value={parentPassword}
              onChange={(e) => setParentPassword(e.target.value)}
              minLength={6}
              required
            />
          </Field>
          <Field label="Confirm parent password">
            <TextInput
              type="password"
              value={parentConfirm}
              onChange={(e) => setParentConfirm(e.target.value)}
              minLength={6}
              required
            />
          </Field>

          <h2 className="mt-6 mb-3 text-sm font-semibold tracking-wide text-[var(--color-core-blue)] uppercase">
            Child
          </h2>
          <Field label="Child full name">
            <TextInput
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              required
            />
          </Field>
          <Field label="Child email">
            <TextInput
              type="email"
              value={childEmail}
              onChange={(e) => setChildEmail(e.target.value)}
              required
            />
          </Field>
          <Field label="Child date of birth">
            <TextInput
              type="date"
              value={childDob}
              onChange={(e) => setChildDob(e.target.value)}
              max={new Date().toISOString().slice(0, 10)}
              min="2010-01-01"
              required
            />
          </Field>
          <Field label="Child password">
            <TextInput
              type="password"
              value={childPassword}
              onChange={(e) => setChildPassword(e.target.value)}
              minLength={6}
              required
            />
          </Field>
          <Field label="Confirm child password">
            <TextInput
              type="password"
              value={childConfirm}
              onChange={(e) => setChildConfirm(e.target.value)}
              minLength={6}
              required
            />
          </Field>

          <label className="mb-3 flex items-start gap-2 text-sm text-[var(--color-gray-text)]">
            <input
              type="checkbox"
              className="mt-1"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span>
              I am the parent/guardian and I consent to this child using Studiely
              (COPPA).
            </span>
          </label>
          <label className="mb-4 flex items-start gap-2 text-sm text-[var(--color-gray-text)]">
            <input
              type="checkbox"
              className="mt-1"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
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
              </a>
              .
            </span>
          </label>

          <PrimaryButton type="submit" loading={loading}>
            Create parent & child accounts
          </PrimaryButton>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--color-gray-text)]">
          <Link href="/login" className="font-semibold text-[var(--color-vivid-cyan)]">
            Back to sign in
          </Link>
        </p>
      </AuthCard>
    </AuthShell>
  );
}
