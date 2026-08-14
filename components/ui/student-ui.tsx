"use client";

import Link from "next/link";
import { type ReactNode } from "react";

import type { GeneratedNote } from "@/lib/student/types";
import { formatRelativeTime } from "@/lib/student/data";

export function StatCard({
  label,
  value,
  hint,
  onClick,
}: {
  label: string;
  value: string;
  hint?: string;
  onClick?: () => void;
}) {
  const className =
    "rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 text-left shadow-[0_1px_0_rgba(13,57,84,0.04)]";

  const body = (
    <>
      <p className="text-xs font-semibold tracking-wide text-[var(--color-text-muted)] uppercase">
        {label}
      </p>
      <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-text)]">
        {value}
      </p>
      {hint ? (
        <p className="mt-1 text-xs text-[var(--color-text-muted)]">{hint}</p>
      ) : null}
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${className} transition hover:border-[var(--color-vivid-cyan)]/40`}>
        {body}
      </button>
    );
  }

  return <div className={className}>{body}</div>;
}

export function NoteListCard({ note }: { note: GeneratedNote }) {
  return (
    <Link
      href={`/library/${note.id}`}
      className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition hover:border-[var(--color-vivid-cyan)]/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-semibold text-[var(--color-text)]">
            {note.topic || "Untitled"}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            {note.subject || "General"} · {note.studyMode}
          </p>
        </div>
        <div className="shrink-0 text-right">
          {note.isFavorite ? (
            <span className="text-[var(--color-soft-yellow)]" aria-label="Favorite">
              ★
            </span>
          ) : null}
          <p className="text-xs text-[var(--color-text-muted)]">
            {formatRelativeTime(note.createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-bold tracking-[0.12em] text-[var(--color-vivid-cyan)] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-[-0.02em] text-[var(--color-text)] sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-2 max-w-xl text-base text-[var(--color-text-muted)]">
            {subtitle}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-card-muted)] px-6 py-12 text-center">
      <h2 className="text-lg font-semibold text-[var(--color-text)]">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-[var(--color-text-muted)]">
        {body}
      </p>
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  );
}

export function LoadingBlock({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-16 text-sm text-[var(--color-text-muted)]">
      <div className="size-5 animate-spin rounded-full border-2 border-[var(--color-vivid-cyan)] border-t-transparent" />
      {label}
    </div>
  );
}
