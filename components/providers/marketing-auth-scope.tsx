"use client";

import type { ReactNode } from "react";
import { AuthProvider } from "@/components/providers/auth-provider";

/** Auth only where checkout / plan CTAs need the signed-in user. */
export function MarketingAuthScope({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
