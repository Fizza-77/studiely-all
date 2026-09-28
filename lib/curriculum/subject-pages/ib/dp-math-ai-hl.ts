import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MATH_COURSE_NOTE =
  "Current-course note: this page targets the DP Mathematics course first assessed in 2021. The IB has announced revised Mathematics: Applications and Interpretation content for first assessment in May 2029, so students should confirm the official subject brief for their own examination session.";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study platform and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_DP_MATH_AI_HL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/math-ai-hl",
  seoTitle: "IB Math AI HL Study Resources | Studiely",
  metaDescription:
    "Study IB Math AI HL with revision notes, flashcards, quizzes, paper-specific exam focus, practice questions and a clear revision system.",
  shortDescription:
    "A focused AI HL study page for modelling, data, technology, revision notes, flashcards, quizzes and exam practice.",
  keywords: [
    "IB Math AI HL",
    "revision notes",
    "past papers",
    "practice questions",
    "flashcards",
    "exam questions",
    "IB Mathematics Applications and Interpretation HL",
    "IB DP Math AI HL",
    "IB Maths AI HL",
    "quiz",
    "exam focus",
    "exam practice",
    "study resources",
    "Paper 1",
    "Paper 2",
    "Paper 3",
    "mathematical exploration",
    "GDC practice",
    "modelling questions",
    "mock exam strategy",
    "mark scheme review",
  ],
  breadcrumbName: "Math AI HL",
  heroEyebrow: "Studiely • IB Diploma Programme • Mathematics",
  heroTitle: "IB Math AI HL Study Resources for",
  heroHighlight: "Modelling, Data & Exam Practice",
  heroIntro:
    "IB Math AI HL asks students to do more than calculate. You need to model real situations, interpret data, choose appropriate technology, explain what a result means and judge whether a mathematical model is useful. Studiely helps you organise Mathematics: Applications and Interpretation Higher Level into a connected revision workflow: concise notes for concepts and methods, flashcards for recall, quizzes for rapid diagnosis, exam focus for prioritising high-impact skills, and exam-style practice for applying mathematics in context.",
  lead: "IB Math AI HL is the Higher Level Mathematics: Applications and Interpretation course in the IB Diploma Programme. It emphasises mathematics in context, modelling, statistics, data interpretation, technology-supported problem solving and the communication of results. Studiely helps students create IB Math AI HL study resources that combine revision notes, flashcards, quizzes, exam focus and exam practice around the level-specific skills they need to strengthen.",
  workflowSteps: [
    {
      title: "Model the situation",
      body: "Translate context into mathematics and keep track of assumptions, variables and constraints.",
    },
    {
      title: "Use technology well",
      body: "Know what to calculate, how to interpret output and how to communicate the mathematics behind it.",
    },
    {
      title: "Explain the result",
      body: "Practise conclusions that connect numerical or graphical output back to the original problem.",
    },
  ],
  introTitle: "What Makes Applications and Interpretation HL Different?",
  introParagraphs: [
    "The International Baccalaureate positions Applications and Interpretation around the growing role of mathematics and technology in a data-rich world. Students are expected to work with realistic contexts, choose mathematical tools, interpret outputs and communicate conclusions. At Higher Level, the course extends both the depth of mathematics and the complexity of the modelling and problem-solving students encounter.",
    "Students searching for IB Mathematics Applications and Interpretation HL or IB DP Math AI HL need more than a list of calculator steps. A useful revision system separates four skills: understanding the mathematics, selecting a model or method, using technology accurately, and interpreting the result in context. When one of these breaks down, your revision should target that exact stage.",
  ],
  extraSections: [
    {
      title: "Study the Five Topic Areas Through Application",
      paragraphs: [
        "AI HL uses the familiar DP mathematics topic families, but the emphasis is often on choosing and interpreting mathematics in context rather than treating each technique as an isolated procedure.",
      ],
      bullets: [
        "Number & algebra — Connect numerical methods, sequences and algebraic tools to finance, growth, modelling and technology-supported investigation.",
        "Functions — Use functions as models: choose representations, fit or analyse behaviour, and explain what parameters mean in a real situation.",
        "Geometry & trigonometry — Apply geometric and trigonometric methods to spatial, measurement and modelling problems, then interpret the result.",
        "Statistics & probability — Prioritise data analysis, probability models, inference and the assumptions behind statistical conclusions.",
        "Calculus — Use rates of change and accumulation within models, linking technology output to a meaningful interpretation.",
      ],
    },
    {
      title: "Know the Current Assessment Structure Before You Revise",
      paragraphs: [
        "For the current AI HL course first assessed in 2021, Paper 1 is two hours and worth 30%, Paper 2 is two hours and worth 30%, Paper 3 is one hour and worth 20%, and the mathematical exploration contributes 20%. Technology is allowed in all three external papers. Assessment details above apply to the current course first assessed in 2021. Always confirm the subject brief and examination session used by your school.",
      ],
      bullets: [
        "Paper 1 — 2 hours, technology allowed, 30%.",
        "Paper 2 — 2 hours, technology allowed, 30%.",
        "Paper 3 — 1 hour, technology allowed; extended problem solving, 20%.",
        "Exploration — Coursework; individual mathematical exploration, 20%.",
      ],
    },
    {
      title: "The AI HL Revision Loop",
      paragraphs: [
        "Keep the maths, technology and interpretation connected in every study cycle.",
      ],
      bullets: [
        "Understand — Summarise the model, assumptions and mathematical idea before focusing on calculator steps.",
        "Test — Use flashcards and quizzes to recall conditions, meanings and method choices without prompts.",
        "Apply — Solve contextual questions, interpret the output and review whether the conclusion is justified.",
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
      title: "Revision Notes for Applications and Interpretation HL",
      body: "IB Math AI HL revision notes should capture the full reasoning chain, not only the calculator command. For each method, record what type of question it answers, what assumptions are required, what technology can do, and how to interpret the output. Add one example that finishes with a sentence in context so you practise the communication skill as well as the calculation. Studiely can help turn your own course notes into a cleaner revision set. Keep separate prompts for concept meaning, calculator workflow and interpretation so that a successful button sequence does not hide a weak understanding of the mathematics behind it.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Models and Interpretation",
      body: "For AI HL, flashcards are useful for definitions, test conditions, distribution features, model assumptions, notation, key relationships and the meaning of common technology outputs. They are also effective for ‘interpret this’ prompts: put a short output or parameter description on one side and explain its contextual meaning from memory. Because AI HL includes many ideas that are easy to recognise but harder to explain precisely, active recall helps expose shallow familiarity. Use spaced repetition for these short prompts, then confirm understanding by applying the same concept in a full problem.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Method Selection",
      body: "A short AI HL quiz should challenge the decision before the calculation. Ask which model fits, which statistic is relevant, what a parameter represents, or what conclusion is justified from the data. Short diagnostic quizzes are particularly useful after a technology-heavy lesson because they reveal whether you understand why you used a command rather than simply remembering where it is in the menu. Use Studiely quizzes to group errors by type: wrong model, wrong setup, technology input, interpretation or communication. Each group needs a different fix, so this classification makes revision more efficient.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for AI HL",
      body: "AI HL exam focus should include calculator fluency, but fluency means more than speed. You need to enter information correctly, choose an appropriate method, read output critically and show enough reasoning for the examiner to follow what you did. Modelling questions also reward students who define variables clearly, state assumptions, evaluate results and connect mathematics back to context. When reviewing AI HL past papers or exam questions, annotate where the task changes from calculation to interpretation. Many lost marks happen after the numerical work, when a student gives a value but does not explain what it means or whether the model is sensible.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice for AI HL",
      body: "IB Math AI HL exam practice should move from focused practice questions to longer modelling and data-rich tasks. Start by practising one decision at a time, such as selecting a regression model or interpreting a statistical result. Then use mixed problems where the method is not signposted. Finally, work under time conditions and check that your written interpretation is as clear as your calculation. A good correction routine asks three questions: Did I choose the right mathematical approach? Did I use technology accurately? Did I communicate the result in context? If any answer is no, build the next study activity around that exact weakness.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [
    {
      title: "Practise the Full AI HL Chain: Model, Compute, Interpret, Evaluate",
      paragraphs: [
        "Before using the GDC, state which model or method fits the situation and what output you expect. After computing, interpret the result and check whether assumptions or limitations affect the conclusion. For Paper 3, include longer investigation-style problems that connect modelling, statistics, functions or calculus. Move from focused questions to mixed sets and then timed work.",
      ],
    },
    {
      title: "Use Question Sets and Past Papers to Build a Technology Error Log",
      paragraphs: [
        "When reviewing legitimate past-paper or exam-style questions, track technology errors precisely: wrong model, incorrect data entry, unsuitable settings, misread output, weak interpretation, rounding, units or time pressure. Turn recurring issues into a checklist and retest them in a new context so calculator fluency becomes transferable.",
      ],
    },
    {
      title: "Connect Exploration Skills With AI HL Modelling",
      paragraphs: [
        "The mathematical exploration reinforces AI HL inquiry: framing a problem, selecting tools or data, modelling, computing and evaluating results. Studiely can help organise your own notes and recall prompts around these skills. Follow your teacher and official IB guidance for assessment and academic integrity requirements.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Maths AI HL",
  whyParagraphs: [
    "IB Math AI HL combines several kinds of thinking in the same question, which can make revision feel scattered. Studiely helps organise your own study material into a sequence where concepts become notes, important conditions become recall prompts, weak decisions become quiz targets, and recurring exam problems become focused practice.",
    "The platform is most useful when you treat mistakes as data. Instead of repeating a whole chapter because one question went badly, identify whether the problem was mathematical knowledge, model selection, technology use or interpretation and revise that layer directly.",
  ],
  whyAfterParagraphs: [MATH_COURSE_NOTE, IB_DISCLAIMER],
  faqs: [
    {
      question: "What should I focus on most in AI HL?",
      answer:
        "Focus on the connection between mathematics, technology and interpretation. Build reliable core methods, then practise choosing them in context and explaining what the output means. Your own error patterns should decide whether you need more concept review, calculator practice or interpretation work.",
    },
    {
      question: "Are flashcards useful for AI HL?",
      answer:
        "Yes, especially for statistical conditions, definitions, model features, notation, parameter meaning and interpretation prompts. Flashcards should support—not replace—full contextual problem solving. After recall practice, apply the idea in a question that requires you to choose and justify a method.",
    },
    {
      question: "How should I prepare for technology-heavy questions?",
      answer:
        "Practise the complete workflow: identify the mathematical task, prepare the data or variables, use the calculator or software accurately, record relevant output and interpret it in context. Avoid memorising button sequences without understanding what calculation is being performed.",
    },
    {
      question: "How is AI HL different from AA HL?",
      answer:
        "AI HL places greater emphasis on applications, modelling, data, interpretation and effective technology use. AA HL places greater emphasis on analytical reasoning, algebraic structure and formal mathematical thinking. Both are rigorous Higher Level mathematics courses but they develop different mathematical habits.",
    },
    {
      question: "Can Studiely generate AI HL revision activities from my notes?",
      answer:
        "Studiely can help you turn your own study material into revision notes, flashcards and quizzes, then use exam-focus and exam-practice tools to structure the next stage of preparation. Keep official IB requirements and teacher guidance as the source of truth for the course itself.",
    },
  ],
  ctaTitle: "Practise the Full AI HL Reasoning Chain",
  ctaBody:
    "Choose a data or modelling topic. Write the mathematical idea in plain language, recall the conditions without looking, complete a short diagnostic quiz, then solve a contextual problem and explain the meaning of the result. That full chain is what turns calculator fluency into exam-ready mathematics.",
  ctaPrimaryLabel: "Start studying Math AI HL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
