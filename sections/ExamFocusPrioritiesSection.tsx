import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const NAVY = "#1E1B4B";

const PRIORITIES = [
  {
    title: "Important topics",
    desc: "Identify areas that deserve attention based on the subject, study material and revision goal.",
    color: BLUE,
  },
  {
    title: "Weak areas",
    desc: "Turn quiz mistakes and uncertain concepts into a clearer review list.",
    color: PINK,
  },
  {
    title: "Revision order",
    desc: "Decide whether to start with notes, flashcards, quizzes or exam-style practice.",
    color: LIME,
    ink: NAVY,
  },
  {
    title: "Practice needs",
    desc: "Spot when a student understands content but still needs timed or applied practice.",
    color: BLUE,
  },
  {
    title: "Confidence checks",
    desc: "Separate topics that feel familiar from topics the student can actually explain.",
    color: PINK,
  },
  {
    title: "Next actions",
    desc: "Create a practical study direction for the next session instead of guessing.",
    color: LIME,
    ink: NAVY,
  },
] as const;

export const ExamFocusPrioritiesSection = () => {
  return (
    <section
      aria-labelledby="exam-focus-priorities-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={22}>
          <h2
            id="exam-focus-priorities-heading"
            className="mb-3 font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            What Exam Focus Helps Students{" "}
            <span style={{ color: BLUE }}>Prioritise</span>
          </h2>
          <p className="mx-auto m-0 max-w-2xl font-sans text-[15px] leading-relaxed text-[#5B5A6A]">
            From important topics to next actions — so every session has a clear
            purpose.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {PRIORITIES.map((item, i) => (
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
  "Reduces random revision and helps students choose a starting point.",
  "Connects weak areas with practical next steps.",
  "Supports Australian Curriculum and senior secondary study pathways.",
  "Helps students revise with a plan instead of panic.",
  "Works alongside teacher advice, feedback and official assessment requirements.",
] as const;

export const ExamFocusBenefitsSection = () => {
  return (
    <section
      aria-labelledby="exam-focus-benefits-heading"
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
                  id="exam-focus-benefits-heading"
                  className="mb-3 font-heading text-[clamp(1.45rem,3.2vw,2.35rem)] font-extrabold leading-[1.15] text-white"
                >
                  Why Students Use Studiely for{" "}
                  <span style={{ color: LIME }}>Exam Focus</span>
                </h2>
                <p className="m-0 font-sans text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
                  Exam preparation with direction — not guesswork.
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
