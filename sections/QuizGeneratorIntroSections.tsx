import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

export const QuizGeneratorSummarySection = () => {
  return (
    <section
      aria-labelledby="quiz-generator-summary"
      className="bg-bg-base pb-[clamp(1.25rem,3.5vw,2rem)]"
    >
      <div className="wrap">
        <Reveal y={24}>
          <article
            className="relative overflow-hidden rounded-[24px] border border-[#E8E6F0] bg-white px-5 py-6 shadow-[0_12px_36px_rgba(30,27,75,0.07)] sm:rounded-[32px] sm:px-8 sm:py-7 md:px-10"
            style={{ borderBottom: `4px solid ${BLUE}` }}
          >
            <h2
              id="quiz-generator-summary"
              className="mb-3 font-heading text-[clamp(1.25rem,2.4vw,1.65rem)] font-extrabold leading-snug text-[#1E1B4B]"
            >
              What is Studiely&apos;s quiz generator?
            </h2>
            <p className="m-0 max-w-4xl font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              Studiely&apos;s quiz generator helps students create practice
              quizzes from notes, topics and study material. Students can use it
              to test understanding, review mistakes and build stronger recall
              before class tests, assignments and exam-style practice.
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

export const QuizGeneratorProblemSection = () => {
  return (
    <section
      aria-labelledby="quiz-generator-problem-heading"
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
              src="/flower.webp"
              alt=""
              width={280}
              height={280}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -right-3 -top-7 z-[2] h-auto w-[clamp(5rem,11vw,8.5rem)] max-w-none select-none sm:right-0 sm:-top-8"
              draggable={false}
            />

            <h2
              id="quiz-generator-problem-heading"
              className="relative z-[1] mb-5 text-center font-heading text-[clamp(1.45rem,3.5vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B] sm:mb-7"
            >
              Testing Yourself Shows What{" "}
              <span
                className="box-decoration-clone px-1.5 py-0.5"
                style={{ backgroundColor: LIME }}
              >
                Notes Cannot
              </span>
            </h2>

            <div className="relative z-[1] grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:gap-12">
              <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
                A student can read a topic several times and still struggle when
                the question changes. That happens because reading often hides
                weak understanding. A quiz forces the brain to choose, explain,
                compare or apply information, which makes the gaps visible much
                earlier.
              </p>
              <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
                Studiely turns quiz practice into a normal part of revision.
                Instead of waiting for a teacher-made test, students can create
                quizzes from their own topics and use the results to decide what
                to review next. This makes the study session more active and more
                honest.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export const QuizGeneratorGoalSection = () => {
  return (
    <section
      aria-labelledby="quiz-generator-goal-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <Reveal y={26}>
            <h2
              id="quiz-generator-goal-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3.2vw,2.35rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B]"
            >
              Practice Questions From{" "}
              <span style={{ color: BLUE }}>Real Study Material</span>
            </h2>
            <p className="m-0 mb-4 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              The quiz generator can create questions from class notes, subject
              topics or study summaries. For Mathematics, it can support
              procedural practice and concept checks. For Science, it can test
              definitions, systems and explanations. For English and HASS, it can
              ask students to identify ideas, evaluate evidence or prepare
              stronger written responses.
            </p>
            <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              A strong quiz should not only ask easy memory questions. It should
              include a mix of recall, application and reasoning. Studiely helps
              students move from basic checking into more useful revision,
              especially when they review the questions they get wrong instead of
              only looking at the final score.
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
                A layout that keeps students moving
              </h3>
              <p className="relative z-[1] m-0 font-sans text-[14px] leading-[1.7] text-white/90">
                Quizzes are not only for the end of revision. Students can use
                them during revision to decide what to read again, what to
                practise and where they need help.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
