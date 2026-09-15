"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import { STUDIELY_APP } from "@/lib/appUrls";
import {
  FALLBACK_QUOTE,
  createStripeProAccessCheckout,
  getWebProPricingQuote,
  stripeCheckoutUrls,
  type PlanKey,
  type PricingQuote,
} from "@/lib/billing/stripe";

const LIME = "#E8FF2F";
const INDIGO = "#4F35F2";
const PINK = "#FF2D8A";
const TEAL = "#00B09B";
const NAVY = "#181926";
const INDIGO_SOFT = "#ECEAFF";
const TEAL_SOFT = "#DFF6F2";
const PINK_SOFT = "#FFE8F2";
const NAVY_SOFT = "#EEF0F6";
const LIME_INK = "#1E1B4B";

const FREE_FEATURES = [
  "Summary Notes",
  "Mnemonics",
  "Flashcards",
  "Quizzes",
  "Exam-Style Questions",
  "Exam Focus",
  "Common Mistakes",
  "Worked Examples",
  "Nyla Tutor",
  "Australia curriculum family",
  "United Kingdom curriculum family",
  "Canada curriculum family",
  "IB curriculum family",
  "United States curriculum family",
  "Difficulty levels",
  "Export PDF & Word",
  "Study library",
  "Achievements & streaks",
] as const;

const FREE_PREVIEW_COUNT = 6;

const PAID_BULLETS = [
  "Every feature is on every plan.",
  "Longer plans cost less each month.",
  "Nothing else changes.",
] as const;

type PaidPlan = {
  name: string;
  planKey: PlanKey;
  generations: string;
  color: string;
  softBg: string;
  compareAt: (q: PricingQuote) => string;
  price: (q: PricingQuote) => string;
  discountLabel: string;
  cta: string;
  tip?: string;
  popular?: boolean;
};

const PAID_PLANS: PaidPlan[] = [
  {
    name: "Monthly",
    planKey: "monthly",
    generations: "100",
    color: NAVY,
    softBg: NAVY_SOFT,
    compareAt: () => "$14.99",
    price: () => "$9.99",
    discountLabel: "33% OFF",
    cta: "Choose Monthly",
  },
  {
    name: "3 Months",
    planKey: "three_month",
    generations: "300",
    color: INDIGO,
    softBg: INDIGO_SOFT,
    compareAt: () => "$44.97",
    price: () => "$26.99",
    discountLabel: "40% OFF",
    cta: "Choose 3 Months",
    tip: "Use your generations anytime across 3 months.",
  },
  {
    name: "6 Months",
    planKey: "six_month",
    generations: "600",
    color: TEAL,
    softBg: TEAL_SOFT,
    compareAt: () => "$89.94",
    price: () => "$49.99",
    discountLabel: "44% OFF",
    cta: "Choose 6 Months",
    tip: "Use your generations anytime across 6 months.",
    popular: true,
  },
  {
    name: "Annual",
    planKey: "yearly",
    generations: "1,200",
    color: PINK,
    softBg: PINK_SOFT,
    compareAt: () => "$179.88",
    price: () => "$89.99",
    discountLabel: "50% OFF",
    cta: "Choose Annual",
    tip: "Use your generations anytime across 12 months.",
  },
];

function BrandCheck({ color = TEAL }: { color?: string }) {
  return (
    <span
      className="mt-0.5 flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
        <path
          d="M2.5 6.2 4.8 8.5 9.5 3.5"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CalendarIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3.5V7M16 3.5V7M3.5 10h17" strokeLinecap="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
      style={{ backgroundColor: INDIGO }}
      aria-hidden
    >
      i
    </span>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 text-[#8B8A9A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}

interface HomePricingSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
  /** `page` = marketing /pricing (no large “Pricing” title — hero covers it). */
  variant?: "home" | "page";
}

export const HomePricingSection = ({
  sectionRef,
  variant = "home",
}: HomePricingSectionProps) => {
  const { user, phase } = useAuth();
  const [quote, setQuote] = useState<PricingQuote>(FALLBACK_QUOTE);
  const [busy, setBusy] = useState<PlanKey | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [freeExpanded, setFreeExpanded] = useState(false);
  const isPage = variant === "page";
  const canCheckout = phase === "student" && Boolean(user) && !user?.isAnonymous;

  useEffect(() => {
    void getWebProPricingQuote().then(setQuote);
  }, []);

  async function checkout(planKey: PlanKey) {
    setError(null);
    setInfo(null);

    if (!canCheckout) {
      window.location.href = `${STUDIELY_APP.login}?next=${encodeURIComponent(`/pricing?plan=${planKey}`)}`;
      return;
    }

    setBusy(planKey);
    try {
      const { successUrl, cancelUrl } = stripeCheckoutUrls(
        window.location.origin,
      );
      const { checkoutUrl } = await createStripeProAccessCheckout({
        planKey,
        successUrl,
        cancelUrl,
      });
      if (!checkoutUrl) throw new Error("No Stripe checkout URL returned.");
      window.location.href = checkoutUrl;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Checkout failed. Please try again or open Pricing after signing in.",
      );
      setBusy(null);
    }
  }

  const visibleFreeFeatures = freeExpanded
    ? FREE_FEATURES
    : FREE_FEATURES.slice(0, FREE_PREVIEW_COUNT);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      aria-labelledby={
        isPage ? "pricing-plans-heading" : "homepage-pricing-heading"
      }
      className="bg-bg-base pb-[clamp(1.75rem,4vw,3rem)] pt-0"
    >
      <div className="wrap">
        {isPage ? (
          <h2 id="pricing-plans-heading" className="sr-only">
            Choose a plan
          </h2>
        ) : (
          <>
            <h2
              id="homepage-pricing-heading"
              className="mb-2 text-center font-heading text-[clamp(2rem,3.8vw,3rem)] font-bold tracking-[-0.02em] text-[#1E1B4B]"
            >
              Pricing
            </h2>
            <p className="mx-auto mb-[clamp(1.15rem,2.25vw,1.65rem)] max-w-2xl text-center text-sm text-[#5B5A6A]">
              {quote.regionLine}
            </p>
          </>
        )}

        <div
          className="mb-5 flex items-start gap-2.5 rounded-xl border px-3.5 py-3 sm:mb-6 sm:px-4 sm:py-3.5"
          style={{
            backgroundColor: INDIGO_SOFT,
            borderColor: "#C7C0FF",
          }}
        >
          <InfoIcon />
          <p className="m-0 font-sans text-[12px] leading-relaxed sm:text-[13px]" style={{ color: NAVY }}>
            <strong className="font-semibold">
              Every new account receives 5 free generation credits — no credit
              card required.
            </strong>{" "}
            Each credit = one generation. Credits can be used across
            Studiely&apos;s study tools.
          </p>
        </div>

        {info ? (
          <p className="mx-auto mb-4 max-w-2xl rounded-2xl bg-[#ECEAFF] px-4 py-3 text-center text-sm font-medium text-[#4F35F2]">
            {info}
          </p>
        ) : null}
        {error ? (
          <p className="mx-auto mb-4 max-w-2xl rounded-2xl bg-[#FEF2F2] px-4 py-3 text-center text-sm font-medium text-[#B91C1C]">
            {error}
          </p>
        ) : null}

        <div className="mx-auto grid w-full grid-cols-1 items-stretch gap-4 pt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3">
          {/* Free — stretches to row height; feature list can expand */}
          <article
            aria-label="Free plan"
            className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_8px_24px_rgba(30,27,75,0.08)]"
            style={{ borderColor: `${TEAL}55` }}
          >
            <div
              className="px-4 py-4 text-center text-white"
              style={{ backgroundColor: TEAL }}
            >
              <p className="m-0 font-heading text-[2rem] font-extrabold leading-none tracking-[-0.03em]">
                5
              </p>
              <p className="m-0 mt-1 font-sans text-[12px] font-medium opacity-95">
                Generations
              </p>
            </div>

            <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
              <div className="text-center">
                <h3
                  className="m-0 font-heading text-[1.35rem] font-extrabold leading-none"
                  style={{ color: NAVY }}
                >
                  Free
                </h3>
                <p
                  className="mb-0 mt-1.5 font-sans text-[12px] font-medium"
                  style={{ color: TEAL }}
                >
                  Forever Free
                </p>
              </div>

              <div className="my-3 h-px w-full bg-[#E5E7EB]" />

              <p
                className="mb-2.5 text-center font-sans text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{ color: TEAL }}
              >
                Included on every plan
              </p>

              <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                {visibleFreeFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <BrandCheck />
                    <span className="font-sans text-[11px] leading-snug text-[#374151]">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {FREE_FEATURES.length > FREE_PREVIEW_COUNT ? (
                <button
                  type="button"
                  onClick={() => setFreeExpanded((v) => !v)}
                  className="mt-2 self-center font-sans text-[11px] font-semibold underline decoration-current/30 underline-offset-2 transition-opacity hover:opacity-80"
                  style={{ color: TEAL }}
                  aria-expanded={freeExpanded}
                >
                  {freeExpanded
                    ? "Show less"
                    : `Show all ${FREE_FEATURES.length} features`}
                </button>
              ) : null}

              {/* Grow so Free matches sibling card height when collapsed */}
              <div className="min-h-3 flex-1" aria-hidden />

              <Link
                href={STUDIELY_APP.signUp}
                className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-sans text-[13px] font-bold text-white transition-opacity hover:opacity-95"
                style={{ backgroundColor: TEAL }}
              >
                Get Started
              </Link>
              <p
                className="mb-0 mt-2.5 text-center font-sans text-[9px] font-bold uppercase tracking-[0.1em]"
                style={{ color: TEAL }}
              >
                Affordable education for all
              </p>
            </div>
          </article>

          {PAID_PLANS.map((plan) => {
            const isBusy = busy === plan.planKey;
            const ctaLabel = isBusy
              ? "Redirecting to Stripe…"
              : canCheckout
                ? plan.cta
                : "Sign in to buy";

            return (
              <article
                key={plan.planKey}
                aria-label={`${plan.name} plan`}
                className={`relative flex h-full min-h-0 flex-col rounded-2xl border bg-white shadow-[0_8px_24px_rgba(30,27,75,0.08)] ${
                  plan.popular ? "z-[1] overflow-visible" : "overflow-hidden"
                }`}
                style={{ borderColor: `${plan.color}55` }}
              >
                {plan.popular ? (
                  <span
                    className="absolute left-1/2 top-0 z-[3] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md px-2.5 py-1 font-sans text-[9px] font-extrabold uppercase tracking-[0.08em] shadow-sm"
                    style={{ backgroundColor: LIME, color: LIME_INK }}
                  >
                    Most Popular
                  </span>
                ) : null}

                <div
                  className={`px-4 py-4 text-center text-white ${
                    plan.popular ? "rounded-t-2xl" : ""
                  }`}
                  style={{ backgroundColor: plan.color }}
                >
                  <p className="m-0 font-heading text-[2rem] font-extrabold leading-none tracking-[-0.03em]">
                    {plan.generations}
                  </p>
                  <p className="m-0 mt-1 font-sans text-[12px] font-medium opacity-95">
                    Generations
                  </p>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
                  <div className="text-center">
                    <h3
                      className="m-0 font-heading text-[1.2rem] font-extrabold leading-none"
                      style={{ color: NAVY }}
                    >
                      {plan.name}
                    </h3>

                    <p className="mb-0 mt-2 font-sans text-[12px] text-[#9CA3AF] line-through">
                      {plan.compareAt(quote)} USD
                    </p>
                    <p className="mb-0 mt-0.5 flex items-baseline justify-center gap-1">
                      <span
                        className="font-heading text-[1.75rem] font-extrabold leading-none tracking-[-0.03em]"
                        style={{ color: NAVY }}
                      >
                        {plan.price(quote)}
                      </span>
                      <span className="font-sans text-[12px] font-semibold text-[#6B7280]">
                        USD
                      </span>
                    </p>

                    <span
                      className="mt-2 inline-flex rounded-full px-2.5 py-0.5 font-sans text-[10px] font-extrabold uppercase tracking-[0.06em] text-white"
                      style={{ backgroundColor: plan.color }}
                    >
                      {plan.discountLabel}
                    </span>
                  </div>

                  <ul className="m-0 mt-4 flex list-none flex-col gap-1.5 p-0">
                    {PAID_BULLETS.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <BrandCheck color={plan.color} />
                        <span className="font-sans text-[11px] leading-snug text-[#374151]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.tip ? (
                    <div
                      className="mt-3 flex items-start gap-2 rounded-lg px-2.5 py-2"
                      style={{ backgroundColor: plan.softBg }}
                    >
                      <CalendarIcon color={plan.color} />
                      <p
                        className="m-0 font-sans text-[11px] leading-snug"
                        style={{ color: plan.color }}
                      >
                        {plan.tip}
                      </p>
                    </div>
                  ) : null}

                  <div className="min-h-3 flex-1" aria-hidden />

                  <button
                    type="button"
                    disabled={isBusy || phase === "initializing"}
                    onClick={() => void checkout(plan.planKey)}
                    className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-sans text-[13px] font-bold text-white transition-opacity hover:opacity-95 disabled:cursor-wait disabled:opacity-70"
                    style={{ backgroundColor: plan.color }}
                  >
                    {ctaLabel}
                  </button>
                  <p
                    className="mb-0 mt-2.5 text-center font-sans text-[9px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: TEAL }}
                  >
                    Affordable education for all
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mb-0 mt-5 flex items-center justify-center gap-1.5 font-sans text-[12px] text-[#8B8A9A]">
          <LockIcon />
          All prices are in USD. Cancel anytime.
        </p>
      </div>
    </section>
  );
};
