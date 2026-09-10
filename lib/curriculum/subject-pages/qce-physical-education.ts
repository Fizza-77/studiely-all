import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const QCE_PHYSICAL_EDUCATION: SubjectLandingContent = {
  path: "/australian-curriculum/queensland/qce/physical-education",
  seoTitle: "QCE Physical Education Study Resources | Studiely",
  metaDescription:
    "Create QCE Physical Education revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for Queensland students.",
  shortDescription:
    "Studiely helps QCE Physical Education students create revision notes, flashcards, quizzes and exam practice for clearer Queensland senior subject revision.",
  keywords: [
    "QCE Physical Education",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "QCE Physical Education",
  heroEyebrow: "Queensland QCE",
  heroTitle: "QCE Physical Education Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "Students can use Studiely for QCE Physical Education to turn class notes, subject topics, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so QLD students can revise actively, check gaps and prepare more confidently without relying only on rereading.",
  introTitle:
    "QCE Physical Education study works best when students combine subject knowledge with regular recall and clear assessment practice",
  introParagraphs: [
    "Physical Education combines movement, physiology, psychology and performance analysis. Strong study connects theory with practical performance, data and training decisions. Studiely helps Queensland senior students turn physical Education content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Queensland Certificate of Education students, the challenge is not only effort; it is knowing what to revise next, how to check understanding and how to apply ideas under assessment conditions. A stronger study routine helps students summarise, recall, test, focus and practise with purpose.",
  ],
  coverTitle: "What Physical Education Covers",
  coverIntro:
    "Physical Education covers body systems, biomechanics, motor learning, training principles, sport psychology, energy systems, data and performance improvement. Students need to build both content knowledge and practical skills, especially performance analysis, data interpretation, terminology, training evaluation, applied examples and structured explanation.",
  coverTopics: [
    "Body systems",
    "Biomechanics",
    "Motor learning",
    "Training principles",
    "Sport psychology",
    "Energy systems",
    "Data",
    "Performance improvement",
  ],
  coverClosing:
    "The common challenge is linking theory to movement and performance evidence instead of writing general fitness statements. That is why a useful study workflow should help students organise information, check recall, practise decisions and connect revision to the way questions are actually answered.",
  supportTitle: "How Studiely Helps Queensland Students Study Physical Education",
  supportParagraphs: [
    "Studiely gives students one place to transform physical Education content into different forms of active study. Instead of keeping notes, flashcards, quizzes and practice tasks separate, students can use the same topic to build several revision actions.",
    "This matters for Queensland students because senior assessment often rewards clear understanding, relevant evidence, accurate language and confident application. Studiely provides independent study support and is not affiliated with QCAA or any government education authority.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clearer notes for system summaries, training principles, biomechanics concepts, data examples, diagrams and response plans",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for definitions, body systems, training terms, movement concepts, data indicators and examples",
    },
    {
      need: "Check knowledge",
      support:
        "Use quizzes to test terminology, body systems, training principles, biomechanics and scenario application",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus revision around applied evidence, data use, directive terms, evaluation and structured responses",
    },
    {
      need: "Practise application",
      support:
        "Work through scenario questions, data responses, training analysis and performance evaluation tasks",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for QCE Physical Education",
      body: "Revision notes for QCE Physical Education should do more than store information. They should turn class material into organised explanations students can return to before internal assessment, external assessment preparation or school-based revision. With Studiely, students can create notes for system summaries, training principles, biomechanics concepts, data examples, diagrams and response plans. The aim is to make each topic easier to understand, compare and apply. Clear notes also help students avoid wasting time searching through scattered material when they need a focused recap.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Physical Education Flashcards",
      body: "Flashcards work best when they force active recall. For physical Education, that means checking whether students can remember the right term, idea, example, process, evidence or method without looking at a full page of notes. Studiely can help students build flashcards for definitions, body systems, training terms, movement concepts, data indicators and examples. Short, repeated recall sessions make it easier to keep important details fresh while still leaving time for deeper practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Skills",
      body: "Quiz practice gives students a fast way to find gaps before they attempt longer responses. A quiz can test simple recall, but it can also ask students to choose the best explanation, identify the right method or connect a concept to an example. For this subject, useful quizzes can check terminology, body systems, training principles, biomechanics and scenario application. This helps students see whether they are ready to move from revision into assessment-style practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for QLD Students",
      body: "Exam focus is about narrowing revision. Students often know a lot of content, but the task usually asks for a specific kind of response. Studiely helps students focus on the skill, evidence, method or explanation the question needs. For QLD students, that can include applied evidence, data use, directive terms, evaluation and structured responses. A focused approach makes revision more efficient because students stop trying to revise everything at once and start preparing for the decisions they need to make in real tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply ideas, plan responses, make mistakes, review feedback and try again. This is where understanding becomes more reliable. Studiely supports exam-style practice through scenario questions, data responses, training analysis and performance evaluation tasks. These practice tasks help students connect what they know with how they need to respond under time and assessment pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for Physical Education",
  whyParagraphs: [
    "Students use Studiely because it brings the main study actions together. They can start with one topic, then move from notes to flashcards, from flashcards to quizzes and from quizzes to practice without rebuilding their study material from scratch.",
    "Students can connect theory with movement, evidence and performance decisions. It also gives students a clearer routine: understand the content, remember the right details, check knowledge, focus on the task and practise applying skills.",
  ],
  faqs: [
    {
      question: "What is QCE Physical Education?",
      answer:
        "It is a senior Queensland subject pathway within the Queensland Certificate of Education context. It helps students build knowledge and skills in physical Education, including performance analysis, data interpretation, terminology, training evaluation, applied examples and structured explanation. Students should always follow their school program and official QCAA information for exact assessment details.",
    },
    {
      question: "How can Studiely help with this subject?",
      answer:
        "Studiely helps students turn physical Education topics, notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. It supports active revision instead of relying only on rereading.",
    },
    {
      question: "Can I create revision notes for this subject?",
      answer:
        "Yes. Students can use Studiely to create focused notes for system summaries, training principles, biomechanics concepts, data examples, diagrams and response plans. Good notes make it easier to review content quickly and apply it in assessment-style questions.",
    },
    {
      question: "Are flashcards useful for physical Education?",
      answer:
        "Flashcards are useful when they test recall and not just recognition. For physical Education, they can help students remember definitions, body systems, training terms, movement concepts, data indicators and examples before moving into quizzes or practice responses.",
    },
    {
      question: "Is Studiely an official QCAA resource?",
      answer:
        "No. Studiely provides independent study support for students. It is not affiliated with QCAA, any Queensland education authority or any government exam body.",
    },
  ],
  ctaTitle: "Start Studying Physical Education with More Structure",
  ctaBody:
    "Start building a stronger study routine with Studiely. Create revision notes, flashcards, quizzes, exam focus support and exam-style practice for the topics and skills you need to improve.",
  ctaPrimaryLabel: "Start studying Physical Education",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
