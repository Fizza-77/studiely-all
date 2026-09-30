"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { loadGoogleAnalytics } from "@/lib/gtag";

const STORAGE_KEY = "studiely_policies_consent_v2";

type Key = "aup" | "cookie" | "disclaimer";

const CookieIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
    <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 14v.01" />
  </svg>
);

const ClipboardIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
  </svg>
);

const ITEMS: {
  id: Key;
  href: string;
  title: string;
  blurb: string;
  color: string;
  iconColor: string;
  Icon: typeof CookieIcon;
}[] = [
  {
    id: "aup",
    href: "/acceptable-use",
    title: "Acceptable use",
    blurb: "Learning space only — be kind, stay safe, no abuse or misuse.",
    color: "#E8FF2F",
    iconColor: "#4F35F2",
    Icon: ClipboardIcon,
  },
  {
    id: "cookie",
    href: "/cookie-policy",
    title: "Cookies",
    blurb: "Session & essentials + anonymised analytics. No ads, no data sales.",
    color: "#FF36C6",
    iconColor: "#FFFFFF",
    Icon: CookieIcon,
  },
  {
    id: "disclaimer",
    href: "/disclaimer",
    title: "Disclaimer",
    blurb: "AI supports learning — not a substitute for school, teachers, or parents.",
    color: "#4F35F2",
    iconColor: "#E8FF2F",
    Icon: SparklesIcon,
  },
];

export function CookieConsentBanner() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [agree, setAgree] = useState<Record<Key, boolean>>({
    aup: false,
    cookie: false,
    disclaimer: false,
  });

  useEffect(() => {
    setMounted(true);
    try {
      if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) {
        return;
      }
      setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const allOn = useMemo(
    () => agree.aup && agree.cookie && agree.disclaimer,
    [agree]
  );

  const count = useMemo(
    () => [agree.aup, agree.cookie, agree.disclaimer].filter(Boolean).length,
    [agree]
  );

  const persistAndClose = (opts?: { enableAnalytics?: boolean }) => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    if (opts?.enableAnalytics ?? agree.cookie) {
      loadGoogleAnalytics();
    }
    setShow(false);
  };

  const acceptAll = () => {
    setAgree({ aup: true, cookie: true, disclaimer: true });
    persistAndClose({ enableAnalytics: true });
  };

  const toggle = (id: Key) => {
    setAgree((s) => ({ ...s, [id]: !s[id] }));
  };

  const continueIfComplete = () => {
    if (!allOn) return;
    persistAndClose();
  };

  if (!mounted || !show) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[500] p-2 sm:p-3 md:p-4"
      aria-live="polite"
    >
      <div
        className="pointer-events-auto mx-auto max-h-[calc(100vh-1rem)] w-full max-w-[1280px] overflow-y-auto rounded-[24px] border border-[#4F35F2]/10 bg-[#FFFBEF] shadow-[0_-10px_50px_rgba(30,27,75,0.2)] sm:max-h-[calc(100vh-1.5rem)] sm:rounded-[28px] md:rounded-[32px]"
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-consent-title"
      >
        <div
          className="h-2 w-full"
          style={{ backgroundColor: "#E8FF2F" }}
          aria-hidden
        />

        <div className="px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:pt-5 lg:px-7">
          <div className="grid gap-5 lg:grid-cols-[minmax(220px,0.72fr)_minmax(0,2.28fr)] lg:items-center lg:gap-7">
            <div className="flex items-center gap-3.5 sm:gap-4 lg:items-start">
              <span
                className="funky-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] text-white shadow-[0_8px_22px_rgba(79,53,242,0.2)] sm:h-14 sm:w-14 sm:rounded-[18px]"
                style={{ backgroundColor: "#4F35F2" }}
                aria-hidden
              >
                <CookieIcon className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <div className="min-w-0">
                <p
                  id="cookie-consent-title"
                  className="m-0 font-hanken text-[17px] font-extrabold leading-tight text-[#1E1B4B] sm:text-[19px]"
                >
                  Your choices, clearly explained
                </p>
                <p className="mb-0 mt-1 font-jakarta text-[11px] leading-relaxed text-[#5B5A6A] sm:text-[12px]">
                  Three quick checks before you continue with Studiely.
                </p>
                <div className="mt-2.5 flex max-w-[180px] gap-1.5" aria-hidden>
                  {([0, 1, 2] as const).map((i) => (
                    <span
                      key={i}
                      className="h-1.5 flex-1 rounded-full transition-colors"
                      style={{
                        backgroundColor: i < count ? "#4F35F2" : "#E2E2E8",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid min-w-0 gap-2.5 md:grid-cols-3">
              {ITEMS.map((item) => {
                const Icon = item.Icon;
                return (
                <div
                  key={item.id}
                  className="flex min-w-0 items-center gap-3 rounded-[18px] border border-[#ECEEF6] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(30,27,75,0.06)] sm:px-3.5"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-2.5">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px]"
                      style={{
                        backgroundColor: item.color,
                        color: item.iconColor,
                      }}
                      aria-hidden
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-1.5">
                        <span className="font-hanken text-[12px] font-extrabold text-[#1E1B4B] sm:text-[13px]">
                          {item.title}
                        </span>
                        <Link
                          href={item.href}
                          className="funky-link shrink-0 font-jakarta text-[9px] font-bold text-[#4F35F2] sm:text-[10px]"
                        >
                          Policy →
                        </Link>
                      </div>
                      <p className="mb-0 mt-0.5 line-clamp-2 font-jakarta text-[10px] leading-snug text-[#5B5A6A] sm:text-[11px]">
                        {item.blurb}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={agree[item.id]}
                    aria-label={`Toggle ${item.title} policy`}
                    onClick={() => toggle(item.id)}
                    className="relative h-7 w-12 shrink-0 rounded-full border-2 transition-colors"
                    style={{
                      backgroundColor: agree[item.id] ? "#4F35F2" : "#ECEEF6",
                      borderColor: agree[item.id] ? "#4F35F2" : "#D8D9E4",
                    }}
                  >
                    <span
                      className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                        agree[item.id] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-[#E2E2E8] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="order-2 m-0 text-center font-jakarta text-[10px] leading-relaxed text-[#6B6979] sm:order-1 sm:max-w-[620px] sm:text-left sm:text-[11px]">
              By continuing you agree to our{" "}
              <Link
                href="/terms-of-service"
                className="font-bold text-[#4F35F2] underline decoration-[#FF36C6] underline-offset-2"
              >
                Terms
              </Link>
              ,{" "}
              <Link
                href="/privacy-policy"
                className="font-bold text-[#4F35F2] underline decoration-[#FF36C6] underline-offset-2"
              >
                Privacy
              </Link>
              , and the policies above.{" "}
              <span className="text-[#5B5A6A]">
                Skyen Systems Pty Ltd · Australia
              </span>
            </p>
            <div className="order-1 flex w-full flex-col gap-2 sm:order-2 sm:w-auto sm:shrink-0 sm:flex-row">
              <button
                type="button"
                onClick={acceptAll}
                className="funky-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-jakarta text-[12px] font-extrabold text-[#1E1B4B] sm:text-[13px]"
                style={{ backgroundColor: "#E8FF2F" }}
              >
                Accept all
              </button>
              <button
                type="button"
                disabled={!allOn}
                onClick={continueIfComplete}
                className={`rounded-full border-2 px-5 py-2.5 font-jakarta text-[12px] font-extrabold transition-all sm:text-[13px] ${
                  allOn
                    ? "funky-button border-[#4F35F2] bg-white text-[#4F35F2]"
                    : "cursor-not-allowed border-[#D8D9E4] bg-[#F4F4F7] text-[#A1A1AE]"
                }`}
              >
                Continue with choices →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
