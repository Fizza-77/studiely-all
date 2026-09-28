import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_MANDARIN: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/mandarin",
  seoTitle: "IB PYP Mandarin Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP Mandarin study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP Mandarin resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP Mandarin",
    "PYP Mandarin resources",
    "PYP Mandarin activities",
    "IB PYP Mandarin learning resources",
    "IB PYP Mandarin practice activities",
    "IB PYP Mandarin revision notes",
    "IB PYP Mandarin flashcards",
    "IB PYP Mandarin quiz",
    "IB PYP Mandarin practice questions",
    "IB PYP Mandarin exam focus",
    "IB PYP Mandarin exam practice",
    "IB PYP Mandarin study resources",
  ],
  breadcrumbName: "Mandarin",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP Mandarin Resources for",
  heroHighlight: "Characters & Communication",
  heroIntro:
    "Make Mandarin review visible and manageable. Studiely helps PYP learners connect sound, meaning, useful phrases and character recognition through short notes, recall cards, quizzes and communication practice.",
  lead: "IB PYP Mandarin can develop listening, speaking, reading and writing through meaningful language use within the inquiry-based PYP. Studiely gives learners a place to organise vocabulary, pronunciation or tone reminders, character knowledge where appropriate, flashcards, short quizzes and practice prompts connected to current classroom learning.",
  workflowSteps: [
    {
      title: "Sound + meaning",
      body: "Connect what you hear and say with clear meaning from class.",
    },
    {
      title: "Characters + recognition",
      body: "Recognise high-frequency characters and supports used at school.",
    },
    {
      title: "Useful communication",
      body: "Practise short exchanges and phrases for real classroom purposes.",
    },
  ],
  introTitle: "What IB PYP Mandarin Looks Like in PYP Learning",
  introParagraphs: [
    "Mandarin learning can look different across PYP schools: some programmes are immersion-based, some teach Mandarin as an additional language, and students may have very different starting points. A strong study page therefore should not assume one fixed character list or pace. It should help Grade 1–5 learners connect what they hear, say, recognise and write in ways that support the programme they actually follow.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Mandarin habits that keep sound, meaning and written form connected.",
  coverTopics: [
    "listening for familiar words, phrases and sentence patterns",
    "producing understandable pronunciation and tones with teacher or audio guidance",
    "building short spoken exchanges for real classroom purposes",
    "recognising high-frequency characters and components where this is part of the school programme",
    "linking characters, Pinyin or other teacher-used supports without confusing the systems",
    "learning about Chinese-speaking cultures through specific, respectful contexts",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Mandarin",
      body: "IB PYP Mandarin Revision Notes can pair meaning with sound and visual form. Depending on the school approach, a note might include a useful phrase, Pinyin, a tone cue, a character, a model sentence and a tiny usage example. Keeping these pieces together helps students avoid learning pronunciation, meaning and written form as unrelated facts.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Mandarin Flashcards for Active Recall",
      body: "Flashcards can vary the direction of recall: meaning to spoken word, character to meaning, phrase to response, or picture to sentence. Where character learning is expected, cards can also highlight a familiar component or visual clue. The best set stays small enough for accurate retrieval and frequent review.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP Mandarin Quiz can test matching, sentence order, character recognition, meaning and simple response choices. Students benefit from saying the corrected answer after feedback, because language knowledge needs to become available for communication rather than remain a silent recognition task.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Focus on the Weakest Language Connection",
      body: "Studiely’s Exam Focus should be understood as “what should I concentrate on next?” A learner might prioritise a tone contrast, a set of classroom phrases, character recognition or a speaking prompt before a school task. This is much more appropriate for PYP than treating the subject like a high-stakes external exam.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open language focus",
    },
    {
      id: "exam-practice",
      title: "Rehearse Mandarin in Familiar Situations",
      body: "Practice can be used for short classroom-style rehearsal: respond to a greeting, describe a picture, recognise a character, follow a simple instruction or build a short exchange. Any pronunciation or writing practice should remain aligned with the conventions and expectations taught by the student’s school.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise short exchanges",
    },
  ],
  afterToolsSections: [
    {
      title: "Link Sound, Meaning and Form in One Review Cycle",
      paragraphs: [
        "Take four or five items from the current unit. For each, say it, explain the meaning and recognise the written form used in class. Then shuffle the direction: look at meaning and produce the word; look at the character and say the phrase; hear or recall the phrase and use it in a different sentence. Finish by marking which connection—sound, meaning or form—was weakest and review only that part tomorrow.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "A weekly Mandarin review should revisit the same language through more than one pathway. Start with a few phrases from class and connect sound, meaning and the written support used by the school. Later, reverse the cue so the learner has to produce the word or phrase rather than recognise it. A short quiz can mix meanings, sentence order or character recognition where appropriate. Finish by using the language in one spoken exchange or written response. Keeping the set small protects accuracy, especially for pronunciation and characters, while repeated retrieval helps the learner notice which connection is still weak.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP Mandarin",
  whyParagraphs: [
    "Search visibility for “IB PYP Mandarin” is relatively sparse and often points to school programmes or teacher roles rather than student study resources. That creates a useful gap: a learner-facing page that does not pretend there is one global PYP Mandarin syllabus, but still gives students a disciplined way to review the language their own school teaches.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "Does every IB PYP Mandarin class teach the same content?",
      answer:
        "No. The PYP is a flexible curriculum framework and schools can organise language learning differently. Students should use their school’s current units, teacher guidance and language level as the source for what to study.",
    },
    {
      question: "Can Studiely help with Mandarin characters?",
      answer:
        "It can organise character recognition, meanings, example words and recall prompts when character learning is part of the student’s programme. Accurate handwriting, stroke order and pronunciation should still follow teacher instruction and trusted language models.",
    },
    {
      question: "Should Mandarin flashcards include Pinyin?",
      answer:
        "That depends on the learner and school approach. Pinyin can support pronunciation, but it should not become a permanent substitute for the character or spoken language when students are expected to recognise those directly.",
    },
    {
      question: "Is PYP Mandarin exam-focused?",
      answer:
        "Formal exam preparation should not be the centre of PYP Mandarin. Studiely’s focus and practice tools are better used for short review, classroom tasks and communication rehearsal.",
    },
    {
      question: "How can a beginner start?",
      answer:
        "Begin with a tiny set of highly useful language from the current unit. Practise understanding it, saying it and recognising the written support used in class before adding more items.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP Mandarin",
  ctaBody:
    "Use Studiely to keep the language from your current Mandarin unit connected: sound, meaning, written form, recall and a short communication task.",
  ctaPrimaryLabel: "Start studying PYP Mandarin",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
