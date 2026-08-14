import Image from "next/image";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF2D8A";
const GOLD = "#F0D78C";

function GraduationCapWatermark() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="pointer-events-none absolute -bottom-2 -right-2 h-[min(55%,11rem)] w-auto select-none opacity-[0.14]"
      aria-hidden
    >
      <path
        fill="white"
        d="M60 18 8 42l52 24 52-24L60 18Zm0 54.5L14.5 47.2V72c0 12.5 19.8 22.5 45.5 22.5S105.5 84.5 105.5 72V47.2L60 72.5Z"
      />
      <path
        fill="white"
        d="M104 48.5v22.8c2.8 1.1 4.6 2.6 4.6 4.3 0 3.4-6.2 6.2-13.8 6.2s-13.8-2.8-13.8-6.2c0-1.5 1.4-2.9 3.6-3.9V52.8l19.4-4.3Z"
      />
    </svg>
  );
}

export const PricingExtrasSection = () => {
  return (
    <section
      aria-labelledby="pricing-extras-heading"
      className="bg-bg-base pb-[clamp(2rem,4vw,3.25rem)] pt-2"
    >
      <div className="wrap">
        <h2 id="pricing-extras-heading" className="sr-only">
          Why Choose Studiely Pro
        </h2>

        <div className="grid grid-cols-1 gap-4 font-serif md:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] md:gap-5 lg:gap-6">
          {/* Large Pro benefits card */}
          <article
            className="relative overflow-hidden rounded-[28px] px-6 py-7 shadow-[0_16px_36px_rgba(79,53,242,0.22)] sm:rounded-[36px] sm:px-8 sm:py-8 md:row-span-2 md:min-h-full md:px-10 md:py-9 lg:px-12 lg:py-10"
            style={{
              background:
                "linear-gradient(118deg, #3F2AE8 0%, #4F35F2 55%, #5B3DF5 100%)",
            }}
          >
            <Image
              src="/bow.svg"
              alt=""
              width={320}
              height={300}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-6 z-[2] h-auto w-[clamp(8.5rem,22vw,13.5rem)] max-w-none select-none sm:-right-2 sm:-top-4 md:w-[clamp(10rem,18vw,14.5rem)]"
              draggable={false}
            />
            <GraduationCapWatermark />

            <div className="relative z-[1]">
              <h3 className="mb-6 max-w-[18ch] font-serif text-[clamp(1.55rem,3vw,2.15rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:mb-8 sm:max-w-none">
                Why Choose Studiely Pro?
              </h3>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-12">
                <div>
                  <h4
                    className="mb-2 font-serif text-[clamp(1rem,1.5vw,1.2rem)] font-bold leading-snug"
                    style={{ color: GOLD }}
                  >
                    Unlimited Potential
                  </h4>
                  <p className="m-0 max-w-[32ch] font-serif text-[13px] leading-relaxed text-white/92 sm:text-[14px] md:text-[15px]">
                    Break the limits of your research. Generate hundreds of
                    deep-dive summaries and flashcards every month with Nyla AI.
                  </p>
                </div>
                <div>
                  <h4
                    className="mb-2 font-serif text-[clamp(1rem,1.5vw,1.2rem)] font-bold leading-snug"
                    style={{ color: GOLD }}
                  >
                    Export Anywhere
                  </h4>
                  <p className="m-0 max-w-[32ch] font-serif text-[13px] leading-relaxed text-white/92 sm:text-[14px] md:text-[15px]">
                    Seamlessly transfer your knowledge to Word or PDF. Study
                    offline and keep your academic records organized.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Stat: satisfaction */}
          <article
            className="relative flex min-h-[148px] items-center overflow-hidden rounded-[28px] px-6 py-6 shadow-[0_14px_32px_rgba(30,27,75,0.1)] sm:min-h-[168px] sm:rounded-[32px] sm:px-7 sm:py-7"
            style={{ backgroundColor: LIME }}
          >
            <Image
              src="/spiral.svg"
              alt=""
              width={220}
              height={220}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -right-3 top-1/2 z-[1] h-auto w-[clamp(5.5rem,14vw,7.5rem)] max-w-none -translate-y-1/2 select-none sm:-right-1 md:w-[clamp(6rem,12vw,8rem)]"
              draggable={false}
            />
            <div className="relative z-[2] pr-16 sm:pr-20">
              <p className="m-0 font-serif text-[clamp(2.75rem,6vw,3.75rem)] font-extrabold leading-none tracking-[-0.04em] text-[#4F35F2]">
                98%
              </p>
              <p className="mt-2 m-0 font-serif text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#1E1B4B] sm:text-[12px]">
                Student Satisfaction
              </p>
            </div>
          </article>

          {/* Stat: support */}
          <article
            className="relative flex min-h-[148px] items-center overflow-hidden rounded-[28px] px-6 py-6 shadow-[0_14px_32px_rgba(255,45,138,0.22)] sm:min-h-[168px] sm:rounded-[32px] sm:px-7 sm:py-7"
            style={{ backgroundColor: PINK }}
          >
            <Image
              src="/learn-flower.png"
              alt=""
              width={220}
              height={220}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -right-2 top-1/2 z-[1] h-auto w-[clamp(5.5rem,14vw,7.5rem)] max-w-none -translate-y-1/2 select-none sm:right-0 md:w-[clamp(6rem,12vw,8rem)]"
              draggable={false}
            />
            <div className="relative z-[2] pr-16 sm:pr-20">
              <p className="m-0 font-serif text-[clamp(2.75rem,6vw,3.75rem)] font-extrabold leading-none tracking-[-0.04em] text-white">
                24/7
              </p>
              <p className="mt-2 m-0 font-serif text-[11px] font-extrabold uppercase tracking-[0.12em] text-white sm:text-[12px]">
                Priority Academic Support
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
