import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_PHYSICS = createWaceSubjectContent({
  slug: "physics", name: "Physics", lowerName: "physics",
  introTitle: "Physics study improves when students connect equations to the behaviour of real systems",
  coverIntro: "Physics focuses on motion, forces, energy, electricity, waves, fields, models and mathematical descriptions of physical systems. Students need to choose formulas, interpret graphs, connect theory to scenarios and explain relationships clearly.",
  topics: ["Motion", "Forces", "Energy", "Electricity", "Waves", "Fields", "Models", "Physical systems"],
  routine: "diagrams, graphs, equations, units, vector reasoning, experimental data and explanations of physical relationships",
  notes: "formula recall, worked-step notes, graph questions, scenario quizzes and exam-style problem sets",
  examAreas: "formula selection, graph interpretation, multi-step calculations, practical analysis and conceptual explanations",
  recallItems: "diagrams, graphs, equations, units, vector reasoning, experimental data and explanations of physical relationships",
});
