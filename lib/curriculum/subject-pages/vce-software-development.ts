import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_SOFTWARE_DEVELOPMENT: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/software-development",
  seoTitle: "VCE Software Development Study Resources | Studiely",
  metaDescription:
    "Create VCE Software Development notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Software Development students create revision notes, flashcards, quizzes and exam practice from software development topics, skills and assessment practice.",
  keywords: [
    "VCE Software Development",
    "VCE Software Development resources",
    "VCE Software Development revision notes",
    "VCE Software Development flashcards",
    "VCE Software Development quiz",
    "VCE Software Development exam practice",
  ],
  breadcrumbName: "VCE Software Development",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Software Development Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Software Development students can use Studiely to turn software development topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle:
    "VCE Software Development study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise programming, algorithms, software design, testing, data, project planning, and problem-solving.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Software Development Covers",
  coverIntro:
    "VCE Software Development focuses on designing, developing, testing, documenting, and evaluating software solutions. Students work with algorithms, data, user needs, programming logic, validation, testing, and project management.",
  coverTopics: [
    "Algorithms",
    "Data",
    "User needs",
    "Programming logic",
    "Validation",
    "Testing",
    "Project management",
    "Designing, developing, documenting, and evaluating solutions",
  ],
  coverClosing:
    "Students need to understand both code and communication. A strong response can explain a design decision, trace an algorithm, justify testing, or connect a solution to user requirements.",
  supportTitle: "How Studiely Helps with VCE Software Development",
  supportParagraphs: [
    "Studiely supports VCE Software Development by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because software development revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for algorithms, pseudocode, software design, testing methods, data structures, project stages, and user requirements.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for programming terms, algorithm patterns, testing types, data concepts, and project-management vocabulary.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for logic tracing, terminology, software processes, testing choices, and scenario-based decisions.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around reading requirements, explaining algorithms, justifying design choices, and evaluating software quality.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with pseudocode drills, design questions, testing scenarios, and timed exam-style software problems.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Software Development Revision Notes",
      body: "VCE Software Development Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around algorithms, pseudocode, software design, testing methods, data structures, project stages, and user requirements so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Software Development Flashcards",
      body: "VCE Software Development Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For software development, flashcards are most useful when they target programming terms, algorithm patterns, testing types, data concepts, and project-management vocabulary. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Software Development Quiz Practice",
      body: "VCE Software Development Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around logic tracing, terminology, software processes, testing choices, and scenario-based decisions. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Software Development Exam Focus",
      body: "VCE Software Development Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on reading requirements, explaining algorithms, justifying design choices, and evaluating software quality. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Software Development Exam Practice",
      body: "VCE Software Development Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through pseudocode drills, design questions, testing scenarios, and timed exam-style software problems. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Software Development",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Software Development because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Software Development?",
      answer:
        "VCE Software Development is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in software development through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Software Development?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for software development topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Software Development revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for algorithms, pseudocode, software design, testing methods, data structures, project stages, and user requirements. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with VCE Software Development pseudocode?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Software Development Revision",
  ctaBody:
    "Studying VCE Software Development becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the software development skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Software Development",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
