import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_LEGAL_STUDIES: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/legal-studies",
  seoTitle: "VCE Legal Studies Study Resources | Studiely",
  metaDescription:
    "Create VCE Legal Studies notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Legal Studies students create revision notes, flashcards, quizzes and exam practice from legal studies topics, skills and assessment practice.",
  keywords: [
    "VCE Legal Studies",
    "VCE Legal Studies resources",
    "VCE Legal Studies revision notes",
    "VCE Legal Studies flashcards",
    "VCE Legal Studies quiz",
    "VCE Legal Studies exam practice",
  ],
  breadcrumbName: "VCE Legal Studies",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Legal Studies Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Legal Studies students can use Studiely to turn legal studies topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle:
    "VCE Legal Studies study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise legal principles, institutions, rights, reform, case examples, and structured legal reasoning.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Legal Studies Covers",
  coverIntro:
    "VCE Legal Studies examines laws, legal institutions, rights, the justice system, law-making, reform, and the way legal principles operate in practice.",
  coverTopics: [
    "Laws",
    "Legal institutions",
    "Rights",
    "Justice system",
    "Law-making",
    "Reform",
    "Legal principles in practice",
  ],
  coverClosing:
    "Students need to be precise. Legal Studies answers often require accurate terminology, relevant examples, structured reasoning, and evaluation of strengths and weaknesses.",
  supportTitle: "How Studiely Helps with VCE Legal Studies",
  supportParagraphs: [
    "Studiely supports VCE Legal Studies by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because legal studies revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for legal terms, institutions, rights, processes, case examples, reforms, and evaluation points.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for definitions, legal principles, roles, case examples, reform terms, and comparison points.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for terminology, process order, institution roles, rights, case application, and evaluation choices.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around answering command terms, applying examples, structuring evaluation, and using precise legal language.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with short-answer questions, evaluate prompts, case application drills, and timed exam-style responses.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Legal Studies Revision Notes",
      body: "VCE Legal Studies Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around legal terms, institutions, rights, processes, case examples, reforms, and evaluation points so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Legal Studies Flashcards",
      body: "VCE Legal Studies Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For legal studies, flashcards are most useful when they target definitions, legal principles, roles, case examples, reform terms, and comparison points. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Legal Studies Quiz Practice",
      body: "VCE Legal Studies Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around terminology, process order, institution roles, rights, case application, and evaluation choices. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Legal Studies Exam Focus",
      body: "VCE Legal Studies Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on answering command terms, applying examples, structuring evaluation, and using precise legal language. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Legal Studies Exam Practice",
      body: "VCE Legal Studies Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through short-answer questions, evaluate prompts, case application drills, and timed exam-style responses. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Legal Studies",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Legal Studies because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Legal Studies?",
      answer:
        "VCE Legal Studies is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in legal studies through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Legal Studies?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for legal studies topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Legal Studies revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for legal terms, institutions, rights, processes, case examples, reforms, and evaluation points. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with Legal Studies examples?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Legal Studies Revision",
  ctaBody:
    "Studying VCE Legal Studies becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the legal studies skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Legal Studies",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
