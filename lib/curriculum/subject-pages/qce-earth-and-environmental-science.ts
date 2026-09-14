import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const QCE_EARTH_AND_ENVIRONMENTAL_SCIENCE: SubjectLandingContent = {
  path: "/australian-curriculum/queensland/qce/earth-and-environmental-science",
  seoTitle: "QCE Earth and Environmental Science Resources | Studiely",
  metaDescription:
    "Create QCE Earth and Environmental Science revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for Queensland students.",
  shortDescription:
    "Studiely helps QCE Earth and Environmental Science students create revision notes, flashcards, quizzes and exam practice for clearer Queensland senior subject revision.",
  keywords: [
    "QCE Earth and Environmental Science",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "QCE Earth and Environmental Science",
  heroEyebrow: "Queensland QCE",
  heroTitle: "QCE Earth and Environmental Science Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "Students can use Studiely for QCE Earth and Environmental Science to turn class notes, subject topics, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so QLD students can revise actively, check gaps and prepare more confidently without relying only on rereading.",
  introTitle:
    "QCE Earth and Environmental Science study works best when students combine subject knowledge with regular recall and clear assessment practice",
  introParagraphs: [
    "Earth and Environmental Science asks students to understand systems, evidence and change. The subject becomes clearer when geological, atmospheric, ecological and human factors sit in one connected study map. Studiely helps Queensland senior students turn earth and Environmental Science content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Queensland Certificate of Education students, the challenge is not only effort; it is knowing what to revise next, how to check understanding and how to apply ideas under assessment conditions. A stronger study routine helps students summarise, recall, test, focus and practise with purpose.",
  ],
  coverTitle: "What Earth and Environmental Science Covers",
  coverIntro:
    "Earth and Environmental Science covers Earth systems, geological time, natural hazards, climate processes, ecosystems, sustainability, fieldwork, environmental data and human impacts. Students need to build both content knowledge and practical skills, especially systems thinking, data interpretation, case-study use, scientific explanation, graph reading and investigation language.",
  coverTopics: [
    "Earth systems",
    "Geological time",
    "Natural hazards",
    "Climate processes",
    "Ecosystems",
    "Sustainability",
    "Fieldwork",
    "Environmental data",
    "Human impacts",
  ],
  coverClosing:
    "The common challenge is linking processes, evidence and human impacts without turning answers into broad descriptions. That is why a useful study workflow should help students organise information, check recall, practise decisions and connect revision to the way questions are actually answered.",
  supportTitle:
    "How Studiely Helps Queensland Students Study Earth and Environmental Science",
  supportParagraphs: [
    "Studiely gives students one place to transform earth and Environmental Science content into different forms of active study. Instead of keeping notes, flashcards, quizzes and practice tasks separate, students can use the same topic to build several revision actions.",
    "This matters for Queensland students because senior assessment often rewards clear understanding, relevant evidence, accurate language and confident application. Studiely provides independent study support and is not affiliated with QCAA or any government education authority.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clearer notes for system diagrams, process chains, case studies, data examples, key terms and fieldwork summaries",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for definitions, cycles, hazards, indicators, fieldwork terms and cause-effect links",
    },
    {
      need: "Check knowledge",
      support:
        "Use quizzes to test process understanding, environmental relationships, data reading and evidence-based reasoning",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus revision around scientific explanation, case-study selection, graph skills, investigation methods and extended response planning",
    },
    {
      need: "Practise application",
      support:
        "Work through data-response questions, case-study explanations, environmental scenarios and applied science tasks",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for QCE Earth and Environmental Science",
      body: "Revision notes for QCE Earth and Environmental Science should do more than store information. They should turn class material into organised explanations students can return to before internal assessment, external assessment preparation or school-based revision. With Studiely, students can create notes for system diagrams, process chains, case studies, data examples, key terms and fieldwork summaries. The aim is to make each topic easier to understand, compare and apply. Clear notes also help students avoid wasting time searching through scattered material when they need a focused recap.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Earth and Environmental Science Flashcards",
      body: "Flashcards work best when they force active recall. For earth and Environmental Science, that means checking whether students can remember the right term, idea, example, process, evidence or method without looking at a full page of notes. Studiely can help students build flashcards for definitions, cycles, hazards, indicators, fieldwork terms and cause-effect links. Short, repeated recall sessions make it easier to keep important details fresh while still leaving time for deeper practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Skills",
      body: "Quiz practice gives students a fast way to find gaps before they attempt longer responses. A quiz can test simple recall, but it can also ask students to choose the best explanation, identify the right method or connect a concept to an example. For this subject, useful quizzes can check process understanding, environmental relationships, data reading and evidence-based reasoning. This helps students see whether they are ready to move from revision into assessment-style practice.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for QLD Students",
      body: "Exam focus is about narrowing revision. Students often know a lot of content, but the task usually asks for a specific kind of response. Studiely helps students focus on the skill, evidence, method or explanation the question needs. For QLD students, that can include scientific explanation, case-study selection, graph skills, investigation methods and extended response planning. A focused approach makes revision more efficient because students stop trying to revise everything at once and start preparing for the decisions they need to make in real tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply ideas, plan responses, make mistakes, review feedback and try again. This is where understanding becomes more reliable. Studiely supports exam-style practice through data-response questions, case-study explanations, environmental scenarios and applied science tasks. These practice tasks help students connect what they know with how they need to respond under time and assessment pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for Earth and Environmental Science",
  whyParagraphs: [
    "Students use Studiely because it brings the main study actions together. They can start with one topic, then move from notes to flashcards, from flashcards to quizzes and from quizzes to practice without rebuilding their study material from scratch.",
    "Students can connect evidence and processes before they attempt longer responses. It also gives students a clearer routine: understand the content, remember the right details, check knowledge, focus on the task and practise applying skills.",
  ],
  faqs: [
    {
      question: "What is QCE Earth and Environmental Science?",
      answer:
        "It is a senior Queensland subject pathway within the Queensland Certificate of Education context. It helps students build knowledge and skills in earth and Environmental Science, including systems thinking, data interpretation, case-study use, scientific explanation, graph reading and investigation language. Students should always follow their school program and official QCAA information for exact assessment details.",
    },
    {
      question: "How can Studiely help with this subject?",
      answer:
        "Studiely helps students turn earth and Environmental Science topics, notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. It supports active revision instead of relying only on rereading.",
    },
    {
      question: "Can I create revision notes for this subject?",
      answer:
        "Yes. Students can use Studiely to create focused notes for system diagrams, process chains, case studies, data examples, key terms and fieldwork summaries. Good notes make it easier to review content quickly and apply it in assessment-style questions.",
    },
    {
      question: "Are flashcards useful for earth and Environmental Science?",
      answer:
        "Flashcards are useful when they test recall and not just recognition. For earth and Environmental Science, they can help students remember definitions, cycles, hazards, indicators, fieldwork terms and cause-effect links before moving into quizzes or practice responses.",
    },
    {
      question: "Is Studiely an official QCAA resource?",
      answer:
        "No. Studiely provides independent study support for students. It is not affiliated with QCAA, any Queensland education authority or any government exam body.",
    },
  ],
  ctaTitle: "Start Studying Earth and Environmental Science with More Structure",
  ctaBody:
    "Start building a stronger study routine with Studiely. Create revision notes, flashcards, quizzes, exam focus support and exam-style practice for the topics and skills you need to improve.",
  ctaPrimaryLabel: "Start studying Earth and Environmental Science",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
