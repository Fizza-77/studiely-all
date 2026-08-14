"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import { STUDIELY_APP } from "@/lib/appUrls";
import { loginWithGoogle, mapFirebaseError } from "@/lib/auth/service";
import { HOME_SHELL } from "@/lib/homeShell";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
}

function UserMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        fill="currentColor"
      />
      <path
        d="M4.5 20.1c.9-3.3 3.8-5.6 7.5-5.6s6.6 2.3 7.5 5.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const PricingHeroSection = () => {
  const { user, phase, refreshPhase } = useAuth();
  const router = useRouter();
  const [googleBusy, setGoogleBusy] = useState(false);
  const [googleError, setGoogleError] = useState<string | null>(null);

  const signedIn = Boolean(user) && phase !== "guest" && phase !== "initializing";

  async function onGoogleSignIn() {
    setGoogleError(null);
    setGoogleBusy(true);
    try {
      const user = await loginWithGoogle();
      // Redirect sign-in navigates away; only continue for popup flow.
      if (!user) return;
      await refreshPhase();
      router.refresh();
    } catch (err) {
      setGoogleError(mapFirebaseError(err));
    } finally {
      setGoogleBusy(false);
    }
  }

  return (
    <section
      aria-labelledby="pricing-page-heading"
      className="min-w-0 overflow-x-clip bg-bg-base pb-2 pt-2 sm:pb-3 sm:pt-3"
    >
      <div className={HOME_SHELL}>
        <div
          className="relative overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(79,53,242,0.28)] sm:rounded-[28px] md:rounded-[32px]"
          style={{
            background:
              "linear-gradient(118deg, #3F2AE8 0%, #4F35F2 42%, #6B3DF5 78%, #7A45F8 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -left-16 top-1/3 h-56 w-56 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #FF4D8D 0%, transparent 70%)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, #F5E6A3 0%, transparent 70%)" }}
            aria-hidden
          />
          <svg
            className="pointer-events-none absolute right-[8%] top-[18%] h-[58%] w-[42%] opacity-30"
            viewBox="0 0 400 220"
            fill="none"
            aria-hidden
          >
            <path
              d="M20 140C80 40 160 200 240 80C300 10 360 90 390 50"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-[1] grid items-center gap-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-4">
            <div className="flex max-w-[640px] flex-col justify-center px-5 pb-4 pt-6 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-12 lg:py-9">
              <span
                className="mb-3 inline-flex w-fit rounded-full px-3.5 py-1.5 font-jakarta text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#1E1B4B] sm:mb-4 sm:text-[11px]"
                style={{ backgroundColor: LIME }}
              >
                Plans &amp; Pricing
              </span>

              <h1
                id="pricing-page-heading"
                className="mb-3 font-heading text-[clamp(1.9rem,4.4vw,3.15rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:mb-3.5"
              >
                Studiely{" "}
                <span className="whitespace-nowrap" style={{ color: LIME }}>
                  Pricing
                </span>
              </h1>

              <p className="m-0 max-w-[520px] font-jakarta text-[13px] leading-[1.7] text-white/92 sm:text-[14px] md:text-[15px]">
                Studiely Pro subscriptions for the web app. Pay securely with
                PayPal. You must be signed in to your Studiely account to check
                out.
              </p>
            </div>

            <div className="relative flex items-end justify-center px-4 pb-5 pt-0 sm:px-6 sm:pb-6 lg:justify-end lg:px-8 lg:pb-7 lg:pt-4">
              <Image
                src="/pricing-hero.svg"
                alt="Studiely study tools — notes, flashcards, and practice tests"
                width={720}
                height={560}
                unoptimized
                priority
                className="h-auto w-full max-w-[min(100%,280px)] select-none object-contain drop-shadow-[0_12px_28px_rgba(20,10,80,0.35)] sm:max-w-[min(100%,340px)] lg:max-w-[min(100%,400px)]"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-[18px] border border-[#E8E7F2] bg-white px-4 py-3.5 shadow-[0_10px_28px_rgba(30,27,75,0.08)] sm:mt-4 sm:rounded-[22px] sm:px-5 sm:py-4 md:px-6">
          {signedIn ? (
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: BLUE }}
              >
                <UserMark />
              </span>
              <p className="m-0 font-jakarta text-[14px] font-semibold text-[#1E1B4B] sm:text-[15px]">
                Signed in
                {user?.email ? (
                  <>
                    {" "}
                    as{" "}
                    <span className="font-bold">{user.email}</span>
                  </>
                ) : null}
                . Choose a plan below to check out with PayPal.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: BLUE }}
                >
                  <UserMark />
                </span>
                <p className="m-0 font-jakarta text-[14px] font-semibold text-[#1E1B4B] sm:text-[15px]">
                  Sign in to purchase a plan:
                </p>
              </div>

              <div className="flex flex-col gap-2 xs:flex-row sm:flex-row sm:items-center sm:gap-2.5">
                <button
                  type="button"
                  disabled={googleBusy || phase === "initializing"}
                  onClick={() => void onGoogleSignIn()}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 font-jakarta text-[13px] font-bold text-[#1E1B4B] transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70 sm:h-10 sm:rounded-[12px] sm:text-[14px]"
                  style={{ backgroundColor: LIME }}
                >
                  <GoogleMark />
                  {googleBusy ? "Signing in…" : "Sign in with Google"}
                </button>
                <Link
                  href={`${STUDIELY_APP.login}?next=${encodeURIComponent("/pricing")}`}
                  className="inline-flex h-11 items-center justify-center rounded-xl border-2 px-4 font-jakarta text-[13px] font-bold transition-colors hover:bg-[#F5F3FF] sm:h-10 sm:rounded-[12px] sm:text-[14px]"
                  style={{ borderColor: BLUE, color: BLUE }}
                >
                  Open app sign-in
                </Link>
              </div>
            </div>
          )}

          {googleError ? (
            <p className="mt-3 m-0 font-jakarta text-[12px] font-medium text-[#B91C1C]">
              {googleError}
            </p>
          ) : null}
        </div>

        <p className="mx-auto mb-1 mt-4 max-w-3xl text-center font-jakarta text-[11px] leading-relaxed text-[#9A99A8] sm:mt-5 sm:text-[12px]">
          All prices in USD ($14.99/month). PayPal may show your local currency at
          checkout. Exam Practice add-on is $29.99 USD worldwide. Taxes may be
          added at checkout.
        </p>
      </div>
    </section>
  );
};
