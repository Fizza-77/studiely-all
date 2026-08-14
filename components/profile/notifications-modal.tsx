"use client";

import { useEffect, useState } from "react";

import {
  clearAllStudentNotifications,
  deleteStudentNotification,
  markNotificationRead,
  relativeNotificationTime,
  subscribeStudentNotifications,
  type StudentNotification,
} from "@/lib/student/notifications";

const PURPLE = "#4F35F2";
const PINK = "#FF2D8A";

type NotificationsModalProps = {
  uid: string;
  onClose: () => void;
};

export function NotificationsModal({ uid, onClose }: NotificationsModalProps) {
  const [items, setItems] = useState<StudentNotification[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [clearing, setClearing] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    const unsub = subscribeStudentNotifications(
      uid,
      (next) => {
        setItems(next);
        setError(null);
      },
      () => setError("Couldn’t load notifications."),
    );
    return () => unsub();
  }, [uid]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function onClearAll() {
    if (!items?.length || clearing) return;
    setClearing(true);
    try {
      await clearAllStudentNotifications(uid);
    } catch {
      setError("Couldn’t clear notifications.");
    } finally {
      setClearing(false);
    }
  }

  async function onOpenItem(item: StudentNotification) {
    if (!item.read) {
      try {
        await markNotificationRead(uid, item.id);
      } catch {
        // keep list usable
      }
    }
  }

  async function onDelete(item: StudentNotification) {
    setBusyId(item.id);
    try {
      await deleteStudentNotification(uid, item.id);
    } catch {
      setError("Couldn’t delete notification.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notifications-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[min(85vh,640px)] w-full max-w-lg flex-col overflow-hidden rounded-t-[28px] border border-[#E8E6F0] bg-white shadow-[0_20px_50px_rgba(17,24,39,0.18)] sm:rounded-[28px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[#F0EEF6] px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <h2
              id="notifications-title"
              className="font-heading text-lg font-extrabold text-[#111827]"
            >
              Notifications
            </h2>
            <p className="mt-0.5 text-xs text-[#6B7280]">
              Updates, streak reminders, and tips
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {items && items.length > 0 ? (
              <button
                type="button"
                disabled={clearing}
                onClick={() => void onClearAll()}
                className="rounded-lg px-2.5 py-1.5 text-xs font-semibold transition hover:bg-[#FAFAFC] disabled:opacity-50"
                style={{ color: PINK }}
              >
                {clearing ? "Clearing…" : "Clear all"}
              </button>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-full text-[#6B7280] transition hover:bg-[#F3F4F6]"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
          {error ? (
            <p className="rounded-2xl bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
              {error}
            </p>
          ) : null}

          {items === null ? (
            <p className="py-10 text-center text-sm text-[#6B7280]">Loading…</p>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center px-4 py-12 text-center">
              <span
                className="mb-3 flex size-12 items-center justify-center rounded-2xl text-white"
                style={{ background: PURPLE }}
                aria-hidden
              >
                <BellEmptyIcon />
              </span>
              <p className="font-heading text-base font-bold text-[#111827]">
                You&apos;re all caught up
              </p>
              <p className="mt-1 max-w-xs text-sm text-[#6B7280]">
                When we have updates, streak reminders, or tips for you, they
                will show up here.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((item) => {
                const unread = !item.read;
                return (
                  <li key={item.id}>
                    <div
                      className={`rounded-[20px] border px-4 py-3.5 transition ${
                        unread
                          ? "border-[#DDD6FE] bg-[#F5F3FF]"
                          : "border-[#E8E6F0] bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        className="w-full text-left"
                        onClick={() => void onOpenItem(item)}
                      >
                        <div className="flex items-start gap-2.5">
                          {unread ? (
                            <span
                              className="mt-1.5 size-2 shrink-0 rounded-full"
                              style={{ background: PURPLE }}
                              aria-label="Unread"
                            />
                          ) : (
                            <span className="mt-1.5 size-2 shrink-0" aria-hidden />
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <p className="text-sm font-bold text-[#111827]">
                                {item.title || "Update"}
                              </p>
                              <span className="shrink-0 text-[10px] font-medium text-[#9CA3AF]">
                                {relativeNotificationTime(item.createdAt)}
                              </span>
                            </div>
                            {item.body ? (
                              <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                                {item.body}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </button>
                      <div className="mt-2 flex justify-end">
                        <button
                          type="button"
                          disabled={busyId === item.id}
                          onClick={() => void onDelete(item)}
                          className="rounded-lg px-2 py-1 text-[11px] font-semibold text-[#9CA3AF] transition hover:bg-[#FAFAFC] hover:text-[#E11D48] disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function BellEmptyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 7H3s3 0 3-7" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}
