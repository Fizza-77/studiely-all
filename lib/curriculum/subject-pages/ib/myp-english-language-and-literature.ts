import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_ENGLISH_LANGUAGE_AND_LITERATURE: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/english-language-and-literature",
  seoTitle: "IB MYP English Language and Literature Resources | Studiely",
  metaDescription:
    "Study English in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP English, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP English Language and Literature",
    "MYP English Language and Literature resources",
    "MYP English Language and Literature revision notes",
    "MYP English Language and Literature flashcards",
    "MYP English Language and Literature quiz",
    "MYP English Language and Literature practice questions",
    "MYP English Language and Literature assessment practice",
  ],
  breadcrumbName: "English Language and Literature",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP English Language and Literature Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP English Language and Literature is best approached as a skills-and-understanding course, not a collection of facts to cram. English in the MYP is not simply a reading list. Students learn to interrogate how a text works, why a creator makes particular choices, and how language changes across audience, purpose and context. The strongest revision therefore combines close reading with deliberate writing practice rather than memorising isolated literary terms.",
  lead: "IB MYP English Language and Literature supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Text analysis",
      body: "Annotate language, structure, tone, image and evidence. You can explain how a choice creates meaning, not just identify it.",
    },
    {
      title: "Writing control",
      body: "Plan claims, select evidence and shape paragraphs for purpose. Responses stay focused, organised and precise.",
    },
    {
      title: "Transfer",
      body: "Apply the same analytical method to unfamiliar texts. You can adapt when the text type or context changes.",
    },
  ],
  introTitle: "Build Analysis That Transfers Across Texts",
  introParagraphs: [
    "Work across literary and non-literary texts, analytical reading, structured argument, creative and persuasive writing, oral communication, media literacy and the relationship between language, culture and identity.",
  ],
  extraSections: [
    {
      title: "A Practical Study Loop for Language and Literature",
      paragraphs: [
        "Read one text actively, compress the lesson into a one-page note, retrieve techniques with flashcards, test interpretation with a quiz, then write one paragraph from memory. Finish by comparing your paragraph with the task requirements and rewriting the weakest sentence.",
      ],
      bullets: [
        "Turn annotations into claims about audience, purpose and effect rather than a list of devices.",
        "Use short unseen English texts to test whether your analytical method transfers.",
        "Review paragraph evidence and reasoning separately so a strong quotation is not mistaken for strong analysis.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "A common English revision trap is collecting terminology without building an argument. Knowing that a text uses imagery, contrast or a visual code is only the start; the response needs to explain how the choice shapes meaning for a particular audience and purpose. Practise turning every annotation into a claim, evidence and effect chain. Another trap is memorising one interpretation so rigidly that unfamiliar texts feel impossible. Use short unseen extracts, advertisements or speeches to test whether the same analytical method transfers. Before finishing a paragraph, underline the sentence that explains why the creator’s choice matters. If that sentence is missing, the paragraph is probably still describing rather than analysing.",
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
      body: "IB MYP English Language and Literature Revision Notes should make the next study action obvious. Turn a dense unit into short concept maps for audience, purpose, context, rhetorical choices, literary devices and paragraph structures. Link each technique to an effect and a usable example so revision stays analytical rather than becoming a glossary.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP English Language and Literature Flashcards should make the next study action obvious. Build cards that ask for an effect, a comparison or a mini-analysis instead of a one-word definition. For example, show a short quotation or image choice and recall what it suggests about voice, bias, identity or audience.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP English Language and Literature Quiz should make the next study action obvious. Use mixed prompts on inference, terminology, evidence selection, structure and text-type decisions. After each answer, explain why the strongest option fits the context; this turns checking into reasoning practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP English Language and Literature Exam Focus should make the next study action obvious. Practise planning under time pressure, comparing unseen material, writing concise analytical paragraphs and checking whether every claim is supported. Where your school enters students for MYP eAssessment, add on-screen style tasks without treating every classroom unit as an external exam.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP English Language and Literature Exam Practice should make the next study action obvious. Rotate unfamiliar texts and writing purposes. Start untimed to build method, then shorten planning time. Review weak answers by tagging the problem—misread command term, vague evidence, weak explanation or poor organisation—before repeating a similar task.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so English analysis and writing transfer across literary and non-literary texts.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "What should I revise first for MYP English Language and Literature?",
      answer:
        "Start with the skills that appear across many units: understanding audience and purpose, analysing writer or creator choices, selecting evidence, organising an argument and controlling language. Text-specific knowledge matters, but transferable analysis usually gives you more value than memorising a long list of devices.",
    },
    {
      question: "Do I need to memorise literary devices?",
      answer:
        "Know the major devices, but do not stop at labels. MYP-style analysis becomes stronger when you can explain what a choice does in a particular context. A flashcard that asks “what effect does this choice create here?” is more useful than one that only asks for a definition.",
    },
    {
      question: "How can I prepare for unfamiliar texts?",
      answer:
        "Use a repeatable reading routine: identify text type, audience, purpose and context; mark important language or visual choices; group evidence into two or three ideas; then write a claim that connects the choices to meaning. Practising this on varied texts reduces dependence on memorised answers.",
    },
    {
      question: "Is MYP eAssessment compulsory for every student?",
      answer:
        "No. MYP assessment is primarily school-based, while eAssessment is used by participating schools and students seeking IB-validated course results or the MYP certificate. Follow your school’s assessment pathway and use exam-style practice only where it matches your course.",
    },
  ],
  ctaTitle: "Build a better English study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP English",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
