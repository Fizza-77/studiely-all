import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_LITERATURE = createWaceSubjectContent({
  slug: "literature",
  name: "Literature",
  lowerName: "literature",
  introTitle: "Literature rewards students who read closely and then shape an interpretation with control",
  coverIntro: "Literature focuses on close reading, literary form, context, voice, genre, critical interpretation and evidence-led response writing. Students need to read beneath plot, compare interpretations, explain authorial choices and support arguments with precise textual detail.",
  topics: ["Close reading", "Literary form", "Context", "Voice", "Genre", "Critical interpretation", "Evidence-led writing"],
  routine: "imagery, symbolism, narrative perspective, dialogue, poetic technique, form and contextual detail",
  notes: "interpretation maps, technique banks, quote cards, reading notes and response planning prompts",
  examAreas: "critical essays, passage analysis, interpretation under time pressure and evidence selection",
  recallItems: "imagery, symbolism, narrative perspective, dialogue, poetic technique, form and contextual detail",
});
