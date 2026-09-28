import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_DRAMA: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/drama",
  seoTitle: "IB MYP Drama Study Resources | Studiely",
  metaDescription:
    "Study Drama in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Drama, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Drama",
    "MYP Drama resources",
    "MYP Drama revision notes",
    "MYP Drama flashcards",
    "MYP Drama quiz",
    "MYP Drama practice questions",
    "MYP Drama assessment practice",
  ],
  breadcrumbName: "Drama",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Drama Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Drama is best approached as a skills-and-understanding course, not a collection of facts to cram. Drama is learned through doing, but strong performance depends on thinking that can be explained. MYP students investigate theatre forms, develop ideas, rehearse choices, collaborate, perform and reflect on how those choices communicate to an audience. Useful revision therefore moves between theatre vocabulary and practical experimentation.",
  lead: "IB MYP Drama supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Theatre language",
      body: "Use performance vocabulary to describe choices. Reflection names what happened and why it mattered.",
    },
    {
      title: "Development",
      body: "Try alternatives in voice, movement, space and structure. Rehearsal shows purposeful refinement.",
    },
    {
      title: "Audience",
      body: "Connect intention with what the audience experiences. Performance choices support a clear dramatic purpose.",
    },
  ],
  introTitle: "Develop Knowledge and Creative Evidence Together",
  introParagraphs: [
    "Build theatre knowledge, performance skills, devising, interpretation, collaboration, rehearsal discipline, contextual research, audience awareness and reflective evaluation.",
  ],
  extraSections: [
    {
      title: "A Practice Loop for Creative Work",
      paragraphs: [
        "Review one theatre concept, retrieve terms with flashcards, apply the concept to a short scene, quiz your reasoning, rehearse an alternative and write a concise reflection. Use the reflection to set the next practical target.",
      ],
      bullets: [
        "Keep investigation, development, making and evaluation connected.",
        "Use knowledge tools to support—not replace—creative practice.",
        "Document decisions so process evidence shows genuine development.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "A weak drama reflection describes what the group did; a strong one explains the intention, the performance choice and its effect. Build that habit during rehearsal, not after the final performance. Test one variable at a time—pace, proximity, gesture, vocal quality, focus or staging—and record which version communicates the idea more clearly. Another trap is learning practitioner or theatre-form vocabulary without applying it. For every term, create a ten-second practical example or identify it in a scene. This links conceptual knowledge to the decisions an actor, director or deviser actually makes. If collaboration is part of the task, note how group decisions changed the scene and what evidence shows the change improved communication with the audience. After the run, choose one next rehearsal experiment instead of listing several vague improvements; focused iteration produces clearer evidence of development. Revisit the same moment later and check whether the audience effect changed in the way you intended. Record the result.",
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
      body: "IB MYP Drama Revision Notes should make the next study action obvious. Keep short reference pages for theatre conventions, practitioners, performance vocabulary, staging choices and the context of works studied. Add examples from your own rehearsals so notes connect directly to decisions you can reproduce.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Drama Flashcards should make the next study action obvious. Use cards for terminology, stagecraft, practitioners, dramatic forms and rehearsal prompts. A practical card can ask you to perform the same line with two objectives or change status through posture, turning retrieval into embodied practice.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Drama Quiz should make the next study action obvious. Use scenario questions: which staging choice best supports the intention, what does a convention communicate, or how could feedback change a scene? Include short terminology checks but make most questions connect knowledge to performance decisions.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Drama Exam Focus should make the next study action obvious. Prepare evidence of investigation, development, performance and evaluation. If your school uses an MYP Arts ePortfolio pathway, practise selecting process evidence and writing clear reflections; “exam focus” should support the creative task rather than imitate a traditional written paper.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Drama Exam Practice should make the next study action obvious. Rehearse in small experiments. Change one variable—pace, distance, gesture, vocal quality, focus or staging—and compare the effect. Record a short clip or note and decide which version better serves the intention.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Drama study moves between theatre knowledge and practical experimentation.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "What should I revise for MYP Drama?",
      answer:
        "Revise the theatre language, forms, practitioners and contexts used in your course, but pair that knowledge with practical application. The goal is to explain and refine performance choices, not only define terms.",
    },
    {
      question: "How can I improve drama reflection writing?",
      answer:
        "Name the intention, identify a specific choice, describe its effect, use evidence from rehearsal or audience response and state what you would change next. Avoid general comments such as “it went well” without analysis.",
    },
    {
      question: "Do flashcards make sense for a performance subject?",
      answer:
        "Yes for the knowledge and vocabulary layer. They can also hold practical prompts that trigger a short rehearsal task. Keep most of your improvement time in performance, collaboration and reflection.",
    },
    {
      question: "How is MYP Drama assessed?",
      answer:
        "Assessment is organised by the school against MYP Arts objectives. Schools participating in eAssessment can use Arts ePortfolio coursework, so process evidence and reflection can matter as much as the final performance.",
    },
  ],
  ctaTitle: "Build a better Drama study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Drama",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
