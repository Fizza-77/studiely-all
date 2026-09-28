import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_SCIENCES: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/sciences",
  seoTitle: "IB MYP Sciences Study Resources | Studiely",
  metaDescription:
    "Study Sciences in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Sciences, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Sciences",
    "MYP Sciences resources",
    "MYP Sciences revision notes",
    "MYP Sciences flashcards",
    "MYP Sciences quiz",
    "MYP Sciences practice questions",
    "MYP Sciences assessment practice",
  ],
  breadcrumbName: "Sciences",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Sciences Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Sciences is best approached as a skills-and-understanding course, not a collection of facts to cram. MYP Sciences is strongest when students connect scientific knowledge with scientific practice. Knowing a definition is useful, but assessments often require you to design an investigation, process data, evaluate a method, apply a model or discuss the implications of science in a real context.",
  lead: "IB MYP Sciences supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Concepts",
      body: "Explain mechanisms, models and relationships. You can apply an idea to a new scenario.",
    },
    {
      title: "Investigation",
      body: "Plan variables, methods, data and safety. Your method can generate evidence for the question.",
    },
    {
      title: "Evaluation",
      body: "Interpret patterns, uncertainty and limitations. Conclusions match the data and improvements are specific.",
    },
  ],
  introTitle: "What Strong MYP Work Looks Like",
  introParagraphs: [
    "Build understanding across biology, chemistry, physics and integrated science while developing inquiry, experimental design, data handling, evaluation, scientific communication and reflection on the impacts of science.",
  ],
  extraSections: [
    {
      title: "Turn Revision Into Transfer",
      paragraphs: [
        "Recall a concept without notes, rebuild it as a diagram, test definitions or equations with flashcards, complete a mixed quiz, then answer one unfamiliar application or data question. Finish by explaining the answer aloud in plain language.",
      ],
      bullets: [
        "Link concepts with investigations, data and evaluation.",
        "Use mistake categories to choose the next revision task.",
        "Practise unfamiliar applications instead of relying on recognition from notes.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "Two science habits create false confidence: memorising definitions without applying them and copying practical methods without understanding the variables. After revising a concept, force a transfer by changing the context, graph, organism, material or numbers. For investigations, explain why each control matters and what pattern would support the hypothesis. When evaluating data, distinguish random variation, systematic limitations and genuine biological or physical effects. Finally, make improvements specific enough to test. “Repeat the experiment” is weaker than explaining how more trials, a narrower measurement interval or a better-controlled variable would change the reliability of the evidence. Also practise writing conclusions that match the strength of the data: use cautious language when the pattern is limited, noisy or based on too few observations. Before moving on, state what additional evidence would make the conclusion more convincing and why that evidence would help. Then write one sentence linking the result back to the scientific question, so evidence and purpose stay connected.",
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
      title: "Revision Notes",
      body: "IB MYP Sciences Revision Notes should make the next study action obvious. Structure notes around mechanisms and relationships, not copied paragraphs. Use diagrams, variable links, equations where relevant, common misconceptions and a short “apply it” example. For practical work, keep separate prompts for question, variables, method, evidence and evaluation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Sciences Flashcards should make the next study action obvious. Use retrieval for definitions, equations, processes and units, then add application cards. A strong science card might give a result or diagram and ask what changes, why it changes, or which variable should be controlled.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Sciences Quiz should make the next study action obvious. Combine knowledge questions with data interpretation, experimental design, graph reading and reasoning. Include distractors based on common misconceptions so feedback can explain the scientific principle that separates a plausible answer from a correct one.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Sciences Exam Focus should make the next study action obvious. Prepare for school investigations and written tasks by practising both content and method. Schools offering integrated sciences can use MYP eAssessment; where that applies, include screen-based questions that combine concepts with unfamiliar data and scientific contexts.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Sciences Exam Practice should make the next study action obvious. Alternate topic practice with mixed science problems. After each set, label mistakes as knowledge, interpretation, calculation, experimental design or communication. The label determines the next revision action and prevents repeated broad re-reading.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Sciences revision links concepts with investigation, data and evaluation.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "Does MYP Sciences always mean integrated science?",
      answer:
        "No. MYP sciences commonly includes biology, chemistry and physics, but schools can organise courses as integrated science, separate disciplines or other science courses that meet the subject-group aims. Use your school’s unit sequence while practising the shared inquiry skills.",
    },
    {
      question: "What is the best way to revise experiments?",
      answer:
        "Do not memorise a method word for word. Practise identifying the question, independent and dependent variables, controls, measurements, sources of uncertainty and realistic improvements. Then apply that checklist to a different investigation.",
    },
    {
      question: "How can I improve data questions?",
      answer:
        "Describe the pattern before explaining it, quote values when useful, check units and distinguish correlation from a causal claim unless the evidence supports causation. Repeated graph and table practice makes this process faster.",
    },
    {
      question: "Should I use exam questions if my school does not take eAssessment?",
      answer:
        "Yes, selectively. MYP-style questions can still train application, data handling and scientific reasoning, but your teacher’s task criteria and taught content should determine what you prioritise.",
    },
  ],
  ctaTitle: "Build a better Sciences study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Sciences",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
