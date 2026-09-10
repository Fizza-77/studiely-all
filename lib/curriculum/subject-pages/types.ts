export type SubjectFaq = {
  question: string;
  answer: string;
};

export type SubjectToolBlock = {
  id: string;
  title: string;
  body: string;
  /** Optional bullet list under the body (e.g. HSC flashcard tips) */
  bullets?: string[];
  icon: string;
  accent: string;
  href: string;
  cta: string;
};

export type SubjectSupportRow = {
  need: string;
  support: string;
};

export type SubjectLandingContent = {
  /** Canonical path without trailing slash */
  path: string;
  seoTitle: string;
  metaDescription: string;
  shortDescription: string;
  keywords: string[];
  breadcrumbName: string;
  heroEyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  /** Lead copy (Quick Answer / AEO Direct Answer body — no heading) */
  lead: string;
  introTitle: string;
  introParagraphs: string[];
  coverTitle: string;
  coverIntro: string;
  coverTopics: string[];
  coverClosing: string;
  supportTitle: string;
  supportParagraphs: string[];
  /** Optional study-need table (HSC-style pages) */
  supportRows?: SubjectSupportRow[];
  /** Paragraphs after the support table (e.g. affiliation disclaimer) */
  supportAfterParagraphs?: string[];
  tools: SubjectToolBlock[];
  whyTitle: string;
  whyParagraphs: string[];
  whyBullets?: string[];
  faqs: SubjectFaq[];
  ctaTitle: string;
  ctaBody: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
};

export type SubjectPageMatch = {
  curriculum: string;
  pathway: string;
  years: string[];
  subject: string;
  path: string;
};
