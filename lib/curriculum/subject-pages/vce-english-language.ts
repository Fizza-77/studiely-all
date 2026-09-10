import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_ENGLISH_LANGUAGE: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/english-language",
  seoTitle: "VCE English Language Study Resources | Studiely",
  metaDescription:
    "Create VCE English Language notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE English Language students create revision notes, flashcards, quizzes and exam practice from english language topics, skills and assessment practice.",
  keywords: [
    "VCE English Language",
    "VCE English Language resources",
    "VCE English Language revision notes",
    "VCE English Language flashcards",
    "VCE English Language quiz",
    "VCE English Language exam practice",
  ],
  breadcrumbName: "VCE English Language",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE English Language Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE English Language students can use Studiely to turn english language topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle:
    "VCE English Language study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise metalanguage, language variation, discourse, sociolinguistics, and analytical commentary.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE English Language Covers",
  coverIntro:
    "VCE English Language explores how English works in use. Students study sounds, words, grammar, meaning, discourse, identity, social purpose, register, language variation, and language change.",
  coverTopics: [
    "Sounds",
    "Words",
    "Grammar",
    "Meaning",
    "Discourse",
    "Identity",
    "Social purpose",
    "Register",
    "Language variation",
    "Language change",
  ],
  coverClosing:
    "Students often lose marks when they know the concept but cannot use precise metalanguage or connect examples to function, context, and social meaning.",
  supportTitle: "How Studiely Helps with VCE English Language",
  supportParagraphs: [
    "Studiely supports VCE English Language by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because english language revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for subsystems, metalanguage, discourse features, examples, sociolinguistic concepts, and analytical commentary reminders.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for metalanguage definitions, examples, functions, subsystems, register features, and language variation terms.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for terminology, feature identification, example analysis, short explanations, and text-function links.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around analytical commentary planning, essay argument building, example selection, and precise use of evidence.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with short-answer drills, commentary plans, essay outlines, and timed analysis tasks.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE English Language Revision Notes",
      body: "VCE English Language Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around subsystems, metalanguage, discourse features, examples, sociolinguistic concepts, and analytical commentary reminders so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE English Language Flashcards",
      body: "VCE English Language Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For english language, flashcards are most useful when they target metalanguage definitions, examples, functions, subsystems, register features, and language variation terms. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE English Language Quiz Practice",
      body: "VCE English Language Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around terminology, feature identification, example analysis, short explanations, and text-function links. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE English Language Exam Focus",
      body: "VCE English Language Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on analytical commentary planning, essay argument building, example selection, and precise use of evidence. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE English Language Exam Practice",
      body: "VCE English Language Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through short-answer drills, commentary plans, essay outlines, and timed analysis tasks. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE English Language",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE English Language because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE English Language?",
      answer:
        "VCE English Language is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in english language through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE English Language?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for english language topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE English Language revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for subsystems, metalanguage, discourse features, examples, sociolinguistic concepts, and analytical commentary reminders. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help me remember English Language metalanguage?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE English Language Revision",
  ctaBody:
    "Studying VCE English Language becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the english language skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying English Language",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
