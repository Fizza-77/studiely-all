import type { Metadata } from "next";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { websiteLegalPageMetadata } from "@/lib/legal/legalPageMetadata";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/cookie-policy";

export const metadata: Metadata = websiteLegalPageMetadata(
  "studiely-cookie-policy.html",
  PATH,
  "Cookie policy for the Studiely website, operated by Skyen Systems Pty Ltd.",
);

const breadcrumbSchema = buildBreadcrumbSchema("Cookie Policy", PATH);

export default function CookiePolicy() {
  const html = loadLegalHtmlFromRoot("studiely-cookie-policy.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Website · Legal & Cookies" />
    </>
  );
}
