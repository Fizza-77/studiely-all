"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { STUDIELY_APP } from "@/lib/appUrls";
import { HOME_SHELL } from "@/lib/homeShell";
import { usePwaInstall } from "@/hooks/use-pwa-install";

interface NavbarProps {
  visibleSections?: string[];
}

export const Navbar = ({ visibleSections: _visibleSections = [] }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [installHint, setInstallHint] = useState<string | null>(null);
  const scrollIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const { install, showInstallUi } = usePwaInstall();

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
    if (!installHint) return;
    const t = setTimeout(() => setInstallHint(null), 6500);
    return () => clearTimeout(t);
  }, [installHint]);

  const isLinkActive = (href: string) => {
    const path = href.startsWith("http") ? href : href.split("?")[0].split("#")[0];
    if (href.includes("#")) {
      return activeLink === href || (pathname === "/" && href === "/#curriculum" && false);
    }
    return pathname === path || activeLink === href;
  };

  const links = [
    ["Home", "/"],
    ["Curriculum", "/curriculum"],
    ["Pricing", "/pricing"],
    ["FAQs", "/faqs"],
    ["Blogs", "/blogs"],
    ["Nyla AI", "/nyla"],
    ["Contact Us", "/contact"],
  ] as const;

  const showNavbar = navbarVisible || open;

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

  const installButtonClass =
    "funky-button inline-flex h-9 items-center justify-center rounded-full bg-[#FF2D8A] px-4 text-sm font-semibold !text-white transition hover:brightness-110";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[400] transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className={`${HOME_SHELL} pb-0 pt-1 md:pt-1.5`}>
          <div className="flex h-14 min-h-14 items-center justify-between gap-3 rounded-[24px] bg-[#E8FF2F] px-3 sm:px-4 md:rounded-[32px] md:px-5 lg:px-6">
            <Link
              href="/"
              className="flex h-9 shrink-0 items-center text-[#4F35F2] transition-opacity hover:opacity-80"
              aria-label="Studiely website"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo; avoid Next Image caching stale fill */}
              <img
                src="/logo-group.svg?v=blue"
                alt="Studiely"
                width={140}
                height={32}
                className="h-8 w-auto shrink-0 object-contain"
              />
            </Link>

            <nav
              className="hidden items-center gap-1 lg:flex xl:gap-2"
              aria-label="Main"
            >
              {links.map(([label, href]) => {
                const active =
                  label === "Home"
                    ? pathname === "/" && !activeLink
                    : label === "Nyla AI"
                      ? pathname === "/nyla"
                      : isLinkActive(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setActiveLink(href)}
                    className={`funky-link whitespace-nowrap px-2.5 py-1 text-sm font-medium transition-colors ${
                      active
                        ? "funky-link-active font-semibold text-[#4F35F2]"
                        : "text-[#1E1B4B] hover:text-[#4F35F2]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 md:flex">
                {showInstallUi ? (
                  <button
                    type="button"
                    onClick={() => void onInstallApp()}
                    className={installButtonClass}
                  >
                    Install App
                  </button>
                ) : null}
                <Link
                  href={STUDIELY_APP.signUp}
                  className="funky-button inline-flex h-9 items-center justify-center rounded-full bg-[#4F35F2] px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Start Free
                </Link>
              </div>

              {showInstallUi ? (
                <button
                  type="button"
                  onClick={() => void onInstallApp()}
                  className={`${installButtonClass} md:hidden`}
                >
                  Install App
                </button>
              ) : null}

              <button
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

      <div
        className="h-[calc(3.5rem+0.25rem)] shrink-0 md:h-[calc(3.5rem+0.375rem)]"
        aria-hidden
      />

      {open ? (
        <div
          className="nav-menu-enter fixed inset-x-0 top-[calc(3.5rem+0.25rem)] z-[399] border-b border-border-default bg-white p-4 shadow-lg sm:p-6 md:top-[calc(3.5rem+0.375rem)] lg:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => {
            const active =
              label === "Home"
                ? pathname === "/"
                : label === "Nyla AI"
                  ? pathname === "/nyla"
                  : isLinkActive(href);
            return (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`block border-b border-border-lt px-3 py-3 text-base transition-colors last:border-b-0 ${
                active
                  ? "bg-[#f4ffe6] font-semibold text-[#4F35F2]"
                  : "text-[#1E1B4B] hover:text-[#4F35F2]"
              }`}
            >
              {label}
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
                className="funky-button inline-flex flex-1 items-center justify-center rounded-full bg-[#FF2D8A] px-4 py-3 text-sm font-semibold !text-white"
              >
                Install App
              </button>
            ) : null}
            <Link
              href={STUDIELY_APP.signUp}
              onClick={() => setOpen(false)}
              className="funky-button inline-flex flex-1 items-center justify-center rounded-full bg-[#4F35F2] px-4 py-3 text-sm font-semibold text-white"
            >
              Start Free
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};
