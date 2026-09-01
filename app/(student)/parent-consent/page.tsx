"use client";

import { useState } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import {
  Alert,
  AuthLandscapeCard,
  AuthLoginShell,
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
    <AuthLoginShell>
      <AuthLandscapeCard
        title="Waiting for parent consent"
        subtitle="Your account is locked until a parent or guardian approves via the email link."
      >
        {error ? <Alert>{error}</Alert> : null}
        {info ? <Alert tone="success">{info}</Alert> : null}

        <div className="mb-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-muted)] px-3 py-2 text-xs text-[var(--color-text)] sm:text-sm">
          <p>
            Parent email:{" "}
            <strong>{student?.parentEmail ?? "—"}</strong>
          </p>
          <p className="mt-1 text-[var(--color-text-muted)]">
            After they approve, sign in again or tap Check status.
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
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
      </AuthLandscapeCard>
    </AuthLoginShell>
  );
}
