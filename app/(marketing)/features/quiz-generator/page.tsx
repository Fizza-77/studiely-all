import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { QuizGeneratorHeroSection } from "@/sections/QuizGeneratorHeroSection";
import {
  QuizGeneratorSummarySection,
  QuizGeneratorProblemSection,
  QuizGeneratorGoalSection,
} from "@/sections/QuizGeneratorIntroSections";
import { QuizGeneratorHowItWorksSection } from "@/sections/QuizGeneratorHowItWorksSection";
import {
  QuizGeneratorTypesSection,
  QuizGeneratorBenefitsSection,
} from "@/sections/QuizGeneratorTypesSection";
import {
  QuizGeneratorDecisionsSection,
  QuizGeneratorResultsSection,
  QuizGeneratorSubjectsSection,
} from "@/sections/QuizGeneratorContentSections";
import {
  QuizGeneratorFaqSection,
  QuizGeneratorCtaSection,
} from "@/sections/QuizGeneratorFaqSection";

const path = "/features/quiz-generator";
const title = "AI Quiz Generator for Students | Studiely";
const description =
  "Use Studiely’s AI quiz generator to create practice quizzes from notes, topics and study material with instant revision support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${path}` },
  keywords: [
    "AI quiz generator",
    "AI quiz maker",
    "study quiz generator",
    "practice quiz AI",
    "create quizzes from notes",
    "AI quizzes for students",
    "generate practice questions online",
    "online quiz maker",
    "Exam-Style Quizzes",
    "instant quiz feedback",
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
        alt: "Studiely — Quiz Generator",
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

const breadcrumbSchema = buildBreadcrumbSchema("Quiz Generator", path);

export default function QuizGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="min-h-screen overflow-x-clip bg-bg-base font-jakarta">
        <QuizGeneratorHeroSection />
        <QuizGeneratorSummarySection />
        <QuizGeneratorProblemSection />
        <QuizGeneratorGoalSection />
        <QuizGeneratorHowItWorksSection />
        <QuizGeneratorTypesSection />
        <QuizGeneratorBenefitsSection />
        <QuizGeneratorDecisionsSection />
        <QuizGeneratorResultsSection />
        <QuizGeneratorSubjectsSection />
        <QuizGeneratorFaqSection />
        <QuizGeneratorCtaSection />
      </main>
    </>
  );
}
