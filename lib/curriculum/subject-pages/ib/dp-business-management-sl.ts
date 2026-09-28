import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_BUSINESS_MANAGEMENT_SL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/business-management-sl",
  seoTitle: "IB Business Management SL Study Resources | Studiely",
  metaDescription:
    "Study IB Business Management SL with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB Business Management SL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB Business Management SL",
    "IB Business Management SL revision notes",
    "IB Business Management SL past papers",
    "IB Business Management SL practice questions",
    "IB Business Management SL flashcards",
    "IB Business Management SL exam questions",
    "IB Business Management SL quiz",
    "IB Business Management SL exam focus",
    "IB Business Management SL exam practice",
    "IB Business Management SL study resources",
  ],
  breadcrumbName: "Business Management SL",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB Business Management SL Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB Business Management SL brings together business organization, human resources, and finance and accounts with the discipline needed to perform consistently in IB assessment. The course becomes more manageable when revision is organized around the decisions students actually make in assessment tasks. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB Business Management SL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    {
      title: "Learn",
      body: "Clarify business organization and connected ideas.",
    },
    {
      title: "Recall",
      body: "Use active-recall prompts instead of passive rereading.",
    },
    {
      title: "Apply",
      body: "Practise case-study analysis and review mistakes.",
    },
  ],
  introTitle: "What IB Business Management SL Requires",
  introParagraphs: [
    "At Standard Level, success depends on clear understanding of core business functions and evidence-based application to unfamiliar scenarios. The course asks students to control more than isolated facts: they must connect business organization, human resources, finance and accounts, marketing, and operations and decision-making and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect case-based responses, quantitative and qualitative analysis, decision-making and internal research work, rather than treating every topic as if it will be assessed in the same way.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For Business Management at Standard Level, build a study map around business organization, human resources, finance and accounts, and marketing. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application. Attach a practice action to each area, such as case-study analysis, finance calculations, and business toolkit application, so revision produces evidence of improvement rather than passive rereading.",
      ],
    },
    {
      title: "Standard Level Focus",
      paragraphs: [
        "IB Business Management SL should not be prepared as a renamed version of IB Business Management HL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is clear understanding of core business functions and evidence-based application to unfamiliar scenarios, which should shape examples, practice intensity and revision depth.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "Effective preparation works best as a cycle rather than a pile of disconnected resources: learn, recall, apply, check and refine. For Business Management at Standard Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
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
      body: "IB Business Management SL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain business organization, human resources, and finance and accounts. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For standard level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB Business Management SL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB Business Management SL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on case-study analysis, finance calculations, and business toolkit application, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB Business Management SL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Standard Level, those priorities may include finance calculations, business toolkit application, and extended recommendations. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB Business Management SL Exam Practice should progress from focused tasks to mixed and timed work. Begin with one skill or topic, move to unfamiliar combinations, then practise under realistic time pressure. After each set, compare the response with the marking expectations available through teachers or official materials, keep an error log and retry the same skill a few days later. That retry step is what turns feedback into learning.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise exam-style",
    },
  ],
  afterToolsSections: [
    {
      title: "What Strong IB Resources Often Leave Unconnected",
      paragraphs: [
        "For Business Management at Standard Level, Top resources organize content by topic, then add exam questions, markscheme guidance, case studies and mocks. The gap is usually between knowing content and turning it into a defensible, evidence-led argument under time pressure. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Business Management SL",
  whyParagraphs: [],
  whyBullets: [
    "Keep Business Management Standard Level revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around business organization, human resources and finance and accounts.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
    "Build a clearer record of mistakes, revisions and next steps across the course.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "How do I stop memorising without being able to write?",
      answer:
        "Attach every topic to an argument, example and question. In IB Business Management SL, knowledge becomes useful when you can select it to support analysis rather than reproduce everything you remember.",
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
  ctaTitle: "Start a More Focused IB Business Management SL Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB Business Management SL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying Business Management SL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
