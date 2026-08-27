"use client";

import dynamic from "next/dynamic";

/** Client-only lazy FAB — `ssr: false` is invalid in Server Component layouts. */
export const NylaFabLazy = dynamic(
  () => import("@/components/NylaFab").then((m) => m.NylaFab),
  { ssr: false, loading: () => null },
);
