import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_ENGLISH: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/english",
  seoTitle: "IB PYP English Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP English study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP English resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP English",
    "PYP English resources",
    "PYP English activities",
    "IB PYP English learning resources",
    "IB PYP English practice activities",
    "IB PYP English revision notes",
    "IB PYP English flashcards",
    "IB PYP English quiz",
    "IB PYP English practice questions",
    "IB PYP English exam focus",
    "IB PYP English exam practice",
    "IB PYP English study resources",
  ],
  breadcrumbName: "English",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP English Resources for",
  heroHighlight: "Reading, Writing & Practice",
  heroIntro:
    "Build stronger reading, writing, speaking and text-response habits without turning primary learning into a memorisation exercise. Studiely helps PYP learners organise ideas, recall language, check understanding and reflect on what they can do next.",
  lead: "IB PYP English supports learners as they make meaning from texts, communicate ideas and use language across inquiry. Studiely can turn class topics and reading material into clear notes, flashcards, short quizzes and age-appropriate practice so students revisit ideas actively rather than only rereading them.",
  workflowSteps: [
    {
      title: "Reading + meaning",
      body: "Find main ideas and support them with useful details from the text.",
    },
    {
      title: "Writing + communication",
      body: "Plan sentences and paragraphs for a clear purpose and audience.",
    },
    {
      title: "Inquiry + reflection",
      body: "Explain ideas in your own words and improve from feedback in small steps.",
    },
  ],
  introTitle: "What IB PYP English Looks Like in PYP Learning",
  introParagraphs: [
    "English in the Primary Years Programme works best when language is used for real purposes: reading to discover, writing to explain, speaking to share a viewpoint, listening to understand another person and responding creatively to texts. The wider PYP framework is inquiry-based and transdisciplinary, so language development can connect with science, social studies, the arts and a unit of inquiry rather than sitting in a separate revision box. This page is aimed at Grade 1–5 learners, while recognising that the official PYP framework covers a broader age range.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Language habits that help learners explain ideas clearly across PYP inquiry.",
  coverTopics: [
    "finding main ideas and useful details in age-appropriate texts",
    "building vocabulary through context instead of isolated word lists",
    "planning sentences and paragraphs for a clear purpose and audience",
    "using speaking and listening to explain, question and respond",
    "noticing how authors use structure, description and word choice",
    "reflecting on feedback and improving a response in manageable steps",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for English",
      body: "For English, revision notes should preserve meaning rather than flatten a story or topic into definitions. A useful note can record the central idea, key evidence, new vocabulary, a short explanation of author choice and one question the learner still has. Studiely can help students turn a reading passage, class topic or teacher prompt into concise notes they can return to before the next task.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "English Flashcards for Active Recall",
      body: "Flashcards are most useful for active recall: a word on one side and a student-friendly meaning, example or clue on the other. They can also prompt sentence openings, text features, punctuation choices or “what happened and why?” questions. Short, mixed review sessions make recall feel purposeful without replacing actual reading and writing.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP English Quiz should check understanding in small steps. Students can answer questions about vocabulary, main ideas, inference, sequence, grammar or a text feature, then use feedback to identify what needs another look. A quiz becomes more valuable when the learner explains why an answer works instead of simply collecting a score.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Choose the English Skill That Needs Attention",
      body: "Studiely’s Exam Focus label can be used in PYP as a review-focus tool rather than formal exam coaching. For English, it can surface the reading skill, writing habit or vocabulary set that needs attention before a school task, conference or classroom assessment. This keeps the emphasis on learning progress and reflection.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open review focus",
    },
    {
      id: "exam-practice",
      title: "Practise Reading and Writing in Short Tasks",
      body: "Practice is best interpreted as age-appropriate practice, not a DP-style mock exam. Students might respond to a short passage, improve a paragraph, organise ideas for a presentation or answer a few comprehension questions under light time guidance. The goal is confidence with familiar learning tasks, not high-stakes test pressure.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise short tasks",
    },
  ],
  afterToolsSections: [
    {
      title: "Turn Reading Into Something You Can Explain",
      paragraphs: [
        "A strong PYP English routine begins with one short text or class idea. First, the learner names what the text is mainly doing. Next, they collect two or three details that support that idea. Then they create a few flashcards from vocabulary or text features, complete a short quiz and finish by writing or saying a two-sentence explanation in their own words. That final explanation is the proof that the reading has become understanding.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "Keep the weekly rhythm small: one short note, five flashcards, a quick quiz and one reading, speaking or writing task that reuses the same idea. Correct mistakes in full sentences, then explain the idea without notes. The sequence is understand, retrieve, apply, reflect.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP English",
  whyParagraphs: [
    "Many high-ranking PYP English resources are built for teachers, printables or chapter notes. A student also needs a repeatable way to move from “I saw this in class” to “I can explain it myself.” Studiely closes that gap with a simple loop: capture, retrieve, apply and reflect.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "What does IB PYP English focus on?",
      answer:
        "It develops communication through reading, writing, speaking, listening, viewing and responding to language in meaningful contexts. The exact classroom programme varies by school, but inquiry, conceptual understanding and communication are central to the wider PYP approach.",
    },
    {
      question: "Can Studiely help with PYP English reading?",
      answer:
        "Yes. Students can organise a passage into key ideas, vocabulary, evidence and questions, then use flashcards and quizzes to revisit what they understood. It should support real reading, not replace books, discussion or teacher feedback.",
    },
    {
      question: "Are flashcards useful for primary English?",
      answer:
        "They can be when the prompts are short and meaningful. Vocabulary, text features, punctuation, sentence patterns and comprehension cues work well because students must retrieve an answer rather than recognise it on a page.",
    },
    {
      question: "Does PYP English have formal exam preparation?",
      answer:
        "PYP learning is not designed around the same formal examination model as the Diploma Programme. On Studiely, exam-focus and exam-practice tools should be used as simple review and classroom-assessment practice where appropriate.",
    },
    {
      question: "Who is this page for?",
      answer:
        "It is designed for Grade 1–5 PYP learners and families looking for structured English study support. Teachers remain the best source for the specific unit expectations, texts and assessment tasks used at a student’s school.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP English",
  ctaBody:
    "Bring your next PYP English topic into Studiely and turn it into notes, recall prompts, a short quiz and focused practice you can actually explain back.",
  ctaPrimaryLabel: "Start studying PYP English",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
