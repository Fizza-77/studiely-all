import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_PHYSICAL_AND_HEALTH_EDUCATION: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/physical-and-health-education",
  seoTitle: "IB MYP Physical and Health Education Resources | Studiely",
  metaDescription:
    "Study Physical and Health Education in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Physical and Health Education, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Physical and Health Education",
    "MYP Physical and Health Education resources",
    "MYP Physical and Health Education revision notes",
    "MYP Physical and Health Education flashcards",
    "MYP Physical and Health Education quiz",
    "MYP Physical and Health Education practice questions",
    "MYP Physical and Health Education assessment practice",
  ],
  breadcrumbName: "Physical and Health Education",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Physical and Health Education Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Physical and Health Education is best approached as a skills-and-understanding course, not a collection of facts to cram. MYP Physical and Health Education combines understanding with action. Students learn about health, training and movement, then apply that knowledge through planning, performance, collaboration and reflection. A useful study page therefore supports both classroom concepts and the decisions students make during physical activity.",
  lead: "IB MYP Physical and Health Education supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Knowledge",
      body: "Understand fitness, health, training and movement concepts. You can use knowledge to justify a plan or decision.",
    },
    {
      title: "Performance",
      body: "Apply skills, tactics and movement safely. Technique and decision-making improve through feedback.",
    },
    {
      title: "Reflection",
      body: "Evaluate performance using evidence. Next steps are specific and measurable.",
    },
  ],
  introTitle: "Connect Theory, Performance and Reflection",
  introParagraphs: [
    "Develop knowledge of health and physical activity, planning for performance, movement skills, teamwork, training principles, fitness, well-being and reflective improvement. MYP PHE includes learning about and learning through physical activity.",
  ],
  extraSections: [
    {
      title: "A Performance Improvement Loop",
      paragraphs: [
        "Review one concept, retrieve terms with flashcards, complete an applied quiz, use the idea in a practical session, then write a short evidence-based reflection. The next session should begin with the improvement identified in that reflection.",
      ],
      bullets: [
        "Connect health and training knowledge to practical decisions.",
        "Use measurable evidence when reflecting on performance.",
        "Let each reflection set a specific next practice target.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "Avoid vague improvement plans such as “train harder” or “be fitter.” Define the goal, choose evidence, select a method and state how progress will be measured. The same applies to reflection: replace “my performance was good” with an observation linked to technique, decision-making, fitness or teamwork. Theory should also return to action. When revising a training principle or health concept, apply it to a specific athlete, activity or scenario. This makes knowledge easier to retrieve and gives you stronger justification when a task asks you to plan or evaluate performance. When you use data such as time, repetitions, heart rate or accuracy, explain what the number means for the goal rather than listing it without interpretation.",
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
      body: "IB MYP Physical and Health Education Revision Notes should make the next study action obvious. Create concise notes for training principles, fitness components, nutrition, biomechanics, health choices and unit-specific tactics or techniques. Link each concept to an example from your own activity so theory remains practical.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Physical and Health Education Flashcards should make the next study action obvious. Use cards for terminology, training methods, movement principles and health concepts. Add scenario cards such as “Which training method fits this goal?” or “What change would make this plan safer or more effective?”",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Physical and Health Education Quiz should make the next study action obvious. Mix knowledge checks with applied scenarios, planning decisions and reflection questions. Good feedback explains why a choice fits the goal, athlete, activity or context rather than rewarding memorised definitions alone.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Physical and Health Education Exam Focus should make the next study action obvious. Prepare for practical tasks, planning and reflection as well as theory. In schools using MYP eAssessment, PHE can be represented through ePortfolio coursework, so collect evidence of planning, performance and improvement instead of treating assessment focus as a written exam only.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Physical and Health Education Exam Practice should make the next study action obvious. Use measurable practice goals. Record a baseline, choose one technical or fitness target, practise, collect simple evidence and reflect. This makes improvement visible and gives you material for stronger evaluation writing.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so PHE knowledge supports planning, performance and evidence-based reflection.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "What topics can MYP Physical and Health Education include?",
      answer:
        "Schools can include fitness, training, nutrition, lifestyle, biomechanics, exercise physiology, first aid, team and individual sports, aesthetic movement and other physical activities. The exact programme varies, so use your course units as the immediate revision guide.",
    },
    {
      question: "How much of PHE should be practical?",
      answer:
        "The MYP expects substantial learning through physical activity; official guidance says courses must engage students in physical education activities for at least half of the teaching time allocated to the subject group. Study support should complement, not replace, active practice.",
    },
    {
      question: "How do I write a stronger performance reflection?",
      answer:
        "Use evidence. State the goal, describe what happened, refer to a measurable or observable example, explain why it happened and choose one realistic improvement. Specific reflection is more useful than a general score or feeling.",
    },
    {
      question: "Is PHE eAssessment a written exam?",
      answer:
        "Not in the same way as on-screen subjects such as Mathematics or Sciences. In MYP eAssessment pathways, PHE can use externally moderated ePortfolio coursework, so process and performance evidence are important.",
    },
  ],
  ctaTitle: "Build a better Physical and Health Education study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Physical and Health Education",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
