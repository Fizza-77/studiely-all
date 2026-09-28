/**
 * Single source of truth for IB pathway → subject relationships.
 * SEO content pages are keyed by pathway + subject slug (not year/grade).
 */

export const IB_PATHWAY_SLUGS = ["pyp", "myp", "dp"] as const;
export type IbPathwaySlug = (typeof IB_PATHWAY_SLUGS)[number];

/** CurriculumPathwayBuilder pathway labels → URL slugs */
export const IB_SELECTOR_PATHWAY_TO_SLUG: Record<string, IbPathwaySlug> = {
  PYP: "pyp",
  MYP: "myp",
  DP: "dp",
};

export const IB_PATHWAY_LABELS: Record<IbPathwaySlug, string> = {
  pyp: "Primary Years Programme (PYP)",
  myp: "Middle Years Programme (MYP)",
  dp: "Diploma Programme (DP)",
};

export const IB_PATHWAY_SHORT_LABELS: Record<IbPathwaySlug, string> = {
  pyp: "PYP",
  myp: "MYP",
  dp: "DP",
};

export type IbSubjectDef = {
  /** URL segment, e.g. biology-hl */
  slug: string;
  /** Display / selector label, e.g. Biology HL */
  name: string;
};

/**
 * Pathway-specific subjects. Add new subjects here when SEO batches arrive.
 * Pages only generate when matching content exists in the IB content registry.
 */
export const IB_SUBJECTS_BY_PATHWAY: Record<IbPathwaySlug, IbSubjectDef[]> = {
  pyp: [
    { slug: "drama", name: "Drama" },
    { slug: "english", name: "English" },
    { slug: "french", name: "French" },
    { slug: "german", name: "German" },
    { slug: "mandarin", name: "Mandarin" },
    { slug: "mathematics", name: "Mathematics" },
    { slug: "music", name: "Music" },
    { slug: "pspe", name: "PSPE" },
    {
      slug: "science-and-technology",
      name: "Science and Technology",
    },
    { slug: "social-studies", name: "Social Studies" },
    { slug: "spanish", name: "Spanish" },
    { slug: "visual-arts", name: "Visual Arts" },
  ],
  myp: [
    { slug: "design", name: "Design" },
    { slug: "drama", name: "Drama" },
    { slug: "english-b", name: "English B" },
    {
      slug: "english-language-and-literature",
      name: "English Language and Literature",
    },
    { slug: "french-b", name: "French B" },
    {
      slug: "french-language-and-literature",
      name: "French Language and Literature",
    },
    { slug: "german-b", name: "German B" },
    {
      slug: "german-language-and-literature",
      name: "German Language and Literature",
    },
    {
      slug: "individuals-and-societies",
      name: "Individuals and Societies",
    },
    { slug: "mandarin-b", name: "Mandarin B" },
    {
      slug: "mandarin-language-and-literature",
      name: "Mandarin Language and Literature",
    },
    { slug: "mathematics", name: "Mathematics" },
    { slug: "music", name: "Music" },
    {
      slug: "physical-and-health-education",
      name: "Physical and Health Education",
    },
    { slug: "sciences", name: "Sciences" },
    { slug: "spanish-b", name: "Spanish B" },
    {
      slug: "spanish-language-and-literature",
      name: "Spanish Language and Literature",
    },
    { slug: "visual-arts", name: "Visual Arts" },
  ],
  dp: [
    { slug: "biology-hl", name: "Biology HL" },
    { slug: "biology-sl", name: "Biology SL" },
    { slug: "business-management-hl", name: "Business Management HL" },
    { slug: "business-management-sl", name: "Business Management SL" },
    { slug: "cas-reflection", name: "CAS Reflection" },
    { slug: "chemistry-hl", name: "Chemistry HL" },
    { slug: "chemistry-sl", name: "Chemistry SL" },
    { slug: "computer-science-hl", name: "Computer Science HL" },
    { slug: "computer-science-sl", name: "Computer Science SL" },
    { slug: "dance-hl", name: "Dance HL" },
    { slug: "dance-sl", name: "Dance SL" },
    { slug: "economics-hl", name: "Economics HL" },
    { slug: "economics-sl", name: "Economics SL" },
    { slug: "english-a-hl", name: "English A HL" },
    { slug: "english-a-sl", name: "English A SL" },
    { slug: "english-b-hl", name: "English B HL" },
    { slug: "english-b-sl", name: "English B SL" },
    {
      slug: "environmental-systems-and-societies-hl",
      name: "Environmental Systems and Societies HL",
    },
    {
      slug: "environmental-systems-and-societies-sl",
      name: "Environmental Systems and Societies SL",
    },
    { slug: "extended-essay", name: "Extended Essay" },
    { slug: "film-hl", name: "Film HL" },
    { slug: "film-sl", name: "Film SL" },
    { slug: "french-a-hl", name: "French A HL" },
    { slug: "french-a-sl", name: "French A SL" },
    { slug: "french-b-hl", name: "French B HL" },
    { slug: "geography-hl", name: "Geography HL" },
    { slug: "geography-sl", name: "Geography SL" },
    { slug: "german-a-hl", name: "German A HL" },
    { slug: "german-a-sl", name: "German A SL" },
    { slug: "german-b-hl", name: "German B HL" },
    { slug: "german-b-sl", name: "German B SL" },
    { slug: "global-politics-hl", name: "Global Politics HL" },
    { slug: "global-politics-sl", name: "Global Politics SL" },
    { slug: "history-hl", name: "History HL" },
    { slug: "history-sl", name: "History SL" },
    { slug: "mandarin-a-hl", name: "Mandarin A HL" },
    { slug: "mandarin-a-sl", name: "Mandarin A SL" },
    { slug: "mandarin-b-hl", name: "Mandarin B HL" },
    { slug: "mandarin-b-sl", name: "Mandarin B SL" },
    { slug: "math-aa-hl", name: "Math AA HL" },
    { slug: "math-aa-sl", name: "Math AA SL" },
    { slug: "math-ai-hl", name: "Math AI HL" },
    { slug: "math-ai-sl", name: "Math AI SL" },
    { slug: "music-hl", name: "Music HL" },
    { slug: "music-sl", name: "Music SL" },
    { slug: "physics-hl", name: "Physics HL" },
    { slug: "physics-sl", name: "Physics SL" },
    { slug: "psychology-hl", name: "Psychology HL" },
    { slug: "psychology-sl", name: "Psychology SL" },
    { slug: "spanish-a-hl", name: "Spanish A HL" },
    { slug: "spanish-a-sl", name: "Spanish A SL" },
    { slug: "spanish-b-hl", name: "Spanish B HL" },
    { slug: "spanish-b-sl", name: "Spanish B SL" },
    { slug: "theatre-hl", name: "Theatre HL" },
    { slug: "theatre-sl", name: "Theatre SL" },
    { slug: "theory-of-knowledge", name: "Theory of Knowledge" },
    { slug: "visual-arts-hl", name: "Visual Arts HL" },
    { slug: "visual-arts-sl", name: "Visual Arts SL" },
  ],
};

export function isIbPathwaySlug(value: string): value is IbPathwaySlug {
  return (IB_PATHWAY_SLUGS as readonly string[]).includes(value);
}

export function getIbSubjectsForPathway(pathway: IbPathwaySlug): IbSubjectDef[] {
  return IB_SUBJECTS_BY_PATHWAY[pathway] ?? [];
}

export function getIbSubject(
  pathway: IbPathwaySlug,
  subjectSlug: string,
): IbSubjectDef | undefined {
  return getIbSubjectsForPathway(pathway).find((s) => s.slug === subjectSlug);
}

export function ibSubjectPath(
  pathway: IbPathwaySlug,
  subjectSlug: string,
): string {
  return `/international-baccalaureate/${pathway}/${subjectSlug}`;
}

/** Grades for a pathway all resolve to the same pathway+subject SEO page. */
export const IB_SELECTOR_YEARS_BY_PATHWAY: Record<string, string[]> = {
  PYP: [
    "Grade 1 (PYP)",
    "Grade 2 (PYP)",
    "Grade 3 (PYP)",
    "Grade 4 (PYP)",
    "Grade 5 (PYP)",
  ],
  MYP: [
    "Grade 6 (MYP)",
    "Grade 7 (MYP)",
    "Grade 8 (MYP)",
    "Grade 9 (MYP)",
    "Grade 10 (MYP)",
  ],
  DP: ["Grade 11 — DP1", "Grade 12 — DP2"],
};
