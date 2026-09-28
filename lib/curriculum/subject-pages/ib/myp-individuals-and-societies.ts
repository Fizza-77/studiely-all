import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_INDIVIDUALS_AND_SOCIETIES: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/individuals-and-societies",
  seoTitle: "IB MYP Individuals and Societies Study Resources | Studiely",
  metaDescription:
    "Study Individuals and Societies in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Individuals and Societies, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Individuals and Societies",
    "MYP Individuals and Societies resources",
    "MYP Individuals and Societies revision notes",
    "MYP Individuals and Societies flashcards",
    "MYP Individuals and Societies quiz",
    "MYP Individuals and Societies practice questions",
    "MYP Individuals and Societies assessment practice",
  ],
  breadcrumbName: "Individuals and Societies",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Individuals and Societies Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Individuals and Societies is best approached as a skills-and-understanding course, not a collection of facts to cram. Individuals and Societies becomes difficult when revision turns into a pile of dates, definitions and case studies. MYP work asks students to use knowledge: investigate questions, interpret sources, analyse data, compare perspectives and explain how historical, geographical, political, economic, social and cultural factors interact.",
  lead: "IB MYP Individuals and Societies supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Evidence",
      body: "Interrogate sources, data, maps and claims. You can judge usefulness, perspective and limitations.",
    },
    {
      title: "Explanation",
      body: "Build cause, consequence, change and comparison. Answers explain relationships rather than list facts.",
    },
    {
      title: "Inquiry",
      body: "Frame questions and select relevant information. Research stays focused and conclusions follow evidence.",
    },
  ],
  introTitle: "What Strong MYP Work Looks Like",
  introParagraphs: [
    "Develop research, source analysis, data interpretation, argument, communication and critical thinking across humanities and social-science contexts. Schools may organise the subject as integrated study or as disciplines such as history, geography or economics.",
  ],
  extraSections: [
    {
      title: "Turn Revision Into Transfer",
      paragraphs: [
        "Start with a focused inquiry question, recall what you know, build a one-page evidence note, retrieve details with flashcards, test source reasoning in a quiz and write a short conclusion. Review whether every claim can point to evidence.",
      ],
      bullets: [
        "Connect facts to evidence, perspective and inquiry questions.",
        "Practise source and data interpretation rather than revising only case-study summaries.",
        "Build arguments that can transfer across history, geography, economics and integrated humanities.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "Avoid treating revision as a fact-storage exercise. A page of dates or case-study details is only useful if you can select evidence for a question, interpret a source, compare perspectives and explain relationships such as cause, consequence, continuity or change. Also avoid using a source as proof simply because it contains a relevant sentence. Ask who produced it, what it can reveal, what it cannot reveal and how it fits other evidence. A short evidence table followed by one written judgement usually builds more transferable skill than another hour of rereading notes. When possible, finish by adding one counter-perspective so your conclusion shows judgement rather than certainty without evidence.",
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
      body: "IB MYP Individuals and Societies Revision Notes should make the next study action obvious. Turn each unit into an evidence map rather than a chapter summary. Keep a short list of key concepts, chronology or spatial patterns, case-study evidence, contested perspectives and vocabulary. Add one “why it matters” line so factual notes are already connected to analysis.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Individuals and Societies Flashcards should make the next study action obvious. Use flashcards for dates, terms and case-study facts, but include cards that demand reasoning: “Which evidence best challenges this claim?” or “What is one limitation of this source?” Retrieval should support argument, not create a trivia bank.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Individuals and Societies Quiz should make the next study action obvious. Mix factual checks with source interpretation, map or graph reading, hypothesis testing and command-term decisions. Feedback should show why evidence is relevant and how a stronger answer moves from description to explanation or evaluation.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Individuals and Societies Exam Focus should make the next study action obvious. Practise constructing responses from unfamiliar evidence. Where your school participates in MYP eAssessment, add on-screen source sets and timed synthesis; otherwise use the same reasoning within school-based tasks, investigations and presentations.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Individuals and Societies Exam Practice should make the next study action obvious. Use one case study in several ways: a timeline, a source comparison, a data question and a short argument. Then swap the context and repeat the same method. This exposes whether you know a topic only by memory or can transfer the thinking skill.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Individuals and Societies revision builds transferable inquiry, evidence and argument skills.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "What subjects can appear inside MYP Individuals and Societies?",
      answer:
        "Schools can build the subject group through disciplines such as history, geography, economics, politics, civics, sociology, psychology or integrated humanities. The exact unit sequence varies by school, so revise your taught content while building transferable research and analysis skills.",
    },
    {
      question: "How do I revise case studies without memorising everything?",
      answer:
        "Keep a small evidence bank for each case: setting, key facts, one or two useful statistics, important perspectives and why the case illustrates the concept. Practise choosing evidence for a question instead of trying to reproduce the whole case study.",
    },
    {
      question: "What makes a source-analysis answer strong?",
      answer:
        "Identify what the source says, consider origin or perspective where relevant, connect evidence to the question and explain a limitation or alternative interpretation. A checklist is useful, but the value comes from applying it to unfamiliar material.",
    },
    {
      question: "Is MYP eAssessment compulsory in Individuals and Societies?",
      answer:
        "No. School-based assessment is central to the MYP. On-screen eAssessment is used by participating schools and students following the MYP certificate pathway, so confirm your school’s arrangements before prioritising exam-specific practice.",
    },
  ],
  ctaTitle: "Build a better Individuals and Societies study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Individuals and Societies",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
