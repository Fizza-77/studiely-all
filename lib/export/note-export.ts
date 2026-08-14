import { jsPDF } from "jspdf";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
} from "docx";
import { saveAs } from "file-saver";

import type { GeneratedNote } from "@/lib/student/types";
import { parseFlashcardsFromMarkdown } from "@/lib/student/flashcard-parser";
import {
  markdownToBlocks,
  runsToPlain,
  type InlineRun,
  type MdBlock,
} from "@/lib/export/markdown-blocks";

const WATERMARK = "Studiely – AI Powered Learning";

function safeFilename(parts: string[]): string {
  return parts
    .join("_")
    .replace(/[^\w\-]+/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 80);
}

function headingLevelDocx(level: 1 | 2 | 3) {
  if (level === 1) return HeadingLevel.HEADING_1;
  if (level === 2) return HeadingLevel.HEADING_2;
  return HeadingLevel.HEADING_3;
}

function runsToDocxChildren(runs: InlineRun[], baseSize = 22): TextRun[] {
  return runs.map(
    (r) =>
      new TextRun({
        text: r.text,
        bold: r.bold === true,
        italics: r.italic === true,
        size: baseSize,
      }),
  );
}

function blocksToDocxBody(blocks: MdBlock[]): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  for (const b of blocks) {
    if (b.type === "blank") {
      paragraphs.push(new Paragraph({ text: "" }));
      continue;
    }
    if (b.type === "heading") {
      const size = b.level === 1 ? 28 : b.level === 2 ? 26 : 24;
      paragraphs.push(
        new Paragraph({
          heading: headingLevelDocx(b.level),
          children: [
            new TextRun({
              text: runsToPlain(b.runs),
              bold: true,
              size,
            }),
          ],
          spacing: { before: 200, after: 100 },
        }),
      );
      continue;
    }
    if (b.type === "listItem") {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({ text: "• ", size: 22 }),
            ...runsToDocxChildren(b.runs, 22),
          ],
          spacing: { after: 80 },
        }),
      );
      continue;
    }
    paragraphs.push(
      new Paragraph({
        children: runsToDocxChildren(b.runs, 22),
        spacing: { after: 120 },
      }),
    );
  }
  return paragraphs;
}

/**
 * Draw styled runs on one wrapped line. Returns height used.
 * Uses plain wrap then paints overlapping run slices (bold/italic).
 */
function drawPdfRuns(
  doc: jsPDF,
  runs: InlineRun[],
  opts: {
    x: number;
    y: number;
    maxWidth: number;
    fontSize: number;
    lineHeight: number;
    pageH: number;
    margin: number;
    forceBold?: boolean;
  },
): number {
  const plain = runsToPlain(runs);
  if (!plain) return 0;

  const wrapped = doc.splitTextToSize(plain, opts.maxWidth) as string[];
  let y = opts.y;
  let plainOffset = 0;

  for (let li = 0; li < wrapped.length; li++) {
    const line = wrapped[li];
    if (y > opts.pageH - opts.margin) {
      doc.addPage();
      y = opts.margin;
    }

    const lineStart = plainOffset;
    // Reconstruct approximate end: find line in remaining plain
    const remaining = plain.slice(plainOffset);
    let take = line.length;
    // splitTextToSize may collapse spaces — find best match
    if (!remaining.startsWith(line)) {
      const idx = remaining.indexOf(line.trim());
      if (idx >= 0) {
        plainOffset += idx;
      }
      take = line.trim().length || line.length;
    }

    const lineEnd = plainOffset + take;
    let x = opts.x;
    let cursor = 0;
    for (const run of runs) {
      const runStart = cursor;
      const runEnd = cursor + run.text.length;
      cursor = runEnd;
      const a = Math.max(runStart, plainOffset);
      const b = Math.min(runEnd, lineEnd);
      if (a >= b) continue;
      const slice = plain.slice(a, b);
      if (!slice) continue;
      const bold = opts.forceBold || run.bold;
      doc.setFontSize(opts.fontSize);
      doc.setFont(
        "helvetica",
        bold ? "bold" : run.italic ? "italic" : "normal",
      );
      doc.text(slice, x, y);
      x += doc.getTextWidth(slice);
    }

    plainOffset = lineEnd;
    while (plain[plainOffset] === " ") plainOffset += 1;
    y += opts.lineHeight;
  }

  return y - opts.y;
}

/** Notes PDF with markdown headings/bold rendered (not raw # / **). */
export async function exportNotePdf(note: GeneratedNote): Promise<void> {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 48;
  const maxW = pageW - margin * 2;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(note.topic || "Study notes", margin, margin);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(
    `${note.subject || "General"} · ${note.studyMode}${note.difficulty ? ` · ${note.difficulty}` : ""}`,
    margin,
    margin + 18,
  );
  doc.setTextColor(20);

  const blocks = markdownToBlocks(note.notes || "");
  let y = margin + 40;

  for (const block of blocks) {
    if (block.type === "blank") {
      y += 8;
      continue;
    }
    if (y > pageH - margin - 20) {
      doc.addPage();
      y = margin;
    }
    if (block.type === "heading") {
      const fontSize = block.level === 1 ? 15 : block.level === 2 ? 13 : 12;
      const lineHeight = fontSize + 4;
      y += 8;
      const h = drawPdfRuns(doc, block.runs, {
        x: margin,
        y,
        maxWidth: maxW,
        fontSize,
        lineHeight,
        pageH,
        margin,
        forceBold: true,
      });
      y += h + 4;
      continue;
    }
    if (block.type === "listItem") {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("•", margin, y);
      const h = drawPdfRuns(doc, block.runs, {
        x: margin + 14,
        y,
        maxWidth: maxW - 14,
        fontSize: 11,
        lineHeight: 14,
        pageH,
        margin,
      });
      y += Math.max(h, 14) + 2;
      continue;
    }
    const h = drawPdfRuns(doc, block.runs, {
      x: margin,
      y,
      maxWidth: maxW,
      fontSize: 11,
      lineHeight: 14,
      pageH,
      margin,
    });
    y += h + 4;
  }

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setTextColor(180);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(28);
    doc.text(WATERMARK, pageW / 2, pageH / 2, {
      align: "center",
      angle: -30,
    });
    doc.setTextColor(20);
  }

  doc.save(
    `${safeFilename([note.subject || "note", note.topic || "export", "Studiely"])}.pdf`,
  );
}

export async function exportNoteDocx(note: GeneratedNote): Promise<void> {
  const blocks = markdownToBlocks(note.notes || "");
  const paragraphs: Paragraph[] = [
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [
        new TextRun({
          text: note.topic || "Study notes",
          bold: true,
          size: 32,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `${note.subject || "General"} · ${note.studyMode}${note.difficulty ? ` · ${note.difficulty}` : ""}`,
          italics: true,
          size: 20,
        }),
      ],
      spacing: { after: 200 },
    }),
    ...blocksToDocxBody(blocks),
  ];

  const doc = new Document({ sections: [{ children: paragraphs }] });
  const blob = await Packer.toBlob(doc);
  saveAs(
    blob,
    `${safeFilename([note.subject || "note", note.topic || "export", "Studiely"])}.docx`,
  );
}

/** Flashcard grid PDF — no watermark (Flutter parity). */
export async function exportFlashcardsPdf(note: GeneratedNote): Promise<void> {
  const cards = parseFlashcardsFromMarkdown(note.notes);
  if (!cards?.length) {
    throw new Error("No flashcards could be parsed from this note.");
  }

  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const pw = pdf.internal.pageSize.getWidth();
  const ph = pdf.internal.pageSize.getHeight();
  const m = 36;
  const g = 12;
  const cw = (pw - m * 2 - g) / 2;
  const rh = (ph - m * 2 - g - 20) / 2;

  for (let start = 0; start < cards.length; start += 4) {
    if (start > 0) pdf.addPage();
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text(`Flashcards: ${note.topic || "Untitled"}`, m, 24);

    for (let slot = 0; slot < 4; slot++) {
      const idx = start + slot;
      if (idx >= cards.length) break;
      const col = slot % 2;
      const row = Math.floor(slot / 2);
      const x = m + col * (cw + g);
      const y = m + 20 + row * (rh + g);
      pdf.setDrawColor(160);
      pdf.rect(x, y, cw, rh);
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "bold");
      pdf.text(`Card ${idx + 1}`, x + 8, y + 16);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      const frontLines = pdf.splitTextToSize(
        `Front: ${cards[idx].front}`,
        cw - 16,
      ) as string[];
      pdf.text(frontLines, x + 8, y + 34);
      const backY = y + 34 + frontLines.length * 12 + 8;
      const backLines = pdf.splitTextToSize(
        `Back: ${cards[idx].back}`,
        cw - 16,
      ) as string[];
      pdf.text(backLines, x + 8, backY);
    }
  }

  pdf.save(
    `${safeFilename([note.subject || "flashcards", note.topic || "export", "Studiely"])}.pdf`,
  );
}

export async function exportFlashcardsDocx(note: GeneratedNote): Promise<void> {
  const cards = parseFlashcardsFromMarkdown(note.notes);
  if (!cards?.length) {
    throw new Error("No flashcards could be parsed from this note.");
  }

  const paragraphs: Paragraph[] = [
    new Paragraph({
      text: `Flashcards: ${note.topic || "Untitled"}`,
      heading: HeadingLevel.HEADING_1,
    }),
  ];

  cards.forEach((c, i) => {
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({ text: `Card ${i + 1}`, bold: true, size: 24 }),
        ],
        spacing: { before: 240 },
      }),
      new Paragraph({
        children: [new TextRun({ text: `Front: ${c.front}`, size: 22 })],
      }),
      new Paragraph({
        children: [new TextRun({ text: `Back: ${c.back}`, size: 22 })],
        spacing: { after: 120 },
      }),
    );
  });

  const document = new Document({ sections: [{ children: paragraphs }] });
  const blob = await Packer.toBlob(document);
  saveAs(
    blob,
    `${safeFilename([note.subject || "flashcards", note.topic || "export", "Studiely"])}.docx`,
  );
}

/** PNG front/back images (Flutter Flashcard_*_Front/Back.png parity). */
export async function exportFlashcardPngs(note: GeneratedNote): Promise<void> {
  const cards = parseFlashcardsFromMarkdown(note.notes);
  if (!cards?.length) {
    throw new Error("No flashcards could be parsed from this note.");
  }

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    await downloadCardPng(
      card.front,
      `Flashcard_${i + 1}_Front.png`,
      note.topic || "Flashcard",
    );
    await downloadCardPng(
      card.back,
      `Flashcard_${i + 1}_Back.png`,
      note.topic || "Flashcard",
    );
  }
}

function downloadCardPng(text: string, filename: string, title: string) {
  return new Promise<void>((resolve) => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      resolve();
      return;
    }
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#108f9a";
    ctx.lineWidth = 4;
    ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);
    ctx.fillStyle = "#0d3954";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(title.slice(0, 40), 40, 56);
    ctx.font = "28px sans-serif";
    wrapCanvasText(ctx, text, 40, 120, canvas.width - 80, 36);
    canvas.toBlob((blob) => {
      if (blob) saveAs(blob, filename);
      resolve();
    }, "image/png");
  });
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) {
  const words = text.split(/\s+/);
  let line = "";
  let yy = y;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, yy);
      line = word;
      yy += lineHeight;
      if (yy > 440) break;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, yy);
}

export async function exportNote(
  note: GeneratedNote,
  format: "pdf" | "docx" | "png",
): Promise<void> {
  const isFlashcards = note.studyMode === "Flashcards";
  if (format === "png") {
    if (!isFlashcards) {
      throw new Error("PNG export is for Flashcards notes.");
    }
    await exportFlashcardPngs(note);
    return;
  }
  if (format === "pdf") {
    if (isFlashcards) await exportFlashcardsPdf(note);
    else await exportNotePdf(note);
    return;
  }
  if (isFlashcards) await exportFlashcardsDocx(note);
  else await exportNoteDocx(note);
}
