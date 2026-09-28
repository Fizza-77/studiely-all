import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_VISUAL_ARTS: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/visual-arts",
  seoTitle: "IB MYP Visual Arts Study Resources | Studiely",
  metaDescription:
    "Study Visual Arts in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Visual Arts, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Visual Arts",
    "MYP Visual Arts resources",
    "MYP Visual Arts revision notes",
    "MYP Visual Arts flashcards",
    "MYP Visual Arts quiz",
    "MYP Visual Arts practice questions",
    "MYP Visual Arts assessment practice",
  ],
  breadcrumbName: "Visual Arts",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Visual Arts Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Visual Arts is best approached as a skills-and-understanding course, not a collection of facts to cram. Visual Arts revision should not turn a creative subject into a list of artist names. Strong MYP work shows a visible process: investigating context, developing ideas, experimenting with media, making purposeful choices and evaluating how well the final work communicates an intention.",
  lead: "IB MYP Visual Arts supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Investigation",
      body: "Study artists, contexts, visual language and references. Research changes the direction of your own ideas.",
    },
    {
      title: "Development",
      body: "Experiment, annotate and refine alternatives. Your process shows decisions rather than a single first idea.",
    },
    {
      title: "Reflection",
      body: "Evaluate intention, technique and audience response. You can explain what changed and what you would improve.",
    },
  ],
  introTitle: "Develop Knowledge and Creative Evidence Together",
  introParagraphs: [
    "Develop visual research, observation, experimentation, technical control, idea development, creative decision-making, contextual understanding and reflective evaluation through a process journal and completed work.",
  ],
  extraSections: [
    {
      title: "A Practice Loop for Creative Work",
      paragraphs: [
        "Study one reference, extract a principle, generate three ideas, test one technique, make a compact process note, quiz key vocabulary and write a short evaluation. On the next session, revise the idea using evidence from the first test.",
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
        "Do not let the final artwork erase the learning process. A polished outcome with weak evidence of investigation and development can hide the decisions that made the work meaningful. Keep experiments small and intentional: change scale, material, composition or viewpoint, then record what the test taught you. Avoid generic reflection such as “I like this version better.” Explain what changed visually, how it affects the intention and what evidence supports the choice. Artist research should also lead somewhere—identify a principle you can transform in your own work rather than copying a recognisable surface style. Before finalising a piece, compare it with the original intention and ask what a viewer can actually see—not what you hoped the work would communicate. Keep one brief note on how audience, context or display choices might change that reading.",
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
      body: "IB MYP Visual Arts Revision Notes should make the next study action obvious. Use notes to organise artist research, visual elements, techniques, terminology and contextual connections. Keep short “borrow the principle, not the image” prompts so research leads to original experimentation rather than imitation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Visual Arts Flashcards should make the next study action obvious. Create cards for visual elements, techniques, process vocabulary, artist/context links and evaluation language. Add image-based prompts where you identify a choice and explain how it affects composition, emphasis, movement, mood or meaning.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Visual Arts Quiz should make the next study action obvious. Use short visual-analysis questions, process-order decisions and terminology checks. Include reflection prompts that ask which experiment best supports an intention or what evidence would make a process journal entry more convincing.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Visual Arts Exam Focus should make the next study action obvious. For MYP Arts, assessment can centre on coursework and ePortfolio-style evidence where your school participates in eAssessment. Practise documenting process, explaining decisions and evaluating outcomes rather than treating “exam focus” as a traditional written-paper routine.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Visual Arts Exam Practice should make the next study action obvious. Set small studio challenges: three compositions from one theme, two media tests, or one artwork analysed from contrasting viewpoints. Photograph stages and annotate what changed. The record of thinking is part of the learning, not an afterthought.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Visual Arts knowledge stays linked to investigation, development and reflective evaluation.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "What should I revise for MYP Visual Arts?",
      answer:
        "Revise the language and processes that help you investigate, develop, create and evaluate: visual elements, techniques, context, artist research, annotation, intention and reflection. Your own process journal is one of the best revision sources because it shows where your thinking needs more depth.",
    },
    {
      question: "Do I need to memorise artists?",
      answer:
        "Know the artists and works relevant to your course, but focus on why they matter. Be able to discuss context, visual choices and ideas, then explain how the research informed your own experimentation without copying the work.",
    },
    {
      question: "How can Studiely flashcards help in an arts subject?",
      answer:
        "Use cards for terminology, techniques, context and reflective language, plus image prompts that require a short visual analysis. They support the knowledge layer while studio practice develops the making layer.",
    },
    {
      question: "Is MYP Visual Arts mainly an exam subject?",
      answer:
        "No. MYP Arts emphasises creative process and performance or making. In schools using MYP eAssessment, arts can be represented through externally moderated ePortfolio coursework, so evidence of process and reflection is especially important.",
    },
  ],
  ctaTitle: "Build a better Visual Arts study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Visual Arts",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
