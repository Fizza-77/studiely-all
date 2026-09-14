import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const VCE_HEALTH_AND_HUMAN_DEVELOPMENT: SubjectLandingContent = {
  path: "/australian-curriculum/victoria/vce/health-and-human-development",
  seoTitle: "VCE Health and Human Development Study Resources | Studiely",
  metaDescription:
    "Create VCE Health and Human Development notes, flashcards, quizzes and exam practice with Studiely’s AI study tools for Victorian students.",
  shortDescription:
    "Studiely helps VCE Health and Human Development students create revision notes, flashcards, quizzes and exam practice from health and human development topics, skills and assessment practice.",
  keywords: [
    "VCE Health and Human Development",
    "VCE Health and Human Development resources",
    "VCE Health and Human Development revision notes",
    "VCE Health and Human Development flashcards",
    "VCE Health and Human Development quiz",
    "VCE Health and Human Development exam practice",
  ],
  breadcrumbName: "VCE Health and Human Development",
  heroEyebrow: "Victoria VCE",
  heroTitle: "VCE Health and Human Development Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "VCE Health and Human Development students can use Studiely to turn health and human development topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so Victorian senior students can revise actively instead of only rereading notes.",
  introTitle:
    "VCE Health and Human Development study works best when students have a clear system",
  introParagraphs: [
    "The subject is not just about getting through content; it is about understanding ideas, remembering the right details, and applying skills under assessment conditions. Studiely gives students one place to organise health, wellbeing, human development, indicators, global health, policy, and evidence-based explanation.",
    "For many Year 11 and Year 12 students, the challenge is not motivation. It is knowing what to revise next, how to test understanding, and how to move from class material into practice. A strong study workflow should help students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What VCE Health and Human Development Covers",
  coverIntro:
    "VCE Health and Human Development explores health, wellbeing, human development, health indicators, factors that influence health, global health, sustainability, and public health responses.",
  coverTopics: [
    "Health",
    "Wellbeing",
    "Human development",
    "Health indicators",
    "Factors influencing health",
    "Global health",
    "Sustainability",
    "Public health responses",
  ],
  coverClosing:
    "Students need to explain relationships clearly. Strong answers connect factors, indicators, programs, and outcomes rather than listing memorised points.",
  supportTitle: "How Studiely Helps with VCE Health and Human Development",
  supportParagraphs: [
    "Studiely supports VCE Health and Human Development by turning subject material into usable study formats. A student can start with a concept, text, formula, topic, case study, performance idea or practice question, then build revision tools around it. This matters because health and human development revision should not sit in separate piles of notes, worksheets and unfinished practice. The goal is to connect understanding with recall and application.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused notes for key definitions, health indicators, wellbeing dimensions, global health examples, program evaluation, and cause-effect explanations.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for definitions, indicators, dimensions, health terms, global examples, and comparison points.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes for terminology, factor-outcome links, indicator interpretation, program examples, and applied scenarios.",
    },
    {
      need: "Focus before assessments",
      support:
        "Break down exam priorities around using evidence, explaining relationships, applying examples, and writing precise evaluate-style answers.",
    },
    {
      need: "Practise application",
      support:
        "Prepare with short-answer drills, data-response questions, program evaluation prompts, and timed HHD exam practice.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support for students and is not affiliated with VCAA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "VCE Health and Human Development Revision Notes",
      body: "VCE Health and Human Development Revision Notes should make the subject easier to review, not harder to manage. With Studiely, students can create notes around key definitions, health indicators, wellbeing dimensions, global health examples, program evaluation, and cause-effect explanations so revision becomes specific and useful. Good notes do more than repeat a textbook or class slide. They help students see the structure of a topic, the important vocabulary, the links between ideas, and the kinds of answers or explanations they may need to produce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "VCE Health and Human Development Flashcards",
      body: "VCE Health and Human Development Flashcards help students practise active recall. Instead of reading the same page multiple times, students can check whether they can remember, explain and apply the information without looking. For health and human development, flashcards are most useful when they target definitions, indicators, dimensions, health terms, global examples, and comparison points. This makes quick revision more focused and helps students identify gaps before an assessment.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "VCE Health and Human Development Quiz Practice",
      body: "VCE Health and Human Development Quiz gives students a faster way to test their understanding before moving into longer practice. Quizzes are useful because they reveal weak areas early. Studiely can support quiz practice around terminology, factor-outcome links, indicator interpretation, program examples, and applied scenarios. Students can then return to the exact point that needs review instead of revising everything again.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "VCE Health and Human Development Exam Focus",
      body: "VCE Health and Human Development Exam Focus is about narrowing revision to what matters most. Students often know a topic broadly, but assessments usually test whether they can use that knowledge in a precise way. Studiely helps students focus on using evidence, explaining relationships, applying examples, and writing precise evaluate-style answers. This gives revision direction and helps reduce the habit of memorising content without knowing how it will be used.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "VCE Health and Human Development Exam Practice",
      body: "VCE Health and Human Development Exam Practice turns revision into application. Practice helps students build timing, accuracy, confidence and familiarity with the kinds of tasks they may face. With Studiely, students can prepare through short-answer drills, data-response questions, program evaluation prompts, and timed HHD exam practice. This helps them move from recognition to performance, which is where strong study habits become visible.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for VCE Health and Human Development",
  whyParagraphs: [
    "Students use Studiely because it keeps revision active. Instead of storing information in one long document, it helps students convert learning into notes, flashcards, quizzes and practice. This is especially helpful for VCE Health and Human Development because the subject rewards both understanding and application. Students need to know the content, but they also need to practise using it in structured, assessment-ready ways.",
  ],
  faqs: [
    {
      question: "What is VCE Health and Human Development?",
      answer:
        "VCE Health and Human Development is a Victorian Certificate of Education subject area for senior secondary students in Victoria. It helps students build knowledge and skills in health and human development through class learning, assessment tasks and exam preparation.",
    },
    {
      question: "How can Studiely help with VCE Health and Human Development?",
      answer:
        "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam practice for health and human development topics. This gives students a more active way to revise instead of only rereading notes.",
    },
    {
      question:
        "Can I use Studiely for VCE Health and Human Development revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused notes for key definitions, health indicators, wellbeing dimensions, global health examples, program evaluation, and cause-effect explanations. These notes can make revision more organised and easier to apply in assessments.",
    },
    {
      question: "Can Studiely help with HHD definitions and examples?",
      answer:
        "Yes. Studiely can help students break this area into smaller study tasks, test their understanding, and practise applying ideas in a clearer, more structured way.",
    },
    {
      question: "Is Studiely an official VCE or VCAA resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with VCAA or any government education authority.",
    },
  ],
  ctaTitle: "Start Building Better VCE Health and Human Development Revision",
  ctaBody:
    "Studying VCE Health and Human Development becomes easier when revision has structure. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the health and human development skills and topics you need to improve.",
  ctaPrimaryLabel: "Start studying Health and Human Development",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
