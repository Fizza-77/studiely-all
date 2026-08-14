"use client";

import { useState } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import {
  Alert,
  AuthCard,
  AuthShell,
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/auth-form";
import {
  mapFirebaseError,
  sendParentConsentEmail,
  signOutUser,
} from "@/lib/auth/service";

export default function ParentConsentPage() {
  const { user, student, phase, refreshPhase } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onResend() {
    if (!user || !student?.parentEmail) {
      setError("Missing parent email on your account.");
      return;
    }
    setLoading(true);
    setError(null);
    setInfo(null);
    try {
      await sendParentConsentEmail({
        uid: user.uid,
        parentEmail: student.parentEmail,
        childName: student.name || "Your child",
      });
      setInfo("Consent email resent to your parent or guardian.");
    } catch (err) {
      setError(mapFirebaseError(err));
    } finally {
      setLoading(false);
    }
  }

  if (phase !== "studentPendingParentConsent" && phase !== "initializing") {
    return null;
  }

  return (
    <AuthShell>
      <AuthCard
        title="Waiting for parent consent"
        subtitle="Your account is locked until a parent or guardian approves via the email link."
      >
        {error ? <Alert>{error}</Alert> : null}
        {info ? <Alert tone="success">{info}</Alert> : null}

        <div className="mb-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-muted)] px-4 py-3 text-sm text-[var(--color-text)]">
          <p>
            Parent email:{" "}
            <strong>{student?.parentEmail ?? "—"}</strong>
          </p>
          <p className="mt-2 text-[var(--color-text-muted)]">
            After they approve, sign in again (or refresh) to continue.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <PrimaryButton
            type="button"
            loading={loading}
            onClick={() => void onResend()}
          >
            Resend consent email
          </PrimaryButton>
          <SecondaryButton type="button" onClick={() => void refreshPhase()}>
            Check status
          </SecondaryButton>
          <SecondaryButton type="button" onClick={() => void signOutUser()}>
            Sign out
          </SecondaryButton>
        </div>
      </AuthCard>
    </AuthShell>
  );
}
