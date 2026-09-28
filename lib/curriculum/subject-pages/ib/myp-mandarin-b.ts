import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_MANDARIN_B: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/mandarin-b",
  seoTitle: "IB MYP Mandarin B Study Resources | Studiely",
  metaDescription:
    "Study Mandarin B in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Mandarin B, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Mandarin B",
    "MYP Mandarin B resources",
    "MYP Mandarin B revision notes",
    "MYP Mandarin B flashcards",
    "MYP Mandarin B quiz",
    "MYP Mandarin B practice questions",
    "MYP Mandarin B assessment practice",
  ],
  breadcrumbName: "Mandarin B",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Mandarin B Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Mandarin B is best approached as a skills-and-understanding course, not a collection of facts to cram. Students studying Mandarin through MYP language acquisition are usually trying to make language learning more manageable: what vocabulary matters, how to practise regularly, and how to turn passive understanding into confident communication. MYP Mandarin progresses through proficiency phases, so study difficulty should match the phase and language experience your school identifies.",
  lead: "IB MYP Mandarin B supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Communication",
      body: "Tone-aware listening, fluent speaking, reading for meaning and building accurate written responses. You can understand and respond without translating every word.",
    },
    {
      title: "Language systems",
      body: "Characters, high-frequency word combinations, measure words, sentence patterns and topic vocabulary. New structures appear accurately in your own speaking and writing.",
    },
    {
      title: "Transfer",
      body: "Use familiar language in a new topic, text type or conversation. You can adapt vocabulary and register to purpose and audience.",
    },
  ],
  introTitle: "Build Language You Can Actually Use",
  introParagraphs: [
    "Build listening, speaking, character recognition, reading, writing, pronunciation and context-sensitive communication. Progress means recognising and producing Mandarin more independently across familiar and increasingly unfamiliar communication tasks.",
  ],
  extraSections: [
    {
      title: "A Sustainable Language Practice Loop",
      paragraphs: [
        "Use one Mandarin topic to connect characters, listening and speaking in the same session. Retrieve a small set of characters and high-frequency chunks, listen to a short dialogue for key details, then retell the idea with your own sentence patterns. Finish with a brief written response that reuses the same vocabulary while checking word order, measure words and aspect markers. Save only characters or structures that caused hesitation, keeping the next review focused on usable language.",
      ],
      bullets: [
        "Separate character recognition cards from character-production cards so weak recall is visible.",
        "Practise Mandarin word order and measure words inside complete sentences, not isolated rules.",
        "Use short retelling tasks to connect listening comprehension with spontaneous speaking.",
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
      body: "IB MYP Mandarin B Revision Notes should make the next study action obvious. Organise notes by communicative function rather than by textbook page. For Mandarin, keep compact sections for characters, high-frequency word combinations, measure words, sentence patterns and topic vocabulary, plus useful expressions for describing, comparing, explaining, asking, reacting and giving opinions. Add one example sentence from your own course context to every rule.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Mandarin B Flashcards should make the next study action obvious. Use active-recall cards for characters, high-frequency word combinations, measure words, sentence patterns and topic vocabulary. Mix recognition with production: hear or read a cue, then say or write the answer before revealing it. For Mandarin, phrase-level cards are more useful than isolated translations because they preserve grammar, collocation and natural word order.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Mandarin B Quiz should make the next study action obvious. Build short mixed quizzes around listening/reading detail, vocabulary in context, grammar choices and the best response for an audience. Include a reason after every answer. The aim is to notice why a form or phrase works in Mandarin, not to collect a percentage score and move on.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Mandarin B Exam Focus should make the next study action obvious. Prepare for the comprehension, speaking, interaction and writing tasks set by your school, with particular attention to character recognition, word order, measure words, aspect markers and register. MYP language acquisition is organised through proficiency phases, so your practice should match the phase taught at school. Add timed unfamiliar input only when eAssessment is relevant to your pathway.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Mandarin B Exam Practice should make the next study action obvious. Create a weekly cycle that touches all four core modes: understand, retrieve, speak and write. Retrieve characters and phrases, shadow a short audio, answer an oral prompt, then write a short message or paragraph. Reuse corrected language in a second task so feedback becomes part of memory instead of a comment you read once.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Mandarin language acquisition stays tied to communication across listening, reading, speaking and writing.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "Is “Mandarin B” an official MYP level?",
      answer:
        "Students and schools may use labels such as Mandarin B informally, but official MYP language acquisition is organised through six proficiency phases rather than DP-style Language B SL/HL levels. Your school places you in the phase that reflects your prior experience and learning pathway.",
    },
    {
      question: "What should I revise first in MYP Mandarin?",
      answer:
        "Start with high-frequency language from your current units, then the structures that help you communicate across many topics. For Mandarin, prioritise characters, high-frequency word combinations, measure words, sentence patterns and topic vocabulary. Combine those with regular listening, reading, speaking and writing instead of leaving productive practice until assessment week.",
    },
    {
      question: "How often should I use flashcards for Mandarin?",
      answer:
        "For Mandarin, separate recognition from production. Some cards should ask you to recognise a character or phrase in context; others should require you to produce characters, measure words or a complete sentence pattern from a meaning cue. Review small sets frequently and recycle troublesome items through speaking and writing, not only visual recognition.",
    },
    {
      question: "How should I prepare for MYP language eAssessment?",
      answer:
        "Check your school’s assessment route before planning around eAssessment. Where Mandarin language acquisition eAssessment applies, practise reading or listening to unfamiliar material and responding appropriately in speech or writing. Timed practice matters, but character recognition, word order and confident use of familiar sentence patterns need steady retrieval across the course.",
    },
  ],
  ctaTitle: "Build a better Mandarin study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Mandarin B",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
