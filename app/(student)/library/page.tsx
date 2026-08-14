"use client";

import { Suspense } from "react";

import { LibraryScreen } from "@/components/library/library-screen";
import { LoadingBlock } from "@/components/ui/student-ui";

export default function LibraryPage() {
  return (
    <Suspense fallback={<LoadingBlock label="Loading library…" />}>
      <LibraryScreen />
    </Suspense>
  );
}
