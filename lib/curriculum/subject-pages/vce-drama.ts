import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_DRAMA: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/drama",
  seoTitle: "VCE Drama Study Resources | Studiely",
  metaDescription:
    "Create VCE Drama notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Drama students create revision notes, flashcards, quizzes and exam practice from drama topics, skills and assessment practice.",
  keywords: [
    "VCE Drama",
    "VCE Drama resources",
    "VCE Drama revision notes",
    "VCE Drama flashcards",
    "VCE Drama quiz",
    "VCE Drama exam practice",
  ],
  breadcrumbName: "VCE Drama",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Drama Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Drama students can use Studiely to turn drama topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle: "VCE Drama study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise performance, expressive skills, dramatic elements, interpretation, analysis, and evaluation.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Drama Covers",
  coverIntro:
    "VCE Drama develops performance-making, expressive skills, dramatic elements, character, storytelling, interpretation, analysis, and reflection on dramatic choices.",
  coverTopics: [
    "Performance-making",
    "Expressive skills",
    "Dramatic elements",
    "Character",
    "Storytelling",
    "Interpretation",
    "Analysis",
    "Dramatic reflection",
  ],
  coverClosing:
    "Students need to connect performance choices to meaning. Strong responses describe what was done, why it was effective, and how dramatic elements shaped audience impact.",
  supportTitle: "How Studiely Helps with VCE Drama",
  supportParagraphs: [
    "Studiely supports VCE Drama by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because drama revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for dramatic elements, expressive skills, performance choices, character development, analysis language, and evaluation points.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for terms, performance techniques, dramatic elements, expressive skills, and example links.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for terminology, performance choices, dramatic analysis, character ideas, and audience impact.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around describing choices clearly, analysing effect, using drama language, and linking performance to meaning.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with performance reflection, short-answer questions, analysis prompts, and exam-style drama response practice.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Drama Revision Notes",
      body: "VCE Drama Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around dramatic elements, expressive skills, performance choices, character development, analysis language, and evaluation points so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Drama Flashcards",
      body: "VCE Drama Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For drama, flashcards are most useful when they target terms, performance techniques, dramatic elements, expressive skills, and example links. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Drama Quiz Practice",
      body: "VCE Drama Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around terminology, performance choices, dramatic analysis, character ideas, and audience impact. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Drama Exam Focus",
      body: "VCE Drama Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on describing choices clearly, analysing effect, using drama language, and linking performance to meaning. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Drama Exam Practice",
      body: "VCE Drama Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through performance reflection, short-answer questions, analysis prompts, and exam-style drama response practice. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Drama",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Drama because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Drama?",
      answer:
        "VCE Drama is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in drama through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Drama?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for drama topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Drama revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for dramatic elements, expressive skills, performance choices, character development, analysis language, and evaluation points. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with Drama performance analysis?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Drama Revision",
  ctaBody:
    "Studying VCE Drama becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the drama skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Drama",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
