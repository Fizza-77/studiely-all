import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_PHYSICS: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/physics",
  seoTitle: "VCE Physics Study Resources | Studiely",
  metaDescription:
    "Create VCE Physics notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Physics students create revision notes, flashcards, quizzes and exam practice from physics topics, skills and assessment practice.",
  keywords: [
    "VCE Physics",
    "VCE Physics resources",
    "VCE Physics revision notes",
    "VCE Physics flashcards",
    "VCE Physics quiz",
    "VCE Physics exam practice",
  ],
  breadcrumbName: "VCE Physics",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Physics Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Physics students can use Studiely to turn physics topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle: "VCE Physics study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise concepts, formulas, forces, motion, energy, fields, waves, electricity, and model-based reasoning.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Physics Covers",
  coverIntro:
    "VCE Physics focuses on explaining physical systems through models, equations, diagrams, data, and evidence. Students work with motion, forces, energy, waves, fields, circuits, and modern physics ideas.",
  coverTopics: [
    "Motion",
    "Forces",
    "Energy",
    "Waves",
    "Fields",
    "Circuits",
    "Modern physics ideas",
    "Models, equations, diagrams, and data",
  ],
  coverClosing:
    "Physics becomes difficult when students memorise formulas without understanding the situation the formula represents. The real skill is connecting a physical scenario to the correct model.",
  supportTitle: "How Studiely Helps with VCE Physics",
  supportParagraphs: [
    "Studiely supports VCE Physics by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because physics revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for formula summaries, concept maps, diagram explanations, worked examples, graph interpretation, and model assumptions.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for equations, units, definitions, model cues, graph meanings, and common law statements.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for formula selection, unit handling, conceptual reasoning, graph analysis, and scenario interpretation.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around drawing diagrams, identifying assumptions, checking units, explaining direction and magnitude, and linking maths to meaning.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with calculation drills, diagram questions, practical investigation analysis, and timed exam-style problems.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Physics Revision Notes",
      body: "VCE Physics Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around formula summaries, concept maps, diagram explanations, worked examples, graph interpretation, and model assumptions so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Physics Flashcards",
      body: "VCE Physics Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For physics, flashcards are most useful when they target equations, units, definitions, model cues, graph meanings, and common law statements. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Physics Quiz Practice",
      body: "VCE Physics Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around formula selection, unit handling, conceptual reasoning, graph analysis, and scenario interpretation. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Physics Exam Focus",
      body: "VCE Physics Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on drawing diagrams, identifying assumptions, checking units, explaining direction and magnitude, and linking maths to meaning. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Physics Exam Practice",
      body: "VCE Physics Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through calculation drills, diagram questions, practical investigation analysis, and timed exam-style problems. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Physics",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Physics because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Physics?",
      answer:
        "VCE Physics is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in physics through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Physics?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for physics topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Physics revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for formula summaries, concept maps, diagram explanations, worked examples, graph interpretation, and model assumptions. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with VCE Physics formulas?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Physics Revision",
  ctaBody:
    "Studying VCE Physics becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the physics skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Physics",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
