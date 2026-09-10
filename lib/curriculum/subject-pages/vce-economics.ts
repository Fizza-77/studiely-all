import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_ECONOMICS: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/economics",
  seoTitle: "VCE Economics Study Resources | Studiely",
  metaDescription:
    "Create VCE Economics notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Economics students create revision notes, flashcards, quizzes and exam practice from economics topics, skills and assessment practice.",
  keywords: [
    "VCE Economics",
    "VCE Economics resources",
    "VCE Economics revision notes",
    "VCE Economics flashcards",
    "VCE Economics quiz",
    "VCE Economics exam practice",
  ],
  breadcrumbName: "VCE Economics",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Economics Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Economics students can use Studiely to turn economics topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle: "VCE Economics study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise economic concepts, markets, policy, data, diagrams, cause-effect reasoning, and evaluation.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Economics Covers",
  coverIntro:
    "VCE Economics helps students understand markets, decision-making, economic performance, government policy, trade-offs, data, and real-world economic issues.",
  coverTopics: [
    "Markets",
    "Decision-making",
    "Economic performance",
    "Government policy",
    "Trade-offs",
    "Data",
    "Real-world economic issues",
  ],
  coverClosing:
    "The challenge is not just defining terms. Students need to explain cause and effect, use diagrams or data where relevant, and evaluate policy choices clearly.",
  supportTitle: "How Studiely Helps with VCE Economics",
  supportParagraphs: [
    "Studiely supports VCE Economics by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because economics revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for key concepts, diagrams, policy examples, market mechanisms, data trends, and evaluation points.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for definitions, formula terms, diagrams, policy vocabulary, and cause-effect links.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for concept checks, diagram interpretation, data reading, policy choices, and applied scenarios.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around building economic explanations, using data, evaluating impacts, and linking theory to real-world examples.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with short-answer questions, diagram prompts, data response tasks, and extended evaluation practice.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Economics Revision Notes",
      body: "VCE Economics Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around key concepts, diagrams, policy examples, market mechanisms, data trends, and evaluation points so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Economics Flashcards",
      body: "VCE Economics Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For economics, flashcards are most useful when they target definitions, formula terms, diagrams, policy vocabulary, and cause-effect links. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Economics Quiz Practice",
      body: "VCE Economics Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around concept checks, diagram interpretation, data reading, policy choices, and applied scenarios. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Economics Exam Focus",
      body: "VCE Economics Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on building economic explanations, using data, evaluating impacts, and linking theory to real-world examples. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Economics Exam Practice",
      body: "VCE Economics Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through short-answer questions, diagram prompts, data response tasks, and extended evaluation practice. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Economics",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Economics because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Economics?",
      answer:
        "VCE Economics is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in economics through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Economics?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for economics topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Economics revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for key concepts, diagrams, policy examples, market mechanisms, data trends, and evaluation points. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with Economics diagrams and definitions?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Economics Revision",
  ctaBody:
    "Studying VCE Economics becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the economics skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Economics",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
