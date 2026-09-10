import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_MATHEMATICAL_METHODS = createWaceSubjectContent({
  slug: "mathematical-methods",
  name: "Mathematical Methods",
  lowerName: "mathematical methods",
  introTitle: "Mathematical Methods demands more than repeated calculation practice",
  coverIntro: "Mathematical Methods focuses on functions, algebra, calculus, probability, graphs, transformations and mathematical reasoning. Students need to connect concepts, show logical working, interpret graphs and apply methods across unfamiliar questions.",
  topics: ["Functions", "Algebra", "Calculus", "Probability", "Graphs", "Transformations", "Mathematical reasoning"],
  routine: "equations, graphs, derivative reasoning, probability notation, algebraic steps and calculator-supported results",
  notes: "method summaries, formula recall cards, worked examples, graph checks and error-review prompts",
  examAreas: "unfamiliar functions, multi-step calculus, graphical interpretation and reasoning under time limits",
  recallItems: "equations, graphs, derivative reasoning, probability notation, algebraic steps and calculator-supported results",
});
