import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_MUSIC: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/music",
  seoTitle: "IB MYP Music Study Resources | Studiely",
  metaDescription:
    "Study Music in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Music, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Music",
    "MYP Music resources",
    "MYP Music revision notes",
    "MYP Music flashcards",
    "MYP Music quiz",
    "MYP Music practice questions",
    "MYP Music assessment practice",
  ],
  breadcrumbName: "Music",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Music Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Music is best approached as a skills-and-understanding course, not a collection of facts to cram. MYP Music asks students to think like musicians, not only remember theory. Listening, investigating context, developing musical ideas, rehearsing, composing or performing, and evaluating decisions all reinforce one another. Revision is strongest when notation and terminology lead back to sound.",
  lead: "IB MYP Music supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Listening",
      body: "Identify musical elements and support observations with evidence. You can explain how a musical choice shapes effect.",
    },
    {
      title: "Making",
      body: "Develop technique, rehearsal or compositional ideas. Progress is documented and choices are intentional.",
    },
    {
      title: "Reflection",
      body: "Evaluate process and outcome using musical language. Feedback leads to a specific next rehearsal or revision decision.",
    },
  ],
  introTitle: "Develop Knowledge and Creative Evidence Together",
  introParagraphs: [
    "Develop listening analysis, music vocabulary, theory, performance or composition skills, contextual understanding, creative development, rehearsal habits and reflective evaluation.",
  ],
  extraSections: [
    {
      title: "A Practice Loop for Creative Work",
      paragraphs: [
        "Listen to a short excerpt, write three observations from memory, retrieve theory terms with flashcards, complete a focused quiz, then perform or compose a small response. Finish by recording one technical and one musical improvement for the next session.",
      ],
      bullets: [
        "Keep investigation, development, making and evaluation connected.",
        "Use knowledge tools to support—not replace—creative practice.",
        "Document decisions so process evidence shows genuine development.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "Music students often separate theory from listening and reflection from rehearsal. That makes revision feel abstract and evaluation feel retrospective. Connect every term to a sound, score or performance decision, then use the same language when you evaluate your work. Avoid practising a whole piece repeatedly when one passage is causing the problem; isolate the technical issue, slow it down, record the attempt and decide what improved. For composition, save alternative versions rather than deleting them. Comparing versions gives you concrete evidence for why a musical idea developed in a particular direction. For listening work, avoid naming musical elements without evidence; refer to a specific moment, pattern or contrast and explain its effect. Then compare that moment with a second example so your interpretation shows development rather than a single isolated observation. Keep one short listening log across the unit so you can see whether your vocabulary and evidence become more precise.",
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
      body: "IB MYP Music Revision Notes should make the next study action obvious. Create listening maps for works and units: context, form, texture, rhythm, melody, harmony, timbre and expressive choices. Link theory to an example you can hear or perform so notation remains meaningful.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Music Flashcards should make the next study action obvious. Use cards for musical terms, symbols, intervals, forms, contextual knowledge and aural prompts where possible. Add “hear it in your head” questions that ask how a change in texture, tempo or articulation might alter the result.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Music Quiz should make the next study action obvious. Mix terminology with listening-analysis decisions, notation, contextual questions and rehearsal choices. Good feedback should connect the answer to sound: what you would expect to hear and why that evidence supports the interpretation.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Music Exam Focus should make the next study action obvious. Prepare for performances, compositions and process evidence as well as knowledge checks. Where your school uses MYP Arts ePortfolio pathways, organise documentation and reflection around the assessment task rather than relying on a last-minute written revision pack.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Music Exam Practice should make the next study action obvious. Use short cycles: listen, identify, reproduce or create, record, evaluate. For performance, isolate a difficult passage and measure improvement; for composition, test a small idea in more than one version before choosing. Keep evidence of the decision process.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Music knowledge stays linked to listening, making and reflective evaluation.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "How should I revise MYP Music theory?",
      answer:
        "Learn theory through music you can hear, play or create. Pair every term or symbol with an example and a question about effect. This makes theory easier to retrieve and more useful in analysis.",
    },
    {
      question: "What belongs in music process evidence?",
      answer:
        "Keep evidence of investigation, developing ideas, rehearsal or composition decisions, feedback and evaluation. The exact format depends on your school and task, but strong evidence shows change over time rather than only a final product.",
    },
    {
      question: "Can quizzes improve practical music performance?",
      answer:
        "Quizzes cannot replace rehearsal, but they can strengthen the knowledge that supports it: notation, terminology, structure, context and listening awareness. Use them alongside deliberate practice rather than instead of it.",
    },
    {
      question: "Is there a standard MYP Music exam?",
      answer:
        "MYP assessment is mainly school-based. In eAssessment pathways, Arts can be assessed through externally moderated ePortfolio coursework. Your school’s course design and task instructions determine the evidence you need to prioritise.",
    },
  ],
  ctaTitle: "Build a better Music study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Music",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
