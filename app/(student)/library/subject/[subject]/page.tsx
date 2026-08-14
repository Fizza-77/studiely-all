"use client";

import { Suspense, use } from "react";

import { LibraryScreen } from "@/components/library/library-screen";
import { LoadingBlock } from "@/components/ui/student-ui";
import { decodeLibrarySubjectParam } from "@/lib/student/library-paths";

function LibrarySubjectInner({ subject }: { subject: string }) {
  return <LibraryScreen initialSubject={subject} />;
}

export default function LibrarySubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: raw } = use(params);
  const subject = decodeLibrarySubjectParam(raw);

  return (
    <Suspense fallback={<LoadingBlock label="Loading library…" />}>
      <LibrarySubjectInner subject={subject} />
    </Suspense>
  );
}
