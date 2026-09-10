import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_SOCIOLOGY: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/sociology",
  seoTitle: "VCE Sociology Study Resources | Studiely",
  metaDescription:
    "Create VCE Sociology notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Sociology students create revision notes, flashcards, quizzes and exam practice from sociology topics, skills and assessment practice.",
  keywords: [
    "VCE Sociology",
    "VCE Sociology resources",
    "VCE Sociology revision notes",
    "VCE Sociology flashcards",
    "VCE Sociology quiz",
    "VCE Sociology exam practice",
  ],
  breadcrumbName: "VCE Sociology",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Sociology Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Sociology students can use Studiely to turn sociology topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle:
    "VCE Sociology study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise culture, identity, social groups, institutions, theories, evidence, and sociological explanation.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Sociology Covers",
  coverIntro:
    "VCE Sociology helps students examine culture, identity, social groups, community, power, social norms, institutions, and sociological perspectives.",
  coverTopics: [
    "Culture",
    "Identity",
    "Social groups",
    "Community",
    "Power",
    "Social norms",
    "Institutions",
    "Sociological perspectives",
  ],
  coverClosing:
    "Students often need support moving from everyday opinions to evidence-based sociological explanation. Strong answers use concepts, examples, and theory with control.",
  supportTitle: "How Studiely Helps with VCE Sociology",
  supportParagraphs: [
    "Studiely supports VCE Sociology by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because sociology revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for key theories, social concepts, examples, case material, definitions, and explanation frameworks.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for terms, theorists, concepts, social categories, example links, and comparison points.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for concept recall, theory application, social issue analysis, examples, and terminology.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around building evidence-based explanations, applying theory, comparing perspectives, and writing clear extended responses.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with short-answer drills, theory application tasks, case analysis, and essay planning.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Sociology Revision Notes",
      body: "VCE Sociology Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around key theories, social concepts, examples, case material, definitions, and explanation frameworks so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Sociology Flashcards",
      body: "VCE Sociology Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For sociology, flashcards are most useful when they target terms, theorists, concepts, social categories, example links, and comparison points. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Sociology Quiz Practice",
      body: "VCE Sociology Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around concept recall, theory application, social issue analysis, examples, and terminology. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Sociology Exam Focus",
      body: "VCE Sociology Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on building evidence-based explanations, applying theory, comparing perspectives, and writing clear extended responses. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Sociology Exam Practice",
      body: "VCE Sociology Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through short-answer drills, theory application tasks, case analysis, and essay planning. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Sociology",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Sociology because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Sociology?",
      answer:
        "VCE Sociology is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in sociology through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Sociology?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for sociology topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Sociology revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for key theories, social concepts, examples, case material, definitions, and explanation frameworks. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with Sociology theory?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Sociology Revision",
  ctaBody:
    "Studying VCE Sociology becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the sociology skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Sociology",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
