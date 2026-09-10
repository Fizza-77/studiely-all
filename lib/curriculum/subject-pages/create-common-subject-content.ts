import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

type CommonSubjectConfig = {
  slug: string;
  name: string;
  lowerName: string;
  introTitle: string;
  area: string;
  topics: string[];
  coverClosing: string;
  notes: string;
  flashcards: string;
  quiz: string;
  examFocus: string;
  examPractice: string;
  recall: string;
  cta: string;
  keywords: string[];
};

export function createCommonSubjectContent(config: CommonSubjectConfig): SubjectLandingContent {
  const path = `/australian-curriculum/subjects/${config.slug}`;
  const name = config.name;
  const lowerName = config.lowerName;

  return {
    path,
    seoTitle: `Australian Curriculum ${name} Study Resources`,
    metaDescription: `Use Australian Curriculum ${name} resources for clear notes, flashcards, quizzes, exam focus and practice across Australian Curriculum study.`,
    shortDescription: `Study ${name} with revision notes, flashcards, quizzes, exam focus support and practice tools in one Australian Curriculum subject hub.`,
    keywords: config.keywords,
    breadcrumbName: `Australian Curriculum ${name}`,
    heroEyebrow: "Australian Curriculum Common Subject",
    heroTitle: `Australian Curriculum ${name} Study Resources for`,
    heroHighlight: "Notes, Flashcards & Practice",
    lead: `Studiely helps students study Australian Curriculum ${name} by turning class topics, key skills and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. The page keeps ${name} study actions together, so students can check understanding and practise application from one place.`,
    introTitle: config.introTitle,
    introParagraphs: [
      `Australian Curriculum ${name} gives students a clear place to organise the skills they meet in the ${config.area} area of school learning. Instead of treating every lesson as a separate task, this page brings the subject together around the way students actually revise: they need to understand the idea, remember the language, check their knowledge and practise applying it.`,
      `For ${name}, the page is written broadly enough for students across NSW, Victoria, Queensland, Western Australia, South Australia, Tasmania, the ACT and the Northern Territory. Studiely provides independent study support and is not affiliated with ACARA, state education departments or any exam authority.`,
    ],
    coverTitle: `What ${name} Covers`,
    coverIntro: `Australian Curriculum ${name} covers ${config.area}. The exact classroom program can change by school and year level, but students usually need to build knowledge, apply skills, use accurate vocabulary and show their thinking clearly.`,
    coverTopics: config.topics,
    coverClosing: config.coverClosing,
    supportTitle: `How Studiely Helps With ${name}`,
    supportParagraphs: [
      `Studiely brings the main study actions for Australian Curriculum ${name} into one page: revision notes, flashcards, quiz practice, exam focus and exam practice. Each tool supports a different part of learning, so students can move from understanding to recall and then to application.`,
      `For ${name} learners, this can mean reviewing one concept after school, preparing for a short task or building a stronger plan before a larger assessment. A stronger ${name} study page should help students answer three questions: what do I need to know, how do I prove I understand it, and where do I still make mistakes?`,
    ],
    supportRows: [
      { need: "Understand the course", support: `Break ${lowerName} ideas into clear notes and smaller study sections.` },
      { need: "Remember details", support: "Create flashcards for terminology, evidence, examples and key concepts." },
      { need: "Check learning", support: "Use quizzes to find gaps before longer practice tasks." },
      { need: "Prepare for assessment", support: "Focus on question type, command words, evidence and response planning." },
      { need: "Practise application", support: "Work through exam-style prompts that require explanation, reasoning or response structure." },
    ],
    tools: [
      { id: "notes", title: `${name} Revision Notes`, body: `Australian Curriculum ${name} revision notes help students reduce a busy lesson into the ideas that matter most. ${config.notes} Good ${name} notes should capture the concept, show the important language and include examples that make the idea easier to remember.`, icon: "/icons/notes.svg", accent: BLUE, href: STUDIELY_APP.notes, cta: "Create revision notes" },
      { id: "flashcards", title: `${name} Flashcards`, body: `Flashcards for this subject are useful when students need fast recall before a lesson, quiz or assessment. ${config.flashcards} A useful ${name} flashcard set turns heavy content into small prompts that students can revisit across the week.`, icon: "/icons/flashcards.svg", accent: PINK, href: STUDIELY_APP.flashcards, cta: "Build flashcards" },
      { id: "quiz", title: `${name} Quiz Practice`, body: `The Australian Curriculum ${name} quiz tool helps students check understanding before they assume they are ready. ${config.quiz} Quizzes give ${name} students a low-pressure way to find gaps before those gaps appear in a marked task.`, icon: "/icons/quiz.svg", accent: CORAL, href: STUDIELY_APP.quiz, cta: "Start a quiz" },
      { id: "exam-focus", title: `Exam Focus for ${name}`, body: `Exam focus support helps students prepare for assessment by looking at the task, not just the topic. ${config.examFocus} Focused preparation helps students avoid vague answers and choose the skill the question is testing.`, icon: "/icons/exam-focus.svg", accent: LIME, href: STUDIELY_APP.examFocus, cta: "Open exam focus" },
      { id: "exam-practice", title: `${name} Exam Practice`, body: `Exam practice gives students space to apply knowledge in a more realistic way. ${config.examPractice} Applied ${name} practice builds stronger habits because students have to choose, explain, calculate, create or justify rather than just review.`, icon: "/icons/exam.svg", accent: BLUE, href: STUDIELY_APP.examPractice, cta: "Practise exam-style" },
    ],
    whyTitle: `Why Students Use Studiely for ${name}`,
    whyParagraphs: [`${name} becomes stronger when students can connect lesson content, terminology and application. Studiely supports that process by giving students one organised place to create notes, review terms, complete quizzes and practise responses.`, "The page works best beside teacher guidance because learning still depends on class tasks, feedback and school expectations."],
    faqs: [
      { question: `What is Australian Curriculum ${name}?`, answer: `It is a subject study page for students learning ${name} through the Australian Curriculum. It explains the main learning focus and brings revision notes, flashcards, quizzes, exam focus support and exam practice together on one page.` },
      { question: `What can students revise in ${name}?`, answer: `It can support ${config.recall}.` },
      { question: `Can Studiely help with ${name} assignments?`, answer: `Yes. For ${name} assignments, Studiely can support planning, vocabulary review and clearer explanation before students write, create or solve. Students should still follow their teacher's instructions and use school requirements as the final guide.` },
      { question: `Does this ${name} page apply to every Australian state and territory?`, answer: `Yes. The ${name} page is built for Australian Curriculum study, so it can be used by students in every state and territory while still following school guidance. Schools may sequence topics differently, so students should use it alongside their class program.` },
      { question: `How should students use Studiely for ${name}?`, answer: `Students can start with one topic, build notes, test recall and then complete practice that feels closer to assessment. This connects lesson content, personal notes and practice tasks.` },
    ],
    ctaTitle: `Start Studying ${name} With Studiely`,
    ctaBody: config.cta,
    ctaPrimaryLabel: `Start studying ${name}`,
    ctaPrimaryHref: STUDIELY_APP.notes,
  };
}
