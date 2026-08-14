"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import { STUDIELY_APP } from "@/lib/appUrls";
import {
  FALLBACK_QUOTE,
  createPayPalProAccessOrder,
  getWebProPricingQuote,
  paypalCheckoutUrls,
  type PlanKey,
  type PricingQuote,
} from "@/lib/billing/paypal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF2D8A";
const TITLE_BLUE = "#4F35F2";

type Feature = {
  text: string;
  highlight?: boolean;
};

type MarketingPlan = {
  name: string;
  planKey?: PlanKey;
  priceFrom: (q: PricingQuote) => string;
  priceSuffix?: string;
  cadFrom: (q: PricingQuote) => string;
  feats: Feature[];
  cta: string;
  fine: string;
  badge?: { label: string; bg: string; color: string };
  featured?: boolean;
  free?: boolean;
};

const PLANS: MarketingPlan[] = [
  {
    name: "Free",
    free: true,
    priceFrom: () => "$0",
    cadFrom: () => "Forever free",
    feats: [
      { text: "5 total generations", highlight: true },
      { text: "Notes (5 only)" },
      { text: "Flashcards (5 only)" },
      { text: "Quizzes (5 only)" },
      { text: "Exam Qs (5 only)" },
      { text: "Export PDF / Word" },
      { text: "Nyla Priority" },
      { text: "Study Streaks" },
    ],
    cta: "Get Started",
    fine: "After 5 gens, upgrade.",
  },
  {
    name: "Monthly",
    planKey: "monthly",
    priceFrom: (q) => `${q.currencySymbol}${q.m.price}`,
    priceSuffix: "/mo",
    cadFrom: () => "One payment per month of access",
    feats: [
      { text: "Total 100 generations for 1 month", highlight: true },
      { text: "Unlimited all tools" },
      { text: "Export PDF & Word" },
      { text: "Offline Access" },
      { text: "Nyla Priority" },
      { text: "Learning Analytics" },
      { text: "Study Streaks" },
    ],
    cta: "Choose Monthly",
    fine: "Cancel anytime.",
  },
  {
    name: "3 Months",
    planKey: "three_month",
    priceFrom: (q) => `${q.currencySymbol}${q.q.total}`,
    priceSuffix: " total",
    cadFrom: (q) =>
      `${q.currencySymbol}${q.q.perMonth} ${q.currencyCode}/mo · one payment per 3 months of access`,
    feats: [
      { text: "Total 300 generations for 3 months", highlight: true },
      { text: "Everything in Monthly" },
      { text: "Unlimited all tools" },
      { text: "Export PDF & Word" },
      { text: "Offline Access" },
      { text: "Nyla Priority" },
      { text: "Analytics" },
    ],
    cta: "Choose 3 Months",
    fine: "Cancel anytime.",
  },
  {
    name: "6 Months",
    planKey: "six_month",
    priceFrom: (q) => `${q.currencySymbol}${q.s.total}`,
    priceSuffix: " total",
    cadFrom: (q) =>
      `${q.currencySymbol}${q.s.perMonth} ${q.currencyCode}/mo · one payment per 6 months of access`,
    feats: [
      { text: "Total 600 generations for 6 months", highlight: true },
      { text: "Everything in Monthly" },
      { text: "Unlimited all tools" },
      { text: "Export PDF & Word" },
      { text: "Offline Access" },
      { text: "Nyla Priority" },
      { text: "Analytics" },
    ],
    cta: "Choose 6 Months",
    fine: "Cancel anytime.",
    badge: { label: "POPULAR", bg: BLUE, color: "#FFFFFF" },
  },
  {
    name: "Annual",
    planKey: "yearly",
    priceFrom: (q) => `${q.currencySymbol}${q.y.total}`,
    priceSuffix: " total",
    cadFrom: (q) =>
      `${q.currencySymbol}${q.y.perMonth} ${q.currencyCode}/mo · One annual payment`,
    feats: [
      { text: "Total 1200 generations for 12 months", highlight: true },
      { text: "Everything in Monthly" },
      { text: "Unlimited all tools" },
      { text: "Export PDF & Word" },
      { text: "Offline Access" },
      { text: "Nyla Priority" },
      { text: "Learning Analytics" },
      { text: "Study Streaks" },
    ],
    cta: "Choose Annual",
    fine: "Cancel anytime.",
    badge: { label: "BEST VALUE", bg: PINK, color: "#FFFFFF" },
    featured: true,
  },
];

const LimeCheck = () => (
  <span
    className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
    style={{ backgroundColor: LIME }}
    aria-hidden
  >
    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
      <path
        d="M2.5 6.2 4.8 8.5 9.5 3.5"
        stroke="#1E1B4B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const outlineBtnClass =
  "mt-auto inline-flex w-full items-center justify-center rounded-full border-2 bg-white px-4 py-2.5 font-sans text-[13px] font-bold transition-colors hover:bg-[#F5F3FF] disabled:cursor-wait disabled:opacity-70";

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
  const isPage = variant === "page";

  useEffect(() => {
    void getWebProPricingQuote().then(setQuote);
  }, []);

  async function checkout(planKey: PlanKey) {
    setError(null);
    setInfo(null);

    if (!user) {
      window.location.href = `${STUDIELY_APP.login}?next=${encodeURIComponent(`/pricing?plan=${planKey}`)}`;
      return;
    }

    setBusy(planKey);
    try {
      const { returnUrl, cancelUrl } = paypalCheckoutUrls(
        window.location.origin,
      );
      const { approvalUrl } = await createPayPalProAccessOrder({
        planKey,
        returnUrl,
        cancelUrl,
      });
      if (!approvalUrl) throw new Error("No PayPal approval URL returned.");
      window.location.href = approvalUrl;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Checkout failed. Please try again or open Pricing after signing in.",
      );
      setBusy(null);
    }
  }

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

        <div className="mx-auto grid w-full max-w-none grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3.5">
          {PLANS.map((plan) => {
            const featured = Boolean(plan.featured);
            const price = plan.priceFrom(quote);
            const cad = plan.cadFrom(quote);
            const isBusy = plan.planKey ? busy === plan.planKey : false;
            const ctaLabel = isBusy
              ? "Redirecting to PayPal…"
              : user || plan.free
                ? plan.cta
                : "Sign in to buy";

            return (
              <div
                key={plan.name}
                role="article"
                aria-label={`${plan.name} plan`}
                className={`relative flex h-full flex-col rounded-[28px] px-4 py-5 shadow-[0_12px_28px_rgba(30,27,75,0.1)] transition-[translate,box-shadow] duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(30,27,75,0.16)] motion-reduce:transition-none motion-reduce:hover:translate-none sm:rounded-[32px] sm:px-5 sm:py-6 ${
                  featured ? "" : "border border-[#ECECF2] bg-white"
                }`}
                style={
                  featured
                    ? {
                        background:
                          "linear-gradient(165deg, #3B5BDB 0%, #4F35F2 48%, #7B3FF0 100%)",
                      }
                    : undefined
                }
              >
                {plan.badge ? (
                  <span
                    className="absolute right-3 top-0 z-[3] -translate-y-1/2 rounded-full px-3 py-1 font-sans text-[9px] font-extrabold uppercase tracking-[0.1em] shadow-[0_4px_12px_rgba(30,27,75,0.18)]"
                    style={{
                      backgroundColor: plan.badge.bg,
                      color: plan.badge.color,
                    }}
                  >
                    {plan.badge.label}
                  </span>
                ) : null}

                <div className="relative z-[2] mb-4 flex shrink-0 flex-col">
                  <h3
                    className="mb-3 font-sans text-[1.25rem] font-extrabold leading-none sm:text-[1.35rem]"
                    style={{ color: featured ? "#FFFFFF" : TITLE_BLUE }}
                  >
                    {plan.name}
                  </h3>

                  <div className="mb-1.5 flex flex-wrap items-baseline gap-x-1">
                    <span
                      className={`font-heading text-[clamp(1.75rem,2.2vw,2.15rem)] font-extrabold leading-none tracking-[-0.03em] ${
                        featured ? "text-white" : "text-[#1E1B4B]"
                      }`}
                    >
                      {price}
                    </span>
                    {plan.priceSuffix ? (
                      <span
                        className={`font-heading text-[clamp(1rem,1.35vw,1.2rem)] font-bold leading-none tracking-[-0.02em] ${
                          featured ? "text-white" : "text-[#1E1B4B]"
                        }`}
                      >
                        {plan.priceSuffix}
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={`min-h-[2.4rem] font-sans text-[11px] leading-snug ${
                      featured ? "text-white/75" : "text-[#8B8A9A]"
                    }`}
                  >
                    {cad}
                  </p>
                </div>

                <ul className="m-0 mb-5 flex list-none flex-col gap-2.5 p-0">
                  {plan.feats.map((feat) => (
                    <li key={feat.text} className="flex items-start gap-2">
                      <LimeCheck />
                      <span
                        className={`font-sans text-[12px] leading-snug ${
                          featured
                            ? feat.highlight
                              ? "font-semibold text-[#E8FF2F]"
                              : "text-white"
                            : feat.highlight
                              ? "font-semibold text-[#4F35F2]"
                              : "text-[#5B5A6A]"
                        }`}
                      >
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.free ? (
                  <Link
                    href={STUDIELY_APP.signUp}
                    className={outlineBtnClass}
                    style={{ borderColor: BLUE, color: BLUE }}
                  >
                    {plan.cta}
                  </Link>
                ) : featured ? (
                  <button
                    type="button"
                    disabled={isBusy || phase === "initializing"}
                    onClick={() => {
                      if (plan.planKey) void checkout(plan.planKey);
                    }}
                    className="mt-auto inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 font-sans text-[13px] font-extrabold text-[#1E1B4B] shadow-[0_0_24px_rgba(232,255,47,0.55)] transition-opacity hover:opacity-95 disabled:cursor-wait disabled:opacity-70"
                    style={{ backgroundColor: LIME }}
                  >
                    {ctaLabel}
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={isBusy || phase === "initializing"}
                    onClick={() => {
                      if (plan.planKey) void checkout(plan.planKey);
                    }}
                    className={outlineBtnClass}
                    style={{ borderColor: BLUE, color: BLUE }}
                  >
                    {ctaLabel}
                  </button>
                )}

                <span
                  className={`mt-2.5 block text-center font-sans text-[10px] ${
                    featured ? "text-white/55" : "text-[#A8A8B5]"
                  }`}
                >
                  {plan.fine}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
