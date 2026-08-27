import { Suspense, type ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NylaFabLazy } from "@/components/NylaFabLazy";
import { MarketingPwaGuard } from "@/components/pwa/MarketingPwaGuard";

/** Marketing / landing pages — site chrome with Navbar + Footer.
 *  No AuthProvider here: Firebase Auth must not sit on the LCP critical path.
 *  Pricing wraps itself with MarketingAuthScope. */
export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <MarketingPwaGuard>
        <Navbar />
        <div>{children}</div>
        <Footer />
        <NylaFabLazy />
      </MarketingPwaGuard>
    </Suspense>
  );
}
