"use client";

import Link from "next/link";
import {
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  Suspense,
} from "react";

import {
  isPwaBrowserOnlyPath,
  isStandalonePwa,
  openInSystemBrowser,
} from "@/lib/pwa";

type BrowserLinkProps = {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  title?: string;
  "aria-label"?: string;
  "aria-current"?: "page" | undefined;
  /** Prefer when the destination is marketing (e.g. pricing). */
  forceBrowserInPwa?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

function shouldEscapeToBrowser(href: string, forceBrowserInPwa: boolean): boolean {
  if (!forceBrowserInPwa || !isStandalonePwa()) return false;
  // Marketing / pricing only — never force app routes out of the PWA.
  return isPwaBrowserOnlyPath(href);
}

/**
 * In the installed PWA, opens marketing URLs (pricing, FAQs, …) in the
 * device system browser. App routes always navigate inside the PWA.
 */
export function BrowserLink({
  href,
  className,
  style,
  children,
  title,
  forceBrowserInPwa = true,
  onClick: onClickProp,
  ...rest
}: BrowserLinkProps) {
  const escapeToBrowser = shouldEscapeToBrowser(href, forceBrowserInPwa);

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    onClickProp?.(e);
    if (e.defaultPrevented) return;
    if (!escapeToBrowser) return;
    e.preventDefault();
    e.stopPropagation();
    openInSystemBrowser(href);
  }

  return (
    <Link
      href={href}
      className={className}
      style={style}
      title={title}
      onClick={onClick}
      target={escapeToBrowser ? "_blank" : undefined}
      rel={escapeToBrowser ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** Suspense wrapper when used next to useSearchParams trees. */
export function BrowserLinkSafe(props: BrowserLinkProps) {
  return (
    <Suspense
      fallback={
        <Link href={props.href} className={props.className} style={props.style}>
          {props.children}
        </Link>
      }
    >
      <BrowserLink {...props} />
    </Suspense>
  );
}
