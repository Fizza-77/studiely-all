import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const QCE_ENGLISH: SubjectLandingContent = {
  path: "/australian-curriculum/queensland/qce/english",
  seoTitle: "QCE English Study Resources | Studiely",
  metaDescription:
    "Create QCE English revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for Queensland students.",
  shortDescription:
    "Studiely helps QCE English students create revision notes, flashcards, quizzes and exam practice for clearer Queensland senior subject revision.",
  keywords: [
    "QCE English",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "QCE English",
  heroEyebrow: "Queensland QCE",
  heroTitle: "QCE English Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "Students can use Studiely for QCE English to turn class notes, subject topics, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so QLD students can revise actively, check gaps and prepare more confidently without relying only on rereading.",
  introTitle:
    "QCE English study works best when students combine subject knowledge with regular recall and clear assessment practice",
  introParagraphs: [
    "English rewards students who can read closely, shape a purposeful response, and explain how language creates meaning. In Queensland senior study, success usually comes from building flexible ideas rather than memorising one fixed paragraph. Studiely helps Queensland senior students turn english content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Queensland Certificate of Education students, the challenge is not only effort; it is knowing what to revise next, how to check understanding and how to apply ideas under assessment conditions. A stronger study routine helps students summarise, recall, test, focus and practise with purpose.",
  ],
  coverTitle: "What English Covers",
  coverIntro:
    "English covers texts, perspectives, language choices, argument, analytical writing, imaginative writing, persuasive communication, audience, purpose and response structure. Students need to build both content knowledge and practical skills, especially close reading, thesis building, evidence selection, paragraph control, tone, structure and editing.",
  coverTopics: [
    "Texts and perspectives",
    "Language choices",
    "Argument",
    "Analytical writing",
    "Imaginative writing",
    "Persuasive communication",
    "Audience and purpose",
    "Response structure",
  ],
  coverClosing:
    "The common challenge is turning text knowledge into a focused answer that addresses the task instead of retelling the content. That is why a useful study workflow should help students organise information, check recall, practise decisions and connect revision to the way questions are actually answered.",
  supportTitle: "How Studiely Helps Queensland Students Study English",
  supportParagraphs: [
    "Studiely gives students one place to transform english content into different forms of active study. Instead of keeping notes, flashcards, quizzes and practice tasks separate, students can use the same topic to build several revision actions.",
    "This matters for Queensland students because senior assessment often rewards clear understanding, relevant evidence, accurate language and confident application. Studiely provides independent study support and is not affiliated with QCAA or any government education authority.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clearer notes for text evidence, themes, techniques, author choices, response plans, module ideas and writing goals",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for quotes, language devices, themes, tone words, audience-purpose reminders and paragraph prompts",
    },
    {
      need: "Check knowledge",
      support:
        "Use quizzes to test interpretation, evidence matching, language analysis, text detail and response decisions",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus revision around prompt unpacking, thesis control, evidence selection, paragraph sequencing and timing",
    },
    {
      need: "Practise application",
      support:
        "Work through analytical paragraphs, extended responses, persuasive tasks and creative or reflective writing exercises",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for QCE English",
      body: "Revision notes for QCE English should do more than store information. They should turn class material into organised explanations students can return to before internal assessment, external assessment preparation or school-based revision. With Studiely, students can create notes for text evidence, themes, techniques, author choices, response plans, module ideas and writing goals. The aim is to make each topic easier to understand, compare and apply. Clear notes also help students avoid wasting time searching through scattered material when they need a focused recap.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "English Flashcards",
      body: "Flashcards work best when they force active recall. For english, that means checking whether students can remember the right term, idea, example, process, evidence or method without looking at a full page of notes. Studiely can help students build flashcards for quotes, language devices, themes, tone words, audience-purpose reminders and paragraph prompts. Short, repeated recall sessions make it easier to keep important details fresh while still leaving time for deeper practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Skills",
      body: "Quiz practice gives students a fast way to find gaps before they attempt longer responses. A quiz can test simple recall, but it can also ask students to choose the best explanation, identify the right method or connect a concept to an example. For this subject, useful quizzes can check interpretation, evidence matching, language analysis, text detail and response decisions. This helps students see whether they are ready to move from revision into assessment-style practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for QLD Students",
      body: "Exam focus is about narrowing revision. Students often know a lot of content, but the task usually asks for a specific kind of response. Studiely helps students focus on the skill, evidence, method or explanation the question needs. For QLD students, that can include prompt unpacking, thesis control, evidence selection, paragraph sequencing and timing. A focused approach makes revision more efficient because students stop trying to revise everything at once and start preparing for the decisions they need to make in real tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply ideas, plan responses, make mistakes, review feedback and try again. This is where understanding becomes more reliable. Studiely supports exam-style practice through analytical paragraphs, extended responses, persuasive tasks and creative or reflective writing exercises. These practice tasks help students connect what they know with how they need to respond under time and assessment pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for English",
  whyParagraphs: [
    "Students use Studiely because it brings the main study actions together. They can start with one topic, then move from notes to flashcards, from flashcards to quizzes and from quizzes to practice without rebuilding their study material from scratch.",
    "The page gives English students a practical way to connect ideas, evidence and writing decisions before assessment pressure builds. It also gives students a clearer routine: understand the content, remember the right details, check knowledge, focus on the task and practise applying skills.",
  ],
  faqs: [
    {
      question: "What is QCE English?",
      answer:
        "It is a senior Queensland subject pathway within the Queensland Certificate of Education context. It helps students build knowledge and skills in english, including close reading, thesis building, evidence selection, paragraph control, tone, structure and editing. Students should always follow their school program and official QCAA information for exact assessment details.",
    },
    {
      question: "How can Studiely help with this subject?",
      answer:
        "Studiely helps students turn english topics, notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. It supports active revision instead of relying only on rereading.",
    },
    {
      question: "Can I create revision notes for this subject?",
      answer:
        "Yes. Students can use Studiely to create focused notes for text evidence, themes, techniques, author choices, response plans, module ideas and writing goals. Good notes make it easier to review content quickly and apply it in assessment-style questions.",
    },
    {
      question: "Are flashcards useful for english?",
      answer:
        "Flashcards are useful when they test recall and not just recognition. For english, they can help students remember quotes, language devices, themes, tone words, audience-purpose reminders and paragraph prompts before moving into quizzes or practice responses.",
    },
    {
      question: "Is Studiely an official QCAA resource?",
      answer:
        "No. Studiely provides independent study support for students. It is not affiliated with QCAA, any Queensland education authority or any government exam body.",
    },
  ],
  ctaTitle: "Start Studying English with More Structure",
  ctaBody:
    "Start building a stronger study routine with Studiely. Create revision notes, flashcards, quizzes, exam focus support and exam-style practice for the topics and skills you need to improve.",
  ctaPrimaryLabel: "Start studying English",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
