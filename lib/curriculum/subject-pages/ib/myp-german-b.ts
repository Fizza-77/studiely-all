import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_GERMAN_B: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/german-b",
  seoTitle: "IB MYP German B Study Resources | Studiely",
  metaDescription:
    "Study German B in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP German B, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP German B",
    "MYP German B resources",
    "MYP German B revision notes",
    "MYP German B flashcards",
    "MYP German B quiz",
    "MYP German B practice questions",
    "MYP German B assessment practice",
  ],
  breadcrumbName: "German B",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP German B Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP German B is best approached as a skills-and-understanding course, not a collection of facts to cram. Students studying German through MYP language acquisition are usually trying to make language learning more manageable: what vocabulary matters, how to practise regularly, and how to turn passive understanding into confident communication. MYP German develops through proficiency phases, so revision should match your current phase and the task types set by school.",
  lead: "IB MYP German B supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Communication",
      body: "Following spoken detail, reading efficiently, sustaining conversation and producing clear organised writing. You can understand and respond without translating every word.",
    },
    {
      title: "Language systems",
      body: "Cases, word order, verb forms, adjective endings, connectors and topic vocabulary. New structures appear accurately in your own speaking and writing.",
    },
    {
      title: "Transfer",
      body: "Use familiar language in a new topic, text type or conversation. You can adapt vocabulary and register to purpose and audience.",
    },
  ],
  introTitle: "Build Language You Can Actually Use",
  introParagraphs: [
    "Build listening, reading, speaking, writing, vocabulary range and grammatical control. Progress shows when German becomes more accurate and flexible across different purposes, audiences and communication settings.",
  ],
  extraSections: [
    {
      title: "A Sustainable Language Practice Loop",
      paragraphs: [
        "Anchor a German session in one practical message: explaining a routine, comparing options, narrating an event or giving a viewpoint. Retrieve key verbs and case-linked phrases, read or listen to a short source, then speak from a three-point plan without scripting every sentence. Write a second response that changes the audience or purpose, forcing you to adjust register and word order. Review recurring case, word-order or ending errors and turn only those patterns into the next quiz.",
      ],
      bullets: [
        "Learn German nouns with article and plural so case practice has the information it needs.",
        "Retest verb-position rules through complete clauses and short messages rather than rule labels.",
        "Use speaking prompts that change tense or viewpoint so grammar becomes flexible.",
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
      body: "IB MYP German B Revision Notes should make the next study action obvious. Organise notes by communicative function rather than by textbook page. For German, keep compact sections for cases, word order, verb forms, adjective endings, connectors and topic vocabulary, plus useful expressions for describing, comparing, explaining, asking, reacting and giving opinions. Add one example sentence from your own course context to every rule.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP German B Flashcards should make the next study action obvious. Use active-recall cards for cases, word order, verb forms, adjective endings, connectors and topic vocabulary. Mix recognition with production: hear or read a cue, then say or write the answer before revealing it. For German, phrase-level cards are more useful than isolated translations because they preserve grammar, collocation and natural word order.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP German B Quiz should make the next study action obvious. Build short mixed quizzes around listening/reading detail, vocabulary in context, grammar choices and the best response for an audience. Include a reason after every answer. The aim is to notice why a form or phrase works in German, not to collect a percentage score and move on.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP German B Exam Focus should make the next study action obvious. Prepare for the comprehension, speaking, interaction and writing tasks used by your school while monitoring cases, verb position, adjective endings and register. Official MYP language acquisition is phase-based, so practise at the proficiency range your school teaches. Where eAssessment applies, introduce timed unfamiliar texts gradually rather than copying a DP Language B exam routine.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP German B Exam Practice should make the next study action obvious. Create a weekly cycle that touches all four core modes: understand, retrieve, speak and write. Review a theme, retrieve key structures, respond aloud to prompts, then edit a short written task for word order and case. Reuse corrected language in a second task so feedback becomes part of memory instead of a comment you read once.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so German language acquisition stays tied to communication across listening, reading, speaking and writing.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "Is “German B” an official MYP level?",
      answer:
        "Students and schools may use labels such as German B informally, but official MYP language acquisition is organised through six proficiency phases rather than DP-style Language B SL/HL levels. Your school places you in the phase that reflects your prior experience and learning pathway.",
    },
    {
      question: "What should I revise first in MYP German?",
      answer:
        "Start with high-frequency language from your current units, then the structures that help you communicate across many topics. For German, prioritise cases, word order, verb forms, adjective endings, connectors and topic vocabulary. Combine those with regular listening, reading, speaking and writing instead of leaving productive practice until assessment week.",
    },
    {
      question: "How often should I use flashcards for German?",
      answer:
        "For German, flashcards are most useful when they test patterns rather than isolated nouns. Include a noun with its article and plural, verbs with useful sentence frames, case-governing prepositions and word-order cues. Review frequently in small batches, and promote difficult cards into short spoken or written examples before deciding they are secure.",
    },
    {
      question: "How should I prepare for MYP language eAssessment?",
      answer:
        "Confirm your school’s assessment pathway first. If German language acquisition eAssessment is used, combine unfamiliar comprehension with timed speaking or writing tasks that demand an appropriate audience and purpose. Do not let timing replace language development: case control, verb position and flexible vocabulary improve through repeated use across different contexts.",
    },
  ],
  ctaTitle: "Build a better German study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP German B",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
