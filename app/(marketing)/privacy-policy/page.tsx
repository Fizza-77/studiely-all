import type { Metadata } from "next";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { websiteLegalPageMetadata } from "@/lib/legal/legalPageMetadata";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/privacy-policy";

export const metadata: Metadata = websiteLegalPageMetadata(
  "studiely-privacy-policy.html",
  PATH,
  "Privacy policy for the Studiely website at studiely.com, operated by Skyen Systems Pty Ltd.",
);

const breadcrumbSchema = buildBreadcrumbSchema("Privacy Policy", PATH);

export default function PrivacyPolicy() {
  const html = loadLegalHtmlFromRoot("studiely-privacy-policy.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Website · Legal & Privacy" />
    </>
  );
}
