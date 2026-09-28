import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_MUSIC: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/music",
  seoTitle: "IB PYP Music Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP Music study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP Music resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP Music",
    "PYP Music resources",
    "PYP Music activities",
    "IB PYP Music learning resources",
    "IB PYP Music practice activities",
    "IB PYP Music revision notes",
    "IB PYP Music flashcards",
    "IB PYP Music quiz",
    "IB PYP Music practice questions",
    "IB PYP Music exam focus",
    "IB PYP Music exam practice",
    "IB PYP Music study resources",
  ],
  breadcrumbName: "Music",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP Music Resources for",
  heroHighlight: "Listening, Creating & Performing",
  heroIntro:
    "Hear the pattern, name the idea, make a musical choice. Studiely helps PYP learners connect listening, musical vocabulary, creating, performing and reflection in short review cycles.",
  lead: "IB PYP Music can develop listening, creating, performing and responding through inquiry into sound, pattern, expression and cultural context. Studiely supports Grade 1–5 learners with concise music notes, active-recall flashcards, quizzes and reflection prompts that help musical ideas stay available beyond the rehearsal or lesson.",
  workflowSteps: [
    {
      title: "Listening closely",
      body: "Hear a musical idea and notice what changes in sound or pattern.",
    },
    {
      title: "Creating + performing",
      body: "Make or rehearse a small musical choice with clear intention.",
    },
    {
      title: "Musical vocabulary",
      body: "Name what you hear and do so terminology stays tied to sound.",
    },
  ],
  introTitle: "What IB PYP Music Looks Like in PYP Learning",
  introParagraphs: [
    "Music in the PYP can be taught as a specialist subject, integrated with transdisciplinary inquiry or both. Students may sing, play, move, listen, improvise, compose and discuss music from different contexts. Study support should therefore connect terminology to sound and action. Knowing the word “rhythm” matters less than being able to hear, perform, create or describe a rhythmic idea.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Musicianship habits that keep vocabulary connected to listening, creating and performing.",
  coverTopics: [
    "keeping and recognising beat, rhythm and repeated patterns",
    "hearing changes in pitch, dynamics, tempo, texture or timbre at an age-appropriate level",
    "performing with attention to ensemble, accuracy and expression",
    "creating or improvising short musical ideas",
    "using musical language to describe what they hear and do",
    "reflecting on how a performance or composition changed after practice",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Music",
      body: "IB PYP Music Revision Notes can capture a musical concept, a short definition in the student’s words, a sound or performance example and one rehearsal reminder. For a composition, the note can record the idea, structure and change made after listening back. This keeps theory connected to actual music-making.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Music Flashcards for Active Recall",
      body: "Flashcards can prompt symbols, terms, instrument families, listening descriptions or performance cues. The most useful cards ask students to imagine or produce the sound associated with the term, because musical understanding is auditory and practical as well as verbal.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP Music Quiz can check musical vocabulary, pattern recognition, listening concepts and simple choices about performance or composition. Where audio is available from school resources, students can combine it with Studiely prompts; without audio, the quiz can still test concepts and reflection language.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Choose a Rehearsal Focus",
      body: "Studiely’s Exam Focus should function as a rehearsal-focus tool. Before a performance or sharing task, students can prioritise the rhythm, entry, vocabulary, listening feature or expressive choice that needs attention. The purpose is preparation and reflection, not formal exam coaching.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open rehearsal focus",
    },
    {
      id: "exam-practice",
      title: "Practise Musicianship in Short Bursts",
      body: "Practice can become short musicianship practice: identify a pattern, explain a listening choice, plan a short composition, rehearse a difficult section or respond to a musical prompt. These tasks are useful when they lead back to hearing, making and performing.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise musicianship",
    },
  ],
  afterToolsSections: [
    {
      title: "Listen–Name–Make–Reflect",
      paragraphs: [
        "Listen to or recall one musical idea from class. Name the feature you notice using the vocabulary you know. Make a tiny example by clapping, singing, playing or sketching a pattern. Then reflect on whether the result matched the idea. Turn the key term into a flashcard and use a quick quiz later to check whether you can recognise it in a new context.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "A weekly music routine works best when every written idea returns to sound. Start with one concept from rehearsal or listening and save a short example in words. Later, retrieve the term and clap, sing, play or imagine the corresponding pattern. Use a brief quiz to mix vocabulary with performance or listening decisions. Before the next lesson, choose one rehearsal focus and test it in a short run. Finally, record what changed after listening back or receiving feedback. This cycle makes review audible and practical, so students do not separate music theory from the actual experience of making and responding to music.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP Music",
  whyParagraphs: [
    "PYP music resources online often focus on teacher activities, posters or project inspiration. The student gap is retrieval tied to sound: can the learner hear an idea, name it and use it? Studiely can make review active by linking a small vocabulary set with listening prompts, performance goals and reflection after rehearsal.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "What can students learn in PYP Music?",
      answer:
        "Learning can include listening, creating, performing, responding and understanding music in cultural contexts. The specific instruments, repertoire and sequence vary by school.",
    },
    {
      question: "How can students revise music without an instrument?",
      answer:
        "They can review vocabulary, clap rhythms, analyse a listening example, plan a composition, sing a pattern or reflect on a performance. Practical music study can still happen in small ways away from the classroom.",
    },
    {
      question: "Are music flashcards useful?",
      answer:
        "Yes when the word connects to a sound, symbol or action. A flashcard should prompt the learner to hear or produce the idea mentally or physically rather than only recite a definition.",
    },
    {
      question: "Does PYP Music require exam practice?",
      answer:
        "PYP Music should remain focused on musical learning and authentic assessment. Practice tools are better used for rehearsal goals, listening tasks, concepts and reflection.",
    },
    {
      question: "How can music connect to inquiry?",
      answer:
        "Students can explore identity, culture, pattern, change, communication and other inquiry ideas through musical examples and creative work when those connections are authentic.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP Music",
  ctaBody:
    "Use Studiely after your next music lesson to save the one idea you heard, the one term you need, the one passage to practise and the one reflection that guides your next attempt.",
  ctaPrimaryLabel: "Start studying PYP Music",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
