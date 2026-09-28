import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_SPANISH: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/spanish",
  seoTitle: "IB PYP Spanish Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP Spanish study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP Spanish resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP Spanish",
    "PYP Spanish resources",
    "PYP Spanish activities",
    "IB PYP Spanish learning resources",
    "IB PYP Spanish practice activities",
    "IB PYP Spanish revision notes",
    "IB PYP Spanish flashcards",
    "IB PYP Spanish quiz",
    "IB PYP Spanish practice questions",
    "IB PYP Spanish exam focus",
    "IB PYP Spanish exam practice",
    "IB PYP Spanish study resources",
  ],
  breadcrumbName: "Spanish",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP Spanish Resources for",
  heroHighlight: "Vocabulary & Communication",
  heroIntro:
    "Make Spanish easier to use, not just easier to recognise. Studiely supports PYP learners with compact vocabulary review, speaking prompts, sentence patterns, quizzes and reflection activities that connect language with real classroom inquiry.",
  lead: "IB PYP Spanish can help young learners build confidence with listening, speaking, reading and writing while using language in meaningful inquiry contexts. Studiely supports that process with vocabulary notes, active-recall flashcards, short quizzes and practice activities designed to move students from recognising Spanish to producing it.",
  workflowSteps: [
    {
      title: "Useful vocabulary",
      body: "Keep high-frequency words linked to familiar people, places and routines.",
    },
    {
      title: "Speaking + listening",
      body: "Produce and understand short messages in real classroom situations.",
    },
    {
      title: "Culture + context",
      body: "Notice cultural perspectives without reducing communities to stereotypes.",
    },
  ],
  introTitle: "What IB PYP Spanish Looks Like in PYP Learning",
  introParagraphs: [
    "In a PYP setting, Spanish language learning is most powerful when students use the language to communicate something that matters: introducing themselves, describing a place, asking a question, comparing routines or responding to a transdisciplinary theme. Schools may organise language learning differently, so this page does not assume one fixed sequence. Instead, it focuses on reusable language-learning habits that fit Grade 1–5 learners within an inquiry-based PYP environment.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Language habits that move Spanish from recognition into usable communication.",
  coverTopics: [
    "high-frequency vocabulary linked to familiar people, places and routines",
    "clear pronunciation and careful listening for key words",
    "building short phrases into increasingly complete sentences",
    "asking and answering useful classroom questions",
    "reading simple texts for gist and specific information",
    "noticing cultural perspectives without reducing Spanish-speaking communities to stereotypes",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Spanish",
      body: "IB PYP Spanish Revision Notes should be brief and usable. Instead of copying a long vocabulary list, students can group words by purpose, add one example sentence, record a useful question-and-answer pattern and note a pronunciation reminder. The result becomes a small communication guide tied to the current unit rather than a page of disconnected translations.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Spanish Flashcards for Active Recall",
      body: "Flashcards work well for vocabulary, sentence stems and quick comprehension prompts. A card might show a picture or English cue and ask for the Spanish word, or present a Spanish phrase and ask what it would be used for. Mixing old and new cards supports recall while keeping practice short enough for primary learners.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP Spanish Quiz can check listening-style recognition, vocabulary choice, sentence order, meaning and simple reading comprehension. After a wrong answer, the useful step is to create a new example or say the corrected phrase aloud. This turns feedback into language production instead of passive correction.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Choose the Language Target for the Next Task",
      body: "For PYP Spanish, IB PYP Spanish Exam Focus should function as a learning-focus mode. It can prioritise the words, sentence patterns or communication task that the learner needs before a classroom activity, mini-presentation or teacher check-in. Formal exam language should stay secondary at this age.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open language focus",
    },
    {
      id: "exam-practice",
      title: "Rehearse Real Spanish Communication",
      body: "Practice can be reframed as short performance practice: introduce a family member, describe an object, follow a simple prompt, read a short message or answer familiar questions. These activities prepare students to use Spanish under realistic classroom conditions without making the page feel like test coaching.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise communication",
    },
  ],
  afterToolsSections: [
    {
      title: "Use the “See It, Say It, Change It” Routine",
      paragraphs: [
        "Choose five useful words or one sentence pattern from the current unit. First, read and understand it. Second, say it without looking. Third, change one part: a different person, place, number, adjective or action. That small change forces genuine language control. Finish with a two-minute quiz and save any word that caused a pause as tomorrow’s first flashcard.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "A practical weekly plan can rotate skills instead of trying to do everything every day. One session can focus on five useful words and one sentence pattern; another can be mostly listening and speaking; a third can use a short quiz or reading prompt. At the end of the week, the learner should use the same language in a tiny new context, such as changing the person, place or preference in a sentence. This spaced, varied practice helps Spanish become flexible. Parents can encourage the learner to answer first from memory, then check notes, so support does not accidentally become prompting.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP Spanish",
  whyParagraphs: [
    "Search results for PYP Spanish are dominated by teacher marketplaces, posters and classroom activity collections. Those materials help instruction, yet they often leave the learner without a personal review system. Studiely adds the missing student layer: collect language from the current unit, retrieve it without looking, use it in a new sentence and track what still causes hesitation.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "What should a PYP Spanish student practise most often?",
      answer:
        "Frequent, short practice with useful vocabulary and sentence patterns is usually more effective than occasional long review. Listening and speaking should sit alongside reading and writing so the learner can use language rather than only recognise it.",
    },
    {
      question: "Can Studiely make Spanish flashcards from class topics?",
      answer:
        "Students can use their current words, phrases and teacher-provided material to build a focused recall set. Cards work best when they include context, such as a picture, example sentence or communication purpose.",
    },
    {
      question: "How can PYP Spanish connect with inquiry?",
      answer:
        "A language task can connect to the current unit by describing people, places, routines, environments, celebrations or perspectives. The exact connection depends on the school’s programme of inquiry and the language level of the student.",
    },
    {
      question: "Is exam practice important in PYP Spanish?",
      answer:
        "Formal exam preparation should not dominate PYP language learning. Practice is better framed as short classroom tasks, mini-presentations, reading checks and communication activities that help students apply what they know.",
    },
    {
      question: "Can beginners use this page?",
      answer:
        "Yes. The study workflow can be scaled down to a few words, one sentence frame and a short quiz. More experienced learners can use the same structure with longer messages, broader vocabulary and more independent responses.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP Spanish",
  ctaBody:
    "Use Studiely to turn today’s Spanish words and class prompts into a small recall set, a quick quiz and communication practice for tomorrow.",
  ctaPrimaryLabel: "Start studying PYP Spanish",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
