"use client";

import { useState } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { DataConsentGate } from "@/components/auth/data-consent-gate";
import { HomeDashboard } from "@/components/home/home-dashboard";
import { useAuth } from "@/components/providers/auth-provider";
import { PrimaryButton, SecondaryButton, TextInput } from "@/components/ui/auth-form";
import { useStudentData } from "@/hooks/use-student-data";
import { updateWeeklyGoal } from "@/lib/student/data";

export default function HomePage() {
  const { phase, student, user } = useAuth();
  const isGuest = phase === "guest" && !user;
  const { loading, error, notes, attempts, stats, profile, refresh } = useStudentData();
  const [goalOpen, setGoalOpen] = useState(false);
  const [goalValue, setGoalValue] = useState("5");
  const [savingGoal, setSavingGoal] = useState(false);

  const firstName = (profile?.name || student?.name || "").split(" ")[0];

  async function saveGoal() {
    if (!user) return;
    setSavingGoal(true);
    try {
      await updateWeeklyGoal(user.uid, Number(goalValue));
      setGoalOpen(false);
      await refresh();
    } finally {
      setSavingGoal(false);
    }
  }

  return (
    <DataConsentGate>
      <AppShell wide>
        <HomeDashboard
          firstName={firstName}
          isGuest={isGuest}
          loading={loading}
          error={error}
          notes={notes}
          attempts={attempts}
          stats={stats}
          onEditWeeklyGoal={
            isGuest
              ? undefined
              : () => {
                  setGoalValue(String(stats?.weeklyGoalSessions ?? 5));
                  setGoalOpen(true);
                }
          }
        />

        {goalOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)] p-4">
            <div className="w-full max-w-sm rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
              <h2 className="text-lg font-bold text-[var(--color-text)]">
                Weekly goal
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                How many study sessions do you want each week? (1–99)
              </p>
              <div className="mt-4">
                <TextInput
                  type="number"
                  min={1}
                  max={99}
                  value={goalValue}
                  onChange={(e) => setGoalValue(e.target.value)}
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <PrimaryButton
                  type="button"
                  loading={savingGoal}
                  onClick={() => void saveGoal()}
                >
                  Save
                </PrimaryButton>
                <SecondaryButton type="button" onClick={() => setGoalOpen(false)}>
                  Cancel
                </SecondaryButton>
              </div>
            </div>
          </div>
        ) : null}
      </AppShell>
    </DataConsentGate>
  );
}
