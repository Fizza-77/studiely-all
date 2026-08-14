"use client";

import { useEffect, useState, type ReactNode } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import { consentStorage } from "@/lib/auth/consent";
import { isChildAccount } from "@/lib/auth/service";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/auth-form";

/**
 * Flutter StudentDataConsentGate parity:
 * - Skip for guests / children
 * - Local-only consent (not Firestore)
 */
export function DataConsentGate({ children }: { children: ReactNode }) {
  const { phase, student } = useAuth();
  const [ready, setReady] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (phase !== "student" && phase !== "guest") {
      setReady(true);
      setShowDialog(false);
      return;
    }

    if (phase === "guest") {
      setReady(true);
      setShowDialog(false);
      return;
    }

    if (student && isChildAccount(student)) {
      setReady(true);
      setShowDialog(false);
      return;
    }

    if (consentStorage.hasBeenRequested()) {
      setReady(true);
      setShowDialog(false);
      return;
    }

    setShowDialog(true);
    setReady(true);
  }, [phase, student]);

  function choose(value: boolean) {
    consentStorage.setConsent(value);
    setShowDialog(false);
  }

  if (!ready) {
    return (
      <div className="flex flex-1 items-center justify-center py-24 text-sm text-[var(--color-gray-text)]">
        Loading…
      </div>
    );
  }

  return (
    <>
      {children}
      {showDialog ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)] p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consent-title"
            className="w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-xl"
          >
            <h2
              id="consent-title"
              className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text)]"
            >
              Help us improve Studiely
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              We use analytics to understand how students use the app and fix
              issues. You can decline and still use Studiely. This choice is
              stored on this device only.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <PrimaryButton type="button" onClick={() => choose(true)}>
                Accept
              </PrimaryButton>
              <SecondaryButton type="button" onClick={() => choose(false)}>
                Decline
              </SecondaryButton>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
