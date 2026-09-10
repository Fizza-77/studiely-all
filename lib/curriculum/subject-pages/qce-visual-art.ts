import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const QCE_VISUAL_ART: SubjectLandingContent = {
  path: "/australian-curriculum/queensland/qce/visual-art",
  seoTitle: "QCE Visual Art Study Resources | Studiely",
  metaDescription:
    "Create QCE Visual Art revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for Queensland students.",
  shortDescription:
    "Studiely helps QCE Visual Art students create revision notes, flashcards, quizzes and exam practice for clearer Queensland senior subject revision.",
  keywords: [
    "QCE Visual Art",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "QCE Visual Art",
  heroEyebrow: "Queensland QCE",
  heroTitle: "QCE Visual Art Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "Students can use Studiely for QCE Visual Art to turn class notes, subject topics, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so QLD students can revise actively, check gaps and prepare more confidently without relying only on rereading.",
  introTitle:
    "QCE Visual Art study works best when students combine subject knowledge with regular recall and clear assessment practice",
  introParagraphs: [
    "Visual Art study combines creative practice with analysis and reflection. Students need a system for artworks, concepts, processes, materials and written interpretation. Studiely helps Queensland senior students turn visual Art content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Queensland Certificate of Education students, the challenge is not only effort; it is knowing what to revise next, how to check understanding and how to apply ideas under assessment conditions. A stronger study routine helps students summarise, recall, test, focus and practise with purpose.",
  ],
  coverTitle: "What Visual Art Covers",
  coverIntro:
    "Visual Art covers art-making, visual language, artists, artworks, contexts, materials, processes, exhibition ideas and critical interpretation. Students need to build both content knowledge and practical skills, especially visual analysis, concept development, process reflection, evidence use, terminology and creative decision-making.",
  coverTopics: [
    "Art-making",
    "Visual language",
    "Artists",
    "Artworks",
    "Contexts",
    "Materials",
    "Processes",
    "Exhibition ideas",
    "Critical interpretation",
  ],
  coverClosing:
    "The common challenge is explaining artistic choices clearly while keeping practice, theory and reflection connected. That is why a useful study workflow should help students organise information, check recall, practise decisions and connect revision to the way questions are actually answered.",
  supportTitle: "How Studiely Helps Queensland Students Study Visual Art",
  supportParagraphs: [
    "Studiely gives students one place to transform visual Art content into different forms of active study. Instead of keeping notes, flashcards, quizzes and practice tasks separate, students can use the same topic to build several revision actions.",
    "This matters for Queensland students because senior assessment often rewards clear understanding, relevant evidence, accurate language and confident application. Studiely provides independent study support and is not affiliated with QCAA or any government education authority.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clearer notes for artist studies, artwork analysis, process notes, visual language, materials, context and reflection prompts",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for art terms, artists, materials, techniques, context points and analysis prompts",
    },
    {
      need: "Check knowledge",
      support:
        "Use quizzes to test visual language, artist knowledge, process decisions, context and interpretation",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus revision around analysis structure, evidence from artworks, terminology, comparison and reflection clarity",
    },
    {
      need: "Practise application",
      support:
        "Work through artwork analysis, visual language paragraphs, reflection tasks and planning for creative decisions",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for QCE Visual Art",
      body: "Revision notes for QCE Visual Art should do more than store information. They should turn class material into organised explanations students can return to before internal assessment, external assessment preparation or school-based revision. With Studiely, students can create notes for artist studies, artwork analysis, process notes, visual language, materials, context and reflection prompts. The aim is to make each topic easier to understand, compare and apply. Clear notes also help students avoid wasting time searching through scattered material when they need a focused recap.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Visual Art Flashcards",
      body: "Flashcards work best when they force active recall. For visual Art, that means checking whether students can remember the right term, idea, example, process, evidence or method without looking at a full page of notes. Studiely can help students build flashcards for art terms, artists, materials, techniques, context points and analysis prompts. Short, repeated recall sessions make it easier to keep important details fresh while still leaving time for deeper practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Skills",
      body: "Quiz practice gives students a fast way to find gaps before they attempt longer responses. A quiz can test simple recall, but it can also ask students to choose the best explanation, identify the right method or connect a concept to an example. For this subject, useful quizzes can check visual language, artist knowledge, process decisions, context and interpretation. This helps students see whether they are ready to move from revision into assessment-style practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for QLD Students",
      body: "Exam focus is about narrowing revision. Students often know a lot of content, but the task usually asks for a specific kind of response. Studiely helps students focus on the skill, evidence, method or explanation the question needs. For QLD students, that can include analysis structure, evidence from artworks, terminology, comparison and reflection clarity. A focused approach makes revision more efficient because students stop trying to revise everything at once and start preparing for the decisions they need to make in real tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply ideas, plan responses, make mistakes, review feedback and try again. This is where understanding becomes more reliable. Studiely supports exam-style practice through artwork analysis, visual language paragraphs, reflection tasks and planning for creative decisions. These practice tasks help students connect what they know with how they need to respond under time and assessment pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for Visual Art",
  whyParagraphs: [
    "Students use Studiely because it brings the main study actions together. They can start with one topic, then move from notes to flashcards, from flashcards to quizzes and from quizzes to practice without rebuilding their study material from scratch.",
    "Students can connect making, meaning and written explanation in one workflow. It also gives students a clearer routine: understand the content, remember the right details, check knowledge, focus on the task and practise applying skills.",
  ],
  faqs: [
    {
      question: "What is QCE Visual Art?",
      answer:
        "It is a senior Queensland subject pathway within the Queensland Certificate of Education context. It helps students build knowledge and skills in visual Art, including visual analysis, concept development, process reflection, evidence use, terminology and creative decision-making. Students should always follow their school program and official QCAA information for exact assessment details.",
    },
    {
      question: "How can Studiely help with this subject?",
      answer:
        "Studiely helps students turn visual Art topics, notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. It supports active revision instead of relying only on rereading.",
    },
    {
      question: "Can I create revision notes for this subject?",
      answer:
        "Yes. Students can use Studiely to create focused notes for artist studies, artwork analysis, process notes, visual language, materials, context and reflection prompts. Good notes make it easier to review content quickly and apply it in assessment-style questions.",
    },
    {
      question: "Are flashcards useful for visual Art?",
      answer:
        "Flashcards are useful when they test recall and not just recognition. For visual Art, they can help students remember art terms, artists, materials, techniques, context points and analysis prompts before moving into quizzes or practice responses.",
    },
    {
      question: "Is Studiely an official QCAA resource?",
      answer:
        "No. Studiely provides independent study support for students. It is not affiliated with QCAA, any Queensland education authority or any government exam body.",
    },
  ],
  ctaTitle: "Start Studying Visual Art with More Structure",
  ctaBody:
    "Start building a stronger study routine with Studiely. Create revision notes, flashcards, quizzes, exam focus support and exam-style practice for the topics and skills you need to improve.",
  ctaPrimaryLabel: "Start studying Visual Art",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
