import type { Metadata } from "next";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { websiteLegalPageMetadata } from "@/lib/legal/legalPageMetadata";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/delete-account-and-data";

export const metadata: Metadata = websiteLegalPageMetadata(
  "studiely-account-data-deletion.html",
  PATH,
  "How to delete your Studiely account and associated personal data. Operated by Skyen Systems Pty Ltd.",
);

const breadcrumbSchema = buildBreadcrumbSchema(
  "Account & Data Deletion",
  PATH,
);

export default function DeleteAccountAndDataPage() {
  const html = loadLegalHtmlFromRoot("studiely-account-data-deletion.html");

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
        badge="Website · Legal & Privacy"
        backHref="/privacy-policy"
        backLabel="← Privacy Policy"
      />
    </>
  );
}
