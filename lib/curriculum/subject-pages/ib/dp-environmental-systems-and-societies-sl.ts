import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const IB_DISCLAIMER =
  "Independent study support: Studiely is an independent study-support platform and is not affiliated with or endorsed by the International Baccalaureate Organization. Always confirm current assessment requirements with your school and the official IB subject brief for your exam session.";

export const IB_DP_ENVIRONMENTAL_SYSTEMS_AND_SOCIETIES_SL: SubjectLandingContent =
  {
    path: "/international-baccalaureate/dp/environmental-systems-and-societies-sl",
    seoTitle:
      "IB Environmental Systems and Societies SL Study Resources | Studiely",
    metaDescription:
      "Study IB Environmental Systems and Societies SL with notes, flashcards, quizzes, assessment focus and IB-style practice on Studiely.",
    shortDescription:
      "A focused IB Environmental Systems and Societies SL study page connecting subject knowledge with active recall, targeted practice and assessment preparation.",
    keywords: [
      "IB Environmental Systems and Societies SL",
      "IB Environmental Systems and Societies SL revision notes",
      "IB Environmental Systems and Societies SL past papers",
      "IB Environmental Systems and Societies SL practice questions",
      "IB Environmental Systems and Societies SL flashcards",
      "IB Environmental Systems and Societies SL exam questions",
      "IB Environmental Systems and Societies SL quiz",
      "IB Environmental Systems and Societies SL exam focus",
      "IB Environmental Systems and Societies SL exam practice",
      "IB Environmental Systems and Societies SL study resources",
    ],
    breadcrumbName: "Environmental Systems and Societies SL",
    heroEyebrow: "IB Diploma Programme",
    heroTitle: "IB Environmental Systems and Societies SL Study Resources for",
    heroHighlight:
      "Revision Notes • Flashcards • Quiz • Assessment Focus • Practice",
    heroIntro:
      "IB Environmental Systems and Societies SL brings together environmental systems, biodiversity, and climate change with the discipline needed to perform consistently in IB assessment. The course becomes more manageable when revision is organized around the decisions students actually make in assessment tasks. Studiely is designed to connect revision notes, flashcards, quizzes, assessment focus and practice in one workflow so students can move from understanding to usable performance.",
    lead: "IB Environmental Systems and Societies SL students can use Studiely to organise the course into focused revision notes, turn key ideas into flashcards, test recall with quizzes, identify assessment priorities and practise the kinds of decisions the subject demands. The goal is not to replace class teaching or official IB guidance, but to provide independent study support that makes revision more deliberate and easier to review.",
    workflowSteps: [
      {
        title: "Learn",
        body: "Clarify environmental systems and connected ideas.",
      },
      {
        title: "Recall",
        body: "Use active-recall prompts instead of passive rereading.",
      },
      {
        title: "Apply",
        body: "Practise systems diagrams and review mistakes.",
      },
    ],
    introTitle: "What IB Environmental Systems and Societies SL Requires",
    introParagraphs: [
      "At Standard Level, success depends on integrated environmental understanding, systems thinking and balanced scientific-social evaluation. The course asks students to control more than isolated facts: they must connect environmental systems, biodiversity, climate change, resource use, and sustainability and environmental governance and use that understanding in purposeful responses. That is why a good study plan should separate “I have read this” from “I can retrieve it, explain it, apply it and improve it after feedback.” Preparation should also reflect data and systems analysis, environmental evaluation and investigation-based work, rather than treating every topic as if it will be assessed in the same way.",
    ],
    extraSections: [
      {
        title: "Build a Map of What Matters",
        paragraphs: [
          "For Environmental Systems and Societies at Standard Level, build a study map around environmental systems, biodiversity, climate change, and resource use. Mark the ideas that are foundational, dependent on earlier knowledge or likely to need repeated application.",
        ],
      },
      {
        title: "Curriculum Note",
        paragraphs: [
          "For Environmental Systems and Societies at Standard Level, The revised ESS course is offered at both SL and HL and is first assessed in May 2026.",
        ],
      },
      {
        title: "Standard Level Focus",
        paragraphs: [
          "IB Environmental Systems and Societies SL should not be prepared as a renamed version of IB Environmental Systems and Societies HL. The levels overlap, but scope, depth and assessment demands differ. Here the emphasis is integrated environmental understanding, systems thinking and balanced scientific-social evaluation, which should shape examples, practice intensity and revision depth.",
        ],
      },
      {
        title: "A Connected Study Workflow",
        paragraphs: [
          "Instead of separating notes from practice, students benefit from a loop that moves from understanding to retrieval and then to assessment-style application. For Environmental Systems and Societies at Standard Level, use a short note to clarify one idea, a flashcard to retrieve it, a quiz to expose confusion and a practice task to test it in a realistic context. When an answer goes wrong, the mistake should feed back into the next revision session rather than disappear after marking.",
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
        body: "IB Environmental Systems and Societies SL Revision Notes should reduce complexity without flattening the subject. Strong notes highlight relationships, common confusions, useful examples and the language students need to explain environmental systems, biodiversity, and climate change. Keep each note purposeful: one concept, one clear explanation, one connection and one prompt that forces you to use the idea. For standard level preparation, notes should also flag the parts of the course that demand the greatest depth or judgement.",
        icon: "/icons/notes.svg",
        accent: BLUE,
        href: STUDIELY_APP.notes,
        cta: "Create revision notes",
      },
      {
        id: "flashcards",
        title: "Flashcards for Active Recall",
        body: "IB Environmental Systems and Societies SL Flashcards work best for material that benefits from fast retrieval: definitions, distinctions, processes, examples, terminology, evidence or recurring decision rules. Instead of copying sentences from notes, turn each card into a question. Mix straightforward recall with “why”, “how”, “compare” and “what would change if” prompts so memory develops into flexible understanding.",
        icon: "/icons/flashcards.svg",
        accent: PINK,
        href: STUDIELY_APP.flashcards,
        cta: "Build flashcards",
      },
      {
        id: "quiz",
        title: "Quiz Practice That Diagnoses Weaknesses",
        body: "IB Environmental Systems and Societies SL Quiz can act as an early-warning system. Use short sets after a topic, then mix old and new content so strong memory is not confused with familiarity. For this subject, useful quiz prompts should draw on systems diagrams, data interpretation, and case-study evaluation, not only multiple-choice recall. Review wrong answers by naming the reason for the error: missing knowledge, weak interpretation, poor method, imprecise language or rushed judgement.",
        icon: "/icons/quiz.svg",
        accent: CORAL,
        href: STUDIELY_APP.quiz,
        cta: "Start a quiz",
      },
      {
        id: "exam-focus",
        title: "Assessment Focus: Prioritise the Next Mark",
        body: "IB Environmental Systems and Societies SL Exam Focus should prioritize the work that has the greatest effect on performance. A weekly focus list can identify one knowledge gap, one response skill and one assessment habit to improve. At Standard Level, those priorities may include data interpretation, case-study evaluation, and environmental calculations. This is more actionable than trying to revise the entire course at once.",
        icon: "/icons/exam-focus.svg",
        accent: LIME,
        href: STUDIELY_APP.examFocus,
        cta: "Open exam focus",
      },
      {
        id: "exam-practice",
        title: "Practice, Review and Retry",
        body: "IB Environmental Systems and Societies SL Exam Practice should progress from focused tasks to mixed and timed work. Begin with one skill or topic, move to unfamiliar combinations, then practise under realistic time pressure. After each set, compare the response with the marking expectations available through teachers or official materials, keep an error log and retry the same skill a few days later. That retry step is what turns feedback into learning.",
        icon: "/icons/exam.svg",
        accent: BLUE,
        href: STUDIELY_APP.notes,
        cta: "Practise exam-style",
      },
    ],
    afterToolsSections: [
      {
        title: "What Strong IB Resources Often Leave Unconnected",
        paragraphs: [
          "For Environmental Systems and Societies at Standard Level, High-performing sites combine concise notes, topic questionbanks, flashcards, difficulty progression and mock exams. The gap is often the transition from recall to data handling, experimental reasoning and multi-step application. Studiely can close that gap by linking notes to flashcards, quizzes, assessment priorities and practice so each result determines the next study action.",
        ],
      },
    ],
    whyTitle:
      "Why Students Use Studiely for IB Environmental Systems and Societies SL",
    whyParagraphs: [],
    whyBullets: [
      "Keep Environmental Systems and Societies Standard Level revision in one repeatable study sequence instead of switching between disconnected files.",
      "Use subject-specific prompts built around environmental systems, biodiversity and climate change.",
      "See weak areas earlier through retrieval and practice rather than discovering them in a final mock.",
    ],
    whyAfterParagraphs: [IB_DISCLAIMER],
    faqs: [
      {
        question: "Should I revise content or questions first?",
        answer:
          "Use both in sequence. Clarify the concept, retrieve it without notes, then apply it to a question.",
      },
      {
        question: "How should I use an error log?",
        answer:
          "Record the topic, the type of mistake, the correct reasoning and one follow-up task. Revisit the same skill later so the log changes future performance rather than becoming another set of notes.",
      },
      {
        question: "Are flashcards useful for problem-solving subjects?",
        answer:
          "Yes, but not for every skill. Use them for definitions, relationships, assumptions, processes and common reasoning steps, then move quickly into calculations, data or application questions.",
      },
      {
        question: "How do I keep assessment information current?",
        answer:
          "Use the subject brief and guidance for your examination session. IB updates courses on a cycle, so school and official IB materials should be the final source for assessment details.",
      },
    ],
    ctaTitle:
      "Start a More Focused IB Environmental Systems and Societies SL Revision Cycle",
    ctaBody:
      "Use Studiely to turn IB Environmental Systems and Societies SL into a clearer sequence of revision notes, flashcards, quizzes, assessment priorities and practice. Start with one weak area, test it, review the result and let that evidence choose the next study task.",
    ctaPrimaryLabel: "Start studying ESS SL",
    ctaPrimaryHref: STUDIELY_APP.notes,
  };
