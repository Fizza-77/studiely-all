import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const QCE_MODERN_HISTORY: SubjectLandingContent = {
  path: "/australian-curriculum/queensland/qce/modern-history",
  seoTitle: "QCE Modern History Study Resources | Studiely",
  metaDescription:
    "Create QCE Modern History revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for Queensland students.",
  shortDescription:
    "Studiely helps QCE Modern History students create revision notes, flashcards, quizzes and exam practice for clearer Queensland senior subject revision.",
  keywords: [
    "QCE Modern History",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "QCE Modern History",
  heroEyebrow: "Queensland QCE",
  heroTitle: "QCE Modern History Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "Students can use Studiely for QCE Modern History to turn class notes, subject topics, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so QLD students can revise actively, check gaps and prepare more confidently without relying only on rereading.",
  introTitle:
    "QCE Modern History study works best when students combine subject knowledge with regular recall and clear assessment practice",
  introParagraphs: [
    "Modern History study needs more than remembering events. Students need to explain causes, consequences, perspectives and significance through clear historical argument. Studiely helps Queensland senior students turn modern History content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Queensland Certificate of Education students, the challenge is not only effort; it is knowing what to revise next, how to check understanding and how to apply ideas under assessment conditions. A stronger study routine helps students summarise, recall, test, focus and practise with purpose.",
  ],
  coverTitle: "What Modern History Covers",
  coverIntro:
    "Modern History covers modern world events, power, ideology, conflict, change, movements, personalities, historical sources and interpretations. Students need to build both content knowledge and practical skills, especially chronology, source analysis, evidence selection, argument building, evaluation and historical judgement.",
  coverTopics: [
    "Modern world events",
    "Power and ideology",
    "Conflict and change",
    "Movements",
    "Personalities",
    "Historical sources",
    "Interpretations",
  ],
  coverClosing:
    "The common challenge is turning detailed events into a focused response that answers the question with evidence. That is why a useful study workflow should help students organise information, check recall, practise decisions and connect revision to the way questions are actually answered.",
  supportTitle: "How Studiely Helps Queensland Students Study Modern History",
  supportParagraphs: [
    "Studiely gives students one place to transform modern History content into different forms of active study. Instead of keeping notes, flashcards, quizzes and practice tasks separate, students can use the same topic to build several revision actions.",
    "This matters for Queensland students because senior assessment often rewards clear understanding, relevant evidence, accurate language and confident application. Studiely provides independent study support and is not affiliated with QCAA or any government education authority.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clearer notes for timelines, source notes, key figures, historiography, themes, causes, consequences and essay plans",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for dates, events, terms, individuals, source features and argument prompts",
    },
    {
      need: "Check knowledge",
      support:
        "Use quizzes to test chronology, causes, consequences, source interpretation and evidence links",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus revision around source evaluation, thesis clarity, evidence control and sustained judgement",
    },
    {
      need: "Practise application",
      support:
        "Work through source responses, essay plans, extended responses and timed historical arguments",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for QCE Modern History",
      body: "Revision notes for QCE Modern History should do more than store information. They should turn class material into organised explanations students can return to before internal assessment, external assessment preparation or school-based revision. With Studiely, students can create notes for timelines, source notes, key figures, historiography, themes, causes, consequences and essay plans. The aim is to make each topic easier to understand, compare and apply. Clear notes also help students avoid wasting time searching through scattered material when they need a focused recap.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Modern History Flashcards",
      body: "Flashcards work best when they force active recall. For modern History, that means checking whether students can remember the right term, idea, example, process, evidence or method without looking at a full page of notes. Studiely can help students build flashcards for dates, events, terms, individuals, source features and argument prompts. Short, repeated recall sessions make it easier to keep important details fresh while still leaving time for deeper practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Skills",
      body: "Quiz practice gives students a fast way to find gaps before they attempt longer responses. A quiz can test simple recall, but it can also ask students to choose the best explanation, identify the right method or connect a concept to an example. For this subject, useful quizzes can check chronology, causes, consequences, source interpretation and evidence links. This helps students see whether they are ready to move from revision into assessment-style practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for QLD Students",
      body: "Exam focus is about narrowing revision. Students often know a lot of content, but the task usually asks for a specific kind of response. Studiely helps students focus on the skill, evidence, method or explanation the question needs. For QLD students, that can include source evaluation, thesis clarity, evidence control and sustained judgement. A focused approach makes revision more efficient because students stop trying to revise everything at once and start preparing for the decisions they need to make in real tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply ideas, plan responses, make mistakes, review feedback and try again. This is where understanding becomes more reliable. Studiely supports exam-style practice through source responses, essay plans, extended responses and timed historical arguments. These practice tasks help students connect what they know with how they need to respond under time and assessment pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for Modern History",
  whyParagraphs: [
    "Students use Studiely because it brings the main study actions together. They can start with one topic, then move from notes to flashcards, from flashcards to quizzes and from quizzes to practice without rebuilding their study material from scratch.",
    "Students can build judgement and structure instead of only memorising timelines. It also gives students a clearer routine: understand the content, remember the right details, check knowledge, focus on the task and practise applying skills.",
  ],
  faqs: [
    {
      question: "What is QCE Modern History?",
      answer:
        "It is a senior Queensland subject pathway within the Queensland Certificate of Education context. It helps students build knowledge and skills in modern History, including chronology, source analysis, evidence selection, argument building, evaluation and historical judgement. Students should always follow their school program and official QCAA information for exact assessment details.",
    },
    {
      question: "How can Studiely help with this subject?",
      answer:
        "Studiely helps students turn modern History topics, notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. It supports active revision instead of relying only on rereading.",
    },
    {
      question: "Can I create revision notes for this subject?",
      answer:
        "Yes. Students can use Studiely to create focused notes for timelines, source notes, key figures, historiography, themes, causes, consequences and essay plans. Good notes make it easier to review content quickly and apply it in assessment-style questions.",
    },
    {
      question: "Are flashcards useful for modern History?",
      answer:
        "Flashcards are useful when they test recall and not just recognition. For modern History, they can help students remember dates, events, terms, individuals, source features and argument prompts before moving into quizzes or practice responses.",
    },
    {
      question: "Is Studiely an official QCAA resource?",
      answer:
        "No. Studiely provides independent study support for students. It is not affiliated with QCAA, any Queensland education authority or any government exam body.",
    },
  ],
  ctaTitle: "Start Studying Modern History with More Structure",
  ctaBody:
    "Start building a stronger study routine with Studiely. Create revision notes, flashcards, quizzes, exam focus support and exam-style practice for the topics and skills you need to improve.",
  ctaPrimaryLabel: "Start studying Modern History",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
