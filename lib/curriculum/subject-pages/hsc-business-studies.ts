import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const HSC_BUSINESS_STUDIES: SubjectLandingContent = {
  path: "/australian-curriculum/nsw/hsc/business-studies",
  seoTitle: "HSC Business Studies Study Resources | Studiely",
  metaDescription:
    "Create HSC Business Studies revision notes, flashcards, quizzes and exam practice with Studiely for NSW HSC students.",
  shortDescription:
    "Studiely helps HSC Business Studies students organise business studies topics into revision notes, flashcards, quizzes, exam focus support and exam practice.",
  keywords: [
    "HSC Business Studies resources",
    "HSC Business Studies revision notes",
    "HSC Business Studies flashcards",
    "HSC Business Studies quiz",
    "HSC Business Studies exam practice",
  ],
  breadcrumbName: "HSC Business Studies",
  heroEyebrow: "NSW HSC",
  heroTitle: "HSC Business Studies Study Resources for",
  heroHighlight: "Revision, Flashcards & Exam Practice",
  lead:
    "HSC Business Studies students can use Studiely to turn business studies topics, class notes, assessment skills and exam preparation into clear revision notes, flashcards, quizzes, exam focus support and exam-style practice. This page brings the main study tools together so NSW senior students can revise actively instead of only rereading notes.",
  introTitle: "Strong HSC business and economics study starts with application",
  introParagraphs: [
    "Students need to connect concepts, examples, data and strategy to the question in front of them. HSC Business Studies students often know they need to revise, but they may not know what to revise first, how to test understanding, or how to turn class material into practice. Studiely gives students one place to organise business studies content into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "For Year 11 and Year 12 students, the challenge is not always effort. It is direction. Business Studies improves when students turn concepts into practical business decisions and examples. A stronger study system helps students summarise, recall, check, focus and practise with purpose.",
  ],
  coverTitle: "What HSC Business Studies Covers",
  coverIntro:
    "HSC Business Studies focuses on operations, marketing, finance, human resources, business reports, case studies, strategies and performance indicators. The subject expects students to understand core ideas and then apply them through structured responses, tasks, problems, performances, projects or exam-style questions depending on the course.",
  coverTopics: [
    "Operations",
    "Marketing",
    "Finance",
    "Human resources",
    "Business reports",
    "Case studies",
    "Strategies",
    "Performance indicators",
  ],
  coverClosing:
    "Students often find business studies difficult because it requires more than memory. The real challenge is using business terminology and case evidence to explain strategy, not just list content. That is why revision should connect content knowledge with active recall, question practice and assessment focus.",
  supportTitle: "How Studiely Helps with HSC Business Studies",
  supportParagraphs: [
    "Studiely supports the full study process for HSC Business Studies. Students can begin with a topic, module, concept, skill or class note, then convert it into different study formats. This makes revision more active and helps students see what they understand before they move into longer practice.",
  ],
  supportRows: [
    {
      need: "Understand the subject",
      support:
        "Create clear revision notes for topic summaries, business terms, case study examples, process steps and report structures.",
    },
    {
      need: "Remember key details",
      support:
        "Build flashcards for definitions, strategies, influences, KPIs, formulas and case-study links.",
    },
    {
      need: "Check understanding",
      support:
        "Use quizzes that tests business concepts, strategy selection, calculations and terminology.",
    },
    {
      need: "Prepare for assessment",
      support:
        "Focus on report structure, directive terms, case evidence, business judgement and time management.",
    },
    {
      need: "Practise applying knowledge",
      support:
        "Work through short answers, business reports, extended responses and case-based questions.",
    },
  ],
  supportAfterParagraphs: [
    "Studiely provides independent study support and is not affiliated with NESA or any government education authority.",
  ],
  tools: [
    {
      id: "notes",
      title: "HSC Business Studies Revision Notes",
      body: "Revision notes for HSC Business Studies should make the subject easier to use, not just longer to read. Studiely helps students create focused notes for topic summaries, business terms, case study examples, process steps and report structures. These notes can reduce scattered revision and give students a clearer view of what each topic or skill requires. A useful note does not simply copy class content. It highlights key ideas, explains relationships and gives students a way to return to the material quickly. In business studies, this helps students revise with purpose before homework, school assessments or HSC exam preparation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "HSC Business Studies Flashcards",
      body: "Flashcards work best when students use them for active recall. Studiely can help students create HSC Business Studies flashcards for definitions, strategies, influences, KPIs, formulas and case-study links. This gives students a faster way to check whether they can remember the detail before they need to apply it.",
      bullets: [
        "review important business studies terms and ideas",
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
      title: "HSC Business Studies Quiz Practice",
      body: "Quizzes help students check understanding before they attempt longer responses or exam-style tasks. Studiely can create quiz practice that tests business concepts, strategy selection, calculations and terminology. This helps students identify gaps early, while there is still time to revise the topic properly. For HSC Business Studies, quiz practice also encourages students to think actively. Instead of assuming they know a topic because it looks familiar, students can test whether they can recall, explain and apply it without support.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "HSC Business Studies Exam Focus",
      body: "Exam focus helps students move from general revision into targeted preparation. Studiely helps students focus on report structure, directive terms, case evidence, business judgement and time management. This matters because HSC questions usually reward students who answer the task directly and use relevant evidence, working or examples. A focused revision session should help students ask: what is this question really asking, what knowledge do I need, what structure will help, and what mistakes should I avoid? Studiely supports that thinking so students can approach business studies study with more control.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "HSC Business Studies Exam Practice",
      body: "Practice turns revision into performance. For HSC Business Studies, students can use Studiely to support short answers, business reports, extended responses and case-based questions. This gives students a way to move beyond passive reading and into the kind of thinking they need for school assessments and HSC preparation. The strongest practice routine combines short checks with longer tasks. Students can review a concept, test it with flashcards or quizzes, then apply it in a practice response or problem. That sequence helps build confidence without turning study into last-minute cramming.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for HSC Business Studies",
  whyParagraphs: [
    "Students use Studiely because it keeps business studies study organised and active. The platform helps students apply concepts, use examples and explain decisions clearly, while still keeping the workflow simple enough to use during a busy school week.",
  ],
  whyBullets: [
    "Create clearer HSC Business Studies revision notes from class material",
    "Build flashcards for fast active recall",
    "Use quizzes to check understanding before assessments",
    "Focus on exam-style questions and response expectations",
    "Practise applying knowledge instead of only rereading notes",
  ],
  faqs: [
    {
      question: "What is HSC Business Studies?",
      answer:
        "HSC Business Studies is a senior HSC subject studied by students in New South Wales. It develops operations, marketing, finance, human resources, business reports, case studies, strategies and performance indicators, and it asks students to apply knowledge in assessment and exam-style tasks rather than only remember content.",
    },
    {
      question: "How can Studiely help with HSC Business Studies?",
      answer:
        "Studiely helps students turn business studies content into revision notes, flashcards, quizzes, exam focus support and exam practice. This gives students one organised workflow for understanding, recall, checking and application.",
    },
    {
      question: "Can I use Studiely for HSC Business Studies revision notes?",
      answer:
        "Yes. Students can use Studiely to create focused revision notes for topic summaries, business terms, case study examples, process steps and report structures. The aim is to make revision clearer, shorter and easier to use before assessments.",
    },
    {
      question: "Are flashcards useful for HSC Business Studies?",
      answer:
        "Flashcards can help when students use them for active recall. In HSC Business Studies, they can support quick review of definitions, strategies, influences, KPIs, formulas and case-study links, so students do not rely only on rereading long notes.",
    },
    {
      question: "Is Studiely an official HSC or NESA resource?",
      answer:
        "No. Studiely provides independent study support for students and is not affiliated with NESA or any government education authority. Students should still follow their school guidance and official course requirements.",
    },
  ],
  ctaTitle: "Start Studying HSC Business Studies with More Structure",
  ctaBody:
    "HSC Business Studies becomes easier to manage when students have a study system that supports understanding, recall, checking, focus and practice. Use Studiely to create revision notes, flashcards, quizzes, exam focus support and exam practice for the business studies topics you need to improve.",
  ctaPrimaryLabel: "Start studying Business Studies",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
