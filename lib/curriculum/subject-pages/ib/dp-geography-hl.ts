import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_GEOGRAPHY_HL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/geography-hl",
  seoTitle: "IB Geography HL Study Resources | Studiely",
  metaDescription:
    "Study IB Geography HL with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB Geography HL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB Geography HL",
    "IB Geography HL revision notes",
    "IB Geography HL past papers",
    "IB Geography HL practice questions",
    "IB Geography HL flashcards",
    "IB Geography HL exam questions",
    "IB Geography HL quiz",
    "IB Geography HL exam focus",
    "IB Geography HL exam practice",
    "IB Geography HL study resources",
  ],
  breadcrumbName: "Geography HL",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB Geography HL Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB Geography HL brings together population and change, global climate and resources, and places and power with the discipline needed to perform consistently in IB assessment. The course becomes more manageable when revision is organized around the decisions students actually make in assessment tasks. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB Geography HL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    { title: "Learn", body: "Clarify population and change and connected ideas." },
    { title: "Recall", body: "Use active-recall prompts instead of passive rereading." },
    { title: "Apply", body: "Practise case-study recall and review mistakes." },
  ],
  introTitle: "What IB Geography HL Requires",
  introParagraphs: [
    "At Higher Level, success depends on broader optional content, greater synthesis across scales and more demanding geographic evaluation. The course asks students to control more than isolated facts: they must connect population and change, global climate and resources, places and power, spatial processes, and case-study evidence and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect data interpretation, structured geographic responses, essay writing and fieldwork-based internal assessment, rather than treating every topic as if it will be assessed in the same way.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For Geography at Higher Level, build a study map around population and change, global climate and resources, places and power, and spatial processes. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application. Attach a practice action to each area, such as case-study recall, map and data interpretation, and structured essays, so revision produces evidence of improvement rather than passive rereading.",
      ],
    },
    {
      title: "Higher Level Focus",
      paragraphs: [
        "IB Geography HL should not be prepared as a renamed version of IB Geography SL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is broader optional content, greater synthesis across scales and more demanding geographic evaluation, which should shape examples, practice intensity and revision depth.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "Instead of separating notes from practice, students benefit from a loop that moves from understanding to retrieval and then to assessment-style application. For Geography at Higher Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
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
      body: "IB Geography HL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain population and change, global climate and resources, and places and power. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For higher level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB Geography HL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB Geography HL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on case-study recall, map and data interpretation, and structured essays, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB Geography HL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Higher Level, those priorities may include map and data interpretation, structured essays, and geographic evaluation. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB Geography HL Exam Practice should progress from focused tasks to mixed and timed work. Begin with one skill or topic, move to unfamiliar combinations, then practise under realistic time pressure. After each set, compare the response with the marking expectations available through teachers or official materials, keep an error log and retry the same skill a few days later. That retry step is what turns feedback into learning.",
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
        "For Geography at Higher Level, Top resources organize content by topic, then add exam questions, markscheme guidance, case studies and mocks. The gap is usually between knowing content and turning it into a defensible, evidence-led argument under time pressure. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Geography HL",
  whyParagraphs: [],
  whyBullets: [
    "Keep Geography Higher Level revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around population and change, global climate and resources and places and power.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "How do I stop memorising without being able to write?",
      answer:
        "Attach every topic to an argument, example and question. In IB Geography HL, knowledge becomes useful when you can select it to support analysis rather than reproduce everything you remember.",
    },
    {
      question: "What should a good case-study or evidence bank contain?",
      answer:
        "Keep only the details you can use: context, a precise example, why it matters, and the argument it can support. Add contrasts so the same evidence can be used flexibly.",
    },
    {
      question: "How often should I practise full responses?",
      answer:
        "Use short planning and paragraph drills frequently, then schedule full timed responses periodically. Reviewing one weak paragraph carefully can be more useful than writing many unreviewed essays.",
    },
    {
      question: "Can Studiely tell me the exact current assessment rules?",
      answer:
        "Studiely supports independent revision, but official IB subject briefs and your school should be used for definitive assessment requirements, especially during curriculum transitions.",
    },
  ],
  ctaTitle: "Start a More Focused IB Geography HL Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB Geography HL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying Geography HL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
