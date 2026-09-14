import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const WACE_BUSINESS_MANAGEMENT_AND_ENTERPRISE: SubjectLandingContent = {
  path: "/australian-curriculum/western-australia/wace/business-management-and-enterprise",
  seoTitle: "WACE Business Management and Enterprise | Studiely",
  metaDescription:
    "Create WACE Business Management and Enterprise revision notes, flashcards, quizzes and exam practice with Studiely for Western Australian senior students.",
  shortDescription:
    "Studiely helps WACE Business Management and Enterprise students organise business management and enterprise topics into notes, recall practice, quizzes and exam-style preparation.",
  keywords: [
    "WACE Business Management and Enterprise",
    "revision notes",
    "flashcards",
    "quiz practice",
    "exam focus",
    "exam practice",
    "study help for WA students",
  ],
  breadcrumbName: "WACE Business Management and Enterprise",
  heroEyebrow: "Western Australia WACE",
  heroTitle: "WACE Business Management and Enterprise Study Help for",
  heroHighlight: "Revision, Recall & Exam Practice",
  lead:
    "Students can use Studiely for WACE Business Management and Enterprise to organise class notes, subject concepts, assessment skills and exam preparation into clear revision notes, flashcards, quizzes and exam-style practice. The page brings the main study tools together so Western Australian students can revise actively instead of only rereading notes.",
  introTitle:
    "Business Management and Enterprise becomes useful when students connect ideas to decisions, people and outcomes",
  introParagraphs: [
    "WACE Business Management and Enterprise students need a study system that helps them understand the subject, remember the right details and practise with purpose. Studiely gives WA senior students a structured way to turn business management and enterprise content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "A stronger routine should do more than store class material. It should help students decide what to revise next, check what they remember and apply knowledge under assessment conditions. For Western Australian Certificate of Education students, business management and enterprise becomes easier to manage when notes, recall, quick checks and practice questions work together.",
  ],
  coverTitle: "What Business Management and Enterprise Covers",
  coverIntro:
    "Business Management and Enterprise focuses on business environments, entrepreneurship, operations, marketing, management, change, innovation and decision-making. Students need to apply concepts to scenarios, explain strategies, use business terminology and evaluate decisions.",
  coverTopics: [
    "Business environments",
    "Entrepreneurship",
    "Operations",
    "Marketing",
    "Management",
    "Change",
    "Innovation",
    "Decision-making",
  ],
  coverClosing:
    "Because the subject involves both knowledge and application, revision should help students understand ideas and then use them in a way that matches assessment expectations. A useful business management and enterprise study routine should organise case details, stakeholder needs, performance indicators, strategy examples and business terminology. Students may know business terms but need to connect them to realistic decisions and consequences. Studiely supports that routine by helping students turn messy class material into focused study actions.",
  supportTitle: "How Studiely Helps WA Senior Students",
  supportParagraphs: [
    "Studiely helps with WACE Business Management and Enterprise by making study active. Students can move from a topic or class note into a study format that asks them to summarise, recall, test, focus and practise. This keeps revision connected to what they actually need to do in assessments.",
    "Studiely provides independent study support and is not affiliated with SCSA or any government education authority. Students should always follow the advice of their school and refer to official course materials where required.",
  ],
  supportRows: [
    {
      need: "Understand the course",
      support:
        "Break business management and enterprise ideas into clear notes and smaller study sections.",
    },
    {
      need: "Remember details",
      support:
        "Create flashcards for terminology, evidence, examples and key concepts.",
    },
    {
      need: "Check learning",
      support: "Use quizzes to find gaps before longer practice tasks.",
    },
    {
      need: "Prepare for assessment",
      support: "Focus on question type, command words, evidence and response planning.",
    },
    {
      need: "Practise application",
      support:
        "Work through exam-style prompts that require explanation, reasoning or response structure.",
    },
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Business Management and Enterprise",
      body: "Revision notes should not feel like a copied folder of class material. They should help students understand what matters, why it matters and how the idea could appear in an assessment. With Studiely, students can turn a topic, question, example or skill into a clearer set of notes for later review. For business management and enterprise, strong notes may include concept notes, strategy cards, case-study prompts, quiz checks and decision-making frameworks. The purpose is to make the subject easier to revisit. Instead of reading everything again, students can return to concise explanations, organised examples and reminders about the thinking process behind each task.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Business Management and Enterprise Flashcards",
      body: "Flashcards are useful when they make students retrieve information, not just look at it. Studiely can help students build cards for the details they need to recall quickly, including terms, examples, formulas, concepts, processes, techniques, cases or response cues depending on the subject. For this subject, flashcards work best when each card asks for a specific action: define a term, explain an idea, identify an example, remember a step or connect evidence to a response. That repeated recall builds confidence without turning study into passive rereading.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Better Recall",
      body: "Quizzes help students test understanding before they start a larger practice task. A short quiz can show whether a student remembers the key idea, can apply it to a question and can separate similar concepts. This matters because many students only notice a gap when they are already writing a response or solving a longer problem. Studiely can turn business management and enterprise topics into quick checks that support recall and decision-making. Students can use quizzes after revising a topic, before a practice response or as part of a weekly review routine.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for WACE Students",
      body: "Exam focus for WACE Business Management and Enterprise means knowing how to use subject knowledge under pressure. Students need to read the question carefully, choose relevant information and avoid writing everything they know when the task asks for a specific response. Studiely helps students narrow revision around case analysis, recommendation writing, evaluation, terminology accuracy and scenario-based responses. This gives students a clearer way to plan answers, check whether evidence fits the question and practise the type of thinking expected in senior assessment.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice becomes more useful when students review how they reached an answer, not only whether the final response looks complete. Studiely supports exam-style preparation by helping students generate practice prompts, organise response plans and revisit weaker areas after a quiz or written attempt. For business management and enterprise, exam-style practice may involve case analysis, recommendation writing, evaluation, terminology accuracy and scenario-based responses. Students can use Studiely to build a steady routine that moves from understanding to recall, from recall to application and from application to improvement.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for This Subject",
  whyParagraphs: [
    "Studiely is useful for Western Australian students because it keeps the main study actions in one place. The student can start with a topic, then create notes, flashcards, quizzes and practice material without rebuilding the study system from scratch each time.",
    "Studiely provides independent study support and is not affiliated with SCSA or any government education authority. Students should always follow the advice of their school and refer to official course materials where required.",
  ],
  faqs: [
    {
      question: "What is WACE Business Management and Enterprise?",
      answer:
        "This is a senior subject pathway for students completing the Western Australian Certificate of Education. It supports learning in business management and enterprise through knowledge, skills, application and assessment preparation.",
    },
    {
      question: "How can Studiely help with Business Management and Enterprise?",
      answer:
        "Studiely helps students convert business management and enterprise topics into revision notes, flashcards, quizzes, exam focus support and exam-style practice. This gives students a more active way to revise than reading the same notes repeatedly.",
    },
    {
      question: "Are flashcards useful for this subject?",
      answer:
        "Yes. Flashcards can help students recall case details, stakeholder needs, performance indicators, strategy examples and business terminology. They work best when students use them regularly and connect each answer to a bigger idea or assessment skill.",
    },
    {
      question: "Can students use Studiely for exam preparation?",
      answer:
        "Yes. Students can use Studiely to prepare for assessment by reviewing key topics, checking recall, focusing on question requirements and practising exam-style tasks. It works as an independent support tool alongside school guidance.",
    },
  ],
  ctaTitle: "Build a Better Study Routine",
  ctaBody:
    "Use Studiely to make WACE Business Management and Enterprise revision more organised, active and assessment-focused. Create notes, build flashcards, test understanding with quizzes and practise applying ideas before your next school task or exam.",
  ctaPrimaryLabel: "Start studying Business Management and Enterprise",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
