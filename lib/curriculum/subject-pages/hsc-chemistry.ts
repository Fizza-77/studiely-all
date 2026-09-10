import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const HSC_CHEMISTRY: SubjectLandingContent = {
  path: "/australian-curriculum/nsw/hsc/chemistry",
  seoTitle: "HSC Chemistry Study Resources | Studiely",
  metaDescription:
    "Create HSC Chemistry revision notes, flashcards, quizzes and exam practice with Studiely for NSW HSC students.",
  shortDescription:
    "Studiely helps HSC Chemistry students organise chemistry topics into revision notes, flashcards, quizzes, exam focus support and exam practice.",
  keywords: [
    "HSC Chemistry resources",
    "HSC Chemistry revision notes",
    "HSC Chemistry flashcards",
    "HSC Chemistry quiz",
    "HSC Chemistry exam practice",
  ],
  breadcrumbName: "HSC Chemistry",
  heroEyebrow: "NSW HSC",
  heroTitle: "HSC Chemistry Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "HSC Chemistry students can use Studiely to turn chemistry topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so NSW senior students can revise actively instead of only rereading notes.",
  introTitle: "Strong HSC science study starts with connected understanding",
  introParagraphs: [
    "Students need to move between terminology, diagrams, data, investigations and exam-style explanation. HSC Chemistry students often know they need to revise, but they may not know what to revise first, how to test understanding, or how to turn class material into practice. Studiely gives students one place to organise chemistry content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Year 11 and Year 12 students, the challenge is not always effort. It is direction. Chemistry study needs both memory and method, because students must explain concepts and solve problems accurately. A stronger study system helps students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What HSC Chemistry Covers",
  coverIntro:
    "HSC Chemistry focuses on chemical reactions, equilibrium, acids and bases, organic chemistry, quantitative analysis, spectroscopy, bonding and industrial applications. The subject expects students to understand core ideas and then apply them through structured responses, tasks, problems, performances, projects or exam-style questions depending on the course.",
  coverTopics: [
    "Chemical reactions",
    "Equilibrium",
    "Acids and bases",
    "Organic chemistry",
    "Quantitative analysis",
    "Spectroscopy",
    "Bonding",
    "Industrial applications",
  ],
  coverClosing:
    "Students often find chemistry difficult because it requires more than memory. The real challenge is combining formulas, calculations, reaction logic and explanations in the same response. That is why revision should connect content knowledge with active recall, question practice and assessment focus.",
  supportTitle: "How Studiely Helps with HSC Chemistry",
  supportParagraphs: [
    "Studiely supports the full study process for HSC Chemistry. Students can begin with a topic, module, concept, skill or class note, then convert it into different study formats. This makes revision more active and helps students see what they understand before they move into longer practice.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clear revision notes for reaction pathways, formula rules, calculation steps, terminology, diagrams and worked examples.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for equations, definitions, periodic trends, functional groups, formulas and concept triggers.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes that tests calculations, chemical reasoning, terminology and equation balancing.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus on method selection, units, significant figures, reaction logic and explaining observations.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Work through mole calculations, equilibrium questions, organic pathways, titration problems and data analysis.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with NESA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "HSC Chemistry Revision Notes",
      body: "Revision notes for HSC Chemistry should make the subject easier to use, not just longer to read. Studiely helps students create focused notes for reaction pathways, formula rules, calculation steps, terminology, diagrams and worked examples. These notes can reduce scattered revision and give students a clearer view of what each topic or skill requires. A useful note does not simply copy class content. It highlights key ideas, explains relationships and gives students a way to return to the material quickly. In chemistry, this helps students revise with purpose before homework, school assessments or HSC exam preparation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "HSC Chemistry Flashcards",
      body: "Flashcards work best when students use them for active recall. Studiely can help students create HSC Chemistry flashcards for equations, definitions, periodic trends, functional groups, formulas and concept triggers. This gives students a faster way to check whether they can remember the detail before they need to apply it.",
      bullets: [
        "review important chemistry terms and ideas",
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
      title: "HSC Chemistry Quiz Practice",
      body: "Quizzes help students check understanding before they attempt longer responses or exam-style tasks. Studiely can create quiz practice that tests calculations, chemical reasoning, terminology and equation balancing. This helps students identify gaps early, while there is still time to revise the topic properly. For HSC Chemistry, quiz practice also encourages students to think actively. Instead of assuming they know a topic because it looks familiar, students can test whether they can recall, explain and apply it without support.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "HSC Chemistry Exam Focus",
      body: "Exam focus helps students move from general revision into targeted preparation. Studiely helps students focus on method selection, units, significant figures, reaction logic and explaining observations. This matters because HSC questions usually reward students who answer the task directly and use relevant evidence, working or examples. A focused revision session should help students ask: what is this question really asking, what knowledge do I need, what structure will help, and what mistakes should I avoid? Studiely supports that thinking so students can approach chemistry study with more control.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "HSC Chemistry Exam Practice",
      body: "Practice turns revision into performance. For HSC Chemistry, students can use Studiely to support mole calculations, equilibrium questions, organic pathways, titration problems and data analysis. This gives students a way to move beyond passive reading and into the kind of thinking they need for school assessments and HSC preparation. The strongest practice routine combines short checks with longer tasks. Students can review a concept, test it with flashcards or quizzes, then apply it in a practice response or problem. That sequence helps build confidence without turning study into last-minute cramming.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for HSC Chemistry",
  whyParagraphs: [
    "Students use Studiely because it keeps chemistry study organised and active. The platform helps students explain processes, interpret data and apply scientific concepts, while still keeping the workflow simple enough to use during a busy school week.",
  ],
  whyBullets: [
    "Create clearer HSC Chemistry revision notes from class material",
    "Build flashcards for fast active recall",
    "Use quizzes to check understanding before assessments",
    "Focus on exam-style questions and response expectations",
    "Practise applying knowledge instead of only rereading notes",
  ],
  faqs: [
    {
      question: "What is HSC Chemistry?",
      answer:
        "HSC Chemistry is a senior HSC subject studied by students in New South Wales. It develops chemical reactions, equilibrium, acids and bases, organic chemistry, quantitative analysis, spectroscopy, bonding and industrial applications, and it asks students to apply knowledge in assessment and exam-style tasks rather than only remember content.",
    },
    {
      question: "How can Studiely help with HSC Chemistry?",
      answer:
        "Studiely helps students turn chemistry content into revision notes, flashcards, quizzes, exam focus support and exam practice. This gives students one organised workflow for understanding, recall, checking and application.",
    },
    {
      question: "Can I use Studiely for HSC Chemistry revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused revision notes for reaction pathways, formula rules, calculation steps, terminology, diagrams and worked examples. The aim is to make revision clearer, shorter and easier to use before assessments.",
    },
    {
      question: "Are flashcards useful for HSC Chemistry?",
      answer:
        "Flashcards can help when students use them for active recall. In HSC Chemistry, they can support quick review of equations, definitions, periodic trends, functional groups, formulas and concept triggers, so students do not rely only on rereading long notes.",
    },
    {
      question: "Is Studiely an official HSC or NESA resource?",
      answer:
        "No. Studiely provides independent study support for students and is not affiliated with NESA or any government education authority. Students should still follow their school guidance and official course requirements.",
    },
  ],
  ctaTitle: "Start Studying HSC Chemistry with More Structure",
  ctaBody:
    "HSC Chemistry becomes easier to manage when students have a study system that supports understanding, recall, checking, focus and practice. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the chemistry topics you need to improve.",
  ctaPrimaryLabel: "Start studying Chemistry",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
