import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema(
  "Refund & Payments Policy",
  "/refund-payments-policy",
);

export default function RefundPaymentsPolicyPage() {
  const html = loadLegalHtmlFromRoot("studiely-refund-payments-policy.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Legal & Payments" />
    </>
  );
}
