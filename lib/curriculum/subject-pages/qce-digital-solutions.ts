import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const QCE_DIGITAL_SOLUTIONS: SubjectLandingContent = {
  path: "/australian-curriculum/queensland/qce/digital-solutions",
  seoTitle: "QCE Digital Solutions Study Resources | Studiely",
  metaDescription:
    "Create QCE Digital Solutions revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for Queensland students.",
  shortDescription:
    "Studiely helps QCE Digital Solutions students create revision notes, flashcards, quizzes and exam practice for clearer Queensland senior subject revision.",
  keywords: [
    "QCE Digital Solutions",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "QCE Digital Solutions",
  heroEyebrow: "Queensland QCE",
  heroTitle: "QCE Digital Solutions Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "Students can use Studiely for QCE Digital Solutions to turn class notes, subject topics, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so QLD students can revise actively, check gaps and prepare more confidently without relying only on rereading.",
  introTitle:
    "QCE Digital Solutions study works best when students combine subject knowledge with regular recall and clear assessment practice",
  introParagraphs: [
    "Digital Solutions asks students to solve problems with data, algorithms, interfaces and digital systems. Strong preparation links technical knowledge with design decisions and user needs. Studiely helps Queensland senior students turn digital Solutions content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Queensland Certificate of Education students, the challenge is not only effort; it is knowing what to revise next, how to check understanding and how to apply ideas under assessment conditions. A stronger study routine helps students summarise, recall, test, focus and practise with purpose.",
  ],
  coverTitle: "What Digital Solutions Covers",
  coverIntro:
    "Digital Solutions covers computational thinking, algorithms, data, programming, user interfaces, digital systems, evaluation, project development and security considerations. Students need to build both content knowledge and practical skills, especially algorithm design, problem decomposition, data modelling, code logic, testing, evaluation and technical communication.",
  coverTopics: [
    "Computational thinking",
    "Algorithms",
    "Data",
    "Programming",
    "User interfaces",
    "Digital systems",
    "Evaluation",
    "Project development",
    "Security considerations",
  ],
  coverClosing:
    "The common challenge is explaining not only what a solution does, but why the design and development choices fit the problem. That is why a useful study workflow should help students organise information, check recall, practise decisions and connect revision to the way questions are actually answered.",
  supportTitle: "How Studiely Helps Queensland Students Study Digital Solutions",
  supportParagraphs: [
    "Studiely gives students one place to transform digital Solutions content into different forms of active study. Instead of keeping notes, flashcards, quizzes and practice tasks separate, students can use the same topic to build several revision actions.",
    "This matters for Queensland students because senior assessment often rewards clear understanding, relevant evidence, accurate language and confident application. Studiely provides independent study support and is not affiliated with QCAA or any government education authority.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clearer notes for algorithm steps, system diagrams, data concepts, code logic, design decisions and evaluation criteria",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for terms, symbols, data structures, interface principles, testing types and security concepts",
    },
    {
      need: "Check knowledge",
      support:
        "Use quizzes to test terminology, algorithm tracing, data reasoning, design choices and scenario decisions",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus revision around pseudocode clarity, solution evaluation, testing, justification and structured technical answers",
    },
    {
      need: "Practise application",
      support:
        "Work through algorithm tasks, interface critique, data questions, design scenarios and project-style explanations",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for QCE Digital Solutions",
      body: "Revision notes for QCE Digital Solutions should do more than store information. They should turn class material into organised explanations students can return to before internal assessment, external assessment preparation or school-based revision. With Studiely, students can create notes for algorithm steps, system diagrams, data concepts, code logic, design decisions and evaluation criteria. The aim is to make each topic easier to understand, compare and apply. Clear notes also help students avoid wasting time searching through scattered material when they need a focused recap.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Digital Solutions Flashcards",
      body: "Flashcards work best when they force active recall. For digital Solutions, that means checking whether students can remember the right term, idea, example, process, evidence or method without looking at a full page of notes. Studiely can help students build flashcards for terms, symbols, data structures, interface principles, testing types and security concepts. Short, repeated recall sessions make it easier to keep important details fresh while still leaving time for deeper practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Skills",
      body: "Quiz practice gives students a fast way to find gaps before they attempt longer responses. A quiz can test simple recall, but it can also ask students to choose the best explanation, identify the right method or connect a concept to an example. For this subject, useful quizzes can check terminology, algorithm tracing, data reasoning, design choices and scenario decisions. This helps students see whether they are ready to move from revision into assessment-style practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for QLD Students",
      body: "Exam focus is about narrowing revision. Students often know a lot of content, but the task usually asks for a specific kind of response. Studiely helps students focus on the skill, evidence, method or explanation the question needs. For QLD students, that can include pseudocode clarity, solution evaluation, testing, justification and structured technical answers. A focused approach makes revision more efficient because students stop trying to revise everything at once and start preparing for the decisions they need to make in real tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply ideas, plan responses, make mistakes, review feedback and try again. This is where understanding becomes more reliable. Studiely supports exam-style practice through algorithm tasks, interface critique, data questions, design scenarios and project-style explanations. These practice tasks help students connect what they know with how they need to respond under time and assessment pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for Digital Solutions",
  whyParagraphs: [
    "Students use Studiely because it brings the main study actions together. They can start with one topic, then move from notes to flashcards, from flashcards to quizzes and from quizzes to practice without rebuilding their study material from scratch.",
    "Students can connect computing theory with practical solution design. It also gives students a clearer routine: understand the content, remember the right details, check knowledge, focus on the task and practise applying skills.",
  ],
  faqs: [
    {
      question: "What is QCE Digital Solutions?",
      answer:
        "It is a senior Queensland subject pathway within the Queensland Certificate of Education context. It helps students build knowledge and skills in digital Solutions, including algorithm design, problem decomposition, data modelling, code logic, testing, evaluation and technical communication. Students should always follow their school program and official QCAA information for exact assessment details.",
    },
    {
      question: "How can Studiely help with this subject?",
      answer:
        "Studiely helps students turn digital Solutions topics, notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. It supports active revision instead of relying only on rereading.",
    },
    {
      question: "Can I create revision notes for this subject?",
      answer:
        "Yes. Students can use Studiely to create focused notes for algorithm steps, system diagrams, data concepts, code logic, design decisions and evaluation criteria. Good notes make it easier to review content quickly and apply it in assessment-style questions.",
    },
    {
      question: "Are flashcards useful for digital Solutions?",
      answer:
        "Flashcards are useful when they test recall and not just recognition. For digital Solutions, they can help students remember terms, symbols, data structures, interface principles, testing types and security concepts before moving into quizzes or practice responses.",
    },
    {
      question: "Is Studiely an official QCAA resource?",
      answer:
        "No. Studiely provides independent study support for students. It is not affiliated with QCAA, any Queensland education authority or any government exam body.",
    },
  ],
  ctaTitle: "Start Studying Digital Solutions with More Structure",
  ctaBody:
    "Start building a stronger study routine with Studiely. Create revision notes, flashcards, quizzes, exam focus support and exam-style practice for the topics and skills you need to improve.",
  ctaPrimaryLabel: "Start studying Digital Solutions",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
