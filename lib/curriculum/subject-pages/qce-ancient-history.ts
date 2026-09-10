import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const QCE_ANCIENT_HISTORY: SubjectLandingContent = {
  path: "/australian-curriculum/queensland/qce/ancient-history",
  seoTitle: "QCE Ancient History Study Resources | Studiely",
  metaDescription:
    "Create QCE Ancient History revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for Queensland students.",
  shortDescription:
    "Studiely helps QCE Ancient History students create revision notes, flashcards, quizzes and exam practice for clearer Queensland senior subject revision.",
  keywords: [
    "QCE Ancient History",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "QCE Ancient History",
  heroEyebrow: "Queensland QCE",
  heroTitle: "QCE Ancient History Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "Students can use Studiely for QCE Ancient History to turn class notes, subject topics, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so QLD students can revise actively, check gaps and prepare more confidently without relying only on rereading.",
  introTitle:
    "QCE Ancient History study works best when students combine subject knowledge with regular recall and clear assessment practice",
  introParagraphs: [
    "Ancient History asks students to work carefully with evidence from the ancient world. Strong preparation connects sources, archaeology, context and interpretation so students can make supported judgements. Studiely helps Queensland senior students turn ancient History content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Queensland Certificate of Education students, the challenge is not only effort; it is knowing what to revise next, how to check understanding and how to apply ideas under assessment conditions. A stronger study routine helps students summarise, recall, test, focus and practise with purpose.",
  ],
  coverTitle: "What Ancient History Covers",
  coverIntro:
    "Ancient History covers ancient societies, archaeological evidence, primary sources, personalities, power, religion, social structures and historical interpretation. Students need to build both content knowledge and practical skills, especially source evaluation, evidence selection, chronology, contextual explanation, argument building and historical judgement.",
  coverTopics: [
    "Ancient societies",
    "Archaeological evidence",
    "Primary sources",
    "Personalities",
    "Power and religion",
    "Social structures",
    "Historical interpretation",
  ],
  coverClosing:
    "The common challenge is using fragmentary evidence accurately while still building a clear explanation. That is why a useful study workflow should help students organise information, check recall, practise decisions and connect revision to the way questions are actually answered.",
  supportTitle: "How Studiely Helps Queensland Students Study Ancient History",
  supportParagraphs: [
    "Studiely gives students one place to transform ancient History content into different forms of active study. Instead of keeping notes, flashcards, quizzes and practice tasks separate, students can use the same topic to build several revision actions.",
    "This matters for Queensland students because senior assessment often rewards clear understanding, relevant evidence, accurate language and confident application. Studiely provides independent study support and is not affiliated with QCAA or any government education authority.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clearer notes for site evidence, source analysis, timelines, personalities, key terms, themes and argument plans",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for dates, artefacts, source types, ancient terms, individuals and evidence links",
    },
    {
      need: "Check knowledge",
      support:
        "Use quizzes to test chronology, evidence use, source limitations, key terms and interpretation skills",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus revision around source evaluation, evidence relevance, structured explanation and historical judgement",
    },
    {
      need: "Practise application",
      support:
        "Work through source-based questions, extended responses, personality studies and ancient society analysis",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for QCE Ancient History",
      body: "Revision notes for QCE Ancient History should do more than store information. They should turn class material into organised explanations students can return to before internal assessment, external assessment preparation or school-based revision. With Studiely, students can create notes for site evidence, source analysis, timelines, personalities, key terms, themes and argument plans. The aim is to make each topic easier to understand, compare and apply. Clear notes also help students avoid wasting time searching through scattered material when they need a focused recap.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Ancient History Flashcards",
      body: "Flashcards work best when they force active recall. For ancient History, that means checking whether students can remember the right term, idea, example, process, evidence or method without looking at a full page of notes. Studiely can help students build flashcards for dates, artefacts, source types, ancient terms, individuals and evidence links. Short, repeated recall sessions make it easier to keep important details fresh while still leaving time for deeper practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Skills",
      body: "Quiz practice gives students a fast way to find gaps before they attempt longer responses. A quiz can test simple recall, but it can also ask students to choose the best explanation, identify the right method or connect a concept to an example. For this subject, useful quizzes can check chronology, evidence use, source limitations, key terms and interpretation skills. This helps students see whether they are ready to move from revision into assessment-style practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for QLD Students",
      body: "Exam focus is about narrowing revision. Students often know a lot of content, but the task usually asks for a specific kind of response. Studiely helps students focus on the skill, evidence, method or explanation the question needs. For QLD students, that can include source evaluation, evidence relevance, structured explanation and historical judgement. A focused approach makes revision more efficient because students stop trying to revise everything at once and start preparing for the decisions they need to make in real tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply ideas, plan responses, make mistakes, review feedback and try again. This is where understanding becomes more reliable. Studiely supports exam-style practice through source-based questions, extended responses, personality studies and ancient society analysis. These practice tasks help students connect what they know with how they need to respond under time and assessment pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for Ancient History",
  whyParagraphs: [
    "Students use Studiely because it brings the main study actions together. They can start with one topic, then move from notes to flashcards, from flashcards to quizzes and from quizzes to practice without rebuilding their study material from scratch.",
    "Students can connect sources and ideas before writing longer historical responses. It also gives students a clearer routine: understand the content, remember the right details, check knowledge, focus on the task and practise applying skills.",
  ],
  faqs: [
    {
      question: "What is QCE Ancient History?",
      answer:
        "It is a senior Queensland subject pathway within the Queensland Certificate of Education context. It helps students build knowledge and skills in ancient History, including source evaluation, evidence selection, chronology, contextual explanation, argument building and historical judgement. Students should always follow their school program and official QCAA information for exact assessment details.",
    },
    {
      question: "How can Studiely help with this subject?",
      answer:
        "Studiely helps students turn ancient History topics, notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. It supports active revision instead of relying only on rereading.",
    },
    {
      question: "Can I create revision notes for this subject?",
      answer:
        "Yes. Students can use Studiely to create focused notes for site evidence, source analysis, timelines, personalities, key terms, themes and argument plans. Good notes make it easier to review content quickly and apply it in assessment-style questions.",
    },
    {
      question: "Are flashcards useful for ancient History?",
      answer:
        "Flashcards are useful when they test recall and not just recognition. For ancient History, they can help students remember dates, artefacts, source types, ancient terms, individuals and evidence links before moving into quizzes or practice responses.",
    },
    {
      question: "Is Studiely an official QCAA resource?",
      answer:
        "No. Studiely provides independent study support for students. It is not affiliated with QCAA, any Queensland education authority or any government exam body.",
    },
  ],
  ctaTitle: "Start Studying Ancient History with More Structure",
  ctaBody:
    "Start building a stronger study routine with Studiely. Create revision notes, flashcards, quizzes, exam focus support and exam-style practice for the topics and skills you need to improve.",
  ctaPrimaryLabel: "Start studying Ancient History",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
