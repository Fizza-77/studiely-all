"use client";

import { useFirebase } from "@/components/providers/firebase-provider";
import {
  AI_PROXY_BASE_URL,
  APP_DISPLAY_NAME,
  APP_PACKAGE_NAME,
  FIREBASE_PROJECT,
  FUNCTIONS_REGION,
} from "@/lib/config/constants";

function StatusPill({
  ok,
  label,
}: {
  ok: boolean;
  label: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium ${
        ok
          ? "bg-[var(--color-soft-green-light)] text-[var(--color-dark-azure)]"
          : "bg-[var(--color-error-light)] text-[var(--color-error)]"
      }`}
    >
      <span
        className={`size-2 rounded-full ${ok ? "bg-[var(--color-soft-green)]" : "bg-[var(--color-error)]"}`}
        aria-hidden
      />
      {label}
    </span>
  );
}

export function PhaseZeroStatus() {
  const { status, error, user, authReady } = useFirebase();
  const firebaseOk = status === "ready";

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-wide text-[var(--color-vivid-cyan)] uppercase">
          Phase 0 · Foundations
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--color-dark-azure)] sm:text-5xl">
          {APP_DISPLAY_NAME}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-[var(--color-gray-text)]">
          Next.js web client for {APP_PACKAGE_NAME}. Same Firebase project as the
          live Flutter app. Client-only — no backend or security-rule changes.
        </p>
      </header>

      <section className="flex flex-wrap gap-3">
        <StatusPill ok={firebaseOk} label={firebaseOk ? "Firebase ready" : "Firebase not ready"} />
        <StatusPill ok={authReady} label={authReady ? "Auth listener ready" : "Auth starting…"} />
        <StatusPill
          ok={!error}
          label={error ? "Config error" : "Env loaded"}
        />
      </section>

      {error ? (
        <p className="rounded-md border border-[var(--color-error)]/30 bg-[var(--color-error-light)] px-4 py-3 text-sm text-[var(--color-error)]">
          {error}
        </p>
      ) : null}

      <section className="grid gap-4 sm:grid-cols-2">
        <InfoCard title="Firebase project">
          <dl className="space-y-2 text-sm">
            <Row label="Name" value={FIREBASE_PROJECT.name} />
            <Row label="Project ID" value={FIREBASE_PROJECT.id} />
            <Row label="Project number" value={FIREBASE_PROJECT.number} />
            <Row label="Functions region" value={FUNCTIONS_REGION} />
          </dl>
        </InfoCard>

        <InfoCard title="Client session">
          <dl className="space-y-2 text-sm">
            <Row label="Auth status" value={user ? "Signed in" : "Signed out (guest)"} />
            <Row label="User uid" value={user?.uid ?? "—"} />
            <Row label="Email" value={user?.email ?? "—"} />
            <Row label="AI proxy" value={AI_PROXY_BASE_URL} />
          </dl>
        </InfoCard>
      </section>

      <section className="rounded-xl border border-[var(--color-light-gray)] bg-white/80 p-6 shadow-[0_1px_0_rgba(13,57,84,0.04)]">
        <h2 className="mb-3 text-lg font-semibold text-[var(--color-dark-azure)]">
          Hard constraints (do not break)
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-gray-text)]">
          <li>No edits to Cloud Functions, Firestore rules, or Storage rules in EduPlayce.</li>
          <li>No Admin SDK or service-account keys in this repo.</li>
          <li>No OpenAI / Gemini / Resend secrets in Next.js client or env for the browser.</li>
          <li>Reuse existing callables and collection schemas exactly as Flutter does.</li>
          <li>Subscription fields on Students remain server-written only.</li>
        </ul>
      </section>
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--color-light-gray)] bg-white/90 p-5">
      <h2 className="mb-4 text-sm font-semibold tracking-wide text-[var(--color-core-blue)] uppercase">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
      <dt className="text-[var(--color-gray-text)]">{label}</dt>
      <dd className="break-all font-medium text-[var(--color-dark-azure)]">{value}</dd>
    </div>
  );
}
