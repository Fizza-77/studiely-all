import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_EXTENDED_ESSAY: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/extended-essay",
  seoTitle: "IB Extended Essay Study Resources | Studiely",
  metaDescription:
    "Study IB Extended Essay with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB Extended Essay study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB Extended Essay",
    "IB EE support",
    "Extended Essay research question",
    "EE structure",
    "EE reflection",
    "Extended Essay guide",
    "IB Extended Essay notes",
    "IB Extended Essay flashcards",
    "IB Extended Essay quiz",
    "IB Extended Essay reflection practice",
    "IB Extended Essay revision notes",
    "IB Extended Essay practice questions",
    "IB Extended Essay exam focus",
    "IB Extended Essay exam practice",
    "IB Extended Essay study resources",
  ],
  breadcrumbName: "Extended Essay",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB Extended Essay Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB Extended Essay brings together research question, method and evidence, and academic argument with the discipline needed to perform consistently in IB assessment. The hardest part is rarely finding more material; it is knowing what to learn, what to practise next, and how to turn feedback into a better response. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB Extended Essay students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    { title: "Learn", body: "Clarify research question and connected ideas." },
    { title: "Recall", body: "Use active-recall prompts instead of passive rereading." },
    { title: "Apply", body: "Practise question refinement and review mistakes." },
  ],
  introTitle: "What IB Extended Essay Requires",
  introParagraphs: [
    "At DP Core, success depends on clear planning, reflection and evidence-based progress across the DP core requirement. The course asks students to control more than isolated facts: they must connect research question, method and evidence, academic argument, critical thinking, and reflection and research process and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” For this DP core component, preparation should stay anchored to a substantial piece of independent academic research and formal writing, supported by reflection, with attention to academic integrity and authentic student thinking.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For Extended Essay at DP Core, build a study map around research question, method and evidence, academic argument, and critical thinking. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application. Attach a practice action to each area, such as question refinement, source evaluation, and outline building, so revision produces evidence of improvement rather than passive rereading.",
      ],
    },
    {
      title: "Curriculum Note",
      paragraphs: [
        "For Extended Essay at DP Core, The redesigned Extended Essay is first assessed in May 2027, with subject-focused and interdisciplinary research pathways and an updated approach to reflection.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "A useful revision loop is simple: understand the idea, retrieve it from memory, apply it, review the mistake, then return to the weak point. For Extended Essay at DP Core, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
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
      body: "IB Extended Essay Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain research question, method and evidence, and academic argument. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For dp core preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB Extended Essay Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB Extended Essay Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on question refinement, source evaluation, and outline building, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB Extended Essay Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At DP Core, those priorities may include source evaluation, outline building, and analytical drafting. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB Extended Essay Exam Practice should be interpreted as assessment practice where the course is not built around conventional written exams. Students can rehearse question refinement, source evaluation, outline building, and analytical drafting, compare work against published criteria, and improve the quality of evidence, explanation and reflection. For research planning, source management, argument development, citation and reflection, spaced checkpoints are more useful than leaving a large project until the deadline. Each checkpoint should end with one concrete next action.",
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
        "For Extended Essay at DP Core, Popular guides provide prompts, examples and checklists, but students still need a structured way to plan, reflect, test ideas and keep evidence aligned with criteria without copying model answers. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Extended Essay",
  whyParagraphs: [],
  whyBullets: [
    "Keep Extended Essay DP Core revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around research question, method and evidence and academic argument.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
    "Build a clearer record of mistakes, revisions and next steps across the course.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "How should I use Studiely for this DP core component?",
      answer:
        "Use Studiely to organise question refinement, source evaluation, and outline building, keep important ideas retrievable and turn large requirements into smaller reviewable steps.",
    },
    {
      question: "Should I copy model answers or examples?",
      answer:
        "No. Examples can show structure, but the thinking, evidence and reflection must remain your own. Use criteria and prompts to improve an original response.",
    },
    {
      question: "How can flashcards help?",
      answer:
        "Use cards for concepts, criteria, process steps and reflection questions. The goal is not memorising a script; it is making important ideas easy to retrieve when planning your own work.",
    },
    {
      question: "Is this an official IB resource?",
      answer:
        "No. Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization.",
    },
  ],
  ctaTitle: "Start a More Focused IB Extended Essay Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB Extended Essay into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying Extended Essay",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
