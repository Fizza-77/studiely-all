import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const HSC_ENGLISH_EXTENSION_1: SubjectLandingContent = {
  path: "/australian-curriculum/nsw/hsc/english-extension-1",
  seoTitle: "HSC English Extension 1 Study Resources | Studiely",
  metaDescription:
    "Create HSC English Extension 1 revision notes, flashcards, quizzes and exam practice with Studiely for NSW HSC students.",
  shortDescription:
    "Studiely helps HSC English Extension 1 students organise english extension 1 topics into revision notes, flashcards, quizzes, exam focus support and exam practice.",
  keywords: [
    "HSC English Extension 1 resources",
    "HSC English Extension 1 revision notes",
    "HSC English Extension 1 flashcards",
    "HSC English Extension 1 quiz",
    "HSC English Extension 1 exam practice",
  ],
  breadcrumbName: "HSC English Extension 1",
  heroEyebrow: "NSW HSC",
  heroTitle: "HSC English Extension 1 Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "HSC English Extension 1 students can use Studiely to turn english extension 1 topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so NSW senior students can revise actively instead of only rereading notes.",
  introTitle: "Strong HSC English study starts with more than reading the prescribed text",
  introParagraphs: [
    "Students need to understand ideas, choose evidence, analyse language and shape a response that fits the question. HSC English Extension 1 students often know they need to revise, but they may not know what to revise first, how to test understanding, or how to turn class material into practice. Studiely gives students one place to organise english extension 1 content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Year 11 and Year 12 students, the challenge is not always effort. It is direction. Extension 1 needs depth, but depth only helps when students can turn it into precise argument. A stronger study system helps students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What HSC English Extension 1 Covers",
  coverIntro:
    "HSC English Extension 1 focuses on literary worlds, theoretical perspectives, close reading, genre, voice, context, intertextuality and independent critical thinking. The subject expects students to understand core ideas and then apply them through structured responses, tasks, problems, performances, projects or exam-style questions depending on the course.",
  coverTopics: [
    "Literary worlds",
    "Theoretical perspectives",
    "Close reading",
    "Genre",
    "Voice",
    "Context",
    "Intertextuality",
    "Independent critical thinking",
  ],
  coverClosing:
    "Students often find english extension 1 difficult because it requires more than memory. The real challenge is moving beyond prepared interpretation into original, well-supported critical argument. That is why revision should connect content knowledge with active recall, question practice and assessment focus.",
  supportTitle: "How Studiely Helps with HSC English Extension 1",
  supportParagraphs: [
    "Studiely supports the full study process for HSC English Extension 1. Students can begin with a topic, module, concept, skill or class note, then convert it into different study formats. This makes revision more active and helps students see what they understand before they move into longer practice.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clear revision notes for elective ideas, literary concepts, theoretical terms, prescribed texts, related material and evidence maps.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for critical terms, quotes, theorists, elective concepts, textual links and argument starters.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes that checks whether students can explain ideas, evaluate textual choices and compare interpretations.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus on critical voice, conceptual control, elective language and flexible argument building.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Work through extended responses, creative-critical planning, conceptual paragraphs and evidence-driven analysis.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with NESA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "HSC English Extension 1 Revision Notes",
      body: "Revision notes for HSC English Extension 1 should make the subject easier to use, not just longer to read. Studiely helps students create focused notes for elective ideas, literary concepts, theoretical terms, prescribed texts, related material and evidence maps. These notes can reduce scattered revision and give students a clearer view of what each topic or skill requires. A useful note does not simply copy class content. It highlights key ideas, explains relationships and gives students a way to return to the material quickly. In english extension 1, this helps students revise with purpose before homework, school assessments or HSC exam preparation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "HSC English Extension 1 Flashcards",
      body: "Flashcards work best when students use them for active recall. Studiely can help students create HSC English Extension 1 flashcards for critical terms, quotes, theorists, elective concepts, textual links and argument starters. This gives students a faster way to check whether they can remember the detail before they need to apply it.",
      bullets: [
        "review important english extension 1 terms and ideas",
        "turn long notes into quick recall prompts",
        "practise before assessments without rereading everything",
        "spot weak areas that need another round of revision",
      ],
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "HSC English Extension 1 Quiz Practice",
      body: "Quizzes help students check understanding before they attempt longer responses or exam-style tasks. Studiely can create quiz practice that checks whether students can explain ideas, evaluate textual choices and compare interpretations. This helps students identify gaps early, while there is still time to revise the topic properly. For HSC English Extension 1, quiz practice also encourages students to think actively. Instead of assuming they know a topic because it looks familiar, students can test whether they can recall, explain and apply it without support.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "HSC English Extension 1 Exam Focus",
      body: "Exam focus helps students move from general revision into targeted preparation. Studiely helps students focus on critical voice, conceptual control, elective language and flexible argument building. This matters because HSC questions usually reward students who answer the task directly and use relevant evidence, working or examples. A focused revision session should help students ask: what is this question really asking, what knowledge do I need, what structure will help, and what mistakes should I avoid? Studiely supports that thinking so students can approach english extension 1 study with more control.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "HSC English Extension 1 Exam Practice",
      body: "Practice turns revision into performance. For HSC English Extension 1, students can use Studiely to support extended responses, creative-critical planning, conceptual paragraphs and evidence-driven analysis. This gives students a way to move beyond passive reading and into the kind of thinking they need for school assessments and HSC preparation. The strongest practice routine combines short checks with longer tasks. Students can review a concept, test it with flashcards or quizzes, then apply it in a practice response or problem. That sequence helps build confidence without turning study into last-minute cramming.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for HSC English Extension 1",
  whyParagraphs: [
    "Students use Studiely because it keeps english extension 1 study organised and active. The platform helps students analyse texts, shape arguments and write with control, while still keeping the workflow simple enough to use during a busy school week.",
  ],
  whyBullets: [
    "Create clearer HSC English Extension 1 revision notes from class material",
    "Build flashcards for fast active recall",
    "Use quizzes to check understanding before assessments",
    "Focus on exam-style questions and response expectations",
    "Practise applying knowledge instead of only rereading notes",
  ],
  faqs: [
    {
      question: "What is HSC English Extension 1?",
      answer:
        "HSC English Extension 1 is a senior HSC subject studied by students in New South Wales. It develops literary worlds, theoretical perspectives, close reading, genre, voice, context, intertextuality and independent critical thinking, and it asks students to apply knowledge in assessment and exam-style tasks rather than only remember content.",
    },
    {
      question: "How can Studiely help with HSC English Extension 1?",
      answer:
        "Studiely helps students turn english extension 1 content into revision notes, flashcards, quizzes, exam focus support and exam practice. This gives students one organised workflow for understanding, recall, checking and application.",
    },
    {
      question: "Can I use Studiely for HSC English Extension 1 revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused revision notes for elective ideas, literary concepts, theoretical terms, prescribed texts, related material and evidence maps. The aim is to make revision clearer, shorter and easier to use before assessments.",
    },
    {
      question: "Are flashcards useful for HSC English Extension 1?",
      answer:
        "Flashcards can help when students use them for active recall. In HSC English Extension 1, they can support quick review of critical terms, quotes, theorists, elective concepts, textual links and argument starters, so students do not rely only on rereading long notes.",
    },
    {
      question: "Is Studiely an official HSC or NESA resource?",
      answer:
        "No. Studiely provides independent study support for students and is not affiliated with NESA or any government education authority. Students should still follow their school guidance and official course requirements.",
    },
  ],
  ctaTitle: "Start Studying HSC English Extension 1 with More Structure",
  ctaBody:
    "HSC English Extension 1 becomes easier to manage when students have a study system that supports understanding, recall, checking, focus and practice. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the english extension 1 topics you need to improve.",
  ctaPrimaryLabel: "Start studying English Extension 1",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
