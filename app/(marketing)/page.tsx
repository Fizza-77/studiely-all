import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { HeroSection } from "@/sections/HeroSection";
import { StudySmarterSection } from "@/sections/StudySmarterSection";

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Studiely",
  url: SITE_URL,
  applicationCategory: "EducationApplication",
  operatingSystem: "iOS, Android, Web",
  description:
    "AI study assistant and student tools: curriculum-aligned summary notes, flashcards, " +
    "AI learning, quizzes and exam focus support for IGCSE, GCSE, IB, A-Level, SAT, HSC and more.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free plan with 5 one-time credits. Premium subscriptions available " +
      "monthly, quarterly and annually.",
  },
  featureList: [
    "AI summary notes",
    "Spaced-repetition flashcards",
    "Quiz generator",
    "Exam Focus support",
    "AI tutor Nyla",
    "Mnemonics generator",
    "Study streaks and rewards",
  ],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
  provider: {
    "@type": "Organization",
    name: "Studiely",
    url: SITE_URL,
  },
};

const homeTitle = "AI Study Assistant, IGCSE Tutor & Exam Focus | Studiely";
const homeDescription =
  "Studiely is your AI study assistant for real exams: AI learning, flashcards, quizzes, and exam focus support " +
  "for IGCSE, IB, GCSE, A-Level, SAT & more";

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    type: "website",
    siteName: "Studiely",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema),
        }}
      />
      <main role="main">
        <div className="relative bg-bg-base">
          <div
            className="pointer-events-none absolute left-1/2 top-[42%] z-0 aspect-square w-[min(130vw,860px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8FF2F]/28 blur-[120px]"
            aria-hidden
          />
          <HeroSection />
          <StudySmarterSection />
        </div>
        <HomePageContent />
      </main>
    </>
  );
}
