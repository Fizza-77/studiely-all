import type { Metadata } from "next";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { websiteLegalPageMetadata } from "@/lib/legal/legalPageMetadata";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/refund-payments-policy";

export const metadata: Metadata = websiteLegalPageMetadata(
  "studiely-refund-payments-policy.html",
  PATH,
  "Refund and payments policy for subscriptions purchased on studiely.com from Skyen Systems Pty Ltd.",
);

const breadcrumbSchema = buildBreadcrumbSchema("Refund & Payments Policy", PATH);

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
      <ThemedLegalDocument html={html} badge="Website · Legal & Payments" />
    </>
  );
}
