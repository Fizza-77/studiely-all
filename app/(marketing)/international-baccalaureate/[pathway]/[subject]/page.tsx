import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getIbContent,
  getIbStaticParams,
} from "@/lib/curriculum/subject-pages/ib/registry";
import {
  IB_PATHWAY_LABELS,
  IB_PATHWAY_SHORT_LABELS,
  isIbPathwaySlug,
} from "@/lib/curriculum/ib/pathways";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { SubjectLandingPage } from "@/sections/SubjectLandingPage";

type PageProps = {
  params: Promise<{ pathway: string; subject: string }>;
};

export function generateStaticParams() {
  return getIbStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { pathway, subject } = await params;
  const entry = getIbContent(pathway, subject);
  if (!entry) {
    return { title: "Page not found" };
  }

  const { content } = entry;
  const path = content.path;

  return {
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
}

export default async function IbSubjectPage({ params }: PageProps) {
  const { pathway, subject } = await params;

  if (!isIbPathwaySlug(pathway)) {
    notFound();
  }

  const entry = getIbContent(pathway, subject);
  if (!entry) {
    notFound();
  }

  const { content } = entry;
  const path = content.path;
  const pathwayShort = IB_PATHWAY_SHORT_LABELS[pathway];
  const pathwayLabel = IB_PATHWAY_LABELS[pathway];

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
        name: "International Baccalaureate",
        item: `${SITE_URL}/curriculum`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: pathwayLabel,
        item: `${SITE_URL}/curriculum`,
      },
      {
        "@type": "ListItem",
        position: 5,
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
      <nav
        aria-label="Breadcrumb"
        className="wrap pt-[clamp(0.75rem,2vw,1.25rem)] font-jakarta text-[13px] text-[#5B5A6A]"
      >
        <ol className="m-0 flex list-none flex-wrap items-center gap-1.5 p-0">
          <li>
            <Link href="/curriculum" className="font-semibold text-[#4F35F2]">
              Curriculum
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <span className="text-[#1E1B4B]">IB</span>
          </li>
          <li aria-hidden>/</li>
          <li>
            <span className="text-[#1E1B4B]">{pathwayShort}</span>
          </li>
          <li aria-hidden>/</li>
          <li>
            <span className="font-semibold text-[#1E1B4B]">
              {content.breadcrumbName}
            </span>
          </li>
        </ol>
      </nav>
      <SubjectLandingPage content={content} />
    </>
  );
}
