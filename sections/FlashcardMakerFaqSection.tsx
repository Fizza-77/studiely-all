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
    q: "What does an AI flashcard maker do?",
    a: "An AI flashcard maker turns study material into question-and-answer cards. Students can use it to review definitions, examples, formulas, vocabulary, processes and short explanations.",
  },
  {
    q: "Can Studiely turn notes into flashcards?",
    a: "Yes. Students can use Studiely to turn notes into flashcards and then study them through active recall. This helps students check what they remember without rewriting every card by hand.",
  },
  {
    q: "Are flashcards useful for exam preparation?",
    a: "Flashcards are useful for exam preparation when students use them to recall important information, not just read answers. They work best when students review weak cards again and then practise longer exam-style questions.",
  },
  {
    q: "Which subjects can use flashcards?",
    a: "Flashcards can help in many subjects, including English, Mathematics, Science, History, Geography, Languages, Technologies and senior secondary subjects. The card style should match the subject content.",
  },
  {
    q: "Should students only use flashcards?",
    a: "No. Flashcards help with memory and quick recall, but students should also use quizzes, written practice, problem solving and exam-style tasks to build deeper understanding.",
  },
] as const;

export const FlashcardMakerFaqSection = () => {
  return (
    <section
      aria-labelledby="flashcard-maker-faq-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={20}>
          <h2
            id="flashcard-maker-faq-heading"
            className="mb-2 font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            FAQs
          </h2>
          <p className="m-0 font-sans text-[15px] text-[#5B5A6A]">
            Quick answers about flashcards on Studiely.
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

export const FlashcardMakerCtaSection = () => {
  return (
    <section
      aria-labelledby="flashcard-maker-cta-heading"
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
                  id="flashcard-maker-cta-heading"
                  className="mb-3 font-heading text-[clamp(1.4rem,2.8vw,2rem)] font-extrabold leading-tight text-white"
                >
                  Turn your next topic into active recall
                </h2>
                <p className="mb-7 font-sans text-[14px] leading-[1.7] text-white/88 sm:text-[15px]">
                  Create flashcards from your next topic in Studiely, then keep
                  testing yourself with quizzes, exam focus and exam-style
                  practice.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={STUDIELY_APP.flashcards}
                    className="funky-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-jakarta text-[14px] font-bold text-[#1E1B4B]"
                    style={{ backgroundColor: LIME }}
                  >
                    Make Flashcards
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
                Create your free account and build your first deck today.
              </p>
              <Link
                href={STUDIELY_APP.flashcards}
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
