import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_PHYSICAL_EDUCATION_STUDIES = createWaceSubjectContent({
  slug: "physical-education-studies", name: "Physical Education Studies", lowerName: "physical education studies",
  introTitle: "Physical Education Studies becomes stronger when students connect movement experience with theory and evidence",
  coverIntro: "Physical Education Studies focuses on biomechanics, exercise physiology, motor learning, skill performance, training principles and movement evaluation. Students need to apply theory to performance, interpret data, explain movement and connect concepts to sport examples.",
  topics: ["Biomechanics", "Exercise physiology", "Motor learning", "Skill performance", "Training principles", "Movement evaluation"],
  routine: "movement observations, training data, diagrams, examples, terminology and performance analysis",
  notes: "concept notes, movement cards, data quizzes, performance prompts and exam-style scenarios",
  examAreas: "applied movement questions, data interpretation, concept explanation and sport-specific examples",
  recallItems: "movement observations, training data, diagrams, examples, terminology and performance analysis",
});
