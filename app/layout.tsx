import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Great_Vibes, Hanken_Grotesk, Inter, Manrope, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { CookieConsentBannerClient } from "@/components/CookieConsentBannerClient";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { OfflineScreen } from "@/components/offline/OfflineScreen";
import { PwaRegister } from "@/components/PwaRegister";
import { SiteInteractions } from "@/components/SiteInteractions";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope-face",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes-face",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#E8FF2F",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // No title.template — subject/page seoTitles already end with "| Studiely".
    // A template here caused duplicates like "... | Studiely | Studiely".
    default: "Studiely — AI Study App for GCSE, IB, SAT & All Curricula",
  },
  description:
    "Generate summary notes, flashcards, quizzes and exam practice " +
    "aligned to your exact curriculum and exam board. " +
    "GCSE, IB, A-Level, SAT, HSC and more. Free to start.",
  keywords: [
    "AI study app",
    "summary notes",
    "flashcards",
    "exam practice",
    "GCSE revision",
    "IB study",
    "A-Level",
    "SAT prep",
    "HSC",
    "Common Core",
    "IGCSE",
    "AI tutor",
    "spaced repetition",
    "quiz generator",
  ],
  authors: [{ name: "Studiely", url: SITE_URL }],
  creator: "Studiely",
  publisher: "Studiely",
  icons: {
    icon: [
      { url: "/blue-icon.svg", type: "image/svg+xml" },
      { url: "/icons/pwa-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/pwa-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/blue-icon.svg",
    apple: [{ url: "/icons/pwa-192.png", sizes: "192x192", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: "Studiely",
    statusBarStyle: "black-translucent",
  },
  applicationName: "Studiely",
  openGraph: {
    type: "website",
    siteName: "Studiely",
    title: "Studiely — AI Study App for GCSE, IB, SAT & All Curricula",
    description:
      "Generate summary notes, flashcards, quizzes and exam practice " +
      "aligned to your exact curriculum and exam board. Free to start.",
    url: SITE_URL,
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Studiely — AI Study App for GCSE, IB, SAT and all curricula",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studiely — AI Study App for GCSE, IB, SAT & All Curricula",
    description:
      "Summary notes, flashcards, quizzes and exam practice " +
      "for every curriculum. Free to start.",
    images: [DEFAULT_OG_IMAGE_PATH],
  },
  alternates: {
    languages: {
      "en-GB": SITE_URL,
      "en-US": SITE_URL,
      "en-AU": SITE_URL,
      "en-CA": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Studiely",
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`,
  description:
    "AI-powered study platform for international curricula: notes, quizzes, flashcards, and exam-style practice aligned to your board and grade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${hankenGrotesk.variable} ${plusJakartaSans.variable} ${manrope.variable} ${greatVibes.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="facebook-domain-verification"
          content="ixoxjly0raima1favd2auxjangpbg5"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-8561023104814029"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="site-funky antialiased font-sans bg-bg-base text-body flex min-h-full flex-col">
        <GoogleAnalytics />
        <SiteInteractions />
        <PwaRegister />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <OfflineScreen />
        <CookieConsentBannerClient />
      </body>
    </html>
  );
}
