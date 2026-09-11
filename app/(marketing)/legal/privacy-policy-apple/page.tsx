import type { Metadata } from "next";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { legalPageMetadata } from "@/lib/legal/legalPageMetadata";
import { loadLegalHtmlFromContent } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/legal/privacy-policy-apple";

export const metadata: Metadata = legalPageMetadata(
  "privacy-policy-apple.html",
  PATH,
);

const breadcrumbSchema = buildBreadcrumbSchema(
  "Privacy Policy (Apple App Store)",
  PATH,
);

export default function ApplePrivacyPolicyPage() {
  const html = loadLegalHtmlFromContent("privacy-policy-apple.html");

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
        badge="App Store · iOS"
        backHref="/"
        backLabel="← Home"
      />
    </>
  );
}
