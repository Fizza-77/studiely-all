import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

export const ExamFocusDirectionSection = () => {
  return (
    <section
      aria-labelledby="exam-focus-direction-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <Reveal y={26}>
            <h2
              id="exam-focus-direction-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B]"
            >
              Exam Preparation With Direction,{" "}
              <span style={{ color: BLUE }}>Not Guesswork</span>
            </h2>
            <p className="m-0 mb-4 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              Exam revision help is most useful when it turns uncertainty into
              action. Students need to know whether they should rewrite notes,
              review key terms, test themselves, practise questions or revisit
              teacher feedback. Exam Focus helps organise these decisions so
              revision becomes more intentional.
            </p>
            <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              In Studiely, exam preparation links with the full study workflow. A
              student might use focus support to choose a difficult topic, create
              notes to rebuild understanding, make flashcards for recall, use
              quizzes to check memory and then attempt exam practice. That
              connected workflow makes priorities useful — because students know
              what to do after they identify them.
            </p>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="relative mx-auto w-full max-w-md">
              <Image
                src="/flower.png"
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
                    src="/icons/exam.svg"
                    alt=""
                    width={172}
                    height={172}
                    decoding="async"
                    className="h-full w-auto max-w-full object-contain"
                    draggable={false}
                    aria-hidden
                  />
                </div>
                <p className="m-0 text-center font-jakarta text-[14px] font-semibold text-[#1E1B4B]">
                  Focus → notes → flashcards → quiz → exam practice.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const PLAN = [
  {
    title: "Choose the next action",
    desc: "Use focus areas to pick the right tool — notes, flashcards, quizzes or exam practice.",
    color: BLUE,
  },
  {
    title: "Face weak topics",
    desc: "Do not ignore weak topics because they feel uncomfortable. Put them on the list and act.",
    color: PINK,
  },
  {
    title: "Stay aligned",
    desc: "Check teacher instructions and official requirements before final preparation.",
    color: LIME,
  },
] as const;

export const ExamFocusPlanSection = () => {
  return (
    <section
      aria-labelledby="exam-focus-plan-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={22}>
          <h2
            id="exam-focus-plan-heading"
            className="mb-3 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            Use Focus Support to Build a{" "}
            <span
              className="box-decoration-clone px-1.5 py-0.5"
              style={{ backgroundColor: LIME }}
            >
              Real Study Plan
            </span>
          </h2>
          <p className="mx-auto m-0 max-w-3xl font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
            Exam Focus works best when students use it to plan action, not to
            avoid hard topics. A confusing topic needs notes. A familiar but
            hard-to-recall topic needs flashcards. A topic that produces mistakes
            needs quizzes or exam practice. Studiely supports better decisions —
            not guaranteed predictions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {PLAN.map((item, i) => {
            const onLime = item.color === LIME;
            return (
              <Reveal key={item.title} delay={i * 0.08} y={26}>
                <article
                  className="funky-card relative flex h-full flex-col overflow-hidden rounded-[24px] px-5 py-6 shadow-[0_14px_36px_rgba(30,27,75,0.12)] sm:rounded-[28px] sm:px-6 sm:py-7"
                  style={{
                    backgroundColor: item.color,
                    color: onLime ? "#1E1B4B" : "#FFFFFF",
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
                      color: onLime
                        ? "rgba(30,27,75,0.8)"
                        : "rgba(255,255,255,0.9)",
                    }}
                  >
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SUBJECTS = [
  {
    title: "English",
    desc: "Text evidence, essay structure and language choices.",
    tint: "#ECEAFF",
    accent: BLUE,
  },
  {
    title: "Mathematics",
    desc: "Formulas, weak methods and question types.",
    tint: "#FFF9C4",
    accent: "#1E1B4B",
  },
  {
    title: "Science",
    desc: "Processes, diagrams and explanation skills.",
    tint: "#FFE8F2",
    accent: PINK,
  },
  {
    title: "HASS",
    desc: "Sources, timelines and cause-and-effect thinking.",
    tint: "#DFF6F2",
    accent: "#00B09B",
  },
] as const;

export const ExamFocusSubjectsSection = () => {
  return (
    <section
      aria-labelledby="exam-focus-subjects-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 max-w-3xl sm:mb-8" y={22}>
          <h2
            id="exam-focus-subjects-heading"
            className="mb-3 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            Subject Examples for{" "}
            <span style={{ color: BLUE }}>Focused Revision</span>
          </h2>
          <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
            Focus changes by learning area — so priorities connect to real study
            situations, not only broad marketing language.
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
