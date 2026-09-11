import type { Metadata } from "next";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { websiteLegalPageMetadata } from "@/lib/legal/legalPageMetadata";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/terms-of-service";

export const metadata: Metadata = websiteLegalPageMetadata(
  "V1.4_Terms_of_Service_Studiely.html",
  PATH,
  "Terms of Service for the Studiely website, operated by Skyen Systems Pty Ltd.",
);

const breadcrumbSchema = buildBreadcrumbSchema("Terms of Service", PATH);

export default function TermsOfService() {
  const html = loadLegalHtmlFromRoot("V1.4_Terms_of_Service_Studiely.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Website · Legal & Terms" />
    </>
  );
}
