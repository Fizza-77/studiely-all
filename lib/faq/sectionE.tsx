import type { FaqSection } from "./types";

export const sectionE: FaqSection = {
  id: "faq-usage",
  title: "E. Usage Limits & Fair Usage Policy",
  intro: "What counts as a generation, monthly limits and regenerations.",
  items: [
    {
      question: "What does '100 generations per month' mean?",
      schemaText:
        "A generation is counted each time content is created or regenerated using Studiely's main Study Tools — Summary Notes, Flashcards, Quiz, or Exam Style Questions. Each request, including each regeneration, counts as one generation from your plan's credit pool. The Monthly plan includes 100 credits for the plan period as a shared pool across all Study Tools combined — this is not 100 per tool, but 100 total. Longer plans include more credits (300 / 600 / 1,200) pooled for the whole period. The Free plan includes five generations in total. Exam Practice is a separate subscription and does not use main-plan credits.",
      answer: (
        <>
          <p>
            A generation is counted each time content is created or regenerated using Studiely&apos;s main Study
            Tools — Summary Notes, Flashcards, Quiz, or Exam Style Questions. Each request, including each
            regeneration, counts as one generation from your plan&apos;s credit pool.
          </p>
          <p>
            The Monthly plan includes 100 credits for the plan period as a shared pool across all Study Tools combined
            — this is not 100 per tool, but 100 total. Longer plans include more credits (300 / 600 / 1,200) pooled
            for the whole period.
          </p>
          <p>
            To put this in context: a student revising five topics per week, generating notes and a quiz for each,
            would use approximately 40–50 generations in a month — comfortably within the Monthly plan&apos;s 100
            credits for a structured revision schedule.
          </p>
          <p>
            The Free plan includes five generations in total. Exam Practice is a separate subscription and does not
            use main-plan credits.
          </p>
        </>
      ),
    },
    {
      question: "What happens when I reach my monthly generation limit?",
      schemaText:
        "If you run out of credits, generation is paused until your plan renews, or you can purchase a new plan or the Exam Practice add-on separately. All previously generated content remains fully accessible — only new generation is paused. Exam Practice is billed independently and is not affected by main-plan credits.",
      answer: (
        <>
          <p>
            If you run out of credits, generation is paused until your plan renews, or you can purchase a new plan or
            the Exam Practice add-on separately. All previously generated content remains fully accessible — only new
            generation is paused.
          </p>
          <p>
            For most students following a consistent revision schedule, the Monthly plan&apos;s 100 credits are more
            than sufficient. During intensive exam preparation periods, spreading usage across the plan period is more
            effective than concentrating generations at the end.
          </p>
          <p>
            Exam Practice is billed independently and is not affected by main-plan credits.
          </p>
        </>
      ),
    },
    {
      question: "Does regenerating content count toward my monthly limit?",
      schemaText:
        "Yes. Each regeneration counts as one generation from your credit pool, the same as an original request. This applies whether you are regenerating because the first output was unclear, you want a different approach, or you simply want a fresh version. To make the most of your credits, review generated content carefully before regenerating. If one specific part is unclear, asking Nyla to clarify that point is often more efficient than using a full generation to recreate the entire piece.",
      answer: (
        <>
          <p>
            Yes. Each regeneration counts as one generation from your credit pool, the same as an original
            request. This applies whether you are regenerating because the first output was unclear, you want a
            different approach, or you simply want a fresh version.
          </p>
          <p>
            To make the most of your credits, review generated content carefully before regenerating. If
            one specific part is unclear, asking Nyla to clarify that point is often more efficient than using a full
            generation to recreate the entire piece.
          </p>
        </>
      ),
    },
    {
      question: "Do my credits reset every month?",
      schemaText:
        "No. Credits are pooled for your whole plan period and can be used at any point within it — spend them all at once or spread them out. They do not carry over once the period ends.",
      answer: (
        <p>
          No. Credits are pooled for your whole plan period and can be used at any point within it — spend them all
          at once or spread them out. They do not carry over once the period ends.
        </p>
      ),
    },
    {
      question: "What happens if I run out of credits?",
      schemaText:
        "Generation is paused until your plan renews, or you can purchase a new plan or the Exam Practice add-on separately.",
      answer: (
        <p>
          Generation is paused until your plan renews, or you can purchase a new plan or the Exam Practice add-on
          separately.
        </p>
      ),
    },
    {
      question: "Can I get more generations without paying?",
      schemaText:
        "Yes. On the Free plan, you can watch a short video ad to unlock one additional generation, any time you run out of free credits. This is entirely optional.",
      answer: (
        <p>
          Yes. On the Free plan, you can watch a short video ad to unlock one additional generation, any time you run
          out of free credits. This is entirely optional.
        </p>
      ),
    },
  ],
};
