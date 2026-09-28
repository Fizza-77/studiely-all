import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_ENGLISH_B: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/english-b",
  seoTitle: "IB MYP English B Study Resources | Studiely",
  metaDescription:
    "Study English B in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP English B, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP English B",
    "MYP English B resources",
    "MYP English B revision notes",
    "MYP English B flashcards",
    "MYP English B quiz",
    "MYP English B practice questions",
    "MYP English B assessment practice",
  ],
  breadcrumbName: "English B",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP English B Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP English B is best approached as a skills-and-understanding course, not a collection of facts to cram. Students studying English through MYP language acquisition are usually trying to make language learning more manageable: what vocabulary matters, how to practise regularly, and how to turn passive understanding into confident communication. MYP language acquisition uses proficiency phases, so English practice should match the phase and tasks your school currently teaches.",
  lead: "IB MYP English B supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Communication",
      body: "Listening for gist and detail, reading for inference, speaking fluently and writing for a clear audience. You can understand and respond without translating every word.",
    },
    {
      title: "Language systems",
      body: "Collocations, phrasal verbs, word families and academic connectors. New structures appear accurately in your own speaking and writing.",
    },
    {
      title: "Transfer",
      body: "Use familiar language in a new topic, text type or conversation. You can adapt vocabulary and register to purpose and audience.",
    },
  ],
  introTitle: "Build Language You Can Actually Use",
  introParagraphs: [
    "Build academic and everyday vocabulary, listening comprehension, reading strategies, spoken interaction, purposeful writing and register. Progress shows in more flexible English: wider vocabulary, clearer register choices and increasingly independent communication across different contexts.",
  ],
  extraSections: [
    {
      title: "A Sustainable Language Practice Loop",
      paragraphs: [
        "Use a short English article, podcast clip or class theme as the anchor for one study cycle. Retrieve six useful collocations or academic connectors without notes, listen or read for the speaker’s main idea and attitude, then give a one-minute spoken response before writing a concise paragraph for a defined audience. Finish by checking register and word choice. Move only errors that affected meaning or fluency into the next flashcard set so revision stays selective.",
      ],
      bullets: [
        "Use authentic English input to distinguish formal and everyday language.",
        "Keep a collocation-and-feedback log rather than isolated words.",
        "Practise paraphrasing when a precise word is missing; communication should continue instead of stopping.",
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
      body: "IB MYP English B Revision Notes should make the next study action obvious. Organise notes by communicative function rather than by textbook page. For English, keep compact sections for collocations, phrasal verbs, word families and academic connectors, plus useful expressions for describing, comparing, explaining, asking, reacting and giving opinions. Add one example sentence from your own course context to every rule.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP English B Flashcards should make the next study action obvious. Use active-recall cards for collocations, phrasal verbs, word families and academic connectors. Mix recognition with production: hear or read a cue, then say or write the answer before revealing it. For English, phrase-level cards are more useful than isolated translations because they preserve grammar, collocation and natural word order.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP English B Quiz should make the next study action obvious. Build short mixed quizzes around listening/reading detail, vocabulary in context, grammar choices and the best response for an audience. Include a reason after every answer. The aim is to notice why a form or phrase works in English, not to collect a percentage score and move on.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP English B Exam Focus should make the next study action obvious. Prepare for the comprehension, interaction, speaking and purposeful writing used by your school. Because official MYP language acquisition is organised by proficiency phases, judge difficulty against your current phase rather than a DP-style HL/SL label. If your school uses eAssessment, add timed responses and unfamiliar input, but keep register, clarity and accurate communication at the centre of review.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP English B Exam Practice should make the next study action obvious. Create a weekly cycle that touches all four core modes: understand, retrieve, speak and write. Record a one-minute response, summarise a short audio or article, and rewrite one paragraph for a different audience. Reuse corrected language in a second task so feedback becomes part of memory instead of a comment you read once.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so English language acquisition stays tied to communication across listening, reading, speaking and writing.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "Is “English B” an official MYP level?",
      answer:
        "Students and schools may use labels such as English B informally, but official MYP language acquisition is organised through six proficiency phases rather than DP-style Language B SL/HL levels. Your school places you in the phase that reflects your prior experience and learning pathway.",
    },
    {
      question: "What should I revise first in MYP English?",
      answer:
        "Start with high-frequency language from your current units, then the structures that help you communicate across many topics. For English, prioritise collocations, phrasal verbs, word families and academic connectors. Combine those with regular listening, reading, speaking and writing instead of leaving productive practice until assessment week.",
    },
    {
      question: "How often should I use flashcards for English?",
      answer:
        "For English, use small sets several times a week and favour chunks you can actually reuse: collocations, phrasal verbs, academic connectors and common sentence frames. Retire cards that feel automatic, and replace them with language taken from recent speaking or writing feedback. The aim is faster, more precise production—not a permanently growing deck.",
    },
    {
      question: "How should I prepare for MYP language eAssessment?",
      answer:
        "Check first whether your school is using an MYP language acquisition eAssessment pathway. If so, practise English comprehension and productive tasks in the formats your school specifies, but keep regular speaking and writing in the routine. Timed work helps with pace; ongoing exposure to varied English texts and audio builds the language range that timed tasks alone cannot create.",
    },
  ],
  ctaTitle: "Build a better English study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP English B",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
