import { Suspense, type ReactNode } from "react";

import { AuthProvider } from "@/components/providers/auth-provider";
import { Navbar } from "@/components/Navbar";
import { MarketingPwaGuard } from "@/components/pwa/MarketingPwaGuard";

/** Marketing / landing pages — site chrome with Navbar. */
export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthProvider>
      <Suspense fallback={null}>
        <MarketingPwaGuard>
          <Navbar />
          <div>{children}</div>
        </MarketingPwaGuard>
      </Suspense>
    </AuthProvider>
  );
}
