import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const HSC_MATHEMATICS_ADVANCED: SubjectLandingContent = {
  path: "/australian-curriculum/nsw/hsc/mathematics-advanced",
  seoTitle: "HSC Mathematics Advanced Study Resources | Studiely",
  metaDescription:
    "Create HSC Mathematics Advanced revision notes, flashcards, quizzes and exam practice with Studiely for NSW HSC students.",
  shortDescription:
    "Studiely helps HSC Mathematics Advanced students organise mathematics advanced topics into revision notes, flashcards, quizzes, exam focus support and exam practice.",
  keywords: [
    "HSC Mathematics Advanced resources",
    "HSC Mathematics Advanced revision notes",
    "HSC Mathematics Advanced flashcards",
    "HSC Mathematics Advanced quiz",
    "HSC Mathematics Advanced exam practice",
  ],
  breadcrumbName: "HSC Mathematics Advanced",
  heroEyebrow: "NSW HSC",
  heroTitle: "HSC Mathematics Advanced Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "HSC Mathematics Advanced students can use Studiely to turn mathematics advanced topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so NSW senior students can revise actively instead of only rereading notes.",
  introTitle:
    "Strong HSC mathematics study starts with method, accuracy and repeated practice",
  introParagraphs: [
    "Students need to understand why a process works, not only remember the final formula. HSC Mathematics Advanced students often know they need to revise, but they may not know what to revise first, how to test understanding, or how to turn class material into practice. Studiely gives students one place to organise mathematics advanced content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Year 11 and Year 12 students, the challenge is not always effort. It is direction. Mathematics Advanced rewards students who understand why a method works, not only when to copy it. A stronger study system helps students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What HSC Mathematics Advanced Covers",
  coverIntro:
    "HSC Mathematics Advanced focuses on functions, calculus, trigonometry, logarithms, statistical analysis, modelling, proof-style reasoning and algebraic fluency. The subject expects students to understand core ideas and then apply them through structured responses, tasks, problems, performances, projects or exam-style questions depending on the course.",
  coverTopics: [
    "Functions",
    "Calculus",
    "Trigonometry",
    "Logarithms",
    "Statistical analysis",
    "Modelling",
    "Proof-style reasoning",
    "Algebraic fluency",
  ],
  coverClosing:
    "Students often find mathematics advanced difficult because it requires more than memory. The real challenge is linking concepts across topics instead of treating each formula as a separate memory task. That is why revision should connect content knowledge with active recall, question practice and assessment focus.",
  supportTitle: "How Studiely Helps with HSC Mathematics Advanced",
  supportParagraphs: [
    "Studiely supports the full study process for HSC Mathematics Advanced. Students can begin with a topic, module, concept, skill or class note, then convert it into different study formats. This makes revision more active and helps students see what they understand before they move into longer practice.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clear revision notes for method summaries, formula links, worked examples, graph features, calculus rules and proof steps.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for formulas, derivative rules, identities, graph transformations, definitions and theorem reminders.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes that checks technique selection, algebraic accuracy and conceptual understanding.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus on multi-step reasoning, efficient setup, notation, proof logic and error checking.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Work through calculus questions, function analysis, trigonometric problems, statistical questions and mixed exam sets.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with NESA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "HSC Mathematics Advanced Revision Notes",
      body: "Revision notes for HSC Mathematics Advanced should make the subject easier to use, not just longer to read. Studiely helps students create focused notes for method summaries, formula links, worked examples, graph features, calculus rules and proof steps. These notes can reduce scattered revision and give students a clearer view of what each topic or skill requires. A useful note does not simply copy class content. It highlights key ideas, explains relationships and gives students a way to return to the material quickly. In mathematics advanced, this helps students revise with purpose before homework, school assessments or HSC exam preparation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "HSC Mathematics Advanced Flashcards",
      body: "Flashcards work best when students use them for active recall. Studiely can help students create HSC Mathematics Advanced flashcards for formulas, derivative rules, identities, graph transformations, definitions and theorem reminders. This gives students a faster way to check whether they can remember the detail before they need to apply it.",
      bullets: [
        "review important mathematics advanced terms and ideas",
        "turn long notes into quick recall prompts",
        "practise before assessments without rereading everything",
        "spot weak areas that need another round of revision",
      ],
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "HSC Mathematics Advanced Quiz Practice",
      body: "Quizzes help students check understanding before they attempt longer responses or exam-style tasks. Studiely can create quiz practice that checks technique selection, algebraic accuracy and conceptual understanding. This helps students identify gaps early, while there is still time to revise the topic properly. For HSC Mathematics Advanced, quiz practice also encourages students to think actively. Instead of assuming they know a topic because it looks familiar, students can test whether they can recall, explain and apply it without support.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "HSC Mathematics Advanced Exam Focus",
      body: "Exam focus helps students move from general revision into targeted preparation. Studiely helps students focus on multi-step reasoning, efficient setup, notation, proof logic and error checking. This matters because HSC questions usually reward students who answer the task directly and use relevant evidence, working or examples. A focused revision session should help students ask: what is this question really asking, what knowledge do I need, what structure will help, and what mistakes should I avoid? Studiely supports that thinking so students can approach mathematics advanced study with more control.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "HSC Mathematics Advanced Exam Practice",
      body: "Practice turns revision into performance. For HSC Mathematics Advanced, students can use Studiely to support calculus questions, function analysis, trigonometric problems, statistical questions and mixed exam sets. This gives students a way to move beyond passive reading and into the kind of thinking they need for school assessments and HSC preparation. The strongest practice routine combines short checks with longer tasks. Students can review a concept, test it with flashcards or quizzes, then apply it in a practice response or problem. That sequence helps build confidence without turning study into last-minute cramming.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for HSC Mathematics Advanced",
  whyParagraphs: [
    "Students use Studiely because it keeps mathematics advanced study organised and active. The platform helps students select methods, show working and solve exam-style problems, while still keeping the workflow simple enough to use during a busy school week.",
  ],
  whyBullets: [
    "Create clearer HSC Mathematics Advanced revision notes from class material",
    "Build flashcards for fast active recall",
    "Use quizzes to check understanding before assessments",
    "Focus on exam-style questions and response expectations",
    "Practise applying knowledge instead of only rereading notes",
  ],
  faqs: [
    {
      question: "What is HSC Mathematics Advanced?",
      answer:
        "HSC Mathematics Advanced is a senior HSC subject studied by students in New South Wales. It develops functions, calculus, trigonometry, logarithms, statistical analysis, modelling, proof-style reasoning and algebraic fluency, and it asks students to apply knowledge in assessment and exam-style tasks rather than only remember content.",
    },
    {
      question: "How can Studiely help with HSC Mathematics Advanced?",
      answer:
        "Studiely helps students turn mathematics advanced content into revision notes, flashcards, quizzes, exam focus support and exam practice. This gives students one organised workflow for understanding, recall, checking and application.",
    },
    {
      question: "Can I use Studiely for HSC Mathematics Advanced revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused revision notes for method summaries, formula links, worked examples, graph features, calculus rules and proof steps. The aim is to make revision clearer, shorter and easier to use before assessments.",
    },
    {
      question: "Are flashcards useful for HSC Mathematics Advanced?",
      answer:
        "Flashcards can help when students use them for active recall. In HSC Mathematics Advanced, they can support quick review of formulas, derivative rules, identities, graph transformations, definitions and theorem reminders, so students do not rely only on rereading long notes.",
    },
    {
      question: "Is Studiely an official HSC or NESA resource?",
      answer:
        "No. Studiely provides independent study support for students and is not affiliated with NESA or any government education authority. Students should still follow their school guidance and official course requirements.",
    },
  ],
  ctaTitle: "Start Studying HSC Mathematics Advanced with More Structure",
  ctaBody:
    "HSC Mathematics Advanced becomes easier to manage when students have a study system that supports understanding, recall, checking, focus and practice. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the mathematics advanced topics you need to improve.",
  ctaPrimaryLabel: "Start studying Mathematics Advanced",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
