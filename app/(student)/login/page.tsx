"use client";

import Link from "next/link";
import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useAuth } from "@/components/providers/auth-provider";
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
  loginWithEmail,
  mapFirebaseError,
  sendPasswordResetEmail,
  signOutUser,
} from "@/lib/auth/service";
import { EMAIL_REGEX } from "@/lib/auth/types";
import { LEGAL_URLS } from "@/lib/config/constants";

function safeNextPath(raw: string | null): string {
  if (!raw) return "/home";
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/home";
  return raw;
}

function LoginInner() {
  const router = useRouter();
  const search = useSearchParams();
  const nextPath = safeNextPath(search.get("next"));
  const { enterGuestMode, refreshPhase } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!EMAIL_REGEX.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.trim().length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await loginWithEmail(email, password);
      await refreshPhase();
      router.replace(nextPath);
    } catch (err) {
      setError(mapFirebaseError(err));
    } finally {
      setLoading(false);
    }
  }

  async function onReset() {
    setError(null);
    setInfo(null);
    if (!EMAIL_REGEX.test(resetEmail.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setResetLoading(true);
    try {
      await sendPasswordResetEmail(resetEmail);
      setInfo(
        "If an account exists for that email, you will receive password reset instructions shortly.",
      );
      setResetOpen(false);
    } catch (err) {
      setError(mapFirebaseError(err));
    } finally {
      setResetLoading(false);
    }
  }

  function continueAsGuest() {
    void signOutUser().finally(() => {
      enterGuestMode();
      router.replace("/home");
    });
  }

  return (
    <AuthShell>
      <AuthCard
        title="Welcome back"
        subtitle="Sign in to continue studying with curriculum-aligned notes, quizzes, and more."
      >
        {error ? <Alert>{error}</Alert> : null}
        {info ? <Alert tone="success">{info}</Alert> : null}

        <form onSubmit={onSubmit}>
          <Field label="Email">
            <TextInput
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>
          <Field label="Password">
            <TextInput
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </Field>

          <button
            type="button"
            className="mb-4 text-sm font-medium text-[var(--color-vivid-cyan)]"
            onClick={() => {
              setResetOpen(true);
              setResetEmail(email);
            }}
          >
            Forgot password?
          </button>

          <PrimaryButton type="submit" loading={loading}>
            Sign in
          </PrimaryButton>
        </form>

        <div className="mt-3">
          <SecondaryButton type="button" onClick={continueAsGuest}>
            Continue as Guest
          </SecondaryButton>
        </div>

        <p className="mt-6 text-center text-sm text-[var(--color-gray-text)]">
          No account?{" "}
          <Link href="/signup" className="font-semibold text-[var(--color-vivid-cyan)]">
            Sign up
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-[var(--color-gray-text)]">
          Under 13?{" "}
          <Link
            href="/signup/parental"
            className="font-semibold text-[var(--color-vivid-cyan)]"
          >
            Parent sign-up
          </Link>
        </p>

        <footer className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-[var(--color-gray-text)]">
          <a href={LEGAL_URLS.privacy} target="_blank" rel="noreferrer">
            Privacy
          </a>
          <a href={LEGAL_URLS.terms} target="_blank" rel="noreferrer">
            Terms
          </a>
        </footer>
      </AuthCard>

      {resetOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)] p-4">
          <div className="w-full max-w-sm rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <h2 className="text-lg font-bold text-[var(--color-text)]">
              Reset password
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Enter your account email. We&apos;ll send a reset link if it exists.
            </p>
            <div className="mt-4">
              <Field label="Email">
                <TextInput
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </Field>
            </div>
            <div className="flex flex-col gap-2">
              <PrimaryButton
                type="button"
                loading={resetLoading}
                onClick={() => void onReset()}
              >
                Send reset email
              </PrimaryButton>
              <SecondaryButton type="button" onClick={() => setResetOpen(false)}>
                Cancel
              </SecondaryButton>
            </div>
          </div>
        </div>
      ) : null}
    </AuthShell>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <AuthShell>
          <AuthCard title="Welcome back" subtitle="Loading…">
            <p className="text-sm text-[var(--color-text-muted)]">Please wait…</p>
          </AuthCard>
        </AuthShell>
      }
    >
      <LoginInner />
    </Suspense>
  );
}
