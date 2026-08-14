"use client";

import { useEffect, useState } from "react";

const LIME = "#E8FF2F";
const INDIGO = "#4F35F2";
const PINK = "#FF2D8A";

/**
 * Full-screen offline experience when the device has no network.
 * Uses online/offline events (works in browser tabs and installed PWA).
 */
export function OfflineScreen() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const sync = () => setOffline(!navigator.onLine);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  if (!offline) return null;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="offline-title"
      aria-describedby="offline-desc"
      className="fixed inset-0 z-[9999] flex min-h-[100dvh] flex-col overflow-hidden bg-[#FFFBEF]"
    >
      <div
        className="pointer-events-none absolute -left-24 top-16 size-[28rem] rounded-full opacity-50 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${LIME} 0%, transparent 70%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 size-[24rem] rounded-full opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${INDIGO} 0%, transparent 70%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 size-[18rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${PINK} 0%, transparent 70%)`,
        }}
        aria-hidden
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[min(100%,2400px)] flex-1 flex-col px-5 py-6 sm:px-8">
        <div className="inline-flex w-fit items-center" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-group.svg?v=blue"
            alt=""
            width={160}
            height={36}
            className="h-9 w-auto object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center sm:py-20">
          <div
            className="mb-6 flex size-20 items-center justify-center rounded-[28px] sm:size-24"
            style={{ background: INDIGO }}
            aria-hidden
          >
            <WifiOffIcon />
          </div>

          <p
            className="font-heading text-[clamp(3rem,10vw,4.5rem)] font-extrabold leading-none tracking-[-0.05em]"
            style={{ color: INDIGO }}
            aria-hidden
          >
            Offline
          </p>
          <h1
            id="offline-title"
            className="mt-4 max-w-xl font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B]"
          >
            No internet connection
          </h1>
          <p
            id="offline-desc"
            className="mt-4 max-w-md font-jakarta text-[15px] leading-relaxed text-[#5B5B6B] sm:text-base"
          >
            Studiely needs a connection to load your notes, quizzes, and Nyla.
            Check Wi‑Fi or mobile data, then try again.
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="funky-button mt-9 inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-bold text-[#1E1B4B] transition hover:brightness-105"
            style={{ background: LIME }}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

function WifiOffIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-white"
    >
      <path
        d="M1 1l22 22"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
