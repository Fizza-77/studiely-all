import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_VISUAL_ARTS_SL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/visual-arts-sl",
  seoTitle: "IB Visual Arts SL Study Resources | Studiely",
  metaDescription:
    "Study IB Visual Arts SL with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB Visual Arts SL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB Visual Arts SL",
    "IB Visual Arts SL revision notes",
    "IB Visual Arts SL past papers",
    "IB Visual Arts SL practice questions",
    "IB Visual Arts SL flashcards",
    "IB Visual Arts SL exam questions",
    "IB Visual Arts SL quiz",
    "IB Visual Arts SL exam focus",
    "IB Visual Arts SL exam practice",
    "IB Visual Arts SL study resources",
  ],
  breadcrumbName: "Visual Arts SL",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB Visual Arts SL Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB Visual Arts SL brings together art-making as inquiry, creative process, and context and audience with the discipline needed to perform consistently in IB assessment. The course becomes more manageable when revision is organized around the decisions students actually make in assessment tasks. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB Visual Arts SL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    { title: "Learn", body: "Clarify art-making as inquiry and connected ideas." },
    { title: "Recall", body: "Use active-recall prompts instead of passive rereading." },
    { title: "Apply", body: "Practise process documentation and review mistakes." },
  ],
  introTitle: "What IB Visual Arts SL Requires",
  introParagraphs: [
    "At Standard Level, success depends on focused art-making inquiry, reflective documentation and purposeful communication of artistic decisions. The course asks students to control more than isolated facts: they must connect art-making as inquiry, creative process, context and audience, material practice, and critical reflection and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect studio inquiry, documentation, critical connection and presentation of resolved work rather than a conventional written exam, rather than treating every topic as if it will be assessed in the same way.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For Visual Arts at Standard Level, build a study map around art-making as inquiry, creative process, context and audience, and material practice. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application.",
      ],
    },
    {
      title: "Curriculum Note",
      paragraphs: [
        "For Visual Arts at Standard Level, The redesigned DP Visual Arts course is first assessed in May 2027 and is organized around create, connect and communicate within art-making as inquiry.",
      ],
    },
    {
      title: "Standard Level Focus",
      paragraphs: [
        "IB Visual Arts SL should not be prepared as a renamed version of IB Visual Arts HL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is focused art-making inquiry, reflective documentation and purposeful communication of artistic decisions, which should shape examples, practice intensity and revision depth.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "Effective preparation works best as a cycle rather than a pile of disconnected resources: learn, recall, apply, check and refine. For Visual Arts at Standard Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context.",
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
      body: "IB Visual Arts SL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain art-making as inquiry, creative process, and context and audience. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For standard level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB Visual Arts SL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB Visual Arts SL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on process documentation, artist research, and comparative thinking, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB Visual Arts SL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Standard Level, those priorities may include artist research, comparative thinking, and portfolio curation. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB Visual Arts SL Exam Practice should be interpreted as assessment practice where the course is not built around conventional written exams. Students can rehearse process documentation, artist research, comparative thinking, and portfolio curation, compare work against published criteria, and improve the quality of evidence, explanation and reflection. For portfolio/process evidence, comparative/contextual analysis and exhibition planning, spaced checkpoints are more useful than leaving a large project until the deadline. Each checkpoint should end with one concrete next action.",
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
        "For Visual Arts at Standard Level, Many resources explain assessment components or show examples, but students often lack a single system for managing research, process evidence, reflection and final presentation. The opportunity is to support the creative process without reducing it to generic exam cramming. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Visual Arts SL",
  whyParagraphs: [],
  whyBullets: [
    "Keep Visual Arts Standard Level revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around art-making as inquiry, creative process and context and audience.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "Is this subject mainly practical or academic?",
      answer:
        "IB Visual Arts SL combines making or performing with research, analysis, documentation and reflection. Strong students treat process evidence as part of the work, not as an afterthought.",
    },
    {
      question: "How can flashcards help a creative subject?",
      answer:
        "Use them for terminology, practitioners, traditions, concepts, criteria language and reflective prompts. They are useful for retrieval, while the main growth still comes from making, analysing and revising work.",
    },
    {
      question: "What does “exam practice” mean for an arts subject?",
      answer:
        "It means assessment practice: rehearsing analysis, planning submissions, reviewing evidence against criteria and practising the decisions required by each component, even when there is no conventional written exam.",
    },
    {
      question: "How do I avoid generic reflection?",
      answer:
        "Name a specific decision, explain why it was made, evaluate what changed and identify the next action. Reflection should show development rather than simply describe what happened.",
    },
  ],
  ctaTitle: "Start a More Focused IB Visual Arts SL Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB Visual Arts SL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying Visual Arts SL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
