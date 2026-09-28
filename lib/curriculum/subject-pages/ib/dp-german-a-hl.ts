import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_GERMAN_A_HL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/german-a-hl",
  seoTitle: "IB German A HL Study Resources | Studiely",
  metaDescription:
    "Study IB German A HL with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB German A HL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB German A HL",
    "IB German A HL revision notes",
    "IB German A HL past papers",
    "IB German A HL practice questions",
    "IB German A HL flashcards",
    "IB German A HL exam questions",
    "IB German A HL quiz",
    "IB German A HL exam focus",
    "IB German A HL exam practice",
    "IB German A HL study resources",
  ],
  breadcrumbName: "German A HL",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB German A HL Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB German A HL brings together German textual analysis, literary technique, and non-literary language with the discipline needed to perform consistently in IB assessment. Students often collect notes and past-paper links but still struggle to convert them into a repeatable revision routine. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB German A HL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    { title: "Learn", body: "Clarify German textual analysis and connected ideas." },
    { title: "Recall", body: "Use active-recall prompts instead of passive rereading." },
    { title: "Apply", body: "Practise German commentary writing and review mistakes." },
  ],
  introTitle: "What IB German A HL Requires",
  introParagraphs: [
    "At Higher Level, success depends on greater analytical depth, wider text coverage and more demanding independent written work. The course asks students to control more than isolated facts: they must connect German textual analysis, literary technique, non-literary language, context and audience, and comparative interpretation and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect analytical writing, comparative work and oral analysis, rather than treating every topic as if it will be assessed in the same way.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For German A at Higher Level, build a study map around German textual analysis, literary technique, non-literary language, and context and audience. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application. Attach a practice action to each area, such as German commentary writing, comparative essay planning, and oral rehearsal, so revision produces evidence of improvement rather than passive rereading.",
      ],
    },
    {
      title: "Higher Level Focus",
      paragraphs: [
        "IB German A HL should not be prepared as a renamed version of IB German A SL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is greater analytical depth, wider text coverage and more demanding independent written work, which should shape examples, practice intensity and revision depth.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "Effective preparation works best as a cycle rather than a pile of disconnected resources: learn, recall, apply, check and refine. For German A at Higher Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
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
      body: "IB German A HL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain German textual analysis, literary technique, and non-literary language. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For higher level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB German A HL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB German A HL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on German commentary writing, comparative essay planning, and oral rehearsal, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB German A HL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Higher Level, those priorities may include comparative essay planning, oral rehearsal, and evidence recall. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB German A HL Exam Practice should progress from focused tasks to mixed and timed work. Begin with one skill or topic, move to unfamiliar combinations, then practise under realistic time pressure. After each set, compare the response with the marking expectations available through teachers or official materials, keep an error log and retry the same skill a few days later. That retry step is what turns feedback into learning.",
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
        "For German A at Higher Level, Strong ranking resources split preparation by text analysis, oral work, Paper-style tasks and past-paper practice. The common gap is that students still have to connect close reading, evidence recall, planning and timed writing themselves. Studiely can make that progression explicit. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB German A HL",
  whyParagraphs: [],
  whyBullets: [
    "Keep German A Higher Level revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around German textual analysis, literary technique and non-literary language.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "What should I revise first?",
      answer:
        "Start with the texts and analytical skills your class is currently using, then build a small evidence bank for authorial choices, context and comparison.",
    },
    {
      question: "How can flashcards help with analysis?",
      answer:
        "Use flashcards for techniques, concepts, text evidence and comparison prompts. The front of the card should ask you to interpret or connect evidence, not simply name a device.",
    },
    {
      question: "How often should I practise timed writing?",
      answer:
        "Short timed paragraphs can be used weekly, while fuller responses can be scheduled less often. The important part is to review structure, evidence and analysis after each attempt.",
    },
    {
      question: "Can Studiely replace official IB materials?",
      answer:
        "No. Studiely provides independent study support. Students should use their teacher, current subject guide and official school materials for definitive assessment requirements.",
    },
  ],
  ctaTitle: "Start a More Focused IB German A HL Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB German A HL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying German A HL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
