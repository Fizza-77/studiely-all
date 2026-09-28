import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_PHYSICS_SL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/physics-sl",
  seoTitle: "IB Physics SL Study Resources | Studiely",
  metaDescription:
    "Study IB Physics SL with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB Physics SL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB Physics SL",
    "IB Physics SL revision notes",
    "IB Physics SL past papers",
    "IB Physics SL practice questions",
    "IB Physics SL flashcards",
    "IB Physics SL exam questions",
    "IB Physics SL quiz",
    "IB Physics SL exam focus",
    "IB Physics SL exam practice",
    "IB Physics SL study resources",
  ],
  breadcrumbName: "Physics SL",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB Physics SL Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB Physics SL brings together space, time and motion, fields, and waves with the discipline needed to perform consistently in IB assessment. The hardest part is rarely finding more material; it is knowing what to learn, what to practise next, and how to turn feedback into a better response. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB Physics SL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    { title: "Learn", body: "Clarify space, time and motion and connected ideas." },
    { title: "Recall", body: "Use active-recall prompts instead of passive rereading." },
    { title: "Apply", body: "Practise multi-step calculations and review mistakes." },
  ],
  introTitle: "What IB Physics SL Requires",
  introParagraphs: [
    "At Standard Level, success depends on secure physical principles and reliable application across the standard-level course. The course asks students to control more than isolated facts: they must connect space, time and motion, fields, waves, energy, and particle and nuclear physics and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect problem solving, experimental and data analysis, conceptual reasoning and scientific investigation, rather than treating every topic as if it will be assessed in the same way.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For Physics at Standard Level, build a study map around space, time and motion, fields, waves, and energy. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application. Attach a practice action to each area, such as multi-step calculations, data analysis, and graph interpretation, so revision produces evidence of improvement rather than passive rereading.",
      ],
    },
    {
      title: "Standard Level Focus",
      paragraphs: [
        "IB Physics SL should not be prepared as a renamed version of IB Physics HL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is secure physical principles and reliable application across the standard-level course, which should shape examples, practice intensity and revision depth.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "A useful revision loop is simple: understand the idea, retrieve it from memory, apply it, review the mistake, then return to the weak point. For Physics at Standard Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
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
      body: "IB Physics SL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain space, time and motion, fields, and waves. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For standard level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB Physics SL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB Physics SL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on multi-step calculations, data analysis, and graph interpretation, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB Physics SL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Standard Level, those priorities may include data analysis, graph interpretation, and experimental design. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB Physics SL Exam Practice should progress from focused tasks to mixed and timed work. Begin with one skill or topic, move to unfamiliar combinations, then practise under realistic time pressure. After each set, compare the response with the marking expectations available through teachers or official materials, keep an error log and retry the same skill a few days later. That retry step is what turns feedback into learning.",
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
        "For Physics at Standard Level, High-performing sites combine concise notes, topic questionbanks, flashcards, difficulty progression and mock exams. The gap is often the transition from recall to data handling, experimental reasoning and multi-step application. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Physics SL",
  whyParagraphs: [],
  whyBullets: [
    "Keep Physics Standard Level revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around space, time and motion, fields and waves.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
    "Build a clearer record of mistakes, revisions and next steps across the course.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "Should I revise content or questions first?",
      answer:
        "Use both in sequence. Clarify the concept, retrieve it without notes, then apply it to a question. IB Physics SL improves fastest when question practice exposes exactly which idea needs another pass.",
    },
    {
      question: "How should I use an error log?",
      answer:
        "Record the topic, the type of mistake, the correct reasoning and one follow-up task. Revisit the same skill later so the log changes future performance rather than becoming another set of notes.",
    },
    {
      question: "Are flashcards useful for problem-solving subjects?",
      answer:
        "Yes, but not for every skill. Use them for definitions, relationships, assumptions, processes and common reasoning steps, then move quickly into calculations, data or application questions.",
    },
    {
      question: "How do I keep assessment information current?",
      answer:
        "Use the subject brief and guidance for your examination session. IB updates courses on a cycle, so school and official IB materials should be the final source for assessment details.",
    },
  ],
  ctaTitle: "Start a More Focused IB Physics SL Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB Physics SL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying Physics SL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
