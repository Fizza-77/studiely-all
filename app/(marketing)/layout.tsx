import { Suspense, type ReactNode } from "react";

import { AuthProvider } from "@/components/providers/auth-provider";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NylaFab } from "@/components/NylaFab";
import { MarketingPwaGuard } from "@/components/pwa/MarketingPwaGuard";

/** Marketing / landing pages — site chrome with Navbar + Footer. */
export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthProvider deferFirebase>
      <Suspense fallback={null}>
        <MarketingPwaGuard>
          <Navbar />
          <div>{children}</div>
          <Footer />
          <NylaFab />
        </MarketingPwaGuard>
      </Suspense>
    </AuthProvider>
  );
}
