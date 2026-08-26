import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

export const FlashcardMakerAudienceSection = () => {
  return (
    <section
      aria-labelledby="flashcard-maker-audience-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <Reveal y={26}>
            <h2
              id="flashcard-maker-audience-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B]"
            >
              Active Recall Flashcards for{" "}
              <span style={{ color: BLUE }}>Australian Students</span>
            </h2>
            <p className="m-0 mb-4 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              An online flashcard maker becomes more useful when it connects to
              the way students actually prepare. Many students need to revise
              across several subjects at once. They may have English analysis,
              Mathematics formulas, Science vocabulary, HASS evidence and
              language terms all competing for attention. Studiely helps turn
              that material into smaller recall tasks.
            </p>
            <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              The flashcard generator is especially useful when students want to
              move quickly from notes to practice. Instead of spending an entire
              study session formatting cards, they can create a deck, review it,
              and then use missed answers as a signal for what to revisit. This
              keeps revision focused and gives students a clearer sense of
              progress.
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
                    src="/icons/flashcards.svg"
                    alt=""
                    width={200}
                    height={188}
                    decoding="async"
                    className="h-full w-auto max-w-full object-contain"
                    draggable={false}
                    aria-hidden
                  />
                </div>
                <p className="m-0 text-center font-jakarta text-[14px] font-semibold text-[#1E1B4B]">
                  Create a deck, review it, then revisit what you miss.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const TIPS = [
  {
    title: "Keep one idea per card",
    desc: "A stronger card asks for one definition, one formula step, one quote connection or one reason a process happens — not a whole chapter.",
    color: BLUE,
    dark: false,
  },
  {
    title: "Rewrite weak cards after mistakes",
    desc: "Long cards become mini-notes students reread. Short, specific cards make weak points obvious.",
    color: PINK,
    dark: false,
  },
  {
    title: "Move into quizzes when recall improves",
    desc: "Mix quick-fact cards with explanation and next-step prompts, then bridge into quizzes and deeper practice.",
    color: LIME,
    dark: true,
  },
] as const;

export const FlashcardMakerTipsSection = () => {
  return (
    <section
      aria-labelledby="flashcard-maker-tips-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={22}>
          <h2
            id="flashcard-maker-tips-heading"
            className="mb-3 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            How to Make Flashcards That{" "}
            <span
              className="box-decoration-clone px-1.5 py-0.5"
              style={{ backgroundColor: LIME }}
            >
              Actually Help
            </span>
          </h2>
          <p className="mx-auto m-0 max-w-3xl font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
            Good cards are short, specific and easy to test. Weak cards ask for a
            whole chapter summary. Stronger cards ask for one idea — so revision
            stays active, not automatic.
          </p>
        </Reveal>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <Reveal y={24}>
            <article className="funky-card h-full rounded-[24px] border border-[#FECACA] bg-[#FEF2F2] p-5 sm:rounded-[28px] sm:p-6">
              <p className="mb-2 font-heading text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#B91C1C]">
                Weak card
              </p>
              <h3 className="mb-2 font-jakarta text-[1.05rem] font-extrabold text-[#1E1B4B]">
                “Summarise the whole chapter”
              </h3>
              <p className="m-0 font-sans text-[13px] leading-[1.7] text-[#5B5A6A] sm:text-[14px]">
                Too broad. Students end up rereading instead of recalling, and
                mistakes stay hidden.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.06} y={24}>
            <article className="funky-card h-full rounded-[24px] border border-[#BBF7D0] bg-[#F0FDF4] p-5 sm:rounded-[28px] sm:p-6">
              <p className="mb-2 font-heading text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#15803D]">
                Strong card
              </p>
              <h3 className="mb-2 font-jakarta text-[1.05rem] font-extrabold text-[#1E1B4B]">
                “What is one definition / formula step / quote effect?”
              </h3>
              <p className="m-0 font-sans text-[13px] leading-[1.7] text-[#5B5A6A] sm:text-[14px]">
                One idea per card. Easy to flip, easy to score, easy to spot what
                still needs work.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {TIPS.map((item, i) => (
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
    desc: "Connect language devices with effects on the reader, themes and argument features.",
    tint: "#ECEAFF",
    accent: BLUE,
  },
  {
    title: "Mathematics",
    desc: "Test formulas, definitions and method steps without digging through full notes.",
    tint: "#FFF9C4",
    accent: "#1E1B4B",
  },
  {
    title: "Science",
    desc: "Check systems, processes, diagrams and key vocabulary with short prompts.",
    tint: "#FFE8F2",
    accent: PINK,
  },
  {
    title: "Languages",
    desc: "Support vocabulary, grammar patterns and short translation practice.",
    tint: "#DFF6F2",
    accent: "#00B09B",
  },
] as const;

export const FlashcardMakerSubjectsSection = () => {
  return (
    <section
      aria-labelledby="flashcard-maker-subjects-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 max-w-3xl sm:mb-8" y={22}>
          <h2
            id="flashcard-maker-subjects-heading"
            className="mb-3 font-heading text-[clamp(1.45rem,3.2vw,2.4rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            Subject Examples for{" "}
            <span style={{ color: BLUE }}>Flashcard Study</span>
          </h2>
          <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
            Flashcards for studying are not only for memorising single words.
            They can also support explanation, comparison and preparation for
            longer practice tasks.
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
