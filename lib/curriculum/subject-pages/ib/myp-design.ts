import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_DESIGN: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/design",
  seoTitle: "IB MYP Design Study Resources | Studiely",
  metaDescription:
    "Study Design in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Design, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Design",
    "MYP Design resources",
    "MYP Design revision notes",
    "MYP Design flashcards",
    "MYP Design quiz",
    "MYP Design practice questions",
    "MYP Design assessment practice",
  ],
  breadcrumbName: "Design",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Design Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Design is best approached as a skills-and-understanding course, not a collection of facts to cram. MYP Design is a process subject. A polished final product cannot replace weak inquiry, vague criteria or missing evaluation. Students need to show how they understand a problem, develop ideas, create a feasible solution, test it and use evidence to judge whether it works.",
  lead: "IB MYP Design supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Inquiry",
      body: "Define the problem, user and evidence needed. Research leads to clear design requirements.",
    },
    {
      title: "Development",
      body: "Generate, compare and justify feasible ideas. The chosen solution follows explicit criteria.",
    },
    {
      title: "Testing",
      body: "Evaluate the solution against evidence. Improvements are linked to test results, not preference.",
    },
  ],
  introTitle: "Make the Design Process Visible",
  introParagraphs: [
    "Develop inquiry, user-centred problem solving, research, design specifications, ideation, prototyping, digital or product design skills, testing and evaluation through the MYP design cycle.",
  ],
  extraSections: [
    {
      title: "A Design Practice Loop",
      paragraphs: [
        "Define one problem, make a short evidence note, retrieve design-cycle prompts with flashcards, complete a decision quiz, sketch or prototype a solution, then evaluate it against measurable criteria. Record the next improvement before ending the session.",
      ],
      bullets: [
        "Keep research, criteria, ideas, creation and evaluation in one visible cycle.",
        "Use decision questions to strengthen design reasoning.",
        "Test against evidence so improvement is linked to user needs and specifications.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "The most common Design mistake is jumping from a broad problem straight to a favourite solution. Slow the process down enough to prove the need, define the user and write criteria that can actually be tested. Avoid specifications such as “easy to use” unless you decide what observable evidence would demonstrate ease of use. During development, keep rejected ideas and explain why they were rejected; that evidence shows reasoning. At the end, test the solution against the original criteria rather than writing a general opinion. Evaluation is strongest when it leads to a specific, evidence-based improvement. A useful final check is to trace each major design decision back to either user research, a specification or test evidence; unsupported choices are the first place to revise. If the project uses digital tools or physical materials, document constraints and trade-offs so the evaluation reflects real design decisions.",
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
      body: "IB MYP Design Revision Notes should make the next study action obvious. Organise notes around the design cycle: problem, user, research, specification, ideas, plan, creation, testing and evaluation. Keep examples of strong measurable criteria and research questions so you can adapt them to new design contexts.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Design Flashcards should make the next study action obvious. Use cards for design terminology, command terms, process stages, research methods and testing strategies. Scenario cards can ask which evidence is needed before designing or which test would best measure a specification.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Design Quiz should make the next study action obvious. Use decision-based questions rather than only definitions. Ask students to choose a better specification, identify weak research, sequence a plan, select an appropriate test or explain what evidence supports an improvement.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Design Exam Focus should make the next study action obvious. MYP Design focuses on the holistic design process. For schools participating in eAssessment, Design can use ePortfolio coursework, so assessment practice should train documentation, justification and evidence across the cycle rather than imitate a generic written exam.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Design Exam Practice should make the next study action obvious. Take a small everyday problem and complete a compressed design sprint: user need, three criteria, quick research, two concepts, one prototype and one test. The scale can be tiny; the purpose is to practise the reasoning sequence.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so each Design study session advances inquiry, development and evidence-based evaluation.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "What is the MYP Design cycle?",
      answer:
        "MYP Design structures learning around inquiry and analysis, developing ideas, creating a solution, and testing or evaluating the outcome. The exact classroom project can be digital, product-based or a combination, but the process keeps evidence and decision-making visible.",
    },
    {
      question: "Should I focus more on the product or the process?",
      answer:
        "Both matter, but MYP Design explicitly values the holistic process. A strong product with little evidence of inquiry, development and evaluation may not show the full learning. Document why decisions were made and how testing changed the solution.",
    },
    {
      question: "How can I make design specifications stronger?",
      answer:
        "Write criteria that are specific enough to test. Include measurable or observable features linked to the user and research. Avoid vague statements such as “it should look good” unless you define what success would mean and how it will be checked.",
    },
    {
      question: "Is MYP Design assessed by a written exam?",
      answer:
        "Assessment is mainly school-based. In schools using MYP eAssessment, Design can be assessed through externally moderated ePortfolio coursework, so documentation and evidence across the design cycle are central.",
    },
  ],
  ctaTitle: "Build a better Design study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Design",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
