import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

export const NotesGeneratorSummarySection = () => {
  return (
    <section
      aria-labelledby="notes-generator-summary"
      className="bg-bg-base pb-[clamp(1.25rem,3.5vw,2rem)]"
    >
      <div className="wrap">
        <Reveal y={24}>
          <article
            className="relative overflow-hidden rounded-[24px] border border-[#E8E6F0] bg-white px-5 py-6 shadow-[0_12px_36px_rgba(30,27,75,0.07)] sm:rounded-[32px] sm:px-8 sm:py-7 md:px-10"
            style={{ borderBottom: `4px solid ${BLUE}` }}
          >
            <h2
              id="notes-generator-summary"
              className="mb-3 font-heading text-[clamp(1.25rem,2.4vw,1.65rem)] font-extrabold leading-snug text-[#1E1B4B]"
            >
              What is Studiely&apos;s notes generator?
            </h2>
            <p className="m-0 max-w-4xl font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              Studiely&apos;s notes generator helps students turn topics, class
              notes and study material into clear revision notes with structure,
              explanations and study-ready summaries. Instead of copying large
              blocks of content, students can create focused notes they can
              review, quiz themselves on and use for exam preparation.
            </p>
            <span
              className="pointer-events-none absolute -right-2 top-4 h-16 w-16 rounded-full opacity-80 blur-2xl sm:h-24 sm:w-24"
              style={{ backgroundColor: LIME }}
              aria-hidden
            />
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export const NotesGeneratorProblemSection = () => {
  return (
    <section
      aria-labelledby="notes-generator-problem-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal y={28}>
          <article
            className="relative overflow-visible rounded-[24px] border-b-[4px] bg-white px-5 py-6 shadow-[0_14px_40px_rgba(30,27,75,0.08)] sm:rounded-[40px] sm:px-10 sm:py-8 md:px-12 md:py-9"
            style={{ borderColor: LIME }}
          >
            <Image
              src="/learn-star.png"
              alt=""
              width={220}
              height={220}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-5 z-[2] h-auto w-[clamp(5.5rem,12vw,9rem)] max-w-none select-none drop-shadow-[0_6px_18px_rgba(255,54,198,0.25)] sm:left-0 sm:-top-6"
              draggable={false}
            />
            <Image
              src="/flower.png"
              alt=""
              width={280}
              height={280}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -right-3 -top-7 z-[2] h-auto w-[clamp(5rem,11vw,8.5rem)] max-w-none select-none sm:right-0 sm:-top-8"
              draggable={false}
            />

            <h2
              id="notes-generator-problem-heading"
              className="relative z-[1] mb-5 text-center font-heading text-[clamp(1.45rem,3.5vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B] sm:mb-7"
            >
              When Notes Feel Too Messy to{" "}
              <span
                className="box-decoration-clone px-1.5 py-0.5"
                style={{ backgroundColor: LIME }}
              >
                Revise From
              </span>
            </h2>

            <div className="relative z-[1] grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:gap-12">
              <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
                Many students collect information faster than they can organise
                it. A lesson might include teacher slides, textbook pages,
                homework examples, definitions, diagrams, quotes and assessment
                reminders. By the time revision starts, the problem is not always
                a lack of material; it is knowing what matters, how ideas connect
                and what to read first.
              </p>
              <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
                Studiely turns that overloaded moment into a simpler workflow.
                Students can start with a subject, topic or their own study
                material and build notes that separate main ideas from supporting
                detail. The goal is not to replace learning — it is to create a
                cleaner starting point so students spend more time understanding,
                recalling and practising.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export const NotesGeneratorGoalSection = () => {
  return (
    <section
      aria-labelledby="notes-generator-goal-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <Reveal y={26}>
            <h2
              id="notes-generator-goal-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3.2vw,2.35rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B]"
            >
              A Smarter Way to Build{" "}
              <span style={{ color: BLUE }}>Study Notes</span>
            </h2>
            <p className="m-0 mb-4 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              The notes generator takes a topic and reshapes it into organised
              sections, key explanations, definitions and revision prompts. A
              Science student can turn a broad topic into concept notes. An
              English student can create notes around themes, language features
              and text response ideas. A HASS or History student can organise
              timelines, evidence and cause-and-effect relationships.
            </p>
            <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              Because Studiely focuses on study use, the output should feel
              practical rather than decorative. The notes need to help students
              answer questions, explain ideas and return to the material quickly
              before a quiz, assignment or exam-style task.
            </p>
          </Reveal>

          <Reveal delay={0.08} y={30}>
            <div
              className="funky-card relative overflow-hidden rounded-[28px] px-6 py-7 sm:rounded-[32px] sm:px-8 sm:py-8"
              style={{ backgroundColor: BLUE }}
            >
              <Image
                src="/bow.svg"
                alt=""
                width={200}
                height={180}
                unoptimized
                aria-hidden
                className="pointer-events-none absolute -right-3 -top-4 h-auto w-[clamp(5.5rem,16vw,8.5rem)] opacity-90"
                draggable={false}
              />
              <h3 className="relative z-[1] mb-3 font-heading text-[clamp(1.15rem,2vw,1.4rem)] font-extrabold text-white">
                How students can use this page
              </h3>
              <p className="relative z-[1] m-0 font-sans text-[14px] leading-[1.7] text-white/90">
                Use it as a focused study-tool hub. Create revision notes first,
                then move into flashcards, quizzes, exam focus and exam practice
                without treating each step as a separate study session.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
