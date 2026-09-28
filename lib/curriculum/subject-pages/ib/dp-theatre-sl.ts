import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_THEATRE_SL: SubjectLandingContent = {
  path: "/international-baccalaureate/dp/theatre-sl",
  seoTitle: "IB Theatre SL Study Resources | Studiely",
  metaDescription:
    "Study IB Theatre SL with revision notes, flashcards, quizzes, assessment focus and practice designed for focused IB Diploma preparation.",
  shortDescription:
    "A focused IB Theatre SL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
  keywords: [
    "IB Theatre SL",
    "IB Theatre SL revision notes",
    "IB Theatre SL past papers",
    "IB Theatre SL practice questions",
    "IB Theatre SL flashcards",
    "IB Theatre SL exam questions",
    "IB Theatre SL quiz",
    "IB Theatre SL exam focus",
    "IB Theatre SL exam practice",
    "IB Theatre SL study resources",
  ],
  breadcrumbName: "Theatre SL",
  heroEyebrow: "IB Diploma Programme",
  heroTitle: "IB Theatre SL Study Resources for",
  heroHighlight:
    "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
  heroIntro:
    "IB Theatre SL brings together staging play texts, world theatre traditions, and collaborative creation with the discipline needed to perform consistently in IB assessment. The hardest part is rarely finding more material; it is knowing what to learn, what to practise next, and how to turn feedback into a better response. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
  lead: "IB Theatre SL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
  workflowSteps: [
    { title: "Learn", body: "Clarify staging play texts and connected ideas." },
    { title: "Recall", body: "Use active-recall prompts instead of passive rereading." },
    { title: "Apply", body: "Practise production proposal planning and review mistakes." },
  ],
  introTitle: "What IB Theatre SL Requires",
  introParagraphs: [
    "At Standard Level, success depends on production proposal, research presentation and collaborative project work with focused performance and reflective development across the standard-level course. The course asks students to control more than isolated facts: they must connect staging play texts, world theatre traditions, collaborative creation, performance, and design and directing and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect production proposal, research presentation, collaborative project and the HL-only solo theatre piece, rather than treating every topic as if it will be assessed in the same way.",
  ],
  extraSections: [
    {
      title: "Build a Map of What Matters",
      paragraphs: [
        "For Theatre at Standard Level, build a study map around staging play texts, world theatre traditions, collaborative creation, and performance. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application.",
      ],
    },
    {
      title: "Standard Level Focus",
      paragraphs: [
        "IB Theatre SL should not be prepared as a renamed version of IB Theatre HL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is production proposal, research presentation and collaborative project work with focused performance and reflective development across the standard-level course, which should shape examples, practice intensity and revision depth.",
      ],
    },
    {
      title: "A Connected Study Workflow",
      paragraphs: [
        "Instead of separating notes from practice, students benefit from a loop that moves from understanding to retrieval and then to assessment-style application. For Theatre at Standard Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
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
      body: "IB Theatre SL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain staging play texts, world theatre traditions, and collaborative creation. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For standard level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "IB Theatre SL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice That Diagnoses Weaknesses",
      body: "IB Theatre SL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on production proposal planning, research presentation rehearsal, and ensemble reflection, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus: Prioritise the Next Mark",
      body: "IB Theatre SL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Standard Level, those priorities may include research presentation rehearsal, ensemble reflection, and performance analysis. This is more actionable than trying to revise the entire course at once.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Practice, Review and Retry",
      body: "IB Theatre SL Exam Practice should be interpreted as assessment practice where the course is not built around conventional written exams. Students can rehearse production proposal planning, research presentation rehearsal, ensemble reflection, and performance analysis, compare work against published criteria, and improve the quality of evidence, explanation and reflection. For proposal design, research documentation, collaboration and reflective evidence, spaced checkpoints are more useful than leaving a large project until the deadline. Each checkpoint should end with one concrete next action.",
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
        "For Theatre at Standard Level, Many resources explain assessment components or show examples, but students often lack a single system for managing research, process evidence, reflection and final presentation. The opportunity is to support the creative process without reducing it to generic exam cramming. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
      ],
    },
  ],
  whyTitle: "Why Students Use Studiely for IB Theatre SL",
  whyParagraphs: [],
  whyBullets: [
    "Keep Theatre Standard Level revision in one repeatable study sequence instead of switching between disconnected files.",
    "Use subject-specific prompts built around staging play texts, world theatre traditions and collaborative creation.",
    "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
    "Build a clearer record of mistakes, revisions and next steps across the course.",
  ],
  whyAfterParagraphs: [IB_DISCLAIMER],
  faqs: [
    {
      question: "Is this subject mainly practical or academic?",
      answer:
        "IB Theatre SL combines making or performing with research, analysis, documentation and reflection. Strong students treat process evidence as part of the work, not as an afterthought.",
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
  ctaTitle: "Start a More Focused IB Theatre SL Revision Cycle",
  ctaBody:
    "Use Studiely to turn IB Theatre SL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
  ctaPrimaryLabel: "Start studying Theatre SL",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
