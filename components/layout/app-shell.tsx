"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import { NotificationsBell } from "@/components/layout/notifications-bell";
import { BrowserLink } from "@/components/pwa/BrowserLink";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import { HOME_SHELL } from "@/lib/homeShell";
import { signOutUser } from "@/lib/auth/service";

const NAV = [
  { href: "/home", label: "Home" },
  { href: "/library", label: "My library" },
  { href: "/rewards", label: "Rewards" },
  { href: "/profile", label: "Profile" },
] as const;

/** Fixed rem sizes — never shrink with viewport. Rounded yellow bar (marketing parity). */
const NAV_BAR =
  "flex h-14 min-h-14 items-center justify-between gap-3 rounded-[24px] bg-[#E8FF2F] px-3 sm:px-4 md:rounded-[32px] md:px-5 lg:px-6";
const NAV_LOGO = "h-8 w-auto shrink-0 object-contain";
const NAV_LINK =
  "funky-link whitespace-nowrap px-2.5 py-1 text-sm font-semibold transition-colors";
const INSTALL_BTN =
  "funky-button inline-flex h-9 items-center justify-center rounded-full border border-[#1E1B4B]/25 bg-white/70 px-3.5 text-sm font-semibold text-[#1E1B4B] transition hover:bg-white";
const NAV_ICON_BTN =
  "flex size-9 shrink-0 items-center justify-center rounded-xl transition";
const NAV_SPACER =
  "h-[calc(3.5rem+0.25rem+env(safe-area-inset-top,0px))] shrink-0 md:h-[calc(3.5rem+0.375rem+env(safe-area-inset-top,0px))]";
const NAV_MENU_TOP =
  "fixed inset-x-0 top-[calc(3.5rem+0.25rem+env(safe-area-inset-top,0px))] z-[399] border-b border-border-default bg-white p-4 shadow-lg sm:p-6 md:top-[calc(3.5rem+0.375rem+env(safe-area-inset-top,0px))] lg:hidden";

export function AppShell({
  children,
  wide: _wide = false,
  contentTopPx,
}: {
  children: ReactNode;
  /** @deprecated Content now uses a shared fluid max width. */
  wide?: boolean;
  /** Gap between yellow navbar bottom and page content (px). Default matches py-6 / sm:py-8. */
  contentTopPx?: number;
}) {
  const pathname = usePathname();
  const { phase, user, student, error: authError } = useAuth();
  const isGuest = phase === "guest" && !user;
  const { install, showInstallUi } = usePwaInstall();

  const [open, setOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [installHint, setInstallHint] = useState<string | null>(null);
  const scrollIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setNavbarVisible(false);
      if (scrollIdleTimerRef.current) {
        clearTimeout(scrollIdleTimerRef.current);
      }
      scrollIdleTimerRef.current = setTimeout(() => {
        setNavbarVisible(true);
      }, 180);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollIdleTimerRef.current) {
        clearTimeout(scrollIdleTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!installHint) return;
    const t = setTimeout(() => setInstallHint(null), 6500);
    return () => clearTimeout(t);
  }, [installHint]);

  const showNavbar = navbarVisible || open;
  const initial = (student?.name || user?.email || "S")
    .trim()
    .charAt(0)
    .toUpperCase();

  function isActive(href: string) {
    return (
      pathname === href ||
      (href !== "/home" && pathname.startsWith(href))
    );
  }

  async function onInstallApp() {
    const result = await install();
    if (
      result === "accepted" ||
      result === "installed" ||
      result === "busy" ||
      result === "unavailable"
    ) {
      setInstallHint(null);
      return;
    }
    if (result === "ios") {
      setInstallHint(
        "On iPhone/iPad: tap Share → Add to Home Screen to install Studiely.",
      );
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#FFFBEF]">
      <header
        className={`fixed inset-x-0 top-0 z-[400] bg-[#FFFBEF] pt-[env(safe-area-inset-top,0px)] transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className={`${HOME_SHELL} pb-0 pt-1 md:pt-1.5`}>
          <div className={NAV_BAR}>
            <BrowserLink
              href="/"
              className="flex h-9 shrink-0 items-center text-[#4F35F2] transition-opacity hover:opacity-80"
              aria-label="Studiely website"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-group.svg?v=blue"
                alt="Studiely"
                width={140}
                height={32}
                className={NAV_LOGO}
              />
            </BrowserLink>

            <nav
              className="hidden items-center gap-1 lg:flex xl:gap-2"
              aria-label="Main"
            >
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${NAV_LINK} ${
                      active
                        ? "funky-link-active text-[#4F35F2]"
                        : "text-[#1E1B4B] hover:text-[#4F35F2]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              {showInstallUi ? (
                <button
                  type="button"
                  onClick={() => void onInstallApp()}
                  className={`${INSTALL_BTN} md:hidden`}
                >
                  Install
                </button>
              ) : null}

              {!isGuest && user ? (
                <div className="md:hidden">
                  <NotificationsBell uid={user.uid} />
                </div>
              ) : null}

              <div className="hidden items-center gap-2 md:flex">
                {showInstallUi ? (
                  <button
                    type="button"
                    onClick={() => void onInstallApp()}
                    className={INSTALL_BTN}
                  >
                    Install App
                  </button>
                ) : null}
                {isGuest ? (
                  <>
                    <Link
                      href="/login"
                      className="funky-link text-sm font-semibold text-[#1E1B4B] transition-colors hover:text-[#4F35F2]"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="funky-button inline-flex h-9 items-center justify-center rounded-full bg-[#4F35F2] px-4 text-sm font-semibold !text-white transition-opacity hover:opacity-90"
                    >
                      Start Free
                    </Link>
                  </>
                ) : (
                  <>
                    <BrowserLink
                      href="/pricing"
                      className={`${NAV_ICON_BTN} bg-[#FF2D8A] text-white hover:brightness-110`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/icons/crown.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                      />
                      <span className="sr-only">Upgrade</span>
                    </BrowserLink>
                    {user ? <NotificationsBell uid={user.uid} /> : null}
                    <button
                      type="button"
                      onClick={() => void signOutUser()}
                      className={`${NAV_ICON_BTN} bg-white text-[#111827] shadow-sm hover:bg-white/90`}
                      aria-label="Sign out"
                      title="Sign out"
                    >
                      <LogoutIcon />
                    </button>
                    <Link
                      href="/profile"
                      className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#3B2A9E] text-sm font-bold text-white ring-2 ring-white/70"
                      aria-label="Profile"
                    >
                      {initial}
                    </Link>
                  </>
                )}
              </div>

              <button
                type="button"
                className="flex size-9 shrink-0 flex-col items-center justify-center gap-[5px] border-none bg-transparent p-0 lg:hidden"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-[2px] w-5 bg-[#1E1B4B] transition-transform duration-250 ${
                      open && i === 0 ? "translate-y-[7px] rotate-45" : ""
                    } ${open && i === 2 ? "-translate-y-[7px] -rotate-45" : ""} ${
                      open && i === 1 ? "opacity-0" : "opacity-100"
                    }`}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>

        {installHint ? (
          <div className={`${HOME_SHELL} pt-2`}>
            <p
              role="status"
              className="rounded-2xl border border-[#E8E6F0] bg-white px-3.5 py-2.5 text-center text-xs font-medium text-[#1E1B4B] shadow-[0_8px_24px_rgba(17,24,39,0.08)] sm:text-sm"
            >
              {installHint}
            </p>
          </div>
        ) : null}
      </header>

      <div className={NAV_SPACER} aria-hidden />

      {open ? (
        <div
          className={`nav-menu-enter ${NAV_MENU_TOP}`}
          role="dialog"
          aria-label="Mobile navigation"
        >
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-border-lt px-3 py-3 text-base transition-colors last:border-b-0 ${
                  active
                    ? "bg-[#f4ffe6] font-semibold text-[#4F35F2]"
                    : "text-[#1E1B4B] hover:text-[#4F35F2]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {showInstallUi ? (
              <button
                type="button"
                onClick={() => {
                  void onInstallApp();
                  setOpen(false);
                }}
                className="funky-button inline-flex flex-1 items-center justify-center rounded-full border border-[#1E1B4B]/30 bg-[#E8FF2F] px-4 py-3 text-sm font-semibold text-[#1E1B4B]"
              >
                Install App
              </button>
            ) : null}
            {isGuest ? (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="funky-button inline-flex flex-1 items-center justify-center rounded-full border border-[#4F35F2] px-4 py-3 text-sm font-semibold text-[#4F35F2]"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="funky-button inline-flex flex-1 items-center justify-center rounded-full bg-[#4F35F2] px-4 py-3 text-sm font-semibold !text-white"
                >
                  Start Free
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/generate"
                  onClick={() => setOpen(false)}
                  className="funky-button inline-flex flex-1 items-center justify-center rounded-full border border-[#4F35F2] px-4 py-3 text-sm font-semibold text-[#4F35F2]"
                >
                  Create
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    void signOutUser();
                  }}
                  className="funky-button inline-flex flex-1 items-center justify-center rounded-full bg-[#4F35F2] px-4 py-3 text-sm font-semibold !text-white"
                >
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      ) : null}

      {authError ? (
        <div className="border-b border-amber-500/40 bg-amber-500/10 px-4 py-2 text-center text-sm text-amber-900 dark:text-amber-100">
          {authError}
        </div>
      ) : null}

      <div
        className={`mx-auto w-full max-w-[min(100%,2400px)] flex-1 px-4 pb-6 sm:px-6 sm:pb-8 md:px-[clamp(1.25rem,2.5vw,2.5rem)] xl:px-[clamp(1.5rem,3vw,3.5rem)] 2xl:px-[clamp(2rem,3.5vw,4.5rem)] ${
          contentTopPx == null ? "pt-6 sm:pt-8" : ""
        }`}
        style={
          contentTopPx != null ? { paddingTop: contentTopPx } : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}

function LogoutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 8l5 4-5 4M20 12H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
