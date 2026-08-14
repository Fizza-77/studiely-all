/**
 * Lightweight markdown → structured blocks for PDF/DOCX export.
 * Client-only; strips visible `#` / `*` markers into real formatting.
 */

export type InlineRun = {
  text: string;
  bold?: boolean;
  italic?: boolean;
};

export type MdBlock =
  | { type: "heading"; level: 1 | 2 | 3; runs: InlineRun[] }
  | { type: "paragraph"; runs: InlineRun[] }
  | { type: "listItem"; runs: InlineRun[] }
  | { type: "blank" };

/** Parse inline **bold**, *italic*, __bold__, _italic_; strip `code` / links to plain text. */
export function parseInlineRuns(input: string): InlineRun[] {
  const text = input
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  const runs: InlineRun[] = [];
  const re =
    /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|___(.+?)___|__(.+?)__|_(.+?)_)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      runs.push({ text: text.slice(last, m.index) });
    }
    if (m[2] != null) {
      runs.push({ text: m[2], bold: true, italic: true });
    } else if (m[3] != null) {
      runs.push({ text: m[3], bold: true });
    } else if (m[4] != null) {
      runs.push({ text: m[4], italic: true });
    } else if (m[5] != null) {
      runs.push({ text: m[5], bold: true, italic: true });
    } else if (m[6] != null) {
      runs.push({ text: m[6], bold: true });
    } else if (m[7] != null) {
      runs.push({ text: m[7], italic: true });
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    runs.push({ text: text.slice(last) });
  }
  return runs.length ? runs : [{ text: "" }];
}

function stripHeadingMarkers(line: string): {
  level: 1 | 2 | 3 | null;
  rest: string;
} {
  const m = /^(#{1,6})\s+(.*)$/.exec(line.trim());
  if (!m) return { level: null, rest: line };
  const n = Math.min(3, m[1].length) as 1 | 2 | 3;
  return { level: n, rest: m[2] };
}

/** Whole-line bold like `**Overview**` → heading-style. */
function boldOnlyTitle(line: string): string | null {
  const t = line.trim();
  const m = /^\*\*(.+)\*\*$/.exec(t) || /^__(.+)__$/.exec(t);
  return m ? m[1] : null;
}

export function markdownToBlocks(markdown: string): MdBlock[] {
  const lines = (markdown || "").replace(/\r\n/g, "\n").split("\n");
  const blocks: MdBlock[] = [];

  for (const raw of lines) {
    const trimmed = raw.trimEnd();
    if (!trimmed.trim()) {
      blocks.push({ type: "blank" });
      continue;
    }

    const { level, rest } = stripHeadingMarkers(trimmed);
    if (level) {
      const clean = rest
        .replace(/^\*\*(.+)\*\*$/, "$1")
        .replace(/^__(.+)__$/, "$1")
        .trim();
      blocks.push({
        type: "heading",
        level,
        runs: parseInlineRuns(clean),
      });
      continue;
    }

    const list =
      /^[-*•]\s+(.+)$/.exec(trimmed.trim()) ||
      /^\d+\.\s+(.+)$/.exec(trimmed.trim());
    if (list) {
      blocks.push({ type: "listItem", runs: parseInlineRuns(list[1]) });
      continue;
    }

    const boldTitle = boldOnlyTitle(trimmed);
    if (boldTitle) {
      blocks.push({
        type: "heading",
        level: 3,
        runs: [{ text: boldTitle, bold: true }],
      });
      continue;
    }

    blocks.push({ type: "paragraph", runs: parseInlineRuns(trimmed) });
  }

  return blocks;
}

export function runsToPlain(runs: InlineRun[]): string {
  return runs.map((r) => r.text).join("");
}
