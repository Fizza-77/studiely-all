import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const QCE_GEOGRAPHY: SubjectLandingContent = {
  path: "/australian-curriculum/queensland/qce/geography",
  seoTitle: "QCE Geography Study Resources | Studiely",
  metaDescription:
    "Create QCE Geography revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for Queensland students.",
  shortDescription:
    "Studiely helps QCE Geography students create revision notes, flashcards, quizzes and exam practice for clearer Queensland senior subject revision.",
  keywords: [
    "QCE Geography",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "QCE Geography",
  heroEyebrow: "Queensland QCE",
  heroTitle: "QCE Geography Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "Students can use Studiely for QCE Geography to turn class notes, subject topics, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so QLD students can revise actively, check gaps and prepare more confidently without relying only on rereading.",
  introTitle:
    "QCE Geography study works best when students combine subject knowledge with regular recall and clear assessment practice",
  introParagraphs: [
    "Geography becomes stronger when students connect places, patterns and evidence. A useful study routine helps them work with maps, data, fieldwork and case studies rather than relying on memory alone. Studiely helps Queensland senior students turn geography content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Queensland Certificate of Education students, the challenge is not only effort; it is knowing what to revise next, how to check understanding and how to apply ideas under assessment conditions. A stronger study routine helps students summarise, recall, test, focus and practise with purpose.",
  ],
  coverTitle: "What Geography Covers",
  coverIntro:
    "Geography covers places, environments, ecosystems, urban systems, spatial patterns, population, fieldwork, maps, data and geographic processes. Students need to build both content knowledge and practical skills, especially map interpretation, data analysis, case-study use, fieldwork language, spatial explanation and extended response planning.",
  coverTopics: [
    "Places and environments",
    "Ecosystems",
    "Urban systems",
    "Spatial patterns",
    "Population",
    "Fieldwork",
    "Maps and data",
    "Geographic processes",
  ],
  coverClosing:
    "The common challenge is connecting case studies, maps and data to a precise geographic explanation. That is why a useful study workflow should help students organise information, check recall, practise decisions and connect revision to the way questions are actually answered.",
  supportTitle: "How Studiely Helps Queensland Students Study Geography",
  supportParagraphs: [
    "Studiely gives students one place to transform geography content into different forms of active study. Instead of keeping notes, flashcards, quizzes and practice tasks separate, students can use the same topic to build several revision actions.",
    "This matters for Queensland students because senior assessment often rewards clear understanding, relevant evidence, accurate language and confident application. Studiely provides independent study support and is not affiliated with QCAA or any government education authority.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clearer notes for case studies, maps, processes, data examples, fieldwork summaries and geographic terminology",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for terms, case-study facts, map skills, indicators, process steps and examples",
    },
    {
      need: "Check knowledge",
      support:
        "Use quizzes to test spatial understanding, skills, case studies and data interpretation",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus revision around geographic skills, evidence selection, maps, case-study relevance and response structure",
    },
    {
      need: "Practise application",
      support:
        "Work through short answers, skills questions, case-study responses and fieldwork-based analysis",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for QCE Geography",
      body: "Revision notes for QCE Geography should do more than store information. They should turn class material into organised explanations students can return to before internal assessment, external assessment preparation or school-based revision. With Studiely, students can create notes for case studies, maps, processes, data examples, fieldwork summaries and geographic terminology. The aim is to make each topic easier to understand, compare and apply. Clear notes also help students avoid wasting time searching through scattered material when they need a focused recap.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Geography Flashcards",
      body: "Flashcards work best when they force active recall. For geography, that means checking whether students can remember the right term, idea, example, process, evidence or method without looking at a full page of notes. Studiely can help students build flashcards for terms, case-study facts, map skills, indicators, process steps and examples. Short, repeated recall sessions make it easier to keep important details fresh while still leaving time for deeper practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Skills",
      body: "Quiz practice gives students a fast way to find gaps before they attempt longer responses. A quiz can test simple recall, but it can also ask students to choose the best explanation, identify the right method or connect a concept to an example. For this subject, useful quizzes can check spatial understanding, skills, case studies and data interpretation. This helps students see whether they are ready to move from revision into assessment-style practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for QLD Students",
      body: "Exam focus is about narrowing revision. Students often know a lot of content, but the task usually asks for a specific kind of response. Studiely helps students focus on the skill, evidence, method or explanation the question needs. For QLD students, that can include geographic skills, evidence selection, maps, case-study relevance and response structure. A focused approach makes revision more efficient because students stop trying to revise everything at once and start preparing for the decisions they need to make in real tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply ideas, plan responses, make mistakes, review feedback and try again. This is where understanding becomes more reliable. Studiely supports exam-style practice through short answers, skills questions, case-study responses and fieldwork-based analysis. These practice tasks help students connect what they know with how they need to respond under time and assessment pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for Geography",
  whyParagraphs: [
    "Students use Studiely because it brings the main study actions together. They can start with one topic, then move from notes to flashcards, from flashcards to quizzes and from quizzes to practice without rebuilding their study material from scratch.",
    "Students can prepare with places, evidence and processes working together. It also gives students a clearer routine: understand the content, remember the right details, check knowledge, focus on the task and practise applying skills.",
  ],
  faqs: [
    {
      question: "What is QCE Geography?",
      answer:
        "It is a senior Queensland subject pathway within the Queensland Certificate of Education context. It helps students build knowledge and skills in geography, including map interpretation, data analysis, case-study use, fieldwork language, spatial explanation and extended response planning. Students should always follow their school program and official QCAA information for exact assessment details.",
    },
    {
      question: "How can Studiely help with this subject?",
      answer:
        "Studiely helps students turn geography topics, notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. It supports active revision instead of relying only on rereading.",
    },
    {
      question: "Can I create revision notes for this subject?",
      answer:
        "Yes. Students can use Studiely to create focused notes for case studies, maps, processes, data examples, fieldwork summaries and geographic terminology. Good notes make it easier to review content quickly and apply it in assessment-style questions.",
    },
    {
      question: "Are flashcards useful for geography?",
      answer:
        "Flashcards are useful when they test recall and not just recognition. For geography, they can help students remember terms, case-study facts, map skills, indicators, process steps and examples before moving into quizzes or practice responses.",
    },
    {
      question: "Is Studiely an official QCAA resource?",
      answer:
        "No. Studiely provides independent study support for students. It is not affiliated with QCAA, any Queensland education authority or any government exam body.",
    },
  ],
  ctaTitle: "Start Studying Geography with More Structure",
  ctaBody:
    "Start building a stronger study routine with Studiely. Create revision notes, flashcards, quizzes, exam focus support and exam-style practice for the topics and skills you need to improve.",
  ctaPrimaryLabel: "Start studying Geography",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
