import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_PHYSICAL_EDUCATION: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/physical-education",
  seoTitle: "VCE Physical Education Study Resources | Studiely",
  metaDescription:
    "Create VCE Physical Education notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Physical Education students create revision notes, flashcards, quizzes and exam practice from physical education topics, skills and assessment practice.",
  keywords: [
    "VCE Physical Education",
    "VCE Physical Education resources",
    "VCE Physical Education revision notes",
    "VCE Physical Education flashcards",
    "VCE Physical Education quiz",
    "VCE Physical Education exam practice",
  ],
  breadcrumbName: "VCE Physical Education",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Physical Education Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Physical Education students can use Studiely to turn physical education topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle:
    "VCE Physical Education study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise movement, body systems, training principles, performance analysis, data, and applied sport science.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Physical Education Covers",
  coverIntro:
    "VCE Physical Education examines how the body moves, responds and adapts to physical activity. Students explore body systems, biomechanics, energy systems, training principles, performance analysis, and data.",
  coverTopics: [
    "Body systems",
    "Biomechanics",
    "Energy systems",
    "Training principles",
    "Performance analysis",
    "Data",
  ],
  coverClosing:
    "Students need to apply concepts to sporting examples, movement data, training programs, and performance scenarios rather than simply memorising definitions.",
  supportTitle: "How Studiely Helps with VCE Physical Education",
  supportParagraphs: [
    "Studiely supports VCE Physical Education by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because physical education revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for body systems, energy systems, training principles, biomechanics, data analysis, and performance examples.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for definitions, system functions, training terms, energy-system features, and movement-analysis cues.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for concept recall, scenario application, data interpretation, training decisions, and performance analysis.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around using examples, explaining cause-effect links, interpreting data, and applying concepts to movement contexts.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with short-answer questions, graph tasks, scenario prompts, and exam-style PE application questions.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Physical Education Revision Notes",
      body: "VCE Physical Education Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around body systems, energy systems, training principles, biomechanics, data analysis, and performance examples so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Physical Education Flashcards",
      body: "VCE Physical Education Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For physical education, flashcards are most useful when they target definitions, system functions, training terms, energy-system features, and movement-analysis cues. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Physical Education Quiz Practice",
      body: "VCE Physical Education Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around concept recall, scenario application, data interpretation, training decisions, and performance analysis. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Physical Education Exam Focus",
      body: "VCE Physical Education Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on using examples, explaining cause-effect links, interpreting data, and applying concepts to movement contexts. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Physical Education Exam Practice",
      body: "VCE Physical Education Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through short-answer questions, graph tasks, scenario prompts, and exam-style PE application questions. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Physical Education",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Physical Education because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Physical Education?",
      answer:
        "VCE Physical Education is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in physical education through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Physical Education?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for physical education topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question: "Can I use Studiely for VCE Physical Education revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for body systems, energy systems, training principles, biomechanics, data analysis, and performance examples. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with Physical Education energy systems?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Physical Education Revision",
  ctaBody:
    "Studying VCE Physical Education becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the physical education skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Physical Education",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
