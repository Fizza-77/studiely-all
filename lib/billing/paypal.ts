import { callFunction } from "@/lib/firebase/functions";

/** planKeys accepted by `createPayPalProAccessOrder` / `paypal_web_pro.js`. */
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

/** Fallback mirrors `USD_PRICING` in EduPlayce `paypal_web_pro.js`. */
export const FALLBACK_QUOTE: PricingQuote = {
  currencyCode: "USD",
  currencySymbol: "$",
  regionLine:
    "All prices in USD ($14.99/month). PayPal may show your local currency at checkout. Taxes may be added at checkout.",
  m: { price: "14.99" },
  q: { total: "44.97", perMonth: "14.99" },
  s: { total: "89.94", perMonth: "14.99" },
  y: { total: "179.88", perMonth: "14.99" },
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

export async function getWebProPricingQuote(): Promise<PricingQuote> {
  try {
    const q = await callFunction<Record<string, never>, PricingQuote>(
      "getWebProPricingQuote",
      {},
      { requireAuth: false },
    );
    if (q?.m?.price) return q;
  } catch {
    /* use fallback */
  }
  return FALLBACK_QUOTE;
}

export async function createPayPalProAccessOrder(input: {
  planKey: PlanKey;
  returnUrl: string;
  cancelUrl: string;
}): Promise<{ approvalUrl: string; orderId: string }> {
  return callFunction<
    { planKey: string; returnUrl: string; cancelUrl: string },
    { approvalUrl: string; orderId: string }
  >("createPayPalProAccessOrder", input);
}

export async function finalizePayPalProAccessOrder(
  orderId: string,
): Promise<{ success: boolean }> {
  return callFunction<{ orderId: string }, { success: boolean }>(
    "finalizePayPalProAccessOrder",
    { orderId },
  );
}

/** Same-origin return/cancel URLs for PayPal (must pass CF host allowlist). */
export function paypalCheckoutUrls(origin: string): {
  returnUrl: string;
  cancelUrl: string;
} {
  const base = origin.replace(/\/+$/, "");
  return {
    returnUrl: `${base}/pricing?paypal_sub_done=1`,
    cancelUrl: `${base}/pricing?paypal_cancel=1`,
  };
}
