import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_SPANISH_B: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/spanish-b",
  seoTitle: "IB MYP Spanish B Study Resources | Studiely",
  metaDescription:
    "Study Spanish B in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Spanish B, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Spanish B",
    "MYP Spanish B resources",
    "MYP Spanish B revision notes",
    "MYP Spanish B flashcards",
    "MYP Spanish B quiz",
    "MYP Spanish B practice questions",
    "MYP Spanish B assessment practice",
  ],
  breadcrumbName: "Spanish B",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Spanish B Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Spanish B is best approached as a skills-and-understanding course, not a collection of facts to cram. Students studying Spanish through MYP language acquisition are usually trying to make language learning more manageable: what vocabulary matters, how to practise regularly, and how to turn passive understanding into confident communication. MYP Spanish develops through proficiency phases, so revision should follow the language demands and phase used by your school.",
  lead: "IB MYP Spanish B supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Communication",
      body: "Listening across accents, reading for detail, speaking with recoverable fluency and writing with appropriate register. You can understand and respond without translating every word.",
    },
    {
      title: "Language systems",
      body: "High-frequency verbs, tense contrasts, ser/estar, opinion phrases and topic vocabulary. New structures appear accurately in your own speaking and writing.",
    },
    {
      title: "Transfer",
      body: "Use familiar language in a new topic, text type or conversation. You can adapt vocabulary and register to purpose and audience.",
    },
  ],
  introTitle: "Build Language You Can Actually Use",
  introParagraphs: [
    "Build theme-based vocabulary, verb control, listening, reading, spoken interaction, writing and cultural communication. Progress appears when Spanish becomes more accurate and adaptable across themes, audiences and spoken or written tasks.",
  ],
  extraSections: [
    {
      title: "A Sustainable Language Practice Loop",
      paragraphs: [
        "Choose one current MYP theme and build a Spanish mini-cycle around it. Retrieve high-frequency verbs and opinion phrases, listen to a short Spanish clip for gist and two details, then speak for ninety seconds using at least two tense contrasts. Follow with a short message or paragraph that uses the same ideas in a different register. Tag recurring problems such as ser/estar, agreement or verb endings, then use those tags to design the next quiz.",
      ],
      bullets: [
        "Rotate Spanish tense contrasts in context instead of conjugation tables.",
        "Use varied Spanish listening clips in class.",
        "Track agreement and ser/estar errors to target clear patterns.",
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
      body: "IB MYP Spanish B Revision Notes should make the next study action obvious. Organise notes by communicative function rather than by textbook page. For Spanish, keep compact sections for high-frequency verbs, tense contrasts, ser/estar, opinion phrases and topic vocabulary, plus useful expressions for describing, comparing, explaining, asking, reacting and giving opinions. Add one example sentence from your own course context to every rule.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Spanish B Flashcards should make the next study action obvious. Use active-recall cards for high-frequency verbs, tense contrasts, ser/estar, opinion phrases and topic vocabulary. Mix recognition with production: hear or read a cue, then say or write the answer before revealing it. For Spanish, phrase-level cards are more useful than isolated translations because they preserve grammar, collocation and natural word order.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Spanish B Quiz should make the next study action obvious. Build short mixed quizzes around listening/reading detail, vocabulary in context, grammar choices and the best response for an audience. Include a reason after every answer. The aim is to notice why a form or phrase works in Spanish, not to collect a percentage score and move on.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Spanish B Exam Focus should make the next study action obvious. Prepare for the comprehension, interaction, speaking and writing tasks your school uses, with particular attention to tense control, agreement, register and cultural context. MYP language acquisition is phase-based, so practise at the proficiency range assigned by your school. If eAssessment applies, add unfamiliar texts and timed production without turning the course into DP-style exam preparation.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Spanish B Exam Practice should make the next study action obvious. Create a weekly cycle that touches all four core modes: understand, retrieve, speak and write. Rotate a theme, retrieve vocabulary, speak for ninety seconds, then write a short response using the same language. Reuse corrected language in a second task so feedback becomes part of memory instead of a comment you read once.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Spanish language acquisition stays tied to communication across listening, reading, speaking and writing.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "Is “Spanish B” an official MYP level?",
      answer:
        "Students and schools may use labels such as Spanish B informally, but official MYP language acquisition is organised through six proficiency phases rather than DP-style Language B SL/HL levels. Your school places you in the phase that reflects your prior experience and learning pathway.",
    },
    {
      question: "What should I revise first in MYP Spanish?",
      answer:
        "Start with high-frequency language from your current units, then the structures that help you communicate across many topics. For Spanish, prioritise high-frequency verbs, tense contrasts, ser/estar, opinion phrases and topic vocabulary. Combine those with regular listening, reading, speaking and writing instead of leaving productive practice until assessment week.",
    },
    {
      question: "How often should I use flashcards for Spanish?",
      answer:
        "For Spanish, short recall sessions work best when cards require production. Mix infinitives with conjugated forms, ser/estar choices, useful connectors and complete opinion phrases. Review a small set frequently, then retire items you can use correctly in a sentence. Add new cards from errors in speaking or writing so the deck tracks what you genuinely need next.",
    },
    {
      question: "How should I prepare for MYP language eAssessment?",
      answer:
        "First confirm your school’s MYP assessment pathway. Where Spanish language acquisition eAssessment is used, practise extracting meaning from unfamiliar input and responding with an appropriate purpose, audience and register. Timed tasks are useful, but they should sit alongside regular listening and speaking because fluency and verb control develop through repeated use, not last-minute exam drilling.",
    },
  ],
  ctaTitle: "Build a better Spanish study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Spanish B",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
