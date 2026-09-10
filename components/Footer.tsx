import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { LEGAL_ROUTES } from "@/lib/legalRoutes";

const LIME = "#E8FF2F";
const BG = "#0B0F1A";

const SOCIAL_YOUTUBE = "https://www.youtube.com/@Studiely";
const SOCIAL_X = "https://x.com/studiely_";
const SOCIAL_LINKEDIN = "https://www.linkedin.com/company/studiely/";
const APP_STORE_IOS =
  "https://apps.apple.com/us/app/eduplayce/id6758246110";
const APP_STORE_ANDROID =
  "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce";

const SITEMAP = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Curriculum", href: "/curriculum", icon: "curriculum" },
  { label: "How It Works", href: "/#how-it-works", icon: "how" },
  { label: "Learning Pack", href: "/#study-smarter", icon: "pack" },
  { label: "Nyla", href: "/nyla", icon: "nyla" },
  { label: "Pricing", href: "/pricing", icon: "pricing" },
  { label: "FAQs", href: "/faqs", icon: "faq" },
  { label: "Blog", href: "/blogs", icon: "blog" },
  { label: "Contact Us", href: "/contact", icon: "contact" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: LEGAL_ROUTES.privacyPolicy },
  { label: "Terms of Service", href: LEGAL_ROUTES.termsOfService },
  { label: "Acceptable Use Policy", href: LEGAL_ROUTES.acceptableUse },
  { label: "Cookie Policy", href: LEGAL_ROUTES.cookiePolicy },
  { label: "Disclaimer", href: LEGAL_ROUTES.disclaimer },
] as const;

const accentLinkClass =
  "font-semibold underline decoration-current/40 underline-offset-2 transition-opacity hover:opacity-80";

function SitemapIcon({ name }: { name: (typeof SITEMAP)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-4 w-4 sm:h-[18px] sm:w-[18px]",
    fill: "none",
    stroke: LIME,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
        </svg>
      );
    case "curriculum":
      return (
        <svg {...common}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        </svg>
      );
    case "how":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
          <path d="M14 2v6h6M8 13h8M8 17h5" />
        </svg>
      );
    case "pack":
      return (
        <svg {...common}>
          <path d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "nyla":
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M3 12h3M18 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case "pricing":
      return (
        <svg {...common}>
          <path d="M6 3h12l3 7-9 11L3 10l3-7Z" />
          <path d="M12 21V10M3 10h18" />
        </svg>
      );
    case "faq":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4.5M12 17.5h.01" />
        </svg>
      );
    case "blog":
      return (
        <svg {...common}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
        </svg>
      );
    case "contact":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 7 9-7" />
        </svg>
      );
    default:
      return null;
  }
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill={LIME}
      aria-hidden
    >
      <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1l1.7 1.7L12 21.5l7.1-7.1 1.7-1.7a5 5 0 0 0 0-7.1Z" />
    </svg>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-8 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-white hover:bg-white/10 sm:size-9"
    >
      {children}
    </a>
  );
}

function SitemapLabel({ label }: { label: string }) {
  const parts = label.trim().split(/\s+/);
  const className =
    "w-full text-center font-sans text-[8px] leading-[1.15] text-white sm:text-[9px] xl:text-[10px]";

  if (parts.length === 1) {
    return (
      <span className={`${className} break-words [overflow-wrap:anywhere] hyphens-auto`}>
        {label}
      </span>
    );
  }

  const mid = Math.ceil(parts.length / 2);
  return (
    <span className={className}>
      {parts.slice(0, mid).join(" ")}
      <br />
      {parts.slice(mid).join(" ")}
    </span>
  );
}

type FooterProps = {
  /** @deprecated All pages now use the same footer design. */
  variant?: "default" | "marketing";
};

export const Footer = (_props: FooterProps = {}) => {
  return (
    <footer className="text-white" style={{ backgroundColor: BG }}>
      <div className="h-[3px] w-full" style={{ backgroundColor: LIME }} aria-hidden />

      <div className="wrap px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
        {/* Section 1 — brand | sitemap | follow | download + QR (one row on lg) */}
        <div className="border-b border-white/15 pb-5 sm:pb-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-3 xl:gap-4">
            {/* Brand */}
            <div className="min-w-0 shrink-0 lg:max-w-[200px] xl:max-w-[220px]">
              <Link href="/" className="inline-flex" aria-label="Studiely home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-group.svg?v=blue"
                  alt="Studiely"
                  width={140}
                  height={40}
                  className="h-[32px] w-auto object-contain brightness-0 invert sm:h-[36px]"
                />
              </Link>
              <p className="mb-0 mt-2 font-sans text-[11px] leading-snug text-white/75 sm:text-[12px]">
                AI study tools for students across Australia, United Kingdom,
                Canada, IB and United States.
              </p>
            </div>

            {/* Sitemap — single squeezed row */}
            <div className="min-w-0 flex-1 border-white/15 lg:border-l lg:pl-3 xl:pl-4">
              <p
                className="mb-2 text-center font-sans text-[12px] font-semibold sm:text-[13px]"
                style={{ color: LIME }}
              >
                Sitemap
              </p>
              <nav
                aria-label="Sitemap"
                className="flex w-full flex-nowrap items-start justify-between gap-0 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {SITEMAP.map((item, i) => (
                  <div key={item.href} className="flex min-w-0 flex-1 items-stretch">
                    {i > 0 ? (
                      <span
                        className="mx-0.5 w-px shrink-0 self-stretch bg-white/15 sm:mx-1"
                        aria-hidden
                      />
                    ) : null}
                    <Link
                      href={item.href}
                      className="flex min-w-0 flex-1 flex-col items-center gap-1 px-0.5 text-center transition-opacity hover:opacity-70"
                    >
                      <SitemapIcon name={item.icon} />
                      <SitemapLabel label={item.label} />
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Follow us */}
            <div className="flex shrink-0 flex-col items-center border-white/15 lg:border-l lg:px-3">
              <p
                className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: LIME }}
              >
                Follow us
              </p>
              <div className="flex items-center justify-center gap-1.5">
                <SocialButton href={SOCIAL_LINKEDIN} label="LinkedIn">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialButton>
                <SocialButton href={SOCIAL_YOUTUBE} label="YouTube">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
                  </svg>
                </SocialButton>
                <SocialButton href={SOCIAL_X} label="X (Twitter)">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                  </svg>
                </SocialButton>
              </div>
            </div>

            {/* Download + QR */}
            <div className="flex shrink-0 flex-col items-center border-white/15 lg:border-l lg:pl-3 xl:pl-4">
              <p
                className="mb-2 w-full text-center font-sans text-[10px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: LIME }}
              >
                Download The App
              </p>
              <div className="flex items-start justify-center gap-2.5">
                <div className="flex flex-col gap-1.5">
                  <a
                    href={APP_STORE_IOS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-black px-2.5 py-1 ring-1 ring-white/25 transition hover:ring-white/45"
                    aria-label="Download on the App Store"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor" aria-hidden>
                      <path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.8 2.1 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1 2.7-2 .9-1.2 1.2-2.4 1.2-2.5-.1 0-2.4-.9-2.4-3.6zM14.8 6.4c.6-.7 1-1.8.9-2.8-1 .1-2.1.7-2.7 1.5-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.7-1.5z" />
                    </svg>
                    <span className="text-left leading-tight">
                      <span className="block font-sans text-[7px] text-white/80">
                        Download on the
                      </span>
                      <span className="block font-sans text-[11px] font-semibold text-white">
                        App Store
                      </span>
                    </span>
                  </a>
                  <a
                    href={APP_STORE_ANDROID}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-black px-2.5 py-1 ring-1 ring-white/25 transition hover:ring-white/45"
                    aria-label="Get it on Google Play"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor" aria-hidden>
                      <path d="M3.6 2.3c-.3.2-.6.6-.6 1.1v17.2c0 .5.3.9.6 1.1l9.7-9.7L3.6 2.3zm11.1 6.4-2.1 2.1 2.1 2.1 4.8-2.7c.5-.3.5-1.1 0-1.4l-4.8-2.7zM4.8 21.5 13 13.3l2.1 2.1-8.4 4.8c-.7.4-1.5.1-1.9-.3v.1c0 .2 0 .2 0 .2zm0-19c.4-.4 1.2-.7 1.9-.3l8.4 4.8-2.1 2.1L4.8 2.5z" />
                    </svg>
                    <span className="text-left leading-tight">
                      <span className="block font-sans text-[7px] text-white/80">
                        GET IT ON
                      </span>
                      <span className="block font-sans text-[11px] font-semibold text-white">
                        Google Play
                      </span>
                    </span>
                  </a>
                </div>
                <div className="flex w-[76px] shrink-0 flex-col items-center gap-1 sm:w-[80px]">
                  <div className="relative size-[76px] overflow-hidden rounded-[3px] bg-white sm:size-[80px]">
                    <Image
                      src="/QR.jpeg"
                      alt="QR code to download Studiely"
                      width={80}
                      height={80}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p
                    className="mb-0 w-full text-center font-sans text-[8px] leading-snug"
                    style={{ color: LIME }}
                  >
                    Scan to download Studiely
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 — legal links */}
        <nav
          aria-label="Legal"
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 border-b border-white/15 py-4 sm:gap-x-2.5 sm:py-5"
        >
          {LEGAL_LINKS.map((item, i) => (
            <span key={item.href + item.label} className="inline-flex items-center gap-x-2 sm:gap-x-2.5">
              {i > 0 ? (
                <span className="text-[10px]" style={{ color: LIME }} aria-hidden>
                  •
                </span>
              ) : null}
              <Link
                href={item.href}
                className="font-sans text-[12px] text-white/80 transition-colors hover:text-white sm:text-[13px]"
              >
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        {/* Section 3 — company */}
        <div className="border-b border-white/15 py-4 sm:py-5">
          <p className="mb-0 text-center font-sans text-[12px] leading-relaxed text-white/80 sm:text-[13px]">
            Studiely is a product of{" "}
            <a
              href="https://skyensolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className={accentLinkClass}
              style={{ color: LIME }}
            >
              Skyen Solutions
            </a>
            , a trade name of Qismat Ventures W.L.L. (CR 190698-1) — located at
            Office 501, Building 1025, Road 3621, Block 436, Al Seef, Bahrain —
            and is a sister product of{" "}
            <a
              href="https://makemylesson.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={accentLinkClass}
              style={{ color: LIME }}
            >
              Make My Lesson
            </a>
            ,{" "}
            <a
              href="https://linguatude.com"
              target="_blank"
              rel="noopener noreferrer"
              className={accentLinkClass}
              style={{ color: LIME }}
            >
              Linguatude
            </a>
            , and{" "}
            <a
              href="https://worksheeta.com"
              target="_blank"
              rel="noopener noreferrer"
              className={accentLinkClass}
              style={{ color: LIME }}
            >
              Worksheeta
            </a>
            . For educational technology platforms, please
            contact{" "}
            <a
              href="https://skyensolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className={accentLinkClass}
              style={{ color: LIME }}
            >
              Skyen Solutions
            </a>
            .
          </p>
        </div>

        {/* Section 4 — tagline + copyright */}
        <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:justify-between sm:gap-4 sm:pt-5">
          <p className="mb-0 flex items-center gap-2 font-sans text-[12px] text-white/85 sm:text-[13px]">
            <HeartIcon />
            Built for students. Designed for real exams. Made for every
            curriculum.
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden />
            <p className="mb-0 font-sans text-[12px] text-white/70 sm:text-[13px]">
              © 2026 Qismat Ventures W.L.L. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
