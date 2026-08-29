"use client";

import Image from "next/image";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const GOLD = "#F5A623";
const NAVY = "#1E1B4B";
const LINK = "#2563EB";

/** Pink edge shows on hover for all sister platform cards. */
const CARD_HOVER_BORDER =
  "border-b-[5px] border-r-[5px] border-transparent transition-[border-color] duration-200 ease-out hover:border-[#FF79B0]";

const ReadMoreArrow = () => (
  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
    <path
      d="M4 12 12 4M12 4H6M12 4v6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ECOSYSTEM_CARDS = [
  {
    name: "Make My Lesson",
    titleSuffix: "For Teachers",
    badge: "AI-POWERED LESSON PLANNING",
    description:
      "Generates complete, curriculum-aligned teaching materials from a single topic — lesson plans, presentations, activities and assessments.",
    href: "https://makemylesson.ai",
    logo: "/logo-makemylesson.png",
    logoFit: "cover" as const,
    logoBg: BLUE,
    logoSizeClass: "h-14 w-14 sm:h-[3.75rem] sm:w-[3.75rem]",
    edgeColor: LIME,
    badgeBg: LIME,
    badgeColor: BLUE,
  },
  {
    name: "Linguatude",
    titleSuffix: "For English Test Preparation",
    badge: "IELTS, TOEFL, PTE AND CAMBRIDGE",
    description:
      "English test preparation for learners pursuing university, immigration or career goals.",
    href: "https://linguatude.com",
    logo: "/lingua%20(circle).png",
    logoFit: "contain" as const,
    logoBg: "transparent",
    logoSizeClass: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
    edgeColor: PINK,
    badgeBg: "#C91890",
    badgeColor: "#FFFFFF",
  },
  {
    name: "Worksheeta",
    titleSuffix: "For Teachers",
    badge: "AI-POWERED WORKSHEETS",
    description:
      "Create differentiated, ready-to-print worksheets and answer keys from a single topic.",
    href: "https://worksheeta.com",
    logo: "/worksheeta.jpeg",
    logoFit: "contain" as const,
    logoBg: "transparent",
    logoSizeClass: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
    edgeColor: GOLD,
    badgeBg: GOLD,
    badgeColor: NAVY,
  },
] as const;

interface SisterSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const SisterSection = ({ sectionRef }: SisterSectionProps) => (
  <section ref={sectionRef} className="bg-bg-base pt-[clamp(1rem,2vw,1.5rem)]">
    <div
      className="px-4 py-7 text-center sm:px-6 sm:py-8"
      style={{ backgroundColor: LIME }}
    >
      <h2
        className="mx-auto mb-3 max-w-[900px] font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.02em]"
        style={{ color: BLUE }}
      >
        Part of a Wider EdTech Family
      </h2>
      <p
        className="mx-auto w-full max-w-[22rem] text-center font-sans text-[clamp(0.8rem,0.65rem+0.5vw,1.1rem)] leading-snug sm:max-w-none sm:whitespace-nowrap"
        style={{ color: BLUE }}
      >
        Studiely is one of four platforms built by Skyen Solutions to support
        learning at every stage.
      </p>
    </div>

    <div className="wrap py-[clamp(1.25rem,2.5vw,1.75rem)]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {ECOSYSTEM_CARDS.map((card) => (
          <article
            key={card.name}
            className={`flex flex-col rounded-[28px] border-b-[5px] bg-white px-7 py-8 shadow-[0_14px_32px_rgba(30,27,75,0.1)] sm:px-8 sm:py-9 ${CARD_HOVER_BORDER}`}
            style={{ borderColor: card.edgeColor }}
          >
            <div className="mb-4 flex items-center gap-3 sm:gap-3.5">
              <span
                className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full ${card.logoSizeClass}`}
                style={{
                  backgroundColor:
                    card.logoBg === "transparent" ? undefined : card.logoBg,
                }}
              >
                <Image
                  src={card.logo}
                  alt=""
                  width={60}
                  height={60}
                  unoptimized
                  className={`h-full w-full ${
                    card.logoFit === "contain" ? "object-contain" : "object-cover"
                  }`}
                  aria-hidden
                />
              </span>

              <h3 className="min-w-0 font-jakarta font-extrabold leading-snug">
                <span className="text-[clamp(0.95rem,1.4vw,1.2rem)] text-[#1E1B4B]">
                  {card.name}
                </span>
                <span className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-bold text-[#3D3D4A]">
                  {" "}
                  — {card.titleSuffix}
                </span>
              </h3>
            </div>

            <span
              className="mb-4 inline-flex w-fit rounded-full px-3.5 py-1.5 font-heading text-[9px] font-extrabold uppercase tracking-[0.1em] sm:text-[10px]"
              style={{
                backgroundColor: card.badgeBg,
                color: card.badgeColor,
              }}
            >
              {card.badge}
            </span>

            <p className="mb-3 font-sans text-[14px] leading-relaxed text-[#5B5A6A] sm:mb-4 sm:text-[15px]">
              {card.description}
            </p>

            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-end font-sans text-[15px] font-semibold transition-opacity hover:opacity-80"
              style={{ color: LINK }}
            >
              Read More
              <ReadMoreArrow />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
