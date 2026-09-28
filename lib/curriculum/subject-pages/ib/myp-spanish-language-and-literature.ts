import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_SPANISH_LANGUAGE_AND_LITERATURE: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/spanish-language-and-literature",
  seoTitle: "IB MYP Spanish Language and Literature Resources | Studiely",
  metaDescription:
    "Study Spanish in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Spanish, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Spanish Language and Literature",
    "MYP Spanish Language and Literature resources",
    "MYP Spanish Language and Literature revision notes",
    "MYP Spanish Language and Literature flashcards",
    "MYP Spanish Language and Literature quiz",
    "MYP Spanish Language and Literature practice questions",
    "MYP Spanish Language and Literature assessment practice",
  ],
  breadcrumbName: "Spanish Language and Literature",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Spanish Language and Literature Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Spanish Language and Literature is best approached as a skills-and-understanding course, not a collection of facts to cram. Spanish Language and Literature rewards students who can move between interpretation and expression. A strong response notices not only what a text says but how register, imagery, syntax, cultural reference and structure shape its effect. Revision should therefore connect Spanish-language precision with critical reading of different voices and contexts.",
  lead: "IB MYP Spanish Language and Literature supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Interpretation",
      body: "Track viewpoint, tone, imagery and cultural signals. You support interpretations with precise textual evidence.",
    },
    {
      title: "Written expression",
      body: "Control register, cohesion and analytical vocabulary. Ideas are clear, connected and appropriate to purpose.",
    },
    {
      title: "Comparative thinking",
      body: "Connect themes and techniques across text types. You can discuss similarities without flattening differences.",
    },
  ],
  introTitle: "Build Analysis That Transfers Across Texts",
  introParagraphs: [
    "Study literary and non-literary Spanish texts while developing analytical reading, purposeful writing, oral interpretation, vocabulary precision, register awareness and sensitivity to cultural and regional context.",
  ],
  extraSections: [
    {
      title: "A Practical Study Loop for Language and Literature",
      paragraphs: [
        "Choose a short Spanish text, annotate five meaningful choices, turn those choices into revision notes, retrieve key language with flashcards, complete a focused quiz, then write a 120-word interpretation. Revisit the same task two days later without looking at the first response.",
      ],
      bullets: [
        "Practise analytical verbs and register vocabulary in complete Spanish sentences.",
        "Compare literary and non-literary texts so interpretation adapts across form and audience.",
        "Use cultural context only when it changes the meaning or effect of a specific textual choice.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "Spanish Language and Literature students can lose marks when sophisticated vocabulary replaces clear interpretation. Do not force an analytical term into a paragraph unless you can connect it to a precise textual choice and explain the effect in Spanish. Another trap is treating regional or cultural context as decoration; use context only when it changes how a word, register, image or viewpoint can be understood. Practise moving from cita or evidence to efecto and then to propósito. When revising, compare one literary and one non-literary Spanish text so you learn to adapt the same analytical habits across form, audience and register rather than memorising a response for a single class text.",
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
      body: "IB MYP Spanish Language and Literature Revision Notes should make the next study action obvious. Create compact notes that pair analytical vocabulary with examples: voz, tono, propósito, audiencia, registro, estructura and recursos retóricos. Add short model sentences that show how to move from identification to interpretation in accurate Spanish.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Spanish Language and Literature Flashcards should make the next study action obvious. Use two-way cards: one side gives a device, register choice or key analytical verb; the other asks you to use it in a sentence about a text. Include quotation fragments and ask yourself what they reveal about perspective, identity or social context.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Spanish Language and Literature Quiz should make the next study action obvious. Mix comprehension with language choices. Include questions that distinguish literal meaning from implication, identify a suitable register, choose the strongest evidence and improve an analytical sentence. Keep explanations in Spanish where possible to strengthen academic expression.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Spanish Language and Literature Exam Focus should make the next study action obvious. Rehearse short analytical responses, text comparisons and purposeful writing. For schools using MYP eAssessment, practise interpreting unfamiliar Spanish texts on screen and planning quickly; for other courses, mirror the task formats and criteria your teacher actually uses.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Spanish Language and Literature Exam Practice should make the next study action obvious. Alternate close-reading drills with short pieces of writing. One session might analyse a headline and image; another might build a paragraph around a poem. Track recurring issues such as vague vocabulary, agreement errors, weak evidence or summary instead of analysis.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Spanish analysis and expression reinforce each other across literary and non-literary texts.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question:
        "How is MYP Spanish Language and Literature different from Spanish language acquisition?",
      answer:
        "Language and Literature is designed for students studying Spanish as a strong academic language and focuses heavily on interpreting and producing complex texts. Language acquisition is phase-based and develops proficiency progressively. Your school decides the pathway that fits your language background.",
    },
    {
      question: "What vocabulary should I revise?",
      answer:
        "Prioritise analytical vocabulary that helps you discuss purpose, audience, perspective, tone, structure and stylistic choices, plus the unit-specific language needed for the texts you study. Learn words in phrases and model sentences rather than as disconnected lists.",
    },
    {
      question: "How do I avoid summarising a Spanish text instead of analysing it?",
      answer:
        "After every piece of evidence, ask what the choice does and why it matters. Replace plot retelling with a chain such as choice → effect → meaning → connection to purpose or context. This keeps your paragraph focused on interpretation.",
    },
    {
      question: "Should I practise only the texts studied in class?",
      answer:
        "No. Class texts build depth, but unfamiliar short texts develop transfer. Use brief articles, advertisements, speeches or literary extracts to practise identifying audience, purpose, tone and technique without relying on memorised classroom discussion.",
    },
  ],
  ctaTitle: "Build a better Spanish study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Spanish",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
