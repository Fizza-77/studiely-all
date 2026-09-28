import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_FRENCH_B: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/french-b",
  seoTitle: "IB MYP French B Study Resources | Studiely",
  metaDescription:
    "Study French B in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP French B, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP French B",
    "MYP French B resources",
    "MYP French B revision notes",
    "MYP French B flashcards",
    "MYP French B quiz",
    "MYP French B practice questions",
    "MYP French B assessment practice",
  ],
  breadcrumbName: "French B",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP French B Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP French B is best approached as a skills-and-understanding course, not a collection of facts to cram. Students studying French through MYP language acquisition are usually trying to make language learning more manageable: what vocabulary matters, how to practise regularly, and how to turn passive understanding into confident communication. MYP French is organised through proficiency phases, so practice should reflect your current phase rather than an HL/SL label.",
  lead: "IB MYP French B supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Communication",
      body: "Understanding authentic speech, reading beyond cognates, sustaining spoken responses and controlling written accuracy. You can understand and respond without translating every word.",
    },
    {
      title: "Language systems",
      body: "Verb patterns, gender and agreement, pronouns, connectives and topic language. New structures appear accurately in your own speaking and writing.",
    },
    {
      title: "Transfer",
      body: "Use familiar language in a new topic, text type or conversation. You can adapt vocabulary and register to purpose and audience.",
    },
  ],
  introTitle: "Build Language You Can Actually Use",
  introParagraphs: [
    "Build vocabulary growth, listening, reading, interaction, writing, pronunciation and register. Progress means using French with greater control, range and independence when purpose, audience or context changes.",
  ],
  extraSections: [
    {
      title: "A Sustainable Language Practice Loop",
      paragraphs: [
        "Build each French study cycle around one communicative purpose such as describing change, giving an opinion or explaining a plan. Retrieve a small set of verbs and connectors, read or listen to a short French source, then summarise it aloud before producing a brief written response. Deliberately include one structure you tend to avoid—for example a tense contrast, pronoun pattern or adjective agreement. Turn the correction into the next retrieval prompt so grammar practice grows from real communication.",
      ],
      bullets: [
        "Practise French gender and agreement inside complete phrases so form stays connected to meaning.",
        "Pair listening with a spoken summary to turn comprehension into production.",
        "Keep recurring verb or pronoun errors and retest them in new contexts.",
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
      body: "IB MYP French B Revision Notes should make the next study action obvious. Organise notes by communicative function rather than by textbook page. For French, keep compact sections for verb patterns, gender and agreement, pronouns, connectives and topic language, plus useful expressions for describing, comparing, explaining, asking, reacting and giving opinions. Add one example sentence from your own course context to every rule.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP French B Flashcards should make the next study action obvious. Use active-recall cards for verb patterns, gender and agreement, pronouns, connectives and topic language. Mix recognition with production: hear or read a cue, then say or write the answer before revealing it. For French, phrase-level cards are more useful than isolated translations because they preserve grammar, collocation and natural word order.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP French B Quiz should make the next study action obvious. Build short mixed quizzes around listening/reading detail, vocabulary in context, grammar choices and the best response for an audience. Include a reason after every answer. The aim is to notice why a form or phrase works in French, not to collect a percentage score and move on.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP French B Exam Focus should make the next study action obvious. Prepare for your school’s comprehension, speaking, interaction and writing tasks while checking verb control, agreement, pronouns and register. Official MYP language acquisition progresses through proficiency phases, so the challenge should match your phase. If eAssessment is part of your pathway, practise unfamiliar French sources and timed responses without relying on DP Language B routines.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP French B Exam Practice should make the next study action obvious. Create a weekly cycle that touches all four core modes: understand, retrieve, speak and write. Listen to a short clip twice, note key ideas, speak from prompts and finish with a concise written response. Reuse corrected language in a second task so feedback becomes part of memory instead of a comment you read once.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so French language acquisition stays tied to communication across listening, reading, speaking and writing.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "Is “French B” an official MYP level?",
      answer:
        "Students and schools may use labels such as French B informally, but official MYP language acquisition is organised through six proficiency phases rather than DP-style Language B SL/HL levels. Your school places you in the phase that reflects your prior experience and learning pathway.",
    },
    {
      question: "What should I revise first in MYP French?",
      answer:
        "Start with high-frequency language from your current units, then the structures that help you communicate across many topics. For French, prioritise verb patterns, gender and agreement, pronouns, connectives and topic language. Combine those with regular listening, reading, speaking and writing instead of leaving productive practice until assessment week.",
    },
    {
      question: "How often should I use flashcards for French?",
      answer:
        "For French, keep flashcards compact and sentence-based. Test verb patterns, gender and agreement, useful pronouns, connectors and whole phrases that fit common communicative purposes. Review little and often, but remove cards once you can produce the language confidently in context. Replace them with examples from feedback or the next unit’s vocabulary.",
    },
    {
      question: "How should I prepare for MYP language eAssessment?",
      answer:
        "Confirm whether your school uses MYP language acquisition eAssessment before practising a fixed exam routine. If it does, combine unfamiliar French input with purposeful speaking and writing tasks, and review whether register, agreement and verb control support meaning. Timed practice can improve pace, but regular comprehension and production across the term remain the stronger foundation.",
    },
  ],
  ctaTitle: "Build a better French study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP French B",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
