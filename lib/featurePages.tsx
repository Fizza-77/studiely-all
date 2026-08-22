import type { Metadata } from "next";
import Link from "next/link";

import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { HOME_SHELL } from "@/lib/homeShell";
import { STUDIELY_APP } from "@/lib/appUrls";

const LIME = "#E8FF2F";
const INDIGO = "#4F35F2";

export const FEATURE_PAGES = [
  {
    slug: "flashcard-maker",
    title: "Flashcard Maker",
    description:
      "Turn notes and topics into active recall flashcards for faster revision.",
  },
  {
    slug: "notes-generator",
    title: "Notes Generator",
    description:
      "Create clear AI study notes from topics, lessons and exam material with Studiely.",
  },
  {
    slug: "quiz-generator",
    title: "Quiz Generator",
    description:
      "Create practice quizzes from notes and topics to test understanding faster.",
  },
  {
    slug: "exam-focus",
    title: "Exam Focus",
    description:
      "Focus revision with AI support for important topics, weak areas and exam preparation.",
  },
] as const;

export type FeatureSlug = (typeof FEATURE_PAGES)[number]["slug"];

export function getFeaturePage(slug: string) {
  return FEATURE_PAGES.find((p) => p.slug === slug);
}

export function buildFeatureMetadata(slug: FeatureSlug): Metadata {
  const page = getFeaturePage(slug)!;
  const path = `/features/${slug}`;
  const title = `${page.title} — Studiely Study Tools`;
  return {
    title,
    description: page.description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description: page.description,
      url: `${SITE_URL}${path}`,
      siteName: "Studiely",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: `Studiely — ${page.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export function FeaturePageShell({
  slug,
}: {
  slug: FeatureSlug;
}) {
  const page = getFeaturePage(slug)!;
  const breadcrumbSchema = buildBreadcrumbSchema(page.title, `/features/${slug}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="min-h-screen bg-bg-base font-jakarta">
        <section className={`${HOME_SHELL} py-10 sm:py-14`}>
          <p
            className="mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#1E1B4B]"
            style={{ backgroundColor: LIME }}
          >
            Features
          </p>
          <h1
            className="mb-3 font-heading text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: INDIGO }}
          >
            {page.title}
          </h1>
          <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-[#5B5A6A] sm:text-base">
            {page.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={STUDIELY_APP.signUp}
              className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: INDIGO }}
            >
              Start Free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center justify-center rounded-full border-2 px-5 text-sm font-semibold transition-colors hover:bg-[#F5F3FF]"
              style={{ borderColor: INDIGO, color: INDIGO }}
            >
              View Pricing
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
