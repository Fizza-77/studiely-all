"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

import { BrowserLink } from "@/components/pwa/BrowserLink";
import { LEGAL_URLS } from "@/lib/config/constants";
import { isStandalonePwa, openInSystemBrowser } from "@/lib/pwa";
import { calculateSubjectMastery } from "@/lib/student/data";
import { librarySubjectPath } from "@/lib/student/library-paths";
import {
  subjectMasteryPercentLabel,
  shortSubjectKeyword,
} from "@/lib/student/mastery-display";
import { randomAvatarDataUri } from "@/lib/student/random-avatar";
import type {
  DashboardStats,
  GeneratedNote,
  QuizAttempt,
  StudentProfile,
} from "@/lib/student/types";

const PINK = "#FF2D8A";
const PURPLE = "#4F35F2";
const LIME = "#E8FF2F";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export type ProfileDashboardProps = {
  displayName: string;
  initial: string;
  profile: StudentProfile | null;
  planLabel: string;
  isPremium: boolean;
  stats: DashboardStats | null;
  notes: GeneratedNote[];
  attempts: QuizAttempt[];
  certificatesCount?: number;
  curriculumComplete: boolean;
  avatarBusy?: boolean;
  onEditProfile: () => void;
  onShare: () => void;
  onAvatar: () => void;
  onLogoutRequest: () => void;
  onNotifications?: () => void;
  onComingSoon?: (message: string) => void;
};

type SubjectRow = {
  name: string;
  mastery: number;
  modes: string[];
};

export function ProfileDashboard({
  displayName,
  initial,
  profile,
  planLabel,
  isPremium,
  stats,
  notes,
  attempts,
  certificatesCount = 0,
  curriculumComplete,
  avatarBusy = false,
  onEditProfile,
  onShare,
  onAvatar,
  onLogoutRequest,
  onNotifications,
  onComingSoon,
}: ProfileDashboardProps) {
  const badgePlan = isPremium
    ? "Pro plan"
    : planLabel.toLowerCase().includes("free")
      ? "Free plan"
      : planLabel || "Free plan";

  const masteryLabel = subjectMasteryPercentLabel(
    stats?.subjectMasteryPercent ?? 0,
  );
  const topSubject = stats?.topSubject;
  const streakDays = stats?.streakDays ?? 0;
  const totalNotes = stats?.totalNotes ?? 0;
  const weeklySessions = stats?.weeklySessions ?? 0;
  const weeklyGoal = stats?.weeklyGoalSessions ?? 5;

  const subjects = useMemo(
    () => buildSubjectRows(notes, attempts),
    [notes, attempts],
  );

  const todayIndex = (new Date().getDay() + 6) % 7; // Mon=0 … Sun=6
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const visibleSubjects = showAllSubjects ? subjects : subjects.slice(0, 2);

  return (
    <div className="w-full pb-10">
      {!curriculumComplete ? (
        <button
          type="button"
          onClick={onEditProfile}
          className="mb-6 flex w-full items-start gap-3 rounded-2xl bg-[var(--color-indigo-soft)] px-4 py-3 text-left transition hover:brightness-[0.98] sm:items-center sm:px-5"
        >
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-vivid-cyan)] text-sm font-bold text-[var(--color-vivid-cyan)] sm:mt-0">
            i
          </span>
          <span className="min-w-0 flex-1 text-sm text-[var(--color-text)]">
            Complete Your Profile – set your curriculum &amp; grade so they
            pre-fill everywhere.
          </span>
          <span className="shrink-0 text-[var(--color-text-muted)]">›</span>
        </button>
      ) : null}

      <div className="profile-dashboard grid grid-cols-1 gap-6 lg:grid-cols-[minmax(280px,min(28vw,420px))_minmax(0,1fr)] lg:items-start lg:gap-6 xl:gap-8">
        <aside
          className="min-w-0 h-fit lg:sticky lg:self-start"
          style={{ top: "min(4.75rem, calc(100vh - 100% - 1rem))" }}
        >
          <div className="flex flex-col gap-4 md:mx-auto md:max-w-md lg:mx-0 lg:max-w-none">
            <ProfileCard
              displayName={displayName}
              initial={initial}
              profile={profile}
              badgePlan={badgePlan}
              certificatesCount={certificatesCount}
              streakDays={streakDays}
              totalNotes={totalNotes}
              avatarBusy={avatarBusy}
              onEditProfile={onEditProfile}
              onShare={onShare}
              onAvatar={onAvatar}
            />

            {isPremium ? (
              <BrowserLink
                href="/pricing"
                className="flex items-center justify-between gap-3 rounded-[22px] border border-[#E8E6F0] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] transition hover:-translate-y-0.5"
              >
                <div>
                  <p
                    className="font-bold text-[#111827]"
                    style={{ fontSize: "clamp(0.875rem, 0.85rem + 0.2vw, 0.9375rem)" }}
                  >
                    You&apos;re on Pro
                  </p>
                  <p
                    className="text-[#6B7280]"
                    style={{ fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)" }}
                  >
                    Manage plan
                  </p>
                </div>
                <span className="text-sm font-semibold" style={{ color: PURPLE }}>
                  →
                </span>
              </BrowserLink>
            ) : (
              <BrowserLink
                href="/pricing"
                className="flex items-start gap-3 rounded-[22px] px-4 py-4 shadow-[0_8px_24px_rgba(17,24,39,0.06)] transition hover:-translate-y-0.5"
                style={{ background: LIME }}
              >
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-2xl text-white"
                  style={{ background: PURPLE }}
                >
                  <StarIcon />
                </span>
                <span className="min-w-0">
                  <span
                    className="block font-heading font-extrabold text-[#111827]"
                    style={{ fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)" }}
                  >
                    Go Premium
                  </span>
                  <span
                    className="mt-1 block leading-snug text-[#1E1B4B]/85"
                    style={{ fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)" }}
                  >
                    Unlock more of everything — and earn a 20% discount with a
                    30-day streak.
                  </span>
                </span>
              </BrowserLink>
            )}

            <OptionsCard
              onLogoutRequest={onLogoutRequest}
              onNotifications={onNotifications}
              onComingSoon={onComingSoon}
            />
          </div>
        </aside>

        <div className="flex min-w-0 flex-col gap-8">
          {/* Your numbers — full-width lime pill (original layout) */}
          <section>
            <h2
              className="mb-3 font-heading font-bold text-[#111827]"
              style={{ fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)" }}
            >
              Your numbers
            </h2>
            <NumbersBar
              masteryValue={masteryLabel}
              masteryLabelText={
                topSubject
                  ? `${shortSubjectKeyword(topSubject)} mastery`
                  : "Subject mastery"
              }
              weeklyValue={`${weeklySessions} / ${weeklyGoal}`}
              streakValue={`${streakDays} days`}
              notesValue={String(totalNotes)}
            />
          </section>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start lg:gap-5 xl:gap-6">
            {/* ── This week ── */}
            <section className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h2
                  className="font-heading font-bold text-[#111827]"
                  style={{ fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)" }}
                >
                  This week
                </h2>
                <Link
                  href="/generate"
                  className="shrink-0 font-semibold transition hover:opacity-80"
                  style={{
                    color: PURPLE,
                    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)",
                  }}
                >
                  Weekly goal: {weeklyGoal} days
                </Link>
              </div>

              <div className="rounded-[24px] border border-[#E8E6F0] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-5 md:p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <p
                    className="font-semibold text-[#111827]"
                    style={{
                      fontSize: "clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)",
                    }}
                  >
                    Study days this week
                  </p>
                  <span
                    className="inline-flex rounded-full px-2.5 py-1 font-bold text-white"
                    style={{
                      background: PURPLE,
                      fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)",
                    }}
                  >
                    {weeklySessions} / {weeklyGoal}
                  </span>
                </div>
                <div className="-mx-0.5 overflow-x-auto pb-1">
                  <div className="grid min-w-[22rem] grid-cols-7 gap-2 px-0.5 sm:min-w-0">
                    {WEEKDAYS.map((day, i) => {
                      const isToday = i === todayIndex;
                      const completed = i < Math.min(weeklySessions, 7);
                      return (
                        <div
                          key={day}
                          className={`flex min-w-0 flex-col items-center gap-2 rounded-2xl border px-1 py-2.5 sm:gap-2.5 sm:py-3 ${
                            isToday
                              ? "border-[#FFD0E4] bg-[#FFF0F6]"
                              : "border-[#EEF0F4] bg-[#FAFBFC]"
                          }`}
                        >
                          <span
                            className={`font-bold tracking-wide uppercase ${
                              isToday ? "text-[#FF2D8A]" : "text-[#6B7280]"
                            }`}
                            style={{
                              fontSize:
                                "clamp(0.6875rem, 0.65rem + 0.15vw, 0.75rem)",
                            }}
                          >
                            {day}
                          </span>
                          <span
                            className={`flex size-8 items-center justify-center rounded-full sm:size-9 ${
                              isToday
                                ? "text-white"
                                : completed
                                  ? "bg-[#DCFCE7] text-[#15803D]"
                                  : "bg-[#EEF0F4] text-[#C4C9D4]"
                            }`}
                            style={isToday ? { background: PINK } : undefined}
                          >
                            {isToday ? (
                              <DayStarIcon />
                            ) : completed ? (
                              <CheckIcon />
                            ) : null}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p
                  className="mt-3 leading-relaxed text-[#6B7280]"
                  style={{
                    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)",
                  }}
                >
                  {weeklySessions > 0
                    ? `You’ve studied ${weeklySessions} day${weeklySessions === 1 ? "" : "s"} this week — keep going.`
                    : `Today is still open — one session marks ${WEEKDAYS[todayIndex]} done and starts your streak.`}
                </p>
              </div>
            </section>

            {/* ── Your subjects ── */}
            <section className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h2
                  className="font-heading font-bold text-[#111827]"
                  style={{ fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)" }}
                >
                  Your subjects
                </h2>
                <div className="flex shrink-0 items-center gap-3">
                  {subjects.length > 2 ? (
                    <button
                      type="button"
                      onClick={() => setShowAllSubjects((v) => !v)}
                      className="font-semibold text-[#6B7280] transition hover:text-[#111827]"
                      style={{
                        fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)",
                      }}
                    >
                      {showAllSubjects ? "Show less" : "Show all"}
                    </button>
                  ) : null}
                  <Link
                    href="/library"
                    className="font-semibold transition hover:opacity-80"
                    style={{
                      color: PURPLE,
                      fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)",
                    }}
                  >
                    Open library
                  </Link>
                </div>
              </div>

              {subjects.length === 0 ? (
                <div className="rounded-[24px] border border-[#E8E6F0] bg-white px-4 py-6 text-center shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
                  <p
                    className="text-[#6B7280]"
                    style={{
                      fontSize: "clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)",
                    }}
                  >
                    Subjects appear here as you create notes for them.
                  </p>
                  <Link
                    href="/generate"
                    className="mt-3 inline-flex font-semibold"
                    style={{
                      color: PURPLE,
                      fontSize: "clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)",
                    }}
                  >
                    Add a subject →
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {visibleSubjects.map((subject, index) => {
                    const accent = index % 2 === 0 ? PURPLE : PINK;
                    return (
                      <Link
                        key={subject.name}
                        href={librarySubjectPath(subject.name)}
                        className="rounded-[22px] border border-[#E8E6F0] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(17,24,39,0.08)]"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white"
                            style={{ background: accent }}
                          >
                            <BookIcon />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <h3
                                className="font-heading font-extrabold text-[#111827]"
                                style={{
                                  fontSize:
                                    "clamp(0.9375rem, 0.9rem + 0.2vw, 1rem)",
                                }}
                              >
                                {subject.name}
                              </h3>
                              <span
                                className="shrink-0 font-extrabold"
                                style={{
                                  color:
                                    subject.mastery > 0 ? PURPLE : "#9CA3AF",
                                  fontSize:
                                    "clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)",
                                }}
                              >
                                {subject.mastery}%
                              </span>
                            </div>
                            <p
                              className="mt-1 text-[#6B7280]"
                              style={{
                                fontSize:
                                  "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)",
                              }}
                            >
                              {subject.modes.join(" · ")}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#EDE9FE]">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${Math.min(100, Math.max(subject.mastery > 0 ? 6 : 0, subject.mastery))}%`,
                              background:
                                subject.mastery > 0
                                  ? `linear-gradient(90deg, ${PURPLE} 0%, ${PINK} 100%)`
                                  : "transparent",
                            }}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>
          </div>

          {/* ── Achievements (3 in one row under the label) ── */}
          <section>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
              <h2
                className="font-heading font-bold text-[#111827]"
                style={{ fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)" }}
              >
                Achievements
              </h2>
              <Link
                href="/achievements"
                className="shrink-0 font-semibold transition hover:opacity-80"
                style={{
                  color: PURPLE,
                  fontSize: "clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)",
                }}
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <AchievementCard
                earned={totalNotes > 0}
                title="Getting Started"
                detail={
                  totalNotes > 0
                    ? `Earned · ${formatMonthDay(
                        notes
                          .slice()
                          .sort(
                            (a, b) =>
                              (a.createdAt?.getTime() ?? 0) -
                              (b.createdAt?.getTime() ?? 0),
                          )[0]?.createdAt ?? new Date(),
                      )}`
                    : "Create your first note to earn this"
                }
                icon={totalNotes > 0 ? <SparkSunIcon /> : <LockIcon />}
              />
              <AchievementCard
                earned={(stats?.subjectMasteryPercent ?? 0) >= 15}
                title="Foundation Builder"
                detail={masteryProgressLabel(
                  stats?.subjectMasteryPercent ?? 0,
                  15,
                )}
                icon={
                  (stats?.subjectMasteryPercent ?? 0) >= 15 ? (
                    <SparkSunIcon />
                  ) : (
                    <LockIcon />
                  )
                }
              />
              <AchievementCard
                earned={streakDays >= 15}
                title="Rising Star medal"
                detail={
                  streakDays >= 15
                    ? "Earned"
                    : `${Math.max(0, 15 - streakDays)} study days to go`
                }
                icon={streakDays >= 15 ? <SparkSunIcon /> : <LockIcon />}
              />
            </div>

            <Link
              href="/help"
              className="mt-3 flex flex-wrap items-center gap-4 rounded-[22px] border border-[#C4B5FD] px-4 py-4 shadow-[0_8px_24px_rgba(79,53,242,0.12)] transition hover:brightness-[1.02] sm:flex-nowrap sm:px-5"
              style={{
                background:
                  "linear-gradient(135deg, #4F35F2 0%, #6366F1 55%, #7C6CF0 100%)",
              }}
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
                <HelpLifeRingIcon />
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className="block font-heading font-extrabold text-white"
                  style={{ fontSize: "clamp(1rem, 0.95rem + 0.3vw, 1.125rem)" }}
                >
                  Need help?
                </span>
                <span
                  className="mt-0.5 block text-white/85"
                  style={{
                    fontSize: "clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)",
                  }}
                >
                  Message the Studiely team — we usually reply by email.
                </span>
              </span>
              <span
                className="hidden shrink-0 font-bold text-white/90 sm:inline"
                style={{
                  fontSize: "clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)",
                }}
              >
                Contact →
              </span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

function ProfileCard({
  displayName,
  initial,
  profile,
  badgePlan,
  certificatesCount,
  streakDays,
  totalNotes,
  avatarBusy,
  onEditProfile,
  onShare,
  onAvatar,
}: {
  displayName: string;
  initial: string;
  profile: StudentProfile | null;
  badgePlan: string;
  certificatesCount: number;
  streakDays: number;
  totalNotes: number;
  avatarBusy: boolean;
  onEditProfile: () => void;
  onShare: () => void;
  onAvatar: () => void;
}) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-[#E8E6F0] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
      {/* Gradient header */}
      <div
        className="relative h-[88px] sm:h-[100px]"
        style={{
          background: `linear-gradient(90deg, ${PURPLE} 0%, ${PINK} 100%)`,
        }}
      >
        {/* Avatar sits on the gradient / body seam */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <AvatarFace profile={profile} initial={initial} />
            <button
              type="button"
              disabled={avatarBusy}
              onClick={onAvatar}
              className="absolute -right-1 -bottom-1 flex size-8 items-center justify-center rounded-full text-[#1E1B4B] shadow-md ring-2 ring-white disabled:opacity-60"
              style={{ background: LIME }}
              aria-label="Change profile picture"
            >
              <CameraIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-5 pt-14 pb-5 sm:px-6 sm:pt-16 sm:pb-6">
        <h2
          className="max-w-full truncate text-center font-heading font-extrabold text-[#111827]"
          style={{ fontSize: "clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)" }}
        >
          {displayName}
        </h2>

        <div
          className="mt-2.5 inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1 font-bold text-[#111827]"
          style={{
            background: LIME,
            fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)",
          }}
        >
          <BookIconSmall />
          <span className="truncate">Student · {badgePlan}</span>
        </div>

        <div className="mt-5 grid w-full grid-cols-3 gap-2 sm:gap-2.5">
          <MiniStat
            href="/achievements"
            label="Certificates"
            value={String(certificatesCount)}
          />
          <MiniStat label="Day Streak" value={String(streakDays)} />
          <MiniStat label="Notes" value={String(totalNotes)} />
        </div>

        <div className="mt-5 flex w-full flex-col gap-2.5 sm:flex-row">
          <button
            type="button"
            onClick={onEditProfile}
            className="inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 font-bold text-white transition hover:brightness-110"
            style={{
              background: PURPLE,
              fontSize: "clamp(0.875rem, 0.85rem + 0.2vw, 0.9375rem)",
            }}
          >
            Edit profile
          </button>
          <button
            type="button"
            onClick={onShare}
            className="inline-flex flex-1 items-center justify-center rounded-2xl bg-[#ECEAFF] px-4 py-3 font-bold transition hover:brightness-[0.98]"
            style={{
              color: PURPLE,
              fontSize: "clamp(0.875rem, 0.85rem + 0.2vw, 0.9375rem)",
            }}
          >
            Share
          </button>
        </div>
      </div>
    </section>
  );
}

function AvatarFace({
  profile,
  initial,
}: {
  profile: StudentProfile | null;
  initial: string;
}) {
  // Circular frame so photo / seed avatars fill the circle cleanly
  const frame =
    "size-[88px] overflow-hidden rounded-full bg-white p-[3px] shadow-[0_4px_14px_rgba(17,24,39,0.12)] sm:size-[96px]";
  const media = "size-full rounded-full object-cover object-center";

  const inner = (() => {
    if (profile?.avatarSource === "photo" && profile.profileImageUrl) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={profile.profileImageUrl} alt="" className={media} />
      );
    }
    if (profile?.avatarSeed) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={randomAvatarDataUri(profile.avatarSeed)}
          alt=""
          className={`${media} bg-[#EDE9FE]`}
        />
      );
    }
    if (profile?.profileImageUrl) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={profile.profileImageUrl} alt="" className={media} />
      );
    }
    return (
      <div
        className="flex size-full items-center justify-center rounded-full text-3xl font-extrabold text-white sm:text-4xl"
        style={{ background: PURPLE }}
      >
        {initial}
      </div>
    );
  })();

  return <div className={frame}>{inner}</div>;
}

function MiniStat({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const className =
    "flex min-w-0 flex-col items-center justify-center rounded-2xl border border-[#EDE9FE] bg-[#F7F5FF] px-1.5 py-3 text-center sm:px-2 sm:py-3.5";
  const inner = (
    <>
      <span
        className="block font-heading font-extrabold leading-none"
        style={{
          color: PURPLE,
          fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.5rem)",
        }}
      >
        {value}
      </span>
      <span
        className="mt-1.5 block font-bold tracking-[0.04em] text-[#9CA3AF] uppercase"
        style={{ fontSize: "clamp(0.625rem, 0.6rem + 0.12vw, 0.6875rem)" }}
      >
        {label}
      </span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={`${className} transition hover:brightness-[0.98]`}>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}

function BookIconSmall() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5V5.5Z"
        strokeLinejoin="round"
      />
      <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" strokeLinecap="round" />
    </svg>
  );
}

function OptionsCard({
  onLogoutRequest,
  onNotifications,
  onComingSoon,
}: {
  onLogoutRequest: () => void;
  onNotifications?: () => void;
  onComingSoon?: (message: string) => void;
}) {
  const rows: {
    key: string;
    label: string;
    icon: ReactNode;
    tint: string;
    href?: string;
    external?: boolean;
    danger?: boolean;
    onClick?: () => void;
  }[] = [
    {
      key: "notifications",
      label: "Notifications",
      icon: <BellIcon />,
      tint: "#DBEAFE",
      onClick: () => {
        if (onNotifications) onNotifications();
        else onComingSoon?.("Coming soon");
      },
    },
    {
      key: "subscription",
      label: "Subscription",
      icon: <LockIcon />,
      tint: "#DBEAFE",
      href: "/pricing",
      external: true,
    },
    {
      key: "privacy",
      label: "Privacy Policy",
      icon: <ShieldIcon />,
      tint: "#DBEAFE",
      href: LEGAL_URLS.privacy,
      external: true,
    },
    {
      key: "terms",
      label: "Terms of Service",
      icon: <DocIcon />,
      tint: "#DBEAFE",
      href: LEGAL_URLS.terms,
      external: true,
    },
    {
      key: "logout",
      label: "Log out",
      icon: <LogoutIcon />,
      tint: "#FFE4EC",
      danger: true,
      onClick: onLogoutRequest,
    },
  ];

  return (
    <section className="overflow-hidden rounded-[28px] border border-[#E8E6F0] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
      {rows.map((row, i) => {
        const content = (
          <>
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: row.tint,
                color: row.danger ? PINK : "#2563EB",
              }}
            >
              {row.icon}
            </span>
            <span
              className={`min-w-0 flex-1 font-semibold ${
                row.danger ? "text-[#E11D48]" : "text-[#111827]"
              }`}
              style={{ fontSize: "clamp(0.875rem, 0.85rem + 0.2vw, 0.9375rem)" }}
            >
              {row.label}
            </span>
            <span className="shrink-0 text-[#9CA3AF]">›</span>
          </>
        );

        const className = `flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-[#FAFAFC] sm:px-5 ${
          i < rows.length - 1 ? "border-b border-[#F0EEF6]" : ""
        }`;

        if (row.href) {
          if (row.external) {
            return (
              <a
                key={row.key}
                href={row.href}
                target="_blank"
                rel="noreferrer"
                className={className}
                onClick={(e) => {
                  if (!isStandalonePwa()) return;
                  e.preventDefault();
                  openInSystemBrowser(row.href!);
                }}
              >
                {content}
              </a>
            );
          }
          return (
            <Link key={row.key} href={row.href} className={className}>
              {content}
            </Link>
          );
        }

        return (
          <button
            key={row.key}
            type="button"
            onClick={row.onClick}
            className={className}
          >
            {content}
          </button>
        );
      })}
    </section>
  );
}

function NumbersBar({
  masteryValue,
  masteryLabelText,
  weeklyValue,
  streakValue,
  notesValue,
}: {
  masteryValue: string;
  masteryLabelText: string;
  weeklyValue: string;
  streakValue: string;
  notesValue: string;
}) {
  const items = [
    {
      key: "mastery",
      icon: <CheckIcon />,
      value: masteryValue,
      label: masteryLabelText,
    },
    {
      key: "weekly",
      icon: <BookIcon />,
      value: weeklyValue,
      label: "Weekly goal - days",
    },
    {
      key: "streak",
      icon: <FireIcon />,
      value: streakValue,
      label: "Current streak",
    },
    {
      key: "notes",
      icon: <NotesIcon />,
      value: notesValue,
      label: "Notes created",
    },
  ];

  return (
    <div
      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-full px-4 py-3 sm:gap-x-6 sm:px-6 sm:py-3.5"
      style={{ background: LIME }}
    >
      {items.map((item) => (
        <div
          key={item.key}
          className="flex min-w-0 flex-1 items-center gap-2.5 px-1 sm:gap-3"
        >
          <span
            className="flex size-11 shrink-0 items-center justify-center rounded-xl text-white sm:size-12"
            style={{ background: PURPLE }}
          >
            {item.icon}
          </span>
          <span className="min-w-0 text-left">
            <span className="block font-heading text-base font-extrabold leading-none text-black sm:text-lg">
              {item.value}
            </span>
            <span className="mt-1 block truncate text-[10px] font-bold tracking-[0.04em] text-black uppercase sm:text-[11px]">
              {item.label}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

function buildSubjectRows(
  notes: GeneratedNote[],
  attempts: QuizAttempt[],
): SubjectRow[] {
  const bySubject = new Map<string, GeneratedNote[]>();
  for (const note of notes) {
    const name = (note.subject || "").trim() || "General";
    const list = bySubject.get(name) ?? [];
    list.push(note);
    bySubject.set(name, list);
  }

  const rows: SubjectRow[] = [];
  for (const [name, subjectNotes] of bySubject) {
    const subjectAttempts = attempts.filter(
      (a) => a.subject.trim().toLowerCase() === name.toLowerCase(),
    );
    const modes = Array.from(
      new Set(
        subjectNotes.map((n) => {
          const m = n.studyMode;
          if (m === "Summary Notes") return "Notes";
          if (m === "Flashcards") return "Flashcards";
          if (m === "Quiz") return "Quizzes";
          if (
            m.includes("Exam") ||
            m === "Common Mistakes" ||
            m === "Examples"
          ) {
            return "Exam Focus";
          }
          return m || "Notes";
        }),
      ),
    );
    const ordered = ["Notes", "Flashcards", "Quizzes", "Exam Focus"].filter(
      (m) => modes.includes(m),
    );
    rows.push({
      name,
      mastery: calculateSubjectMastery(subjectNotes, subjectAttempts),
      modes:
        ordered.length > 0
          ? ordered
          : ["Notes", "Flashcards", "Quizzes", "Exam Focus"],
    });
  }

  return rows.sort(
    (a, b) => b.mastery - a.mastery || a.name.localeCompare(b.name),
  );
}

function AchievementCard({
  earned,
  title,
  detail,
  icon,
}: {
  earned: boolean;
  title: string;
  detail: string;
  icon: ReactNode;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-[22px] border p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)] ${
        earned
          ? "border-transparent"
          : "border-[#E8E6F0] bg-white"
      }`}
      style={earned ? { background: LIME } : undefined}
    >
      <span
        className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
          earned ? "bg-[#4F35F2] text-white" : "bg-[#ECEAFF] text-[#4F35F2]"
        }`}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p
          className="font-heading font-extrabold text-[#111827]"
          style={{ fontSize: "clamp(0.875rem, 0.85rem + 0.2vw, 0.9375rem)" }}
        >
          {title}
        </p>
        <p
          className={`mt-0.5 ${
            earned ? "font-semibold text-[#1E1B4B]" : "text-[#6B7280]"
          }`}
          style={{ fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)" }}
        >
          {earned ? (
            <span className="inline-flex items-center gap-1">
              <CheckTinyIcon />
              {detail}
            </span>
          ) : (
            detail
          )}
        </p>
      </div>
    </div>
  );
}

function formatMonthDay(date: Date | null) {
  const d = date ?? new Date();
  return d.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function masteryProgressLabel(current: number, target: number) {
  if (current >= target) return "Earned";
  return `${Math.max(0, target - Math.round(current))}% to go`;
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5V5.5Z" strokeLinejoin="round" />
      <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" strokeLinecap="round" />
    </svg>
  );
}

function SparkSunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}

function CheckTinyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M5 12.5 10 17l9-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 8h3l2-2h6l2 2h3v11H4z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L16.5 12l4 1.5V17a2 2 0 0 1-2 2A14 14 0 0 1 5 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d="m12 3 2.6 5.6L21 9.3l-4.4 4 1.1 6.2L12 16.5 6.3 19.5l1.1-6.2L3 9.3l6.4-.7L12 3Z" />
    </svg>
  );
}

function DayStarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d="m12 3 2.6 5.6L21 9.3l-4.4 4 1.1 6.2L12 16.5 6.3 19.5l1.1-6.2L3 9.3l6.4-.7L12 3Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M5 12.5 10 17l9-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 7H3s3 0 3-7" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 14h4" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 3v18M5 7h14" />
      <path d="M5 7 2.5 13h5L5 7ZM19 7l-2.5 6h5L19 7Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M14 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M10 17H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
      <path d="m15 15 4-4-4-4M19 11H10" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 19V10M12 19V5M19 19v-7" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d="M12 23c-4.2 0-7-2.9-7-7.2 0-2.6 1.2-4.4 2.6-6 .4-.5 1.2-.4 1.4.2.5 1.4 1.2 2.5 1.2 2.5S9.8 9 11.2 6.2c.4-.8 1.5-.9 1.9-.1C14.6 9 17 11.6 17 15.8c0 4.3-2.8 7.2-5 7.2Z" />
    </svg>
  );
}

function NotesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8l4 4v3" strokeLinejoin="round" />
      <path d="M14 4v4h4" strokeLinejoin="round" />
      <path d="M8 11h5M8 15h3" strokeLinecap="round" />
      <path
        d="M15.5 14.5 20 19l-1.5 1.5-4.5-4.5v-1.5h1.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HelpLifeRingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6.2 6.2l2.4 2.4M17.8 6.2l-2.4 2.4M6.2 17.8l2.4-2.4M17.8 17.8l-2.4-2.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
