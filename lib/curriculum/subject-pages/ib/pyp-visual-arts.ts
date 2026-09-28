import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_VISUAL_ARTS: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/visual-arts",
  seoTitle: "IB PYP Visual Arts Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP Visual Arts study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP Visual Arts resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP Visual Arts",
    "PYP Visual Arts resources",
    "PYP Visual Arts activities",
    "IB PYP Visual Arts learning resources",
    "IB PYP Visual Arts practice activities",
    "IB PYP Visual Arts revision notes",
    "IB PYP Visual Arts flashcards",
    "IB PYP Visual Arts quiz",
    "IB PYP Visual Arts practice questions",
    "IB PYP Visual Arts exam focus",
    "IB PYP Visual Arts exam practice",
    "IB PYP Visual Arts study resources",
  ],
  breadcrumbName: "Visual Arts",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP Visual Arts Resources for",
  heroHighlight: "Creating & Responding",
  heroIntro:
    "Make, notice, explain, refine. Studiely helps PYP visual arts learners capture artistic choices, vocabulary, observations and reflection so practical work is supported by clear thinking.",
  lead: "IB PYP Visual Arts can help young learners create, respond, experiment and communicate ideas through images, materials and visual choices. Studiely supports Grade 1–5 students with concise notes, visual-arts vocabulary flashcards, quizzes and reflection prompts that strengthen the thinking around practical art-making.",
  workflowSteps: [
    {
      title: "Making choices",
      body: "Experiment with materials and decide what effect you want to create.",
    },
    {
      title: "Visual language",
      body: "Use line, shape, colour, texture, space or pattern with intention.",
    },
    {
      title: "Reflection + response",
      body: "Explain what changed and refine the next studio decision.",
    },
  ],
  introTitle: "What IB PYP Visual Arts Looks Like in PYP Learning",
  introParagraphs: [
    "Visual arts in the PYP can sit inside an arts programme or connect directly with a unit of inquiry. Students may explore materials, images, artists, visual elements, cultural contexts and ways to communicate an idea. Because art learning is practical and interpretive, useful study support should never reduce the subject to memorising definitions; it should help students notice choices and explain the effect those choices create.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Studio habits that connect making, observing and explaining artistic choices.",
  coverTopics: [
    "experimenting with materials, tools and processes safely and purposefully",
    "using visual elements such as line, shape, colour, texture, space or pattern",
    "observing artworks carefully and describing what is actually visible",
    "connecting artistic choices with ideas, feelings, audiences or contexts",
    "developing a work through planning, testing and revision",
    "reflecting on what changed during the process and what the learner would try next",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Visual Arts",
      body: "IB PYP Visual Arts Revision Notes can document an artistic idea, visual vocabulary, a material or technique and an observation about an artwork. For a personal piece, the note can record intention, choices and one revision. These short records help students talk about the process without turning studio time into excessive writing.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Visual Arts Flashcards for Active Recall",
      body: "Flashcards can prompt visual elements, materials, techniques and response language. A card might show “contrast” and ask the learner to point to or imagine an example, or ask which material could create a particular texture. This keeps recall connected to seeing and making.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP Visual Arts Quiz can check vocabulary, tool choices, observation and simple interpretation. Rather than asking for one “correct meaning” of an artwork, a good question can ask which observation best supports a response. That distinction helps students separate what they see from what they infer.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Set a Project or Reflection Focus",
      body: "Studiely’s Exam Focus should be used as a project-focus or reflection tool. Before sharing work, students can review the artistic intention, relevant vocabulary, process choices and one improvement they made. This is more authentic for PYP arts than formal exam preparation.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open project focus",
    },
    {
      id: "exam-practice",
      title: "Practise Visual Response and Planning",
      body: "Practice can be reframed as response practice: analyse a small image, compare two visual choices, plan a composition or explain a material decision. These short tasks support classroom conversations and reflection while keeping the core of the subject practical and creative.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise visual response",
    },
  ],
  afterToolsSections: [
    {
      title: "Use “Notice–Choose–Explain–Refine”",
      paragraphs: [
        "Begin by noticing one visual feature in an artwork or your own draft. Choose a material or technique deliberately. Explain what effect you expect it to create. After making, compare the result with the intention and refine one part. Save the key art vocabulary as flashcards and use a quick quiz to check whether you can recognise those ideas in a different image.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "Visual arts review can stay short and still be meaningful. At the beginning of a project, save the intention and two visual words that matter. After making or experimenting, add one photo-free written observation about what actually happened: a texture changed, a colour relationship became stronger, a material behaved differently. Later, use a few flashcards to recall the vocabulary and complete a quick visual-response quiz. End the week by deciding one refinement for the next studio session. This routine keeps reflection tied to making and gives students language for explaining growth without turning art into a long written assignment.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP Visual Arts",
  whyParagraphs: [
    "High-ranking PYP arts resources are often activity-led: posters, project ideas, lesson packs and phase resources. The gap for a student is reflection. A learner can finish a beautiful product without being able to explain a decision. Studiely gives the process language: what I tried, why I chose it, what effect it created and what I would change.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "What does PYP Visual Arts study involve?",
      answer:
        "It can involve making artworks, responding to images, exploring materials and developing visual communication. Schools integrate the arts in different ways, so projects and terminology can vary.",
    },
    {
      question: "Can flashcards help with a practical art subject?",
      answer:
        "Yes, for visual vocabulary, materials, techniques and reflection prompts. They should support observation and making, not replace practical experimentation.",
    },
    {
      question: "How can students revise an art project?",
      answer:
        "Review the intention, process, key choices, feedback and changes made. A short reflection on why a decision worked is often more valuable than memorising a long definition list.",
    },
    {
      question: "Is there exam practice in PYP Visual Arts?",
      answer:
        "Formal exam preparation should not dominate. Studiely’s practice tools are better used for visual analysis, planning, vocabulary and reflection tasks relevant to school learning.",
    },
    {
      question: "Can visual arts connect with a unit of inquiry?",
      answer:
        "Yes. Art can provide a way to explore or communicate ideas from identity, environment, culture, systems or other transdisciplinary themes when the connection is meaningful.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP Visual Arts",
  ctaBody:
    "Use Studiely to capture the thinking behind your next artwork: the idea, the visual choices, the vocabulary and the one change that made the work stronger.",
  ctaPrimaryLabel: "Start studying PYP Visual Arts",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
