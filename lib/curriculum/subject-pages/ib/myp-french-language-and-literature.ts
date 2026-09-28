import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_FRENCH_LANGUAGE_AND_LITERATURE: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/french-language-and-literature",
  seoTitle: "IB MYP French Language and Literature Resources | Studiely",
  metaDescription:
    "Study French in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP French, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP French Language and Literature",
    "MYP French Language and Literature resources",
    "MYP French Language and Literature revision notes",
    "MYP French Language and Literature flashcards",
    "MYP French Language and Literature quiz",
    "MYP French Language and Literature practice questions",
    "MYP French Language and Literature assessment practice",
  ],
  breadcrumbName: "French Language and Literature",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP French Language and Literature Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP French Language and Literature is best approached as a skills-and-understanding course, not a collection of facts to cram. French Language and Literature asks students to read with precision and write with control. The challenge is often the combination: recognising nuance in a text while expressing an interpretation in accurate, well-organised French. Effective study links stylistic analysis, vocabulary, grammar and cultural context instead of revising them as separate subjects.",
  lead: "IB MYP French Language and Literature supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Nuance",
      body: "Read for connotation, tone, voice and implied viewpoint. Your interpretation goes beyond literal comprehension.",
    },
    {
      title: "Argument",
      body: "Build a line of reasoning with embedded evidence. Paragraphs connect evidence to a clear thesis.",
    },
    {
      title: "Language control",
      body: "Use accurate transitions, analytical verbs and register. Expression supports the analysis instead of obscuring it.",
    },
  ],
  introTitle: "Build Analysis That Transfers Across Texts",
  introParagraphs: [
    "Develop close reading of literary and non-literary French texts, interpretation of style and viewpoint, coherent academic writing, oral communication, register control and awareness of francophone contexts.",
  ],
  extraSections: [
    {
      title: "A Practical Study Loop for Language and Literature",
      paragraphs: [
        "Start with a 10-minute close read, create a compact note from memory, test high-value vocabulary with flashcards, complete a five-question interpretation quiz, and write one polished analytical paragraph. End by editing for cohesion, agreement and precision.",
      ],
      bullets: [
        "Build concise French analytical sentence frames that leave room for a clear interpretation.",
        "Identify audience and register early when working with unfamiliar French texts.",
        "Rewrite descriptive sentences into explanations of effect, purpose or perspective.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "A frequent French Language and Literature trap is spending so much effort on grammatical perfection that the analytical line becomes cautious or vague. Accuracy matters, but the paragraph still needs a clear interpretation of the creator’s choices. Build a small bank of precise analytical verbs and practise using them with evidence from different text types. Avoid retelling content before every quotation; move quickly from relevant context to choice, effect and purpose. For unfamiliar French texts, identify register and audience early because these often shape vocabulary, tone and persuasive choices. During review, mark sentences that merely describe what happens and rewrite at least one as an explanation of how meaning is constructed.",
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
      body: "IB MYP French Language and Literature Revision Notes should make the next study action obvious. Condense each unit into a page that separates content from method: key ideas, context, author choices, useful analytical verbs and two model paragraph frames. Record common language errors beside the correct pattern so revision improves both interpretation and expression.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP French Language and Literature Flashcards should make the next study action obvious. Create cards for analytical phrases, connectives, tone vocabulary and stylistic effects. Add cloze cards that require the right preposition, tense or agreement inside a sentence of analysis, so recall supports authentic writing rather than isolated grammar drills.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP French Language and Literature Quiz should make the next study action obvious. Use short passages and questions on inference, register, evidence, organisation and language accuracy. Include “best revision” items where you choose which sentence improves precision or strengthens the link between a technique and its effect.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP French Language and Literature Exam Focus should make the next study action obvious. Practise planning before writing: one-sentence thesis, two evidence points, intended effect and link to context. If your school participates in MYP eAssessment, rehearse screen-based reading and response tasks; otherwise align practice to your teacher’s task-specific criteria.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP French Language and Literature Exam Practice should make the next study action obvious. Cycle between analysis and production. Read an unfamiliar extract, identify three significant choices, write a short interpretation, then transform one idea into a different format or audience. This exposes whether you truly understand register and purpose.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so French analysis and expression reinforce each other across literary and non-literary texts.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "What is the best way to revise French analytical vocabulary?",
      answer:
        "Group vocabulary by function: introducing evidence, describing tone, explaining effect, comparing ideas and linking to context. Learn each phrase inside a full sentence so you remember both meaning and grammar.",
    },
    {
      question: "How much grammar should I revise for Language and Literature?",
      answer:
        "Grammar matters because inaccurate language can weaken clear analysis, but revision should focus on errors that regularly affect your writing. Build a personal error list from teacher feedback and practise those patterns inside analytical sentences.",
    },
    {
      question: "How can I get better at analysing unfamiliar French texts?",
      answer:
        "Use a consistent first pass: identify text type, audience, purpose, viewpoint and context. On the second pass, mark a few language or structural choices that genuinely support an interpretation. Writing from selected evidence is more effective than highlighting everything.",
    },
    {
      question: "Can flashcards help with literature analysis?",
      answer:
        "Yes, when the cards require application. Instead of asking only “What is a metaphor?”, use a short example and ask what the metaphor suggests, how it shapes tone, or why it fits the speaker’s perspective.",
    },
  ],
  ctaTitle: "Build a better French study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP French",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
