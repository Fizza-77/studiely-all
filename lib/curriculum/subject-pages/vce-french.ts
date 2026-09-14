import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_FRENCH: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/french",
  seoTitle: "VCE French Study Resources | Studiely",
  metaDescription:
    "Create VCE French notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE French students create revision notes, flashcards, quizzes and exam practice from french topics, skills and assessment practice.",
  keywords: [
    "VCE French",
    "VCE French resources",
    "VCE French revision notes",
    "VCE French flashcards",
    "VCE French quiz",
    "VCE French exam practice",
  ],
  breadcrumbName: "VCE French",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE French Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE French students can use Studiely to turn french topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle: "VCE French study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise vocabulary, grammar, listening, reading, speaking, writing, cultural understanding, and exam communication.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE French Covers",
  coverIntro:
    "VCE French supports students in building communication skills across listening, speaking, reading, writing, vocabulary, grammar, text types, cultural topics, and personal responses.",
  coverTopics: [
    "Listening",
    "Speaking",
    "Reading",
    "Writing",
    "Vocabulary",
    "Grammar",
    "Text types",
    "Cultural topics",
    "Personal responses",
  ],
  coverClosing:
    "Students need consistent practice across skills. A strong response uses accurate grammar, relevant vocabulary, clear structure, and confidence in both written and spoken communication.",
  supportTitle: "How Studiely Helps with VCE French",
  supportParagraphs: [
    "Studiely supports VCE French by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because french revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for grammar patterns, vocabulary by theme, text types, speaking prompts, listening strategies, and writing structures.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for vocabulary, verb forms, useful phrases, grammar rules, topic examples, and oral exam prompts.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for grammar, vocabulary, comprehension, sentence construction, and topic response practice.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around preparing for listening, reading, writing, and speaking tasks with accurate language and clear communication.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with translation drills, oral practice prompts, written response planning, and topic-based exam-style questions.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE French Revision Notes",
      body: "VCE French Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around grammar patterns, vocabulary by theme, text types, speaking prompts, listening strategies, and writing structures so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE French Flashcards",
      body: "VCE French Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For french, flashcards are most useful when they target vocabulary, verb forms, useful phrases, grammar rules, topic examples, and oral exam prompts. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE French Quiz Practice",
      body: "VCE French Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around grammar, vocabulary, comprehension, sentence construction, and topic response practice. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE French Exam Focus",
      body: "VCE French Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on preparing for listening, reading, writing, and speaking tasks with accurate language and clear communication. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE French Exam Practice",
      body: "VCE French Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through translation drills, oral practice prompts, written response planning, and topic-based exam-style questions. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE French",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE French because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE French?",
      answer:
        "VCE French is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in french through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE French?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for french topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE French revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for grammar patterns, vocabulary by theme, text types, speaking prompts, listening strategies, and writing structures. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with VCE French vocabulary?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE French Revision",
  ctaBody:
    "Studying VCE French becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the french skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying French",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
