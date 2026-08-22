import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { FaqItem } from "@/components/FaqItem";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

const FAQS = [
  {
    q: "What is Exam Focus?",
    a: "Exam Focus is a study support tool that helps students organise revision priorities, identify important topics and choose useful next steps before assessments or exams.",
  },
  {
    q: "Can AI predict exam topics?",
    a: "AI can help students review likely focus areas based on study material and revision goals, but it should not be treated as a guaranteed prediction. Students should always follow teacher advice and official exam information.",
  },
  {
    q: "How does Studiely help with exam focus?",
    a: "Studiely helps students connect focus areas with action. After identifying what needs attention, students can create notes, flashcards, quizzes and exam practice to strengthen that area.",
  },
  {
    q: "Is exam focus useful before every test?",
    a: "Yes, it can help before topic tests, assignments and larger exams. The value is in choosing the right study action instead of spending time on material the student already understands.",
  },
  {
    q: "Does Studiely replace a revision timetable?",
    a: "No. It can support revision planning, but students should still manage time, deadlines and teacher instructions. Studiely helps make each study session more focused.",
  },
] as const;

export const ExamFocusFaqSection = () => {
  return (
    <section
      aria-labelledby="exam-focus-faq-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={20}>
          <h2
            id="exam-focus-faq-heading"
            className="mb-2 font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            FAQs
          </h2>
          <p className="m-0 font-sans text-[15px] text-[#5B5A6A]">
            Quick answers about Exam Focus on Studiely.
          </p>
        </Reveal>

        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04} y={16}>
              <FaqItem question={item.q} variant="marketing">
                <p>{item.a}</p>
              </FaqItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ExamFocusCtaSection = () => {
  return (
    <section
      aria-labelledby="exam-focus-cta-heading"
      className="bg-bg-base pb-[clamp(2rem,5vw,3.25rem)]"
    >
      <div className="wrap">
        <Reveal y={28}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:gap-5">
            <article
              className="funky-card relative overflow-hidden rounded-[28px] px-6 py-8 sm:rounded-[36px] sm:px-9 sm:py-10"
              style={{ backgroundColor: BLUE }}
            >
              <Image
                src="/learn-flower.png"
                alt=""
                width={220}
                height={220}
                unoptimized
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -right-4 h-auto w-[clamp(7rem,18vw,11rem)] opacity-90 drop-shadow-[0_8px_20px_rgba(255,54,198,0.3)]"
                draggable={false}
              />
              <div
                className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
                style={{ backgroundColor: PINK }}
                aria-hidden
              />

              <div className="relative z-[1] max-w-[34rem]">
                <h2
                  id="exam-focus-cta-heading"
                  className="mb-3 font-heading text-[clamp(1.4rem,2.8vw,2rem)] font-extrabold leading-tight text-white"
                >
                  Find your next study priority
                </h2>
                <p className="mb-7 font-sans text-[14px] leading-[1.7] text-white/88 sm:text-[15px]">
                  Use Studiely to find your next focus, then turn it into notes,
                  flashcards, quizzes and exam practice. Revision becomes easier
                  when every session has a clear purpose.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={STUDIELY_APP.examFocus}
                    className="funky-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-jakarta text-[14px] font-bold text-[#1E1B4B]"
                    style={{ backgroundColor: LIME }}
                  >
                    Find My Exam Focus
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/pricing"
                    className="funky-button inline-flex items-center justify-center rounded-full border-2 border-white/70 px-6 py-3.5 font-jakarta text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </article>

            <article
              className="funky-card flex flex-col items-center justify-center overflow-hidden rounded-[28px] px-6 py-8 text-center sm:rounded-[36px] sm:px-7 sm:py-9"
              style={{
                backgroundColor: LIME,
                borderBottom: `5px solid ${PINK}`,
                boxShadow: "0 8px 24px rgba(255,54,198,0.22)",
              }}
            >
              <Image
                src="/FAQ-rocket.png"
                alt=""
                width={96}
                height={96}
                unoptimized
                aria-hidden
                className="funky-icon mb-4 h-16 w-16 object-contain sm:h-20 sm:w-20"
              />
              <h3 className="mb-2 font-jakarta text-[clamp(1.2rem,2vw,1.45rem)] font-extrabold text-[#1E1B4B]">
                Ready to Start?
              </h3>
              <p className="mb-5 font-jakarta text-[13px] leading-relaxed text-[#1E1B4B]/80 sm:text-[14px]">
                Create your free account and plan your next revision session.
              </p>
              <Link
                href={STUDIELY_APP.examFocus}
                className="funky-button inline-flex items-center justify-center rounded-full px-6 py-3 font-jakarta text-[14px] font-bold text-white"
                style={{ backgroundColor: BLUE }}
              >
                Start Free
              </Link>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
