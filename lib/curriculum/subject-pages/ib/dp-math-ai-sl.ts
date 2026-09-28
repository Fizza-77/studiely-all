import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MATH_COURSE_NOTE =
  "Current-course note: this page reflects the DP Mathematics course first assessed in 2021. The IB has announced a revised Mathematics: Applications and Interpretation course for first assessment in May 2029, so always verify the subject brief that applies to your exam session.";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study platform and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_DP_MATH_AI_SL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/math-ai-sl",
  seoTitle: "IB Math AI SL Study Resources | Studiely",
  metaDescription:
    "Study IB Math AI SL with revision notes, flashcards, quizzes, paper-specific exam focus, practice questions and a clear revision system.",
  shortDescription:
    "A practical AI SL study page for modelling, data, technology, revision notes, recall and exam-style practice.",
  keywords: [
    "IB Math AI SL",
    "revision notes",
    "past papers",
    "practice questions",
    "flashcards",
    "exam questions",
    "IB Mathematics Applications and Interpretation SL",
    "IB DP Math AI SL",
    "IB Maths AI SL",
    "quiz",
    "exam focus",
    "exam practice",
    "study resources",
    "Paper 1",
    "Paper 2",
    "mathematical exploration",
    "GDC practice",
    "modelling questions",
    "mock exams",
    "mark scheme review",
  ],
  breadcrumbName: "Math AI SL",
  heroEyebrow: "Studiely • IB Diploma Programme • Mathematics",
  heroTitle: "IB Math AI SL Study Resources for",
  heroHighlight: "Practical Maths & Exam Practice",
  heroIntro:
    "IB Math AI SL is built around using mathematics to understand practical situations. Students work with models, data, functions, geometry, probability and calculus while learning to use technology appropriately and explain results in context. Studiely helps you turn Mathematics: Applications and Interpretation Standard Level into a manageable revision routine with concise notes, active-recall flashcards, diagnostic quizzes, exam-focus priorities and exam-style practice. The aim is not to memorise calculator steps; it is to know what the mathematics means and when to use it.",
  lead: "IB Math AI SL is the Standard Level Mathematics: Applications and Interpretation course in the IB Diploma Programme. It develops practical mathematical problem solving through number and algebra, functions, geometry and trigonometry, statistics and probability, and calculus, with regular use of technology and contextual interpretation. Studiely supports IB Math AI SL study resources with notes, flashcards, quizzes, exam focus and exam practice that help students revise the skills they actually use in questions.",
  workflowSteps: [
    {
      title: "Context first",
      body: "Read the situation carefully and decide what the numbers, variables and model are telling you.",
    },
    {
      title: "Technology with purpose",
      body: "Use a calculator efficiently because you understand the method, not because you memorised a sequence of keys.",
    },
    {
      title: "Interpret clearly",
      body: "Finish calculations by explaining what the result means and whether it is reasonable in the original context.",
    },
  ],
  introTitle: "What AI SL Revision Should Feel Like",
  introParagraphs: [
    "Applications and Interpretation is designed for students who value mathematics in real situations and are comfortable using technology as part of the problem-solving process. Revision should therefore include interpretation from the beginning. If you only practise the numerical step, you may still struggle when an exam asks you to choose a model, explain a parameter, comment on a prediction or evaluate whether a result is sensible.",
    "Students searching for IB Mathematics Applications and Interpretation SL, IB DP Math AI SL or IB Maths AI SL usually need a resource that links topic knowledge with practical decision-making. The most efficient approach is to learn the mathematics, practise the technology workflow and then write the interpretation in your own words.",
  ],
  extraSections: [
    {
      title: "Turn Each Topic Into a Practical Study Target",
      paragraphs: [
        "The five broad topic areas become easier to remember when you connect each one to the type of decision or interpretation it supports.",
      ],
      bullets: [
        "Number & algebra — Practise numerical reasoning, sequences, finance and algebraic methods through short contextual problems and calculator-supported checks.",
        "Functions — Use graphs and equations as models, then describe behaviour, intersections, rates and parameters in terms of the situation.",
        "Geometry & trigonometry — Apply measurement and trigonometric ideas to spatial problems, diagrams and real-world quantities.",
        "Statistics & probability — Build confidence with data summaries, probability, distributions and statistical conclusions, including what an output actually says.",
        "Calculus — Use derivatives and integrals to describe change and accumulation in simple models, then interpret the answer in context.",
      ],
    },
    {
      title: "Know the Current Assessment Structure Before You Revise",
      paragraphs: [
        "For the current AI SL course first assessed in 2021, Paper 1 is 90 minutes and worth 40%, Paper 2 is 90 minutes and worth 40%, and the mathematical exploration contributes 20%. Technology is allowed in both papers. Assessment details above apply to the current course first assessed in 2021. Always confirm the subject brief and examination session used by your school.",
      ],
      bullets: [
        "Paper 1 — 90 minutes, technology allowed, 40%.",
        "Paper 2 — 90 minutes, technology allowed, 40%.",
        "Exploration — Coursework; individual mathematical exploration, 20%.",
      ],
    },
    {
      title: "A Practical AI SL Study Routine",
      paragraphs: [
        "Use each tool for a different part of the learning cycle.",
      ],
      bullets: [
        "Clarify — Make a short note that explains what the method is for and what the result means.",
        "Recall — Use flashcards and quizzes to retrieve definitions, conditions and method choices without prompts.",
        "Apply — Solve contextual exam-style questions, interpret the output and schedule a retest for any recurring mistake.",
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
      title: "Revision Notes for Applications and Interpretation SL",
      body: "IB Math AI SL revision notes should be practical and compact. For each method, write the purpose, the information you need, the technology step if relevant, and one sentence explaining how to interpret the result. This is more useful than copying long examples because it helps you recognise the structure of a new question. Studiely can help organise your own notes or study material into concise summaries. Add a ‘common misread’ line to each topic—for example, confusing correlation with causation or interpreting a model outside a reasonable domain—so revision includes the judgement skills that questions often test.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Quick AI SL Recall",
      body: "For AI SL, flashcards are ideal for definitions, model features, statistical vocabulary, formula meaning, calculator output labels and short interpretation prompts. A useful card might ask what a regression coefficient represents or what a particular parameter changes in a model, rather than simply asking you to recite a formula. Use flashcards for short active-recall sessions between longer problem-solving blocks. Spaced repetition helps keep earlier topics accessible while your class moves forward, which is important because final exam questions can combine ideas from different parts of the course.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Short Quizzes for Faster Diagnosis",
      body: "A short AI SL quiz can reveal whether you understand the question before you start pressing calculator buttons. Use quizzes that ask you to identify the correct model, choose a statistic, interpret a graph, predict the effect of a parameter or decide whether a conclusion is justified. After a quiz, label each mistake as concept, setup, technology or interpretation. That single habit makes revision much more efficient because you stop treating every error as a content problem.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for Applications and Interpretation SL",
      body: "AI SL exam focus should prioritise calculator fluency, careful reading, units, sensible rounding, clear notation and contextual conclusions. Students should also practise checking whether a value is realistic. A calculator can produce a number instantly, but the exam still expects you to decide whether that number answers the question. When you review AI SL past papers or exam questions, highlight command words and interpretation phrases. Then compare the question with your working: did you actually explain, justify, estimate or interpret, or did you stop after the calculation?",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice for AI SL",
      body: "IB Math AI SL exam practice should include targeted practice questions, mixed topic sets and timed paper-style work. Start with a small group of similar questions until the technology and interpretation process feels reliable. Then mix topics so the method is no longer obvious from the heading. Finally, practise pacing and checking under timed conditions. Do not measure progress only by the number of questions completed. Track whether you selected the right method, used technology accurately and explained the result. A slow but fully understood correction is often more valuable than five rushed questions that repeat the same mistake.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [
    {
      title: "Practise Calculator Use as a Reasoning Skill, Not a Shortcut",
      paragraphs: [
        "Because a GDC is used in both AI SL papers, calculator fluency belongs in normal topic practice. Decide which model, statistic, graph or method fits before calculating. Then use technology accurately, show enough working and interpret the result in context. Progress from focused questions to mixed sets and timed paper sections.",
      ],
    },
    {
      title: "Review Past Papers by Error Type, Not Just by Score",
      paragraphs: [
        "Use legitimate past papers and exam-style questions to build an error log: model choice, calculator entry, interpretation, units, rounding, graph reading or time management. Create a follow-up task for recurring errors and retest them later in a different context. This turns practice into improvement instead of repeated exposure.",
      ],
    },
    {
      title: "Let the Exploration Reinforce Real-World Mathematical Thinking",
      paragraphs: [
        "The mathematical exploration can reinforce AI SL habits such as choosing a model, explaining assumptions, using technology responsibly and evaluating conclusions. Studiely can help organise your own study notes and recall prompts, while your teacher and official IB resources guide the assessment requirements.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Maths AI SL",
  whyParagraphs: [
    "IB Math AI SL revision can become fragmented when notes, calculator practice, flashcards and exam questions live in separate places. Studiely helps connect those activities into one study workflow, so a mistake in a practice question can become a note, a recall prompt and a targeted quiz instead of disappearing into a marked worksheet.",
    "Use the platform as independent study support, not as a substitute for your teacher or official IB material. The value comes from making your own learning easier to organise and revisit throughout the two-year Diploma Programme.",
  ],
  whyAfterParagraphs: [MATH_COURSE_NOTE, IB_DISCLAIMER],
  faqs: [
    {
      question: "Is AI SL mostly calculator work?",
      answer:
        "Technology is an important part of the course, but the mathematics still matters. You need to understand what calculation is appropriate, enter information accurately and interpret the output. Calculator fluency without conceptual understanding can lead to confident but incorrect answers.",
    },
    {
      question: "What is the best way to revise statistics in AI SL?",
      answer:
        "Combine concise concept notes with interpretation prompts and real question practice. Make sure you know what each statistic or model tells you, not only how to calculate it. Then practise deciding which method is appropriate from the wording and context of a question.",
    },
    {
      question: "Should I use flashcards for mathematics?",
      answer:
        "Use them for knowledge that supports problem solving: definitions, conditions, formula meaning, notation, model features and interpretation language. They are not a replacement for written mathematics. Follow recall practice with problems where you must choose and apply the concept.",
    },
    {
      question: "How is AI SL different from AA SL?",
      answer:
        "AI SL emphasises applications, modelling, data, context and technology. AA SL places greater emphasis on analytical mathematical reasoning and algebraic structure. Both include the same broad topic families, but the style of thinking and assessment practice differs.",
    },
    {
      question: "How can Studiely support AI SL exam preparation?",
      answer:
        "Use your own course material to create revision notes, flashcards and quizzes, then use exam focus to prioritise recurring weaknesses and exam practice to apply the ideas in context. Continue to follow your teacher and official IB information for course requirements and assessment details.",
    },
  ],
  ctaTitle: "Make Every AI SL Answer Mean Something",
  ctaBody:
    "For your next revision session, choose one practical topic. Explain the model in a short note, recall the key conditions, complete a diagnostic quiz, then solve a contextual question and write one sentence interpreting the answer. That final sentence is often where practical mathematics becomes exam-ready mathematics.",
  ctaPrimaryLabel: "Start studying Math AI SL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
