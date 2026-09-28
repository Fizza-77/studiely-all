import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_PSYCHOLOGY_HL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/psychology-hl",
  seoTitle: "IB Psychology HL Study Resources | Studiely",
  metaDescription:
    "Study IB Psychology HL with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB Psychology HL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB Psychology HL",
    "IB Psychology HL revision notes",
    "IB Psychology HL past papers",
    "IB Psychology HL practice questions",
    "IB Psychology HL flashcards",
    "IB Psychology HL exam questions",
    "IB Psychology HL quiz",
    "IB Psychology HL exam focus",
    "IB Psychology HL exam practice",
    "IB Psychology HL study resources",
  ],
  breadcrumbName: "Psychology HL",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB Psychology HL Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB Psychology HL brings together psychological concepts, research methodology, and health and well-being with the discipline needed to perform consistently in IB assessment. The course becomes more manageable when revision is organized around the decisions students actually make in assessment tasks. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB Psychology HL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    { title: "Learn", body: "Clarify psychological concepts and connected ideas." },
    { title: "Recall", body: "Use active-recall prompts instead of passive rereading." },
    { title: "Apply", body: "Practise study evaluation and review mistakes." },
  ],
  introTitle: "What IB Psychology HL Requires",
  introParagraphs: [
    "At Higher Level, success depends on additional work on culture, motivation and technology plus direct assessment of data analysis alongside broader synthesis across the course. The course asks students to control more than isolated facts: they must connect psychological concepts, research methodology, health and well-being, human development, and relationships and cognition and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect concept-and-context questions, research-method analysis and a research proposal internal assessment, rather than treating every topic as if it will be assessed in the same way.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For Psychology at Higher Level, build a study map around psychological concepts, research methodology, health and well-being, and human development. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application. Attach a practice action to each area, such as study evaluation, research-method questions, and concept application, so revision produces evidence of improvement rather than passive rereading.",
      ],
    },
    {
      title: "Curriculum Note",
      paragraphs: [
        "The redesigned DP Psychology course is first assessed in May 2027. Students should confirm which guide applies to their examination session.",
      ],
    },
    {
      title: "Higher Level Focus",
      paragraphs: [
        "IB Psychology HL should not be prepared as a renamed version of IB Psychology SL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is additional work on culture, motivation and technology plus direct assessment of data analysis alongside broader synthesis across the course, which should shape examples, practice intensity and revision depth.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "Effective preparation works best as a cycle rather than a pile of disconnected resources: learn, recall, apply, check and refine. For Psychology at Higher Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
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
      body: "IB Psychology HL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain psychological concepts, research methodology, and health and well-being. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For higher level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB Psychology HL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB Psychology HL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on study evaluation, research-method questions, and concept application, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB Psychology HL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Higher Level, those priorities may include research-method questions, concept application, and unseen research analysis. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB Psychology HL Exam Practice should progress from focused tasks to mixed and timed work. Begin with one skill or topic, move to unfamiliar combinations, then practise under realistic time pressure. After each set, compare the response with the marking expectations available through teachers or official materials, keep an error log and retry the same skill a few days later. That retry step is what turns feedback into learning.",
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
        "For Psychology at Higher Level, Top resources organize content by topic, then add exam questions, markscheme guidance, studies and mocks. The gap is usually between knowing content and turning it into a defensible, evidence-led argument under time pressure. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Psychology HL",
  whyParagraphs: [],
  whyBullets: [
    "Keep Psychology Higher Level revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around psychological concepts, research methodology and health and well-being.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "How do I stop memorising without being able to write?",
      answer:
        "Attach every topic to an argument, example and question. In IB Psychology HL, knowledge becomes useful when you can select it to support analysis rather than reproduce everything you remember.",
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
  ctaTitle: "Start a More Focused IB Psychology HL Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB Psychology HL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying Psychology HL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
