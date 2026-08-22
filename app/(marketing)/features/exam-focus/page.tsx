import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { ExamFocusHeroSection } from "@/sections/ExamFocusHeroSection";
import {
  ExamFocusSummarySection,
  ExamFocusProblemSection,
  ExamFocusTrustSection,
} from "@/sections/ExamFocusIntroSections";
import { ExamFocusHowItWorksSection } from "@/sections/ExamFocusHowItWorksSection";
import {
  ExamFocusPrioritiesSection,
  ExamFocusBenefitsSection,
} from "@/sections/ExamFocusPrioritiesSection";
import {
  ExamFocusDirectionSection,
  ExamFocusPlanSection,
  ExamFocusSubjectsSection,
} from "@/sections/ExamFocusContentSections";
import {
  ExamFocusFaqSection,
  ExamFocusCtaSection,
} from "@/sections/ExamFocusFaqSection";

const path = "/features/exam-focus";
const title = "Exam Focus AI for Students | Studiely";
const description =
  "Use Exam Focus AI in Studiely to identify important topics, plan revision and prepare with notes, quizzes and exam practice.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${path}` },
  keywords: [
    "Exam focus AI",
    "exam topic predictor",
    "AI exam preparation tool",
    "exam revision planner",
    "understand exam topics with AI",
    "exam focus study tool",
    "identify important exam topics",
    "exam preparation",
    "exam revision help",
    "curriculum aligned exam prep",
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
        alt: "Studiely — Exam Focus",
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

const breadcrumbSchema = buildBreadcrumbSchema("Exam Focus", path);

export default function ExamFocusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="min-h-screen overflow-x-clip bg-bg-base font-jakarta">
        <ExamFocusHeroSection />
        <ExamFocusSummarySection />
        <ExamFocusProblemSection />
        <ExamFocusTrustSection />
        <ExamFocusHowItWorksSection />
        <ExamFocusPrioritiesSection />
        <ExamFocusBenefitsSection />
        <ExamFocusDirectionSection />
        <ExamFocusPlanSection />
        <ExamFocusSubjectsSection />
        <ExamFocusFaqSection />
        <ExamFocusCtaSection />
      </main>
    </>
  );
}
