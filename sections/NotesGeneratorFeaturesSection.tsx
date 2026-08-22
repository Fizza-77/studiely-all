import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const NAVY = "#1E1B4B";

const FEATURES = [
  {
    title: "Topic summaries",
    desc: "Break a chapter, unit or lesson into clear study points without losing the main idea.",
    color: BLUE,
  },
  {
    title: "Revision notes",
    desc: "Create notes that support review, active recall and exam preparation instead of passive rereading.",
    color: PINK,
  },
  {
    title: "Definitions and explanations",
    desc: "Turn difficult terms into student-friendly explanations that are easier to revisit.",
    color: LIME,
    ink: NAVY,
  },
  {
    title: "Study structure",
    desc: "Organise related ideas under headings so students can see what belongs together.",
    color: BLUE,
  },
  {
    title: "Exam-ready prompts",
    desc: "Add prompts that push students to explain, compare, justify or apply ideas.",
    color: PINK,
  },
  {
    title: "Next-step study actions",
    desc: "Move from notes into flashcards, quizzes and practice questions inside the same study flow.",
    color: LIME,
    ink: NAVY,
  },
] as const;

export const NotesGeneratorFeaturesSection = () => {
  return (
    <section
      aria-labelledby="notes-generator-features-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={22}>
          <h2
            id="notes-generator-features-heading"
            className="mb-3 font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            What the Note Maker Helps{" "}
            <span style={{ color: BLUE }}>Students Create</span>
          </h2>
          <p className="mx-auto m-0 max-w-2xl font-sans text-[15px] leading-relaxed text-[#5B5A6A]">
            Practical output for revision — short enough to reread, detailed
            enough to use.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} y={24}>
              <article
                className="funky-card relative flex h-full flex-col overflow-hidden rounded-[22px] bg-white p-5 shadow-[0_12px_32px_rgba(30,27,75,0.08)] sm:rounded-[26px] sm:p-6"
                style={{ borderTop: `4px solid ${item.color}` }}
              >
                <span
                  className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold"
                  style={{
                    backgroundColor: item.color,
                    color: "ink" in item ? item.ink : "#FFFFFF",
                  }}
                >
                  {i + 1}
                </span>
                <h3 className="mb-2 font-jakarta text-[1.05rem] font-extrabold text-[#1E1B4B] sm:text-[1.1rem]">
                  {item.title}
                </h3>
                <p className="m-0 font-sans text-[13px] leading-[1.7] text-[#5B5A6A] sm:text-[14px]">
                  {item.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const BENEFITS = [
  "Creates a cleaner version of messy study material.",
  "Supports Australian Curriculum subjects and senior study pathways.",
  "Helps students move from reading to recalling and practising.",
  "Keeps notes short enough to revise but detailed enough to be useful.",
  "Makes it easier to prepare before assessments, topic tests and exams.",
] as const;

export const NotesGeneratorBenefitsSection = () => {
  return (
    <section
      aria-labelledby="notes-generator-benefits-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal y={26}>
          <div
            className="relative overflow-hidden rounded-[28px] px-5 py-7 sm:rounded-[36px] sm:px-10 sm:py-9"
            style={{
              background:
                "linear-gradient(125deg, #3F2AE8 0%, #4F35F2 55%, #6B3DF5 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute -left-12 top-1/3 h-48 w-48 rounded-full opacity-40 blur-3xl"
              style={{ backgroundColor: PINK }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full opacity-35 blur-3xl"
              style={{ backgroundColor: LIME }}
              aria-hidden
            />

            <div className="relative z-[1] grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
              <div>
                <h2
                  id="notes-generator-benefits-heading"
                  className="mb-3 font-heading text-[clamp(1.45rem,3.2vw,2.35rem)] font-extrabold leading-[1.15] text-white"
                >
                  Why Students Use Studiely for{" "}
                  <span style={{ color: LIME }}>Notes</span>
                </h2>
                <p className="m-0 font-sans text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
                  Study notes built for real revision — not just compressed text.
                </p>
              </div>

              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {BENEFITS.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-[2px]"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: LIME }}
                      aria-hidden
                    >
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
                        <path
                          d="M2.5 6.2 4.8 8.5 9.5 3.5"
                          stroke="#1E1B4B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-sans text-[13px] leading-snug text-white sm:text-[14px]">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
