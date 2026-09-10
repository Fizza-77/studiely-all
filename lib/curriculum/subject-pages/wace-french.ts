import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_FRENCH = createWaceSubjectContent({
  slug: "french",
  name: "French",
  lowerName: "french",
  introTitle: "French study works best when students practise language regularly and use it for real communication",
  coverIntro: "French focuses on vocabulary, grammar, listening, speaking, reading, writing, cultural understanding and communication strategies. Students need to recall language quickly, build accurate sentences, understand texts and respond with clear meaning.",
  topics: ["Vocabulary", "Grammar", "Listening", "Speaking", "Reading", "Writing", "Culture", "Communication"],
  routine: "vocabulary sets, grammar patterns, listening cues, writing frames, speaking prompts and cultural examples",
  notes: "vocab cards, grammar notes, listening checks, speaking prompts and writing practice",
  examAreas: "listening, reading, written responses, oral preparation, grammar accuracy and communication under time pressure",
  recallItems: "vocabulary sets, grammar patterns, listening cues, writing frames, speaking prompts and cultural examples",
});
