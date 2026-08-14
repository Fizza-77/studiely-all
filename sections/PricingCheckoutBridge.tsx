"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import {
  createPayPalProAccessOrder,
  finalizePayPalProAccessOrder,
  paypalCheckoutUrls,
  type PlanKey,
} from "@/lib/billing/paypal";

const PLAN_KEYS: PlanKey[] = [
  "monthly",
  "three_month",
  "six_month",
  "yearly",
];

/** Handles PayPal return finalize + `?plan=` auto-checkout on marketing /pricing. */
export function PricingCheckoutBridge() {
  const { user } = useAuth();
  const search = useSearchParams();
  const router = useRouter();
  const [info, setInfo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const finalizeStarted = useRef(false);
  const planAutoStarted = useRef(false);

  useEffect(() => {
    if (search.get("paypal_cancel") === "1") {
      setInfo("Checkout cancelled — no charge was made.");
    }
  }, [search]);

  useEffect(() => {
    const paypalDone = search.get("paypal_sub_done") === "1";
    const orderToken = search.get("token");
    if (!paypalDone || !orderToken || !user || finalizeStarted.current) return;
    finalizeStarted.current = true;
    setInfo("Confirming your Pro access…");
    setError(null);

    void (async () => {
      try {
        await finalizePayPalProAccessOrder(orderToken);
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
    if (planAutoStarted.current || !user || !plan) return;
    if (!PLAN_KEYS.includes(plan as PlanKey)) return;
    planAutoStarted.current = true;
    setInfo("Opening PayPal checkout…");
    setError(null);

    void (async () => {
      try {
        const { returnUrl, cancelUrl } = paypalCheckoutUrls(
          window.location.origin,
        );
        const { approvalUrl } = await createPayPalProAccessOrder({
          planKey: plan as PlanKey,
          returnUrl,
          cancelUrl,
        });
        if (!approvalUrl) throw new Error("No PayPal approval URL returned.");
        window.location.href = approvalUrl;
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Checkout failed. Choose a plan below to try again.",
        );
        setInfo(null);
      }
    })();
  }, [search, user]);

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
