"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { AppShell } from "@/components/layout/app-shell";
import { DataConsentGate } from "@/components/auth/data-consent-gate";
import { useAuth } from "@/components/providers/auth-provider";
import {
  Alert,
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/auth-form";
import { GeneratedStudyContent } from "@/components/library/generated-study-content";
import { EmptyState, LoadingBlock } from "@/components/ui/student-ui";
import { exportNote } from "@/lib/export/note-export";
import { generateHref } from "@/lib/generate/modes";
import { regenerateHrefFromNote } from "@/lib/generate/regenerate-href";
import {
  deleteNote,
  fetchNoteById,
  setNoteFavorite,
} from "@/lib/student/data";
import type { GeneratedNote } from "@/lib/student/types";

function formatNoteDate(date: Date | null): string {
  if (!date) return "—";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}

export default function NoteReviewPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { phase, user } = useAuth();
  const noteId = params.id;

  const [note, setNote] = useState<GeneratedNote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (phase === "guest" || !user || !noteId) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    void (async () => {
      setLoading(true);
      try {
        const n = await fetchNoteById(user.uid, noteId);
        if (!cancelled) {
          setNote(n);
          setError(n ? null : "Note not found.");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load note");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [phase, user, noteId]);

  useEffect(() => {
    if (!deleteOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [deleteOpen]);

  async function toggleFavorite() {
    if (!user || !note) return;
    setBusy(true);
    try {
      const next = !note.isFavorite;
      await setNoteFavorite(user.uid, note.id, next);
      setNote({ ...note, isFavorite: next });
    } finally {
      setBusy(false);
    }
  }

  async function confirmDelete() {
    if (!user || !note) return;
    setDeleting(true);
    setBusy(true);
    try {
      await deleteNote(user.uid, note.id);
      setDeleteOpen(false);
      router.replace("/library");
    } finally {
      setDeleting(false);
      setBusy(false);
    }
  }

  async function onRegenerate() {
    if (!note) return;
    router.push(regenerateHrefFromNote(note));
  }

  return (
    <DataConsentGate>
      <AppShell wide contentTopPx={15}>
        {phase === "guest" ? (
          <EmptyState
            title="Sign in required"
            body="Open notes from your library after signing in."
            action={
              <Link href="/login">
                <PrimaryButton type="button" className="w-auto px-5">
                  Sign in
                </PrimaryButton>
              </Link>
            }
          />
        ) : loading ? (
          <LoadingBlock />
        ) : error || !note || !user ? (
          <EmptyState
            title="Note unavailable"
            body={error ?? "Not found"}
            action={
              <Link href="/library">
                <SecondaryButton type="button" className="w-auto px-5">
                  Back to library
                </SecondaryButton>
              </Link>
            }
          />
        ) : (
          <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
            <div className="px-[0.5in]">
              <NoteHeroCard
                note={note}
                busy={busy}
                onExportPdf={() => {
                  setExportError(null);
                  void exportNote(note, "pdf").catch((err) =>
                    setExportError(
                      err instanceof Error ? err.message : "PDF export failed",
                    ),
                  );
                }}
                onExportWord={() => {
                  setExportError(null);
                  void exportNote(note, "docx").catch((err) =>
                    setExportError(
                      err instanceof Error
                        ? err.message
                        : "DOCX export failed",
                    ),
                  );
                }}
                onRegenerate={onRegenerate}
                onFavorite={() => void toggleFavorite()}
                onDelete={() => setDeleteOpen(true)}
              />

              {exportError ? (
                <div className="mt-4">
                  <Alert>{exportError}</Alert>
                </div>
              ) : null}
            </div>

            <div className="mt-6 px-[0.7in]">
              <GeneratedStudyContent note={note} uid={user.uid} />

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/library"
                  className="text-sm font-semibold text-[var(--color-vivid-cyan)]"
                >
                  ← Back to library
                </Link>
                <Link
                  href={generateHref(note.studyMode)}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-extrabold transition hover:brightness-105"
                  style={{ background: "#E8FF2F", color: "#4F35F2" }}
                >
                  Create new
                </Link>
              </div>
            </div>
          </div>
        )}
      </AppShell>
      {deleteOpen && note
        ? createPortal(
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4">
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="delete-note-title"
                className="w-full max-w-md rounded-2xl border border-[#E8E6F0] bg-white p-6 shadow-[0_16px_40px_rgba(17,24,39,0.18)]"
              >
                <h2
                  id="delete-note-title"
                  className="font-heading text-xl font-extrabold text-[#111827]"
                >
                  Delete this note?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  {note.topic
                    ? `“${note.topic}” will be permanently removed from your library. This cannot be undone.`
                    : "This note will be permanently removed from your library. This cannot be undone."}
                </p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <SecondaryButton
                    type="button"
                    className="sm:!w-auto sm:px-5"
                    disabled={deleting}
                    onClick={() => setDeleteOpen(false)}
                  >
                    Cancel
                  </SecondaryButton>
                  <PrimaryButton
                    type="button"
                    className="sm:!w-auto sm:px-5 !bg-[#FF2D8A] hover:!brightness-105"
                    loading={deleting}
                    onClick={() => void confirmDelete()}
                  >
                    Delete
                  </PrimaryButton>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </DataConsentGate>
  );
}

const LIME = "#E8FF2F";
const BLUE = "#4F35F2";
const PINK = "#FF2D8A";

function NoteHeroCard({
  note,
  busy,
  onExportPdf,
  onExportWord,
  onRegenerate,
  onFavorite,
  onDelete,
}: {
  note: GeneratedNote;
  busy: boolean;
  onExportPdf: () => void;
  onExportWord: () => void;
  onRegenerate: () => void;
  onFavorite: () => void;
  onDelete: () => void;
}) {
  const [exportOpen, setExportOpen] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!exportOpen) return;
    function onPointerDown(e: MouseEvent) {
      if (exportRef.current && !exportRef.current.contains(e.target as Node)) {
        setExportOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setExportOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [exportOpen]);

  const meta = [
    note.subject || "General",
    note.difficulty || null,
    formatNoteDate(note.createdAt),
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <section
      className="flex min-h-[8rem] flex-col gap-5 overflow-visible rounded-[28px] px-6 py-7 text-white shadow-[0_16px_40px_rgba(79,53,242,0.28)] sm:min-h-[9.5rem] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-8 md:min-h-[11rem] md:px-10 md:py-9 lg:min-h-[12rem] lg:px-12 lg:py-10 xl:min-h-[13rem] xl:px-14 xl:py-11"
      style={{
        background:
          "linear-gradient(135deg, #4F35F2 0%, #5B4BF0 42%, #7C6CF0 78%, #A78BFA 100%)",
      }}
    >
      <div className="min-w-0 flex-1">
        <div className="mb-3 flex items-center gap-3">
          <Link
            href="/library"
            aria-label="Back to library"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white transition hover:bg-white/25"
          >
            <BackArrowIcon />
          </Link>
          <p
            className="inline-flex rounded-full px-3 py-1 font-bold tracking-[0.08em] text-white uppercase"
            style={{ background: "#FF2D8A", fontSize: "0.75rem" }}
          >
            {note.studyMode || "Summary Notes"}
          </p>
        </div>
        <h1
          className="font-heading font-extrabold leading-tight tracking-tight text-white"
          style={{ fontSize: "1.75rem" }}
        >
          {note.topic || "Untitled"}
        </h1>
        <p className="mt-2 text-white/90" style={{ fontSize: "1rem" }}>
          {meta}
        </p>
      </div>

      <div className="relative flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
        <div ref={exportRef} className="relative">
          <button
            type="button"
            disabled={busy}
            aria-expanded={exportOpen}
            aria-haspopup="menu"
            onClick={() => setExportOpen((v) => !v)}
            className="inline-flex h-11 items-center gap-1.5 rounded-2xl px-3.5 text-sm font-extrabold transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
            style={{ background: LIME, color: BLUE }}
          >
            Export
            <ChevronIcon open={exportOpen} />
          </button>
          {exportOpen ? (
            <div
              role="menu"
              className="absolute right-0 z-30 mt-2 min-w-[148px] overflow-hidden rounded-2xl border border-[#E8E6F0] bg-white py-1 shadow-[0_12px_28px_rgba(17,24,39,0.16)]"
            >
              <button
                type="button"
                role="menuitem"
                disabled={busy}
                className="flex w-full items-center gap-2 px-3.5 py-2.5 text-left text-sm font-semibold text-[#111827] transition hover:bg-[#F5F3FF] disabled:opacity-50"
                onClick={() => {
                  setExportOpen(false);
                  onExportPdf();
                }}
              >
                <span className="text-[#4F35F2]">
                  <PdfIcon />
                </span>
                PDF
              </button>
              <button
                type="button"
                role="menuitem"
                disabled={busy}
                className="flex w-full items-center gap-2 px-3.5 py-2.5 text-left text-sm font-semibold text-[#111827] transition hover:bg-[#F5F3FF] disabled:opacity-50"
                onClick={() => {
                  setExportOpen(false);
                  onExportWord();
                }}
              >
                <span className="text-[#4F35F2]">
                  <WordIcon />
                </span>
                Word
              </button>
            </div>
          ) : null}
        </div>

        <HeroIconButton
          label={busy ? "Working…" : "Regenerate"}
          disabled={busy}
          onClick={onRegenerate}
        >
          <RegenIcon />
        </HeroIconButton>
        <HeroIconButton
          label={note.isFavorite ? "Unfavorite" : "Favorite"}
          disabled={busy}
          onClick={onFavorite}
          active={note.isFavorite}
        >
          <StarIcon filled={note.isFavorite} />
        </HeroIconButton>
        <HeroIconButton label="Delete" disabled={busy} onClick={onDelete}>
          <TrashIcon />
        </HeroIconButton>
      </div>
    </section>
  );
}

function HeroIconButton({
  label,
  children,
  onClick,
  disabled,
  active,
}: {
  label: string;
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex size-11 items-center justify-center rounded-2xl transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
      style={{
        background: LIME,
        color: BLUE,
      }}
    >
      {children}
    </button>
  );
}

function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BackArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6M9 13h6M9 17h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m8.5 17 1.4-6h1.1l1.2 4.6L13.4 11h1.1l1.4 6h-1.15l-.85-3.9L12.4 17h-1.05l-.95-3.9L9.6 17H8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function RegenIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 12a9 9 0 1 1-2.6-6.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M21 4v5h-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ filled }: { filled?: boolean }) {
  if (filled) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="m12 3.2 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.5l-4.8 2.6.9-5.4-3.9-3.8 5.4-.8L12 3.2Z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m12 3.2 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.5l-4.8 2.6.9-5.4-3.9-3.8 5.4-.8L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M8 7l1 12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1l1-12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
