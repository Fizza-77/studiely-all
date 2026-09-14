import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

type WaceSubjectConfig = {
  slug: string;
  name: string;
  lowerName: string;
  introTitle: string;
  coverIntro: string;
  topics: string[];
  routine: string;
  notes: string;
  examAreas: string;
  recallItems: string;
};

export function createWaceSubjectContent(config: WaceSubjectConfig): SubjectLandingContent {
  const { name, lowerName } = config;
  const path = `/australian-curriculum/western-australia/wace/${config.slug}`;
  const lead = `Students can use Studiely for WACE ${name} to organise class notes, subject concepts, assessment skills and exam preparation into clear revision notes, flashcards, quizzes and exam-style practice. The page brings the main study tools together so Western Australian students can revise actively instead of only rereading notes.`;
  const commonIntro = `WACE ${name} students need a study system that helps them understand the subject, remember the right details and practise with purpose. Studiely gives WA senior students a structured way to turn ${lowerName} content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.`;
  const commonRoutine = `A stronger routine should do more than store class material. It should help students decide what to revise next, check what they remember and apply knowledge under assessment conditions. For Western Australian Certificate of Education students, ${lowerName} becomes easier to manage when notes, recall, quick checks and practice questions work together.`;

  return {
    path,
    seoTitle: `WACE ${name} Study Help | Studiely`,
    metaDescription: `Create WACE ${name} revision notes, flashcards, quizzes and exam practice with Studiely for Western Australian senior students.`,
    shortDescription: `Studiely helps WACE ${name} students organise ${lowerName} topics into notes, recall practice, quizzes and exam-style preparation.`,
    keywords: [`WACE ${name}`, "revision notes", "flashcards", "quiz practice", "exam focus", "exam practice", "study help for WA students"],
    breadcrumbName: `WACE ${name}`,
    heroEyebrow: "Western Australia WACE",
    heroTitle: `WACE ${name} Study Help for`,
    heroHighlight: "Revision, Recall & Exam Practice",
    lead,
    introTitle: config.introTitle,
    introParagraphs: [commonIntro, commonRoutine],
    coverTitle: `What ${name} Covers`,
    coverIntro: config.coverIntro,
    coverTopics: config.topics,
    coverClosing: `Because the subject involves both knowledge and application, revision should help students understand ideas and then use them in a way that matches assessment expectations. A useful ${lowerName} study routine should organise ${config.recallItems}. Students need to connect knowledge to precise assessment responses. Studiely supports that routine by helping students turn messy class material into focused study actions.`,
    supportTitle: "How Studiely Helps WA Senior Students",
    supportParagraphs: [`Studiely helps with WACE ${name} by making study active. Students can move from a topic or class note into a study format that asks them to summarise, recall, test, focus and practise. This keeps revision connected to what they actually need to do in assessments.`, "Studiely provides independent study support and is not affiliated with SCSA or any government education authority. Students should always follow the advice of their school and refer to official course materials where required."],
    supportRows: [
      { need: "Understand the course", support: `Break ${lowerName} ideas into clear notes and smaller study sections.` },
      { need: "Remember details", support: "Create flashcards for terminology, evidence, examples and key concepts." },
      { need: "Check learning", support: "Use quizzes to find gaps before longer practice tasks." },
      { need: "Prepare for assessment", support: "Focus on question type, command words, evidence and response planning." },
      { need: "Practise application", support: "Work through exam-style prompts that require explanation, reasoning or response structure." },
    ],
    tools: [
      { id: "notes", title: `Revision Notes for ${name}`, body: `Revision notes should not feel like a copied folder of class material. They should help students understand what matters, why it matters and how the idea could appear in an assessment. With Studiely, students can turn a topic, question, example or skill into a clearer set of notes for later review. For ${lowerName}, strong notes may include ${config.notes}. The purpose is to make the subject easier to revisit.`, icon: "/icons/notes.svg", accent: BLUE, href: STUDIELY_APP.notes, cta: "Create revision notes" },
      { id: "flashcards", title: `${name} Flashcards`, body: "Flashcards are useful when they make students retrieve information, not just look at it. Studiely can help students build cards for the details they need to recall quickly, including terms, examples, formulas, concepts, processes, techniques, cases or response cues. For this subject, each card can ask students to define a term, explain an idea, identify an example, remember a step or connect evidence to a response.", icon: "/icons/flashcards.svg", accent: PINK, href: STUDIELY_APP.flashcards, cta: "Build flashcards" },
      { id: "quiz", title: "Quiz Practice for Better Recall", body: `Quizzes help students test understanding before they start a larger practice task. A short quiz can show whether a student remembers the key idea, can apply it to a question and can separate similar concepts. Studiely can turn ${lowerName} topics into quick checks that support recall and decision-making. Students can use quizzes after revising a topic, before a practice response or as part of a weekly review routine.`, icon: "/icons/quiz.svg", accent: CORAL, href: STUDIELY_APP.quiz, cta: "Start a quiz" },
      { id: "exam-focus", title: "Exam Focus for WACE Students", body: `Exam focus for WACE ${name} means knowing how to use subject knowledge under pressure. Students need to read the question carefully, choose relevant information and avoid writing everything they know when the task asks for a specific response. Studiely helps students narrow revision around ${config.examAreas}. This gives students a clearer way to plan answers, check whether evidence fits the question and practise the type of thinking expected in senior assessment.`, icon: "/icons/exam-focus.svg", accent: LIME, href: STUDIELY_APP.examFocus, cta: "Open exam focus" },
    ],
    whyTitle: "Why Students Use Studiely for This Subject",
    whyParagraphs: ["Studiely is useful for Western Australian students because it keeps the main study actions in one place. The student can start with a topic, then create notes, flashcards, quizzes and practice material without rebuilding the study system from scratch each time.", "Studiely provides independent study support and is not affiliated with SCSA or any government education authority. Students should always follow the advice of their school and refer to official course materials where required."],
    faqs: [
      { question: `What is WACE ${name}?`, answer: `This is a senior subject pathway for students completing the Western Australian Certificate of Education. It supports learning in ${lowerName} through knowledge, skills, application and assessment preparation.` },
      { question: `How can Studiely help with ${name}?`, answer: `Studiely helps students convert ${lowerName} topics into revision notes, flashcards, quizzes, exam focus support and exam-style practice. This gives students a more active way to revise than reading the same notes repeatedly.` },
      { question: "Are flashcards useful for this subject?", answer: `Yes. Flashcards can help students recall ${config.recallItems}. They work best when students use them regularly and connect each answer to a bigger idea or assessment skill.` },
      { question: "Can students use Studiely for exam preparation?", answer: "Yes. Students can use Studiely to prepare for assessment by reviewing key topics, checking recall, focusing on question requirements and practising exam-style tasks. It works as an independent support tool alongside school guidance." },
    ],
    ctaTitle: "Build a Better Study Routine",
    ctaBody: `Use Studiely to make WACE ${name} revision more organised, active and assessment-focused. Create notes, build flashcards, test understanding with quizzes and practise applying ideas before your next school task or exam.`,
    ctaPrimaryLabel: `Start studying ${name}`,
    ctaPrimaryHref: STUDIELY_APP.notes,
  };
}
