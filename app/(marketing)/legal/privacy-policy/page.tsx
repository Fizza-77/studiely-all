import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { loadLegalHtmlFromContent } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema(
  "Privacy Policy",
  "/legal/privacy-policy",
);

export default function LegalPrivacyPolicyPage() {
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
        badge="Legal & Privacy"
        backHref="/legal/privacy-policy"
        backLabel="Privacy Policy"
      />
    </>
  );
}
