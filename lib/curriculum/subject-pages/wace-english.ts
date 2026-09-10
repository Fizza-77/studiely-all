import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_ENGLISH = createWaceSubjectContent({
  slug: "english",
  name: "English",
  lowerName: "english",
  introTitle: "Strong English study depends on more than rereading a set text",
  coverIntro: "English focuses on reading, viewing, interpretation, argument, text response, language choices and controlled writing. Students need to analyse how texts shape meaning, organise ideas, choose evidence, build arguments and write with a clear audience in mind.",
  topics: ["Reading", "Viewing", "Interpretation", "Argument", "Text response", "Language choices", "Controlled writing"],
  routine: "quotes, close language choices, structural features, context and examples from studied texts",
  notes: "themes, character ideas, argument patterns, quote banks, paragraph plans and response checkpoints",
  examAreas: "unseen questions, essay planning, comparative thinking, persuasive reasoning and timed written responses",
  recallItems: "quotes, close language choices, structural features, context and examples from studied texts",
});
