import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { loadLegalDocument } from "./loadLegalDocument";

export function LegalDocumentView({
  file,
  badge,
}: {
  file: string;
  badge?: string;
}) {
  const { html } = loadLegalDocument(file);
  return (
    <ThemedLegalDocument
      html={html}
      badge={badge}
      backHref="/privacy-policy"
      backLabel="← Privacy Policy"
    />
  );
}
