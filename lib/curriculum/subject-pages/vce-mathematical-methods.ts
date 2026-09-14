import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_MATHEMATICAL_METHODS: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/mathematical-methods",
  seoTitle: "VCE Mathematical Methods Study Resources | Studiely",
  metaDescription:
    "Create VCE Mathematical Methods notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Mathematical Methods students create revision notes, flashcards, quizzes and exam practice from mathematical methods topics, skills and assessment practice.",
  keywords: [
    "VCE Mathematical Methods",
    "VCE Mathematical Methods resources",
    "VCE Mathematical Methods revision notes",
    "VCE Mathematical Methods flashcards",
    "VCE Mathematical Methods quiz",
    "VCE Mathematical Methods exam practice",
  ],
  breadcrumbName: "VCE Mathematical Methods",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Mathematical Methods Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Mathematical Methods students can use Studiely to turn mathematical methods topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle:
    "VCE Mathematical Methods study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise functions, calculus, probability, algebra, graph behaviour, and exam-style problem solving.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Mathematical Methods Covers",
  coverIntro:
    "VCE Mathematical Methods develops mathematical reasoning through functions, algebra, calculus, probability, graphs, transformations, rates of change, and modelling.",
  coverTopics: [
    "Functions",
    "Algebra",
    "Calculus",
    "Probability",
    "Graphs",
    "Transformations",
    "Rates of change",
    "Modelling",
  ],
  coverClosing:
    "The hard part is often connecting techniques. A question may involve algebra, a graph, calculus and interpretation in the same response.",
  supportTitle: "How Studiely Helps with VCE Mathematical Methods",
  supportParagraphs: [
    "Studiely supports VCE Mathematical Methods by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because mathematical methods revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for function types, calculus rules, probability concepts, graph transformations, worked methods, and reasoning steps.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for formulas, derivative rules, probability terms, graph features, transformations, and method cues.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for method recognition, function behaviour, calculus application, probability reasoning, and interpretation.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around multi-step problem solving, CAS strategy, exact working, graph analysis, and explaining what an answer means.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with calculus drills, function analysis, probability questions, exam-style extended problems, and timed mixed practice.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Mathematical Methods Revision Notes",
      body: "VCE Mathematical Methods Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around function types, calculus rules, probability concepts, graph transformations, worked methods, and reasoning steps so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Mathematical Methods Flashcards",
      body: "VCE Mathematical Methods Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For mathematical methods, flashcards are most useful when they target formulas, derivative rules, probability terms, graph features, transformations, and method cues. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Mathematical Methods Quiz Practice",
      body: "VCE Mathematical Methods Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around method recognition, function behaviour, calculus application, probability reasoning, and interpretation. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Mathematical Methods Exam Focus",
      body: "VCE Mathematical Methods Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on multi-step problem solving, CAS strategy, exact working, graph analysis, and explaining what an answer means. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Mathematical Methods Exam Practice",
      body: "VCE Mathematical Methods Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through calculus drills, function analysis, probability questions, exam-style extended problems, and timed mixed practice. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Mathematical Methods",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Mathematical Methods because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Mathematical Methods?",
      answer:
        "VCE Mathematical Methods is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in mathematical methods through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Mathematical Methods?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for mathematical methods topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Mathematical Methods revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for function types, calculus rules, probability concepts, graph transformations, worked methods, and reasoning steps. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with VCE Mathematical Methods problem solving?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Mathematical Methods Revision",
  ctaBody:
    "Studying VCE Mathematical Methods becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the mathematical methods skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Mathematical Methods",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
