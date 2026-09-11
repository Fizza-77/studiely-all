import type { Metadata } from "next";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { websiteLegalPageMetadata } from "@/lib/legal/legalPageMetadata";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/disclaimer";

export const metadata: Metadata = websiteLegalPageMetadata(
  "studiely-disclaimer.html",
  PATH,
  "Disclaimer for the Studiely website, operated by Skyen Systems Pty Ltd.",
);

const breadcrumbSchema = buildBreadcrumbSchema("Disclaimer", PATH);

export default function Disclaimer() {
  const html = loadLegalHtmlFromRoot("studiely-disclaimer.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Website · Legal & Disclaimer" />
    </>
  );
}
