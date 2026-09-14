import Link from "next/link";
import { STUDIELY_APP } from "@/lib/appUrls";
import { LEGAL_ROUTES, complianceLinkClass } from "@/lib/legalRoutes";
import type { FaqSection } from "./types";

const pricingLink = (
  <a
    href={STUDIELY_APP.pricing}
    className="text-teal hover:text-teal-dk underline underline-offset-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    Pricing page
  </a>
);

const PREMIUM_PLANS = [
  { plan: "Monthly", original: "$14.99", offer: "$9.99", discount: "33% off" },
  { plan: "3 Months", original: "$44.97", offer: "$26.99", discount: "40% off" },
  { plan: "6 Months", original: "$89.94", offer: "$49.99", discount: "44% off" },
  { plan: "Annual", original: "$179.88", offer: "$89.99", discount: "50% off" },
] as const;

function PremiumPricingTable() {
  return (
    <>
      <div className="faq-pricing-table-wrap overflow-x-auto my-3">
        <table className="faq-pricing-table w-full min-w-[min(100%,520px)] text-[13px] border-collapse">
          <thead>
            <tr className="border-b border-border-default bg-bg-base/80">
              <th className="py-2.5 pr-3 pl-2 font-semibold text-navy text-left">Plan</th>
              <th className="py-2.5 pr-3 font-semibold text-navy text-left">Original Price (USD)</th>
              <th className="py-2.5 pr-3 font-semibold text-navy text-left">Offer Price (USD)</th>
              <th className="py-2.5 pr-2 font-semibold text-navy text-left">Discount</th>
            </tr>
          </thead>
          <tbody>
            {PREMIUM_PLANS.map((row) => (
              <tr key={row.plan} className="border-b border-border-lt last:border-b-0">
                <td className="py-2.5 pr-3 pl-2 text-body font-medium">{row.plan}</td>
                <td className="py-2.5 pr-3 text-muted line-through">{row.original}</td>
                <td className="py-2.5 pr-3 text-navy font-semibold">{row.offer}</td>
                <td className="py-2.5 pr-2 text-teal-dk font-medium">{row.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[12px] text-muted">
        Prices are in US dollars. Applicable taxes, where required, are added at checkout. See the {pricingLink} for
        current pricing.
      </p>
    </>
  );
}

export const sectionF: FaqSection = {
  id: "faq-pricing",
  title: "F. Pricing, Plans & Subscriptions",
  intro:
    "Premium plan pricing (USD), discounts, cancellation, renewals and refunds.",
  items: [
    {
      question: "What plans does Studiely offer?",
      schemaText:
        "A free plan with 5 generation credits, forever free, no card required. Paid plans: Monthly (100 credits, $9.99), 3 Months (300 credits, $26.99), 6 Months (600 credits, $49.99), and Annual (1,200 credits, $89.99). Every feature is available on every paid plan.",
      answer: (
        <p>
          A free plan with 5 generation credits, forever free, no card required. Paid plans: Monthly (100 credits,
          $9.99), 3 Months (300 credits, $26.99), 6 Months (600 credits, $49.99), and Annual (1,200 credits, $89.99).
          Every feature is available on every paid plan.
        </p>
      ),
    },
    {
      question: "What are Studiely's Premium plan prices?",
      schemaText:
        "Studiely Premium plans (USD): Monthly $9.99 (was $14.99); 3 Months $26.99 (was $44.97); 6 Months $49.99 (was $89.94); Annual $89.99 (was $179.88). The Free plan is $0 with 5 generation credits.",
      answer: (
        <>
          <p>
            The table below shows Studiely Premium subscription plans with original and current offer prices in USD.
          </p>
          <PremiumPricingTable />
        </>
      ),
    },
    {
      question: "How much does Studiely cost?",
      schemaText:
        "Studiely offers a free plan and several Premium subscription options. The free plan includes five complete generations at no cost — no credit card required. Premium plans are available on monthly, three-month, six-month and annual billing cycles: Monthly $9.99 / 100 credits, 3 Months $26.99 / 300, 6 Months $49.99 / 600, Annual $89.99 / 1,200.",
      answer: (
        <>
          <p>
            Studiely offers a free plan and several Premium subscription options designed to suit different budgets
            and study needs.
          </p>
          <p>
            The free plan includes five complete generations at no cost — no credit card required. This gives
            students genuine access to the platform before committing to a subscription.
          </p>
          <p>
            Premium plans are available on monthly, three-month, six-month and annual billing cycles. Current USD
            pricing is listed in the pricing table in this section.
          </p>
          <p>
            To see current pricing, visit the {pricingLink} at studiely.com.
          </p>
        </>
      ),
    },
    {
      question: "Is there a discount for longer subscription plans?",
      schemaText:
        "Yes. All Premium plans currently include a discount off the original list price. Monthly offer $9.99 (was $14.99); 3 months $26.99 (was $44.97); 6 months $49.99 (was $89.94); Annual $89.99 (was $179.88). Longer plans also offer a lower effective monthly cost than paying month-to-month.",
      answer: (
        <>
          <p>
            Yes. All Premium plans currently include a discount compared to the original list price. See the pricing
            table above for original and offer prices in USD.
          </p>
          <p>
            Three-month, six-month and annual plans also offer a lower effective monthly cost than paying month-to-month.
            The annual plan typically provides the best value per month for students who plan to use Studiely
            consistently across the academic year.
          </p>
          <p>
            Current pricing and plan comparisons are shown on the {pricingLink}, where you can see all available
            options in your region.
          </p>
        </>
      ),
    },
    {
      question: "Can I cancel anytime?",
      schemaText:
        "Yes. Cancel any subscription from your account page. You keep access to your plan and any remaining credits until the end of the period you've already paid for.",
      answer: (
        <p>
          Yes. Cancel any subscription from your account page. You keep access to your plan and any remaining credits
          until the end of the period you&apos;ve already paid for.
        </p>
      ),
    },
    {
      question: "Can I cancel my subscription?",
      schemaText:
        "Yes. Cancel any subscription at any time from your account page, or by emailing support@studiely.com. If you subscribed through the iOS App Store or Google Play Store, manage and cancel through your device's subscription settings. Cancellation stops future billing; your plan and any remaining credits stay available until the end of the period already paid for.",
      answer: (
        <>
          <p>
            Yes. Cancel any subscription at any time from your account page, or by emailing{" "}
            <a href="mailto:support@studiely.com" className={complianceLinkClass}>
              support@studiely.com
            </a>
            .
          </p>
          <p>
            If you subscribed through the iOS App Store or Google Play Store, manage and cancel your subscription
            through your device&apos;s subscription settings. If you subscribed on the web, cancel through your account
            page on studiely.com.
          </p>
          <p>
            Cancellation stops future billing; your plan and any remaining credits stay available until the end of the
            period already paid for.
          </p>
        </>
      ),
    },
    {
      question: "Do subscriptions renew automatically?",
      schemaText:
        "Yes. Paid plans renew automatically at the end of each billing cycle, at the then-current price, unless cancelled before the renewal date. For plans with a term longer than one month, we email a reminder at least 7 days before renewal.",
      answer: (
        <>
          <p>
            Yes. Paid plans renew automatically at the end of each billing cycle, at the then-current price, unless
            cancelled before the renewal date.
          </p>
          <p>
            For plans with a term longer than one month, we will email a reminder at least 7 days before renewal,
            stating the renewal date, amount, and how to cancel.
          </p>
        </>
      ),
    },
    {
      question: "Do you offer refunds?",
      schemaText:
        "Every account gets 5 free credits so you can try Studiely before paying, so once a billing period has begun, that period's fee is not refundable. We may offer a partial refund or credit at our discretion — email support@studiely.com. This doesn't affect your rights under the Australian Consumer Law.",
      answer: (
        <p>
          Every account gets 5 free credits so you can try Studiely before paying, so once a billing period has begun,
          that period&apos;s fee is not refundable. We may offer a partial refund or credit at our discretion — email{" "}
          <a href="mailto:support@studiely.com" className={complianceLinkClass}>
            support@studiely.com
          </a>
          . This doesn&apos;t affect your rights under the Australian Consumer Law. Full detail is in our{" "}
          <Link href={LEGAL_ROUTES.refundPaymentsPolicy} className={complianceLinkClass}>
            Refund &amp; Payments Policy
          </Link>
          .
        </p>
      ),
    },
    {
      question: "I subscribed through the app — can I get a refund here?",
      schemaText:
        "No. Purchases made inside our iOS or Android app are billed by Apple or Google, and refunds for those are handled entirely by them, not by us.",
      answer: (
        <p>
          No. Purchases made inside our iOS or Android app are billed by Apple or Google, and refunds for those are
          handled entirely by them, not by us. See our{" "}
          <Link href={LEGAL_ROUTES.refundPaymentsPolicy} className={complianceLinkClass}>
            Refund &amp; Payments Policy
          </Link>
          .
        </p>
      ),
    },
    {
      question: "What is Studiely's refund policy?",
      schemaText:
        "Website purchases: once a billing period has begun, that period's fee is not refundable, though we may offer a partial refund or credit at our discretion. This does not limit your rights under the Australian Consumer Law. App Store and Google Play purchases are refunded only by Apple or Google. Full terms are in the Refund & Payments Policy.",
      answer: (
        <>
          <p>
            Website subscriptions purchased on studiely.com are covered by our{" "}
            <Link href={LEGAL_ROUTES.refundPaymentsPolicy} className={complianceLinkClass}>
              Refund &amp; Payments Policy
            </Link>
            . Every new account receives 5 free generation credits with no card required. Once a billing period has
            begun, the fee for that period is not refundable, though we may offer a partial refund or account credit at
            our discretion. Contact{" "}
            <a href="mailto:support@studiely.com" className={complianceLinkClass}>
              support@studiely.com
            </a>
            . This does not limit your rights under the Australian Consumer Law.
          </p>
          <p>Purchases made inside our iOS or Android apps are billed by Apple or Google:</p>
          <ul>
            <li>
              <strong className="text-navy font-semibold">Apple App Store:</strong> Refund requests are submitted
              directly to Apple through the{" "}
              <a
                href="https://support.apple.com/en-us/HT204084"
                className={complianceLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store&apos;s standard refund process
              </a>
            </li>
            <li>
              <strong className="text-navy font-semibold">Google Play Store:</strong> Refund requests are submitted
              through{" "}
              <a
                href="https://support.google.com/googleplay/answer/2479637"
                className={complianceLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Play Store refund policy
              </a>
            </li>
          </ul>
        </>
      ),
    },
  ],
};
