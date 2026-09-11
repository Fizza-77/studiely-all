"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import {
  Alert,
  AuthLandscapeCard,
  AuthLoginShell,
  Field,
  PrimaryButton,
  TextInput,
  PasswordInput,
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
  const [relationship] = useState("Parent");
  const [childName, setChildName] = useState("");
  const [childEmail, setChildEmail] = useState("");
  const [childPassword, setChildPassword] = useState("");
  const [childConfirm, setChildConfirm] = useState("");
  const [childDob, setChildDob] = useState(defaultChildDob);
  const [consent, setConsent] = useState(false);
  const [adConsent, setAdConsent] = useState(false);
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
    if (!adConsent) {
      setError("Please acknowledge and consent to the rewarded video ads disclosure.");
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
        rewardedAdsConsent: adConsent,
      });
      router.replace("/verify-email");
    } catch (err) {
      setError(mapFirebaseError(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLoginShell>
      <AuthLandscapeCard
        title="Parent sign-up"
        subtitle="Create a parent account and a linked child account (under 13)."
        wide
      >
        {error ? <Alert>{error}</Alert> : null}

        <form onSubmit={(e) => void onSubmit(e)}>
          <p className="mb-1 text-[10px] font-semibold tracking-wide text-[var(--color-core-blue)] uppercase">
            Parent
          </p>
          <div className="mb-2 grid grid-cols-2 gap-x-3">
            <Field label="Full name" className="mb-1.5">
              <TextInput
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                required
              />
            </Field>
            <Field label="Email" className="mb-1.5">
              <TextInput
                type="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                required
              />
            </Field>
            <Field label="Password" className="mb-1.5">
              <PasswordInput
                value={parentPassword}
                onChange={(e) => setParentPassword(e.target.value)}
                minLength={6}
                required
              />
            </Field>
            <Field label="Confirm password" className="mb-1.5">
              <PasswordInput
                value={parentConfirm}
                onChange={(e) => setParentConfirm(e.target.value)}
                minLength={6}
                required
              />
            </Field>
          </div>

          <p className="mb-1 text-[10px] font-semibold tracking-wide text-[var(--color-core-blue)] uppercase">
            Child
          </p>
          <div className="grid grid-cols-2 gap-x-3">
            <Field label="Full name" className="mb-1.5">
              <TextInput
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                required
              />
            </Field>
            <Field label="Email" className="mb-1.5">
              <TextInput
                type="email"
                value={childEmail}
                onChange={(e) => setChildEmail(e.target.value)}
                required
              />
            </Field>
            <Field label="Date of birth" className="mb-1.5">
              <TextInput
                type="date"
                value={childDob}
                onChange={(e) => setChildDob(e.target.value)}
                max={new Date().toISOString().slice(0, 10)}
                min="2010-01-01"
                required
              />
            </Field>
            <Field label="Password" className="mb-1.5">
              <PasswordInput
                value={childPassword}
                onChange={(e) => setChildPassword(e.target.value)}
                minLength={6}
                required
              />
            </Field>
            <Field label="Confirm password" className="mb-1.5">
              <PasswordInput
                value={childConfirm}
                onChange={(e) => setChildConfirm(e.target.value)}
                minLength={6}
                required
              />
            </Field>
          </div>

          {/* Distinct disclosure for rewarded video ads / extra generations */}
          <div className="mt-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-muted)] p-3 text-xs">
            <p className="mb-1 text-[11px] font-semibold tracking-wide text-[var(--color-text)] uppercase">
              Rewarded Video Ads &amp; Generations
            </p>
            <p className="text-[11.5px] leading-relaxed text-[var(--color-text-muted)]">
              &ldquo;On the Free plan, your child may choose to watch a short video ad to unlock one extra generation. These ads are non-personalised and contextual only &mdash; we never use advertising identifiers to target ads to your child, and no behavioural profiling is used. This is entirely optional and never affects your child&apos;s access to anything already available on the account.&rdquo;
            </p>
            <label className="mt-2 flex cursor-pointer items-start gap-2 border-t border-[var(--color-border)] pt-2 text-[11.5px] font-medium text-[var(--color-text)]">
              <input
                type="checkbox"
                className="mt-0.5"
                checked={adConsent}
                onChange={(e) => setAdConsent(e.target.checked)}
                required
              />
              <span>I understand and consent to this.</span>
            </label>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
            <label className="flex items-start gap-1.5 text-[11px] leading-snug text-[var(--color-gray-text)]">
              <input
                type="checkbox"
                className="mt-0.5"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span>I consent to my child using Studiely (COPPA).</span>
            </label>
            <label className="flex items-start gap-1.5 text-[11px] leading-snug text-[var(--color-gray-text)]">
              <input
                type="checkbox"
                className="mt-0.5"
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
          </div>

          <div className="mt-2">
            <PrimaryButton type="submit" loading={loading}>
              Create parent & child accounts
            </PrimaryButton>
          </div>
        </form>

        <p className="mt-2 text-center text-xs text-[var(--color-gray-text)] sm:text-sm">
          <Link href="/login" className="font-semibold text-[var(--color-vivid-cyan)]">
            Back to sign in
          </Link>
        </p>
      </AuthLandscapeCard>
    </AuthLoginShell>
  );
}
