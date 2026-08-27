"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { LazySection, sectionLoader } from "@/components/LazySection";
import { StudySmarterSection } from "@/sections/StudySmarterSection";
import type { ReactNode } from "react";

const HowItWorksSection = dynamic(
  () =>
    import("@/sections/HowItWorksSection").then((m) => m.HowItWorksSection),
  { ssr: true },
);

const loadNyla = sectionLoader(() =>
  import("@/sections/NylaSection").then((m) => m.NylaSection),
);
const loadCurriculum = sectionLoader(() =>
  import("@/sections/SupportedCountriesSection").then(
    (m) => m.SupportedCountriesSection,
  ),
);
const loadRewards = sectionLoader(() =>
  import("@/sections/RewardsProgressSection").then(
    (m) => m.RewardsProgressSection,
  ),
);
const loadReviews = sectionLoader(() =>
  import("@/sections/ReviewsSection").then((m) => m.ReviewsSection),
);
const loadSister = sectionLoader(() =>
  import("@/sections/SisterSection").then((m) => m.SisterSection),
);

/** Hero is passed from the server page so LCP stays outside this client boundary. */
export function HomePageContent({ hero }: { hero: ReactNode }) {
  const nylaRef = useRef<HTMLElement>(null);
  const curriculumRef = useRef<HTMLElement>(null);
  const rewardsRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const sisterRef = useRef<HTMLElement>(null);

  return (
    <main role="main">
      <div className="relative bg-bg-base">
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] z-0 aspect-square w-[min(130vw,860px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8FF2F]/28 blur-[120px]"
          aria-hidden
        />
        {hero}
        <StudySmarterSection />
      </div>
      <HowItWorksSection />
      <LazySection
        load={loadNyla}
        componentProps={{ sectionRef: nylaRef }}
        minHeight="36rem"
      />
      <LazySection
        load={loadCurriculum}
        componentProps={{ sectionRef: curriculumRef }}
        minHeight="42rem"
      />
      <div className="bg-bg-base">
        <LazySection
          load={loadRewards}
          componentProps={{ sectionRef: rewardsRef }}
          minHeight="28rem"
        />
        <LazySection
          load={loadReviews}
          componentProps={{ sectionRef: reviewsRef }}
          minHeight="32rem"
        />
      </div>
      <LazySection
        load={loadSister}
        componentProps={{ sectionRef: sisterRef }}
        minHeight="24rem"
      />
    </main>
  );
}
