import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_ENGLISH_LITERATURE: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/english-literature",
  seoTitle: "VCE English Literature Study Resources | Studiely",
  metaDescription:
    "Create VCE English Literature notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE English Literature students create revision notes, flashcards, quizzes and exam practice from english literature topics, skills and assessment practice.",
  keywords: [
    "VCE English Literature",
    "VCE English Literature resources",
    "VCE English Literature revision notes",
    "VCE English Literature flashcards",
    "VCE English Literature quiz",
    "VCE English Literature exam practice",
  ],
  breadcrumbName: "VCE English Literature",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE English Literature Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE English Literature students can use Studiely to turn english literature topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle:
    "VCE English Literature study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise close reading, literary interpretation, textual voice, form, perspective, and critical response.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE English Literature Covers",
  coverIntro:
    "VCE English Literature focuses on reading literary texts closely and developing interpretations supported by precise evidence. Students analyse language, form, structure, character, setting, genre, context, and the way meaning is shaped.",
  coverTopics: [
    "Language",
    "Form",
    "Structure",
    "Character",
    "Setting",
    "Genre",
    "Context",
    "Shaping meaning",
  ],
  coverClosing:
    "The challenge is moving beyond summary. Strong Literature responses need an interpretation, not just an explanation of what happens in the text.",
  supportTitle: "How Studiely Helps with VCE English Literature",
  supportParagraphs: [
    "Studiely supports VCE English Literature by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because english literature revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for passage analysis, literary devices, recurring motifs, character readings, contextual ideas, and critical interpretations.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for literary terms, quote effects, motif links, genre features, contextual ideas, and interpretive claims.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for close-reading choices, evidence meaning, device effects, theme development, and passage links.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around passage focus, interpretive argument, quote precision, and writing that stays analytical rather than descriptive.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with close analysis drills, comparative thinking, short interpretations, and timed response planning.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE English Literature Revision Notes",
      body: "VCE English Literature Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around passage analysis, literary devices, recurring motifs, character readings, contextual ideas, and critical interpretations so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE English Literature Flashcards",
      body: "VCE English Literature Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For english literature, flashcards are most useful when they target literary terms, quote effects, motif links, genre features, contextual ideas, and interpretive claims. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE English Literature Quiz Practice",
      body: "VCE English Literature Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around close-reading choices, evidence meaning, device effects, theme development, and passage links. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE English Literature Exam Focus",
      body: "VCE English Literature Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on passage focus, interpretive argument, quote precision, and writing that stays analytical rather than descriptive. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE English Literature Exam Practice",
      body: "VCE English Literature Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through close analysis drills, comparative thinking, short interpretations, and timed response planning. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE English Literature",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE English Literature because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE English Literature?",
      answer:
        "VCE English Literature is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in english literature through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE English Literature?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for english literature topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE English Literature revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for passage analysis, literary devices, recurring motifs, character readings, contextual ideas, and critical interpretations. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with close passage analysis?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE English Literature Revision",
  ctaBody:
    "Studying VCE English Literature becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the english literature skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying English Literature",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
