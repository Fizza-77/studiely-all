import type { Metadata } from "next";

import { HSC_MUSIC } from "@/lib/curriculum/subject-pages/hsc-music";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { SubjectLandingPage } from "@/sections/SubjectLandingPage";

const content = HSC_MUSIC;
const path = content.path;

export const metadata: Metadata = {
  title: content.seoTitle,
  description: content.metaDescription,
  keywords: content.keywords,
  alternates: { canonical: `${SITE_URL}${path}` },
  openGraph: {
    title: content.seoTitle,
    description: content.metaDescription,
    url: `${SITE_URL}${path}`,
    siteName: "Studiely",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        alt: content.seoTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.seoTitle,
    description: content.metaDescription,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Curriculum",
      item: `${SITE_URL}/curriculum`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: content.breadcrumbName,
      item: `${SITE_URL}${path}`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HscMusicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <SubjectLandingPage content={content} />
    </>
  );
}
