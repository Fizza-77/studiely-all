"use client";

import { useMemo, useState } from "react";

import { PrimaryButton, SecondaryButton } from "@/components/ui/auth-form";
import {
  avatarSeedsForUid,
  randomAvatarDataUri,
} from "@/lib/student/random-avatar";

type Mode = "menu" | "grid";

type Props = {
  open: boolean;
  uid: string;
  currentSeed: string | null;
  hasAvatar: boolean;
  busy?: boolean;
  onClose: () => void;
  onPickSeed: (seed: string) => void | Promise<void>;
  onUploadPhoto: () => void;
  onRemove: () => void | Promise<void>;
};

/**
 * Flutter profile avatar flow:
 * menu → Choose avatar (24 multiavatars) / Upload photo / Remove.
 */
export function AvatarPicker({
  open,
  uid,
  currentSeed,
  hasAvatar,
  busy = false,
  onClose,
  onPickSeed,
  onUploadPhoto,
  onRemove,
}: Props) {
  const [mode, setMode] = useState<Mode>("menu");
  const seeds = useMemo(() => avatarSeedsForUid(uid), [uid]);

  if (!open) return null;

  function close() {
    setMode("menu");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[var(--color-overlay)] p-0 sm:items-center sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="avatar-picker-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-xl sm:rounded-2xl sm:p-6"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h2
              id="avatar-picker-title"
              className="text-lg font-bold text-[var(--color-text)]"
            >
              {mode === "grid" ? "Choose your avatar" : "Profile picture"}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              {mode === "grid"
                ? "Same safe avatars as the Studiely app."
                : "Pick an avatar or upload a photo."}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="rounded-lg px-2 py-1 text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-card-muted)]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {mode === "menu" ? (
          <div className="flex flex-col gap-2">
            <button
              type="button"
              disabled={busy}
              onClick={() => setMode("grid")}
              className="flex w-full items-center gap-3 rounded-2xl border border-[var(--color-border)] px-4 py-3.5 text-left transition hover:bg-[var(--color-card-muted)]"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-indigo-soft)] text-[var(--color-vivid-cyan)]">
                ☺
              </span>
              <span>
                <span className="block font-semibold text-[var(--color-text)]">
                  Choose an avatar
                </span>
                <span className="block text-sm text-[var(--color-text-muted)]">
                  Pick from safe, generated avatars
                </span>
              </span>
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={() => {
                onUploadPhoto();
                close();
              }}
              className="flex w-full items-center gap-3 rounded-2xl border border-[var(--color-border)] px-4 py-3.5 text-left transition hover:bg-[var(--color-card-muted)]"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-indigo-soft)] text-[var(--color-vivid-cyan)]">
                📷
              </span>
              <span>
                <span className="block font-semibold text-[var(--color-text)]">
                  Upload a photo
                </span>
                <span className="block text-sm text-[var(--color-text-muted)]">
                  Use a picture from this device
                </span>
              </span>
            </button>
            {hasAvatar ? (
              <button
                type="button"
                disabled={busy}
                onClick={() => void onRemove()}
                className="flex w-full items-center gap-3 rounded-2xl border border-red-200 px-4 py-3.5 text-left text-red-600 transition hover:bg-red-50"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-red-50">
                  ✕
                </span>
                <span>
                  <span className="block font-semibold">Remove photo/avatar</span>
                  <span className="block text-sm text-red-500/80">
                    Reset to your initial
                  </span>
                </span>
              </button>
            ) : null}
            <SecondaryButton type="button" onClick={close} className="mt-2">
              Cancel
            </SecondaryButton>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
              {seeds.map((seed) => {
                const selected = currentSeed === seed;
                return (
                  <button
                    key={seed}
                    type="button"
                    disabled={busy}
                    onClick={() => void onPickSeed(seed)}
                    className={`aspect-square overflow-hidden rounded-full bg-[var(--color-indigo-soft)] ring-2 transition hover:ring-[var(--color-vivid-cyan)] disabled:opacity-60 ${
                      selected
                        ? "ring-[var(--color-vivid-cyan)]"
                        : "ring-transparent"
                    }`}
                    aria-label={`Select avatar ${seed.split("_").pop()}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={randomAvatarDataUri(seed)}
                      alt=""
                      className="size-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <SecondaryButton
                type="button"
                onClick={() => setMode("menu")}
                disabled={busy}
              >
                Back
              </SecondaryButton>
              <PrimaryButton type="button" onClick={close} disabled={busy}>
                Done
              </PrimaryButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
