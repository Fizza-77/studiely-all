import Link from "next/link";
import { Footer } from "@/components/Footer";
import { extractLegalDocumentParts } from "@/lib/legal/extractLegalDocumentParts";
import { HOME_SHELL } from "@/lib/homeShell";
import { LegalHeroSection } from "@/sections/LegalHeroSection";
import "@/components/legal-content.module.css";

const LIME = "#E8FF2F";

type ThemedLegalDocumentProps = {
  html: string;
  badge?: string;
  backHref?: string;
  backLabel?: string;
};

export const ThemedLegalDocument = ({
  html,
  badge,
  backHref = "/privacy-policy",
  backLabel = "← Privacy Policy",
}: ThemedLegalDocumentProps) => {
  const { title, metaItems, bodyHtml } = extractLegalDocumentParts(html);

  return (
    <div className="min-w-0 overflow-x-clip font-jakarta">
      <LegalHeroSection title={title} badge={badge} metaItems={metaItems} />
      <main className="min-w-0 bg-bg-base pb-10 sm:pb-12 md:pb-16">
        <div className={HOME_SHELL}>
          <article className="legal-document min-w-0 w-full rounded-[18px] border border-[#E8E6F0] bg-white px-4 py-5 shadow-[0_10px_28px_rgba(30,27,75,0.06)] sm:rounded-[22px] sm:px-6 sm:py-7 md:rounded-[26px] md:px-8 md:py-8 lg:px-10 lg:py-9">
            <div
              className="legal-document__body min-w-0"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />

            <div className="mt-8 border-t border-[#ECEEF6] pt-6 sm:mt-10 sm:pt-8">
              <Link
                href={backHref}
                className="funky-button inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[13px] font-bold text-[#1E1B4B] sm:w-auto sm:text-[14px]"
                style={{ backgroundColor: LIME }}
              >
                {backLabel}
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};
