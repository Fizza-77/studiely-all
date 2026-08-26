import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

export const NotesGeneratorRevisionSection = () => {
  return (
    <section
      aria-labelledby="notes-generator-revision-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <Reveal y={26}>
            <h2
              id="notes-generator-revision-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B]"
            >
              Study Notes Built for{" "}
              <span style={{ color: BLUE }}>Real Revision</span>
            </h2>
            <p className="m-0 mb-4 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              A strong study notes generator should do more than compress text.
              It should help students see the learning target, understand the key
              terms and build a revision path. Studiely is designed around that
              study journey. A student can create revision notes online, check
              the ideas they understand, then use related tools to test memory
              and apply knowledge.
            </p>
            <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              For Australian students, this matters because subjects often build
              across year levels. English grows from reading and writing into
              deeper text analysis. Mathematics grows from number skills into
              algebra and problem solving. Science grows from observations into
              models, systems and evidence. Clear notes help students carry those
              ideas forward instead of starting again before every assessment.
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
                    src="/icons/notes.svg"
                    alt=""
                    width={180}
                    height={204}
                    decoding="async"
                    className="h-full w-auto max-w-full object-contain"
                    draggable={false}
                    aria-hidden
                  />
                </div>
                <p className="m-0 text-center font-jakarta text-[14px] font-semibold text-[#1E1B4B]">
                  See the learning target, then build a revision path.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const FLOW = [
  {
    title: "Understand",
    desc: "Use notes to understand the topic first — structure, terms and main ideas.",
    color: BLUE,
  },
  {
    title: "Recall",
    desc: "Use flashcards to check memory of definitions, steps and evidence.",
    color: PINK,
  },
  {
    title: "Apply",
    desc: "Use quizzes and exam practice to test application under pressure.",
    color: LIME,
  },
] as const;

export const NotesGeneratorWorkflowSection = () => {
  return (
    <section
      aria-labelledby="notes-generator-workflow-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={22}>
          <h2
            id="notes-generator-workflow-heading"
            className="mb-3 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            Where Notes Fit in a{" "}
            <span
              className="box-decoration-clone px-1.5 py-0.5"
              style={{ backgroundColor: LIME }}
            >
              Complete Study Workflow
            </span>
          </h2>
          <p className="mx-auto m-0 max-w-3xl font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
            The strongest use of a notes generator is not a one-click shortcut;
            it is the first step in a full study sequence. Begin with a clean
            explanation, then turn the same material into flashcards, quiz
            questions and exam-style prompts.
          </p>
        </Reveal>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:items-stretch">
          <Reveal y={24}>
            <article
              className="funky-card flex h-full flex-col rounded-[24px] px-5 py-6 text-white sm:rounded-[28px] sm:px-7 sm:py-7"
              style={{ backgroundColor: BLUE }}
            >
              <h3 className="mb-3 font-jakarta text-[1.15rem] font-extrabold">
                Study flow
              </h3>
              <ol className="m-0 flex list-none flex-col gap-2.5 p-0 font-sans text-[14px] leading-snug text-white/90">
                {[
                  "Notes — understand the topic",
                  "Flashcards — check recall",
                  "Quiz — test understanding",
                  "Exam focus — sharpen technique",
                  "Exam practice — apply under pressure",
                ].map((line, i) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold text-[#1E1B4B]"
                      style={{ backgroundColor: LIME }}
                    >
                      {i + 1}
                    </span>
                    {line}
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>

          <Reveal delay={0.06} y={24}>
            <article className="funky-card flex h-full flex-col rounded-[24px] border border-[#E8E6F0] bg-white px-5 py-6 shadow-[0_12px_32px_rgba(30,27,75,0.07)] sm:rounded-[28px] sm:px-7 sm:py-7">
              <h3 className="mb-3 font-jakarta text-[1.15rem] font-extrabold text-[#1E1B4B]">
                Example: Science topic
              </h3>
              <p className="m-0 mb-3 font-sans text-[14px] leading-[1.7] text-[#5B5A6A]">
                Turn a Science unit into key concepts, definitions, diagram
                prompts and practice questions — then review accuracy against
                class notes and teacher instructions before saving.
              </p>
              <p className="m-0 font-sans text-[13px] leading-[1.7] text-[#78788A]">
                AI can organise ideas quickly, but learners still need to check
                accuracy, add class-specific examples and remove anything that
                does not match the teacher&apos;s guidance.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {FLOW.map((item, i) => {
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
