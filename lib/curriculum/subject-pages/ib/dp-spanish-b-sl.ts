import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_SPANISH_B_SL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/spanish-b-sl",
  seoTitle: "IB Spanish B SL Study Resources | Studiely",
  metaDescription:
    "Study IB Spanish B SL with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB Spanish B SL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB Spanish B SL",
    "IB Spanish B SL revision notes",
    "IB Spanish B SL past papers",
    "IB Spanish B SL practice questions",
    "IB Spanish B SL flashcards",
    "IB Spanish B SL exam questions",
    "IB Spanish B SL quiz",
    "IB Spanish B SL exam focus",
    "IB Spanish B SL exam practice",
    "IB Spanish B SL study resources",
  ],
  breadcrumbName: "Spanish B SL",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB Spanish B SL Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB Spanish B SL brings together Spanish reading, listening comprehension, and text-type writing with the discipline needed to perform consistently in IB assessment. The hardest part is rarely finding more material; it is knowing what to learn, what to practise next, and how to turn feedback into a better response. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB Spanish B SL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    { title: "Learn", body: "Clarify Spanish reading and connected ideas." },
    { title: "Recall", body: "Use active-recall prompts instead of passive rereading." },
    { title: "Apply", body: "Practise Spanish writing tasks and review mistakes." },
  ],
  introTitle: "What IB Spanish B SL Requires",
  introParagraphs: [
    "At Standard Level, success depends on functional fluency and balanced reading, listening, writing and speaking preparation. The course asks students to control more than isolated facts: they must connect Spanish reading, listening comprehension, text-type writing, spoken fluency, and intercultural understanding and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect writing, reading, listening and individual oral performance, rather than treating every topic as if it will be assessed in the same way.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For Spanish B at Standard Level, build a study map around Spanish reading, listening comprehension, text-type writing, and spoken fluency. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application.",
      ],
    },
    {
      title: "Curriculum Note",
      paragraphs: [
        "For Spanish B at Standard Level, IB has announced an updated Language B course for first teaching in 2027 and first assessment in 2029. Students should use the requirements for their own examination session.",
      ],
    },
    {
      title: "Standard Level Focus",
      paragraphs: [
        "IB Spanish B SL should not be prepared as a renamed version of IB Spanish B HL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is functional fluency and balanced reading, listening, writing and speaking preparation, which should shape examples, practice intensity and revision depth.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "Instead of separating notes from practice, students benefit from a loop that moves from understanding to retrieval and then to assessment-style application. For Spanish B at Standard Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
      ],
    },
  ],
  coverTitle: "",
  coverIntro: "",
  coverTopics: [],
  coverClosing: "",
  showCoverTopics: false,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes That Reduce Cognitive Load",
      body: "IB Spanish B SL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain Spanish reading, listening comprehension, and text-type writing. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For standard level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB Spanish B SL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB Spanish B SL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on Spanish writing tasks, listening drills, and reading comprehension, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB Spanish B SL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Standard Level, those priorities may include listening drills, reading comprehension, and oral rehearsal. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB Spanish B SL Exam Practice should progress from focused tasks to mixed and timed work. Begin with one skill or topic, move to unfamiliar combinations, then practise under realistic time pressure. After each set, compare the response with the marking expectations available through teachers or official materials, keep an error log and retry the same skill a few days later. That retry step is what turns feedback into learning.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [
    {
      title: "What Strong IB Resources Often Leave Unconnected",
      paragraphs: [
        "For Spanish B at Standard Level, Leading resources separate reading, listening, writing and oral practice, often adding flashcards and mock tasks. A frequent gap is the lack of one connected loop from vocabulary and text types to timed production and oral rehearsal. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Spanish B SL",
  whyParagraphs: [],
  whyBullets: [
    "Keep Spanish B Standard Level revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around Spanish reading, listening comprehension and text-type writing.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
    "Build a clearer record of mistakes, revisions and next steps across the course.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "How should I balance vocabulary and exam practice?",
      answer:
        "Build vocabulary through themes, but immediately use new language in reading, listening, writing or speaking. For IB Spanish B SL, vocabulary is most valuable when it improves communication under real task conditions.",
    },
    {
      question: "What belongs on language flashcards?",
      answer:
        "Use useful phrases, collocations, connectors, text-type features and vocabulary in context. Add a short production prompt so each card requires active language use.",
    },
    {
      question: "How can I improve the individual oral?",
      answer:
        "Practise speaking from brief prompts rather than memorised scripts. Record short responses, listen for accuracy and organisation, then repeat the same idea with clearer language.",
    },
    {
      question: "Which syllabus should I follow?",
      answer:
        "Use the guide for your examination session. IB has announced a future Language B update, so students should confirm requirements with their school and official IB documentation.",
    },
  ],
  ctaTitle: "Start a More Focused IB Spanish B SL Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB Spanish B SL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying Spanish B SL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
