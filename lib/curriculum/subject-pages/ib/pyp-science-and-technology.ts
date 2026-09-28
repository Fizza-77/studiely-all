import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_SCIENCE_AND_TECHNOLOGY: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/science-and-technology",
  seoTitle: "IB PYP Science and Technology Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP Science and Technology study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP Science and Technology resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP Science and Technology",
    "PYP Science and Technology resources",
    "PYP Science and Technology activities",
    "IB PYP Science and Technology learning resources",
    "IB PYP Science and Technology practice activities",
    "IB PYP Science and Technology revision notes",
    "IB PYP Science and Technology flashcards",
    "IB PYP Science and Technology quiz",
    "IB PYP Science and Technology practice questions",
    "IB PYP Science and Technology exam focus",
    "IB PYP Science and Technology exam practice",
    "IB PYP Science and Technology study resources",
  ],
  breadcrumbName: "Science and Technology",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP Science and Technology Resources for",
  heroHighlight: "Inquiry",
  heroIntro:
    "Turn curiosity into evidence. Studiely helps PYP learners organise observations, scientific ideas, vocabulary, simple data and questions so hands-on inquiry becomes knowledge they can explain and reuse.",
  lead: "IB PYP Science and Technology supports inquiry into the natural and designed world through observation, questioning, investigation, evidence and communication. Studiely helps Grade 1–5 learners capture scientific ideas in clear notes, retrieve key vocabulary with flashcards, check understanding through quizzes and practise explaining results or solving simple science-and-technology problems.",
  workflowSteps: [
    {
      title: "Observe + question",
      body: "Notice carefully, ask investigable questions and make sensible predictions.",
    },
    {
      title: "Evidence + explanation",
      body: "Record what changes and explain ideas with age-appropriate vocabulary.",
    },
    {
      title: "Science + technology",
      body: "Use tools and designed solutions to investigate, measure and communicate.",
    },
  ],
  introTitle: "What IB PYP Science and Technology Looks Like in PYP Learning",
  introParagraphs: [
    "Science in the PYP is strongest when students investigate meaningful questions rather than memorise a disconnected fact list. Technology can support the process through tools for observing, measuring, recording, representing or designing. The school’s programme of inquiry determines the exact content, but students may encounter ideas related to living things, Earth and space, materials, forces, energy and designed solutions across different units.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Inquiry habits that turn observation into evidence-based explanation.",
  coverTopics: [
    "asking investigable questions and making sensible predictions",
    "observing carefully and recording what changes",
    "using simple measurements, tables, diagrams or digital tools when appropriate",
    "identifying patterns in evidence and comparing results with a prediction",
    "explaining scientific ideas with age-appropriate vocabulary",
    "thinking about how technologies solve needs, create trade-offs or support investigation",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Science and Technology",
      body: "IB PYP Science and Technology Revision Notes should keep the logic of an investigation. A useful page can record the question, prediction, key vocabulary, what was observed, a simple data point or diagram and the best current explanation. When a technology or design solution is involved, students can also note the need it addresses and how they know it works.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Science and Technology Flashcards for Active Recall",
      body: "Flashcards can cover vocabulary, cause-and-effect relationships, process steps, diagrams and “what evidence would show this?” prompts. Cards that ask for an explanation are stronger than cards that only ask for a definition because science depends on connecting ideas.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP Science and Technology Quiz can ask students to interpret a small diagram, choose a fair observation, predict an outcome, match evidence to an explanation or recall a concept. Feedback should encourage students to revisit the evidence and reasoning, not simply memorise the correct option.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Focus on the Concept Behind the Evidence",
      body: "Studiely’s Exam Focus should be used as a learning-priority tool. Before a classroom investigation, report or concept check, students can focus on the vocabulary, process or relationship they need most. This is more consistent with PYP inquiry than formal test drilling.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open concept focus",
    },
    {
      id: "exam-practice",
      title: "Apply Science Thinking to a New Prompt",
      body: "Practice can mean short application tasks: interpret a data table, explain a result, design a simple fair comparison, label a diagram or suggest how a technology could be improved. These tasks rehearse thinking that students may need in class without turning inquiry into an exam course.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise application",
    },
  ],
  afterToolsSections: [
    {
      title: "Use Claim–Evidence–Next Question",
      paragraphs: [
        "After an investigation or science lesson, write one claim in plain language. Add the observation or data that supports it. Then ask one new question that the evidence raises. Convert the essential vocabulary into a few flashcards and finish with a short quiz that includes one “apply this idea somewhere else” prompt. This routine preserves curiosity while building durable understanding.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "Across a week, science review can follow the life of a question. First capture what the learner is investigating and the important vocabulary. After the lesson or experiment, add the observation or evidence that changed the learner’s thinking. A later flashcard session can retrieve relationships and process steps, while a short quiz checks whether the learner can interpret a diagram, prediction or result. End by applying the concept to a new situation or suggesting one next question. This sequence keeps factual recall connected to inquiry and helps practical experiences remain memorable after the classroom activity ends.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP Science and Technology",
  whyParagraphs: [
    "PYP science results often provide teacher activities, scope-and-sequence material or printable skill resources. What is less visible is the student’s bridge from experiment to explanation. Studiely can make that bridge explicit: observation first, evidence second, claim third, then retrieval and practice so the concept survives after the practical activity ends.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "What is the focus of PYP science learning?",
      answer:
        "PYP science uses inquiry and conceptual understanding to help students explore the world, ask questions, investigate and communicate explanations. Specific content is organised by the school within its programme of inquiry.",
    },
    {
      question: "How does technology fit into PYP learning?",
      answer:
        "Technology can be a tool for investigating, measuring, recording, communicating or designing solutions. Schools may integrate it differently, so student practice should reflect the technologies and expectations used in class.",
    },
    {
      question: "Can flashcards support science inquiry?",
      answer:
        "Yes, when they reinforce vocabulary, relationships, diagrams and reasoning prompts. They should sit alongside observation, discussion and practical investigation rather than replace those experiences.",
    },
    {
      question: "What kind of practice is suitable for PYP science?",
      answer:
        "Short explanation, prediction, diagram, data and application tasks are useful. The purpose is to strengthen scientific thinking and classroom readiness, not to imitate senior external examinations.",
    },
    {
      question: "Can Studiely help after an experiment?",
      answer:
        "Students can turn the question, evidence, vocabulary and conclusion into a compact revision set. A later quiz or retrieval session helps them remember the idea after the practical lesson is over.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP Science and Technology",
  ctaBody:
    "After your next science inquiry, use Studiely to capture the evidence, explain what it means and build a short retrieval set before the idea fades.",
  ctaPrimaryLabel: "Start studying PYP Science and Technology",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
