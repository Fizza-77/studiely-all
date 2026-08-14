"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  isStandalonePwa,
  openInSystemBrowser,
  resolvePwaNavigation,
} from "@/lib/pwa";

/**
 * Installed PWA must not show the marketing website.
 * Landing is always `/home`. Browser-only destinations open in the system browser.
 * Hides marketing chrome before paint when running as an installed app.
 */
export function MarketingPwaGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [allowPaint, setAllowPaint] = useState(true);

  useLayoutEffect(() => {
    if (!isStandalonePwa()) {
      setAllowPaint(true);
      return;
    }

    const search = searchParams?.toString() ?? "";
    const action = resolvePwaNavigation(pathname, search);

    if (action.type === "stay") {
      setAllowPaint(true);
      return;
    }

    setAllowPaint(false);
    router.replace("/home");
    if (action.type === "browser") {
      window.setTimeout(() => {
        openInSystemBrowser(action.href);
      }, 0);
    }
  }, [pathname, searchParams, router]);

  if (!allowPaint) return null;
  return <>{children}</>;
}
