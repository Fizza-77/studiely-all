"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { DataConsentGate } from "@/components/auth/data-consent-gate";
import { BrowserLink } from "@/components/pwa/BrowserLink";
import { useAuth } from "@/components/providers/auth-provider";
import { useStudentData } from "@/hooks/use-student-data";
import { EmptyState } from "@/components/ui/student-ui";
import { SUPPORT_SUBJECTS } from "@/lib/config/constants";
import {
  submitSupportRequest,
  type SupportSubject,
} from "@/lib/help/support-request";

const PINK = "#FF2D8A";
const PURPLE = "#4F35F2";
const LIME = "#E8FF2F";

export default function HelpPage() {
  const { phase, user, student } = useAuth();
  const { profile } = useStudentData();
  const isGuest = phase === "guest";

  const [name, setName] = useState(
    () => profile?.name || student?.name || "",
  );
  const [email, setEmail] = useState(
    () => profile?.email || user?.email || "",
  );
  const [subject, setSubject] = useState<SupportSubject>("General");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!user) return;
    setError(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setBusy(true);
    try {
      await submitSupportRequest({
        uid: user.uid,
        name,
        email,
        subject,
        message,
      });
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <DataConsentGate>
      <AppShell wide>
        <div className="mx-[0.7in] w-auto max-w-none">
          <div
            className="overflow-hidden rounded-[28px] border border-[#C4B5FD] shadow-[0_12px_32px_rgba(79,53,242,0.14)]"
            style={{
              background:
                "linear-gradient(135deg, #4F35F2 0%, #5B4BF0 45%, #7C6CF0 100%)",
            }}
          >
            <div className="px-5 py-7 sm:px-8 sm:py-9">
              <span className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
                <MailIcon />
              </span>
              <h1 className="font-heading text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-tight text-white">
                Message Studiely
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85 sm:text-[15px]">
                Tell us what you need help with. We read every request and reply
                by email — usually within 24 hours.
              </p>
            </div>
          </div>

          {isGuest || !user ? (
            <div className="mt-5 rounded-[24px] border border-[#E8E6F0] bg-white p-6 shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
              <EmptyState
                title="Sign in required"
                body="Support requests are tied to your Studiely account so we can help faster."
                action={
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white"
                    style={{ background: PURPLE }}
                  >
                    Sign in
                  </Link>
                }
              />
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              <div className="rounded-[24px] border border-[#E8E6F0] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:p-6">
                {done ? (
                  <div className="py-6 text-center">
                    <span
                      className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl text-white"
                      style={{ background: PURPLE }}
                    >
                      <CheckIcon />
                    </span>
                    <h2 className="font-heading text-lg font-extrabold text-[#111827]">
                      Message sent
                    </h2>
                    <p className="mx-auto mt-2 max-w-sm text-sm text-[#6B7280]">
                      Thanks — we&apos;ll get back to you by email at{" "}
                      <span className="font-semibold text-[#111827]">
                        {email.trim() || "your inbox"}
                      </span>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setDone(false);
                        setMessage("");
                      }}
                      className="mt-5 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold text-white"
                      style={{ background: PURPLE }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => void onSubmit(e)} className="space-y-4">
                    <div>
                      <h2 className="font-heading text-lg font-extrabold text-[#111827]">
                        Email the team
                      </h2>
                      <p className="mt-1 text-sm text-[#6B7280]">
                        We reply to the email you enter below.
                      </p>
                    </div>

                    {error ? (
                      <p className="rounded-xl bg-[#FEF2F2] px-3.5 py-2.5 text-sm text-[#B91C1C]">
                        {error}
                      </p>
                    ) : null}

                    <label className="block">
                      <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#6B7280] uppercase">
                        Name
                      </span>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={busy}
                        required
                        className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#4F35F2]"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#6B7280] uppercase">
                        Email
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={busy}
                        required
                        className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#4F35F2]"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#6B7280] uppercase">
                        Subject
                      </span>
                      <select
                        value={subject}
                        onChange={(e) =>
                          setSubject(e.target.value as SupportSubject)
                        }
                        disabled={busy}
                        className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#4F35F2]"
                      >
                        {SUPPORT_SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#6B7280] uppercase">
                        Message
                      </span>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        disabled={busy}
                        required
                        placeholder="How can we help?"
                        className="w-full resize-y rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#4F35F2]"
                      />
                    </label>

                    <button
                      type="submit"
                      disabled={busy}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-extrabold text-white transition hover:brightness-110 disabled:opacity-60"
                      style={{ background: PINK }}
                    >
                      <SendIcon />
                      {busy ? "Sending…" : "Send message"}
                    </button>
                  </form>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="/profile"
                  className="inline-flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-bold text-[#6B7280] transition hover:bg-[#FAFAFC]"
                >
                  ← Back to profile
                </Link>
                <BrowserLink
                  href="/faqs"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold text-[#1E1B4B]"
                  style={{ background: LIME }}
                >
                  Browse FAQ
                </BrowserLink>
              </div>
            </div>
          )}
        </div>
      </AppShell>
    </DataConsentGate>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 7.5 12 13l7.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
      <path
        d="M4 11.5 19.5 4.5 13 20l-2.2-6.8L4 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
