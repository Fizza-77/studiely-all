import Image from "next/image";
import Link from "next/link";

import { LEGAL_ROUTES } from "@/lib/legalRoutes";

const LIME = "#E8FF2F";
const BG = "#252636";

const SOCIAL_YOUTUBE = "https://www.youtube.com/@Studiely";
const SOCIAL_X = "https://x.com/studiely_";
const SOCIAL_LINKEDIN = "https://www.linkedin.com/company/studiely/";
const APP_STORE_IOS =
  "https://apps.apple.com/us/app/eduplayce/id6758246110";
const APP_STORE_ANDROID =
  "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce";

const socialButtonClass =
  "inline-flex size-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white/60 hover:bg-white/10";

const storeButtonClass =
  "inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-transparent px-4 py-2.5 text-left transition-colors hover:border-white/45 hover:bg-white/5 sm:px-5 sm:py-3";

const linkClass =
  "font-sans text-[14px] text-white/75 transition-colors hover:text-white";

const columnTitleClass =
  "mb-4 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-white";

const PRODUCT_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Learning pack", href: "/#study-smarter" },
  { label: "Nyla", href: "/nyla" },
  { label: "Pricing", href: "/pricing" },
] as const;

const COMPANY_LINKS = [
  { label: "About", href: "/contact#about-studiely-heading" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: LEGAL_ROUTES.privacyPolicy },
  { label: "Terms of Service", href: LEGAL_ROUTES.termsOfService },
  { label: "Acceptable Use Policy", href: LEGAL_ROUTES.acceptableUse },
  { label: "Cookie Policy", href: LEGAL_ROUTES.cookiePolicy },
  { label: "Disclaimer", href: LEGAL_ROUTES.disclaimer },
] as const;

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
    <path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.8 2.1 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1 2.7-2 .9-1.2 1.2-2.4 1.2-2.5-.1 0-2.4-.9-2.4-3.6zM14.8 6.4c.6-.7 1-1.8.9-2.8-1 .1-2.1.7-2.7 1.5-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.7-1.5z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
    <path d="M3.6 2.3c-.3.2-.6.6-.6 1.1v17.2c0 .5.3.9.6 1.1l9.7-9.7L3.6 2.3zm11.1 6.4-2.1 2.1 2.1 2.1 4.8-2.7c.5-.3.5-1.1 0-1.4l-4.8-2.7zM4.8 21.5 13 13.3l2.1 2.1-8.4 4.8c-.7.4-1.5.1-1.9-.3v.1c0 .2 0 .2 0 .2zm0-19c.4-.4 1.2-.7 1.9-.3l8.4 4.8-2.1 2.1L4.8 2.5z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type FooterProps = {
  /** @deprecated All pages now use the same footer design. */
  variant?: "default" | "marketing";
};

export const Footer = (_props: FooterProps = {}) => {
  return (
    <footer className="text-white" style={{ backgroundColor: BG }}>
      <div className="h-2 w-full" style={{ backgroundColor: LIME }} aria-hidden />

      <div className="wrap px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Tier 1 — brand / social  ·  download CTA + QR */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-7 lg:flex-row lg:items-start lg:justify-between lg:gap-12 sm:pb-8">
          <div className="flex shrink-0 flex-col items-center">
            <Link href="/" className="inline-flex" aria-label="Studiely home">
              {/* eslint-disable-next-line @next/next/no-img-element -- same SVG as navbar, forced white */}
              <img
                src="/logo-group.svg?v=blue"
                alt="Studiely"
                width={160}
                height={48}
                className="h-[40px] w-auto object-contain brightness-0 invert sm:h-[46px]"
              />
            </Link>
            <p className="mb-0 mt-2.5 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Follow us
            </p>
            <div className="mt-2 flex items-center justify-center gap-2.5">
              <a
                href={SOCIAL_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialButtonClass}
              >
                <LinkedInIcon />
              </a>
              <a
                href={SOCIAL_YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={socialButtonClass}
              >
                <YouTubeIcon />
              </a>
              <a
                href={SOCIAL_X}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className={socialButtonClass}
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* CTA copy + buttons beside QR */}
          <div className="flex w-full max-w-[520px] items-start gap-3 sm:gap-4 lg:ml-auto lg:w-auto">
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <p className="mb-0 font-sans text-[15px] font-medium leading-snug text-white sm:text-[16px]">
                Study Anywhere. Download The App.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href={APP_STORE_IOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                  className={storeButtonClass}
                >
                  <AppleIcon />
                  <span className="font-sans text-[13px] font-semibold text-white sm:text-[14px]">
                    App Store
                  </span>
                </a>
                <a
                  href={APP_STORE_ANDROID}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                  className={storeButtonClass}
                >
                  <PlayStoreIcon />
                  <span className="font-sans text-[13px] font-semibold text-white sm:text-[14px]">
                    Google Play
                  </span>
                </a>
              </div>
            </div>

            <div className="size-[72px] shrink-0 overflow-hidden rounded-[4px] bg-white sm:size-[84px]">
              <Image
                src="/QR.jpeg"
                alt="QR code to download Studiely"
                width={84}
                height={84}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tier 2 — blurb + link columns */}
        <div className="mt-7 grid grid-cols-1 gap-8 border-b border-white/10 pb-7 sm:mt-8 sm:pb-8 lg:grid-cols-12 lg:gap-8">
          <p className="mb-0 font-sans text-[14px] leading-relaxed text-white/70 lg:col-span-5 lg:max-w-[360px] sm:text-[15px]">
            AI study tools for GCSE, IB, A-Level, SAT, HSC and every major
            curriculum.
          </p>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:col-span-7 lg:grid-cols-2 lg:justify-items-start lg:pl-8 xl:pl-16">
            <div>
              <p className={columnTitleClass}>Product</p>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {PRODUCT_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={columnTitleClass}>Company</p>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tier 3 — legal row */}
        <nav
          aria-label="Legal"
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-b border-white/10 pb-6 sm:mt-7 sm:gap-x-6 sm:pb-7"
        >
          {LEGAL_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[13px] text-white/55 transition-colors hover:text-white sm:text-[14px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Tier 4 — curricula left · company right */}
        <div className="mt-6 flex flex-col gap-5 border-b border-white/10 pb-6 sm:mt-7 sm:pb-7 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-[480px] font-sans text-[12px] leading-[1.7] text-white/45 sm:text-[13px]">
            <p className="m-0">
              Built for major curricula across the UK, US, IB, Australia, and
              Canada.
            </p>
            <p className="mb-0 mt-3">
              Studiely is not affiliated with, endorsed by, or an official
              product of Cambridge Assessment International Education, Pearson
              Edexcel, AQA, OCR, the IB Organisation, or any other examination
              board. Content does not replace official syllabus materials.
            </p>
          </div>

          <p className="mb-0 max-w-[420px] font-sans text-[12px] leading-[1.7] text-white/45 lg:text-right sm:text-[13px]">
            Studiely is a product of{" "}
            <a
              href="https://skyensolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white/85"
            >
              Skyen Solutions
            </a>
            , a trade name of Gismat Ventures W.L.L. (CR 160618-1) — Office 501,
            Building 1025, Road 3621, Block 436, Al Seef, Bahrain.
          </p>
        </div>

        {/* Tier 5 — copyright */}
        <p className="mb-0 mt-6 text-center font-sans text-[12px] text-white/45 sm:mt-7 sm:text-[13px]">
          © 2024 Studiely. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
