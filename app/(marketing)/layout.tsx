import { Suspense, type ReactNode } from "react";
import dynamic from "next/dynamic";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MarketingPwaGuard } from "@/components/pwa/MarketingPwaGuard";

/** Ask Nyla FAB — load after paint; keeps Firebase/FAQ out of the first JS. */
const NylaFab = dynamic(
  () => import("@/components/NylaFab").then((m) => m.NylaFab),
  { ssr: false, loading: () => null },
);

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
        <NylaFab />
      </MarketingPwaGuard>
    </Suspense>
  );
}
