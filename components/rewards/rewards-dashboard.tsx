"use client";

import Link from "next/link";
import { useMemo, useRef, useState, type ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { DataConsentGate } from "@/components/auth/data-consent-gate";
import { useAuth } from "@/components/providers/auth-provider";
import { EmptyState, LoadingBlock } from "@/components/ui/student-ui";
import { useStudentData } from "@/hooks/use-student-data";
import {
  downloadElementAsPdf,
  printElement,
} from "@/lib/export/achievement-export";
import {
  shortSubjectKeyword,
  subjectMasteryPercentLabel,
} from "@/lib/student/mastery-display";

const PINK = "#FF2D8A";
const PURPLE = "#4F35F2";
const LIME = "#E8FF2F";

const CERTIFICATES = [
  { id: "started", title: "Getting Started", percent: 10, icon: "sprout" as const },
  {
    id: "foundation",
    title: "Foundation Builder",
    percent: 25,
    icon: "nodes" as const,
  },
  { id: "skills", title: "Skills Explorer", percent: 40, icon: "compass" as const },
  {
    id: "confident",
    title: "Confident Learner",
    percent: 55,
    icon: "bulb" as const,
  },
  { id: "topic", title: "Topic Pro", percent: 70, icon: "star" as const },
  { id: "exam", title: "Exam Ready", percent: 80, icon: "rocket" as const },
  { id: "master", title: "Subject Master", percent: 90, icon: "crown" as const },
] as const;

const MEDALS = [
  {
    id: "rising",
    title: "Rising Star",
    days: 15,
    iconBg: "#FFE4F1",
    iconColor: PINK,
    icon: "star" as const,
  },
  {
    id: "consistency",
    title: "Consistency Champion",
    days: 30,
    iconBg: "#ECEAFF",
    iconColor: PURPLE,
    icon: "trophy" as const,
  },
  {
    id: "high",
    title: "High Achiever",
    days: 60,
    iconBg: "#FEF9C3",
    iconColor: "#CA8A04",
    icon: "medal" as const,
  },
  {
    id: "legend",
    title: "Study Legend",
    days: 90,
    iconBg: "#2563EB",
    iconColor: "#FFFFFF",
    icon: "crown" as const,
  },
] as const;

const MASTERY_REWARDS = [
  { percent: 70, label: "Topic Pro certificate · +1 Writing credit" },
  { percent: 90, label: "Mastery Award certificate" },
] as const;

type TabId = "achievements" | "milestones";

export function RewardsDashboard({
  activeTab,
}: {
  activeTab: TabId;
}) {
  const { phase, user } = useAuth();
  const isGuest = phase === "guest" && !user;
  const { loading, error, stats, profile } = useStudentData();
  const tab = activeTab;
  const [toast, setToast] = useState<string | null>(null);

  const streak = stats?.streakDays ?? 0;
  const mastery = stats?.subjectMasteryPercent ?? 0;
  const masteryLabel = subjectMasteryPercentLabel(mastery);
  const topSubject = stats?.topSubject;
  const subjectShort = topSubject
    ? shortSubjectKeyword(topSubject)
    : "Subject";
  const displayName =
    profile?.name?.trim() ||
    user?.displayName?.trim() ||
    "Student";

  const certificatesEarned = useMemo(
    () => CERTIFICATES.filter((c) => mastery >= c.percent).length,
    [mastery],
  );
  const medalsEarned = useMemo(
    () => MEDALS.filter((m) => streak >= m.days).length,
    [streak],
  );

  const masteryStatLabel = `${subjectShort} mastery`;

  const TOTAL_MILESTONES = 18;
  const milestonesCompleted = certificatesEarned + medalsEarned;
  const overallPercent =
    Math.round((milestonesCompleted / TOTAL_MILESTONES) * 1000) / 10;

  const nextMedal = MEDALS.find((m) => streak < m.days);
  const nextCert = CERTIFICATES.find((c) => mastery < c.percent);
  const progressHint = nextMedal
    ? {
        before: "Keep going! Your next medal, ",
        highlight: nextMedal.title,
        after: `, is ${Math.max(0, nextMedal.days - streak)} study day${
          nextMedal.days - streak === 1 ? "" : "s"
        } away.`,
      }
    : nextCert
      ? {
          before: "Keep going! Your next certificate, ",
          highlight: nextCert.title,
          after: `, unlocks at ${nextCert.percent}% mastery.`,
        }
      : {
          before: "Amazing — you've cleared every tracked medal and certificate",
          highlight: "",
          after: ".",
        };

  function flash(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }

  async function onShare() {
    const text = `Check out my learning achievements on Studiely! Download at www.studiely.com`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Studiely Achievements", text });
        return;
      }
      await navigator.clipboard.writeText(text);
      flash("Link copied");
    } catch {
      flash("Couldn’t share right now");
    }
  }

  return (
    <DataConsentGate>
      <AppShell wide>
        <div className="mx-auto w-full max-w-none pb-10">
          {toast ? (
            <div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#111827] px-4 py-2 text-sm font-medium text-white shadow-lg sm:bottom-6">
              {toast}
            </div>
          ) : null}

          {isGuest ? (
            <EmptyState
              title="Sign in to track achievements"
              body="Streaks and mastery sync with your student account."
            />
          ) : loading ? (
            <LoadingBlock />
          ) : error ? (
            <EmptyState title="Couldn’t load achievements" body={error} />
          ) : (
            <>
              <header className="mb-5 flex flex-col gap-4 lg:mb-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-2xl text-white sm:size-14"
                    style={{ background: PURPLE }}
                    aria-hidden
                  >
                    <TrophyIcon />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h1 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight text-[#111827]">
                      {tab === "milestones"
                        ? "Milestones & Rewards"
                        : "My Achievements"}
                    </h1>
                    <p className="mt-1 text-sm text-[#6B7280] sm:text-base">
                      {tab === "milestones"
                        ? "Earn medals, unlock certificates, collect rewards."
                        : "Your trophy shelf — everything you've earned so far."}
                    </p>
                  </div>
                </div>

                <div className="inline-flex shrink-0 self-start rounded-2xl border border-[#E8E6F0] bg-white p-1 shadow-[0_8px_24px_rgba(17,24,39,0.06)]">
                  <TabLink href="/achievements" active={tab === "achievements"}>
                    My Achievements
                  </TabLink>
                  <TabLink href="/rewards" active={tab === "milestones"}>
                    Milestones &amp; Rewards
                  </TabLink>
                </div>
              </header>

              {tab === "achievements" ? (
                <div
                  className="mb-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-[24px] px-4 py-3 sm:gap-x-6 sm:rounded-[28px] sm:px-6 sm:py-3.5"
                  style={{ background: LIME }}
                >
                  <StatItem
                    iconBg={PURPLE}
                    icon={<CertIcon />}
                    value={`${certificatesEarned} / ${CERTIFICATES.length}`}
                    label="Certificates earned"
                  />
                  <StatItem
                    iconBg={PINK}
                    icon={<MedalIcon />}
                    value={`${medalsEarned} / ${MEDALS.length}`}
                    label="Medals earned"
                  />
                  <StatItem
                    iconBg="#1E1B4B"
                    icon={<FlameIcon />}
                    value={`${streak} days`}
                    label="Current streak"
                  />
                  <StatItem
                    iconBg="#78350F"
                    icon={<BarsIcon />}
                    value={masteryLabel}
                    label={masteryStatLabel}
                  />
                </div>
              ) : (
                <OverallProgressCard
                  completed={milestonesCompleted}
                  total={TOTAL_MILESTONES}
                  percent={overallPercent}
                  hint={progressHint}
                />
              )}

              {tab === "achievements" ? (
                <MyAchievementsPanel
                  mastery={mastery}
                  streak={streak}
                  subjectShort={subjectShort}
                  masteryLabel={masteryLabel}
                  certificatesEarned={certificatesEarned}
                  onShare={() => void onShare()}
                  onViewCert={() => flash("Certificate preview coming soon")}
                />
              ) : (
                <MilestonesPanel
                  streak={streak}
                  mastery={mastery}
                  subjectShort={subjectShort}
                  displayName={displayName}
                  onShare={() => void onShare()}
                  onToast={flash}
                />
              )}
            </>
          )}
        </div>
      </AppShell>
    </DataConsentGate>
  );
}

function TabLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`font-manrope rounded-xl px-3.5 py-2 text-xs font-bold transition sm:px-4 sm:text-sm ${
        active ? "text-white" : "text-[#6B7280] hover:text-[#111827]"
      }`}
      style={active ? { background: PURPLE } : undefined}
    >
      {children}
    </Link>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-manrope rounded-xl px-3.5 py-2 text-xs font-bold transition sm:px-4 sm:text-sm ${
        active ? "text-white" : "text-[#6B7280] hover:text-[#111827]"
      }`}
      style={active ? { background: PURPLE } : undefined}
    >
      {children}
    </button>
  );
}

function StatItem({
  iconBg,
  icon,
  value,
  label,
}: {
  iconBg: string;
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2.5 px-1 sm:gap-3">
      <span
        className="flex size-11 shrink-0 items-center justify-center rounded-xl text-white sm:size-12"
        style={{ background: iconBg }}
      >
        {icon}
      </span>
      <span className="min-w-0 text-left">
        <span className="block font-heading text-base font-extrabold leading-none text-black sm:text-lg">
          {value}
        </span>
        <span className="mt-1 block truncate text-[9px] font-bold tracking-[0.04em] text-[#6B7280] uppercase sm:text-[10px]">
          {label}
        </span>
      </span>
    </div>
  );
}

function OverallProgressCard({
  completed,
  total,
  percent,
  hint,
}: {
  completed: number;
  total: number;
  percent: number;
  hint: { before: string; highlight: string; after: string };
}) {
  const fill = Math.min(100, Math.max(0, percent));
  return (
    <div
      className="mb-6 rounded-[28px] border border-[#E8E4FF] p-4 shadow-[0_10px_28px_rgba(79,53,242,0.08)] sm:p-5"
      style={{
        background:
          "linear-gradient(90deg, #F3F0FF 0%, #FAF9FF 55%, #FFFFFF 100%)",
      }}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
        <div
          className="flex shrink-0 flex-col justify-center rounded-[22px] px-5 py-4 text-white sm:min-w-[160px] sm:px-6 sm:py-5"
          style={{ background: PURPLE }}
        >
          <p className="font-heading text-2xl font-extrabold leading-none sm:text-3xl">
            {completed} / {total}
          </p>
          <p className="mt-2 text-[10px] font-bold tracking-[0.08em] text-white/90 uppercase">
            Milestones completed
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-1.5" style={{ color: PURPLE }}>
            <BarsIcon />
            <span className="text-[11px] font-extrabold tracking-[0.08em] uppercase">
              Overall progress
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-[#E8E4F5]">
            <div
              className="h-full rounded-full transition-[width]"
              style={{
                width: `${Math.max(fill > 0 ? 2 : 0, fill)}%`,
                background: PURPLE,
              }}
            />
          </div>
          <p className="mt-2.5 text-sm text-[#6B7280]">
            {hint.before}
            {hint.highlight ? (
              <span className="font-bold text-[#111827]">{hint.highlight}</span>
            ) : null}
            {hint.after}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center justify-center rounded-[22px] border border-[#EDE9FE] bg-white px-5 py-4 shadow-[0_4px_14px_rgba(17,24,39,0.04)] sm:min-w-[110px] sm:px-6 sm:py-5">
          <p
            className="font-heading text-2xl font-extrabold leading-none sm:text-3xl"
            style={{ color: PURPLE }}
          >
            {percent % 1 === 0 ? `${percent}%` : `${percent.toFixed(1)}%`}
          </p>
          <p className="mt-2 text-[10px] font-bold tracking-[0.08em] text-[#9CA3AF] uppercase">
            Complete
          </p>
        </div>
      </div>
    </div>
  );
}

function MyAchievementsPanel({
  mastery,
  streak,
  subjectShort,
  masteryLabel,
  certificatesEarned,
  onShare,
  onViewCert,
}: {
  mastery: number;
  streak: number;
  subjectShort: string;
  masteryLabel: string;
  certificatesEarned: number;
  onShare: () => void;
  onViewCert: () => void;
}) {
  const certsLeft = CERTIFICATES.length - certificatesEarned;
  const latestCert = [...CERTIFICATES]
    .reverse()
    .find((c) => mastery >= c.percent);
  const nextCert = CERTIFICATES.find((c) => mastery < c.percent);
  const nextMedal = MEDALS.find((m) => streak < m.days);

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="flex min-w-0 flex-col gap-8 lg:col-span-8">
        {/* Certificates */}
        <section>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-heading text-lg font-extrabold text-[#111827] sm:text-xl">
              Certificates
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECEAFF] px-3 py-1 text-xs font-bold text-[#4F35F2]">
              <CertIcon className="size-3.5" />
              {certificatesEarned} earned · {certsLeft} to unlock
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {CERTIFICATES.map((cert) => {
              const earned = mastery >= cert.percent;
              return (
                <CertificateCard
                  key={cert.id}
                  title={cert.title}
                  earned={earned}
                  icon={cert.icon}
                  detail={
                    earned
                      ? `Earned · ${subjectShort}`
                      : `Unlocks at ${cert.percent}%`
                  }
                />
              );
            })}
          </div>
        </section>

        {/* Medals */}
        <section>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-heading text-lg font-extrabold text-[#111827] sm:text-xl">
              Medals
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECEAFF] px-3 py-1 text-xs font-bold text-[#4F35F2]">
              <FlameIcon className="size-3.5" />
              Build a streak to earn these
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {MEDALS.map((medal) => (
              <MedalCard
                key={medal.id}
                title={medal.title}
                days={medal.days}
                streak={streak}
                iconBg={medal.iconBg}
                iconColor={medal.iconColor}
                icon={medal.icon}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Right column */}
      <aside className="flex min-w-0 flex-col gap-4 lg:col-span-4 lg:sticky lg:top-[4.75rem] lg:self-start">
        <div
          className="rounded-[28px] p-5 text-white shadow-[0_12px_32px_rgba(79,53,242,0.28)] sm:p-6"
          style={{
            background: `linear-gradient(145deg, ${PURPLE} 0%, ${PINK} 100%)`,
          }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-[#111827] uppercase">
            <StarTinyIcon />
            Latest achievement
          </span>
          <div className="mt-5 flex items-start gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
              <SproutIcon />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-lg font-extrabold">
                {latestCert?.title ?? "Keep going"}
              </p>
              <p className="mt-1 text-sm text-white/85">
                {latestCert
                  ? `${subjectShort} · ${masteryLabel} mastery`
                  : "Reach 10% mastery to unlock your first certificate"}
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <button
              type="button"
              onClick={onViewCert}
              disabled={!latestCert}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-white px-3 py-2.5 text-sm font-bold transition hover:brightness-95 disabled:opacity-50"
              style={{ color: PURPLE }}
            >
              View certificate
            </button>
            <button
              type="button"
              onClick={onShare}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/40 bg-white/10 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-white/20"
            >
              <ShareIcon />
              Share
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#E8E6F0] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6">
          <h3 className="font-heading text-base font-extrabold text-[#111827]">
            Up next for you
          </h3>
          <div className="mt-4 flex flex-col gap-4">
            {nextCert ? (
              <UpNextItem
                iconBg="#ECEAFF"
                iconColor={PURPLE}
                icon={<SproutIcon />}
                title={nextCert.title}
                toGo={`${Math.max(0, nextCert.percent - Math.round(mastery))}% to go`}
                progress={Math.min(
                  100,
                  (mastery / nextCert.percent) * 100,
                )}
                body={`You're at ${Math.round(mastery)}% of the ${nextCert.percent}% needed — quizzes move this fastest.`}
                barColor={PURPLE}
              />
            ) : (
              <p className="text-sm text-[#6B7280]">
                You’ve unlocked every certificate — legend status.
              </p>
            )}
            {nextMedal ? (
              <UpNextItem
                iconBg="#FFE4F1"
                iconColor={PINK}
                icon={<StarTinyIcon />}
                title={`${nextMedal.title} medal`}
                toGo={`${Math.max(0, nextMedal.days - streak)} days to go`}
                progress={Math.min(100, (streak / nextMedal.days) * 100)}
                body={
                  streak > 0
                    ? `You're on day ${streak} of ${nextMedal.days} — keep the streak alive.`
                    : "Study today to light your streak — day 1 starts now."
                }
                barColor={PINK}
              />
            ) : (
              <p className="text-sm text-[#6B7280]">
                All streak medals unlocked. Amazing consistency.
              </p>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

function CertificateCard({
  title,
  earned,
  detail,
  icon,
}: {
  title: string;
  earned: boolean;
  detail: string;
  icon: (typeof CERTIFICATES)[number]["icon"];
}) {
  return (
    <div
      className={`relative flex min-h-[148px] flex-col rounded-[24px] border p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:min-h-[160px] sm:p-5 ${
        earned ? "border-[#E5F2A8]" : "border-[#E8E6F0] bg-white"
      }`}
      style={earned ? { background: "#F4F9C8" } : undefined}
    >
      <div className="mb-auto flex items-start justify-between gap-2">
        <span
          className={`flex size-11 items-center justify-center rounded-2xl ${
            earned ? "bg-[#4F35F2] text-white" : "bg-[#EEF0F5] text-[#5B5B66]"
          }`}
        >
          <CertificateGlyph type={icon} />
        </span>
        {earned ? (
          <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-white uppercase"
            style={{ background: PINK }}
          >
            ✓ Earned
          </span>
        ) : (
          <span
            className="flex size-9 items-center justify-center rounded-xl bg-[#EEF0F5] text-[#5B5B66]"
            aria-label="Locked"
          >
            <LockIcon className="size-4" />
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="font-heading text-sm font-extrabold text-[#111827]">
          {title}
        </p>
        <p className="mt-1 text-xs text-[#6B7280]">{detail}</p>
      </div>
    </div>
  );
}

function CertificateGlyph({
  type,
}: {
  type: (typeof CERTIFICATES)[number]["icon"];
}) {
  switch (type) {
    case "sprout":
      return <SproutIcon />;
    case "nodes":
      return <NodesIcon />;
    case "compass":
      return <CompassIcon />;
    case "bulb":
      return <BulbIcon />;
    case "star":
      return <StarOutlineIcon />;
    case "rocket":
      return <RocketIcon />;
    case "crown":
      return <CrownIcon />;
  }
}

function medalRewardDetail(days: number) {
  if (days === 15) return "Profile badge";
  if (days === 30) return "Exclusive profile frame";
  if (days === 60) return "+5 Writing Practice credits";
  return "+10 Writing credits · 20% coupon · Platinum badge";
}

function MedalGlyph({
  type,
  className,
}: {
  type: (typeof MEDALS)[number]["icon"];
  className?: string;
}) {
  if (type === "star") return <StarOutlineIcon className={className} />;
  if (type === "trophy") return <TrophyIcon className={className} />;
  if (type === "medal") return <MedalIcon className={className} />;
  return <CrownIcon className={className} />;
}

function MedalCard({
  title,
  days,
  streak,
  iconBg,
  iconColor,
  icon,
}: {
  title: string;
  days: number;
  streak: number;
  iconBg: string;
  iconColor: string;
  icon: "star" | "trophy" | "medal" | "crown";
}) {
  const progress = Math.min(100, (streak / days) * 100);
  const earned = streak >= days;
  return (
    <div className="rounded-[22px] border border-[#E8E6F0] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
      <span
        className="mb-3 flex size-12 items-center justify-center rounded-2xl sm:size-14"
        style={{ background: iconBg, color: iconColor }}
      >
        <MedalGlyph type={icon} className="size-7 sm:size-8" />
      </span>
      <p className="font-heading text-sm font-extrabold text-[#111827]">
        {title}
      </p>
      <p className="mt-1 text-xs">
        <span className="font-bold text-[#111827]">
          {Math.min(streak, days)} / {days}
        </span>{" "}
        <span className="text-[#6B7280]">days</span>
        {earned ? (
          <span className="ml-1 font-semibold" style={{ color: PURPLE }}>
            · Done
          </span>
        ) : null}
      </p>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#EDE9FE]">
        <div
          className="h-full rounded-full transition-[width]"
          style={{
            width: `${progress}%`,
            background: earned
              ? `linear-gradient(90deg, ${PURPLE}, ${PINK})`
              : iconColor,
          }}
        />
      </div>
    </div>
  );
}

function UpNextItem({
  iconBg,
  iconColor,
  icon,
  title,
  toGo,
  progress,
  body,
  barColor,
}: {
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
  title: string;
  toGo: string;
  progress: number;
  body: string;
  barColor: string;
}) {
  return (
    <div>
      <div className="flex items-start gap-2.5">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: iconBg, color: iconColor }}
        >
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-bold text-[#111827]">{title}</p>
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-bold"
              style={{ background: "#ECEAFF", color: PURPLE }}
            >
              {toGo}
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#F3F4F6]">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.max(4, progress)}%`,
                background: barColor,
              }}
            />
          </div>
          <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">{body}</p>
        </div>
      </div>
    </div>
  );
}

function MilestonesPanel({
  streak,
  mastery,
  subjectShort,
  displayName,
  onShare,
  onToast,
}: {
  streak: number;
  mastery: number;
  subjectShort: string;
  displayName: string;
  onShare: () => void;
  onToast: (msg: string) => void;
}) {
  const [section, setSection] = useState<"medals" | "certificates" | "rewards">(
    "certificates",
  );
  const defaultSelected =
    [...CERTIFICATES].reverse().find((c) => mastery >= c.percent)?.id ?? null;
  const [selectedId, setSelectedId] = useState<
    (typeof CERTIFICATES)[number]["id"] | null
  >(defaultSelected);
  const defaultMedalSelected =
    [...MEDALS].reverse().find((m) => streak >= m.days)?.id ?? null;
  const [selectedMedalId, setSelectedMedalId] = useState<
    (typeof MEDALS)[number]["id"] | null
  >(defaultMedalSelected);
  const [howOpen, setHowOpen] = useState(false);
  const [exporting, setExporting] = useState(false);
  const medalExportRef = useRef<HTMLDivElement>(null);
  const certExportRef = useRef<HTMLDivElement>(null);

  const selected = CERTIFICATES.find(
    (c) => c.id === selectedId && mastery >= c.percent,
  );
  const selectedMedal = MEDALS.find(
    (m) => m.id === selectedMedalId && streak >= m.days,
  );
  const isLegendMedal = selectedMedal?.id === "legend";
  const medalRewardLabel = selectedMedal
    ? medalRewardDetail(selectedMedal.days)
    : "";

  async function onDownloadMedal() {
    const el = medalExportRef.current;
    if (!el || exporting || !selectedMedal) return;
    setExporting(true);
    try {
      const slug = selectedMedal.title.toLowerCase().replace(/\s+/g, "-");
      await downloadElementAsPdf(el, `studiely-${slug}-medal.pdf`, {
        enrichMedalGold: true,
      });
    } catch {
      onToast("Couldn’t download medal");
    } finally {
      setExporting(false);
    }
  }

  async function onPrintMedal() {
    const el = medalExportRef.current;
    if (!el || exporting || !selectedMedal) return;
    setExporting(true);
    try {
      await printElement(el, true);
    } catch {
      onToast("Couldn’t print medal");
    } finally {
      setExporting(false);
    }
  }

  async function onDownloadCertificate() {
    const el = certExportRef.current;
    if (!el || exporting || !selected) return;
    setExporting(true);
    try {
      const slug = selected.title.toLowerCase().replace(/\s+/g, "-");
      await downloadElementAsPdf(el, `studiely-${slug}-certificate.pdf`);
    } catch {
      onToast("Couldn’t download certificate");
    } finally {
      setExporting(false);
    }
  }

  async function onPrintCertificate() {
    const el = certExportRef.current;
    if (!el || exporting) return;
    setExporting(true);
    try {
      await printElement(el);
    } catch {
      onToast("Couldn’t print certificate");
    } finally {
      setExporting(false);
    }
  }

  const certTones: Record<
    (typeof CERTIFICATES)[number]["id"],
    { bg: string; fg: string }
  > = {
    started: { bg: "#ECEAFF", fg: PURPLE },
    foundation: { bg: "#FFE4F1", fg: PINK },
    skills: { bg: "#FEF9C3", fg: "#CA8A04" },
    confident: { bg: "#ECEAFF", fg: PURPLE },
    topic: { bg: "#FFE4F1", fg: PINK },
    exam: { bg: "#FEF3C7", fg: "#B45309" },
    master: { bg: "#ECEAFF", fg: PURPLE },
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="flex min-w-0 flex-col gap-3 lg:col-span-5">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <SectionTab
            active={section === "medals"}
            onClick={() => setSection("medals")}
            icon={<MedalIcon className="size-4" />}
          >
            Medals
          </SectionTab>
          <SectionTab
            active={section === "certificates"}
            onClick={() => setSection("certificates")}
            icon={<CertIcon className="size-4" />}
          >
            Certificates
          </SectionTab>
          <SectionTab
            active={section === "rewards"}
            onClick={() => setSection("rewards")}
            icon={<GiftIcon />}
          >
            Rewards
          </SectionTab>
        </div>

        {section === "certificates" ? (
          <>
            {CERTIFICATES.map((cert) => {
              const earned = mastery >= cert.percent;
              const toGo = Math.max(0, cert.percent - Math.round(mastery));
              const tone = certTones[cert.id];
              const active = earned && selectedId === cert.id;
              return (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => {
                    if (earned) setSelectedId(cert.id);
                  }}
                  disabled={!earned}
                  className={`flex w-full items-center gap-3 rounded-[22px] border bg-white px-4 py-4 text-left shadow-[0_8px_24px_rgba(17,24,39,0.05)] transition disabled:cursor-default disabled:hover:border-[#E8E6F0] ${
                    active
                      ? "border-[#C4B5FD] shadow-[0_10px_28px_rgba(79,53,242,0.14)]"
                      : "border-[#E8E6F0] hover:border-[#DDD6FE]"
                  }`}
                >
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-2xl"
                    style={{ background: tone.bg, color: tone.fg }}
                  >
                    <CertificateGlyph type={cert.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold text-[#111827] sm:text-[15px]">
                      {cert.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#6B7280]">
                      Unlocks at {cert.percent}% subject mastery
                    </span>
                  </span>
                  {earned ? (
                    <span
                      className="inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-[10px] font-extrabold tracking-wide text-[#1E1B4B] uppercase"
                      style={{ background: LIME }}
                    >
                      ✓ Earned
                    </span>
                  ) : (
                    <span className="flex shrink-0 flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#EEF0F5] px-2.5 py-1.5 text-[10px] font-extrabold tracking-wide text-[#6B7280] uppercase">
                        <LockIcon className="size-3" />
                        Locked
                      </span>
                      <span className="text-[11px] font-medium text-[#9CA3AF]">
                        {toGo}% to go
                      </span>
                    </span>
                  )}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setHowOpen((v) => !v)}
              className="mt-1 flex w-full items-center gap-3 rounded-[22px] border border-[#E8E6F0] bg-white px-4 py-3.5 text-left shadow-[0_8px_24px_rgba(17,24,39,0.04)] transition hover:bg-[#FAFAFC]"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#ECEAFF] text-[#4F35F2]">
                <InfoIcon />
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold text-[#111827]">
                How mastery certificates work
              </span>
              <span
                className={`text-[#9CA3AF] transition ${howOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            {howOpen ? (
              <p className="rounded-[18px] bg-[#F8F7FC] px-4 py-3 text-sm leading-relaxed text-[#6B7280]">
                Subject mastery climbs as you generate and practice with notes,
                flashcards, quizzes, and exam focus. Hit each % threshold to
                unlock the matching certificate on your trophy shelf.
              </p>
            ) : null}
          </>
        ) : null}

        {section === "medals" ? (
          <>
            {MEDALS.map((medal) => {
              const earned = streak >= medal.days;
              const toGo = Math.max(0, medal.days - streak);
              const active = earned && selectedMedalId === medal.id;
              return (
                <button
                key={medal.id}
                  type="button"
                  onClick={() => {
                    if (earned) setSelectedMedalId(medal.id);
                  }}
                  disabled={!earned}
                  className={`flex w-full items-center gap-3 rounded-[22px] border bg-white px-4 py-4 text-left shadow-[0_8px_24px_rgba(17,24,39,0.05)] transition disabled:cursor-default disabled:hover:border-[#E8E6F0] ${
                    active
                      ? "border-[#C4B5FD] shadow-[0_10px_28px_rgba(79,53,242,0.14)]"
                      : "border-[#E8E6F0] hover:border-[#DDD6FE]"
                  }`}
                >
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      background: medal.iconBg,
                      color: medal.iconColor,
                    }}
                  >
                    <MedalGlyph type={medal.icon} className="size-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold text-[#111827] sm:text-[15px]">
                      {medal.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#6B7280]">
                      Unlocks at {medal.days}-day study streak
                    </span>
                  </span>
                  {earned ? (
                    <span
                      className="inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-[10px] font-extrabold tracking-wide text-[#1E1B4B] uppercase"
                      style={{ background: LIME }}
                    >
                      ✓ Earned
                    </span>
                  ) : (
                    <span className="flex shrink-0 flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#EEF0F5] px-2.5 py-1.5 text-[10px] font-extrabold tracking-wide text-[#6B7280] uppercase">
                        <LockIcon className="size-3" />
                        Locked
                      </span>
                      <span className="text-[11px] font-medium text-[#9CA3AF]">
                        {toGo} day{toGo === 1 ? "" : "s"} to go
                      </span>
                    </span>
                  )}
                </button>
              );
            })}
          </>
        ) : null}

        {section === "rewards" ? (
          <div className="flex flex-col gap-3">
            <div
              className="rounded-[22px] px-4 py-3"
              style={{
                background:
                  "linear-gradient(135deg, #ECEAFF 0%, #FFE4F1 55%, #F4F9C8 100%)",
              }}
            >
              <p className="text-sm font-extrabold text-[#111827]">
                Streak & mastery rewards
              </p>
              <p className="mt-0.5 text-xs text-[#5B5B66]">
                Unlock gifts as you hit day and mastery milestones
              </p>
            </div>

            <p
              className="px-1 text-[11px] font-extrabold tracking-[0.14em] uppercase"
              style={{ color: PURPLE }}
            >
              Streak rewards
            </p>
            {MEDALS.map((m) => {
              const unlocked = streak >= m.days;
              return (
                <RewardCard
                  key={m.id}
                  unlocked={unlocked}
                  title={m.title}
                  detail={medalRewardDetail(m.days)}
                  badge={unlocked ? "✓" : `${m.days}d`}
                  tone="streak"
                  iconBg={m.iconBg}
                  iconColor={m.iconColor}
                  icon={<MedalGlyph type={m.icon} className="size-5" />}
                />
              );
            })}

            <p
              className="mt-1 px-1 text-[11px] font-extrabold tracking-[0.14em] uppercase"
              style={{ color: PINK }}
            >
              Mastery rewards
            </p>
            {MASTERY_REWARDS.map((m, i) => {
              const unlocked = mastery >= m.percent;
              const tones = [
                { bg: "#ECEAFF", fg: PURPLE },
                { bg: "#FFE4F1", fg: PINK },
              ] as const;
              const tone = tones[i % tones.length];
              return (
                <RewardCard
                  key={m.percent}
                  unlocked={unlocked}
                  title={`${m.percent}% mastery reward`}
                  detail={m.label}
                  badge={unlocked ? "✓" : `${m.percent}%`}
                  tone="mastery"
                  iconBg={tone.bg}
                  iconColor={tone.fg}
                  icon={<GiftIcon className="size-5" />}
                />
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="min-w-0 lg:col-span-7 lg:sticky lg:top-[4.75rem] lg:self-start">
        {section === "certificates" ? (
          <div className="rounded-[28px] border border-[#E8E6F0] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-heading text-lg font-extrabold text-[#111827]">
                Certificate preview
              </h3>
              <p className="inline-flex items-center gap-1.5 text-sm text-[#6B7280]">
                <CertIcon className="size-4" />
                {selected
                  ? "Select an earned certificate"
                  : "Earn a certificate to preview"}
              </p>
            </div>

            {selected ? (
              <>
            <div
              className="rounded-[22px] px-3 py-4 sm:px-5 sm:py-5"
              style={{
                background:
                  "linear-gradient(145deg, #F3EEFF 0%, #F7F4FF 40%, #FFF5F0 100%)",
              }}
            >
              <div
                ref={certExportRef}
                className="relative w-full rounded-[6px] border-2 bg-white px-5 py-4 shadow-[0_12px_32px_rgba(17,24,39,0.08)] sm:aspect-[1.45/1] sm:px-8 sm:py-5"
                style={{ borderColor: "#D4AF37" }}
              >
                {/* Inner gold frame */}
                <div
                  className="pointer-events-none absolute inset-2 rounded-[3px] border"
                  style={{ borderColor: "#E8D5A3" }}
                  aria-hidden
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center opacity-[0.08]">
                  <TrophyIcon className="size-20 sm:size-24" />
                </div>

                <div className="relative flex h-full flex-col items-center justify-start pt-1 text-center sm:pt-2">
                  {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo; match navbar */}
                  <img
                    src="/logo-group.svg?v=blue"
                    alt="Studiely"
                    width={140}
                    height={40}
                    className="h-7 w-auto object-contain sm:h-8"
                    crossOrigin="anonymous"
                  />

                  <p
                    className="mt-2 text-[11px] font-bold tracking-[0.2em] uppercase sm:mt-2.5 sm:text-xs"
                    style={{ color: "#C5A059" }}
                  >
                    Certificate of achievement
                  </p>

                  <div className="mt-2.5 flex items-center justify-center gap-2.5 sm:mt-3">
                    <span
                      className="flex size-9 items-center justify-center rounded-xl sm:size-10"
                      style={{
                        background: certTones[selected.id].bg,
                        color: certTones[selected.id].fg,
                      }}
                    >
                      <CertificateGlyph type={selected.icon} />
                    </span>
                    <h4 className="font-heading text-lg font-extrabold text-[#111827] sm:text-xl">
                      {selected.title}
                    </h4>
                  </div>

                  <p className="mt-2.5 text-sm text-[#71717A] sm:mt-3">
                    proudly presented to
                  </p>
                  <p
                    className="mt-0.5 font-script text-[2rem] leading-none sm:text-[2.5rem]"
                    style={{ color: PURPLE }}
                  >
                    {displayName}
                  </p>

                  <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-[#71717A] sm:mt-3">
                    for reaching{" "}
                    <span className="font-bold text-[#111827]">
                      {selected.percent}% mastery
                    </span>{" "}
                    in{" "}
                    <span className="font-bold text-[#111827]">
                      {subjectShort}
                    </span>{" "}
                    through dedicated practice with quizzes, flashcards, and exam
                    preparation.
                  </p>

                  <div className="mt-auto flex w-full max-w-md items-end justify-between gap-4 pt-4 sm:pt-5">
                    <div className="flex min-w-0 flex-1 flex-col items-start">
                      <div className="flex w-full max-w-[140px] flex-col items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo; match certificate header */}
                        <img
                          src="/logo-group.svg?v=blue"
                          alt="Studiely"
                          width={100}
                          height={28}
                          className="mb-2 h-5 w-auto object-contain sm:h-6"
                          crossOrigin="anonymous"
                        />
                        <div
                          className="mb-2 h-px w-full"
                          style={{ background: "#D4AF37" }}
                        />
                        <p className="text-center text-xs text-[#71717A]">
                          Team Studiely
                        </p>
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col items-end">
                      <div className="flex w-full max-w-[120px] flex-col items-center">
                      <div
                          className="mb-2 h-px w-full"
                        style={{ background: "#D4AF37" }}
                      />
                        <p className="text-center text-xs text-[#71717A]">
                        {new Date().toLocaleDateString(undefined, {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex w-full gap-2">
              <button
                type="button"
                disabled={exporting}
                onClick={() => void onDownloadCertificate()}
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-60"
                style={{ background: PURPLE }}
              >
                <DownloadIcon />
                {exporting ? "Preparing…" : "Download PDF"}
              </button>
              <button
                type="button"
                disabled={exporting}
                onClick={() => void onPrintCertificate()}
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-[#ECEAFF] px-3 py-2.5 text-sm font-bold transition hover:brightness-[0.98] disabled:opacity-60"
                style={{ color: PURPLE }}
              >
                <PrintIcon />
                Print
              </button>
              <button
                type="button"
                onClick={onShare}
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-[#ECEAFF] px-3 py-2.5 text-sm font-bold transition hover:brightness-[0.98]"
                style={{ color: PURPLE }}
              >
                <ShareIcon />
                Share
              </button>
            </div>
              </>
            ) : (
              <div className="rounded-[22px] border border-dashed border-[#E8E6F0] bg-[#FAFAFC] px-5 py-16 text-center">
                <span
                  className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-[#EEF0F5] text-[#6B7280]"
                >
                  <LockIcon className="size-5" />
                </span>
                <p className="text-sm font-semibold text-[#111827]">
                  No certificate to preview yet
                </p>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Unlock a certificate on the left, then select it to see the
                  preview here.
                </p>
          </div>
            )}
          </div>
        ) : section === "medals" ? (
          <div className="rounded-[28px] border border-[#E8E6F0] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-heading text-lg font-extrabold text-[#111827]">
                Medal preview
              </h3>
              <p className="inline-flex items-center gap-1.5 text-sm text-[#6B7280]">
                <MedalIcon className="size-4" />
                {selectedMedal
                  ? "Select an earned medal"
                  : "Earn a medal to unlock preview"}
              </p>
            </div>

            {selectedMedal ? (
              <>
            <div
              className="flex flex-col items-center rounded-[22px] px-3 py-6 sm:px-5 sm:py-8"
              style={{
                background: isLegendMedal
                  ? "linear-gradient(160deg, #1A1433 0%, #2A1F55 35%, #3D2A1A 70%, #1A1433 100%)"
                  : "linear-gradient(145deg, #FFF8E8 0%, #F7F4FF 50%, #FFF5F0 100%)",
              }}
            >
              {/* Export target: medal only (no preview backdrop / reward card) */}
              <div
                ref={medalExportRef}
                className="flex w-full max-w-[340px] flex-col items-center bg-transparent px-2 pb-2 pt-1"
              >
              {/* Ribbon */}
              <svg
                viewBox="0 0 120 56"
                className={`relative z-10 drop-shadow-sm ${
                  isLegendMedal
                    ? "h-14 w-32 sm:h-16 sm:w-36"
                    : "h-12 w-28 sm:h-14 sm:w-32"
                }`}
                aria-hidden
              >
                {isLegendMedal ? (
                  <>
                    <path
                      d="M20 4 L48 4 L60 28 L48 52 L20 40 Z"
                      fill="#0F172A"
                    />
                    <path
                      d="M100 4 L72 4 L60 28 L72 52 L100 40 Z"
                      fill="#1E1B4B"
                    />
                    <path d="M42 4 H78 V22 H42 Z" fill="#D4AF37" />
                    <path
                      d="M42 4 H78 V9 H42 Z"
                      fill="rgba(255,241,184,0.55)"
                    />
                    <path
                      d="M48 22 H72 V26 H48 Z"
                      fill="#B8860B"
                    />
                  </>
                ) : (
                  <>
                    <path
                      d="M20 4 L48 4 L60 28 L48 52 L20 40 Z"
                      fill="#FF2D8A"
                    />
                    <path
                      d="M100 4 L72 4 L60 28 L72 52 L100 40 Z"
                      fill="#4F35F2"
                    />
                    <path d="M42 4 H78 V22 H42 Z" fill="#E8FF2F" />
                    <path
                      d="M42 4 H78 V10 H42 Z"
                      fill="rgba(255,255,255,0.35)"
                    />
                  </>
                )}
              </svg>

              {/* Medal disc */}
              <div
                data-medal-disc={isLegendMedal ? "legend" : "standard"}
                className={`relative -mt-3 flex aspect-square w-full items-center justify-center rounded-full sm:-mt-4 ${
                  isLegendMedal
                    ? "max-w-[300px] sm:max-w-[340px]"
                    : "max-w-[280px] sm:max-w-[320px]"
                }`}
                style={{
                  background: isLegendMedal
                    ? "linear-gradient(145deg, #FFE566 0%, #F0C020 16%, #D4A017 38%, #B8860B 62%, #8B5A00 82%, #5C3A00 100%)"
                    : "linear-gradient(145deg, #FFE566 0%, #F0C020 18%, #D4A017 42%, #B8860B 68%, #7A5200 100%)",
                  boxShadow: isLegendMedal
                    ? "0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(212,175,55,0.5), inset 0 3px 8px rgba(255,255,255,0.4), inset 0 -6px 14px rgba(40,25,0,0.45)"
                    : "0 20px 44px rgba(184, 134, 11, 0.4), inset 0 2px 6px rgba(255,255,255,0.45), inset 0 -4px 10px rgba(120, 80, 0, 0.25)",
                }}
              >
                {/* Outer rim highlight */}
                <div
                  className="pointer-events-none absolute inset-[3%] rounded-full"
                  style={{
                    border: isLegendMedal
                      ? "2.5px solid rgba(255, 236, 170, 0.85)"
                      : "2px solid rgba(255, 236, 170, 0.65)",
                    boxShadow: isLegendMedal
                      ? "inset 0 0 0 2px rgba(61, 42, 10, 0.55), 0 0 18px rgba(212,175,55,0.35)"
                      : "inset 0 0 0 1px rgba(139, 105, 20, 0.35)",
                  }}
                  aria-hidden
                />
                {/* Inner face */}
                <div
                  data-medal-face=""
                  className="absolute inset-[8%] rounded-full"
                  style={{
                    background: isLegendMedal
                      ? "radial-gradient(circle at 32% 26%, #FFF3B0 0%, #F5D060 30%, #E0B020 58%, #C9920A 100%)"
                      : "radial-gradient(circle at 35% 28%, #FFF3B0 0%, #F5D060 34%, #E8B830 62%, #C9920A 100%)",
                    boxShadow: isLegendMedal
                      ? "inset 0 0 0 4px rgba(92, 64, 16, 0.45), inset 0 10px 22px rgba(255,255,255,0.28)"
                      : "inset 0 0 0 3px rgba(184, 134, 11, 0.35), inset 0 8px 18px rgba(255,255,255,0.35)",
                  }}
                />
                {/* Decorative rings */}
                <div
                  className="pointer-events-none absolute inset-[13%] rounded-full"
                  style={{
                    border: isLegendMedal
                      ? "2px solid rgba(92, 64, 16, 0.55)"
                      : "1.5px solid rgba(184, 134, 11, 0.55)",
                    boxShadow: isLegendMedal
                      ? "0 0 0 5px rgba(255, 241, 184, 0.28), inset 0 0 0 1px rgba(255,248,220,0.4)"
                      : "0 0 0 4px rgba(255, 248, 220, 0.35)",
                  }}
                  aria-hidden
                />
                {isLegendMedal ? (
                  <div
                    className="pointer-events-none absolute inset-[18%] rounded-full"
                    style={{
                      border: "1px dashed rgba(92, 64, 16, 0.4)",
                    }}
                    aria-hidden
                  />
                ) : null}
                {/* Shine */}
                <div
                  className="pointer-events-none absolute inset-[10%] rounded-full opacity-40"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 42%)",
                  }}
                  aria-hidden
                />

                <div className="relative z-10 flex h-[76%] w-[76%] flex-col items-center justify-center px-4 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo; match navbar */}
                  <img
                    src="/logo-group.svg?v=blue"
                    alt="Studiely"
                    width={120}
                    height={34}
                    className="h-5 w-auto object-contain sm:h-6"
                    crossOrigin="anonymous"
                  />

                  {!isLegendMedal ? (
                    <p
                      className="mt-2 text-[9px] font-extrabold tracking-[0.18em] uppercase sm:text-[10px]"
                      style={{ color: "#9A7B2F" }}
                    >
                      Study streak medal
                    </p>
                  ) : null}

                  <span
                    className={`mt-2.5 flex items-center justify-center rounded-full sm:mt-3 ${
                      isLegendMedal
                        ? "size-12 sm:size-14"
                        : "size-11 sm:size-12"
                    }`}
                    style={{
                      background: isLegendMedal
                        ? "linear-gradient(145deg, #1E1B4B 0%, #0F172A 100%)"
                        : selectedMedal.iconBg,
                      color: isLegendMedal ? "#F0D060" : selectedMedal.iconColor,
                      boxShadow: isLegendMedal
                        ? "0 8px 18px rgba(15, 23, 42, 0.35), inset 0 1px 0 rgba(240,208,96,0.45), 0 0 0 2px rgba(212,175,55,0.65)"
                        : "0 6px 14px rgba(139, 105, 20, 0.25), inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                  >
                    <MedalGlyph
                      type={selectedMedal.icon}
                      className={
                        isLegendMedal ? "size-6 sm:size-7" : "size-5 sm:size-6"
                      }
                    />
                  </span>

                  <h4
                    className={`mt-2 font-heading font-extrabold leading-tight text-[#111827] sm:mt-2.5 ${
                      isLegendMedal
                        ? "text-lg tracking-tight sm:text-xl"
                        : "text-base sm:text-lg"
                    }`}
                  >
                    {selectedMedal.title}
                  </h4>

                  <p
                    className="mt-1.5 text-[11px] sm:text-xs"
                    style={{
                      color: isLegendMedal ? "#5C4010" : "#7A6228",
                    }}
                  >
                    {isLegendMedal
                      ? "with distinction awarded to"
                      : "awarded to"}
                  </p>
                  <p
                    className="mt-0.5 max-w-full truncate font-script text-[1.55rem] leading-none sm:text-[1.85rem]"
                    style={{ color: isLegendMedal ? "#1E1B4B" : PURPLE }}
                  >
                    {displayName}
                  </p>
                  <p
                    className="mt-1.5 text-[11px] font-bold sm:text-xs"
                    style={{ color: "#5C4A16" }}
                  >
                    {isLegendMedal
                      ? `${selectedMedal.days}-day legend streak`
                      : `${selectedMedal.days}-day streak`}
                  </p>
                </div>
              </div>
              </div>

              <div
                className="mt-5 w-full max-w-sm rounded-2xl px-4 py-3 text-center"
                style={{
                  border: isLegendMedal
                    ? "1px solid rgba(212, 175, 55, 0.45)"
                    : "1px solid rgba(232, 213, 163, 0.7)",
                  background: isLegendMedal
                    ? "linear-gradient(135deg, rgba(30,27,75,0.92) 0%, rgba(15,23,42,0.95) 100%)"
                    : "rgba(255,255,255,0.95)",
                  boxShadow: isLegendMedal
                    ? "0 10px 28px rgba(0,0,0,0.28)"
                    : "0 8px 20px rgba(184,134,11,0.1)",
                }}
              >
                <p
                  className="text-[11px] font-bold tracking-wide uppercase"
                  style={{ color: isLegendMedal ? "#F0D060" : "#9A7B2F" }}
                >
                  Reward unlocked
                </p>
                <p
                  className="mt-1 text-sm font-semibold"
                  style={{
                    color: isLegendMedal ? "#FFF8E8" : "#111827",
                  }}
                >
                  {medalRewardLabel}
                </p>
              </div>
            </div>

            <div className="mt-4 flex w-full gap-2">
              <button
                type="button"
                disabled={exporting}
                onClick={() => void onDownloadMedal()}
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-60"
                style={{ background: PURPLE }}
              >
                <DownloadIcon />
                {exporting ? "Preparing…" : "Download PDF"}
              </button>
              <button
                type="button"
                disabled={exporting}
                onClick={() => void onPrintMedal()}
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-[#ECEAFF] px-3 py-2.5 text-sm font-bold transition hover:brightness-[0.98] disabled:opacity-60"
                style={{ color: PURPLE }}
              >
                <PrintIcon />
                Print
              </button>
              <button
                type="button"
                onClick={onShare}
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-[#ECEAFF] px-3 py-2.5 text-sm font-bold transition hover:brightness-[0.98]"
                style={{ color: PURPLE }}
              >
                <ShareIcon />
                Share
              </button>
            </div>
              </>
            ) : (
              <div className="rounded-[22px] border border-dashed border-[#E8E6F0] bg-[#FAFAFC] px-5 py-16 text-center">
                <span className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-[#EEF0F5] text-[#6B7280]">
                  <LockIcon className="size-5" />
                </span>
                <p className="text-sm font-semibold text-[#111827]">
                  No medal to preview yet
                </p>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Keep your study streak going to earn a medal, then select it
                  on the left to unlock the preview here.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-[28px] border border-[#E8E6F0] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-heading text-lg font-extrabold text-[#111827]">
                Rewards overview
              </h3>
              <p className="inline-flex items-center gap-1.5 text-sm text-[#6B7280]">
                <GiftIcon className="size-4" />
                Track what you’ve unlocked
              </p>
            </div>

            <div
              className="rounded-[22px] px-4 py-5 sm:px-6 sm:py-6"
              style={{
                background:
                  "linear-gradient(145deg, #ECEAFF 0%, #F7F4FF 40%, #FFE4F1 75%, #F4F9C8 100%)",
              }}
            >
              <div className="rounded-[18px] border border-white/70 bg-white/85 p-5 shadow-[0_12px_32px_rgba(17,24,39,0.08)] backdrop-blur-sm sm:p-6">
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-12 items-center justify-center rounded-2xl text-white"
                    style={{ background: PURPLE }}
                  >
                    <GiftIcon className="size-6" />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-extrabold text-[#111827]">
                      Your reward shelf
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      Credits, badges, frames & coupons from milestones
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div
                    className="rounded-2xl px-4 py-3"
                    style={{ background: "#ECEAFF" }}
                  >
                    <p
                      className="text-2xl font-extrabold"
                      style={{ color: PURPLE }}
                    >
                      {MEDALS.filter((m) => streak >= m.days).length}
                      <span className="text-sm font-bold text-[#9CA3AF]">
                        {" "}
                        / {MEDALS.length}
                      </span>
                    </p>
                    <p className="mt-0.5 text-xs font-bold tracking-wide text-[#6B7280] uppercase">
                      Streak rewards
                    </p>
                  </div>
                  <div
                    className="rounded-2xl px-4 py-3"
                    style={{ background: "#FFE4F1" }}
                  >
                    <p
                      className="text-2xl font-extrabold"
                      style={{ color: PINK }}
                    >
                      {MASTERY_REWARDS.filter((m) => mastery >= m.percent).length}
                      <span className="text-sm font-bold text-[#9CA3AF]">
                        {" "}
                        / {MASTERY_REWARDS.length}
                      </span>
                    </p>
                    <p className="mt-0.5 text-xs font-bold tracking-wide text-[#6B7280] uppercase">
                      Mastery rewards
                    </p>
                  </div>
                </div>

                <div
                  className="mt-4 rounded-2xl px-4 py-3"
                  style={{ background: LIME }}
                >
                  <p className="text-sm font-extrabold text-[#1E1B4B]">
                    {
                      MEDALS.filter((m) => streak >= m.days).length +
                      MASTERY_REWARDS.filter((m) => mastery >= m.percent).length
                    }{" "}
                    rewards unlocked
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#3F3F46]">
                    Keep your streak and mastery climbing to claim the rest.
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    ...MEDALS.map((m) => ({
                      key: m.id,
                      label: medalRewardDetail(m.days),
                      unlocked: streak >= m.days,
                      kind: "streak" as const,
                    })),
                    ...MASTERY_REWARDS.map((m) => ({
                      key: String(m.percent),
                      label: m.label,
                      unlocked: mastery >= m.percent,
                      kind: "mastery" as const,
                    })),
                  ].map((item) => (
                    <li
                      key={item.key}
                      className="flex items-center gap-2.5 rounded-xl border px-3 py-2.5"
                      style={{
                        borderColor: item.unlocked ? "#D4E86A" : "#E8E6F0",
                        background: item.unlocked ? "#F4F9C8" : "#FAFAFC",
                      }}
                    >
                      <span
                        className="flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold"
                        style={
                          item.unlocked
                            ? { background: PURPLE, color: "#fff" }
                            : { background: "#EEF0F5", color: "#6B7280" }
                        }
                      >
                        {item.unlocked ? "✓" : "·"}
                      </span>
                      <span className="min-w-0 flex-1 text-sm font-semibold text-[#111827]">
                        {item.label}
                      </span>
                      <span
                        className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase"
                        style={
                          item.kind === "streak"
                            ? { background: "#ECEAFF", color: PURPLE }
                            : { background: "#FFE4F1", color: PINK }
                        }
                      >
                        {item.kind}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionTab({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-1.5 rounded-[18px] border px-2 py-3 text-xs font-bold transition sm:gap-2 sm:px-3 sm:text-sm ${
        active
          ? "border-transparent text-white shadow-[0_8px_20px_rgba(79,53,242,0.25)]"
          : "border-[#E8E6F0] bg-white text-[#6B7280] shadow-[0_8px_24px_rgba(17,24,39,0.04)] hover:border-[#DDD6FE] hover:text-[#111827]"
      }`}
      style={active ? { background: PURPLE } : undefined}
    >
      {icon}
      <span className="truncate">{children}</span>
    </button>
  );
}

function RewardCard({
  unlocked,
  title,
  detail,
  badge,
  tone,
  iconBg,
  iconColor,
  icon,
}: {
  unlocked: boolean;
  title: string;
  detail: string;
  badge: string;
  tone: "streak" | "mastery";
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
}) {
  return (
    <div
      className="flex w-full items-center gap-3 rounded-[22px] border px-4 py-4 shadow-[0_8px_24px_rgba(17,24,39,0.05)]"
      style={{
        borderColor: unlocked
          ? tone === "streak"
            ? "#C4B5FD"
            : "#F9A8D4"
          : "#E8E6F0",
        background: unlocked
          ? tone === "streak"
            ? "linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 70%)"
            : "linear-gradient(135deg, #FFF1F7 0%, #FFFFFF 70%)"
          : "#FFFFFF",
      }}
    >
      <span
        className="flex size-12 shrink-0 items-center justify-center rounded-2xl"
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-extrabold text-[#111827] sm:text-[15px]">
          {title}
        </span>
        <span className="mt-0.5 block text-xs text-[#6B7280]">{detail}</span>
      </span>
      {unlocked ? (
        <span
          className="inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-[10px] font-extrabold tracking-wide text-[#1E1B4B] uppercase"
          style={{ background: LIME }}
        >
          ✓ {badge === "✓" ? "Unlocked" : badge}
        </span>
      ) : (
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#EEF0F5] px-2.5 py-1.5 text-[10px] font-extrabold tracking-wide text-[#6B7280] uppercase">
          <LockIcon className="size-3" />
        {badge}
      </span>
      )}
    </div>
  );
}

function GiftIcon({ className }: { className?: string } = {}) {
  return (
    <svg viewBox="0 0 24 24" className={iconClass(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="4" y="10" width="16" height="10" rx="1.5" />
      <path d="M12 10v10M4 14h16M12 10c-2.2 0-4-1.3-4-3s2.5-2.2 4-.5c1.5-1.7 4-.9 4 .5s-1.8 3-4 3Z" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6M12 7.5h.01" strokeLinecap="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 4v10M8 10l4 4 4-4M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M7 8V4h10v4M7 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <rect x="7" y="14" width="10" height="6" rx="1" />
    </svg>
  );
}

function iconClass(className?: string) {
  return className ?? "size-5";
}

function TrophyIcon({ className }: { className?: string } = {}) {
  return (
    <svg viewBox="0 0 24 24" className={iconClass(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M8 4h8v3a4 4 0 0 1-8 0V4Z" strokeLinejoin="round" />
      <path d="M8 5H5.5A2.5 2.5 0 0 0 5.5 10H8M16 5h2.5A2.5 2.5 0 0 1 18.5 10H16" strokeLinecap="round" />
      <path d="M12 11v3M9 20h6M10 17h4v3h-4z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CertIcon({ className }: { className?: string } = {}) {
  return (
    <svg viewBox="0 0 24 24" className={iconClass(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="4" y="3" width="16" height="13" rx="2" />
      <path d="M9 20l3-2 3 2v-6H9v6Z" strokeLinejoin="round" />
      <path d="M8 8h8M8 11h5" strokeLinecap="round" />
    </svg>
  );
}

function MedalIcon({ className }: { className?: string } = {}) {
  return (
    <svg viewBox="0 0 24 24" className={iconClass(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="14" r="5" />
      <path d="M9 4l3 4 3-4M9 4H7l3 6M15 4h2l-3 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlameIcon({ className }: { className?: string } = {}) {
  return (
    <svg viewBox="0 0 24 24" className={iconClass(className)} fill="currentColor" aria-hidden>
      <path d="M12 23c-4.2 0-7-2.9-7-7.2 0-2.6 1.2-4.4 2.6-6 .4-.5 1.2-.4 1.4.2.5 1.4 1.2 2.5 1.2 2.5S9.8 9 11.2 6.2c.4-.8 1.5-.9 1.9-.1C14.6 9 17 11.6 17 15.8c0 4.3-2.8 7.2-5 7.2Z" />
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

function SproutIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 20V10" strokeLinecap="round" />
      <path d="M12 13c-3-1-5-3.5-5-7 4 0 5 2.5 5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11c3-1 5-3 5-6.5-3.5.5-5 2.5-5 5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NodesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3.5" y="9" width="5" height="5" rx="1.2" />
      <rect x="15.5" y="3.5" width="5" height="5" rx="1.2" />
      <rect x="15.5" y="15.5" width="5" height="5" rx="1.2" />
      <path d="M8.5 11.5h4.2M12.7 11.5V6H15.5M12.7 11.5V18H15.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 18h6M10 22h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path
        d="M12 3c3.5 2 5.5 5.2 6 9.2-.8.4-1.7.6-2.6.7l-1.1 3.6h-4.6l-1.1-3.6c-.9-.1-1.8-.3-2.6-.7.5-4 2.5-7.2 6-9.2Z"
        strokeLinejoin="round"
      />
      <path d="M9.2 16.5 8 20.5M14.8 16.5 16 20.5" strokeLinecap="round" />
      <circle cx="12" cy="10" r="1.4" />
      <path d="M7.5 14.2c-1.2.6-2.2 1.8-2.5 3.3 1.5-.3 2.7-1.3 3.3-2.5M16.5 14.2c1.2.6 2.2 1.8 2.5 3.3-1.5-.3-2.7-1.3-3.3-2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarOutlineIcon({ className }: { className?: string } = {}) {
  return (
    <svg viewBox="0 0 24 24" className={iconClass(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 3.5l2.5 5.1 5.6.8-4 3.9.9 5.6L12 16.6 7 18.9l.9-5.6-4-3.9 5.6-.8L12 3.5Z" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string } = {}) {
  return (
    <svg viewBox="0 0 24 24" className={iconClass(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}

function StarTinyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
      <path d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.8l-4.8 2.6.9-5.4-3.9-3.8 5.4-.8L12 3.5z" />
    </svg>
  );
}

function CrownIcon({ className }: { className?: string } = {}) {
  return (
    <svg viewBox="0 0 24 24" className={iconClass(className)} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path
        d="M5 17.5 3.5 8.5 8 12l4-7 4 7 4.5-3.5L19 17.5H5Z"
        strokeLinejoin="round"
      />
      <path d="M5 20h14" strokeLinecap="round" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 13.2 15.8 17.3M15.8 6.7 8.2 10.8" strokeLinecap="round" />
    </svg>
  );
}
