import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "../types";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const CORAL = "#FF765E";

const PYP_DISCLAIMER =
  "Studiely provides independent study support and is not affiliated with or endorsed by the International Baccalaureate Organization.";

export const IB_PYP_PSPE: SubjectLandingContent = {
  path: "/international-baccalaureate/pyp/pspe",
  seoTitle: "IB PYP PSPE Study Resources | Studiely",
  metaDescription:
    "Explore IB PYP PSPE study support with notes, flashcards, quizzes and age-appropriate practice for inquiry-based PYP learning.",
  shortDescription:
    "Student-focused IB PYP PSPE resources for inquiry, recall, practice and reflection with Studiely.",
  keywords: [
    "IB PYP PSPE",
    "PYP PSPE resources",
    "PYP PSPE activities",
    "IB PYP PSPE learning resources",
    "IB PYP PSPE practice activities",
    "IB PYP PSPE revision notes",
    "IB PYP PSPE flashcards",
    "IB PYP PSPE quiz",
    "IB PYP PSPE practice questions",
    "IB PYP PSPE exam focus",
    "IB PYP PSPE exam practice",
    "IB PYP PSPE study resources",
  ],
  breadcrumbName: "PSPE",
  heroEyebrow: "IB Primary Years Programme",
  heroTitle: "IB PYP PSPE Resources for",
  heroHighlight: "Wellbeing, Movement & Relationships",
  heroIntro:
    "Learn about yourself by moving, cooperating, reflecting and making healthy choices. Studiely helps PYP learners organise wellbeing concepts, movement knowledge, relationship skills and personal goals without reducing PSPE to a written subject.",
  lead: "IB PYP PSPE—Personal, Social and Physical Education—supports learning about identity, wellbeing, relationships, movement and healthy participation. Studiely can help Grade 1–5 learners review key concepts, create flashcards, complete short quizzes and reflect on personal or team learning while practical movement remains central.",
  workflowSteps: [
    {
      title: "Identity + wellbeing",
      body: "Notice strengths, emotions, choices and wellbeing needs.",
    },
    {
      title: "Movement + choices",
      body: "Develop safe, confident movement and informed activity decisions.",
    },
    {
      title: "Relationships + teamwork",
      body: "Communicate, cooperate and reflect on how behaviour affects others.",
    },
  ],
  introTitle: "What IB PYP PSPE Looks Like in PYP Learning",
  introParagraphs: [
    "PSPE is broader than physical education alone. In a PYP context, students can learn through and about movement while also developing self-management, relationship skills, decision-making and wellbeing awareness. Schools organise these experiences differently, so digital study support should focus on concepts and reflection that complement practical activity rather than replace it.",
  ],
  extraSections: [],
  coverTitle: "What Students Can Build Through This Subject",
  coverIntro:
    "Habits that connect movement, wellbeing and relationships with purposeful reflection.",
  coverTopics: [
    "recognising personal strengths, emotions, choices and wellbeing needs",
    "developing safe, coordinated and increasingly confident movement",
    "understanding rules, tactics or movement principles in age-appropriate activities",
    "communicating and cooperating with partners or teams",
    "making informed choices about health, activity and personal safety",
    "reflecting on goals, effort, feedback and how behaviour affects others",
  ],
  coverClosing: "",
  showCoverTopics: true,
  supportTitle: "",
  supportParagraphs: [],
  showSupport: false,
  tools: [
    {
      id: "notes",
      title: "Revision Notes for PSPE",
      body: "IB PYP PSPE Revision Notes can summarise a wellbeing concept, movement principle, rule, safety idea or personal strategy. A useful note might include “what this means,” “where I used it” and “what I will try next.” Keeping notes short prevents written work from crowding out physical learning.",
      icon: "/icons/notes.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Create revision notes",
    },
    {
      id: "flashcards",
      title: "PSPE Flashcards for Active Recall",
      body: "Flashcards can support safety cues, health vocabulary, rules, movement concepts and social strategies. A card can also prompt a scenario: “What could you do if a teammate is left out?” or “Which cue helps you stay balanced?” so recall connects to decisions and action.",
      icon: "/icons/flashcards.svg",
      accent: PINK,
      href: STUDIELY_APP.flashcards,
      cta: "Build flashcards",
    },
    {
      id: "quiz",
      title: "Quick Quiz Practice",
      body: "An IB PYP PSPE Quiz can check health concepts, safety, rules, movement vocabulary and social decision-making. Scenario-based questions are especially useful because they ask students to apply an idea rather than memorise a definition.",
      icon: "/icons/quiz.svg",
      accent: CORAL,
      href: STUDIELY_APP.quiz,
      cta: "Start a quiz",
    },
    {
      id: "exam-focus",
      title: "Choose One Personal Learning Focus",
      body: "Studiely’s Exam Focus should be used as a personal focus tool. A student might choose teamwork, movement control, a safety rule, hydration knowledge or a self-management strategy before the next lesson. The goal is purposeful participation, not exam pressure.",
      icon: "/icons/exam-focus.svg",
      accent: LIME,
      href: STUDIELY_APP.examFocus,
      cta: "Open personal focus",
    },
    {
      id: "exam-practice",
      title: "Practise Decisions, Rules and Reflection",
      body: "Practice can be interpreted as reflection and scenario practice: choose a safe response, explain a rule, plan a personal goal or analyse a teamwork situation. Practical skills themselves still need to be developed through supervised movement and real participation.",
      icon: "/icons/exam.svg",
      accent: BLUE,
      href: STUDIELY_APP.notes,
      cta: "Practise scenarios",
    },
  ],
  afterToolsSections: [
    {
      title: "Set One Observable Goal Before Activity",
      paragraphs: [
        "Choose a goal you can actually notice, such as “I will move into space after I pass,” “I will encourage two teammates,” or “I will use the safety cue every time.” After the activity, record one example of what happened and one adjustment for next time. Turn the key concept into a flashcard and use a short scenario quiz to check whether you can apply it outside that single lesson.",
      ],
    },
    {
      title: "A Simple Weekly Review Rhythm",
      paragraphs: [
        "A weekly PSPE rhythm can be built around one practical goal and one wellbeing or social concept. Before activity, choose an observable target such as positioning, communication, safe technique or self-management. After the lesson, record one example that shows whether the goal was met. A later flashcard or scenario quiz can revisit the rule, health idea or relationship strategy behind the experience. End by setting the next small adjustment. This keeps digital study connected to movement and real behaviour. The learner should spend far more time participating, practising and reflecting than sitting in front of a screen for PSPE. Keep the written review brief and specific.",
      ],
    },
  ],
  whyTitle: "How Studiely Supports IB PYP PSPE",
  whyParagraphs: [
    "Online PYP PSPE content is often teacher guidance, wellbeing articles or PE activity hubs. The student gap is reflective follow-through. After a game, health discussion or teamwork task, learners need a simple way to capture what they noticed, what they chose and what they will try next. Studiely can provide that lightweight reflection layer.",
  ],
  whyAfterParagraphs: [PYP_DISCLAIMER],
  faqs: [
    {
      question: "What does PSPE mean in the PYP?",
      answer:
        "PSPE stands for Personal, Social and Physical Education. It brings together learning about identity, wellbeing, relationships and physical activity within the wider PYP approach.",
    },
    {
      question: "Can Studiely replace practical PE lessons?",
      answer:
        "No. Movement skills, teamwork and physical confidence need real activity and appropriate supervision. Studiely is useful for concept review, goals, reflection, safety knowledge and decision-making prompts.",
    },
    {
      question: "What can PSPE flashcards cover?",
      answer:
        "They can cover wellbeing vocabulary, safety cues, rules, movement concepts, teamwork strategies and healthy choices. Scenario cards are particularly useful for applying social and personal learning.",
    },
    {
      question: "Is exam practice appropriate for PYP PSPE?",
      answer:
        "Formal exam drilling should not be the priority. Digital practice is better used for short scenarios, rules, health concepts and reflection that support practical learning.",
    },
    {
      question: "How does PSPE support the whole learner?",
      answer:
        "It can connect physical activity with emotional awareness, social relationships, personal choices and self-management. That combination supports the PYP emphasis on developing learners in a connected way.",
    },
  ],
  ctaTitle: "Why Students Use Studiely for IB PYP PSPE",
  ctaBody:
    "Use Studiely after your next PSPE lesson to record one useful concept, one real example and one small goal you can test in your next activity.",
  ctaPrimaryLabel: "Start studying PYP PSPE",
  ctaPrimaryHref: STUDIELY_APP.notes,
};
