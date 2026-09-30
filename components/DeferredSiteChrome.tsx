"use client";

import dynamic from "next/dynamic";

const SiteInteractions = dynamic(
  () =>
    import("@/components/SiteInteractions").then((m) => m.SiteInteractions),
  { ssr: false },
);

const OfflineScreen = dynamic(
  () =>
    import("@/components/offline/OfflineScreen").then((m) => m.OfflineScreen),
  { ssr: false },
);

const PwaRegister = dynamic(
  () => import("@/components/PwaRegister").then((m) => m.PwaRegister),
  { ssr: false },
);

/** Non-critical root chrome — keep out of the first JS parse on mobile. */
export function DeferredSiteChrome() {
  return (
    <>
      <SiteInteractions />
      <PwaRegister />
      <OfflineScreen />
    </>
  );
}
