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

/** Optional Learn / Recall / Apply strip (IB-style pages). */
export type SubjectWorkflowStep = {
  title: string;
  body: string;
};

/** Optional mid-page H2 sections rendered when present (IB-style pages). */
export type SubjectContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
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
  /** Optional opening paragraph shown under the hero CTAs (IB pages). */
  heroIntro?: string;
  /** Optional Learn / Recall / Apply steps */
  workflowSteps?: SubjectWorkflowStep[];
  introTitle: string;
  introParagraphs: string[];
  /** Optional sequential sections after intro (preserves IB heading hierarchy) */
  extraSections?: SubjectContentSection[];
  /** Optional sections after study tools and before Why (IB gap / closing analysis) */
  afterToolsSections?: SubjectContentSection[];
  coverTitle: string;
  coverIntro: string;
  coverTopics: string[];
  coverClosing: string;
  /** When false, CoverTopics section is omitted */
  showCoverTopics?: boolean;
  supportTitle: string;
  supportParagraphs: string[];
  /** Optional study-need table (HSC-style pages) */
  supportRows?: SubjectSupportRow[];
  /** Paragraphs after the support table (e.g. affiliation disclaimer) */
  supportAfterParagraphs?: string[];
  /** When false, Support section is omitted */
  showSupport?: boolean;
  tools: SubjectToolBlock[];
  whyTitle: string;
  whyParagraphs: string[];
  whyBullets?: string[];
  /** Paragraphs after why bullets (e.g. IB affiliation disclaimer) */
  whyAfterParagraphs?: string[];
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
