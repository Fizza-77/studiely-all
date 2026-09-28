import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MATH_COURSE_NOTE =
  "Current-course note: this page targets the DP Mathematics course first assessed in 2021. The IB has announced revised Mathematics: Analysis and Approaches content for first assessment in May 2029, so students should always confirm the subject brief that applies to their own examination session.";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study platform and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_DP_MATH_AA_HL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/math-aa-hl",
  seoTitle: "IB Math AA HL Study Resources | Studiely",
  metaDescription:
    "Study IB Math AA HL with revision notes, flashcards, quizzes, paper-specific exam focus, practice questions and a clear revision system.",
  shortDescription:
    "A focused AA HL study page for revision notes, active-recall flashcards, quizzes, exam focus and exam-style practice.",
  keywords: [
    "IB Math AA HL",
    "revision notes",
    "past papers",
    "practice questions",
    "flashcards",
    "exam questions",
    "IB Mathematics Analysis and Approaches HL",
    "IB DP Math AA HL",
    "IB Maths AA HL",
    "quiz",
    "exam focus",
    "exam practice",
    "study resources",
    "Paper 1",
    "Paper 2",
    "Paper 3",
    "mathematical exploration",
    "GDC practice",
    "mock exam strategy",
    "mark scheme review",
  ],
  breadcrumbName: "Math AA HL",
  heroEyebrow: "Studiely • IB Diploma Programme • Mathematics",
  heroTitle: "IB Math AA HL Study Resources for",
  heroHighlight: "Notes, Flashcards & Exam Practice",
  heroIntro:
    "IB Math AA HL rewards students who can explain why a method works, connect ideas across topics and stay accurate when a problem is unfamiliar. Studiely turns Mathematics: Analysis and Approaches Higher Level into a clear revision system with notes, active-recall flashcards, targeted quizzes, exam focus and level-specific practice. Identify weak concepts, rebuild the reasoning behind them and practise applying mathematics under exam-style pressure.",
  lead: "IB Math AA HL is the Higher Level Analysis and Approaches pathway in the IB Diploma Programme. It suits students who need strong algebraic reasoning, functions, calculus and formal mathematical thinking, with problem solving carried out both with and without technology. Studiely supports IB Math AA HL study resources by helping students organise revision notes, flashcards, quizzes, exam-focus priorities and exam-style practice around the concepts they need to strengthen.",
  workflowSteps: [
    {
      title: "Reasoning first",
      body: "Strengthen algebraic fluency, mathematical argument and connected problem solving.",
    },
    {
      title: "Recall that transfers",
      body: "Use concise prompts to remember formulas, conditions, definitions and method choices.",
    },
    {
      title: "Exam-ready practice",
      body: "Target harder, multi-step questions instead of repeating only familiar exercises.",
    },
  ],
  introTitle: "What Makes Analysis and Approaches HL Different?",
  introParagraphs: [
    "The course suits students who are comfortable investigating mathematical structure, generalising patterns and working through symbolic reasoning. Analysis and Approaches has a strong focus on mathematical analysis through functions and calculus while developing inquiry, proof, problem solving and communication. At Higher Level, revision must combine procedural fluency with deeper conceptual connections.",
    "Students searching for IB Mathematics Analysis and Approaches HL or IB DP Math AA HL need a way to distinguish what they understand from what they can execute under pressure. A strong plan combines concept review, closed-book recall, unfamiliar questions and deliberate error review.",
  ],
  extraSections: [
    {
      title: "Build Revision Around the Five Core Topic Areas",
      paragraphs: [
        "The syllabus is organised around number and algebra, functions, geometry and trigonometry, statistics and probability, and calculus. At HL, these areas become more connected, so the goal is not to study them as isolated boxes.",
      ],
      bullets: [
        "Number & algebra — Review algebraic structure, sequences, logarithms, proof methods and HL-only extensions with worked reasoning, not memorised steps.",
        "Functions — Practise representation, transformations, equations and interpretation so you can switch confidently between algebraic and graphical views.",
        "Geometry & trigonometry — Link diagrams, identities, vectors and geometric reasoning to multi-step problems and clear mathematical communication.",
        "Statistics & probability — Focus on assumptions, interpretation, probability models and choosing a method that fits the information given.",
        "Calculus — Build fluency with differentiation and integration while also understanding why a technique applies and what the result means.",
      ],
    },
    {
      title: "Know the Current Assessment Structure Before You Revise",
      paragraphs: [
        "For the current AA HL course first assessed in 2021, Paper 1 is a two-hour no-technology paper worth 30%, Paper 2 is a two-hour technology-allowed paper worth 30%, Paper 3 is a one-hour problem-solving paper worth 20%, and the exploration contributes 20%. Assessment details above apply to the current course first assessed in 2021. Always confirm the subject brief and examination session used by your school.",
      ],
      bullets: [
        "Paper 1 — 2 hours, no technology, 30%.",
        "Paper 2 — 2 hours, technology allowed, 30%.",
        "Paper 3 — 1 hour, technology allowed; extended problem solving, 20%.",
        "Exploration — Coursework; individual mathematical exploration, 20%.",
      ],
    },
    {
      title: "A Three-Step AA HL Study Cycle",
      paragraphs: [
        "Use Studiely as a connected study loop rather than five separate tools.",
      ],
      bullets: [
        "Compress — Turn a lesson or topic into concise notes that capture concepts, conditions and worked reasoning.",
        "Retrieve — Use flashcards and quizzes to recall ideas without looking at the solution first.",
        "Transfer — Move into mixed and timed exam-style questions, then feed mistakes back into the next revision cycle.",
      ],
    },
  ],
  coverTitle: "",
  coverIntro: "",
  coverTopics: [],
  coverClosing: "",
  showCoverTopics: false,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Analysis and Approaches HL",
      body: "IB Math AA HL revision notes should reduce a large topic into the decisions a student has to make. Instead of copying a textbook chapter, organise each note around a concept, the conditions that trigger a method, a short worked example, common errors and a final self-check. In Studiely, you can use your own course notes or study material to create a cleaner revision layer that is easier to revisit before quizzes, mocks and final exams. Use notes as the starting point, not the finishing point. After reading a summary, close it and reproduce the key steps from memory. This makes revision more diagnostic: if you can explain a theorem but cannot recognise when to use it, that gap becomes the next task in your study plan.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Formula Conditions, Methods and Connections",
      body: "For AA HL, flashcards are most useful when they test more than a formula. Create cards that ask when a result applies, what assumptions matter, how two representations connect, or which method would be efficient for a given prompt. Active recall is especially valuable for notation, identities, definitions, calculator restrictions, and the small conditions that are easy to miss in longer solutions. Studiely can turn your own material into recall prompts so you can revisit weak ideas in short sessions. Pairing active recall with spaced repetition gives you repeated exposure without spending every session rereading the same notes.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Reveals Weak Reasoning",
      body: "A short AA HL quiz should tell you more than whether an answer is right. Use short checks to separate algebra slips from conceptual gaps, interpretation errors and poor method selection. Topic quizzes are particularly useful between learning and full-paper practice because they let you test one skill at increasing difficulty before combining it with other topics. Studiely quiz practice can be used as a checkpoint after a revision block. Record which questions felt uncertain even when you answered them correctly; those are often the concepts that break down first when the exam combines several ideas in one problem.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for AA HL",
      body: "AA HL exam focus should prioritise the skills that repeatedly decide marks: selecting a method, showing enough mathematical reasoning, interpreting technology-supported results and staying organised through multi-part questions. Higher Level also requires students to cope with unfamiliar and investigation-style tasks, so exam preparation should include time for questions where the route is not obvious at first glance. When reviewing AA HL past papers or exam questions, do not only mark answers. Tag each lost mark by cause: knowledge, setup, algebra, interpretation, calculator use, notation, or time. That turns past-paper review into a practical revision map instead of a score record.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice for AA HL",
      body: "IB Math AA HL exam practice should move from targeted practice questions to mixed sets and then to timed paper-style sessions. Start by fixing a weak concept with a small number of carefully chosen questions. Next, mix it with another topic so you have to decide which method applies. Finally, practise under time limits and review every step where your reasoning slowed down. The purpose of exam practice is not to memorise past solutions. It is to build a repeatable response process: read for structure, identify what is known, choose an efficient mathematical route, communicate working clearly, and check whether the result makes sense.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [
    {
      title: "Train Differently for Paper 1, Paper 2 and Paper 3",
      paragraphs: [
        "Do not practise all three papers the same way. Paper 1 needs non-calculator fluency with exact values, algebra and symbolic reasoning. Paper 2 needs efficient graphic display calculator use with clear mathematics. Paper 3 needs unfamiliar extended problems where the route is not obvious. Progress from focused questions to mixed questions and then timed paper-style tasks.",
      ],
    },
    {
      title: "Use Past Papers, Mark Schemes and an Error Log as One System",
      paragraphs: [
        "Use legitimate past papers and exam-style questions as a feedback loop. Attempt the question first, mark it, then record where the reasoning failed. Classify the error as concept, method, algebra, notation, technology, interpretation or time. Rebuild that skill and retest it later. Use mark schemes to learn how reasoning earns marks, not as solutions to memorise.",
      ],
    },
    {
      title: "Keep the Mathematical Exploration in the Revision Picture",
      paragraphs: [
        "The mathematical exploration also develops useful exam skills: defining a problem, choosing mathematics, communicating reasoning, checking assumptions and evaluating results. Studiely can help organise your own planning notes and recall prompts, while your teacher and official IB guidance remain the authority for assessment requirements.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Maths AA HL",
  whyParagraphs: [
    "IB Math AA HL becomes easier to manage when revision decisions are visible. Studiely keeps notes, recall practice, quizzes, exam priorities and practice in one workflow, so a weak topic can move from explanation to retrieval and then to application. This is useful when several Diploma Programme subjects and assessments compete for the same study time.",
    "The goal is not to replace class teaching or official IB material. It is to help you organise what you are learning, revisit it efficiently and practise the type of thinking the course expects.",
  ],
  whyAfterParagraphs: [MATH_COURSE_NOTE, IB_DISCLAIMER],
  faqs: [
    {
      question: "What should I prioritise when revising AA HL?",
      answer:
        "Prioritise concepts that appear across several topics, then identify the exact reason you lose marks. Strong algebra, functions and calculus often support later questions, but your own error log should decide the order. Review the idea, test recall, then practise it in an unfamiliar context.",
    },
    {
      question: "Are flashcards useful for a subject as problem-based as AA HL?",
      answer:
        "Yes, when the cards test conditions, definitions, formula meaning and method selection rather than asking you to memorise full solutions. Flashcards support recall; they should be followed by written problem solving so that remembered knowledge transfers into exam performance.",
    },
    {
      question: "How should I use past papers without memorising mark schemes?",
      answer:
        "Attempt questions before looking at solutions, mark the reasoning step where you became stuck, and redo the problem later from a blank page. Use mark schemes to learn what clear mathematical communication looks like, not as scripts to reproduce.",
    },
    {
      question: "What is the difference between AA HL revision and AA SL revision?",
      answer:
        "Both courses share the same broad topic families, but HL studies mathematics in greater breadth and depth and includes more advanced content and more demanding problem solving. HL revision therefore needs additional time for extended reasoning, advanced techniques and investigation-style questions.",
    },
    {
      question: "Can Studiely help me prepare for AA HL exams?",
      answer:
        "Studiely can support your preparation by helping you organise revision notes, generate flashcards and quizzes from your study material, identify exam-focus areas and build regular exam-style practice. It should be used alongside your teacher, official course information and legitimate past-paper resources.",
    },
  ],
  ctaTitle: "Turn AA HL Revision Into a Repeatable System",
  ctaBody:
    "Start with one weak AA HL topic. Build a concise note, test it with active-recall flashcards, run a short quiz, identify the exam skill that still needs work, and finish with exam-style practice. Repeat that cycle until your method choices become faster and your solutions become clearer.",
  ctaPrimaryLabel: "Start studying Math AA HL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
