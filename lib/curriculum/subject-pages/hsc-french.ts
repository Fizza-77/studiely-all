import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const HSC_FRENCH: SubjectLandingContent = {
  path: "/australian-curriculum/nsw/hsc/french",
  seoTitle: "HSC French Study Resources | Studiely",
  metaDescription:
    "Create HSC French revision notes, flashcards, quizzes and exam practice with Studiely for NSW HSC students.",
  shortDescription:
    "Studiely helps HSC French students organise french topics into revision notes, flashcards, quizzes, exam focus support and exam practice.",
  keywords: [
    "HSC French resources",
    "HSC French revision notes",
    "HSC French flashcards",
    "HSC French quiz",
    "HSC French exam practice",
  ],
  breadcrumbName: "HSC French",
  heroEyebrow: "NSW HSC",
  heroTitle: "HSC French Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "HSC French students can use Studiely to turn french topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so NSW senior students can revise actively instead of only rereading notes.",
  introTitle: "Strong HSC language study starts with regular recall and real communication",
  introParagraphs: [
    "Students need to build vocabulary, grammar, comprehension and confidence across several skill areas. HSC French students often know they need to revise, but they may not know what to revise first, how to test understanding, or how to turn class material into practice. Studiely gives students one place to organise french content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Year 11 and Year 12 students, the challenge is not always effort. It is direction. Language study improves when students practise recall, accuracy and communication together. A stronger study system helps students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What HSC French Covers",
  coverIntro:
    "HSC French focuses on listening, reading, writing, speaking, grammar, vocabulary, culture, prescribed themes and communication strategies. The subject expects students to understand core ideas and then apply them through structured responses, tasks, problems, performances, projects or exam-style questions depending on the course.",
  coverTopics: [
    "Listening",
    "Reading",
    "Writing",
    "Speaking",
    "Grammar",
    "Vocabulary",
    "Culture",
    "Prescribed themes",
    "Communication strategies",
  ],
  coverClosing:
    "Students often find french difficult because it requires more than memory. The real challenge is building vocabulary and grammar while staying accurate under exam pressure. That is why revision should connect content knowledge with active recall, question practice and assessment focus.",
  supportTitle: "How Studiely Helps with HSC French",
  supportParagraphs: [
    "Studiely supports the full study process for HSC French. Students can begin with a topic, module, concept, skill or class note, then convert it into different study formats. This makes revision more active and helps students see what they understand before they move into longer practice.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clear revision notes for topic vocabulary, grammar patterns, sentence structures, cultural examples and response models.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for vocabulary, verb forms, connectors, idioms, question words and speaking prompts.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes that tests vocabulary, grammar, comprehension and sentence construction.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus on listening focus, reading detail, writing structure, speaking preparation and error checking.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Work through short written responses, speaking prompts, listening-style questions and reading comprehension practice.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with NESA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "HSC French Revision Notes",
      body: "Revision notes for HSC French should make the subject easier to use, not just longer to read. Studiely helps students create focused notes for topic vocabulary, grammar patterns, sentence structures, cultural examples and response models. These notes can reduce scattered revision and give students a clearer view of what each topic or skill requires. A useful note does not simply copy class content. It highlights key ideas, explains relationships and gives students a way to return to the material quickly. In french, this helps students revise with purpose before homework, school assessments or HSC exam preparation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "HSC French Flashcards",
      body: "Flashcards work best when students use them for active recall. Studiely can help students create HSC French flashcards for vocabulary, verb forms, connectors, idioms, question words and speaking prompts. This gives students a faster way to check whether they can remember the detail before they need to apply it.",
      bullets: [
        "review important french terms and ideas",
        "turn long notes into quick recall prompts",
        "practise before assessments without rereading everything",
        "spot weak areas that need another round of revision",
      ],
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "HSC French Quiz Practice",
      body: "Quizzes help students check understanding before they attempt longer responses or exam-style tasks. Studiely can create quiz practice that tests vocabulary, grammar, comprehension and sentence construction. This helps students identify gaps early, while there is still time to revise the topic properly. For HSC French, quiz practice also encourages students to think actively. Instead of assuming they know a topic because it looks familiar, students can test whether they can recall, explain and apply it without support.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "HSC French Exam Focus",
      body: "Exam focus helps students move from general revision into targeted preparation. Studiely helps students focus on listening focus, reading detail, writing structure, speaking preparation and error checking. This matters because HSC questions usually reward students who answer the task directly and use relevant evidence, working or examples. A focused revision session should help students ask: what is this question really asking, what knowledge do I need, what structure will help, and what mistakes should I avoid? Studiely supports that thinking so students can approach french study with more control.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "HSC French Exam Practice",
      body: "Practice turns revision into performance. For HSC French, students can use Studiely to support short written responses, speaking prompts, listening-style questions and reading comprehension practice. This gives students a way to move beyond passive reading and into the kind of thinking they need for school assessments and HSC preparation. The strongest practice routine combines short checks with longer tasks. Students can review a concept, test it with flashcards or quizzes, then apply it in a practice response or problem. That sequence helps build confidence without turning study into last-minute cramming.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for HSC French",
  whyParagraphs: [
    "Students use Studiely because it keeps french study organised and active. The platform helps students build vocabulary, grammar, comprehension and communication confidence, while still keeping the workflow simple enough to use during a busy school week.",
  ],
  whyBullets: [
    "Create clearer HSC French revision notes from class material",
    "Build flashcards for fast active recall",
    "Use quizzes to check understanding before assessments",
    "Focus on exam-style questions and response expectations",
    "Practise applying knowledge instead of only rereading notes",
  ],
  faqs: [
    {
      question: "What is HSC French?",
      answer:
        "HSC French is a senior HSC subject studied by students in New South Wales. It develops listening, reading, writing, speaking, grammar, vocabulary, culture, prescribed themes and communication strategies, and it asks students to apply knowledge in assessment and exam-style tasks rather than only remember content.",
    },
    {
      question: "How can Studiely help with HSC French?",
      answer:
        "Studiely helps students turn french content into revision notes, flashcards, quizzes, exam focus support and exam practice. This gives students one organised workflow for understanding, recall, checking and application.",
    },
    {
      question: "Can I use Studiely for HSC French revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused revision notes for topic vocabulary, grammar patterns, sentence structures, cultural examples and response models. The aim is to make revision clearer, shorter and easier to use before assessments.",
    },
    {
      question: "Are flashcards useful for HSC French?",
      answer:
        "Flashcards can help when students use them for active recall. In HSC French, they can support quick review of vocabulary, verb forms, connectors, idioms, question words and speaking prompts, so students do not rely only on rereading long notes.",
    },
    {
      question: "Is Studiely an official HSC or NESA resource?",
      answer:
        "No. Studiely provides independent study support for students and is not affiliated with NESA or any government education authority. Students should still follow their school guidance and official course requirements.",
    },
  ],
  ctaTitle: "Start Studying HSC French with More Structure",
  ctaBody:
    "HSC French becomes easier to manage when students have a study system that supports understanding, recall, checking, focus and practice. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the french topics you need to improve.",
  ctaPrimaryLabel: "Start studying French",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
