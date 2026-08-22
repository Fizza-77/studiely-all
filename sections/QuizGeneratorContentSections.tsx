import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

export const QuizGeneratorDecisionsSection = () => {
  return (
    <section
      aria-labelledby="quiz-generator-decisions-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <Reveal y={26}>
            <h2
              id="quiz-generator-decisions-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B]"
            >
              Quizzes That Support Better{" "}
              <span style={{ color: BLUE }}>Revision Decisions</span>
            </h2>
            <p className="m-0 mb-4 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              A study quiz generator is most valuable when it helps students
              decide what to do next. A score by itself is not enough. Students
              need to know whether the problem was memory, language, method,
              evidence, timing or application. Studiely helps students use
              quizzes as feedback, not as a final judgement.
            </p>
            <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              For Australian students, regular quiz practice can support learning
              across many pathways. Younger students can check foundation
              knowledge in English, Mathematics and Science. Senior students can
              use quizzes to keep content fresh before they attempt longer
              practice responses or timed questions. The result is a cleaner
              revision cycle: learn, test, review, practise again.
            </p>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="relative mx-auto w-full max-w-md">
              <Image
                src="/learn-flower.png"
                alt=""
                width={160}
                height={160}
                unoptimized
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-6 z-[2] h-auto w-[clamp(4.5rem,14vw,7rem)]"
                draggable={false}
              />
              <div className="overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_16px_44px_rgba(30,27,75,0.1)] sm:rounded-[32px] sm:p-8">
                <div className="mx-auto mb-4 flex h-[clamp(6.5rem,18vw,8.5rem)] w-full max-w-[12rem] items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/quiz.svg"
                    alt=""
                    width={184}
                    height={176}
                    decoding="async"
                    className="h-full w-auto max-w-full object-contain"
                    draggable={false}
                    aria-hidden
                  />
                </div>
                <p className="m-0 text-center font-jakarta text-[14px] font-semibold text-[#1E1B4B]">
                  Learn, test, review, practise again.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const PATHS = [
  {
    title: "Review notes or flashcards",
    desc: "Low recall means rebuild memory first — go back to notes or flashcards before trying again.",
    color: BLUE,
  },
  {
    title: "Revisit the topic slowly",
    desc: "Repeated mistakes mean the concept is not secure yet. Slow down and rebuild understanding.",
    color: PINK,
  },
  {
    title: "Move into exam-style tasks",
    desc: "Strong quiz results mean you are ready for longer application and timed practice.",
    color: LIME,
    dark: true,
  },
] as const;

export const QuizGeneratorResultsSection = () => {
  return (
    <section
      aria-labelledby="quiz-generator-results-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={22}>
          <h2
            id="quiz-generator-results-heading"
            className="mb-3 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            Use Quiz Results as a{" "}
            <span
              className="box-decoration-clone px-1.5 py-0.5"
              style={{ backgroundColor: LIME }}
            >
              Revision Map
            </span>
          </h2>
          <p className="mx-auto m-0 max-w-3xl font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
            The real value comes after the answers. A quiz score can be useful,
            but the pattern of mistakes matters more. Instant feedback should
            help students take action quickly — a check-in, not a final
            judgement.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {PATHS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} y={26}>
              <article
                className="funky-card relative flex h-full flex-col overflow-hidden rounded-[24px] px-5 py-6 shadow-[0_14px_36px_rgba(30,27,75,0.12)] sm:rounded-[28px] sm:px-6 sm:py-7"
                style={{
                  backgroundColor: item.color,
                  color: item.dark ? "#1E1B4B" : "#FFFFFF",
                }}
              >
                <span className="mb-3 font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] opacity-80">
                  0{i + 1}
                </span>
                <h3 className="mb-2 font-jakarta text-[1.15rem] font-extrabold">
                  {item.title}
                </h3>
                <p
                  className="m-0 text-[13px] leading-[1.7] sm:text-[14px]"
                  style={{
                    color: item.dark
                      ? "rgba(30,27,75,0.8)"
                      : "rgba(255,255,255,0.9)",
                  }}
                >
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

const SUBJECTS = [
  {
    title: "English",
    desc: "Technique recognition, text knowledge and argument choices.",
    tint: "#ECEAFF",
    accent: BLUE,
  },
  {
    title: "Mathematics",
    desc: "Method selection, worked steps and concept checks.",
    tint: "#FFF9C4",
    accent: "#1E1B4B",
  },
  {
    title: "Science",
    desc: "Concepts, variables, data and explanations.",
    tint: "#FFE8F2",
    accent: PINK,
  },
  {
    title: "HASS",
    desc: "Timelines, sources, places, causes and consequences.",
    tint: "#DFF6F2",
    accent: "#00B09B",
  },
] as const;

export const QuizGeneratorSubjectsSection = () => {
  return (
    <section
      aria-labelledby="quiz-generator-subjects-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 max-w-3xl sm:mb-8" y={22}>
          <h2
            id="quiz-generator-subjects-heading"
            className="mb-3 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            Subject Examples for{" "}
            <span style={{ color: BLUE }}>Quiz Practice</span>
          </h2>
          <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
            Turn topic knowledge into targeted practice that can lead into
            stronger exam-style responses — not only an online quiz maker.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {SUBJECTS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} y={22}>
              <article
                className="funky-card flex h-full flex-col rounded-[22px] p-5 sm:rounded-[26px] sm:p-6"
                style={{ backgroundColor: s.tint }}
              >
                <h3
                  className="mb-2 font-jakarta text-[1.05rem] font-extrabold"
                  style={{ color: s.accent }}
                >
                  {s.title}
                </h3>
                <p className="m-0 font-sans text-[13px] leading-[1.7] text-[#5B5A6A] sm:text-[14px]">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
