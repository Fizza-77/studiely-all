import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_BUSINESS_MANAGEMENT: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/business-management",
  seoTitle: "VCE Business Management Study Resources | Studiely",
  metaDescription:
    "Create VCE Business Management notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Business Management students create revision notes, flashcards, quizzes and exam practice from business management topics, skills and assessment practice.",
  keywords: [
    "VCE Business Management",
    "VCE Business Management resources",
    "VCE Business Management revision notes",
    "VCE Business Management flashcards",
    "VCE Business Management quiz",
    "VCE Business Management exam practice",
  ],
  breadcrumbName: "VCE Business Management",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Business Management Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Business Management students can use Studiely to turn business management topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle:
    "VCE Business Management study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise business concepts, operations, management strategies, case studies, change, and evaluation.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Business Management Covers",
  coverIntro:
    "VCE Business Management explores how businesses operate, manage people and processes, respond to change, make decisions, and evaluate strategies.",
  coverTopics: [
    "Business operations",
    "Managing people and processes",
    "Responding to change",
    "Decision-making",
    "Strategy evaluation",
    "Case studies",
  ],
  coverClosing:
    "Students can lose marks when they define a concept but do not apply it to the case or evaluate the strategy in enough depth.",
  supportTitle: "How Studiely Helps with VCE Business Management",
  supportParagraphs: [
    "Studiely supports VCE Business Management by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because business management revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for management theories, business terms, operations strategies, change management, case examples, and evaluation frameworks.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for definitions, advantages, limitations, strategy names, management concepts, and case-study links.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for terminology, strategy selection, application, cause-effect reasoning, and evaluation prompts.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around using case material, explaining impacts, comparing strategies, and writing clear evaluate-style answers.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with case-study questions, definition drills, short-answer practice, and extended response planning.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Business Management Revision Notes",
      body: "VCE Business Management Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around management theories, business terms, operations strategies, change management, case examples, and evaluation frameworks so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Business Management Flashcards",
      body: "VCE Business Management Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For business management, flashcards are most useful when they target definitions, advantages, limitations, strategy names, management concepts, and case-study links. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Business Management Quiz Practice",
      body: "VCE Business Management Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around terminology, strategy selection, application, cause-effect reasoning, and evaluation prompts. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Business Management Exam Focus",
      body: "VCE Business Management Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on using case material, explaining impacts, comparing strategies, and writing clear evaluate-style answers. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Business Management Exam Practice",
      body: "VCE Business Management Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through case-study questions, definition drills, short-answer practice, and extended response planning. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Business Management",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Business Management because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Business Management?",
      answer:
        "VCE Business Management is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in business management through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Business Management?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for business management topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Business Management revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for management theories, business terms, operations strategies, change management, case examples, and evaluation frameworks. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with VCE Business Management case studies?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Business Management Revision",
  ctaBody:
    "Studying VCE Business Management becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the business management skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Business Management",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
