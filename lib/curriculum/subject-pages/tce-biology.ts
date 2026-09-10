import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const TCE_BIOLOGY: SubjectLandingContent = {
  path: "/australian-curriculum/tasmania/tce/biology",
  seoTitle: "TCE Biology Study Resources | Studiely",
  metaDescription:
    "Use Studiely for TCE Biology notes, flashcards, quizzes and exam practice for Tasmania students.",
  shortDescription:
    "Study Biology with notes, flashcards, quizzes, exam focus and practice for Tasmanian students.",
  keywords: [
    "TCE Biology",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
    "Tasmania senior study resources",
  ],
  breadcrumbName: "TCE Biology",
  heroEyebrow: "Tasmania TCE",
  heroTitle: "TCE Biology Study Support for",
  heroHighlight: "Notes, Flashcards and Exam Practice",
  lead:
    "TCE Biology helps Tasmanian senior students organise Biology revision into clear notes, active recall, short quizzes, exam focus and practice. Studiely brings these tools into one study flow so students can revise the ideas, skills and assessment language that matter without jumping between disconnected resources.",
  introTitle: "Study Biology with a clearer Tasmanian senior pathway",
  introParagraphs: [
    "A useful study page should help students do something with their knowledge, not just store it. TCE Biology sits within the Tasmanian Certificate of Education pathway, so students need revision that respects classroom learning, course expectations and assessment pressure. Studiely helps them reshape school material into active study tasks, then check whether they can explain, recall and apply the content.",
    "This page is independent study support. It is not an official TASC resource and does not replace school advice, teacher instructions or current course information. Its purpose is to help students prepare for Biology in Tasmania with more structure and less guesswork.",
  ],
  coverTitle: "What Biology Asks Students to Do",
  coverIntro:
    "In Biology, students work with living systems, evidence, biological processes, diagrams and scientific explanation. The subject can involve cells, genetics, evolution, ecology, homeostasis, biological systems, investigation skills and data interpretation. TCE Biology preparation should therefore combine content knowledge with the ability to use that knowledge in a task, response or applied situation.",
  coverTopics: [
    "Cells",
    "Genetics",
    "Evolution",
    "Ecology",
    "Homeostasis",
    "Biological systems",
    "Investigation skills",
    "Data interpretation",
  ],
  coverClosing:
    "Studiely keeps the big picture visible while still giving space for details. Students can group topic summaries, build recall cards, test small sections and practise responses that match the way senior assessment asks them to think.",
  supportTitle: "How Studiely Supports Revision",
  supportParagraphs: [
    "Studiely gives TCE Biology students one place to move from understanding into recall and then into response practice. Instead of treating notes, flashcards, quizzes and exam preparation as separate jobs, the page connects them into a steady cycle. Students can connect terminology with processes, explain cause and effect and interpret evidence.",
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
      title: "Revision Notes for Biology",
      body: "Strong notes do not copy every lesson word-for-word. For TCE Biology, revision notes should identify the idea, explain why it matters and show how a student might use it in a question or task. Studiely helps students build notes that are short enough to revisit but detailed enough to guide real preparation. For this subject, effective notes usually organise definitions, pathways, diagrams, experimental variables and topic links. Students can return to those notes before a quiz, writing task, practical reflection or exam-style question, which turns the notes into a working tool rather than a storage folder.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Active Recall",
      body: "Flashcards are useful because they make students retrieve knowledge before seeing the answer. In this subject, Studiely can convert difficult terms, examples, formulas, features, processes or response cues into simple prompt-and-answer cards. Strong cards support recall of terms, structures, functions, examples and cause-effect relationships.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Checking Understanding",
      body: "Quizzes give students a fast way to discover what they can actually use. Short checks can reveal whether a topic needs another explanation, another example or another attempt. For Biology, useful quiz questions test concept links, biological vocabulary, diagram labels and data interpretation.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for Better Preparation",
      body: "Exam focus is where students connect content with assessment behaviour. TCE Biology students need to know not only what a topic means, but also how to respond when a task asks them to explain, analyse, compare, justify, calculate, interpret or evaluate. Studiely helps students focus on the details that affect marks: command words, structure, evidence, terminology, time pressure and common mistakes. For Biology, this means paying attention to command terms, experimental wording, graph reading and answer depth.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice Without Last-Minute Panic",
      body: "Practice works best when students do it before the final rush. Studiely helps students create short practice tasks, response prompts and revision checks that build confidence gradually. Strong practice in Biology uses short explanations, data prompts and applied biological scenarios.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Tasmanian Students Use Studiely for Biology",
  whyParagraphs: [
    "Students use Studiely because it turns revision into a clearer routine. This shows what feels secure, what feels half-known and what needs another attempt. The benefit is not just having digital notes; it is having a repeatable process: summarise the idea, recall it, test it, focus it for assessment and practise it in context. Biology becomes easier when students move between diagrams, words and evidence without losing the process.",
  ],
  faqs: [
    {
      question: "Can Studiely help with TCE Biology?",
      answer:
        "Yes. Studiely can help students organise Biology revision into notes, flashcards, quizzes, exam focus and exam-style practice. It works best when students add their class material, teacher feedback and topic priorities, then use the tools to check understanding regularly.",
    },
    {
      question: "Is this an official Tasmanian Certificate of Education resource?",
      answer:
        "No. Studiely provides independent study support and is not affiliated with TASC or any Tasmanian education authority. Students should still follow their school advice, course information and teacher instructions for formal requirements.",
    },
    {
      question: "How should students revise Biology each week?",
      answer:
        "A useful weekly routine is to summarise one topic, make recall cards for the hardest points, complete a short quiz and then practise one response or applied task. This keeps revision steady and reduces rushed memorisation before assessment.",
    },
    {
      question: "Can students use Studiely alongside school notes?",
      answer:
        "Yes. Students can use Studiely to reshape school notes into active revision material. The best approach is to keep teacher guidance as the source, then use Studiely to organise, test and practise the content in a clearer way.",
    },
  ],
  ctaTitle: "Start Building a Stronger Biology Revision Routine",
  ctaBody:
    "Use Studiely to turn TCE Biology study into a repeatable system: make revision notes, build flashcards, check understanding with quizzes, sharpen exam focus and practise responses before assessment pressure builds. Start with one topic, make it active and keep improving from there.",
  ctaPrimaryLabel: "Start studying Biology",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
