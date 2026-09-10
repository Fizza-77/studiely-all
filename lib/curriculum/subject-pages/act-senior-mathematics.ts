import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const ACT_SENIOR_MATHEMATICS: SubjectLandingContent = {
  path: "/australian-curriculum/act/senior-secondary/mathematics",
  seoTitle: "ACT Senior Secondary Mathematics Study Resources",
  metaDescription:
    "Study ACT Senior Secondary Mathematics with revision notes, flashcards, quizzes, exam focus support and exam-style practice for ACT senior secondary students.",
  shortDescription:
    "Study this ACT senior secondary subject with notes, flashcards, quizzes, exam focus support and exam-style practice.",
  keywords: [
    "ACT Senior Secondary Mathematics",
    "Mathematics resources",
    "revision notes",
    "flashcards",
    "quiz practice",
    "exam focus",
    "exam practice",
    "ACT Senior Secondary Certificate",
    "Australian Capital Territory",
  ],
  breadcrumbName: "ACT Senior Secondary Mathematics",
  heroEyebrow: "ACT Senior Secondary",
  heroTitle: "ACT Senior Secondary Mathematics Study Resources for",
  heroHighlight: "Revision, Flashcards and Practice",
  lead:
    "ACT Senior Secondary Mathematics students can use Studiely to turn mathematics topics, class notes and assessment preparation into revision notes, flashcards, quizzes, exam focus support and exam-style practice. The page brings the main study tools together so ACT students can revise actively, check understanding and prepare clearer responses without jumping between separate resources.",
  introTitle: "Introduction",
  introParagraphs: [
    "ACT Senior Secondary Mathematics can feel demanding because students need more than memory. They need to understand the subject language, organise ideas, practise with purpose and recognise how questions are asking them to respond. In the ACT senior secondary system, the strongest study routine usually combines regular revision, active recall, applied practice and reflection on feedback.",
    "Studiely gives students a single place to build that routine. Instead of saving loose notes in one place, practice questions in another and flashcards somewhere else, learners can create connected study material around the same subject goal. Studiely provides independent study support and is not affiliated with any government education authority, the ACT Board of Senior Secondary Studies or any exam board.",
  ],
  coverTitle: "What This Mathematics Page Helps Students Cover",
  coverIntro:
    "Mathematics study works best when students understand the shape of the course, not just the next task. This page supports mathematical reasoning by helping learners organise concepts, examples and response practice around the skills that matter most.",
  coverTopics: [
    "Number skills",
    "Algebraic manipulation",
    "Graphs",
    "Measurement",
    "Statistics",
    "Problem-solving routines",
  ],
  coverClosing:
    "That structure matters because mathematics often rewards clear thinking as much as content knowledge. Students need to connect ideas, use the right terms, recognise patterns in questions and explain their reasoning with enough detail for the task.",
  supportTitle: "How Studiely Supports This Subject",
  supportParagraphs: [
    "Studiely supports ACT Senior Secondary Mathematics by helping students move from passive reading into active study. A learner can start with rough class notes, turn them into clear revision summaries, then build flashcards, quizzes and practice prompts from the same topic.",
    "For mathematics, that means students can focus on turning formulas, methods and problem types into repeatable steps. The tools are designed to help students see what they know, what they only recognise, and what still needs practice before assessment time.",
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes That Make the Topic Easier to Revisit",
      body: "ACT Senior Secondary Mathematics revision notes should not just copy everything from class. They should compress the subject into clear explanations, key terms, worked ideas, examples and reminders that make future revision faster. With Studiely, students can separate formulas, worked steps, definitions and common error checks so revision stays practical. This gives each study session a clearer direction because the notes show what to revisit, where the difficult links sit and which ideas need more practice.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "Flashcards help students stop rereading and start retrieving information from memory. For mathematics, this is useful because small details often support stronger explanations, better examples and more confident responses. Students can create cards that review formulas, symbols, graph features, calculator steps and short problem triggers. The goal is not to memorise disconnected facts. It is to build quick recall so the brain has more space for analysis, problem solving and written expression.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice to Find Knowledge Gaps",
      body: "A quiz gives students fast feedback on what they truly understand. In this ACT senior subject, quizzes can reveal whether a learner can apply a concept, select the right method, read a question carefully or explain an idea in their own words. Studiely can help students test method selection, substitution, interpretation of graphs and multi-step calculation habits. These checks make revision less random because students can return to the areas that cause mistakes instead of spending equal time on everything.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for Better Preparation",
      body: "Exam focus is about knowing how to prepare, not just what to read. For this subject, students need to recognise task wording, plan their time and understand what a strong response should include. This is where Studiely can help students focus on working marks, wording clues, unit use, calculator strategy and checking procedures. The tool encourages learners to think about how the subject is assessed, how answers should be shaped and how to avoid common errors under pressure.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice That Builds Confidence",
      body: "Practice becomes more valuable when it feels close to the kinds of thinking students need in real assessment conditions. For mathematics, students should practise applying knowledge, not just remembering it. With Studiely, students can solve staged problems, compare methods and build accuracy through timed sets. Over time, this builds a more reliable revision cycle: study the idea, recall it, test it, apply it, then improve the response.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why ACT Students Use Studiely",
  whyParagraphs: [
    "ACT students often study across several subjects at once, so a clear system matters. Studiely helps students keep their mathematics preparation organised, especially when class notes, teacher feedback and assessment expectations start to build up.",
    "The biggest advantage is flow. A student can create notes, convert important points into flashcards, test knowledge through quizzes, focus on assessment skills and practise responses in one connected workspace. That makes revision easier to manage during busy weeks.",
    "Students can also use Studiely to make study more personal. One learner might need more recall practice. Another might need stronger explanations or cleaner response structure. The platform helps both students build the kind of support that matches their current gaps.",
  ],
  faqs: [
    {
      question: "How can Studiely help with ACT Senior Secondary Mathematics?",
      answer:
        "Studiely helps students organise mathematics study into notes, flashcards, quizzes, exam focus and practice tasks. This gives learners a clearer routine because they can revise content, test recall and practise applying ideas from the same workspace.",
    },
    {
      question: "Does this page replace school materials for Mathematics?",
      answer:
        "No. Students should still follow their school program, teacher instructions and official course requirements. Studiely works as independent study support that helps learners organise what they are studying and practise it more actively.",
    },
    {
      question: "What should students revise first in Mathematics?",
      answer:
        "A good starting point is the area that feels least secure. Students can review recent class notes, identify weak concepts, then create a short revision set before moving into flashcards or quiz practice. That keeps study targeted instead of overwhelming.",
    },
    {
      question: "Are flashcards useful for mathematics?",
      answer:
        "Yes, when students use them for more than single-word recall. Flashcards can hold definitions, prompts, examples, formulas, techniques, evidence cues or short explanation starters depending on the subject. They work best when students revisit them regularly.",
    },
    {
      question: "How often should students practise?",
      answer:
        "Short, consistent practice usually works better than one long session before a deadline. Students can use Studiely several times a week to review notes, test recall and complete small practice tasks that build confidence over time.",
    },
  ],
  ctaTitle: "Start Building a Stronger Study Routine",
  ctaBody:
    "Use Studiely to make ACT Senior Secondary Mathematics study more active, organised and practical. Create revision notes, build flashcards, check understanding with quizzes, focus your preparation and practise the kinds of responses that help you feel ready for the next assessment.",
  ctaPrimaryLabel: "Start studying Mathematics",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
