"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuth } from "@/components/providers/auth-provider";

const PUBLIC_AUTH_ROUTES = new Set([
  "/login",
  "/signup",
  "/signup/parental",
]);

/**
 * Student-app route gate only (used under app/(student)).
 * Does not wrap marketing pages — guests can browse the landing site freely.
 */
export function AuthGate({ children }: { children: ReactNode }) {
  const { phase } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (phase === "initializing") return;

    if (phase === "studentUnverified") {
      if (pathname !== "/verify-email") router.replace("/verify-email");
      return;
    }

    if (phase === "studentPendingParentConsent") {
      if (pathname !== "/parent-consent") router.replace("/parent-consent");
      return;
    }

    if (phase === "student") {
      if (
        PUBLIC_AUTH_ROUTES.has(pathname) ||
        pathname === "/verify-email" ||
        pathname === "/parent-consent"
      ) {
        router.replace("/home");
      }
      return;
    }

    if (phase === "guest") {
      if (pathname === "/verify-email" || pathname === "/parent-consent") {
        router.replace("/home");
      }
    }
  }, [phase, pathname, router]);

  if (phase === "initializing") {
    return (
      <div className="flex flex-1 items-center justify-center py-24">
        <div className="flex flex-col items-center gap-3">
          <div className="size-8 animate-spin rounded-full border-2 border-[var(--color-vivid-cyan)] border-t-transparent" />
          <p className="text-sm text-[var(--color-text-muted)]">Starting Studiely…</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
