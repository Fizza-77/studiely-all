import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_MUSIC = createWaceSubjectContent({
  slug: "music", name: "Music", lowerName: "music",
  introTitle: "Music study improves when students connect sound, technique, theory and interpretation",
  coverIntro: "Music focuses on listening, performance, composition, theory, style, interpretation, notation and musical understanding. Students need to recognise musical elements, explain stylistic choices, organise practice and connect sound to terminology.",
  topics: ["Listening", "Performance", "Composition", "Theory", "Style", "Interpretation", "Notation", "Musical understanding"],
  routine: "scores, listening excerpts, terminology, rehearsal notes, compositional ideas and stylistic features",
  notes: "listening notes, theory cards, style quizzes, rehearsal prompts and response planning",
  examAreas: "aural recognition, performance reflection, theory, analysis and preparation across written and practical tasks",
  recallItems: "scores, listening excerpts, terminology, rehearsal notes, compositional ideas and stylistic features",
});
