import {
  IB_SELECTOR_PATHWAY_TO_SLUG,
  IB_SELECTOR_YEARS_BY_PATHWAY,
  IB_PATHWAY_SHORT_LABELS,
  type IbPathwaySlug,
} from "@/lib/curriculum/ib/pathways";
import type { SubjectLandingContent, SubjectPageMatch } from "../types";
import { IB_DP_BIOLOGY_HL } from "./dp-biology-hl";
import { IB_DP_BIOLOGY_SL } from "./dp-biology-sl";
import { IB_DP_BUSINESS_MANAGEMENT_HL } from "./dp-business-management-hl";
import { IB_DP_BUSINESS_MANAGEMENT_SL } from "./dp-business-management-sl";
import { IB_DP_CAS_REFLECTION } from "./dp-cas-reflection";
import { IB_DP_CHEMISTRY_HL } from "./dp-chemistry-hl";
import { IB_DP_CHEMISTRY_SL } from "./dp-chemistry-sl";
import { IB_DP_COMPUTER_SCIENCE_HL } from "./dp-computer-science-hl";
import { IB_DP_COMPUTER_SCIENCE_SL } from "./dp-computer-science-sl";
import { IB_DP_DANCE_HL } from "./dp-dance-hl";
import { IB_DP_DANCE_SL } from "./dp-dance-sl";
import { IB_DP_ECONOMICS_HL } from "./dp-economics-hl";
import { IB_DP_ECONOMICS_SL } from "./dp-economics-sl";
import { IB_DP_ENGLISH_A_HL } from "./dp-english-a-hl";
import { IB_DP_ENGLISH_A_SL } from "./dp-english-a-sl";
import { IB_DP_ENGLISH_B_HL } from "./dp-english-b-hl";
import { IB_DP_ENGLISH_B_SL } from "./dp-english-b-sl";
import { IB_DP_ENVIRONMENTAL_SYSTEMS_AND_SOCIETIES_HL } from "./dp-environmental-systems-and-societies-hl";
import { IB_DP_ENVIRONMENTAL_SYSTEMS_AND_SOCIETIES_SL } from "./dp-environmental-systems-and-societies-sl";
import { IB_DP_EXTENDED_ESSAY } from "./dp-extended-essay";
import { IB_DP_FILM_HL } from "./dp-film-hl";
import { IB_DP_FILM_SL } from "./dp-film-sl";
import { IB_DP_FRENCH_A_HL } from "./dp-french-a-hl";
import { IB_DP_FRENCH_A_SL } from "./dp-french-a-sl";
import { IB_DP_FRENCH_B_HL } from "./dp-french-b-hl";
import { IB_DP_GEOGRAPHY_HL } from "./dp-geography-hl";
import { IB_DP_GEOGRAPHY_SL } from "./dp-geography-sl";
import { IB_DP_GERMAN_A_HL } from "./dp-german-a-hl";
import { IB_DP_GERMAN_A_SL } from "./dp-german-a-sl";
import { IB_DP_GERMAN_B_HL } from "./dp-german-b-hl";
import { IB_DP_GERMAN_B_SL } from "./dp-german-b-sl";
import { IB_DP_GLOBAL_POLITICS_HL } from "./dp-global-politics-hl";
import { IB_DP_GLOBAL_POLITICS_SL } from "./dp-global-politics-sl";
import { IB_DP_HISTORY_HL } from "./dp-history-hl";
import { IB_DP_HISTORY_SL } from "./dp-history-sl";
import { IB_DP_MANDARIN_A_HL } from "./dp-mandarin-a-hl";
import { IB_DP_MANDARIN_A_SL } from "./dp-mandarin-a-sl";
import { IB_DP_MANDARIN_B_HL } from "./dp-mandarin-b-hl";
import { IB_DP_MANDARIN_B_SL } from "./dp-mandarin-b-sl";
import { IB_DP_MATH_AA_HL } from "./dp-math-aa-hl";
import { IB_DP_MATH_AA_SL } from "./dp-math-aa-sl";
import { IB_DP_MATH_AI_HL } from "./dp-math-ai-hl";
import { IB_DP_MATH_AI_SL } from "./dp-math-ai-sl";
import { IB_DP_MUSIC_HL } from "./dp-music-hl";
import { IB_DP_MUSIC_SL } from "./dp-music-sl";
import { IB_DP_PHYSICS_HL } from "./dp-physics-hl";
import { IB_DP_PHYSICS_SL } from "./dp-physics-sl";
import { IB_DP_PSYCHOLOGY_HL } from "./dp-psychology-hl";
import { IB_DP_PSYCHOLOGY_SL } from "./dp-psychology-sl";
import { IB_DP_SPANISH_A_HL } from "./dp-spanish-a-hl";
import { IB_DP_SPANISH_A_SL } from "./dp-spanish-a-sl";
import { IB_DP_SPANISH_B_HL } from "./dp-spanish-b-hl";
import { IB_DP_SPANISH_B_SL } from "./dp-spanish-b-sl";
import { IB_DP_THEATRE_HL } from "./dp-theatre-hl";
import { IB_DP_THEATRE_SL } from "./dp-theatre-sl";
import { IB_DP_THEORY_OF_KNOWLEDGE } from "./dp-theory-of-knowledge";
import { IB_DP_VISUAL_ARTS_HL } from "./dp-visual-arts-hl";
import { IB_DP_VISUAL_ARTS_SL } from "./dp-visual-arts-sl";
import { IB_MYP_DESIGN } from "./myp-design";
import { IB_MYP_DRAMA } from "./myp-drama";
import { IB_MYP_ENGLISH_B } from "./myp-english-b";
import { IB_MYP_ENGLISH_LANGUAGE_AND_LITERATURE } from "./myp-english-language-and-literature";
import { IB_MYP_FRENCH_B } from "./myp-french-b";
import { IB_MYP_FRENCH_LANGUAGE_AND_LITERATURE } from "./myp-french-language-and-literature";
import { IB_MYP_GERMAN_B } from "./myp-german-b";
import { IB_MYP_GERMAN_LANGUAGE_AND_LITERATURE } from "./myp-german-language-and-literature";
import { IB_MYP_INDIVIDUALS_AND_SOCIETIES } from "./myp-individuals-and-societies";
import { IB_MYP_MANDARIN_B } from "./myp-mandarin-b";
import { IB_MYP_MANDARIN_LANGUAGE_AND_LITERATURE } from "./myp-mandarin-language-and-literature";
import { IB_MYP_MATHEMATICS } from "./myp-mathematics";
import { IB_MYP_MUSIC } from "./myp-music";
import { IB_MYP_PHYSICAL_AND_HEALTH_EDUCATION } from "./myp-physical-and-health-education";
import { IB_MYP_SCIENCES } from "./myp-sciences";
import { IB_MYP_SPANISH_B } from "./myp-spanish-b";
import { IB_MYP_SPANISH_LANGUAGE_AND_LITERATURE } from "./myp-spanish-language-and-literature";
import { IB_MYP_VISUAL_ARTS } from "./myp-visual-arts";
import { IB_PYP_DRAMA } from "./pyp-drama";
import { IB_PYP_ENGLISH } from "./pyp-english";
import { IB_PYP_FRENCH } from "./pyp-french";
import { IB_PYP_GERMAN } from "./pyp-german";
import { IB_PYP_MANDARIN } from "./pyp-mandarin";
import { IB_PYP_MATHEMATICS } from "./pyp-mathematics";
import { IB_PYP_MUSIC } from "./pyp-music";
import { IB_PYP_PSPE } from "./pyp-pspe";
import { IB_PYP_SCIENCE_AND_TECHNOLOGY } from "./pyp-science-and-technology";
import { IB_PYP_SOCIAL_STUDIES } from "./pyp-social-studies";
import { IB_PYP_SPANISH } from "./pyp-spanish";
import { IB_PYP_VISUAL_ARTS } from "./pyp-visual-arts";

export type IbContentEntry = {
  pathway: IbPathwaySlug;
  subjectSlug: string;
  selectorSubject: string;
  content: SubjectLandingContent;
};

/**
 * Registry of published IB SEO pages.
 * Future batches: import content module + append one entry here.
 */
export const IB_CONTENT_REGISTRY: IbContentEntry[] = [
  {
    pathway: "pyp",
    subjectSlug: "drama",
    selectorSubject: "Drama",
    content: IB_PYP_DRAMA,
  },
  {
    pathway: "pyp",
    subjectSlug: "english",
    selectorSubject: "English",
    content: IB_PYP_ENGLISH,
  },
  {
    pathway: "pyp",
    subjectSlug: "french",
    selectorSubject: "French",
    content: IB_PYP_FRENCH,
  },
  {
    pathway: "pyp",
    subjectSlug: "german",
    selectorSubject: "German",
    content: IB_PYP_GERMAN,
  },
  {
    pathway: "pyp",
    subjectSlug: "mandarin",
    selectorSubject: "Mandarin",
    content: IB_PYP_MANDARIN,
  },
  {
    pathway: "pyp",
    subjectSlug: "mathematics",
    selectorSubject: "Mathematics",
    content: IB_PYP_MATHEMATICS,
  },
  {
    pathway: "pyp",
    subjectSlug: "music",
    selectorSubject: "Music",
    content: IB_PYP_MUSIC,
  },
  {
    pathway: "pyp",
    subjectSlug: "pspe",
    selectorSubject: "PSPE",
    content: IB_PYP_PSPE,
  },
  {
    pathway: "pyp",
    subjectSlug: "science-and-technology",
    selectorSubject: "Science and Technology",
    content: IB_PYP_SCIENCE_AND_TECHNOLOGY,
  },
  {
    pathway: "pyp",
    subjectSlug: "social-studies",
    selectorSubject: "Social Studies",
    content: IB_PYP_SOCIAL_STUDIES,
  },
  {
    pathway: "pyp",
    subjectSlug: "spanish",
    selectorSubject: "Spanish",
    content: IB_PYP_SPANISH,
  },
  {
    pathway: "pyp",
    subjectSlug: "visual-arts",
    selectorSubject: "Visual Arts",
    content: IB_PYP_VISUAL_ARTS,
  },
  {
    pathway: "myp",
    subjectSlug: "design",
    selectorSubject: "Design",
    content: IB_MYP_DESIGN,
  },
  {
    pathway: "myp",
    subjectSlug: "drama",
    selectorSubject: "Drama",
    content: IB_MYP_DRAMA,
  },
  {
    pathway: "myp",
    subjectSlug: "english-b",
    selectorSubject: "English B",
    content: IB_MYP_ENGLISH_B,
  },
  {
    pathway: "myp",
    subjectSlug: "english-language-and-literature",
    selectorSubject: "English Language and Literature",
    content: IB_MYP_ENGLISH_LANGUAGE_AND_LITERATURE,
  },
  {
    pathway: "myp",
    subjectSlug: "french-b",
    selectorSubject: "French B",
    content: IB_MYP_FRENCH_B,
  },
  {
    pathway: "myp",
    subjectSlug: "french-language-and-literature",
    selectorSubject: "French Language and Literature",
    content: IB_MYP_FRENCH_LANGUAGE_AND_LITERATURE,
  },
  {
    pathway: "myp",
    subjectSlug: "german-b",
    selectorSubject: "German B",
    content: IB_MYP_GERMAN_B,
  },
  {
    pathway: "myp",
    subjectSlug: "german-language-and-literature",
    selectorSubject: "German Language and Literature",
    content: IB_MYP_GERMAN_LANGUAGE_AND_LITERATURE,
  },
  {
    pathway: "myp",
    subjectSlug: "individuals-and-societies",
    selectorSubject: "Individuals and Societies",
    content: IB_MYP_INDIVIDUALS_AND_SOCIETIES,
  },
  {
    pathway: "myp",
    subjectSlug: "mandarin-b",
    selectorSubject: "Mandarin B",
    content: IB_MYP_MANDARIN_B,
  },
  {
    pathway: "myp",
    subjectSlug: "mandarin-language-and-literature",
    selectorSubject: "Mandarin Language and Literature",
    content: IB_MYP_MANDARIN_LANGUAGE_AND_LITERATURE,
  },
  {
    pathway: "myp",
    subjectSlug: "mathematics",
    selectorSubject: "Mathematics",
    content: IB_MYP_MATHEMATICS,
  },
  {
    pathway: "myp",
    subjectSlug: "music",
    selectorSubject: "Music",
    content: IB_MYP_MUSIC,
  },
  {
    pathway: "myp",
    subjectSlug: "physical-and-health-education",
    selectorSubject: "Physical and Health Education",
    content: IB_MYP_PHYSICAL_AND_HEALTH_EDUCATION,
  },
  {
    pathway: "myp",
    subjectSlug: "sciences",
    selectorSubject: "Sciences",
    content: IB_MYP_SCIENCES,
  },
  {
    pathway: "myp",
    subjectSlug: "spanish-b",
    selectorSubject: "Spanish B",
    content: IB_MYP_SPANISH_B,
  },
  {
    pathway: "myp",
    subjectSlug: "spanish-language-and-literature",
    selectorSubject: "Spanish Language and Literature",
    content: IB_MYP_SPANISH_LANGUAGE_AND_LITERATURE,
  },
  {
    pathway: "myp",
    subjectSlug: "visual-arts",
    selectorSubject: "Visual Arts",
    content: IB_MYP_VISUAL_ARTS,
  },
  {
    pathway: "dp",
    subjectSlug: "biology-hl",
    selectorSubject: "Biology HL",
    content: IB_DP_BIOLOGY_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "biology-sl",
    selectorSubject: "Biology SL",
    content: IB_DP_BIOLOGY_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "business-management-hl",
    selectorSubject: "Business Management HL",
    content: IB_DP_BUSINESS_MANAGEMENT_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "business-management-sl",
    selectorSubject: "Business Management SL",
    content: IB_DP_BUSINESS_MANAGEMENT_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "cas-reflection",
    selectorSubject: "CAS Reflection",
    content: IB_DP_CAS_REFLECTION,
  },
  {
    pathway: "dp",
    subjectSlug: "chemistry-hl",
    selectorSubject: "Chemistry HL",
    content: IB_DP_CHEMISTRY_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "chemistry-sl",
    selectorSubject: "Chemistry SL",
    content: IB_DP_CHEMISTRY_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "computer-science-hl",
    selectorSubject: "Computer Science HL",
    content: IB_DP_COMPUTER_SCIENCE_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "computer-science-sl",
    selectorSubject: "Computer Science SL",
    content: IB_DP_COMPUTER_SCIENCE_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "dance-hl",
    selectorSubject: "Dance HL",
    content: IB_DP_DANCE_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "dance-sl",
    selectorSubject: "Dance SL",
    content: IB_DP_DANCE_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "economics-hl",
    selectorSubject: "Economics HL",
    content: IB_DP_ECONOMICS_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "economics-sl",
    selectorSubject: "Economics SL",
    content: IB_DP_ECONOMICS_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "english-a-hl",
    selectorSubject: "English A HL",
    content: IB_DP_ENGLISH_A_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "english-a-sl",
    selectorSubject: "English A SL",
    content: IB_DP_ENGLISH_A_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "english-b-hl",
    selectorSubject: "English B HL",
    content: IB_DP_ENGLISH_B_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "english-b-sl",
    selectorSubject: "English B SL",
    content: IB_DP_ENGLISH_B_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "environmental-systems-and-societies-hl",
    selectorSubject: "Environmental Systems and Societies HL",
    content: IB_DP_ENVIRONMENTAL_SYSTEMS_AND_SOCIETIES_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "environmental-systems-and-societies-sl",
    selectorSubject: "Environmental Systems and Societies SL",
    content: IB_DP_ENVIRONMENTAL_SYSTEMS_AND_SOCIETIES_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "extended-essay",
    selectorSubject: "Extended Essay",
    content: IB_DP_EXTENDED_ESSAY,
  },
  {
    pathway: "dp",
    subjectSlug: "film-hl",
    selectorSubject: "Film HL",
    content: IB_DP_FILM_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "film-sl",
    selectorSubject: "Film SL",
    content: IB_DP_FILM_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "french-a-hl",
    selectorSubject: "French A HL",
    content: IB_DP_FRENCH_A_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "french-a-sl",
    selectorSubject: "French A SL",
    content: IB_DP_FRENCH_A_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "french-b-hl",
    selectorSubject: "French B HL",
    content: IB_DP_FRENCH_B_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "geography-hl",
    selectorSubject: "Geography HL",
    content: IB_DP_GEOGRAPHY_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "geography-sl",
    selectorSubject: "Geography SL",
    content: IB_DP_GEOGRAPHY_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "german-a-hl",
    selectorSubject: "German A HL",
    content: IB_DP_GERMAN_A_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "german-a-sl",
    selectorSubject: "German A SL",
    content: IB_DP_GERMAN_A_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "german-b-hl",
    selectorSubject: "German B HL",
    content: IB_DP_GERMAN_B_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "german-b-sl",
    selectorSubject: "German B SL",
    content: IB_DP_GERMAN_B_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "global-politics-hl",
    selectorSubject: "Global Politics HL",
    content: IB_DP_GLOBAL_POLITICS_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "global-politics-sl",
    selectorSubject: "Global Politics SL",
    content: IB_DP_GLOBAL_POLITICS_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "history-hl",
    selectorSubject: "History HL",
    content: IB_DP_HISTORY_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "history-sl",
    selectorSubject: "History SL",
    content: IB_DP_HISTORY_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "mandarin-a-hl",
    selectorSubject: "Mandarin A HL",
    content: IB_DP_MANDARIN_A_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "mandarin-a-sl",
    selectorSubject: "Mandarin A SL",
    content: IB_DP_MANDARIN_A_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "mandarin-b-hl",
    selectorSubject: "Mandarin B HL",
    content: IB_DP_MANDARIN_B_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "mandarin-b-sl",
    selectorSubject: "Mandarin B SL",
    content: IB_DP_MANDARIN_B_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "math-aa-hl",
    selectorSubject: "Math AA HL",
    content: IB_DP_MATH_AA_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "math-aa-sl",
    selectorSubject: "Math AA SL",
    content: IB_DP_MATH_AA_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "math-ai-hl",
    selectorSubject: "Math AI HL",
    content: IB_DP_MATH_AI_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "math-ai-sl",
    selectorSubject: "Math AI SL",
    content: IB_DP_MATH_AI_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "music-hl",
    selectorSubject: "Music HL",
    content: IB_DP_MUSIC_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "music-sl",
    selectorSubject: "Music SL",
    content: IB_DP_MUSIC_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "physics-hl",
    selectorSubject: "Physics HL",
    content: IB_DP_PHYSICS_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "physics-sl",
    selectorSubject: "Physics SL",
    content: IB_DP_PHYSICS_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "psychology-hl",
    selectorSubject: "Psychology HL",
    content: IB_DP_PSYCHOLOGY_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "psychology-sl",
    selectorSubject: "Psychology SL",
    content: IB_DP_PSYCHOLOGY_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "spanish-a-hl",
    selectorSubject: "Spanish A HL",
    content: IB_DP_SPANISH_A_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "spanish-a-sl",
    selectorSubject: "Spanish A SL",
    content: IB_DP_SPANISH_A_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "spanish-b-hl",
    selectorSubject: "Spanish B HL",
    content: IB_DP_SPANISH_B_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "spanish-b-sl",
    selectorSubject: "Spanish B SL",
    content: IB_DP_SPANISH_B_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "theatre-hl",
    selectorSubject: "Theatre HL",
    content: IB_DP_THEATRE_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "theatre-sl",
    selectorSubject: "Theatre SL",
    content: IB_DP_THEATRE_SL,
  },
  {
    pathway: "dp",
    subjectSlug: "theory-of-knowledge",
    selectorSubject: "Theory of Knowledge",
    content: IB_DP_THEORY_OF_KNOWLEDGE,
  },
  {
    pathway: "dp",
    subjectSlug: "visual-arts-hl",
    selectorSubject: "Visual Arts HL",
    content: IB_DP_VISUAL_ARTS_HL,
  },
  {
    pathway: "dp",
    subjectSlug: "visual-arts-sl",
    selectorSubject: "Visual Arts SL",
    content: IB_DP_VISUAL_ARTS_SL,
  },
];

const byPathwaySubject = new Map(
  IB_CONTENT_REGISTRY.map((entry) => [
    `${entry.pathway}/${entry.subjectSlug}`,
    entry,
  ]),
);

export function getIbContent(
  pathway: string,
  subjectSlug: string,
): IbContentEntry | undefined {
  return byPathwaySubject.get(`${pathway}/${subjectSlug}`);
}

export function getAllIbContents(): SubjectLandingContent[] {
  return IB_CONTENT_REGISTRY.map((entry) => entry.content);
}

export function getIbStaticParams(): { pathway: string; subject: string }[] {
  return IB_CONTENT_REGISTRY.map((entry) => ({
    pathway: entry.pathway,
    subject: entry.subjectSlug,
  }));
}

export function getIbSitemapPaths(): string[] {
  return IB_CONTENT_REGISTRY.map((entry) => entry.content.path);
}

export function getIbSubjectPageMatches(): SubjectPageMatch[] {
  return IB_CONTENT_REGISTRY.flatMap((entry) => {
    const selectorPathway = IB_PATHWAY_SHORT_LABELS[entry.pathway];
    const years = IB_SELECTOR_YEARS_BY_PATHWAY[selectorPathway];
    if (!years?.length) return [];
    return [
      {
        curriculum: "IB",
        pathway: selectorPathway,
        years,
        subject: entry.selectorSubject,
        path: entry.content.path,
      },
    ];
  });
}

export function getIbSelectorSubjectsWithPages(
  selectorPathway: string,
): { title: string }[] {
  const slug = IB_SELECTOR_PATHWAY_TO_SLUG[selectorPathway];
  if (!slug) return [];
  return IB_CONTENT_REGISTRY.filter((entry) => entry.pathway === slug).map(
    (entry) => ({ title: entry.selectorSubject }),
  );
}

export {
  IB_DP_BIOLOGY_HL,
  IB_DP_BIOLOGY_SL,
  IB_DP_BUSINESS_MANAGEMENT_HL,
  IB_DP_BUSINESS_MANAGEMENT_SL,
  IB_DP_CAS_REFLECTION,
  IB_DP_CHEMISTRY_HL,
  IB_DP_CHEMISTRY_SL,
  IB_DP_COMPUTER_SCIENCE_HL,
  IB_DP_COMPUTER_SCIENCE_SL,
  IB_DP_DANCE_HL,
  IB_DP_DANCE_SL,
  IB_DP_ECONOMICS_HL,
  IB_DP_ECONOMICS_SL,
  IB_DP_ENGLISH_A_HL,
  IB_DP_ENGLISH_A_SL,
  IB_DP_ENGLISH_B_HL,
  IB_DP_ENGLISH_B_SL,
  IB_DP_ENVIRONMENTAL_SYSTEMS_AND_SOCIETIES_HL,
  IB_DP_ENVIRONMENTAL_SYSTEMS_AND_SOCIETIES_SL,
  IB_DP_EXTENDED_ESSAY,
  IB_DP_FILM_HL,
  IB_DP_FILM_SL,
  IB_DP_FRENCH_A_HL,
  IB_DP_FRENCH_A_SL,
  IB_DP_FRENCH_B_HL,
  IB_DP_GEOGRAPHY_HL,
  IB_DP_GEOGRAPHY_SL,
  IB_DP_GERMAN_A_HL,
  IB_DP_GERMAN_A_SL,
  IB_DP_GERMAN_B_HL,
  IB_DP_GERMAN_B_SL,
  IB_DP_GLOBAL_POLITICS_HL,
  IB_DP_GLOBAL_POLITICS_SL,
  IB_DP_HISTORY_HL,
  IB_DP_HISTORY_SL,
  IB_DP_MANDARIN_A_HL,
  IB_DP_MANDARIN_A_SL,
  IB_DP_MANDARIN_B_HL,
  IB_DP_MANDARIN_B_SL,
  IB_DP_MATH_AA_HL,
  IB_DP_MATH_AA_SL,
  IB_DP_MATH_AI_HL,
  IB_DP_MATH_AI_SL,
  IB_DP_MUSIC_HL,
  IB_DP_MUSIC_SL,
  IB_DP_PHYSICS_HL,
  IB_DP_PHYSICS_SL,
  IB_DP_PSYCHOLOGY_HL,
  IB_DP_PSYCHOLOGY_SL,
  IB_DP_SPANISH_A_HL,
  IB_DP_SPANISH_A_SL,
  IB_DP_SPANISH_B_HL,
  IB_DP_SPANISH_B_SL,
  IB_DP_THEATRE_HL,
  IB_DP_THEATRE_SL,
  IB_DP_THEORY_OF_KNOWLEDGE,
  IB_DP_VISUAL_ARTS_HL,
  IB_DP_VISUAL_ARTS_SL,
  IB_MYP_DESIGN,
  IB_MYP_DRAMA,
  IB_MYP_ENGLISH_B,
  IB_MYP_ENGLISH_LANGUAGE_AND_LITERATURE,
  IB_MYP_FRENCH_B,
  IB_MYP_FRENCH_LANGUAGE_AND_LITERATURE,
  IB_MYP_GERMAN_B,
  IB_MYP_GERMAN_LANGUAGE_AND_LITERATURE,
  IB_MYP_INDIVIDUALS_AND_SOCIETIES,
  IB_MYP_MANDARIN_B,
  IB_MYP_MANDARIN_LANGUAGE_AND_LITERATURE,
  IB_MYP_MATHEMATICS,
  IB_MYP_MUSIC,
  IB_MYP_PHYSICAL_AND_HEALTH_EDUCATION,
  IB_MYP_SCIENCES,
  IB_MYP_SPANISH_B,
  IB_MYP_SPANISH_LANGUAGE_AND_LITERATURE,
  IB_MYP_VISUAL_ARTS,
  IB_PYP_DRAMA,
  IB_PYP_ENGLISH,
  IB_PYP_FRENCH,
  IB_PYP_GERMAN,
  IB_PYP_MANDARIN,
  IB_PYP_MATHEMATICS,
  IB_PYP_MUSIC,
  IB_PYP_PSPE,
  IB_PYP_SCIENCE_AND_TECHNOLOGY,
  IB_PYP_SOCIAL_STUDIES,
  IB_PYP_SPANISH,
  IB_PYP_VISUAL_ARTS,
};
