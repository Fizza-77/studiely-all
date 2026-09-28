import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MATH_COURSE_NOTE =
  "Current-course note: this page reflects the DP Mathematics course first assessed in 2021. The IB has announced a revised Mathematics: Analysis and Approaches course for first assessment in May 2029, so always check the official subject brief for your own exam session.";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study platform and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_DP_MATH_AA_SL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/math-aa-sl",
  seoTitle: "IB Math AA SL Study Resources | Studiely",
  metaDescription:
    "Study IB Math AA SL with revision notes, flashcards, quizzes, paper-specific exam focus, practice questions and a clear revision system.",
  shortDescription:
    "A practical AA SL study page for notes, active recall, quizzes, exam focus and level-specific exam practice.",
  keywords: [
    "IB Math AA SL",
    "revision notes",
    "past papers",
    "practice questions",
    "flashcards",
    "exam questions",
    "IB Mathematics Analysis and Approaches SL",
    "IB DP Math AA SL",
    "IB Maths AA SL",
    "quiz",
    "exam focus",
    "exam practice",
    "study resources",
    "Paper 1",
    "Paper 2",
    "mathematical exploration",
    "no-calculator practice",
    "GDC practice",
    "mock exams",
    "mark scheme review",
  ],
  breadcrumbName: "Math AA SL",
  heroEyebrow: "Studiely • IB Diploma Programme • Mathematics",
  heroTitle: "IB Math AA SL Study Resources for",
  heroHighlight: "Clear Revision & Exam Practice",
  heroIntro:
    "IB Math AA SL is not a course you can revise effectively by memorising a formula list the week before an exam. Students need a steady command of algebra, functions, geometry and trigonometry, statistics and probability, and calculus, plus the ability to explain working and choose a sensible method. Studiely helps you organise Analysis and Approaches Standard Level into a practical study system: concise notes for understanding, flashcards for recall, quizzes for diagnosis, exam focus for prioritisation, and exam-style practice for applying what you know.",
  lead: "IB Math AA SL is the Standard Level Analysis and Approaches mathematics course in the IB Diploma Programme. It develops mathematical reasoning through number and algebra, functions, geometry and trigonometry, statistics and probability, and calculus. Studiely helps students build IB Math AA SL study resources around revision notes, flashcards, quizzes, exam focus and exam practice so that understanding turns into reliable problem solving.",
  workflowSteps: [
    {
      title: "Clear foundations",
      body: "Strengthen the concepts and algebraic skills that sit underneath later problems.",
    },
    {
      title: "Efficient recall",
      body: "Remember formulas, notation, conditions and common transformations without constant rereading.",
    },
    {
      title: "Better transfer",
      body: "Move from familiar exercises to mixed, timed questions with a clear checking process.",
    },
  ],
  introTitle: "What AA SL Students Actually Need to Master",
  introParagraphs: [
    "Analysis and Approaches is designed for students who want to understand mathematical structure and use algebraic reasoning confidently. The course includes work with and without technology and asks students to communicate solutions rather than simply present an answer. At Standard Level, the best revision strategy is to build secure foundations first, because small weaknesses in algebra or function notation can affect many later questions.",
    "Students searching for IB Mathematics Analysis and Approaches SL, IB DP Math AA SL or IB Maths AA SL often need help deciding what to revise next. A useful rule is to separate recognition from independence: understanding a worked example is not the same as solving a fresh question. Your study plan should therefore move from explanation to closed-book recall and then to independent practice.",
  ],
  extraSections: [
    {
      title: "Organise AA SL by Topic and Study Action",
      paragraphs: [
        "The five core topic areas overlap in exam questions, so use topic study to build fluency and mixed practice to build decision-making.",
      ],
      bullets: [
        "Number & algebra — Practise sequences, logarithms, algebraic manipulation and numerical reasoning until routine steps are fast and accurate.",
        "Functions — Connect equations, graphs, domains, transformations and solutions so you can interpret a function instead of only calculating with it.",
        "Geometry & trigonometry — Build diagram fluency, trigonometric reasoning and geometric interpretation through short worked problems and mixed questions.",
        "Statistics & probability — Know what information a model or statistic tells you, how to calculate it, and how to interpret the result in context.",
        "Calculus — Understand derivative and integral ideas, then practise selecting and applying techniques in standard and unfamiliar problems.",
      ],
    },
    {
      title: "Know the Current Assessment Structure Before You Revise",
      paragraphs: [
        "For the current AA SL course first assessed in 2021, Paper 1 is a 90-minute no-technology paper worth 40%, Paper 2 is a 90-minute technology-allowed paper worth 40%, and the mathematical exploration contributes 20%. Assessment details above apply to the current course first assessed in 2021. Always confirm the subject brief and examination session used by your school.",
      ],
      bullets: [
        "Paper 1 — 90 minutes, no technology, 40%.",
        "Paper 2 — 90 minutes, technology allowed, 40%.",
        "Exploration — Coursework; individual mathematical exploration, 20%.",
      ],
    },
    {
      title: "A Simple AA SL Weekly Rhythm",
      paragraphs: [
        "Consistency matters more than one very long revision session.",
      ],
      bullets: [
        "Learn & compress — Turn class material into a short, usable revision note while the topic is still fresh.",
        "Recall & diagnose — Use flashcards and short quizzes to find what you cannot reproduce independently.",
        "Apply & review — Solve exam-style questions, analyse mistakes and feed them back into the next week’s priorities.",
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
      title: "Revision Notes for Analysis and Approaches SL",
      body: "IB Math AA SL revision notes should be short enough to use again. For each topic, keep the core idea, important notation, formulas or conditions, one representative example and a short list of errors to avoid. Studiely lets you build a revision layer from your own notes or study material, which makes it easier to revisit a topic without reopening every classroom handout. A useful note ends with a question. For example: What clue tells me this is an exponential model? What changes when a graph is transformed? What result would be unreasonable here? Questions like these turn notes from passive summaries into prompts for mathematical thinking.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Fast AA SL Recall",
      body: "For AA SL, flashcards work best for small pieces of knowledge that support bigger problems: formula meaning, notation, transformation rules, conditions, terminology and quick method cues. Avoid putting an entire worked solution on a card. Instead, ask yourself to retrieve the first decision or explain why a method is valid. Studiely can help you convert your course material into active-recall prompts and revisit them over time. Spaced repetition is useful here because it reduces the temptation to spend a whole session rereading a topic that already feels familiar.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Use Quizzes as a Diagnostic, Not a Score",
      body: "A short AA SL quiz is most valuable immediately after learning or revising a topic. Short quizzes reveal whether you can recall a method without a worked example in front of you. They also show whether your mistakes are conceptual, algebraic or caused by misreading the question. After each quiz, create a tiny action list: one idea to review, one type of question to repeat and one error to watch for. This keeps your revision specific and prevents a low score from turning into a vague instruction to ‘revise maths more’.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus: What to Prioritise Before Full Papers",
      body: "AA SL exam focus should begin with reliable execution. Make sure routine algebra, function work, trigonometric setup, statistical interpretation and calculus methods are not consuming unnecessary time. Then shift toward mixed questions where the main challenge is deciding what mathematics the prompt is asking for. When using AA SL past papers or reviewing exam questions, record patterns in your mistakes. If the same issue appears repeatedly, turn it into a targeted note, flashcard or quiz before attempting another full paper.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice for AA SL",
      body: "IB Math AA SL exam practice should combine targeted practice questions with timed mixed sets. Start with the topic you are fixing, then mix it with questions from other areas so that you have to choose the method independently. As the exam approaches, practise complete paper sections and leave enough time to review working, notation and reasonableness of answers. A strong practice session ends with a correction pass. Redo missed questions from a blank page, write one sentence explaining the original mistake, and schedule a short retest several days later. That correction cycle is more valuable than simply completing another set of similar questions.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [
    {
      title: "Split AA SL Practice Between No-Calculator and GDC Skills",
      paragraphs: [
        "Paper 1 revision should build confidence with exact values, algebra, transformations, trigonometry and calculus by hand. Paper 2 adds efficient graphic display calculator use while still requiring clear working and interpretation. Start with topic questions, move to mixed sets where the method is not labelled, then practise timed paper sections.",
      ],
    },
    {
      title: "Turn Past-Paper Practice Into Evidence",
      paragraphs: [
        "After each legitimate past-paper or exam-style set, record the first incorrect step and why marks were lost. Separate knowledge gaps from algebra slips, poor method choice, technology errors or rushing. Create one short follow-up task for the weakness and retest it later. Mark schemes should teach mathematical communication, not become scripts to memorise.",
      ],
    },
    {
      title: "Use the Exploration to Strengthen Mathematical Communication",
      paragraphs: [
        "The mathematical exploration gives more time to develop an idea than a timed paper. It strengthens skills that also matter in exams: defining variables, selecting methods, showing a coherent argument and interpreting results. Follow your teacher and official IB guidance for the assessment requirements.",
      ],
    },
  ],
  whyTitle: "Why Studiely Fits AA SL Revision",
  whyParagraphs: [
    "IB Math AA SL students often have enough resources but no clear workflow between them. Studiely brings notes, recall, quizzes, exam focus and practice into one study sequence, which helps you spend less time deciding what to do and more time correcting the concepts that actually cost marks.",
    "Use Studiely as independent study support alongside lessons, your school materials and official IB guidance. The goal is a manageable routine that keeps mathematical understanding active across the full Diploma Programme rather than restarting revision before every assessment.",
  ],
  whyAfterParagraphs: [MATH_COURSE_NOTE, IB_DISCLAIMER],
  faqs: [
    {
      question: "How often should I revise AA SL?",
      answer:
        "Frequent shorter sessions usually work better than occasional cramming. Revisit current classroom topics during the week, keep one session for older material and add timed exam-style practice as assessments approach. Your error log should determine which topics return most often.",
    },
    {
      question: "Should I memorise formulas for AA SL?",
      answer:
        "You should know what important formulas and relationships mean and when they apply. Even when a formula is available, the challenge is often recognising the correct method, substituting accurately and interpreting the result. Use flashcards for meaning and conditions, then practise with written questions.",
    },
    {
      question: "When should I start using past papers?",
      answer:
        "Use topic-level exam questions early, but save frequent full-paper practice until you have covered enough of the course for the timing to be meaningful. Before that point, selected past-paper questions are useful for seeing how familiar concepts are assessed.",
    },
    {
      question: "How is AA SL different from AI SL?",
      answer:
        "AA SL places more emphasis on analytical reasoning and algebraic mathematical thinking, while AI SL gives greater prominence to mathematics in context, modelling, data and technology. Both contain the five broad topic areas but approach them differently.",
    },
    {
      question: "Can Studiely replace an IB Maths textbook or teacher?",
      answer:
        "No. Studiely is designed as independent study support. Use it to organise your own material into revision notes, flashcards, quizzes, exam priorities and practice, while continuing to use your teacher, course resources and official IB information for instruction and requirements.",
    },
  ],
  ctaTitle: "Make AA SL Revision Specific",
  ctaBody:
    "Choose one topic you currently avoid. Summarise the idea, test recall without looking, complete a short quiz, identify the exact error pattern, and finish with a small set of exam-style questions. Specific revision is easier to repeat and much easier to improve.",
  ctaPrimaryLabel: "Start studying Math AA SL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
