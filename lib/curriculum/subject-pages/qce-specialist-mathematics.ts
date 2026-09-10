import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const QCE_SPECIALIST_MATHEMATICS: SubjectLandingContent = {
  path: "/australian-curriculum/queensland/qce/specialist-mathematics",
  seoTitle: "QCE Specialist Mathematics Study Resources | Studiely",
  metaDescription:
    "Create QCE Specialist Mathematics revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for Queensland students.",
  shortDescription:
    "Studiely helps QCE Specialist Mathematics students create revision notes, flashcards, quizzes and exam practice for clearer Queensland senior subject revision.",
  keywords: [
    "QCE Specialist Mathematics",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "QCE Specialist Mathematics",
  heroEyebrow: "Queensland QCE",
  heroTitle: "QCE Specialist Mathematics Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "Students can use Studiely for QCE Specialist Mathematics to turn class notes, subject topics, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so QLD students can revise actively, check gaps and prepare more confidently without relying only on rereading.",
  introTitle:
    "QCE Specialist Mathematics study works best when students combine subject knowledge with regular recall and clear assessment practice",
  introParagraphs: [
    "Specialist Mathematics demands precision, persistence and comfort with abstract ideas. The strongest students practise not only procedures but also the reasoning behind each method. Studiely helps Queensland senior students turn specialist Mathematics content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Queensland Certificate of Education students, the challenge is not only effort; it is knowing what to revise next, how to check understanding and how to apply ideas under assessment conditions. A stronger study routine helps students summarise, recall, test, focus and practise with purpose.",
  ],
  coverTitle: "What Specialist Mathematics Covers",
  coverIntro:
    "Specialist Mathematics covers complex numbers, vectors, matrices, advanced calculus, proof-style reasoning, mechanics, differential equations and mathematical modelling. Students need to build both content knowledge and practical skills, especially formal reasoning, notation control, multi-step problem solving, algebraic precision, vector interpretation and proof structure.",
  coverTopics: [
    "Complex numbers",
    "Vectors",
    "Matrices",
    "Advanced calculus",
    "Proof-style reasoning",
    "Mechanics",
    "Differential equations",
    "Mathematical modelling",
  ],
  coverClosing:
    "The common challenge is staying accurate through long solutions where one small error can affect the whole pathway. That is why a useful study workflow should help students organise information, check recall, practise decisions and connect revision to the way questions are actually answered.",
  supportTitle:
    "How Studiely Helps Queensland Students Study Specialist Mathematics",
  supportParagraphs: [
    "Studiely gives students one place to transform specialist Mathematics content into different forms of active study. Instead of keeping notes, flashcards, quizzes and practice tasks separate, students can use the same topic to build several revision actions.",
    "This matters for Queensland students because senior assessment often rewards clear understanding, relevant evidence, accurate language and confident application. Studiely provides independent study support and is not affiliated with QCAA or any government education authority.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clearer notes for proof patterns, vector methods, complex number strategies, calculus links, mechanics assumptions and solution checkpoints",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for identities, transformations, vector facts, theorem prompts, derivative and integral forms, and notation reminders",
    },
    {
      need: "Check knowledge",
      support:
        "Use quizzes to test advanced concepts, method selection, symbolic reasoning, proof steps and error spotting",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus revision around planning difficult questions, setting assumptions, writing rigorous solutions and managing extended problems",
    },
    {
      need: "Practise application",
      support:
        "Work through complex number problems, vector tasks, mechanics scenarios, proof questions and challenging mixed practice",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for QCE Specialist Mathematics",
      body: "Revision notes for QCE Specialist Mathematics should do more than store information. They should turn class material into organised explanations students can return to before internal assessment, external assessment preparation or school-based revision. With Studiely, students can create notes for proof patterns, vector methods, complex number strategies, calculus links, mechanics assumptions and solution checkpoints. The aim is to make each topic easier to understand, compare and apply. Clear notes also help students avoid wasting time searching through scattered material when they need a focused recap.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Specialist Mathematics Flashcards",
      body: "Flashcards work best when they force active recall. For specialist Mathematics, that means checking whether students can remember the right term, idea, example, process, evidence or method without looking at a full page of notes. Studiely can help students build flashcards for identities, transformations, vector facts, theorem prompts, derivative and integral forms, and notation reminders. Short, repeated recall sessions make it easier to keep important details fresh while still leaving time for deeper practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Skills",
      body: "Quiz practice gives students a fast way to find gaps before they attempt longer responses. A quiz can test simple recall, but it can also ask students to choose the best explanation, identify the right method or connect a concept to an example. For this subject, useful quizzes can check advanced concepts, method selection, symbolic reasoning, proof steps and error spotting. This helps students see whether they are ready to move from revision into assessment-style practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for QLD Students",
      body: "Exam focus is about narrowing revision. Students often know a lot of content, but the task usually asks for a specific kind of response. Studiely helps students focus on the skill, evidence, method or explanation the question needs. For QLD students, that can include planning difficult questions, setting assumptions, writing rigorous solutions and managing extended problems. A focused approach makes revision more efficient because students stop trying to revise everything at once and start preparing for the decisions they need to make in real tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply ideas, plan responses, make mistakes, review feedback and try again. This is where understanding becomes more reliable. Studiely supports exam-style practice through complex number problems, vector tasks, mechanics scenarios, proof questions and challenging mixed practice. These practice tasks help students connect what they know with how they need to respond under time and assessment pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for Specialist Mathematics",
  whyParagraphs: [
    "Students use Studiely because it brings the main study actions together. They can start with one topic, then move from notes to flashcards, from flashcards to quizzes and from quizzes to practice without rebuilding their study material from scratch.",
    "The page helps students organise difficult material into repeatable study actions. It also gives students a clearer routine: understand the content, remember the right details, check knowledge, focus on the task and practise applying skills.",
  ],
  faqs: [
    {
      question: "What is QCE Specialist Mathematics?",
      answer:
        "It is a senior Queensland subject pathway within the Queensland Certificate of Education context. It helps students build knowledge and skills in specialist Mathematics, including formal reasoning, notation control, multi-step problem solving, algebraic precision, vector interpretation and proof structure. Students should always follow their school program and official QCAA information for exact assessment details.",
    },
    {
      question: "How can Studiely help with this subject?",
      answer:
        "Studiely helps students turn specialist Mathematics topics, notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. It supports active revision instead of relying only on rereading.",
    },
    {
      question: "Can I create revision notes for this subject?",
      answer:
        "Yes. Students can use Studiely to create focused notes for proof patterns, vector methods, complex number strategies, calculus links, mechanics assumptions and solution checkpoints. Good notes make it easier to review content quickly and apply it in assessment-style questions.",
    },
    {
      question: "Are flashcards useful for specialist Mathematics?",
      answer:
        "Flashcards are useful when they test recall and not just recognition. For specialist Mathematics, they can help students remember identities, transformations, vector facts, theorem prompts, derivative and integral forms, and notation reminders before moving into quizzes or practice responses.",
    },
    {
      question: "Is Studiely an official QCAA resource?",
      answer:
        "No. Studiely provides independent study support for students. It is not affiliated with QCAA, any Queensland education authority or any government exam body.",
    },
  ],
  ctaTitle: "Start Studying Specialist Mathematics with More Structure",
  ctaBody:
    "Start building a stronger study routine with Studiely. Create revision notes, flashcards, quizzes, exam focus support and exam-style practice for the topics and skills you need to improve.",
  ctaPrimaryLabel: "Start studying Specialist Mathematics",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
