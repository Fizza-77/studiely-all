import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_FRENCH: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/french",
  seoTitle: "IB PYP French Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP French study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP French resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP French",
    "PYP French resources",
    "PYP French activities",
    "IB PYP French learning resources",
    "IB PYP French practice activities",
    "IB PYP French revision notes",
    "IB PYP French flashcards",
    "IB PYP French quiz",
    "IB PYP French practice questions",
    "IB PYP French exam focus",
    "IB PYP French exam practice",
    "IB PYP French study resources",
  ],
  breadcrumbName: "French",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP French Resources for",
  heroHighlight: "Language Practice & Recall",
  heroIntro:
    "Build French in small, usable pieces: a phrase you can say, a sentence you can adapt, a message you can understand. Studiely gives PYP learners a structured way to review vocabulary, practise communication and reflect on progress.",
  lead: "IB PYP French supports young learners as they develop communication through listening, speaking, reading and writing in inquiry-rich contexts. Studiely helps students organise current vocabulary and sentence patterns into concise notes, flashcards, quizzes and low-pressure practice activities that encourage active use of French.",
  workflowSteps: [
    {
      title: "Everyday language",
      body: "Keep a small set of high-value words and structures ready to use.",
    },
    {
      title: "Pronunciation + listening",
      body: "Hear and say French accurately enough to communicate with meaning.",
    },
    {
      title: "Short active recall",
      body: "Revisit language often so it becomes available without prompting.",
    },
  ],
  introTitle: "What IB PYP French Looks Like in PYP Learning",
  introParagraphs: [
    "French in the PYP is not one universal textbook sequence. Schools can connect language learning to local contexts, student needs and units of inquiry, so the most useful study page should be flexible. For Grade 1–5 learners, that means strengthening a small number of high-value words and structures, hearing and saying them accurately enough to communicate, and revisiting them often enough that they become available without prompting.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Usable French habits that grow from the language your school is teaching now.",
  coverTopics: [
    "recognising and using familiar greetings, descriptions, questions and classroom language",
    "hearing sound patterns and improving pronunciation through repetition with meaning",
    "building noun, adjective and verb patterns into short messages",
    "reading simple French for key meaning rather than translating every word",
    "writing short responses with increasing independence",
    "making respectful connections with French-speaking cultures and contexts",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for French",
      body: "IB PYP French Revision Notes should act like a compact language map. Students can record a theme, five to eight useful expressions, one or two sentence frames and a tiny model response. Adding a pronunciation cue or a “watch out for” note makes the page more practical than a direct translation list.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "French Flashcards for Active Recall",
      body: "Flashcards are ideal for rapid retrieval of words, chunks and sentence openings. Useful cards can ask students to produce French from a picture, complete a phrase or choose which expression fits a situation. Review should stay quick and mixed so the learner practises recall instead of memorising card order.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP French Quiz can combine vocabulary recognition with small production decisions: which phrase fits, what comes next, what does this short message mean, or how could this sentence be changed? Feedback should point students back to a specific language pattern so each mistake becomes a new practice target.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Prioritise the French Language That Matters Next",
      body: "Studiely’s Exam Focus is best treated as a priority tool for upcoming school learning. It can highlight the vocabulary set, reading skill or speaking prompt that matters for a classroom check, conversation or written task. PYP students benefit more from readiness for authentic tasks than from formal exam coaching.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open language focus",
    },
    {
      id: "exam-practice",
      title: "Use French in Short Classroom Tasks",
      body: "Practice can provide short, age-appropriate rehearsal: read a message and respond, describe a picture, introduce a person, answer a familiar question or build a two-line dialogue. These tasks keep French active and contextual, which matches the spirit of inquiry-based learning better than long test papers.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise short tasks",
    },
  ],
  afterToolsSections: [
    {
      title: "Build One Flexible Sentence Frame at a Time",
      paragraphs: [
        "Choose a sentence frame from the current unit, such as a way to describe, compare, prefer or explain. Make three versions by changing one key element each time. Then turn the changing words into flashcards and finish with a quick quiz that mixes the frame with older language. A learner who can adapt one structure confidently has gained more usable French than a learner who copied twenty sentences once.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "For a manageable French routine, begin the week by selecting language from the current classroom theme rather than adding extra unrelated vocabulary. Review a small set, say it aloud, and build one flexible sentence frame. Two or three days later, retrieve the words again in a different order and complete a short quiz. End the week with a message, description or mini-dialogue that reuses the same language. This creates useful repetition without boredom. The learner can keep a tiny “still tricky” list so the next week starts with the language that actually needs attention.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP French",
  whyParagraphs: [
    "PYP French search results often lead to teacher communities, printable resources or isolated activity ideas. The missing piece is continuity for the learner: what should be remembered after the activity ends? Studiely can preserve the language worth keeping, convert it into retrieval practice and give students a clear “next five minutes” rather than another folder of worksheets.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "How should young PYP learners revise French?",
      answer:
        "Keep review short, frequent and connected to communication. A small set of vocabulary, one useful structure, a speaking attempt and a quick retrieval quiz can be more productive than copying a long list.",
    },
    {
      question: "Can Studiely help with French pronunciation?",
      answer:
        "Studiely can organise pronunciation reminders and speaking prompts, but students still need to hear accurate French from teachers, recordings or trusted language resources. The platform should support practice rather than replace live language input.",
    },
    {
      question: "What kinds of French flashcards work best?",
      answer:
        "Picture-to-word, situation-to-phrase and sentence-completion cards encourage more useful retrieval than simple translation alone. Cards should reflect the language students are currently expected to use.",
    },
    {
      question: "Does IB PYP French use formal exams?",
      answer:
        "PYP is not built around the DP-style external examination model. Studiely’s exam-related tools should therefore be used for focused review and age-appropriate classroom practice where relevant.",
    },
    {
      question: "Can French study connect with other PYP subjects?",
      answer:
        "Yes. Language can be used to describe science observations, places, routines, art, identity or other inquiry themes when that connection is meaningful and appropriate to the learner’s level.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP French",
  ctaBody:
    "Turn this week’s French into something usable: save the key language, practise it from memory, test it briefly and return to the words that still need work.",
  ctaPrimaryLabel: "Start studying PYP French",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
