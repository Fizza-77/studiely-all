/** Shared horizontal shell for navbar + marketing heroes.
 * Grows with the viewport on large desktops (less empty side gutter).
 */
export const HOME_SHELL =
  "mx-auto w-full max-w-[min(100%,2400px)] px-2.5 sm:px-4 md:px-[clamp(1rem,2.2vw,2.5rem)] xl:px-[clamp(1.5rem,3vw,3.5rem)] 2xl:px-[clamp(2rem,3.5vw,4.5rem)]";

/** Student page content width — keep in sync with AppShell. */
export const STUDENT_CONTENT_SHELL =
  "mx-auto w-full max-w-[min(100%,2400px)]";

/** Grid for the 4 homepage tool cards — keep in sync with card width + band inset. */
export const HOME_TOOLS_GRID =
  "relative mx-auto grid w-full max-w-full grid-cols-2 gap-2 sm:gap-2.5 lg:grid-cols-4 lg:gap-2.5 xl:gap-3";

/** Card width inside each tools-grid column (centered with mx-auto). */
export const HOME_TOOLS_CARD =
  "mx-auto block w-[94%] sm:w-[92%] lg:w-[90%]";

/**
 * Horizontal inset so a full-width band lines up with the outer edges of the
 * first and last tool cards (accounts for card % width + grid gaps per breakpoint).
 */
export const HOME_TOOLS_BAND_INSET =
  "mx-[calc((100%-0.5rem)/2*0.03)] sm:mx-[calc((100%-0.625rem)/2*0.04)] lg:mx-[calc((100%-1.875rem)/4*0.05)] xl:mx-[calc((100%-2.25rem)/4*0.05)]";
