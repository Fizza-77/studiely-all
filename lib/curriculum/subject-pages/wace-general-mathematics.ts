import { createWaceSubjectContent } from "./create-wace-subject-content";

export const WACE_GENERAL_MATHEMATICS = createWaceSubjectContent({
  slug: "general-mathematics",
  name: "General Mathematics",
  lowerName: "general mathematics",
  introTitle: "General Mathematics becomes easier when students connect procedures to realistic situations",
  coverIntro: "General Mathematics focuses on financial mathematics, measurement, statistics, networks, data, modelling and practical problem solving. Students need to select the correct method, show working, interpret data and connect calculations to real situations.",
  topics: ["Financial mathematics", "Measurement", "Statistics", "Networks", "Data", "Modelling", "Problem solving"],
  routine: "formulas, units, graphs, tables, calculator processes, diagrams and written interpretation",
  notes: "formula cards, worked-step notes, quick checks, practice sets and scenario breakdowns",
  examAreas: "multi-step questions, data displays, practical scenarios, calculator accuracy and method selection",
  recallItems: "formulas, units, graphs, tables, calculator processes, diagrams and written interpretation",
});
