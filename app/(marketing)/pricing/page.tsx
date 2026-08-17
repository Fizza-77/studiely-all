import type { Metadata } from "next";
import { Suspense } from "react";

import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { PricingHeroSection } from "@/sections/PricingHeroSection";
import { PricingCheckoutBridge } from "@/sections/PricingCheckoutBridge";
import { HomePricingSection } from "@/sections/HomePricingSection";
import { PricingExtrasSection } from "@/sections/PricingExtrasSection";

const pricingTitle = "Studiely Pricing — Plans & PayPal Checkout";
const pricingDescription =
  "Studiely Pro subscriptions for the web app. Compare Free and Pro plans and pay securely with PayPal.";

export const metadata: Metadata = {
  title: pricingTitle,
  description: pricingDescription,
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: pricingTitle,
    description: pricingDescription,
    url: `${SITE_URL}/pricing`,
    type: "website",
    siteName: "Studiely",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pricingTitle,
    description: pricingDescription,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema("Pricing", "/pricing");

export default function MarketingPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-bg-base font-jakarta">
        <PricingHeroSection />
        <Suspense fallback={null}>
          <PricingCheckoutBridge />
        </Suspense>
        <HomePricingSection variant="page" />
        <PricingExtrasSection />
      </main>
    </>
  );
}
