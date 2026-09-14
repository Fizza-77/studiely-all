import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const HSC_PHYSICS: SubjectLandingContent = {
  path: "/australian-curriculum/nsw/hsc/physics",
  seoTitle: "HSC Physics Study Resources | Studiely",
  metaDescription:
    "Create HSC Physics revision notes, flashcards, quizzes and exam practice with Studiely for NSW HSC students.",
  shortDescription:
    "Studiely helps HSC Physics students organise physics topics into revision notes, flashcards, quizzes, exam focus support and exam practice.",
  keywords: [
    "HSC Physics resources",
    "HSC Physics revision notes",
    "HSC Physics flashcards",
    "HSC Physics quiz",
    "HSC Physics exam practice",
  ],
  breadcrumbName: "HSC Physics",
  heroEyebrow: "NSW HSC",
  heroTitle: "HSC Physics Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "HSC Physics students can use Studiely to turn physics topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so NSW senior students can revise actively instead of only rereading notes.",
  introTitle: "Strong HSC science study starts with connected understanding",
  introParagraphs: [
    "Students need to move between terminology, diagrams, data, investigations and exam-style explanation. HSC Physics students often know they need to revise, but they may not know what to revise first, how to test understanding, or how to turn class material into practice. Studiely gives students one place to organise physics content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Year 11 and Year 12 students, the challenge is not always effort. It is direction. Physics students improve when they connect equations to meaning instead of treating formulas as shortcuts. A stronger study system helps students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What HSC Physics Covers",
  coverIntro:
    "HSC Physics focuses on motion, forces, fields, electricity, waves, relativity, quantum ideas, modelling, equations and data interpretation. The subject expects students to understand core ideas and then apply them through structured responses, tasks, problems, performances, projects or exam-style questions depending on the course.",
  coverTopics: [
    "Motion",
    "Forces",
    "Fields",
    "Electricity",
    "Waves",
    "Relativity",
    "Quantum ideas",
    "Modelling",
    "Equations",
    "Data interpretation",
  ],
  coverClosing:
    "Students often find physics difficult because it requires more than memory. The real challenge is choosing the correct model, equation and explanation for unfamiliar contexts. That is why revision should connect content knowledge with active recall, question practice and assessment focus.",
  supportTitle: "How Studiely Helps with HSC Physics",
  supportParagraphs: [
    "Studiely supports the full study process for HSC Physics. Students can begin with a topic, module, concept, skill or class note, then convert it into different study formats. This makes revision more active and helps students see what they understand before they move into longer practice.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clear revision notes for formula summaries, concept maps, diagrams, assumptions, worked examples and graph interpretation.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for formulas, units, laws, definitions, diagram labels and common reasoning prompts.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes that checks conceptual understanding, equation choice, units and graph reading.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus on setting out working, explaining physical meaning, using units and handling multi-step problems.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Work through calculation questions, graph analysis, conceptual explanations and exam-style scenarios.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with NESA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "HSC Physics Revision Notes",
      body: "Revision notes for HSC Physics should make the subject easier to use, not just longer to read. Studiely helps students create focused notes for formula summaries, concept maps, diagrams, assumptions, worked examples and graph interpretation. These notes can reduce scattered revision and give students a clearer view of what each topic or skill requires. A useful note does not simply copy class content. It highlights key ideas, explains relationships and gives students a way to return to the material quickly. In physics, this helps students revise with purpose before homework, school assessments or HSC exam preparation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "HSC Physics Flashcards",
      body: "Flashcards work best when students use them for active recall. Studiely can help students create HSC Physics flashcards for formulas, units, laws, definitions, diagram labels and common reasoning prompts. This gives students a faster way to check whether they can remember the detail before they need to apply it.",
      bullets: [
        "review important physics terms and ideas",
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
      title: "HSC Physics Quiz Practice",
      body: "Quizzes help students check understanding before they attempt longer responses or exam-style tasks. Studiely can create quiz practice that checks conceptual understanding, equation choice, units and graph reading. This helps students identify gaps early, while there is still time to revise the topic properly. For HSC Physics, quiz practice also encourages students to think actively. Instead of assuming they know a topic because it looks familiar, students can test whether they can recall, explain and apply it without support.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "HSC Physics Exam Focus",
      body: "Exam focus helps students move from general revision into targeted preparation. Studiely helps students focus on setting out working, explaining physical meaning, using units and handling multi-step problems. This matters because HSC questions usually reward students who answer the task directly and use relevant evidence, working or examples. A focused revision session should help students ask: what is this question really asking, what knowledge do I need, what structure will help, and what mistakes should I avoid? Studiely supports that thinking so students can approach physics study with more control.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "HSC Physics Exam Practice",
      body: "Practice turns revision into performance. For HSC Physics, students can use Studiely to support calculation questions, graph analysis, conceptual explanations and exam-style scenarios. This gives students a way to move beyond passive reading and into the kind of thinking they need for school assessments and HSC preparation. The strongest practice routine combines short checks with longer tasks. Students can review a concept, test it with flashcards or quizzes, then apply it in a practice response or problem. That sequence helps build confidence without turning study into last-minute cramming.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for HSC Physics",
  whyParagraphs: [
    "Students use Studiely because it keeps physics study organised and active. The platform helps students explain processes, interpret data and apply scientific concepts, while still keeping the workflow simple enough to use during a busy school week.",
  ],
  whyBullets: [
    "Create clearer HSC Physics revision notes from class material",
    "Build flashcards for fast active recall",
    "Use quizzes to check understanding before assessments",
    "Focus on exam-style questions and response expectations",
    "Practise applying knowledge instead of only rereading notes",
  ],
  faqs: [
    {
      question: "What is HSC Physics?",
      answer:
        "HSC Physics is a senior HSC subject studied by students in New South Wales. It develops motion, forces, fields, electricity, waves, relativity, quantum ideas, modelling, equations and data interpretation, and it asks students to apply knowledge in assessment and exam-style tasks rather than only remember content.",
    },
    {
      question: "How can Studiely help with HSC Physics?",
      answer:
        "Studiely helps students turn physics content into revision notes, flashcards, quizzes, exam focus support and exam practice. This gives students one organised workflow for understanding, recall, checking and application.",
    },
    {
      question: "Can I use Studiely for HSC Physics revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused revision notes for formula summaries, concept maps, diagrams, assumptions, worked examples and graph interpretation. The aim is to make revision clearer, shorter and easier to use before assessments.",
    },
    {
      question: "Are flashcards useful for HSC Physics?",
      answer:
        "Flashcards can help when students use them for active recall. In HSC Physics, they can support quick review of formulas, units, laws, definitions, diagram labels and common reasoning prompts, so students do not rely only on rereading long notes.",
    },
    {
      question: "Is Studiely an official HSC or NESA resource?",
      answer:
        "No. Studiely provides independent study support for students and is not affiliated with NESA or any government education authority. Students should still follow their school guidance and official course requirements.",
    },
  ],
  ctaTitle: "Start Studying HSC Physics with More Structure",
  ctaBody:
    "HSC Physics becomes easier to manage when students have a study system that supports understanding, recall, checking, focus and practice. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the physics topics you need to improve.",
  ctaPrimaryLabel: "Start studying Physics",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
