"use client";

import { useRef } from "react";
import { LazySection, sectionLoader } from "@/components/LazySection";

const loadHowItWorks = sectionLoader(() =>
  import("@/sections/HowItWorksSection").then((m) => m.HowItWorksSection),
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

/**
 * Below-fold homepage sections only. Hero + study tools stay on the server
 * so their JS is not part of the initial client bundle.
 */
export function HomePageContent() {
  const howRef = useRef<HTMLElement>(null);
  const nylaRef = useRef<HTMLElement>(null);
  const curriculumRef = useRef<HTMLElement>(null);
  const rewardsRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const sisterRef = useRef<HTMLElement>(null);

  return (
    <>
      <div id="how-it-works">
        <LazySection
          load={loadHowItWorks}
          componentProps={{ sectionRef: howRef }}
          minHeight="36rem"
          rootMargin="600px 0px"
        />
      </div>
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
    </>
  );
}
