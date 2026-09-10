import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const HSC_MANDARIN: SubjectLandingContent = {
  path: "/australian-curriculum/nsw/hsc/mandarin",
  seoTitle: "HSC Mandarin Study Resources | Studiely",
  metaDescription:
    "Create HSC Mandarin revision notes, flashcards, quizzes and exam practice with Studiely for NSW HSC students.",
  shortDescription:
    "Studiely helps HSC Mandarin students organise mandarin topics into revision notes, flashcards, quizzes, exam focus support and exam practice.",
  keywords: [
    "HSC Mandarin resources",
    "HSC Mandarin revision notes",
    "HSC Mandarin flashcards",
    "HSC Mandarin quiz",
    "HSC Mandarin exam practice",
  ],
  breadcrumbName: "HSC Mandarin",
  heroEyebrow: "NSW HSC",
  heroTitle: "HSC Mandarin Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "HSC Mandarin students can use Studiely to turn mandarin topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so NSW senior students can revise actively instead of only rereading notes.",
  introTitle: "Strong HSC language study starts with regular recall and real communication",
  introParagraphs: [
    "Students need to build vocabulary, grammar, comprehension and confidence across several skill areas. HSC Mandarin students often know they need to revise, but they may not know what to revise first, how to test understanding, or how to turn class material into practice. Studiely gives students one place to organise mandarin content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Year 11 and Year 12 students, the challenge is not always effort. It is direction. Mandarin study improves when students practise recognition, recall and communication in the same routine. A stronger study system helps students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What HSC Mandarin Covers",
  coverIntro:
    "HSC Mandarin focuses on listening, reading, writing, speaking, characters, tones, vocabulary, sentence patterns, culture and communication strategies. The subject expects students to understand core ideas and then apply them through structured responses, tasks, problems, performances, projects or exam-style questions depending on the course.",
  coverTopics: [
    "Listening",
    "Reading",
    "Writing",
    "Speaking",
    "Characters",
    "Tones",
    "Vocabulary",
    "Sentence patterns",
    "Culture",
    "Communication strategies",
  ],
  coverClosing:
    "Students often find mandarin difficult because it requires more than memory. The real challenge is remembering characters, tones and sentence patterns while communicating clearly. That is why revision should connect content knowledge with active recall, question practice and assessment focus.",
  supportTitle: "How Studiely Helps with HSC Mandarin",
  supportParagraphs: [
    "Studiely supports the full study process for HSC Mandarin. Students can begin with a topic, module, concept, skill or class note, then convert it into different study formats. This makes revision more active and helps students see what they understand before they move into longer practice.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clear revision notes for character sets, vocabulary topics, grammar patterns, tone notes, cultural examples and response models.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for characters, pinyin, tones, vocabulary, measure words, sentence patterns and speaking cues.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes that tests recognition, recall, grammar, comprehension and sentence building.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus on character accuracy, listening detail, reading comprehension, writing control and speaking preparation.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Work through character drills, writing prompts, speaking practice, listening-style checks and reading responses.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with NESA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "HSC Mandarin Revision Notes",
      body: "Revision notes for HSC Mandarin should make the subject easier to use, not just longer to read. Studiely helps students create focused notes for character sets, vocabulary topics, grammar patterns, tone notes, cultural examples and response models. These notes can reduce scattered revision and give students a clearer view of what each topic or skill requires. A useful note does not simply copy class content. It highlights key ideas, explains relationships and gives students a way to return to the material quickly. In mandarin, this helps students revise with purpose before homework, school assessments or HSC exam preparation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "HSC Mandarin Flashcards",
      body: "Flashcards work best when students use them for active recall. Studiely can help students create HSC Mandarin flashcards for characters, pinyin, tones, vocabulary, measure words, sentence patterns and speaking cues. This gives students a faster way to check whether they can remember the detail before they need to apply it.",
      bullets: [
        "review important mandarin terms and ideas",
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
      title: "HSC Mandarin Quiz Practice",
      body: "Quizzes help students check understanding before they attempt longer responses or exam-style tasks. Studiely can create quiz practice that tests recognition, recall, grammar, comprehension and sentence building. This helps students identify gaps early, while there is still time to revise the topic properly. For HSC Mandarin, quiz practice also encourages students to think actively. Instead of assuming they know a topic because it looks familiar, students can test whether they can recall, explain and apply it without support.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "HSC Mandarin Exam Focus",
      body: "Exam focus helps students move from general revision into targeted preparation. Studiely helps students focus on character accuracy, listening detail, reading comprehension, writing control and speaking preparation. This matters because HSC questions usually reward students who answer the task directly and use relevant evidence, working or examples. A focused revision session should help students ask: what is this question really asking, what knowledge do I need, what structure will help, and what mistakes should I avoid? Studiely supports that thinking so students can approach mandarin study with more control.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "HSC Mandarin Exam Practice",
      body: "Practice turns revision into performance. For HSC Mandarin, students can use Studiely to support character drills, writing prompts, speaking practice, listening-style checks and reading responses. This gives students a way to move beyond passive reading and into the kind of thinking they need for school assessments and HSC preparation. The strongest practice routine combines short checks with longer tasks. Students can review a concept, test it with flashcards or quizzes, then apply it in a practice response or problem. That sequence helps build confidence without turning study into last-minute cramming.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for HSC Mandarin",
  whyParagraphs: [
    "Students use Studiely because it keeps mandarin study organised and active. The platform helps students build vocabulary, grammar, comprehension and communication confidence, while still keeping the workflow simple enough to use during a busy school week.",
  ],
  whyBullets: [
    "Create clearer HSC Mandarin revision notes from class material",
    "Build flashcards for fast active recall",
    "Use quizzes to check understanding before assessments",
    "Focus on exam-style questions and response expectations",
    "Practise applying knowledge instead of only rereading notes",
  ],
  faqs: [
    {
      question: "What is HSC Mandarin?",
      answer:
        "HSC Mandarin is a senior HSC subject studied by students in New South Wales. It develops listening, reading, writing, speaking, characters, tones, vocabulary, sentence patterns, culture and communication strategies, and it asks students to apply knowledge in assessment and exam-style tasks rather than only remember content.",
    },
    {
      question: "How can Studiely help with HSC Mandarin?",
      answer:
        "Studiely helps students turn mandarin content into revision notes, flashcards, quizzes, exam focus support and exam practice. This gives students one organised workflow for understanding, recall, checking and application.",
    },
    {
      question: "Can I use Studiely for HSC Mandarin revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused revision notes for character sets, vocabulary topics, grammar patterns, tone notes, cultural examples and response models. The aim is to make revision clearer, shorter and easier to use before assessments.",
    },
    {
      question: "Are flashcards useful for HSC Mandarin?",
      answer:
        "Flashcards can help when students use them for active recall. In HSC Mandarin, they can support quick review of characters, pinyin, tones, vocabulary, measure words, sentence patterns and speaking cues, so students do not rely only on rereading long notes.",
    },
    {
      question: "Is Studiely an official HSC or NESA resource?",
      answer:
        "No. Studiely provides independent study support for students and is not affiliated with NESA or any government education authority. Students should still follow their school guidance and official course requirements.",
    },
  ],
  ctaTitle: "Start Studying HSC Mandarin with More Structure",
  ctaBody:
    "HSC Mandarin becomes easier to manage when students have a study system that supports understanding, recall, checking, focus and practice. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the mandarin topics you need to improve.",
  ctaPrimaryLabel: "Start studying Mandarin",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
