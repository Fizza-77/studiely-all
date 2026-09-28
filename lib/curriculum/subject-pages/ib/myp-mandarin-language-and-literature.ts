import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const MYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with, endorsed by, or an official resource of the International Baccalaureate Organization.";

export const IB_MYP_MANDARIN_LANGUAGE_AND_LITERATURE: SubjectLandingContent = {
  path: "/international-baccalaureate/myp/mandarin-language-and-literature",
  seoTitle: "IB MYP Mandarin Language and Literature Resources | Studiely",
  metaDescription:
    "Study Mandarin in the IB MYP with revision notes, flashcards, quizzes, assessment focus and practice support from Studiely.",
  shortDescription:
    "Independent Studiely support for MYP Mandarin, combining concise revision, active recall, quizzes and assessment-focused practice in one study workflow.",
  keywords: [
    "IB MYP Mandarin Language and Literature",
    "MYP Mandarin Language and Literature resources",
    "MYP Mandarin Language and Literature revision notes",
    "MYP Mandarin Language and Literature flashcards",
    "MYP Mandarin Language and Literature quiz",
    "MYP Mandarin Language and Literature practice questions",
    "MYP Mandarin Language and Literature assessment practice",
  ],
  breadcrumbName: "Mandarin Language and Literature",
  heroEyebrow: "IB Middle Years Programme",
  heroTitle: "IB MYP Mandarin Language and Literature Study Resources for",
  heroHighlight:
    "Revision notes • Flashcards • Quiz • Assessment focus • Practice",
  heroIntro:
    "IB MYP Mandarin Language and Literature is best approached as a skills-and-understanding course, not a collection of facts to cram. Mandarin Language and Literature combines close attention to meaning with confident control of written expression. Students need to recognise how diction, imagery, structure, perspective and context shape a text, while also communicating an interpretation clearly. Strong revision makes those two processes reinforce each other.",
  lead: "IB MYP Mandarin Language and Literature supports students in building the subject knowledge, transferable skills and assessment habits needed for the IB Middle Years Programme. Studiely brings revision notes, active-recall flashcards, quizzes, focused assessment preparation and practice into one workflow, while students continue to follow the units and criteria set by their school.",
  workflowSteps: [
    {
      title: "Close reading",
      body: "Track diction, imagery, structure and perspective. You can justify an interpretation with exact textual details.",
    },
    {
      title: "Written analysis",
      body: "Organise claims and evidence in clear Chinese. Paragraphs build logically and avoid vague commentary.",
    },
    {
      title: "Context",
      body: "Consider cultural, historical and social framing. Context deepens meaning without replacing textual analysis.",
    },
  ],
  introTitle: "Build Analysis That Transfers Across Texts",
  introParagraphs: [
    "Explore literary and non-literary Chinese-language texts through reading, viewing, discussion and writing, with attention to character-based expression, rhetorical choices, text structure, audience, purpose and cultural context.",
  ],
  extraSections: [
    {
      title: "A Practical Study Loop for Language and Literature",
      paragraphs: [
        "Annotate a short text, summarise the argument or mood in one sentence, build a revision note from three significant choices, retrieve analytical vocabulary with flashcards, answer a focused quiz and draft one paragraph without looking back at the note.",
      ],
      bullets: [
        "Pair Chinese analytical vocabulary with a textual feature and a clear statement of effect.",
        "Use short unseen Mandarin texts to practise purpose, audience and register without memorised support.",
        "Separate recognition of a theme from the language needed to explain how the text constructs it.",
      ],
    },
    {
      title: "Common Study Traps to Avoid",
      paragraphs: [
        "Mandarin Language and Literature revision becomes weak when students recognise ideas but cannot express analysis precisely in written Chinese. Do not build notes that only list themes or techniques; pair each idea with a concise analytical phrase, a specific textual feature and the effect it creates. Pay attention to how character choice, idiomatic language, register and cultural references influence tone or viewpoint. Another trap is relying only on familiar class extracts. Use shorter unseen texts to practise identifying purpose and audience quickly, then write a compact interpretation before checking vocabulary. This separates genuine analytical transfer from memory of a teacher-led discussion and reveals which language you still need for independent analysis.",
      ],
    },
  ],
  coverTitle: "",
  coverIntro: "",
  coverTopics: [],
  coverClosing: "",
  showCoverTopics: false,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes",
      body: "IB MYP Mandarin Language and Literature Revision Notes should make the next study action obvious. Build notes around big ideas rather than copying passages. Record the text’s purpose, audience, central tension, key rhetorical or literary choices and a few evidence fragments. Add analytical sentence stems in Chinese so you can move efficiently from evidence to explanation.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards",
      body: "IB MYP Mandarin Language and Literature Flashcards should make the next study action obvious. Use cards for high-value analytical vocabulary, rhetorical choices, text types and character combinations that often appear in academic writing. Mix recognition cards with production cards that require you to write a short analytical sentence from a prompt.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice",
      body: "IB MYP Mandarin Language and Literature Quiz should make the next study action obvious. Include inference, tone, purpose, vocabulary-in-context and evidence-selection questions. Add short editing items that ask which phrase produces clearer or more formal analytical expression. Immediate feedback should explain the reasoning, not only mark an answer right or wrong.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Assessment Focus",
      body: "IB MYP Mandarin Language and Literature Exam Focus should make the next study action obvious. Prepare for school assessments by writing from unfamiliar extracts as well as class texts. Where MYP eAssessment is part of your school’s pathway and available for the language, rehearse screen reading, planning and concise response building under realistic time limits.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open assessment focus",
    },
    {
      id: "exam-practice",
      title: "Practice Tasks",
      body: "IB MYP Mandarin Language and Literature Exam Practice should make the next study action obvious. Use short, varied texts so you cannot depend on memorised commentary. After each response, separate content issues from language issues: Did you misread the viewpoint? Was the evidence weak? Was the analysis accurate but the expression unclear? Then retry one targeted skill.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise assessment-style",
    },
  ],
  afterToolsSections: [],
  whyTitle: "How Studiely Supports This MYP Subject",
  whyParagraphs: [
    "Studiely connects revision notes, flashcards, quizzes, assessment focus and practice so Mandarin analysis and written expression reinforce each other across literary and non-literary texts.",
  ],
  whyAfterParagraphs: [MYP_DISCLAIMER],
  faqs: [
    {
      question: "How should I balance language accuracy and analysis?",
      answer:
        "Treat accuracy as the vehicle for analysis. First make sure your claim and evidence are strong; then edit the sentence so vocabulary, character choice, grammar and cohesion communicate that idea precisely. Trying to perfect every sentence before the argument is clear can slow you down.",
    },
    {
      question: "Should I memorise model essays?",
      answer:
        "Use models to study structure and analytical moves, not to memorise an answer. MYP tasks can change text, context and purpose, so transferable routines—selecting evidence, explaining effect and organising ideas—are more reliable.",
    },
    {
      question: "What kinds of texts should I practise with?",
      answer:
        "Use a mix of literary and non-literary material: prose, poetry, speeches, opinion writing, advertisements, journalism and other visual or digital texts. Variety helps you recognise how purpose and audience change language choices.",
    },
    {
      question: "How can flashcards support character-based academic vocabulary?",
      answer:
        "Create cards that connect a term to a sentence and an analytical function. Retrieval becomes more useful when you have to produce the term in context rather than simply recognise its English equivalent.",
    },
  ],
  ctaTitle: "Build a better Mandarin study routine",
  ctaBody:
    "Use Studiely to turn your current MYP units into focused revision notes, retrieval practice, quizzes and assessment-ready tasks. Start with one topic you are learning now, then use your results to decide what to practise next.",
  ctaPrimaryLabel: "Start studying MYP Mandarin",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
