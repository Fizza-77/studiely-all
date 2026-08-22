import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { FlashcardMakerHeroSection } from "@/sections/FlashcardMakerHeroSection";
import {
  FlashcardMakerSummarySection,
  FlashcardMakerProblemSection,
  FlashcardMakerGoalSection,
} from "@/sections/FlashcardMakerIntroSections";
import { FlashcardMakerHowItWorksSection } from "@/sections/FlashcardMakerHowItWorksSection";
import {
  FlashcardMakerFeaturesSection,
  FlashcardMakerBenefitsSection,
} from "@/sections/FlashcardMakerFeaturesSection";
import {
  FlashcardMakerAudienceSection,
  FlashcardMakerTipsSection,
  FlashcardMakerSubjectsSection,
} from "@/sections/FlashcardMakerContentSections";
import {
  FlashcardMakerFaqSection,
  FlashcardMakerCtaSection,
} from "@/sections/FlashcardMakerFaqSection";

const path = "/features/flashcard-maker";
const title = "AI Flashcard Maker for Students | Studiely";
const description =
  "Create active recall flashcards from notes, topics and study material with Studiely’s AI flashcard maker for Australian students.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${path}` },
  keywords: [
    "AI flashcard maker",
    "AI flashcard generator",
    "make flashcards from notes",
    "turn notes into flashcards",
    "flashcards for studying",
    "AI flashcards",
    "online flashcard maker",
    "flashcard app for students",
    "active recall flashcards",
  ],
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${path}`,
    siteName: "Studiely",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        alt: "Studiely — Flashcard Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema("Flashcard Maker", path);

export default function FlashcardMakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="min-h-screen overflow-x-clip bg-bg-base font-jakarta">
        <FlashcardMakerHeroSection />
        <FlashcardMakerSummarySection />
        <FlashcardMakerProblemSection />
        <FlashcardMakerGoalSection />
        <FlashcardMakerHowItWorksSection />
        <FlashcardMakerFeaturesSection />
        <FlashcardMakerBenefitsSection />
        <FlashcardMakerAudienceSection />
        <FlashcardMakerTipsSection />
        <FlashcardMakerSubjectsSection />
        <FlashcardMakerFaqSection />
        <FlashcardMakerCtaSection />
      </main>
    </>
  );
}
