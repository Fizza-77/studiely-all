"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  isStandalonePwa,
  openInSystemBrowser,
  resolvePwaNavigation,
} from "@/lib/pwa";

/**
 * Inside the installed PWA, keep only web-app routes.
 * Browser-only routes (profile, help, …) open in the system browser;
 * anything else is sent to `/home`.
 */
export function PwaBrowserOnlyGuard() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (!isStandalonePwa()) return;

    const search = searchParams?.toString() ?? "";
    const action = resolvePwaNavigation(pathname, search);
    if (action.type === "stay") return;

    router.replace("/home");
    if (action.type === "browser") {
      window.setTimeout(() => {
        openInSystemBrowser(action.href);
      }, 0);
    }
  }, [pathname, searchParams, router]);

  return null;
}
