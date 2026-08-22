import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { NotesGeneratorHeroSection } from "@/sections/NotesGeneratorHeroSection";
import {
  NotesGeneratorSummarySection,
  NotesGeneratorProblemSection,
  NotesGeneratorGoalSection,
} from "@/sections/NotesGeneratorIntroSections";
import { NotesGeneratorHowItWorksSection } from "@/sections/NotesGeneratorHowItWorksSection";
import {
  NotesGeneratorFeaturesSection,
  NotesGeneratorBenefitsSection,
} from "@/sections/NotesGeneratorFeaturesSection";
import {
  NotesGeneratorRevisionSection,
  NotesGeneratorWorkflowSection,
} from "@/sections/NotesGeneratorContentSections";
import {
  NotesGeneratorFaqSection,
  NotesGeneratorCtaSection,
} from "@/sections/NotesGeneratorFaqSection";

const path = "/features/notes-generator";
const title = "AI Notes Generator for Students | Studiely";
const description =
  "Use Studiely’s AI notes generator to turn topics, class notes and study material into clear revision notes for Australian students.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${path}` },
  keywords: [
    "AI notes generator",
    "AI study notes generator",
    "AI note maker",
    "AI summary notes generator",
    "study notes generator",
    "revision notes generator",
    "make study notes with AI",
    "AI notes for students",
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
        alt: "Studiely — Notes Generator",
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

const breadcrumbSchema = buildBreadcrumbSchema("Notes Generator", path);

export default function NotesGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="min-h-screen overflow-x-clip bg-bg-base font-jakarta">
        <NotesGeneratorHeroSection />
        <NotesGeneratorSummarySection />
        <NotesGeneratorProblemSection />
        <NotesGeneratorGoalSection />
        <NotesGeneratorHowItWorksSection />
        <NotesGeneratorFeaturesSection />
        <NotesGeneratorBenefitsSection />
        <NotesGeneratorRevisionSection />
        <NotesGeneratorWorkflowSection />
        <NotesGeneratorFaqSection />
        <NotesGeneratorCtaSection />
      </main>
    </>
  );
}
