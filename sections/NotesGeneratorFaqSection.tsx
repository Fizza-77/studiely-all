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
    q: "What is an AI notes generator?",
    a: "An AI notes generator is a study tool that turns topics, notes or learning material into organised revision notes. In Studiely, students can use it to create clearer explanations, topic summaries and study-ready notes that support later practice.",
  },
  {
    q: "Can students use Studiely to make revision notes?",
    a: "Yes. Students can use Studiely to make revision notes from topics and study material, then continue with flashcards, quizzes, exam focus and practice questions so the notes become part of a complete study workflow.",
  },
  {
    q: "Is this only for one subject?",
    a: "No. Students can use the tool across subjects such as English, Mathematics, Science, HASS, Technologies, Languages and senior certificate subjects. The best results come when students enter a specific topic or clear study goal.",
  },
  {
    q: "Does AI replace studying?",
    a: "No. AI can help organise information, but students still need to read, check, recall, practise and improve their answers. Studiely supports study preparation; it does not replace learning or teacher guidance.",
  },
  {
    q: "How should students use AI notes before exams?",
    a: "Students should use AI notes as a starting point, then test themselves with flashcards, quizzes and exam-style questions. This helps them move from recognising information to explaining and applying it under assessment conditions.",
  },
] as const;

export const NotesGeneratorFaqSection = () => {
  return (
    <section
      aria-labelledby="notes-generator-faq-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={20}>
          <h2
            id="notes-generator-faq-heading"
            className="mb-2 font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            FAQs
          </h2>
          <p className="m-0 font-sans text-[15px] text-[#5B5A6A]">
            Quick answers about study notes on Studiely.
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

export const NotesGeneratorCtaSection = () => {
  return (
    <section
      aria-labelledby="notes-generator-cta-heading"
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
                src="/flower.png"
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
                  id="notes-generator-cta-heading"
                  className="mb-3 font-heading text-[clamp(1.4rem,2.8vw,2rem)] font-extrabold leading-tight text-white"
                >
                  Turn messy material into notes you can use
                </h2>
                <p className="mb-7 font-sans text-[14px] leading-[1.7] text-white/88 sm:text-[15px]">
                  Create your next set of study notes in Studiely, then keep
                  going with flashcards, quizzes, exam focus and exam practice.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={STUDIELY_APP.notes}
                    className="funky-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-jakarta text-[14px] font-bold text-[#1E1B4B]"
                    style={{ backgroundColor: LIME }}
                  >
                    Create AI Notes
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
                Create your free account and generate your first notes today.
              </p>
              <Link
                href={STUDIELY_APP.notes}
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
