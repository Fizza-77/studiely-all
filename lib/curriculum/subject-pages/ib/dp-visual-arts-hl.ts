import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_VISUAL_ARTS_HL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/visual-arts-hl",
  seoTitle: "IB Visual Arts HL Study Resources | Studiely",
  metaDescription:
    "Study IB Visual Arts HL with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB Visual Arts HL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB Visual Arts HL",
    "IB Visual Arts HL revision notes",
    "IB Visual Arts HL past papers",
    "IB Visual Arts HL practice questions",
    "IB Visual Arts HL flashcards",
    "IB Visual Arts HL exam questions",
    "IB Visual Arts HL quiz",
    "IB Visual Arts HL exam focus",
    "IB Visual Arts HL exam practice",
    "IB Visual Arts HL study resources",
  ],
  breadcrumbName: "Visual Arts HL",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB Visual Arts HL Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB Visual Arts HL brings together art-making as inquiry, creative process, and context and audience with the discipline needed to perform consistently in IB assessment. The course becomes more manageable when revision is organized around the decisions students actually make in assessment tasks. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB Visual Arts HL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    { title: "Learn", body: "Clarify art-making as inquiry and connected ideas." },
    { title: "Recall", body: "Use active-recall prompts instead of passive rereading." },
    { title: "Apply", body: "Practise process documentation and review mistakes." },
  ],
  introTitle: "What IB Visual Arts HL Requires",
  introParagraphs: [
    "At Higher Level, success depends on greater independence, depth and breadth in studio inquiry and art-making. The course asks students to control more than isolated facts: they must connect art-making as inquiry, creative process, context and audience, material practice, and critical reflection and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect studio inquiry, documentation, critical connection and presentation of resolved work rather than a conventional written exam, rather than treating every topic as if it will be assessed in the same way.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For Visual Arts at Higher Level, build a study map around art-making as inquiry, creative process, context and audience, and material practice. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application. Attach a practice action to each area, such as process documentation, artist research, and comparative thinking, so revision produces evidence of improvement rather than passive rereading.",
      ],
    },
    {
      title: "Curriculum Note",
      paragraphs: [
        "The redesigned DP Visual Arts course is first assessed in May 2027 with emphasis on create, connect and communicate. Students should confirm which guide applies to their examination session.",
      ],
    },
    {
      title: "Higher Level Focus",
      paragraphs: [
        "IB Visual Arts HL should not be prepared as a renamed version of IB Visual Arts SL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is greater independence, depth and breadth in studio inquiry and art-making, which should shape examples, practice intensity and revision depth.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "Instead of separating notes from practice, students benefit from a loop that moves from understanding to retrieval and then to assessment-style application. For Visual Arts at Higher Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context.",
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
      body: "IB Visual Arts HL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain art-making as inquiry, creative process, and context and audience. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For higher level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB Visual Arts HL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB Visual Arts HL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on process documentation, artist research, and comparative thinking, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB Visual Arts HL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Higher Level, those priorities may include artist research, comparative thinking, and portfolio curation. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB Visual Arts HL Exam Practice should be interpreted as assessment practice where the course is not built around conventional written exams. Students can rehearse process documentation, artist research, comparative thinking, and portfolio curation, compare work against published criteria, and improve the quality of evidence, explanation and reflection. For portfolio and process evidence, investigation documentation and reflective connection, spaced checkpoints are more useful than leaving a large project until the deadline. Each checkpoint should end with one concrete next action.",
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
        "For Visual Arts at Higher Level, Many resources explain assessment components or show examples, but students often lack a single system for managing research, process evidence, reflection and final presentation. The opportunity is to support the creative process without reducing it to generic exam cramming. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Visual Arts HL",
  whyParagraphs: [],
  whyBullets: [
    "Keep Visual Arts Higher Level revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around art-making as inquiry, creative process and context and audience.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "Is this subject mainly practical or academic?",
      answer:
        "IB Visual Arts HL combines making or performing with research, analysis, documentation and reflection. Strong students treat process evidence as part of the work, not as an afterthought.",
    },
    {
      question: "How can flashcards help a creative subject?",
      answer:
        "Use them for terminology, practitioners, traditions, concepts, criteria language and reflective prompts. They are useful for retrieval, while the main growth still comes from making, analysing and revising work.",
    },
    {
      question: "What does \"exam practice\" mean for an arts subject?",
      answer:
        "It means assessment practice: rehearsing analysis, planning submissions, reviewing evidence against criteria and practising the decisions required by each component, even when there is no conventional written exam.",
    },
    {
      question: "How do I avoid generic reflection?",
      answer:
        "Name a specific decision, explain why it was made, evaluate what changed and identify the next action. Reflection should show development rather than simply describe what happened.",
    },
  ],
  ctaTitle: "Start a More Focused IB Visual Arts HL Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB Visual Arts HL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying Visual Arts HL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
