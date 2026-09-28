import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_GERMAN_LANGUAGE_AND_LITERATURE: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/german-language-and-literature",
  seoTitle: "IB MYP German Language and Literature Resources | Studiely",
  metaDescription:
    "Study German in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP German, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP German Language and Literature",
    "MYP German Language and Literature resources",
    "MYP German Language and Literature revision notes",
    "MYP German Language and Literature flashcards",
    "MYP German Language and Literature quiz",
    "MYP German Language and Literature practice questions",
    "MYP German Language and Literature assessment practice",
  ],
  breadcrumbName: "German Language and Literature",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP German Language and Literature Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP German Language and Literature is best approached as a skills-and-understanding course, not a collection of facts to cram. German Language and Literature becomes easier to revise when students separate three questions: What is the text doing? How is it doing it? Why does that choice matter for this audience and context? That approach keeps study analytical while giving grammar and vocabulary a clear purpose.",
  lead: "IB MYP German Language and Literature supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Meaning and method",
      body: "Link language choices to effect and purpose. You can move from quotation to interpretation efficiently.",
    },
    {
      title: "Organisation",
      body: "Plan a coherent line of argument before drafting. Each paragraph advances the response.",
    },
    {
      title: "Precision",
      body: "Control academic vocabulary, syntax and register. Your German expresses complex ideas without unnecessary ambiguity.",
    },
  ],
  introTitle: "Build Analysis That Transfers Across Texts",
  introParagraphs: [
    "Study German literary and non-literary texts through interpretation, argument, oral and written communication, with close attention to tone, syntax, register, perspective, structure and cultural setting.",
  ],
  extraSections: [
    {
      title: "A Practical Study Loop for Language and Literature",
      paragraphs: [
        "Read once for overall meaning, read again for author choices, reduce the text to a compact note, retrieve analytical language with flashcards, complete a quiz and write one paragraph. Finish with a two-minute edit for logic, register and sentence control.",
      ],
      bullets: [
        "Keep German analytical claims direct before adding syntactic complexity.",
        "Use evidence to connect cultural context to an observable language or structural choice.",
        "Practise on unfamiliar German texts so word order and analysis remain controlled under pressure.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "German Language and Literature students often overpack sentences in an attempt to sound academic, which can hide the analytical point. Prioritise a clear claim, precise evidence and an explanation of Wirkung before adding complexity. Keep analytical verbs and connectors in usable sentence frames so word order remains controlled when ideas become more demanding. Another trap is discussing historical or cultural context without linking it to a specific language or structural choice. In practice, circle the textual feature that justifies each contextual point. Use unfamiliar articles, speeches or literary extracts regularly so your analysis depends on a repeatable method rather than memorised notes from one class text.",
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
      body: "IB MYP German Language and Literature Revision Notes should make the next study action obvious. Create unit summaries with a fixed analytical spine: text type, context, audience, purpose, key ideas, significant choices and usable evidence. Add a small language section for transitions, analytical verbs and recurring syntax errors from your own work.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP German Language and Literature Flashcards should make the next study action obvious. Use flashcards to retrieve analytical vocabulary and then apply it. A useful card might show a sentence from a text and ask you to name a choice, explain its effect and write one German sentence that connects it to audience or viewpoint.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP German Language and Literature Quiz should make the next study action obvious. Combine comprehension, inference and writing decisions. Ask which evidence best supports a claim, which connective improves coherence, or which explanation goes beyond summary. Short feedback should model the thinking process behind a stronger response.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP German Language and Literature Exam Focus should make the next study action obvious. Practise under the conditions your school uses: close reading, comparative tasks, oral presentation or timed writing. Where your school takes MYP eAssessment, include unfamiliar on-screen material and realistic planning time, but keep classroom criteria at the centre of everyday preparation.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP German Language and Literature Exam Practice should make the next study action obvious. Work with short texts from different contexts and text types. After writing, highlight every sentence that only retells content; revise at least one into analysis. This simple check reveals whether your response is driven by meaning or by summary.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so German analysis stays tied to clear claims, evidence and controlled expression.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "What should a strong MYP German analysis include?",
      answer:
        "A clear claim, relevant evidence, explanation of how a language or structural choice creates meaning, and a link to purpose, audience, context or a wider idea. The exact task changes, but that reasoning chain transfers well.",
    },
    {
      question: "How do I revise German grammar without losing time for literature?",
      answer:
        "Use your own writing as the grammar syllabus. Track repeated problems—case, word order, agreement, tense or punctuation—and practise them in analytical sentences. This keeps grammar revision directly connected to the work you need to produce.",
    },
    {
      question: "Is reading the class text again enough revision?",
      answer:
        "Usually not. Re-reading builds familiarity but does not test whether you can produce an interpretation. Add retrieval, unseen extracts and short timed writing so you practise the actions the assessment actually requires.",
    },
    {
      question: "How can I make comparisons more analytical?",
      answer:
        "Choose a comparison point first—such as voice, structure or representation—then examine how each text handles it differently and why. Avoid writing two separate mini-essays with only a linking sentence between them.",
    },
  ],
  ctaTitle: "Build a better German study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP German",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
