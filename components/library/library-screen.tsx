"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { DataConsentGate } from "@/components/auth/data-consent-gate";
import { useAuth } from "@/components/providers/auth-provider";
import { PrimaryButton } from "@/components/ui/auth-form";
import { EmptyState, LoadingBlock } from "@/components/ui/student-ui";
import { useStudentData } from "@/hooks/use-student-data";
import { formatRelativeTime, setNoteFavorite } from "@/lib/student/data";
import { librarySubjectPath } from "@/lib/student/library-paths";
import {
  filterNotesByTab,
  type GeneratedNote,
  type LibraryTab,
} from "@/lib/student/types";

const PINK = "#FF2D8A";
const PURPLE = "#4F35F2";
const LIME = "#E8FF2F";

type CategoryCard = {
  id: LibraryTab;
  title: string;
  countLabel: (n: number) => string;
  /** Homepage-style tool icon (png/svg path), or null to use inline icon */
  iconSrc: string | null;
};

const CATEGORIES: CategoryCard[] = [
  {
    id: "notes",
    title: "Notes",
    countLabel: (n) => `${n} item${n === 1 ? "" : "s"}`,
    iconSrc: "/notes.png",
  },
  {
    id: "flashcards",
    title: "Flashcards",
    countLabel: (n) => `${n} deck${n === 1 ? "" : "s"}`,
    iconSrc: "/flashcards.png",
  },
  {
    id: "quizzes",
    title: "Quizzes",
    countLabel: (n) => `${n} quiz${n === 1 ? "" : "zes"}`,
    iconSrc: "/quizz.png",
  },
  {
    id: "exam",
    title: "Exam Focus",
    countLabel: (n) => `${n} session${n === 1 ? "" : "s"}`,
    iconSrc: "/focus.png",
  },
  {
    id: "favorites",
    title: "Favorites",
    countLabel: (n) => `${n} saved`,
    iconSrc: null,
  },
];

function accentForNote(note: GeneratedNote, index: number) {
  const mode = note.studyMode.toLowerCase();
  if (mode.includes("flash")) {
    return { border: PINK, soft: "#FFE4F1", tag: PINK, label: "Flashcards" };
  }
  if (mode.includes("quiz")) {
    return {
      border: "#B8D400",
      soft: "#F3F9C8",
      tag: "#5B6B1A",
      label: "Quiz",
    };
  }
  if (mode.includes("exam") || mode.includes("mistake") || mode.includes("example")) {
    return {
      border: "#14B8A6",
      soft: "#D5F5F0",
      tag: "#0F766E",
      label: "Exam Focus",
    };
  }
  const cycle = [
    { border: PURPLE, soft: "#ECEAFF", tag: PURPLE, label: "Summary Notes" },
    { border: PINK, soft: "#FFE4F1", tag: PINK, label: "Summary Notes" },
    {
      border: "#B8D400",
      soft: "#F3F9C8",
      tag: "#5B6B1A",
      label: "Summary Notes",
    },
  ][index % 3]!;
  return { ...cycle, label: note.studyMode || "Summary Notes" };
}

function openLabelForTab(tab: LibraryTab) {
  switch (tab) {
    case "flashcards":
      return "Open deck";
    case "quizzes":
      return "Open quiz";
    case "exam":
      return "Open session";
    default:
      return "Open notes";
  }
}

function friendlyRelative(date: Date | null) {
  const raw = formatRelativeTime(date);
  if (!raw) return "";
  return raw
    .replace(/^(\d+)m ago$/, "$1 min ago")
    .replace(/^(\d+)h ago$/, (_, n) => `${n} hour${n === "1" ? "" : "s"} ago`)
    .replace(/^(\d+)d ago$/, (_, n) => `${n} day${n === "1" ? "" : "s"} ago`);
}

export function LibraryScreen({
  initialSubject = "",
}: {
  initialSubject?: string;
}) {
  const router = useRouter();
  const { phase, user } = useAuth();
  const isGuest = phase === "guest";
  const { loading, error, notes, refresh } = useStudentData();
  const searchParams = useSearchParams();
  const subjectQuery = searchParams.get("subject")?.trim() || "";
  const [tab, setTab] = useState<LibraryTab>("notes");
  const [query, setQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState<string>(
    () => initialSubject || "all",
  );
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [showSubjectMenu, setShowSubjectMenu] = useState(false);
  const subjectMenuRef = useRef<HTMLDivElement>(null);

  // Legacy `/library?subject=Chemistry` → `/library/subject/Chemistry`
  useEffect(() => {
    if (!subjectQuery) return;
    router.replace(librarySubjectPath(subjectQuery));
  }, [subjectQuery, router]);

  useEffect(() => {
    if (initialSubject) {
      setSubjectFilter(initialSubject);
    } else if (!subjectQuery) {
      setSubjectFilter("all");
    }
  }, [initialSubject, subjectQuery]);

  function selectSubject(next: string) {
    setSubjectFilter(next);
    setShowSubjectMenu(false);
    router.push(librarySubjectPath(next));
  }

  const counts = useMemo(() => {
    const next: Record<LibraryTab, number> = {
      notes: 0,
      flashcards: 0,
      quizzes: 0,
      exam: 0,
      favorites: 0,
    };
    const scoped =
      subjectFilter === "all"
        ? notes
        : notes.filter((n) => n.subject === subjectFilter);
    for (const key of Object.keys(next) as LibraryTab[]) {
      next[key] = filterNotesByTab(scoped, key).length;
    }
    return next;
  }, [notes, subjectFilter]);

  const tabNotes = useMemo(() => filterNotesByTab(notes, tab), [notes, tab]);

  const subjects = useMemo(() => {
    const set = new Set<string>();
    for (const n of notes) {
      const s = (n.subject || "").trim();
      if (s) set.add(s);
    }
    if (subjectFilter !== "all") set.add(subjectFilter);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [notes, subjectFilter]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tabNotes.filter((n) => {
      if (subjectFilter !== "all" && n.subject !== subjectFilter) return false;
      if (!q) return true;
      return (
        n.topic.toLowerCase().includes(q) ||
        n.subject.toLowerCase().includes(q) ||
        n.studyMode.toLowerCase().includes(q)
      );
    });
  }, [tabNotes, query, subjectFilter]);

  useEffect(() => {
    if (!showSubjectMenu) return;
    function onPointerDown(e: MouseEvent) {
      if (
        subjectMenuRef.current &&
        !subjectMenuRef.current.contains(e.target as Node)
      ) {
        setShowSubjectMenu(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowSubjectMenu(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [showSubjectMenu]);

  async function toggleFavorite(note: GeneratedNote) {
    if (!user) return;
    try {
      await setNoteFavorite(user.uid, note.id, !note.isFavorite);
      await refresh({ silent: true });
    } catch {
      // keep UI quiet; list will refresh on next load
    }
  }

  return (
    <DataConsentGate>
      <AppShell wide>
        <div className="mx-auto w-full max-w-none">
          <header className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2.5">
                <span
                  className="h-1.5 w-8 shrink-0 rounded-full"
                  style={{ background: LIME }}
                  aria-hidden
                />
                <p
                  className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
                  style={{ color: PINK }}
                >
                  Your study space
                </p>
              </div>
              <h1 className="font-heading text-[clamp(1.75rem,3vw,2.35rem)] font-extrabold tracking-tight text-[#111827]">
                My Study Library
              </h1>
              <p className="mt-1 text-sm text-[#6B7280] sm:text-base">
                Everything you&apos;ve made, in one place.
              </p>
            </div>
            <Link
              href="/generate"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
              style={{ background: PINK }}
            >
              <span className="text-lg leading-none" aria-hidden>
                +
              </span>
              Create new
            </Link>
          </header>

        {isGuest ? (
          <EmptyState
            title="Sign in to view your library"
            body="Your generated notes sync to this account across devices."
            action={
              <Link href="/login">
                <PrimaryButton type="button" className="w-auto px-5">
                  Sign in
                </PrimaryButton>
              </Link>
            }
          />
        ) : loading ? (
          <LoadingBlock label="Loading library…" />
        ) : error ? (
          <EmptyState title="Couldn’t load library" body={error} />
        ) : (
          <>
              <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
                {CATEGORIES.map((cat) => {
                  const active = tab === cat.id;
                  const count = counts[cat.id];
                return (
                  <button
                      key={cat.id}
                    type="button"
                      onClick={() => {
                        setTab(cat.id);
                        setQuery("");
                        setShowSubjectMenu(false);
                      }}
                      className={`group relative z-[1] block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F35F2] focus-visible:ring-offset-2 hover:z-10 ${
                        active ? "z-10" : ""
                      }`}
                    >
                      {/* Twisted lime card behind — matches homepage ToolCard */}
                      <span
                        aria-hidden
                        className={`pointer-events-none absolute inset-0 origin-bottom rounded-[24px] shadow-[0_8px_22px_rgba(79,53,242,0.12)] transition-transform duration-500 ease-out will-change-transform motion-reduce:rotate-0 motion-reduce:transition-none sm:rounded-[28px] ${
                          active
                            ? "-rotate-[5deg]"
                            : "rotate-0 group-hover:-rotate-[5deg]"
                        }`}
                        style={{
                          background:
                            "radial-gradient(circle at 50% 45%, #B8FF3A 0%, #E8FF2F 42%, #9AE82A 100%)",
                        }}
                      />

                      <span
                        className={`relative flex min-h-[92px] items-center gap-3 overflow-visible rounded-[24px] border-b-[4px] border-[#3A24C4] px-3.5 py-3.5 text-white shadow-[0_10px_22px_rgba(79,53,242,0.26),0_4px_10px_rgba(79,53,242,0.14)] transition-transform duration-500 ease-out origin-bottom motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[28px] ${
                          active
                            ? "rotate-[5deg]"
                            : "rotate-0 group-hover:rotate-[5deg]"
                        }`}
                        style={{ backgroundColor: PURPLE }}
                      >
                        {active ? (
                          <span
                            className="absolute top-3 right-3 size-2.5 rounded-full"
                            style={{ background: LIME }}
                            aria-hidden
                          />
                        ) : null}
                        <span className="flex size-11 shrink-0 items-center justify-center text-white">
                          {cat.iconSrc ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={cat.iconSrc}
                              alt=""
                              className="h-7 w-auto object-contain sm:h-8"
                            />
                          ) : (
                            <StarOutlineIcon />
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-extrabold text-white">
                            {cat.title}
                          </span>
                          <span
                            className="mt-1.5 mb-1.5 block h-1 w-8 rounded-full"
                            style={{ background: LIME }}
                            aria-hidden
                          />
                          <span className="block text-xs text-white/80">
                            {cat.countLabel(count)}
                          </span>
                        </span>
                      </span>
                  </button>
                );
              })}
            </div>

              <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="relative min-w-0 flex-1">
                  <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#9CA3AF]">
                    <SearchIcon />
                  </span>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by topic..."
                    className="w-full rounded-2xl border border-[#E5E7EB] bg-white py-3 pr-4 pl-11 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#4F35F2]"
                  />
                </div>
                <div className="relative shrink-0" ref={subjectMenuRef}>
                  <button
                    type="button"
                    aria-expanded={showSubjectMenu}
                    aria-haspopup="listbox"
                    onClick={() => setShowSubjectMenu((v) => !v)}
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold text-[#111827] transition hover:brightness-[0.98]"
                    style={{ background: LIME }}
                  >
                    <span className="max-w-[180px] truncate sm:max-w-[220px]">
                      {subjectFilter === "all" ? "All subjects" : subjectFilter}
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                      className={`transition ${showSubjectMenu ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {showSubjectMenu ? (
                    <div
                      role="listbox"
                      aria-label="Filter by subject"
                      className="absolute top-[calc(100%+8px)] left-0 z-40 max-h-64 min-w-[220px] overflow-auto rounded-2xl border border-[#E8E6F0] bg-white py-1.5 shadow-[0_12px_28px_rgba(17,24,39,0.14)] sm:min-w-[260px]"
                    >
                      <button
                        type="button"
                        role="option"
                        aria-selected={subjectFilter === "all"}
                        onClick={() => {
                          selectSubject("all");
                        }}
                        className={`flex w-full px-3.5 py-2.5 text-left text-sm font-semibold transition ${
                          subjectFilter === "all"
                            ? "bg-[#F5F3FF] text-[#4F35F2]"
                            : "text-[#111827] hover:bg-[#F9FAFB]"
                        }`}
                      >
                        All subjects
                      </button>
                      {subjects.length === 0 ? (
                        <p className="px-3.5 py-2 text-sm text-[#6B7280]">
                          No subjects in this tab yet.
                        </p>
                      ) : (
                        subjects.map((s) => (
                          <button
                            key={s}
                            type="button"
                            role="option"
                            aria-selected={subjectFilter === s}
                            onClick={() => {
                              selectSubject(s);
                            }}
                            className={`flex w-full px-3.5 py-2.5 text-left text-sm font-semibold transition ${
                              subjectFilter === s
                                ? "bg-[#F5F3FF] text-[#4F35F2]"
                                : "text-[#111827] hover:bg-[#F9FAFB]"
                            }`}
                          >
                            {s}
                          </button>
                        ))
                      )}
                    </div>
                  ) : null}
                </div>
                <span
                  className="inline-flex shrink-0 items-center self-start rounded-full px-3 py-1.5 text-xs font-bold text-white sm:self-center"
                  style={{ background: PINK }}
                >
                  {filtered.length} shown
                </span>
              </div>

            {filtered.length === 0 ? (
              <EmptyState
                title="Nothing here yet"
                body={
                  tab === "favorites"
                    ? "Star a note from its review page to see it here."
                      : query || subjectFilter !== "all"
                        ? "No matches for this search or filter."
                        : "Generate study material to fill this tab."
                  }
                  action={
                    <Link href="/generate">
                      <PrimaryButton type="button" className="w-auto px-5">
                        Create new
                      </PrimaryButton>
                    </Link>
                }
              />
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                  {filtered.map((note, index) => {
                    const accent = accentForNote(note, index);
                    return (
                      <article
                        key={note.id}
                        className="relative overflow-hidden rounded-[22px] border border-[#E8E6F0] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.04)]"
                      >
                        <span
                          className="absolute top-0 bottom-0 left-0 w-1.5"
                          style={{ background: accent.border }}
                          aria-hidden
                        />
                        <div className="p-4 pl-5">
                          <div className="flex items-start gap-3">
                            <span
                              className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                              style={{
                                background: accent.soft,
                                color: accent.tag,
                              }}
                            >
                              <DocIcon />
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <h2 className="font-heading truncate text-base font-extrabold text-[#111827]">
                                  {note.topic || "Untitled"}
                                </h2>
                                <button
                                  type="button"
                                  onClick={() => void toggleFavorite(note)}
                                  className="shrink-0 rounded-md p-1 text-[#9CA3AF] transition hover:text-[#F59E0B]"
                                  aria-label={
                                    note.isFavorite
                                      ? "Remove favorite"
                                      : "Add favorite"
                                  }
                                >
                                  {note.isFavorite ? (
                                    <span className="text-[#F59E0B]">★</span>
                                  ) : (
                                    <StarOutlineIcon small />
                                  )}
                                </button>
                              </div>
                              <p className="mt-1 flex items-center gap-1.5 text-xs text-[#9CA3AF]">
                                <ClockIcon />
                                {friendlyRelative(note.createdAt) || "Recently"}
                              </p>
                            </div>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            <span
                              className="rounded-lg px-2.5 py-1 text-[10px] font-extrabold tracking-[0.06em] uppercase"
                              style={{
                                background: accent.soft,
                                color: accent.tag,
                              }}
                            >
                              {accent.label}
                            </span>
                            {note.subject ? (
                              <span className="rounded-lg bg-[#F3EFE6] px-2.5 py-1 text-[10px] font-extrabold tracking-[0.06em] text-[#4B5563] uppercase">
                                {note.subject}
                              </span>
                            ) : null}
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-[#F0EEF5] pt-3">
                            <Link
                              href={`/library/${note.id}`}
                              className="text-sm font-bold transition hover:underline"
                              style={{ color: accent.tag }}
                            >
                              {openLabelForTab(tab)} →
                            </Link>
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() =>
                                  setMenuOpenId((id) =>
                                    id === note.id ? null : note.id,
                                  )
                                }
                                className="flex size-8 items-center justify-center rounded-full bg-[#F5F3FF] text-[#6B7280] transition hover:bg-[#ECEAFF]"
                                aria-label="More options"
                              >
                                <MoreIcon />
                              </button>
                              {menuOpenId === note.id ? (
                                <div className="absolute right-0 bottom-[calc(100%+6px)] z-20 min-w-[140px] overflow-hidden rounded-xl border border-[#E8E6F0] bg-white py-1 shadow-[0_12px_28px_rgba(17,24,39,0.12)]">
                                  <Link
                                    href={`/library/${note.id}`}
                                    className="block px-3 py-2 text-sm font-semibold text-[#111827] hover:bg-[#F9FAFB]"
                                    onClick={() => setMenuOpenId(null)}
                                  >
                                    Open
                                  </Link>
                                  <button
                                    type="button"
                                    className="block w-full px-3 py-2 text-left text-sm font-semibold text-[#111827] hover:bg-[#F9FAFB]"
                                    onClick={() => {
                                      setMenuOpenId(null);
                                      void toggleFavorite(note);
                                    }}
                                  >
                                    {note.isFavorite
                                      ? "Unfavorite"
                                      : "Favorite"}
                                  </button>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
              </div>
            )}
          </>
        )}
        </div>
      </AppShell>
    </DataConsentGate>
  );
}

function DocIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="6"
        y="4"
        width="12"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 9h6M9 12.5h6M9 16h3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CardsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="8"
        y="3.5"
        width="11"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="5"
        y="6.5"
        width="11"
        height="14"
        rx="2"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function StarOutlineIcon({ small }: { small?: boolean }) {
  const size = small ? 16 : 20;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 3.8 14.4 9.2 20.2 9.7 15.8 13.6 17.2 19.3 12 16.3 6.8 19.3 8.2 13.6 3.8 9.7 9.6 9.2 12 3.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16.5 16.5 20 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 8v5l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  );
}
