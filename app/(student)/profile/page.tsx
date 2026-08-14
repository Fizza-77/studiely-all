"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { DataConsentGate } from "@/components/auth/data-consent-gate";
import { ProfileCurriculumEditor } from "@/components/profile/curriculum-editor";
import { AvatarPicker } from "@/components/profile/avatar-picker";
import { ProfileDashboard } from "@/components/profile/profile-dashboard";
import { NotificationsModal } from "@/components/profile/notifications-modal";
import { useAuth } from "@/components/providers/auth-provider";
import {
  useThemePreference,
  type ThemePreference,
} from "@/components/providers/theme-provider";
import {
  Alert,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "@/components/ui/auth-form";
import { EmptyState, LoadingBlock } from "@/components/ui/student-ui";
import { useStudentData } from "@/hooks/use-student-data";
import {
  changePassword,
  mapFirebaseError,
  signOutUser,
} from "@/lib/auth/service";
import { consentStorage } from "@/lib/auth/consent";
import {
  curriculumFromStudentProfile,
  isProfileCurriculumComplete,
  setProfileCurriculum,
  type UserProfileCurriculum,
} from "@/lib/student/profile-curriculum";
import {
  clearAvatar,
  saveRandomAvatar,
  uploadProfilePhoto,
} from "@/lib/student/avatar";
import {
  deleteStudentAccount,
  hasActiveSubscriptions,
} from "@/lib/student/account-deletion";

const SMART_LINK = "https://www.studiely.com/smartlink";
const SHARE_TEXT = `Study smarter with Studiely. Download/open here: ${SMART_LINK}`;

const THEME_OPTIONS: { id: ThemePreference; label: string }[] = [
  { id: "system", label: "System" },
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
];

export default function ProfilePage() {
  const router = useRouter();
  const { phase, user, student } = useAuth();
  const isGuest = phase === "guest" && !user;
  const { preference, setPreference } = useThemePreference();
  const { loading, error, profile, notes, attempts, stats, refresh } =
    useStudentData();
  const fileRef = useRef<HTMLInputElement>(null);

  const [editorOpen, setEditorOpen] = useState(false);
  const [savingCurriculum, setSavingCurriculum] = useState(false);
  const [avatarBusy, setAvatarBusy] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const [pwdOpen, setPwdOpen] = useState(false);
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdError, setPwdError] = useState<string | null>(null);
  const [pwdBusy, setPwdBusy] = useState(false);

  const [consentOpen, setConsentOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const curriculum = curriculumFromStudentProfile(profile);
  const curriculumComplete = isProfileCurriculumComplete(curriculum);
  const displayName =
    profile?.name || student?.name || user?.email?.split("@")[0] || "Student";
  const initial = (displayName.trim()[0] || "S").toUpperCase();
  const isPremium = stats?.isPremium ?? false;
  const planLabel = stats?.planLabel || "Free Starter";

  function flash(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(null), 2800);
  }

  async function onSaveCurriculum(next: UserProfileCurriculum) {
    if (!user) return;
    setSavingCurriculum(true);
    try {
      await setProfileCurriculum(user.uid, next);
      setEditorOpen(false);
      await refresh({ silent: true });
      flash("Profile curriculum saved");
    } catch (err) {
      flash(err instanceof Error ? err.message : "Could not save curriculum");
    } finally {
      setSavingCurriculum(false);
    }
  }

  async function onPickPhoto(file: File | null) {
    if (!user || !file) return;
    setAvatarBusy(true);
    try {
      await uploadProfilePhoto(user.uid, file);
      await refresh({ silent: true });
      flash("Profile photo updated");
    } catch (err) {
      flash(err instanceof Error ? err.message : "Could not upload photo");
    } finally {
      setAvatarBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  async function onPickAvatarSeed(seed: string) {
    if (!user) return;
    setAvatarBusy(true);
    setAvatarOpen(false);
    try {
      await saveRandomAvatar(user.uid, seed);
      await refresh({ silent: true });
      flash("Avatar updated");
    } catch (err) {
      flash(err instanceof Error ? err.message : "Could not save avatar");
    } finally {
      setAvatarBusy(false);
    }
  }

  async function onRemoveAvatar() {
    if (!user) return;
    setAvatarBusy(true);
    setAvatarOpen(false);
    try {
      await clearAvatar(user.uid);
      await refresh({ silent: true });
      flash("Avatar removed");
    } catch (err) {
      flash(err instanceof Error ? err.message : "Could not remove avatar");
    } finally {
      setAvatarBusy(false);
    }
  }

  const hasAvatar =
    Boolean(profile?.profileImageUrl) ||
    (profile?.avatarSource === "random" && Boolean(profile?.avatarSeed)) ||
    Boolean(profile?.avatarSeed);

  async function onShare() {
    try {
      if (navigator.share) {
        await navigator.share({ title: "Studiely", text: SHARE_TEXT, url: SMART_LINK });
      } else {
        await navigator.clipboard.writeText(SHARE_TEXT);
        flash("Link copied");
      }
    } catch {
      try {
        await navigator.clipboard.writeText(SHARE_TEXT);
        flash("Link copied");
      } catch {
        flash("Could not share");
      }
    }
  }

  async function onChangePassword() {
    setPwdError(null);
    if (!currentPwd) {
      setPwdError("Enter your current password");
      return;
    }
    if (newPwd.length < 6) {
      setPwdError("Password must be at least 6 characters");
      return;
    }
    if (newPwd !== confirmPwd) {
      setPwdError("New passwords do not match");
      return;
    }
    setPwdBusy(true);
    try {
      await changePassword(currentPwd, newPwd);
      setPwdOpen(false);
      setCurrentPwd("");
      setNewPwd("");
      setConfirmPwd("");
      flash("Password updated");
    } catch (err) {
      setPwdError(mapFirebaseError(err));
    } finally {
      setPwdBusy(false);
    }
  }

  async function onDelete() {
    if (!profile) return;
    setDeleteError(null);
    setDeleting(true);
    try {
      const result = await deleteStudentAccount(profile, password || undefined);
      if (result === "hasActiveSubscriptions") {
        setDeleteError(
          "Cancel your active subscription first (App Store / Play Store / web billing), then try again.",
        );
        return;
      }
      if (result === "requiresReauth") {
        setDeleteError("Enter your password to confirm account deletion.");
        return;
      }
      if (result === "failure") {
        setDeleteError("Could not delete account. Try signing in again.");
        return;
      }
      setDeleteOpen(false);
      router.replace("/login");
    } finally {
      setDeleting(false);
    }
  }

  async function onLogout() {
    setLogoutOpen(false);
    await signOutUser();
    router.replace("/login");
  }

  return (
    <DataConsentGate>
      <AppShell wide>
        {toast ? (
          <div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[var(--color-text)] px-4 py-2 text-sm font-medium text-white shadow-lg sm:bottom-6">
            {toast}
          </div>
        ) : null}

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => void onPickPhoto(e.target.files?.[0] ?? null)}
        />

        {isGuest ? (
          <EmptyState
            title="You’re browsing as a guest"
            body="Create an account to sync progress and unlock your full profile."
            action={
              <div className="flex flex-wrap justify-center gap-2">
                <Link href="/login">
                  <PrimaryButton type="button" className="w-auto px-5">
                    Sign in
                  </PrimaryButton>
                </Link>
                <Link href="/signup">
                  <SecondaryButton type="button" className="w-auto px-5">
                    Sign up
                  </SecondaryButton>
                </Link>
              </div>
            }
          />
        ) : loading ? (
          <LoadingBlock />
        ) : error ? (
          <EmptyState title="Couldn’t load profile" body={error} />
        ) : (
          <ProfileDashboard
            displayName={displayName}
            initial={initial}
            profile={profile}
            planLabel={planLabel}
            isPremium={isPremium}
            stats={stats}
            notes={notes}
            attempts={attempts}
            curriculumComplete={curriculumComplete}
            avatarBusy={avatarBusy}
            onEditProfile={() => setEditorOpen(true)}
            onShare={() => void onShare()}
            onAvatar={() => setAvatarOpen(true)}
            onLogoutRequest={() => setLogoutOpen(true)}
            onNotifications={() => setNotificationsOpen(true)}
            onComingSoon={flash}
          />
        )}

        {user && notificationsOpen ? (
          <NotificationsModal
            uid={user.uid}
            onClose={() => setNotificationsOpen(false)}
          />
        ) : null}

        {editorOpen ? (
          <ProfileCurriculumEditor
            key={[
              curriculum?.topLevelCurriculumId,
              curriculum?.pathwayId,
              curriculum?.gradeId,
              curriculum?.school,
            ].join("|")}
            open
            initial={curriculum}
            saving={savingCurriculum}
            onClose={() => setEditorOpen(false)}
            onSave={onSaveCurriculum}
          />
        ) : null}

        {user && avatarOpen ? (
          <AvatarPicker
            open
            uid={user.uid}
            currentSeed={profile?.avatarSeed ?? null}
            hasAvatar={hasAvatar}
            busy={avatarBusy}
            onClose={() => setAvatarOpen(false)}
            onPickSeed={onPickAvatarSeed}
            onUploadPhoto={() => fileRef.current?.click()}
            onRemove={onRemoveAvatar}
          />
        ) : null}

        {pwdOpen ? (
          <Modal
            title="Change password"
            onClose={() => setPwdOpen(false)}
          >
            {pwdError ? <Alert>{pwdError}</Alert> : null}
            <Field label="Current password">
              <TextInput
                type="password"
                value={currentPwd}
                onChange={(e) => setCurrentPwd(e.target.value)}
                autoComplete="current-password"
              />
            </Field>
            <Field label="New password">
              <TextInput
                type="password"
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
                autoComplete="new-password"
              />
            </Field>
            <Field label="Confirm new password">
              <TextInput
                type="password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                autoComplete="new-password"
              />
            </Field>
            <PrimaryButton
              type="button"
              loading={pwdBusy}
              onClick={() => void onChangePassword()}
            >
              Update password
            </PrimaryButton>
            <SecondaryButton type="button" onClick={() => setPwdOpen(false)}>
              Cancel
            </SecondaryButton>
          </Modal>
        ) : null}

        {consentOpen ? (
          <Modal
            title="Data Collection & Privacy"
            onClose={() => setConsentOpen(false)}
          >
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              Analytics help us understand how students use Studiely. Your choice
              is stored on this device only (same as the mobile app).
            </p>
            <p className="text-sm text-[var(--color-text)]">
              Current:{" "}
              <strong>
                {consentStorage.getConsent() === true
                  ? "Accepted"
                  : consentStorage.getConsent() === false
                    ? "Declined"
                    : "Not set"}
              </strong>
            </p>
            <PrimaryButton
              type="button"
              onClick={() => {
                consentStorage.setConsent(true);
                setConsentOpen(false);
                flash("Analytics accepted");
              }}
            >
              Accept analytics
            </PrimaryButton>
            <SecondaryButton
              type="button"
              onClick={() => {
                consentStorage.setConsent(false);
                setConsentOpen(false);
                flash("Analytics declined");
              }}
            >
              Decline
            </SecondaryButton>
            <Link
              href="/privacy-policy"
              className="text-center text-sm font-semibold text-[var(--color-vivid-cyan)]"
            >
              Privacy Policy
            </Link>
          </Modal>
        ) : null}

        {themeOpen ? (
          <Modal title="Appearance" onClose={() => setThemeOpen(false)}>
            <div className="flex flex-wrap gap-2">
              {THEME_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setPreference(opt.id);
                    setThemeOpen(false);
                  }}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    preference === opt.id
                      ? "bg-[var(--color-vivid-cyan)] text-white"
                      : "bg-[var(--color-card-muted)] text-[var(--color-text-muted)]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </Modal>
        ) : null}

        {logoutOpen ? (
          <Modal title="Log out?" onClose={() => setLogoutOpen(false)}>
            <p className="text-sm text-[var(--color-text-muted)]">
              You’ll need to sign in again to access your library and profile.
            </p>
            <PrimaryButton type="button" onClick={() => void onLogout()}>
              Log out
            </PrimaryButton>
            <SecondaryButton type="button" onClick={() => setLogoutOpen(false)}>
              Cancel
            </SecondaryButton>
          </Modal>
        ) : null}

        {deleteOpen && profile ? (
          <Modal title="Delete account" onClose={() => setDeleteOpen(false)}>
            <p className="text-sm text-[var(--color-text-muted)]">
              This permanently deletes your Studiely student data and auth
              account. Subscriptions cannot be cancelled here.
            </p>
            {hasActiveSubscriptions(profile) ? (
              <Alert>
                Active subscription detected. Cancel it in the store first.
              </Alert>
            ) : null}
            {deleteError ? <Alert>{deleteError}</Alert> : null}
            <Field label="Confirm with password">
              <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Field>
            <PrimaryButton
              type="button"
              loading={deleting}
              onClick={() => void onDelete()}
            >
              Delete permanently
            </PrimaryButton>
            <SecondaryButton type="button" onClick={() => setDeleteOpen(false)}>
              Cancel
            </SecondaryButton>
          </Modal>
        ) : null}
      </AppShell>
    </DataConsentGate>
  );
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)] p-4">
      <div className="flex w-full max-w-md flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold text-[var(--color-text)]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-[var(--color-text-muted)]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
        {label}
      </label>
      {children}
    </div>
  );
}
