import Link from "next/link";
import type { Metadata } from "next";

import { HOME_SHELL } from "@/lib/homeShell";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This Studiely page doesn’t exist — head home or open the study app.",
  robots: { index: false, follow: true },
};

const LIME = "#E8FF2F";
const INDIGO = "#4F35F2";
const PINK = "#FF2D8A";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100dvh] flex-1 flex-col overflow-hidden bg-[#FFFBEF]">
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

      <div className={`${HOME_SHELL} relative z-[1] flex flex-1 flex-col py-6`}>
        <Link
          href="/"
          className="inline-flex w-fit items-center transition-opacity hover:opacity-80"
          aria-label="Studiely home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-group.svg?v=blue"
            alt="Studiely"
            width={160}
            height={36}
            className="h-9 w-auto object-contain"
          />
        </Link>

        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center sm:py-20">
          <p
            className="font-heading text-[clamp(5.5rem,18vw,9rem)] font-extrabold leading-none tracking-[-0.06em]"
            style={{ color: INDIGO }}
            aria-hidden
          >
            404
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1E1B4B]">
            This page skipped class
          </h1>
          <p className="mt-4 max-w-md font-jakarta text-[15px] leading-relaxed text-[#5B5B6B] sm:text-base">
            The link may be outdated, or the page moved. Jump back to Studiely
            and keep studying.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="funky-button inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-bold text-[#1E1B4B] transition hover:brightness-105"
              style={{ background: LIME }}
            >
              Back to home
            </Link>
            <Link
              href="/home"
              className="funky-button inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-bold text-white transition hover:brightness-110"
              style={{ background: INDIGO }}
            >
              Open app
            </Link>
          </div>

          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-jakarta text-sm font-semibold text-[#4F35F2]"
            aria-label="Helpful links"
          >
            <Link href="/pricing" className="underline-offset-4 hover:underline">
              Pricing
            </Link>
            <Link href="/faqs" className="underline-offset-4 hover:underline">
              FAQs
            </Link>
            <Link href="/contact" className="underline-offset-4 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
