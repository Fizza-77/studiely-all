import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "./types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

export const NTCET_HEALTH: SubjectLandingContent = {
  path: "/australian-curriculum/northern-territory/ntcet/health",
  seoTitle: "NTCET Health Study Resources | Studiely",
  metaDescription:
    "Use Studiely for NTCET Health revision notes, flashcards, quizzes, exam focus and practice built for Northern Territory senior students.",
  shortDescription:
    "Revision notes, flashcards, quizzes, exam focus and practice support for Northern Territory senior students studying Health.",
  keywords: [
    "NTCET Health",
    "resources",
    "revision notes",
    "flashcards",
    "quiz",
    "exam focus",
    "exam practice",
  ],
  breadcrumbName: "NTCET Health",
  heroEyebrow: "Northern Territory NTCET",
  heroTitle: "NTCET Health Study Support for",
  heroHighlight: "Notes, Recall & Exam Practice",
  lead:
    "Students can use Studiely for NTCET Health to turn Health topics, class notes, key terms and assessment preparation into a connected study system. The page brings notes, recall, short quizzes, focus prompts and practice responses together so NT students can revise actively instead of simply rereading material.",
  introTitle: "NTCET Health needs more than last-minute reading",
  introParagraphs: [
    "Students need a practical way to break class learning into clear notes, repeat the details that matter and practise responses before assessment time. Studiely helps Northern Territory senior students organise Health study into revision notes, flashcards, quizzes, exam focus support and exam-style practice.",
    "A strong study routine should make the subject easier to return to each week. For learners working toward the Northern Territory Certificate of Education and Training, that means building knowledge steadily, checking gaps early and using practice tasks to turn understanding into confident performance.",
  ],
  coverTitle: "What Health Covers",
  coverIntro:
    "Students examine personal health, relationships, risk, community wellbeing, equity and strategies that support healthier choices. Strong responses explain how individual, social and environmental factors interact.",
  coverTopics: [
    "Wellbeing concepts",
    "Risk and protective factors",
    "Health promotion",
    "Community issues",
    "Decision-making",
    "Equity",
  ],
  coverClosing:
    "In practical terms, students often need to manage wellbeing concepts, risk and protective factors, health promotion, community issues, decision-making and equity. These areas do not sit separately during assessment. They overlap, so students need a study process that helps them connect knowledge, examples, terminology and response structure.",
  supportTitle: "How Studiely Supports NTCET Health",
  supportParagraphs: [
    "Studiely gives students one place to rebuild their subject knowledge after class. Instead of keeping notes, recall questions and practice tasks in separate places, students can move from summary to memory check to assessment preparation in a single routine.",
    "That matters because Health responses can become generic unless students link examples to evidence, context and realistic strategies for change. Studiely helps students slow that process down. It encourages them to capture the main idea, test the detail, review mistakes and return to weak areas before they become bigger problems.",
  ],
  tools: [
    {
      id: "notes",
      title: "Revision Notes for Health",
      body: "Revision notes should not copy every classroom sentence. For NTCET Health, students get more value when they shorten ideas into clear explanations, organise examples under useful headings and keep the language simple enough to review quickly. Studiely can help students shape notes around the parts of the subject that need repeated attention. A good set of notes may include definitions, process steps, examples, evidence, diagrams, key questions or response reminders, depending on the subject. The goal is to create a page students can actually use, not a long document they avoid before assessment.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "Flashcards for Recall and Confidence",
      body: "Flashcards help students move knowledge from recognition to recall. A student might understand an explanation while reading it, but assessment requires them to retrieve the idea quickly and use it in the right context. With Studiely, flashcards can focus on terms, steps, examples, formulas, evidence, concepts, prompts or short explanations. Regular recall is especially useful for Health because it exposes weak spots early. Students can then return to their notes with a clear reason instead of guessing what to revise next.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quiz Practice for Key Gaps",
      body: "A quiz is useful when it does more than mark an answer right or wrong. Quiz practice should help students notice what they know, what they nearly know and what still needs work. Studiely quizzes can support quick checks after a lesson, weekly revision and pre-assessment review. Students can use short question sets to test vocabulary, concepts, relationships and application. This keeps revision active and gives students evidence of progress before they move into longer practice responses.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Exam Focus for NT Students",
      body: "Exam focus is about choosing the right revision task at the right time. Students should not spend every session rewriting notes if the real need is recall, planning, application or timed response practice. Studiely helps students think about the next useful step: revisit a difficult topic, practise a short explanation, compare two ideas, check terminology or plan a response. This keeps study targeted and helps Northern Territory students prepare with purpose, not panic.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open exam focus",
    },
    {
      id: "exam-practice",
      title: "Exam-Style Practice",
      body: "Practice turns revision into performance. Students need chances to apply knowledge to prompts that feel closer to assessment conditions. That may mean explaining a concept, solving a problem, analysing evidence, planning an argument or evaluating a decision. Studiely supports practice through scenario analysis, strategy evaluation, terminology recall, health-promotion planning and reflective response drills. Students can use these tasks to build speed, accuracy and confidence. They can also review mistakes after each attempt, which is where a large part of improvement happens.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: "#",
      cta: "Practise exam-style",
    },
  ],
  whyTitle: "Why Students Use Studiely for Health",
  whyParagraphs: [
    "Students use Studiely because it makes study feel more organised. The subject can involve many moving parts, so a simple routine helps students stay consistent across the term. Notes give structure, flashcards build memory, quizzes reveal gaps, focus prompts guide priorities and practice tasks prepare students for assessment expectations.",
    "Studiely provides independent study support and is not affiliated with any government education authority, exam board or certification body. Students should still follow their school instructions, teacher guidance and official course materials when preparing for assessment.",
  ],
  faqs: [
    {
      question: "Can Studiely help with this subject?",
      answer:
        "Yes. Studiely can help students organise study into revision notes, flashcards, quizzes, focused review and practice tasks. It works best when students use it regularly alongside class learning, teacher feedback and school assessment instructions.",
    },
    {
      question: "What should I revise first for Health?",
      answer:
        "Start with the areas that affect many tasks, such as key terms, core concepts, common processes and the types of responses your teacher expects. Then move toward weaker topics, recent class material and any skill that has appeared in feedback.",
    },
    {
      question: "How do flashcards help with Health?",
      answer:
        "Flashcards make revision active. They push students to recall an idea before seeing the answer, which is more useful than simply reading the same notes again. They are especially helpful for definitions, examples, steps, formulas, evidence and short explanations.",
    },
    {
      question: "Does Studiely replace school materials?",
      answer:
        "No. Studiely supports study, but it should not replace teacher instructions, school resources or official course information. Students should use it to organise, revise and practise what they are learning in class.",
    },
  ],
  ctaTitle: "Start Studying with More Direction",
  ctaBody:
    "Use Studiely to build a clearer routine for NTCET Health. Create notes you can review, turn important details into flashcards, check your understanding with quizzes, focus on the right weak areas and practise before assessment time.",
  ctaPrimaryLabel: "Start studying Health",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
