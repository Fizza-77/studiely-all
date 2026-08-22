import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

export const FlashcardMakerSummarySection = () => {
  return (
    <section
      aria-labelledby="flashcard-maker-summary"
      className="bg-bg-base pb-[clamp(1.25rem,3.5vw,2rem)]"
    >
      <div className="wrap">
        <Reveal y={24}>
          <article
            className="relative overflow-hidden rounded-[24px] border border-[#E8E6F0] bg-white px-5 py-6 shadow-[0_12px_36px_rgba(30,27,75,0.07)] sm:rounded-[32px] sm:px-8 sm:py-7 md:px-10"
            style={{ borderBottom: `4px solid ${BLUE}` }}
          >
            <h2
              id="flashcard-maker-summary"
              className="mb-3 font-heading text-[clamp(1.25rem,2.4vw,1.65rem)] font-extrabold leading-snug text-[#1E1B4B]"
            >
              What is Studiely&apos;s flashcard maker?
            </h2>
            <p className="m-0 max-w-4xl font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              Studiely&apos;s flashcard maker helps students turn notes, topics
              and study material into active recall flashcards. Students can use
              the cards to test definitions, formulas, evidence, vocabulary,
              processes and key ideas before moving into quizzes or exam
              practice.
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

export const FlashcardMakerProblemSection = () => {
  return (
    <section
      aria-labelledby="flashcard-maker-problem-heading"
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
              src="/learn-flower.png"
              alt=""
              width={280}
              height={280}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -right-3 -top-7 z-[2] h-auto w-[clamp(5rem,11vw,8.5rem)] max-w-none select-none sm:right-0 sm:-top-8"
              draggable={false}
            />

            <h2
              id="flashcard-maker-problem-heading"
              className="relative z-[1] mb-5 text-center font-heading text-[clamp(1.45rem,3.5vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B] sm:mb-7"
            >
              Why Flashcards Work Better Than{" "}
              <span
                className="box-decoration-clone px-1.5 py-0.5"
                style={{ backgroundColor: LIME }}
              >
                Rereading
              </span>
            </h2>

            <div className="relative z-[1] grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:gap-12">
              <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
                Rereading can feel productive because the page looks familiar,
                but familiarity is not the same as memory. Students often realise
                this only when a teacher asks a question, a quiz appears or an
                exam asks them to apply a concept without the notes in front of
                them.
              </p>
              <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
                Flashcards change the study task. They ask students to retrieve
                information, not just recognise it. That retrieval step helps
                reveal what is strong, what is weak and what needs another
                review. Studiely gives students a faster way to create those
                recall prompts from the material they already have.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export const FlashcardMakerGoalSection = () => {
  return (
    <section
      aria-labelledby="flashcard-maker-goal-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <Reveal y={26}>
            <h2
              id="flashcard-maker-goal-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3.2vw,2.35rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B]"
            >
              From Notes to{" "}
              <span style={{ color: BLUE }}>Recall Questions</span>
            </h2>
            <p className="m-0 mb-4 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              The flashcard maker can turn a topic into short question-and-answer
              cards. For English, students might create cards for language
              techniques, themes or argument features. For Mathematics, they can
              review formulas, methods and problem types. For Science, flashcards
              can help with vocabulary, processes, diagrams and cause-and-effect
              explanations.
            </p>
            <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              The best flashcards are not overloaded. Each card should ask for
              one idea, one term, one step or one comparison. This makes study
              sessions quicker and makes it easier for students to identify
              exactly where their understanding breaks down.
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
                Designed for a page layout that feels useful
              </h3>
              <p className="relative z-[1] m-0 font-sans text-[14px] leading-[1.7] text-white/90">
                Explain active recall in the hero, show the flashcard workflow in
                three steps, then display feature cards for different student use
                cases. Students can move from flashcards into quizzes, exam focus
                and exam-style practice when they are ready to test deeper
                understanding.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
