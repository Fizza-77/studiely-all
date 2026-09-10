import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_MUSIC: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/music",
  seoTitle: "VCE Music Study Resources | Studiely",
  metaDescription:
    "Create VCE Music notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Music students create revision notes, flashcards, quizzes and exam practice from music topics, skills and assessment practice.",
  keywords: [
    "VCE Music",
    "VCE Music resources",
    "VCE Music revision notes",
    "VCE Music flashcards",
    "VCE Music quiz",
    "VCE Music exam practice",
  ],
  breadcrumbName: "VCE Music",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Music Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Music students can use Studiely to turn music topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle: "VCE Music study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise performance, listening, aural analysis, repertoire, composition, interpretation, and music language.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Music Covers",
  coverIntro:
    "VCE Music can involve performance, repertoire, contemporary performance, inquiry, composition, listening, aural analysis, interpretation, and written explanation of musical ideas.",
  coverTopics: [
    "Performance",
    "Repertoire",
    "Contemporary performance",
    "Inquiry",
    "Composition",
    "Listening",
    "Aural analysis",
    "Interpretation",
    "Written explanation of musical ideas",
  ],
  coverClosing:
    "Students often need to connect practical skill with musical language. It is not enough to perform or listen; students must explain choices, techniques, style, and structure.",
  supportTitle: "How Studiely Helps with VCE Music",
  supportParagraphs: [
    "Studiely supports VCE Music by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because music revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for music elements, repertoire notes, aural analysis, performance goals, stylistic features, composition ideas, and terminology.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for music terms, aural features, symbols, style characteristics, performance reminders, and listening cues.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for aural recognition, terminology, style identification, structure, technique, and interpretation.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around analysing excerpts, explaining musical decisions, preparing written responses, and linking listening to terminology.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with listening drills, terminology checks, performance reflection prompts, and exam-style music analysis.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Music Revision Notes",
      body: "VCE Music Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around music elements, repertoire notes, aural analysis, performance goals, stylistic features, composition ideas, and terminology so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Music Flashcards",
      body: "VCE Music Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For music, flashcards are most useful when they target music terms, aural features, symbols, style characteristics, performance reminders, and listening cues. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Music Quiz Practice",
      body: "VCE Music Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around aural recognition, terminology, style identification, structure, technique, and interpretation. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Music Exam Focus",
      body: "VCE Music Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on analysing excerpts, explaining musical decisions, preparing written responses, and linking listening to terminology. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Music Exam Practice",
      body: "VCE Music Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through listening drills, terminology checks, performance reflection prompts, and exam-style music analysis. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Music",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Music because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Music?",
      answer:
        "VCE Music is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in music through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Music?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for music topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Music revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for music elements, repertoire notes, aural analysis, performance goals, stylistic features, composition ideas, and terminology. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with VCE Music aural revision?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Music Revision",
  ctaBody:
    "Studying VCE Music becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the music skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Music",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
