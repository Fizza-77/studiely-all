import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_SOCIAL_STUDIES: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/social-studies",
  seoTitle: "IB PYP Social Studies Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP Social Studies study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP Social Studies resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP Social Studies",
    "PYP Social Studies resources",
    "PYP Social Studies activities",
    "IB PYP Social Studies learning resources",
    "IB PYP Social Studies practice activities",
    "IB PYP Social Studies revision notes",
    "IB PYP Social Studies flashcards",
    "IB PYP Social Studies quiz",
    "IB PYP Social Studies practice questions",
    "IB PYP Social Studies exam focus",
    "IB PYP Social Studies exam practice",
    "IB PYP Social Studies study resources",
  ],
  breadcrumbName: "Social Studies",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP Social Studies Resources for",
  heroHighlight: "People, Place & Inquiry",
  heroIntro:
    "Understand people and places by asking better questions. Studiely helps PYP learners organise evidence, timelines, maps, perspectives and key vocabulary so social studies becomes a connected story rather than a list of facts.",
  lead: "IB PYP Social Studies helps young learners inquire into people, communities, culture, systems, environments, resources and change across time. Studiely supports that inquiry with structured notes, flashcards, short quizzes and practice tasks that help Grade 1–5 students compare perspectives, organise evidence and explain connections.",
  workflowSteps: [
    {
      title: "People + systems",
      body: "Explore how communities, organisations and systems work.",
    },
    {
      title: "Place + change",
      body: "Use maps, timelines and spatial language to understand change.",
    },
    {
      title: "Evidence + perspective",
      body: "Support explanations with sources and compare different viewpoints.",
    },
  ],
  introTitle: "What IB PYP Social Studies Looks Like in PYP Learning",
  introParagraphs: [
    "Social studies in the PYP can be highly transdisciplinary. A unit might connect geography with environmental choices, history with identity, or community systems with rights and responsibilities. Search resources often describe strands such as human systems, culture, change over time and environments, but a student’s actual programme depends on the school. The safest study approach is therefore to organise the specific concepts and evidence being explored in the current unit.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Inquiry habits that organise place, change, evidence and perspective.",
  coverTopics: [
    "locating and describing places using maps, direction and spatial language",
    "understanding how communities, organisations and systems work",
    "examining how life, ideas or places change over time",
    "comparing viewpoints and recognising that sources can present different perspectives",
    "connecting choices about resources with people and environments",
    "using evidence to support a simple explanation about a social issue or historical question",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Social Studies",
      body: "IB PYP Social Studies Revision Notes can organise a topic by question rather than by copied facts. A useful note might include a key concept, two pieces of evidence, a simple timeline or place reference, one perspective and a connection to the current unit of inquiry. This structure helps students explain relationships instead of memorising disconnected names and dates.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Social Studies Flashcards for Active Recall",
      body: "Flashcards can cover vocabulary, map features, sequence, cause-and-effect links and perspective prompts. A strong card might ask “Why did this change?” or “Whose point of view is missing?” so recall grows into inquiry rather than stopping at a definition.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP Social Studies Quiz can check location, sequence, source interpretation, vocabulary and simple reasoning. Students might choose which evidence supports a claim or identify how two perspectives differ. Feedback should send the learner back to the source or concept that needs another look.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Choose the Evidence or Concept to Revisit",
      body: "Studiely’s Exam Focus should function as a review-priority tool for an upcoming presentation, inquiry reflection or school assessment. It can highlight the timeline, map skill, concept or evidence set that needs attention, without implying that PYP social studies is an external examination course.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open review focus",
    },
    {
      id: "exam-practice",
      title: "Practise Using Evidence and Perspective",
      body: "Practice can be short application: read a small source, interpret a map, order events, compare two viewpoints or write a brief evidence-based explanation. These tasks prepare students for authentic classroom thinking and communication rather than test-taking for its own sake.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise with evidence",
    },
  ],
  afterToolsSections: [
    {
      title: "Ask “What Changed, Why, and for Whom?”",
      paragraphs: [
        "Take the current topic and answer three questions: what changed or differs, why might that have happened, and who experienced it differently? Add one map, source or fact as evidence for each answer. Then make flashcards from the vocabulary and complete a short quiz that mixes recall with one perspective question. This turns a broad topic into an explanation the learner can defend.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "A weekly social studies routine can begin with one inquiry question and three pieces of information that help answer it. Next, place those details into a simple timeline, map, comparison or perspective frame. Later, retrieve the important vocabulary with flashcards and take a short quiz that includes at least one evidence question. Finish by explaining the topic aloud or in a short paragraph using the evidence rather than the notes. This makes the final review an act of synthesis. When a topic includes different viewpoints, students should also name whose perspective they have and what other perspective could add to the picture.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP Social Studies",
  whyParagraphs: [
    "PYP social studies SERPs are rich in teacher units, strand explanations and printable inquiry resources. The learner gap is synthesis: after exploring several sources, can the student say what changed, whose perspective they are hearing and what evidence supports the conclusion? Studiely can turn that synthesis into a repeatable self-study process.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "What topics can PYP Social Studies include?",
      answer:
        "Schools may explore communities, systems, culture, history, geography, environments, resources and other human experiences through transdisciplinary inquiry. The exact content varies by school and unit.",
    },
    {
      question: "How should students revise a social studies inquiry?",
      answer:
        "Start with the central question, then organise evidence, vocabulary, places, sequence and perspectives around it. This is usually more useful than rewriting every fact from a source.",
    },
    {
      question: "Are maps and timelines important?",
      answer:
        "They can be very useful tools for understanding place and change over time. Students should practise reading and using them when those representations are part of the current inquiry.",
    },
    {
      question: "Can Studiely help with source analysis?",
      answer:
        "At a primary level, students can record what a source shows, who created it, what perspective it represents and what question it helps answer. Teacher guidance remains important for evaluating sources appropriately.",
    },
    {
      question: "Is exam practice the main goal?",
      answer:
        "No. PYP Social Studies should remain inquiry- and understanding-focused. Practice tasks are best used to rehearse explaining, comparing and using evidence in classroom contexts.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP Social Studies",
  ctaBody:
    "Turn your current social studies inquiry into a clear evidence map in Studiely, then practise explaining the connections without relying on your notes.",
  ctaPrimaryLabel: "Start studying PYP Social Studies",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
