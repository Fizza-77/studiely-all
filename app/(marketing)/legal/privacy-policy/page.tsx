import type { Metadata } from "next";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { legalPageMetadata } from "@/lib/legal/legalPageMetadata";
import { loadLegalHtmlFromContent } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/legal/privacy-policy";

export const metadata: Metadata = legalPageMetadata("privacy-policy.html", PATH);

const breadcrumbSchema = buildBreadcrumbSchema(
  "Privacy Policy (Google Play Store)",
  PATH,
);

export default function GooglePrivacyPolicyPage() {
  const html = loadLegalHtmlFromContent("privacy-policy.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument
        html={html}
        badge="Play Store · Android"
        backHref="/"
        backLabel="← Home"
      />
    </>
  );
}
