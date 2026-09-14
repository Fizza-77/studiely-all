import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const HSC_MATHEMATICS_EXTENSION_1: SubjectLandingContent = {
  path: "/australian-curriculum/nsw/hsc/mathematics-extension-1",
  seoTitle: "HSC Mathematics Extension 1 Study Resources | Studiely",
  metaDescription:
    "Create HSC Mathematics Extension 1 revision notes, flashcards, quizzes and exam practice with Studiely for NSW HSC students.",
  shortDescription:
    "Studiely helps HSC Mathematics Extension 1 students organise mathematics extension 1 topics into revision notes, flashcards, quizzes, exam focus support and exam practice.",
  keywords: [
    "HSC Mathematics Extension 1 resources",
    "HSC Mathematics Extension 1 revision notes",
    "HSC Mathematics Extension 1 flashcards",
    "HSC Mathematics Extension 1 quiz",
    "HSC Mathematics Extension 1 exam practice",
  ],
  breadcrumbName: "HSC Mathematics Extension 1",
  heroEyebrow: "NSW HSC",
  heroTitle: "HSC Mathematics Extension 1 Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "HSC Mathematics Extension 1 students can use Studiely to turn mathematics extension 1 topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so NSW senior students can revise actively instead of only rereading notes.",
  introTitle:
    "Strong HSC mathematics study starts with method, accuracy and repeated practice",
  introParagraphs: [
    "Students need to understand why a process works, not only remember the final formula. HSC Mathematics Extension 1 students often know they need to revise, but they may not know what to revise first, how to test understanding, or how to turn class material into practice. Studiely gives students one place to organise mathematics extension 1 content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Year 11 and Year 12 students, the challenge is not always effort. It is direction. Extension 1 study should train students to think through unfamiliar questions, not just repeat familiar procedures. A stronger study system helps students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What HSC Mathematics Extension 1 Covers",
  coverIntro:
    "HSC Mathematics Extension 1 focuses on advanced functions, calculus, vectors, permutations and combinations, proof, trigonometric identities and demanding problem-solving. The subject expects students to understand core ideas and then apply them through structured responses, tasks, problems, performances, projects or exam-style questions depending on the course.",
  coverTopics: [
    "Advanced functions",
    "Calculus",
    "Vectors",
    "Permutations and combinations",
    "Proof",
    "Trigonometric identities",
    "Demanding problem-solving",
  ],
  coverClosing:
    "Students often find mathematics extension 1 difficult because it requires more than memory. The real challenge is building flexible problem-solving when questions combine ideas from several topics. That is why revision should connect content knowledge with active recall, question practice and assessment focus.",
  supportTitle: "How Studiely Helps with HSC Mathematics Extension 1",
  supportParagraphs: [
    "Studiely supports the full study process for HSC Mathematics Extension 1. Students can begin with a topic, module, concept, skill or class note, then convert it into different study formats. This makes revision more active and helps students see what they understand before they move into longer practice.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clear revision notes for advanced methods, proof patterns, identity transformations, vector steps and difficult example breakdowns.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for theorems, identities, derivative patterns, vector facts, probability principles and strategy prompts.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes that tests method choice, symbolic manipulation and conceptual links across topics.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus on unpacking unfamiliar problems, setting up solutions, showing rigorous working and managing time.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Work through proof-style questions, calculus applications, vectors, combinatorics and high-mark multi-step questions.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with NESA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "HSC Mathematics Extension 1 Revision Notes",
      body: "Revision notes for HSC Mathematics Extension 1 should make the subject easier to use, not just longer to read. Studiely helps students create focused notes for advanced methods, proof patterns, identity transformations, vector steps and difficult example breakdowns. These notes can reduce scattered revision and give students a clearer view of what each topic or skill requires. A useful note does not simply copy class content. It highlights key ideas, explains relationships and gives students a way to return to the material quickly. In mathematics extension 1, this helps students revise with purpose before homework, school assessments or HSC exam preparation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "HSC Mathematics Extension 1 Flashcards",
      body: "Flashcards work best when students use them for active recall. Studiely can help students create HSC Mathematics Extension 1 flashcards for theorems, identities, derivative patterns, vector facts, probability principles and strategy prompts. This gives students a faster way to check whether they can remember the detail before they need to apply it.",
      bullets: [
        "review important mathematics extension 1 terms and ideas",
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
      title: "HSC Mathematics Extension 1 Quiz Practice",
      body: "Quizzes help students check understanding before they attempt longer responses or exam-style tasks. Studiely can create quiz practice that tests method choice, symbolic manipulation and conceptual links across topics. This helps students identify gaps early, while there is still time to revise the topic properly. For HSC Mathematics Extension 1, quiz practice also encourages students to think actively. Instead of assuming they know a topic because it looks familiar, students can test whether they can recall, explain and apply it without support.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "HSC Mathematics Extension 1 Exam Focus",
      body: "Exam focus helps students move from general revision into targeted preparation. Studiely helps students focus on unpacking unfamiliar problems, setting up solutions, showing rigorous working and managing time. This matters because HSC questions usually reward students who answer the task directly and use relevant evidence, working or examples. A focused revision session should help students ask: what is this question really asking, what knowledge do I need, what structure will help, and what mistakes should I avoid? Studiely supports that thinking so students can approach mathematics extension 1 study with more control.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "HSC Mathematics Extension 1 Exam Practice",
      body: "Practice turns revision into performance. For HSC Mathematics Extension 1, students can use Studiely to support proof-style questions, calculus applications, vectors, combinatorics and high-mark multi-step questions. This gives students a way to move beyond passive reading and into the kind of thinking they need for school assessments and HSC preparation. The strongest practice routine combines short checks with longer tasks. Students can review a concept, test it with flashcards or quizzes, then apply it in a practice response or problem. That sequence helps build confidence without turning study into last-minute cramming.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for HSC Mathematics Extension 1",
  whyParagraphs: [
    "Students use Studiely because it keeps mathematics extension 1 study organised and active. The platform helps students select methods, show working and solve exam-style problems, while still keeping the workflow simple enough to use during a busy school week.",
  ],
  whyBullets: [
    "Create clearer HSC Mathematics Extension 1 revision notes from class material",
    "Build flashcards for fast active recall",
    "Use quizzes to check understanding before assessments",
    "Focus on exam-style questions and response expectations",
    "Practise applying knowledge instead of only rereading notes",
  ],
  faqs: [
    {
      question: "What is HSC Mathematics Extension 1?",
      answer:
        "HSC Mathematics Extension 1 is a senior HSC subject studied by students in New South Wales. It develops advanced functions, calculus, vectors, permutations and combinations, proof, trigonometric identities and demanding problem-solving, and it asks students to apply knowledge in assessment and exam-style tasks rather than only remember content.",
    },
    {
      question: "How can Studiely help with HSC Mathematics Extension 1?",
      answer:
        "Studiely helps students turn mathematics extension 1 content into revision notes, flashcards, quizzes, exam focus support and exam practice. This gives students one organised workflow for understanding, recall, checking and application.",
    },
    {
      question: "Can I use Studiely for HSC Mathematics Extension 1 revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused revision notes for advanced methods, proof patterns, identity transformations, vector steps and difficult example breakdowns. The aim is to make revision clearer, shorter and easier to use before assessments.",
    },
    {
      question: "Are flashcards useful for HSC Mathematics Extension 1?",
      answer:
        "Flashcards can help when students use them for active recall. In HSC Mathematics Extension 1, they can support quick review of theorems, identities, derivative patterns, vector facts, probability principles and strategy prompts, so students do not rely only on rereading long notes.",
    },
    {
      question: "Is Studiely an official HSC or NESA resource?",
      answer:
        "No. Studiely provides independent study support for students and is not affiliated with NESA or any government education authority. Students should still follow their school guidance and official course requirements.",
    },
  ],
  ctaTitle: "Start Studying HSC Mathematics Extension 1 with More Structure",
  ctaBody:
    "HSC Mathematics Extension 1 becomes easier to manage when students have a study system that supports understanding, recall, checking, focus and practice. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the mathematics extension 1 topics you need to improve.",
  ctaPrimaryLabel: "Start studying Mathematics Extension 1",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
