/** Certificate ladder percents — Flutter subject_mastery_display.dart parity. */
export const CERTIFICATE_MASTERY_DISPLAY_PERCENTS = [
  10, 25, 40, 55, 70, 80, 90,
] as const;

export function certificateMasteryDisplayPercent(rawMastery: number): number {
  const r = Math.max(0, Math.min(100, Math.round(rawMastery)));
  let display = 0;
  for (const p of CERTIFICATE_MASTERY_DISPLAY_PERCENTS) {
    if (r >= p) display = p;
  }
  return display;
}

/** Human-readable mastery for dashboard-style labels. */
export function subjectMasteryPercentLabel(rawMastery: number): string {
  const r = Math.max(0, Math.min(100, Math.round(rawMastery)));
  if (r > 0 && r < 10) return "<10%";
  return `${certificateMasteryDisplayPercent(r)}%`;
}

/**
 * Short keyword for mastery labels — e.g. "Computer Science / Technology" → "Computer Science".
 */
export function shortSubjectKeyword(subject: string, maxChars = 22): string {
  let s = subject.trim();
  if (!s) return "Subject";

  // Prefer the primary name before slash / en-dash / middle-dot separators
  const split = s.split(/\s*[\/|·•–—]\s*/)[0]?.trim();
  if (split) s = split;

  // Drop trailing parenthetical codes like "(9700)"
  s = s.replace(/\s*\([^)]*\)\s*$/, "").trim() || s;

  if (s.length <= maxChars) return s;

  // Prefer cutting at a word boundary
  const sliced = s.slice(0, maxChars);
  const lastSpace = sliced.lastIndexOf(" ");
  if (lastSpace >= 10) return sliced.slice(0, lastSpace).trim();
  return sliced.trim();
}
