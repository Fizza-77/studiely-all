"use client";

import { useEffect, useRef, useState } from "react";

import {
  clearAllStudentNotifications,
  deleteStudentNotification,
  markAllNotificationsRead,
  markNotificationRead,
  relativeNotificationTime,
  subscribeStudentNotifications,
  type StudentNotification,
} from "@/lib/student/notifications";

const PURPLE = "#4F35F2";
const PINK = "#FF2D8A";

type NotificationsBellProps = {
  uid: string;
};

export function NotificationsBell({ uid }: NotificationsBellProps) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<StudentNotification[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [clearing, setClearing] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const unreadCount = (items ?? []).filter((n) => !n.read).length;

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
    if (!open) return;

    void markAllNotificationsRead(uid).catch(() => {
      // keep panel usable
    });

    function onPointer(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, uid]);

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
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative flex size-9 items-center justify-center rounded-xl bg-white text-[#111827] shadow-sm transition hover:bg-white/90"
        aria-label={
          unreadCount > 0
            ? `Notifications, ${unreadCount} unread`
            : "Notifications"
        }
        aria-expanded={open}
        aria-haspopup="dialog"
        title="Notifications"
      >
        <BellIcon />
        {unreadCount > 0 ? (
          <span
            className="absolute right-1.5 top-1.5 size-2.5 rounded-full ring-2 ring-white"
            style={{ background: "#EF4444" }}
            aria-hidden
          />
        ) : null}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="Notifications"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-[450] flex max-h-[min(70vh,420px)] w-[min(92vw,340px)] flex-col overflow-hidden rounded-2xl border border-[#E8E6F0] bg-white shadow-[0_16px_40px_rgba(17,24,39,0.16)] sm:w-[360px]"
        >
          <div className="flex shrink-0 items-start justify-between gap-2 border-b border-[#F0EEF6] px-4 py-3">
            <div className="min-w-0">
              <p className="font-heading text-sm font-extrabold text-[#111827]">
                Notifications
              </p>
              <p className="mt-0.5 text-[11px] text-[#6B7280]">
                Updates, streak reminders, and tips
              </p>
            </div>
            {items && items.length > 0 ? (
              <button
                type="button"
                disabled={clearing}
                onClick={() => void onClearAll()}
                className="shrink-0 rounded-lg px-2 py-1 text-[11px] font-semibold transition hover:bg-[#FAFAFC] disabled:opacity-50"
                style={{ color: PINK }}
              >
                {clearing ? "Clearing…" : "Clear all"}
              </button>
            ) : null}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
            {error ? (
              <p className="rounded-xl bg-[#FEF2F2] px-3 py-2 text-xs text-[#B91C1C]">
                {error}
              </p>
            ) : null}

            {items === null ? (
              <p className="py-8 text-center text-sm text-[#6B7280]">Loading…</p>
            ) : items.length === 0 ? (
              <div className="flex flex-col items-center px-3 py-8 text-center">
                <span
                  className="mb-2 flex size-10 items-center justify-center rounded-xl text-white"
                  style={{ background: PURPLE }}
                  aria-hidden
                >
                  <BellIcon />
                </span>
                <p className="text-sm font-bold text-[#111827]">
                  You&apos;re all caught up
                </p>
              </div>
            ) : (
              <ul className="flex flex-col gap-2">
                {items.map((item) => {
                  const unread = !item.read;
                  return (
                    <li key={item.id}>
                      <div
                        className={`rounded-xl border px-3 py-2.5 ${
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
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-[13px] font-bold text-[#111827]">
                              {item.title || "Update"}
                            </p>
                            <span className="shrink-0 text-[10px] font-medium text-[#9CA3AF]">
                              {relativeNotificationTime(item.createdAt)}
                            </span>
                          </div>
                          {item.body ? (
                            <p className="mt-1 text-[11px] leading-relaxed text-[#6B7280]">
                              {item.body}
                            </p>
                          ) : null}
                        </button>
                        <div className="mt-1.5 flex justify-end">
                          <button
                            type="button"
                            disabled={busyId === item.id}
                            onClick={() => void onDelete(item)}
                            className="rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-[#9CA3AF] transition hover:bg-[#FAFAFC] hover:text-[#E11D48] disabled:opacity-50"
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
      ) : null}
    </div>
  );
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9a6 6 0 1 1 12 0c0 7 3 7 3 7H3s3 0 3-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 19a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
