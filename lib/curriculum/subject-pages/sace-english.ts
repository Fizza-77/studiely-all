import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const SACE_ENGLISH: SubjectLandingContent = {
  path: "/australian-curriculum/south-australia/sace/english",
  seoTitle: "SACE English Study Resources | Studiely",
  metaDescription: "Create SACE English revision notes, flashcards, quizzes and exam practice with Studiely's AI study tools for South Australian students.",
  shortDescription: "Studiely helps SACE English students create revision notes, flashcards, quizzes and exam practice for SACE assessment preparation.",
  keywords: [
    "SACE English",
    "English resources",
    "revision notes",
    "flashcards",
    "quiz practice",
    "exam focus",
    "exam-style practice",
  ],
  breadcrumbName: "SACE English",
  heroEyebrow: "South Australia SACE",
  heroTitle: "SACE English Study Support for",
  heroHighlight: "Notes, Flashcards and Exam Practice",
  lead: "SACE English students can use Studiely to turn texts, perspectives, audience, purpose, language choices, context, argument, and response structure into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. The page brings the main study tools together so South Australian students can revise actively, check understanding and prepare for SACE assessment tasks with more direction.",
  introTitle: "Study English with a clearer South Australian senior pathway",
  introParagraphs: [
    "Senior study works best when students can turn a broad subject into small, usable actions. For English, that means knowing the course content and also knowing how to use it in tasks, investigations, performances, written responses or exam-style questions. SACE English is easier to manage when students break topics into clear explanations, quick recall prompts and focused practice instead of leaving everything for the week before a deadline.",
    "Studiely is designed for that kind of practical study routine. It helps students organise reading, viewing, writing, and communication into resources they can review, test and apply. The goal is not to replace classroom teaching; the goal is to make independent revision clearer, more active and more useful between lessons.",
  ],
  coverTitle: "What This Subject Covers",
  coverIntro: "English focuses on reading, viewing, writing, and communication.",
  coverTopics: [
    "Texts",
    "Perspectives",
    "Audience",
    "Purpose",
    "Language Choices",
    "Context",
    "Argument",
    "Response Structure",
  ],
  coverClosing: "That mix of knowledge and skill can feel broad at first, but it becomes more manageable when students turn each topic into a simple study pathway: understand the idea, remember the key details, practise applying it, then review the response. In South Australia, senior students also need to pay attention to how learning is assessed. The SACE approach places value on subject knowledge, performance standards, school-based work and, in many subjects, externally assessed components. Because of that, revision should help students do more than memorise facts. It should help them explain, justify, calculate, analyse, create, perform or evaluate depending on the subject. A common difficulty is this: Many students understand a text in discussion but lose direction when they have to turn that understanding into a controlled written response. Studiely helps reduce that gap by turning messy content into organised study material that students can return to throughout the term.",
  supportTitle: "How Studiely Helps Students Study",
  supportParagraphs: [
    "Studiely gives students a single study workflow rather than a folder of disconnected notes. A student can start with a topic, class summary, practice question, assessment focus or set of key terms, then build a revision flow around it. That makes the study process more active and less dependent on passive rereading.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support: "Clarify difficult ideas in clear interpretation and purposeful writing",
    },
    {
      need: "Remember key details",
      support: "Turn key points into revision notes and recall prompts",
    },
    {
      need: "Check understanding",
      support: "Check understanding with short quizzes before longer practice",
    },
    {
      need: "Prepare for assessment",
      support: "Focus revision around assessment expectations and response quality",
    },
    {
      need: "Practise applying knowledge",
      support: "Build exam-style or task-style practice without starting from a blank page",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with the SACE Board or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for English",
      body: "Revision notes should make the subject easier to think with, not just easier to store. For SACE English, students can use Studiely to create notes that explain major ideas, define important terms, connect examples and show why a concept matters in an assessment context. This is especially helpful for comparative planning, paragraph development, quote selection, language analysis, and timed response rehearsal. Instead of keeping long class notes that are hard to review, students can create compact explanations, topic summaries and comparison notes that support the exact kind of thinking the subject requires.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "Flashcards work best when they force students to retrieve information, not simply recognise it. In English, useful flashcards might ask for a definition, a process, a formula, a technique, a case example, a term, a method step or a reason behind a decision. Studiely can turn topic content into short recall cards so students can review in quick sessions. This helps them notice weak spots earlier, especially when similar ideas sound easy during reading but become harder when they have to explain them without notes.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Checking Gaps",
      body: "A quiz gives students fast feedback before they move into larger tasks. With SACE English, quiz practice can target key terms, concepts, source or data interpretation, process steps, response planning and subject-specific application. This keeps revision practical because students can see what they need to revisit. Short quizzes also help students avoid false confidence. If they can answer questions clearly, they are more ready for practice. If they cannot, the next revision step becomes obvious: review the concept, rebuild the note, test again and then apply it in a longer response.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus and Assessment Preparation",
      body: "Exam focus is not only about predicting questions. It is about knowing what the task is asking and what a strong answer needs to show. For English, that may include accuracy, explanation, evidence, calculation, evaluation, creative process, performance reflection or communication quality. Studiely helps students narrow their attention before they practise. They can identify the topic, list what they must remember, review the skills attached to the task and plan how to respond. This approach makes SACE English revision more targeted and less stressful because students know why they are practising each part.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice matters because students need to use knowledge under task conditions. Studiely supports exam-style and assessment-style preparation by helping students create prompts, review response plans and practise applying ideas in a structured way. Strong practice for this subject can include comparative planning, paragraph development, quote selection, language analysis, and timed response rehearsal. The point is not to complete random questions. The point is to practise the same thinking patterns students need in SACE tasks: understand the focus, choose relevant knowledge, explain clearly and improve after review.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for English",
  whyParagraphs: [
    "Students use Studiely when they want a clearer study routine for clear interpretation and purposeful writing. It helps them turn content into revision notes, flashcards, quizzes, exam focus support and practice without losing the subject-specific detail that matters.",
    "The best routine is simple: learn the idea, summarise it, test it, apply it and return to it later. Studiely keeps those steps connected, which makes revision feel less scattered and more purposeful across the school year.",
  ],
  faqs: [
    {
      question: "What is SACE English?",
      answer: "SACE English is a senior subject pathway within the South Australian Certificate of Education. It helps students develop knowledge and skills in reading, viewing, writing, and communication, with assessment tasks that require students to understand ideas and apply them in subject-specific ways.",
    },
    {
      question: "How can Studiely help with English?",
      answer: "Studiely helps students create revision notes, flashcards, quizzes, exam focus support and exam-style practice for English. This gives students a more active way to revise because they can move from understanding to recall and then into application.",
    },
    {
      question: "Can I use Studiely before an assessment?",
      answer: "Yes. Students can use Studiely before an assessment to organise topics, identify weak areas, practise key terms and plan responses. It works best when students use it regularly rather than only at the last minute.",
    },
    {
      question: "Does Studiely replace official SACE materials?",
      answer: "No. Students should always follow their teacher's guidance and official subject information. Studiely provides independent study support and helps students revise more clearly, but it is not an official SACE Board resource.",
    },
    {
      question: "What study tools are included on this page?",
      answer: "This page focuses on revision notes, flashcards, quiz practice, exam focus support and exam-style practice. Together, these tools help SACE English students build understanding, recall details and prepare for assessment tasks more confidently.",
    },
  ],
  ctaTitle: "Start Building Better SACE Revision",
  ctaBody: "Use Studiely to turn your English topics, notes and assessment preparation into a clearer revision system. Create notes, test yourself with flashcards and quizzes, focus on the task ahead, and practise applying what you know before assessment pressure builds.",
  ctaPrimaryLabel: "Start studying English",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
