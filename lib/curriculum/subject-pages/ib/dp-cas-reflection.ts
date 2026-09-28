import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_CAS_REFLECTION: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/cas-reflection",
  seoTitle: "IB CAS Reflection Study Resources | Studiely",
  metaDescription:
    "Study IB CAS Reflection with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB CAS Reflection study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB CAS Reflection",
    "IB CAS reflection examples",
    "CAS portfolio",
    "CAS reflection guide",
    "CAS experience ideas",
    "CAS project support",
    "IB CAS Reflection notes",
    "IB CAS Reflection flashcards",
    "IB CAS Reflection quiz",
    "IB CAS Reflection reflection practice",
    "IB CAS Reflection revision notes",
    "IB CAS Reflection practice questions",
    "IB CAS Reflection exam focus",
    "IB CAS Reflection exam practice",
    "IB CAS Reflection study resources",
  ],
  breadcrumbName: "CAS Reflection",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB CAS Reflection Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB CAS Reflection brings together creativity, activity, and service with the discipline needed to perform consistently in IB assessment. A strong result depends on more than coverage of the syllabus: students need recall, application, timing and reflection to work together. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB CAS Reflection students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    {
      title: "Learn",
      body: "Clarify creativity and connected ideas.",
    },
    {
      title: "Recall",
      body: "Use active-recall prompts instead of passive rereading.",
    },
    {
      title: "Apply",
      body: "Practise experience planning and review mistakes.",
    },
  ],
  introTitle: "What IB CAS Reflection Requires",
  introParagraphs: [
    "At DP Core, success depends on clear planning, reflection and evidence-based progress across the DP core requirement. The course asks students to control more than isolated facts: they must connect creativity, activity, service, reflection, and learning outcomes and personal growth and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” For this DP core component, preparation should stay anchored to ongoing completion and reflection requirements rather than an external examination, with attention to academic integrity and authentic student thinking.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For CAS Reflection at DP Core, build a study map around creativity, activity, service, and reflection. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application. Attach a practice action to each area, such as experience planning, reflection prompts, and evidence selection, so revision produces evidence of improvement rather than passive rereading.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "A useful revision loop is simple: understand the idea, retrieve it from memory, apply it, review the mistake, then return to the weak point. For CAS Reflection at DP Core, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
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
      body: "IB CAS Reflection Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain creativity, activity, and service. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For dp core preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB CAS Reflection Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB CAS Reflection Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on experience planning, reflection prompts, and evidence selection, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB CAS Reflection Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At DP Core, those priorities may include reflection prompts, evidence selection, and portfolio organization. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB CAS Reflection Exam Practice should be interpreted as assessment practice where the course is not built around conventional written exams. Students can rehearse experience planning, reflection prompts, evidence selection, and portfolio organization, compare work against published criteria, and improve the quality of evidence, explanation and reflection. For CAS portfolio organization, evidence, reflection and project planning, spaced checkpoints are more useful than leaving a large project until the deadline. Each checkpoint should end with one concrete next action.",
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
        "For CAS Reflection at DP Core, Popular guides provide prompts, examples and checklists, but students still need a structured way to plan, reflect, test ideas and keep evidence aligned with criteria without copying model answers. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB CAS Reflection",
  whyParagraphs: [],
  whyBullets: [
    "Keep CAS Reflection DP Core revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around creativity, activity and service.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
    "Build a clearer record of mistakes, revisions and next steps across the course.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "How should I use Studiely for this DP core component?",
      answer:
        "Use Studiely to organise experience planning, reflection prompts, and evidence selection, keep important ideas retrievable and turn large requirements into smaller reviewable steps.",
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
  ctaTitle: "Start a More Focused IB CAS Reflection Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB CAS Reflection into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying CAS Reflection",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
