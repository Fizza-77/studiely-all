"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import {
  createStripeProAccessCheckout,
  finalizeStripeProAccessCheckout,
  stripeCheckoutUrls,
  type PlanKey,
} from "@/lib/billing/stripe";

const PLAN_KEYS: PlanKey[] = [
  "monthly",
  "three_month",
  "six_month",
  "yearly",
];

/** Handles Stripe return finalize + `?plan=` auto-checkout on marketing /pricing. */
export function PricingCheckoutBridge() {
  const { phase, user } = useAuth();
  const search = useSearchParams();
  const router = useRouter();
  const [info, setInfo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const finalizeStarted = useRef(false);
  const planAutoStarted = useRef(false);

  useEffect(() => {
    if (search.get("stripe_cancel") === "1") {
      setInfo("Checkout cancelled — no charge was made.");
    }
  }, [search]);

  useEffect(() => {
    const stripeDone = search.get("stripe_sub_done") === "1";
    const sessionId = search.get("session_id");
    if (!stripeDone || !user || finalizeStarted.current) return;

    if (!sessionId) {
      finalizeStarted.current = true;
      setError(
        "Payment may have succeeded, but we could not confirm your session. Contact support@studiely.com if Pro is not active.",
      );
      setInfo(null);
      return;
    }

    finalizeStarted.current = true;
    setInfo("Confirming your Pro access…");
    setError(null);

    void (async () => {
      try {
        await finalizeStripeProAccessCheckout(sessionId);
        setInfo("Pro access is active for this billing period.");
        router.replace("/pricing");
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Could not confirm payment. If you were charged, contact support.",
        );
        setInfo(null);
      }
    })();
  }, [search, user, router]);

  useEffect(() => {
    const plan = search.get("plan");
    const canCheckout =
      Boolean(user) &&
      !user?.isAnonymous &&
      (phase === "student" || phase === "studentUnverified");
    if (planAutoStarted.current || !canCheckout || !plan) {
      return;
    }
    if (!PLAN_KEYS.includes(plan as PlanKey)) return;
    if (search.get("stripe_sub_done") === "1") return;
    planAutoStarted.current = true;
    setInfo("Opening Stripe checkout…");
    setError(null);

    void (async () => {
      try {
        const { successUrl, cancelUrl } = stripeCheckoutUrls(
          window.location.origin,
        );
        const { checkoutUrl } = await createStripeProAccessCheckout({
          planKey: plan as PlanKey,
          successUrl,
          cancelUrl,
        });
        if (!checkoutUrl) throw new Error("No Stripe checkout URL returned.");
        window.location.href = checkoutUrl;
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Checkout failed. Choose a plan below to try again.",
        );
        setInfo(null);
      }
    })();
  }, [phase, search, user]);

  if (!info && !error) return null;

  return (
    <div className="wrap pb-2 pt-1">
      {info ? (
        <p className="mx-auto mb-3 max-w-2xl rounded-2xl bg-[#ECEAFF] px-4 py-3 text-center text-sm font-medium text-[#4F35F2]">
          {info}
        </p>
      ) : null}
      {error ? (
        <p className="mx-auto mb-3 max-w-2xl rounded-2xl bg-[#FEF2F2] px-4 py-3 text-center text-sm font-medium text-[#B91C1C]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
