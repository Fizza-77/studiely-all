import type { Metadata } from "next";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { websiteLegalPageMetadata } from "@/lib/legal/legalPageMetadata";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/acceptable-use";

export const metadata: Metadata = websiteLegalPageMetadata(
  "studiely-acceptable-use-policy.html",
  PATH,
  "Acceptable Use Policy for the Studiely website, operated by Skyen Systems Pty Ltd.",
);

const breadcrumbSchema = buildBreadcrumbSchema("Acceptable Use Policy", PATH);

export default function AcceptableUsePolicy() {
  const html = loadLegalHtmlFromRoot("studiely-acceptable-use-policy.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Website · Legal & Policies" />
    </>
  );
}
