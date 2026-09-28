import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_MATHEMATICS: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/mathematics",
  seoTitle: "IB MYP Mathematics Study Resources | Studiely",
  metaDescription:
    "Study Mathematics in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Mathematics, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Mathematics",
    "MYP Mathematics resources",
    "MYP Mathematics revision notes",
    "MYP Mathematics flashcards",
    "MYP Mathematics quiz",
    "MYP Mathematics practice questions",
    "MYP Mathematics assessment practice",
  ],
  breadcrumbName: "Mathematics",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Mathematics Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Mathematics is best approached as a skills-and-understanding course, not a collection of facts to cram. MYP Mathematics is not mastered by reading worked solutions until they look familiar. Students need to represent a problem, choose a method, communicate reasoning and test whether the answer makes sense. That is why effective revision mixes core fluency with unfamiliar problems and real-life application.",
  lead: "IB MYP Mathematics supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Fluency",
      body: "Recall methods, notation and key relationships. Routine questions are accurate without excessive prompting.",
    },
    {
      title: "Reasoning",
      body: "Investigate patterns and justify conclusions. You can explain why a method or rule works.",
    },
    {
      title: "Application",
      body: "Model unfamiliar and real-life situations. You select mathematics rather than waiting for the method to be named.",
    },
  ],
  introTitle: "What Strong MYP Work Looks Like",
  introParagraphs: [
    "Strengthen number, algebra, geometry and trigonometry, statistics and probability while developing pattern investigation, mathematical communication, modelling and problem solving. MYP mathematics can be taught at standard or extended levels of challenge.",
  ],
  extraSections: [
    {
      title: "Turn Revision Into Transfer",
      paragraphs: [
        "Recall a method from memory, solve one routine example, test the idea with flashcards, complete a mixed quiz, then attempt an unfamiliar problem. Finish by writing one sentence that explains why your method was appropriate.",
      ],
      bullets: [
        "Combine fluency, reasoning and unfamiliar application.",
        "Use standard or extended practice that matches your school pathway.",
        "Reattempt mistakes after a delay so method choice becomes retrievable.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "The biggest mathematics trap is recognising a worked example and mistaking recognition for mastery. Close the solution, reproduce the method, then change the numbers or context. A second trap is skipping communication because the final answer is correct. MYP mathematics values representation and reasoning, so show the relationship, justify a pattern or explain why a model fits. When a question goes wrong, do not write “careless mistake.” Name the cause: concept choice, algebra, arithmetic, diagram, unit, interpretation or incomplete reasoning. That label makes the next practice set far more targeted. Keep one small error log and revisit it weekly; the goal is not to collect mistakes, but to see whether the same type is disappearing over time.",
      ],
    },
  ],
  coverTitle: "",
  coverIntro: "",
  coverTopics: [],
  coverClosing: "",
  showCoverTopics: false,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes",
      body: "IB MYP Mathematics Revision Notes should make the next study action obvious. Keep notes minimal and operational: one concept, one worked example, one common error and one “when to use this” cue. For algebra or geometry, add a visual representation; for statistics, record what a measure tells you and when it can mislead.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Mathematics Flashcards should make the next study action obvious. Flashcards work best for formulas, notation, definitions, inverse relationships and method triggers. Include cards that show a problem and ask only for the first step or suitable method; this trains recognition without turning every card into a full calculation.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Mathematics Quiz should make the next study action obvious. Use short adaptive sets that mix procedures, reasoning and interpretation. When an answer is wrong, identify whether the issue was arithmetic, concept choice, algebraic manipulation, reading the question or communication. The feedback category should guide the next question.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Mathematics Exam Focus should make the next study action obvious. Practise both familiar methods and unfamiliar application. Where your school enters students for MYP eAssessment, use on-screen style questions and mixed contexts; otherwise mirror school assessments and the level—standard or extended—that your course actually teaches.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Mathematics Exam Practice should make the next study action obvious. Move through three layers: a short fluency set, a mixed problem set, then one unfamiliar modelling or reasoning task. Rework incorrect questions after a delay without looking at the solution. The second attempt is where method choice becomes retrievable.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Mathematics revision builds fluency, reasoning and transfer to unfamiliar problems.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "What topics are included in MYP Mathematics?",
      answer:
        "The official MYP framework covers number, algebra, geometry and trigonometry, statistics and probability. Schools choose how those ideas are sequenced and contextualised, so your class units remain the best guide to immediate revision priorities.",
    },
    {
      question: "What is the difference between standard and extended MYP Mathematics?",
      answer:
        "Standard mathematics develops the core principles and skills required for the MYP objectives. Extended mathematics adds greater breadth and depth and can prepare students for more advanced mathematical study. Your school decides which level or pathway it offers.",
    },
    {
      question: "How do I stop forgetting methods after a test?",
      answer:
        "Use spaced retrieval and mixed practice. Reattempt a small number of old questions every week, especially ones that require you to choose the method. Interleaving makes the cue less obvious and strengthens long-term recall.",
    },
    {
      question: "Are worked examples enough for revision?",
      answer:
        "Worked examples are useful for learning a method, but mastery requires you to close the example and reproduce the reasoning independently. Follow examples with a similar question and then an unfamiliar one that changes the context.",
    },
  ],
  ctaTitle: "Build a better Mathematics study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Mathematics",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
