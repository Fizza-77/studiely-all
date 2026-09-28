import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_MATHEMATICS: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/mathematics",
  seoTitle: "IB PYP Mathematics Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP Mathematics study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP Mathematics resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP Mathematics",
    "PYP Mathematics resources",
    "PYP Mathematics activities",
    "IB PYP Mathematics learning resources",
    "IB PYP Mathematics practice activities",
    "IB PYP Mathematics revision notes",
    "IB PYP Mathematics flashcards",
    "IB PYP Mathematics quiz",
    "IB PYP Mathematics practice questions",
    "IB PYP Mathematics exam focus",
    "IB PYP Mathematics exam practice",
    "IB PYP Mathematics study resources",
  ],
  breadcrumbName: "Mathematics",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP Mathematics Resources for",
  heroHighlight: "Concepts & Practice",
  heroIntro:
    "Understand the idea, not just the answer. Studiely helps PYP learners organise mathematical thinking, recall key facts, practise methods and explain why a solution makes sense.",
  lead: "IB PYP Mathematics develops mathematical understanding through inquiry, patterns, reasoning and application rather than isolated procedure alone. Studiely supports Grade 1–5 learners with concept notes, active-recall flashcards, short quizzes and practice questions that help students move from “I followed the example” to “I can solve and explain it myself.”",
  workflowSteps: [
    {
      title: "Concepts first",
      body: "Explain the mathematical idea in your own words before rushing to the answer.",
    },
    {
      title: "Reasoning + methods",
      body: "Name the strategy you use and why it fits the situation.",
    },
    {
      title: "Short practice cycles",
      body: "Solve independently, check with a second method and revisit any error.",
    },
  ],
  introTitle: "What IB PYP Mathematics Looks Like in PYP Learning",
  introParagraphs: [
    "PYP Mathematics learning can involve number, operations, pattern, measurement, shape, space and data in ways that connect with authentic problems and transdisciplinary inquiry. The exact progression is determined by the school, so this page avoids pretending every PYP learner covers identical chapters at the same time. Instead, the study structure works with whatever mathematical concept the student is currently exploring.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Mathematical habits that help learners solve, explain and transfer methods across units.",
  coverTopics: [
    "understanding quantity, place value and number relationships",
    "choosing and explaining strategies for operations",
    "recognising and extending patterns",
    "reasoning about shape, position, measurement and spatial relationships",
    "collecting, representing and interpreting data",
    "using mathematical language to explain how and why a solution works",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Mathematics",
      body: "IB PYP Mathematics Revision Notes should explain a mathematical idea in the student’s own words and include a small example. A good note might show what the concept means, when it is useful, one model problem and one common mistake. That is more powerful than copying several worked solutions without explaining the reasoning behind them.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Mathematics Flashcards for Active Recall",
      body: "Flashcards can support number facts, vocabulary, symbols, properties and quick strategy prompts. They are especially useful when the answer is not the only target: a card can ask “How could you check?” or “Which operation fits this situation?” so recall includes mathematical thinking.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP Mathematics Quiz should mix quick recall with short reasoning questions. Students can identify a pattern, choose a strategy, interpret a simple graph or solve a one-step problem, then explain an answer. Immediate feedback helps, but the real learning comes from correcting the method and trying a similar question again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Choose the Maths Concept to Revisit",
      body: "Studiely’s Exam Focus can act as a topic-priority tool. It can identify the number skill, vocabulary, strategy or representation that needs attention before a school task or classroom assessment. That keeps the emphasis on readiness and understanding rather than formal exam preparation.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open concept focus",
    },
    {
      id: "exam-practice",
      title: "Apply the Concept Independently",
      body: "Practice should be age-appropriate independent practice. A student might complete a short set of mixed questions, explain one solution aloud and check an error with a different strategy. Light timing can build fluency when useful, but speed should not replace conceptual understanding.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise independently",
    },
  ],
  afterToolsSections: [
    {
      title: "Use the Explain–Solve–Check Loop",
      paragraphs: [
        "Start by explaining the concept without numbers: what is happening and why? Then solve one example while naming the strategy. Next, solve a similar question independently. Finally, check the result using a second method, estimate or inverse operation where appropriate. If the learner cannot explain the check, that becomes the next note or flashcard. This loop turns practice into evidence of understanding.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "A useful maths week should alternate understanding with independent practice. Start with one concept note and one worked example that explains the reasoning. On the next review, retrieve key facts or vocabulary and solve a similar problem without the model. Later, complete a small mixed quiz that includes an unfamiliar representation or word problem. Finish by choosing one error and explaining what caused it, then solve a new question that tests the corrected idea. This routine prevents practice from becoming repetitive worksheets and gives the learner evidence that they can transfer a method to a different problem.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP Mathematics",
  whyParagraphs: [
    "Ranking PYP maths pages commonly offer printable phase resources, chapter notes or worked practice. The gap is metacognition: students need to know which part of a solution they understand and which part they copied. Studiely can make that visible by pairing a short concept note with retrieval, one worked explanation, an independent question and a reflection on the error.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "What does IB PYP Mathematics cover?",
      answer:
        "Schools build mathematics learning through conceptual understanding and application, often including number, pattern, measurement, shape and data. The exact sequence and examples vary by school and grade.",
    },
    {
      question: "Are flashcards useful for PYP maths?",
      answer:
        "Yes, particularly for facts, vocabulary, properties and strategy cues. They should support reasoning and fluency, not replace problem solving or hands-on mathematical experiences.",
    },
    {
      question: "How can Studiely help with maths mistakes?",
      answer:
        "Students can save the concept behind an error, create a recall prompt and try a similar question again. This creates a simple error-review cycle instead of treating the wrong answer as the end of the task.",
    },
    {
      question: "Does PYP Mathematics have formal exams?",
      answer:
        "PYP assessment is integrated into learning rather than organised like the DP examination system. Exam-labelled tools on Studiely should therefore be used as focused review and age-appropriate independent practice.",
    },
    {
      question: "Should students memorise methods?",
      answer:
        "Some facts and procedures need fluency, but students also need to understand when and why a method works. Good PYP maths study balances recall, representation, reasoning and application.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP Mathematics",
  ctaBody:
    "Take the maths concept you are learning now and build one clear note, a few recall prompts, a short quiz and an independent practice set in Studiely.",
  ctaPrimaryLabel: "Start studying PYP Mathematics",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
