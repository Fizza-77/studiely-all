import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_GERMAN: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/german",
  seoTitle: "IB PYP German Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP German study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP German resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP German",
    "PYP German resources",
    "PYP German activities",
    "IB PYP German learning resources",
    "IB PYP German practice activities",
    "IB PYP German revision notes",
    "IB PYP German flashcards",
    "IB PYP German quiz",
    "IB PYP German practice questions",
    "IB PYP German exam focus",
    "IB PYP German exam practice",
    "IB PYP German study resources",
  ],
  breadcrumbName: "German",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP German Resources for",
  heroHighlight: "Vocabulary & Everyday Language",
  heroIntro:
    "Move German from the worksheet into active use. Studiely helps PYP learners retrieve useful words, build sentence patterns, check understanding and rehearse short real-world communication linked to school inquiry.",
  lead: "IB PYP German can support young learners in developing listening, speaking, reading and writing through purposeful language use. Studiely helps Grade 1–5 students capture current vocabulary and structures, practise them with flashcards and quizzes, and apply them in short, age-appropriate language tasks.",
  workflowSteps: [
    {
      title: "Word patterns",
      body: "Retrieve useful words and structures from the current school unit.",
    },
    {
      title: "Sentence building",
      body: "Turn noun, verb and adjective patterns into complete short messages.",
    },
    {
      title: "Communication practice",
      body: "Rehearse questions, descriptions and mini-dialogues for real purposes.",
    },
  ],
  introTitle: "What IB PYP German Looks Like in PYP Learning",
  introParagraphs: [
    "German programmes in PYP schools can range from additional-language classes to bilingual learning, so there is no responsible way to assume one identical sequence for every learner. The more useful approach is to strengthen language that already belongs to the student’s classroom context: everyday expressions, topic vocabulary, sentence frames and simple messages that can be reused across inquiry and daily communication.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "German habits that stay connected to classroom themes and real communication.",
  coverTopics: [
    "understanding and using familiar classroom and everyday expressions",
    "hearing and producing German sound patterns with increasing confidence",
    "building noun, verb and adjective patterns into complete short sentences",
    "reading short messages for meaning rather than translating word by word",
    "writing simple descriptions, questions and responses",
    "exploring German-speaking cultures through concrete people, places and contexts",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for German",
      body: "IB PYP German Revision Notes can organise vocabulary by use rather than alphabet. A learner might group language for describing, asking, locating or comparing, then add a short model sentence and one grammatical pattern the teacher has introduced. This makes the notes easy to reuse in speaking and writing.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "German Flashcards for Active Recall",
      body: "Flashcards can prompt vocabulary, article-noun combinations where appropriate, short sentence chunks or question-and-answer pairs. Active recall works best when the student has to produce the German from a meaning, image or situation instead of always seeing German first.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP German Quiz can check meaning, word choice, sentence order and short reading comprehension. A useful follow-up is to transform one corrected answer into a new sentence. That extra step helps students understand the language pattern rather than simply remember which option was right.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Set a Clear German Review Priority",
      body: "Studiely’s Exam Focus can be used as a simple learning-priority tool. Before a classroom conversation or written response, students can identify the small set of language they need most and review it deliberately. That keeps the focus age-appropriate and connected to real school tasks.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open review focus",
    },
    {
      id: "exam-practice",
      title: "Practise German Through Mini Tasks",
      body: "Practice should be short and communicative: answer familiar questions, describe a scene, follow a simple written instruction or build a mini-dialogue. In PYP, these tasks are better framed as preparation for learning and classroom assessment than as formal examination drills.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise mini tasks",
    },
  ],
  afterToolsSections: [
    {
      title: "Group German by What You Want to Do",
      paragraphs: [
        "Instead of one long list, sort current vocabulary into actions such as “describe,” “ask,” “say where,” “say what I like,” or “compare.” Build one model sentence for each group, then hide it and rebuild it from a prompt. A short quiz can mix the groups so the learner has to choose the right language for the purpose, which is closer to real communication.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "A simple German week can be organised around one communication purpose. For example, select language for describing, asking, locating or expressing a preference. Build a short note and a handful of recall prompts on day one. Midweek, reconstruct sentences from cues and complete a quick quiz. At the end of the week, use the language in a new mini-task without copying the model. This makes progress easy to see: the student is not merely remembering a list but using a pattern independently. Keep a record of the one phrase that caused the most hesitation and begin the next review there.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP German",
  whyParagraphs: [
    "Search results for PYP German are limited and often focused on schools, recruitment or bilingual programme descriptions. This means student-facing search intent is underserved. Studiely can compete by being practical: not a generic explanation of PYP, but a resource that shows a learner exactly how to turn today’s German lesson into retrieval, practice and reflection.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "Is IB PYP German the same at every school?",
      answer:
        "No. PYP schools can organise language learning in different ways and students may study German at different levels. The school programme and teacher expectations should determine the actual content.",
    },
    {
      question: "What should German flashcards contain?",
      answer:
        "Useful words, sentence chunks, question patterns and image prompts are strong choices. Where a teacher is focusing on grammar such as articles or verb forms, a card can include that feature in a meaningful sentence.",
    },
    {
      question: "How often should a primary learner revise German?",
      answer:
        "Short, frequent retrieval is usually easier to sustain than a long weekly session. Five to ten focused minutes with speaking, recall and one small task can be enough to keep current language active.",
    },
    {
      question: "Does PYP German need exam practice?",
      answer:
        "Not in the same way as a senior examination course. Practice should centre on the classroom tasks, communication goals and assessment approaches used by the student’s school.",
    },
    {
      question: "Can German connect with a PYP unit of inquiry?",
      answer:
        "Yes, when the connection is authentic. Students might use German to describe routines, communities, environments, identity or another unit theme at a language level they can manage.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP German",
  ctaBody:
    "Bring your current German unit into Studiely, organise the language by purpose and practise until you can use the key phrases without looking.",
  ctaPrimaryLabel: "Start studying PYP German",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
