import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { loadLegalDocument } from "./loadLegalDocument";
import { loadLegalHtmlFromRoot } from "./loadLegalHtmlFromRoot";

function metadataFromHtml(
  html: string,
  pathname: string,
  fallbackDescription?: string,
): Metadata {
  const title =
    html.match(/<title>([^<]*)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() ??
    "Studiely — Legal";
  const description =
    html
      .match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1]
      ?.trim() ?? fallbackDescription;
  const url = `${SITE_URL}${pathname}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: "Studiely",
      images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export function legalPageMetadata(file: string, pathname: string): Metadata {
  const doc = loadLegalDocument(file);
  const url = `${SITE_URL}${pathname}`;
  return {
    title: { absolute: doc.title },
    description: doc.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      title: doc.title,
      description: doc.description,
      url,
      siteName: "Studiely",
      images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely" }],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

/** Metadata for website legal HTML stored in /legal. */
export function websiteLegalPageMetadata(
  fileName: string,
  pathname: string,
  fallbackDescription: string,
): Metadata {
  return metadataFromHtml(
    loadLegalHtmlFromRoot(fileName),
    pathname,
    fallbackDescription,
  );
}
