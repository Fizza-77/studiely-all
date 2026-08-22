import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

export const ExamFocusSummarySection = () => {
  return (
    <section
      aria-labelledby="exam-focus-summary"
      className="bg-bg-base pb-[clamp(1.25rem,3.5vw,2rem)]"
    >
      <div className="wrap">
        <Reveal y={24}>
          <article
            className="relative overflow-hidden rounded-[24px] border border-[#E8E6F0] bg-white px-5 py-6 shadow-[0_12px_36px_rgba(30,27,75,0.07)] sm:rounded-[32px] sm:px-8 sm:py-7 md:px-10"
            style={{ borderBottom: `4px solid ${BLUE}` }}
          >
            <h2
              id="exam-focus-summary"
              className="mb-3 font-heading text-[clamp(1.25rem,2.4vw,1.65rem)] font-extrabold leading-snug text-[#1E1B4B]"
            >
              What is Exam Focus in Studiely?
            </h2>
            <p className="m-0 max-w-4xl font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              Exam Focus in Studiely helps students organise revision around
              important topics, weak areas and next study actions. It does not
              replace teacher advice or official exam information, but it gives
              students a clearer way to plan notes, flashcards, quizzes and exam
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

export const ExamFocusProblemSection = () => {
  return (
    <section
      aria-labelledby="exam-focus-problem-heading"
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
              id="exam-focus-problem-heading"
              className="relative z-[1] mb-5 text-center font-heading text-[clamp(1.45rem,3.5vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B] sm:mb-7"
            >
              The Hardest Part of Revision Is Often{" "}
              <span
                className="box-decoration-clone px-1.5 py-0.5"
                style={{ backgroundColor: LIME }}
              >
                Choosing What to Do Next
              </span>
            </h2>

            <div className="relative z-[1] grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:gap-12">
              <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
                Students rarely struggle because they have nothing to study. They
                struggle because there is too much. One subject has notes,
                another has practice questions, another has feedback from a
                teacher, and every topic starts to feel equally urgent.
              </p>
              <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
                Studiely helps students turn that pressure into a clearer study
                direction. Instead of opening random notes or revising only the
                easiest topic, students can use Exam Focus to identify what needs
                attention and which tool should come next.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export const ExamFocusTrustSection = () => {
  return (
    <section
      aria-labelledby="exam-focus-trust-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <Reveal y={26}>
            <h2
              id="exam-focus-trust-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3.2vw,2.35rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1E1B4B]"
            >
              Focus Without{" "}
              <span style={{ color: BLUE }}>Fake Promises</span>
            </h2>
            <p className="m-0 mb-4 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              A responsible exam topic tool should never claim it can guarantee
              what will appear in an exam. Studiely avoids that kind of risky
              promise. The focus is on helping students understand exam topics,
              organise revision priorities and prepare across the areas they are
              expected to know.
            </p>
            <p className="m-0 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              This matters for trust. Students need guidance that helps them
              study better, not shortcuts that create false confidence. Exam
              Focus should point them toward important concepts, recurring
              skills, weak areas and practice needs while reminding them to
              follow school, teacher and official course advice.
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
                Built for a clean, helpful layout
              </h3>
              <p className="relative z-[1] m-0 font-sans text-[14px] leading-[1.7] text-white/90">
                This page should feel like a planning tool: what Exam Focus does,
                what it does not do, and how it fits into a complete revision
                routine with notes, flashcards, quizzes and exam practice.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
