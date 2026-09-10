import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const TCE_GEOGRAPHY: SubjectLandingContent = {
  path: "/australian-curriculum/tasmania/tce/geography",
  seoTitle: "TCE Geography Study Resources | Studiely",
  metaDescription:
    "Use Studiely for TCE Geography notes, flashcards, quizzes and exam practice for Tasmania students.",
  shortDescription:
    "Study Geography with notes, flashcards, quizzes, exam focus and practice for Tasmanian students.",
  keywords: [
    "TCE Geography",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
    "Tasmania senior study resources",
  ],
  breadcrumbName: "TCE Geography",
  heroEyebrow: "Tasmania TCE",
  heroTitle: "TCE Geography Study Support for",
  heroHighlight: "Notes, Flashcards and Exam Practice",
  lead:
    "TCE Geography helps Tasmanian senior students organise Geography revision into clear notes, active recall, short quizzes, exam focus and practice. Studiely brings these tools into one study flow so students can revise the ideas, skills and assessment language that matter without jumping between disconnected resources.",
  introTitle: "Study Geography with a clearer Tasmanian senior pathway",
  introParagraphs: [
    "Tasmanian students need revision that connects class learning with assessment preparation. TCE Geography sits within the Tasmanian Certificate of Education pathway, so students need revision that respects classroom learning, course expectations and assessment pressure. Studiely helps them reshape school material into active study tasks, then check whether they can explain, recall and apply the content.",
    "This page is independent study support. It is not an official TASC resource and does not replace school advice, teacher instructions or current course information. Its purpose is to help students prepare for Geography in Tasmania with more structure and less guesswork.",
  ],
  coverTitle: "What Geography Asks Students to Do",
  coverIntro:
    "In Geography, students work with places, spatial patterns, fieldwork, environments, data and geographic explanation. The subject can involve natural and human environments, mapping, distributions, sustainability, fieldwork, graphs and geographic concepts. TCE Geography preparation should therefore combine content knowledge with the ability to use that knowledge in a task, response or applied situation.",
  coverTopics: [
    "Natural and human environments",
    "Mapping",
    "Distributions",
    "Sustainability",
    "Fieldwork",
    "Graphs",
    "Geographic concepts",
  ],
  coverClosing:
    "Studiely keeps the big picture visible while still giving space for details. Students can group topic summaries, build recall cards, test small sections and practise responses that match the way senior assessment asks them to think.",
  supportTitle: "How Studiely Supports Revision",
  supportParagraphs: [
    "Studiely gives TCE Geography students one place to move from understanding into recall and then into response practice. Instead of treating notes, flashcards, quizzes and exam preparation as separate jobs, the page connects them into a steady cycle. Students can describe patterns, explain causes, use data and connect examples to processes.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create focused study notes from class content, topic summaries and teacher guidance.",
    },
    {
      need: "Remember key details",
      support:
        "Turn important terms, examples and processes into quick recall prompts.",
    },
    {
      need: "Check understanding",
      support:
        "Use short quizzes to check weak spots before they become bigger gaps.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Review command words, response structure and common problem areas.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Practise with tasks that feel closer to the way senior students need to respond.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with TASC or any Tasmanian education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Geography",
      body: "Strong notes do not copy every lesson word-for-word. For TCE Geography, revision notes should identify the idea, explain why it matters and show how a student might use it in a question or task. Studiely helps students build notes that are short enough to revisit but detailed enough to guide real preparation. For this subject, effective notes usually organise concepts, case studies, map skills, fieldwork methods, data types and response structures. Students can return to those notes before a quiz, writing task, practical reflection or exam-style question, which turns the notes into a working tool rather than a storage folder.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "Flashcards are useful because they make students retrieve knowledge before seeing the answer. In this subject, Studiely can convert difficult terms, examples, formulas, features, processes or response cues into simple prompt-and-answer cards. Strong cards support recall of terminology, examples, mapping conventions and process words.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Checking Understanding",
      body: "Quizzes give students a fast way to discover what they can actually use. Short checks can reveal whether a topic needs another explanation, another example or another attempt. For Geography, useful quiz questions test map reading, data interpretation, concept knowledge and case-study detail.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for Better Preparation",
      body: "Exam focus is where students connect content with assessment behaviour. TCE Geography students need to know not only what a topic means, but also how to respond when a task asks them to explain, analyse, compare, justify, calculate, interpret or evaluate. Studiely helps students focus on the details that affect marks: command words, structure, evidence, terminology, time pressure and common mistakes. For Geography, this means paying attention to command terms, scale, evidence, diagrams and extended-response planning.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice Without Last-Minute Panic",
      body: "Practice works best when students do it before the final rush. Studiely helps students create short practice tasks, response prompts and revision checks that build confidence gradually. Strong practice in Geography uses data sets, case-study prompts and short explanations.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Tasmanian Students Use Studiely for Geography",
  whyParagraphs: [
    "Students use Studiely because it turns revision into a clearer routine. This supports steady preparation instead of leaving revision until the final rush. The benefit is not just having digital notes; it is having a repeatable process: summarise the idea, recall it, test it, focus it for assessment and practise it in context. Geography students often know examples but need stronger evidence-to-place links.",
  ],
  faqs: [
    {
      question: "Can Studiely help with TCE Geography?",
      answer:
        "Yes. Studiely can help students organise Geography revision into notes, flashcards, quizzes, exam focus and exam-style practice. It works best when students add their class material, teacher feedback and topic priorities, then use the tools to check understanding regularly.",
    },
    {
      question: "Is this an official Tasmanian Certificate of Education resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with TASC or any Tasmanian education authority. Students should still follow their school advice, course information and teacher instructions for formal requirements.",
    },
    {
      question: "How should students revise Geography each week?",
      answer:
        "A useful weekly routine is to summarise one topic, make recall cards for the hardest points, complete a short quiz and then practise one response or applied task. This keeps revision steady and reduces rushed memorisation before assessment.",
    },
    {
      question: "Can students use Studiely alongside school notes?",
      answer:
        "Yes. Students can use Studiely to reshape school notes into active revision material. The best approach is to keep teacher guidance as the source, then use Studiely to organise, test and practise the content in a clearer way.",
    },
  ],
  ctaTitle: "Start Building a Stronger Geography Revision Routine",
  ctaBody:
    "Use Studiely to turn TCE Geography study into a repeatable system: make revision notes, build flashcards, check understanding with quizzes, sharpen exam focus and practise responses before assessment pressure builds. Start with one topic, make it active and keep improving from there.",
  ctaPrimaryLabel: "Start studying Geography",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
