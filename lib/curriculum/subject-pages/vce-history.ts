import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_HISTORY: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/history",
  seoTitle: "VCE History Study Resources | Studiely",
  metaDescription:
    "Create VCE History notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE History students create revision notes, flashcards, quizzes and exam practice from history topics, skills and assessment practice.",
  keywords: [
    "VCE History",
    "VCE History resources",
    "VCE History revision notes",
    "VCE History flashcards",
    "VCE History quiz",
    "VCE History exam practice",
  ],
  breadcrumbName: "VCE History",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE History Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE History students can use Studiely to turn history topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle: "VCE History study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise historical knowledge, evidence, perspectives, causation, change, continuity, and argument.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE History Covers",
  coverIntro:
    "VCE History develops students’ ability to interpret sources, understand periods of change, examine perspectives, and build arguments using evidence.",
  coverTopics: [
    "Source interpretation",
    "Periods of change",
    "Perspectives",
    "Evidence-based argument",
    "Causation",
    "Continuity and change",
    "Historical significance",
  ],
  coverClosing:
    "Students may remember events but find it harder to explain significance, causation, continuity, change, and the reliability or usefulness of evidence.",
  supportTitle: "How Studiely Helps with VCE History",
  supportParagraphs: [
    "Studiely supports VCE History by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because history revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for timelines, key events, individuals, causes, consequences, historical interpretations, and source analysis reminders.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for dates, terms, people, events, source concepts, and evidence links.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for chronology, cause-effect relationships, source interpretation, significance, and argument choices.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around answering the exact question, using evidence precisely, evaluating perspectives, and avoiding narrative-only responses.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with source-analysis questions, essay plans, short-answer drills, and timed historical argument practice.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE History Revision Notes",
      body: "VCE History Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around timelines, key events, individuals, causes, consequences, historical interpretations, and source analysis reminders so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE History Flashcards",
      body: "VCE History Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For history, flashcards are most useful when they target dates, terms, people, events, source concepts, and evidence links. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE History Quiz Practice",
      body: "VCE History Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around chronology, cause-effect relationships, source interpretation, significance, and argument choices. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE History Exam Focus",
      body: "VCE History Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on answering the exact question, using evidence precisely, evaluating perspectives, and avoiding narrative-only responses. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE History Exam Practice",
      body: "VCE History Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through source-analysis questions, essay plans, short-answer drills, and timed historical argument practice. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE History",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE History because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE History?",
      answer:
        "VCE History is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in history through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE History?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for history topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE History revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for timelines, key events, individuals, causes, consequences, historical interpretations, and source analysis reminders. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with VCE History source analysis?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE History Revision",
  ctaBody:
    "Studying VCE History becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the history skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying History",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
