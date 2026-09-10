import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_PSYCHOLOGY = createWaceSubjectContent({
  slug: "psychology", name: "Psychology", lowerName: "psychology",
  introTitle: "Psychology study works best when students connect theories, evidence and behaviour in a practical way",
  coverIntro: "Psychology focuses on biological, cognitive and social explanations of behaviour, research methods, memory, development and mental processes. Students need to use terminology, interpret research, connect theories to examples and evaluate psychological evidence.",
  topics: ["Biological explanations", "Cognitive explanations", "Social explanations", "Research methods", "Memory", "Development", "Mental processes"],
  routine: "research designs, data, psychological terms, theory summaries, examples and evaluation points",
  notes: "theory notes, term cards, study summaries, research quizzes and application prompts",
  examAreas: "research-method questions, concept application, data interpretation and explanation of behaviour",
  recallItems: "research designs, data, psychological terms, theory summaries, examples and evaluation points",
});
