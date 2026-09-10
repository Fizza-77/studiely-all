import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_SPANISH = createWaceSubjectContent({
  slug: "spanish", name: "Spanish", lowerName: "spanish",
  introTitle: "Spanish study improves when students build vocabulary, grammar and communication habits together",
  coverIntro: "Spanish focuses on vocabulary, grammar, listening, speaking, reading, writing, culture and confident communication. Students need to use accurate language, understand meaning from context, organise ideas and respond naturally in Spanish.",
  topics: ["Vocabulary", "Grammar", "Listening", "Speaking", "Reading", "Writing", "Culture", "Communication"],
  routine: "word banks, grammar patterns, model sentences, listening clues, speaking notes and cultural examples",
  notes: "vocab cards, grammar notes, conversation prompts, short quizzes and response practice",
  examAreas: "listening, reading comprehension, written communication, speaking preparation and grammar accuracy",
  recallItems: "word banks, grammar patterns, model sentences, listening clues, speaking notes and cultural examples",
});
