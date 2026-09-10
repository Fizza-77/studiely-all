import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_SPANISH: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/spanish",
  seoTitle: "VCE Spanish Study Resources | Studiely",
  metaDescription:
    "Create VCE Spanish notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Spanish students create revision notes, flashcards, quizzes and exam practice from spanish topics, skills and assessment practice.",
  keywords: [
    "VCE Spanish",
    "VCE Spanish resources",
    "VCE Spanish revision notes",
    "VCE Spanish flashcards",
    "VCE Spanish quiz",
    "VCE Spanish exam practice",
  ],
  breadcrumbName: "VCE Spanish",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Spanish Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Spanish students can use Studiely to turn spanish topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle: "VCE Spanish study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise vocabulary, grammar, listening, reading, speaking, writing, cultural topics, and oral preparation.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Spanish Covers",
  coverIntro:
    "VCE Spanish develops communication skills through listening, speaking, reading, writing, grammar, vocabulary, text types, personal responses, and cultural understanding.",
  coverTopics: [
    "Listening",
    "Speaking",
    "Reading",
    "Writing",
    "Grammar",
    "Vocabulary",
    "Text types",
    "Personal responses",
    "Cultural understanding",
  ],
  coverClosing:
    "Students often need more practice connecting grammar with natural communication. Good preparation builds accuracy, fluency, and confidence across spoken and written tasks.",
  supportTitle: "How Studiely Helps with VCE Spanish",
  supportParagraphs: [
    "Studiely supports VCE Spanish by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because spanish revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for grammar rules, vocabulary themes, cultural topics, text types, speaking plans, and writing structures.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for verbs, phrases, vocabulary, grammar points, topic examples, and oral question prompts.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for grammar, vocabulary, comprehension, sentence building, and topic-based response practice.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around preparing written and oral responses, listening for key information, and using accurate language under time pressure.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with oral prompts, writing drills, comprehension checks, and exam-style language tasks.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Spanish Revision Notes",
      body: "VCE Spanish Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around grammar rules, vocabulary themes, cultural topics, text types, speaking plans, and writing structures so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Spanish Flashcards",
      body: "VCE Spanish Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For spanish, flashcards are most useful when they target verbs, phrases, vocabulary, grammar points, topic examples, and oral question prompts. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Spanish Quiz Practice",
      body: "VCE Spanish Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around grammar, vocabulary, comprehension, sentence building, and topic-based response practice. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Spanish Exam Focus",
      body: "VCE Spanish Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on preparing written and oral responses, listening for key information, and using accurate language under time pressure. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Spanish Exam Practice",
      body: "VCE Spanish Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through oral prompts, writing drills, comprehension checks, and exam-style language tasks. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Spanish",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Spanish because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Spanish?",
      answer:
        "VCE Spanish is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in spanish through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Spanish?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for spanish topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Spanish revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for grammar rules, vocabulary themes, cultural topics, text types, speaking plans, and writing structures. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with VCE Spanish oral practice?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Spanish Revision",
  ctaBody:
    "Studying VCE Spanish becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the spanish skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Spanish",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
