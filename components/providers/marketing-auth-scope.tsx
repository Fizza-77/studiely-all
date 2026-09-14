"use client";

import type { ReactNode } from "react";
import { AuthProvider } from "@/components/providers/auth-provider";

/**
 * Marketing pages should preserve fast first paint.
 * Defer Firebase Auth until idle so the pricing page doesn’t block LCP.
 */
export function MarketingAuthScope({ children }: { children: ReactNode }) {
  return <AuthProvider deferFirebase>{children}</AuthProvider>;
}
