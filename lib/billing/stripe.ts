import { callFunction } from "@/lib/firebase/functions";

/** planKeys accepted by Stripe Pro checkout / EduPlayce `paypal_web_pro.js`. */
export type PlanKey = "monthly" | "three_month" | "six_month" | "yearly";

export type PricingQuote = {
  currencyCode: string;
  currencySymbol: string;
  regionLine: string;
  m: { price: string };
  q: { total: string; perMonth: string };
  s: { total: string; perMonth: string };
  y: { total: string; perMonth: string };
};

/** Fallback mirrors EduPlayce `USD_PRICING` in `paypal_web_pro.js`. */
export const FALLBACK_QUOTE: PricingQuote = {
  currencyCode: "USD",
  currencySymbol: "$",
  regionLine:
    "All prices in USD ($9.99/month). Stripe may show your local currency at checkout. Taxes may be added at checkout.",
  m: { price: "9.99" },
  q: { total: "26.99", perMonth: "9.00" },
  s: { total: "49.99", perMonth: "8.33" },
  y: { total: "89.99", perMonth: "7.50" },
};

export const PLANS: {
  key: PlanKey;
  label: string;
  priceFrom: (q: PricingQuote) => string;
  hintFrom: (q: PricingQuote) => string;
  highlight?: boolean;
}[] = [
  {
    key: "monthly",
    label: "Monthly",
    priceFrom: (q) => `${q.currencySymbol}${q.m.price}`,
    hintFrom: () => "One payment · 30 days of Pro",
  },
  {
    key: "three_month",
    label: "3 months",
    priceFrom: (q) => `${q.currencySymbol}${q.q.total}`,
    hintFrom: (q) =>
      `${q.currencySymbol}${q.q.perMonth}/mo · billed every 3 months`,
  },
  {
    key: "six_month",
    label: "6 months",
    priceFrom: (q) => `${q.currencySymbol}${q.s.total}`,
    hintFrom: (q) =>
      `${q.currencySymbol}${q.s.perMonth}/mo · billed every 6 months`,
  },
  {
    key: "yearly",
    label: "Yearly",
    priceFrom: (q) => `${q.currencySymbol}${q.y.total}`,
    hintFrom: (q) =>
      `${q.currencySymbol}${q.y.perMonth}/mo · one annual payment`,
    highlight: true,
  },
];

function withStripeRegionLine(q: PricingQuote): PricingQuote {
  return {
    ...q,
    regionLine: FALLBACK_QUOTE.regionLine,
  };
}

export async function getWebProPricingQuote(): Promise<PricingQuote> {
  try {
    const q = await callFunction<Record<string, never>, PricingQuote>(
      "getWebProPricingQuote",
      {},
      { requireAuth: false },
    );
    if (q?.m?.price) return withStripeRegionLine(q);
  } catch {
    /* use fallback */
  }
  return FALLBACK_QUOTE;
}

export async function createStripeProAccessCheckout(input: {
  planKey: PlanKey;
  successUrl: string;
  cancelUrl: string;
}): Promise<{ checkoutUrl: string; sessionId?: string }> {
  const result = await callFunction<
    {
      planKey: string;
      successUrl: string;
      returnUrl: string;
      cancelUrl: string;
    },
    {
      checkoutUrl?: string;
      approvalUrl?: string;
      url?: string;
      sessionId?: string;
      orderId?: string;
    }
  >("createPayPalProAccessOrder", {
    planKey: input.planKey,
    successUrl: input.successUrl,
    returnUrl: input.successUrl,
    cancelUrl: input.cancelUrl,
  });
  // Redirect only needs a hosted Checkout URL. sessionId is optional here —
  // Stripe returns it on success_url via {CHECKOUT_SESSION_ID}.
  const checkoutUrl =
    result.checkoutUrl || result.approvalUrl || result.url || "";
  if (!checkoutUrl) {
    throw new Error("No Stripe checkout URL returned.");
  }
  const sessionId = result.sessionId || result.orderId || undefined;
  return { checkoutUrl, sessionId };
}

export async function finalizeStripeProAccessCheckout(
  sessionId: string,
): Promise<{ success: boolean }> {
  return callFunction<
    { sessionId: string; orderId: string },
    { success: boolean }
  >("finalizePayPalProAccessOrder", { sessionId, orderId: sessionId });
}

/** Same-origin return/cancel URLs for Stripe Checkout (must pass CF host allowlist). */
export function stripeCheckoutUrls(origin: string): {
  successUrl: string;
  cancelUrl: string;
} {
  const base = origin.replace(/\/+$/, "");
  // Literal {CHECKOUT_SESSION_ID} — Stripe replaces it after payment.
  return {
    successUrl: `${base}/pricing?stripe_sub_done=1&session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${base}/pricing?stripe_cancel=1`,
  };
}
