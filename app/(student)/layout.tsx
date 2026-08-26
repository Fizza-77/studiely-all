import { AuthProvider } from "@/components/providers/auth-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AuthGate } from "@/components/auth/auth-gate";
import { PwaBrowserOnlyGuard } from "@/components/pwa/PwaBrowserOnlyGuard";
import { Suspense } from "react";

import "../student-globals.css";

/** Student routes need request/auth context — do not statically prerender. */
export const dynamic = "force-dynamic";

/**
 * Student web app shell (login, home, generate, …).
 * Fonts come from root layout (Inter + Montserrat) so marketing + app match.
 * No marketing Navbar — app has its own AppShell.
 */
export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="student-app flex min-h-full flex-1 flex-col antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-lime)] focus:px-4 focus:py-2 focus:font-bold focus:text-[var(--color-lime-ink)]"
      >
        Skip to content
      </a>
      <ThemeProvider>
        <AuthProvider>
          <AuthGate>
            <Suspense fallback={null}>
              <PwaBrowserOnlyGuard />
            </Suspense>
            <div id="main-content" className="flex min-h-full flex-1 flex-col">
              {children}
            </div>
          </AuthGate>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}
