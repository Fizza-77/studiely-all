import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const HSC_MATHEMATICS_STANDARD: SubjectLandingContent = {
  path: "/australian-curriculum/nsw/hsc/mathematics-standard",
  seoTitle: "HSC Mathematics Standard Study Resources | Studiely",
  metaDescription:
    "Create HSC Mathematics Standard revision notes, flashcards, quizzes and exam practice with Studiely for NSW HSC students.",
  shortDescription:
    "Studiely helps HSC Mathematics Standard students organise mathematics standard topics into revision notes, flashcards, quizzes, exam focus support and exam practice.",
  keywords: [
    "HSC Mathematics Standard resources",
    "HSC Mathematics Standard revision notes",
    "HSC Mathematics Standard flashcards",
    "HSC Mathematics Standard quiz",
    "HSC Mathematics Standard exam practice",
  ],
  breadcrumbName: "HSC Mathematics Standard",
  heroEyebrow: "NSW HSC",
  heroTitle: "HSC Mathematics Standard Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "HSC Mathematics Standard students can use Studiely to turn mathematics standard topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so NSW senior students can revise actively instead of only rereading notes.",
  introTitle:
    "Strong HSC mathematics study starts with method, accuracy and repeated practice",
  introParagraphs: [
    "Students need to understand why a process works, not only remember the final formula. HSC Mathematics Standard students often know they need to revise, but they may not know what to revise first, how to test understanding, or how to turn class material into practice. Studiely gives students one place to organise mathematics standard content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Year 11 and Year 12 students, the challenge is not always effort. It is direction. Mathematics Standard improves when students connect everyday contexts with reliable methods and clear working. A stronger study system helps students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What HSC Mathematics Standard Covers",
  coverIntro:
    "HSC Mathematics Standard focuses on financial mathematics, measurement, networks, statistics, probability, algebra, modelling and practical problem-solving. The subject expects students to understand core ideas and then apply them through structured responses, tasks, problems, performances, projects or exam-style questions depending on the course.",
  coverTopics: [
    "Financial mathematics",
    "Measurement",
    "Networks",
    "Statistics",
    "Probability",
    "Algebra",
    "Modelling",
    "Practical problem-solving",
  ],
  coverClosing:
    "Students often find mathematics standard difficult because it requires more than memory. The real challenge is choosing the right method and showing working clearly under exam conditions. That is why revision should connect content knowledge with active recall, question practice and assessment focus.",
  supportTitle: "How Studiely Helps with HSC Mathematics Standard",
  supportParagraphs: [
    "Studiely supports the full study process for HSC Mathematics Standard. Students can begin with a topic, module, concept, skill or class note, then convert it into different study formats. This makes revision more active and helps students see what they understand before they move into longer practice.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clear revision notes for formula summaries, worked steps, calculator processes, common question types and topic rules.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for formulas, definitions, graph features, units, calculator commands and method reminders.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes that tests formulas, calculations, interpretation and multi-step reasoning.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus on question keywords, working-out structure, units, calculator accuracy and topic selection.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Work through mixed topic problems, data questions, finance problems and exam-style calculations.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with NESA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "HSC Mathematics Standard Revision Notes",
      body: "Revision notes for HSC Mathematics Standard should make the subject easier to use, not just longer to read. Studiely helps students create focused notes for formula summaries, worked steps, calculator processes, common question types and topic rules. These notes can reduce scattered revision and give students a clearer view of what each topic or skill requires. A useful note does not simply copy class content. It highlights key ideas, explains relationships and gives students a way to return to the material quickly. In mathematics standard, this helps students revise with purpose before homework, school assessments or HSC exam preparation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "HSC Mathematics Standard Flashcards",
      body: "Flashcards work best when students use them for active recall. Studiely can help students create HSC Mathematics Standard flashcards for formulas, definitions, graph features, units, calculator commands and method reminders. This gives students a faster way to check whether they can remember the detail before they need to apply it.",
      bullets: [
        "review important mathematics standard terms and ideas",
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
      title: "HSC Mathematics Standard Quiz Practice",
      body: "Quizzes help students check understanding before they attempt longer responses or exam-style tasks. Studiely can create quiz practice that tests formulas, calculations, interpretation and multi-step reasoning. This helps students identify gaps early, while there is still time to revise the topic properly. For HSC Mathematics Standard, quiz practice also encourages students to think actively. Instead of assuming they know a topic because it looks familiar, students can test whether they can recall, explain and apply it without support.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "HSC Mathematics Standard Exam Focus",
      body: "Exam focus helps students move from general revision into targeted preparation. Studiely helps students focus on question keywords, working-out structure, units, calculator accuracy and topic selection. This matters because HSC questions usually reward students who answer the task directly and use relevant evidence, working or examples. A focused revision session should help students ask: what is this question really asking, what knowledge do I need, what structure will help, and what mistakes should I avoid? Studiely supports that thinking so students can approach mathematics standard study with more control.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "HSC Mathematics Standard Exam Practice",
      body: "Practice turns revision into performance. For HSC Mathematics Standard, students can use Studiely to support mixed topic problems, data questions, finance problems and exam-style calculations. This gives students a way to move beyond passive reading and into the kind of thinking they need for school assessments and HSC preparation. The strongest practice routine combines short checks with longer tasks. Students can review a concept, test it with flashcards or quizzes, then apply it in a practice response or problem. That sequence helps build confidence without turning study into last-minute cramming.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.examPractice,
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for HSC Mathematics Standard",
  whyParagraphs: [
    "Students use Studiely because it keeps mathematics standard study organised and active. The platform helps students select methods, show working and solve exam-style problems, while still keeping the workflow simple enough to use during a busy school week.",
  ],
  whyBullets: [
    "Create clearer HSC Mathematics Standard revision notes from class material",
    "Build flashcards for fast active recall",
    "Use quizzes to check understanding before assessments",
    "Focus on exam-style questions and response expectations",
    "Practise applying knowledge instead of only rereading notes",
  ],
  faqs: [
    {
      question: "What is HSC Mathematics Standard?",
      answer:
        "HSC Mathematics Standard is a senior HSC subject studied by students in New South Wales. It develops financial mathematics, measurement, networks, statistics, probability, algebra, modelling and practical problem-solving, and it asks students to apply knowledge in assessment and exam-style tasks rather than only remember content.",
    },
    {
      question: "How can Studiely help with HSC Mathematics Standard?",
      answer:
        "Studiely helps students turn mathematics standard content into revision notes, flashcards, quizzes, exam focus support and exam practice. This gives students one organised workflow for understanding, recall, checking and application.",
    },
    {
      question: "Can I use Studiely for HSC Mathematics Standard revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused revision notes for formula summaries, worked steps, calculator processes, common question types and topic rules. The aim is to make revision clearer, shorter and easier to use before assessments.",
    },
    {
      question: "Are flashcards useful for HSC Mathematics Standard?",
      answer:
        "Flashcards can help when students use them for active recall. In HSC Mathematics Standard, they can support quick review of formulas, definitions, graph features, units, calculator commands and method reminders, so students do not rely only on rereading long notes.",
    },
    {
      question: "Is Studiely an official HSC or NESA resource?",
      answer:
        "No. Studiely provides independent study support for students and is not affiliated with NESA or any government education authority. Students should still follow their school guidance and official course requirements.",
    },
  ],
  ctaTitle: "Start Studying HSC Mathematics Standard with More Structure",
  ctaBody:
    "HSC Mathematics Standard becomes easier to manage when students have a study system that supports understanding, recall, checking, focus and practice. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the mathematics standard topics you need to improve.",
  ctaPrimaryLabel: "Start studying Mathematics Standard",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
