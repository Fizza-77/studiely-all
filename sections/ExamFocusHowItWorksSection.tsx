import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

const STEPS = [
  {
    step: "STEP 01",
    badgeBg: BLUE,
    title: "Add the study goal",
    desc: "Tell Studiely the subject, topic, assessment focus or area you want to prepare for.",
    edge: "#A8B8FF",
  },
  {
    step: "STEP 02",
    badgeBg: PINK,
    title: "Review the focus areas",
    desc: "Studiely helps organise important topics, weak points and revision priorities.",
    edge: LIME,
  },
  {
    step: "STEP 03",
    badgeBg: "#1E1B4B",
    title: "Take action",
    desc: "Create notes, flashcards, quizzes or exam practice based on the focus plan.",
    edge: PINK,
  },
] as const;

export const ExamFocusHowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="exam-focus-how-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="relative mb-6 sm:mb-8" y={26}>
          <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
            <div className="max-w-[40rem]">
              <h2
                id="exam-focus-how-heading"
                className="mb-3 font-heading text-[clamp(1.55rem,3.5vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1E1B4B]"
              >
                How It <span style={{ color: BLUE }}>Works</span>
              </h2>
              <p className="m-0 max-w-[34rem] font-sans text-[15px] leading-relaxed text-[#5B5A6A]">
                Set a goal, review priorities, then take the right study action —
                not a random one.
              </p>
            </div>
            <Image
              src="/flower.png"
              alt=""
              width={320}
              height={320}
              unoptimized
              aria-hidden
              className="pointer-events-none mx-auto h-auto w-[clamp(9rem,22vw,14rem)] max-w-none drop-shadow-[0_8px_20px_rgba(255,54,198,0.28)] lg:mx-0"
              draggable={false}
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {STEPS.map((item, i) => (
            <Reveal key={item.step} className="h-full" delay={i * 0.08} y={28}>
              <article
                className="funky-card flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_14px_40px_rgba(30,27,75,0.09)] sm:rounded-[28px]"
                style={{ borderBottom: `5px solid ${item.edge}` }}
              >
                <div className="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
                  <span
                    className="mb-3 inline-flex w-fit rounded-full px-3.5 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                    style={{ backgroundColor: item.badgeBg }}
                  >
                    {item.step}
                  </span>
                  <h3 className="mb-2.5 font-jakarta text-[clamp(1.1rem,2vw,1.3rem)] font-extrabold leading-snug text-[#1E1B4B]">
                    {item.title}
                  </h3>
                  <p className="m-0 font-sans text-[14px] leading-[1.7] text-[#5B5A6A]">
                    {item.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
