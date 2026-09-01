"use client";

import { useEffect, useState, type FormEvent } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import {
  Alert,
  AuthLandscapeCard,
  AuthLoginShell,
  Field,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "@/components/ui/auth-form";
import {
  mapFirebaseError,
  sendVerificationOtp,
  signOutUser,
  verifyEmailOtp,
} from "@/lib/auth/service";

const RESEND_COOLDOWN_SEC = 60;

export default function VerifyEmailPage() {
  const { user, phase, recheckEmailVerification } = useAuth();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = window.setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => window.clearTimeout(t);
  }, [cooldown]);

  async function onVerify(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    const code = otp.replace(/\D/g, "");
    if (code.length !== 6) {
      setError("Enter the 6-digit code from your email.");
      return;
    }
    setLoading(true);
    try {
      await verifyEmailOtp(code);
      await recheckEmailVerification();
      window.setTimeout(() => {
        void recheckEmailVerification();
      }, 600);
    } catch (err) {
      setError(mapFirebaseError(err));
    } finally {
      setLoading(false);
    }
  }

  async function onResend() {
    setError(null);
    setInfo(null);
    try {
      await sendVerificationOtp();
      setInfo("A new verification code was sent.");
      setCooldown(RESEND_COOLDOWN_SEC);
    } catch (err) {
      setError(mapFirebaseError(err));
    }
  }

  if (phase !== "studentUnverified" && phase !== "initializing") {
    return null;
  }

  return (
    <AuthLoginShell>
      <AuthLandscapeCard
        title="Verify your email"
        subtitle={`Enter the 6-digit code sent to ${user?.email ?? "your email"}. Codes expire in 15 minutes. Unverified accounts are removed after 24 hours.`}
      >
        {error ? <Alert>{error}</Alert> : null}
        {info ? <Alert tone="success">{info}</Alert> : null}

        <form onSubmit={(e) => void onVerify(e)}>
          <Field label="Verification code" className="mb-2">
            <TextInput
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="123456"
              required
            />
          </Field>
          <PrimaryButton type="submit" loading={loading}>
            Verify email
          </PrimaryButton>
        </form>

        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <SecondaryButton
            type="button"
            disabled={cooldown > 0}
            onClick={() => void onResend()}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
          </SecondaryButton>
          <SecondaryButton
            type="button"
            onClick={() => void recheckEmailVerification()}
          >
            Already verified
          </SecondaryButton>
        </div>
        <div className="mt-1.5">
          <SecondaryButton type="button" onClick={() => void signOutUser()}>
            Sign out
          </SecondaryButton>
        </div>
      </AuthLandscapeCard>
    </AuthLoginShell>
  );
}
