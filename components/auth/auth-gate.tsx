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
      <div
        className="fixed inset-0 z-[500] flex items-center justify-center bg-[#FFFBEF]"
        aria-busy="true"
        aria-label="Loading Studiely"
      >
        <style>{`
          @keyframes studiely-boot-logo {
            0%, 100% { transform: scale(1); opacity: 0.82; }
            50% { transform: scale(1.08); opacity: 1; }
          }
        `}</style>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-group.svg?v=blue"
          alt="Studiely"
          width={320}
          height={98}
          className="h-auto w-[min(78vw,22rem)] select-none sm:w-[24rem] md:w-[26rem]"
          style={{
            animation: "studiely-boot-logo 1.5s ease-in-out infinite",
          }}
          draggable={false}
        />
      </div>
    );
  }

  return <>{children}</>;
}
