export type Flashcard = { front: string; back: string };

/**
 * Port of Flutter FlashcardParserService — tries formats in order.
 * Returns null if nothing parsed (UI shows raw markdown).
 */
export function parseFlashcardsFromMarkdown(notes: string): Flashcard[] | null {
  const lines = notes.split("\n");

  const preferred = parsePreferred(lines);
  if (preferred.length) return preferred;

  const multiline = parseMultilineFrontBack(lines);
  if (multiline.length) return multiline;

  const numbered = parseNumbered(lines);
  if (numbered.length) return numbered;

  const qa = parseQA(lines);
  if (qa.length) return qa;

  return null;
}

function parsePreferred(lines: string[]): Flashcard[] {
  const cards: Flashcard[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const pipe = trimmed.match(/^front:\s*(.+?)\s*\|\s*back:\s*(.+)$/i);
    if (pipe) {
      const front = pipe[1].trim();
      const back = pipe[2].trim();
      if (front && back) cards.push({ front, back });
      continue;
    }

    const inline = trimmed.match(/^front:\s*(.+?)\s+back:\s*(.+)$/i);
    if (inline) {
      const front = inline[1].trim();
      const back = inline[2].trim();
      if (front && back) cards.push({ front, back });
    }
  }
  return cards;
}

function parseMultilineFrontBack(lines: string[]): Flashcard[] {
  const cards: Flashcard[] = [];
  for (let i = 0; i < lines.length - 1; i++) {
    const frontMatch = lines[i].trim().match(/^front:\s*(.+)$/i);
    const backMatch = lines[i + 1].trim().match(/^back:\s*(.+)$/i);
    if (frontMatch && backMatch) {
      const front = frontMatch[1].trim();
      const back = backMatch[1].trim();
      if (front && back) {
        cards.push({ front, back });
        i += 1;
      }
    }
  }
  return cards;
}

function parseNumbered(lines: string[]): Flashcard[] {
  const cards: Flashcard[] = [];
  let currentTerm: string | null = null;
  let currentDefinition: string | null = null;

  const flush = () => {
    if (currentTerm && currentDefinition) {
      cards.push({
        front: `What is ${currentTerm}?`,
        back: currentDefinition,
      });
    }
    currentTerm = null;
    currentDefinition = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }

    const numbered = line.match(/^(\d+)[.)]\s*(.+)$/);
    if (numbered) {
      flush();
      currentTerm = numbered[2].trim();
      continue;
    }

    if (!currentTerm) continue;

    const def = line.match(/^(definition|example|description|answer):\s*(.+)$/i);
    if (def) {
      const text = def[2].trim();
      currentDefinition = currentDefinition
        ? `${currentDefinition}\n${text}`
        : text;
    } else if (line.length > 10 && !/^[A-Z][a-z]+:/.test(line)) {
      currentDefinition = currentDefinition
        ? `${currentDefinition}\n${line}`
        : line;
    }
  }
  flush();
  return cards;
}

function parseQA(lines: string[]): Flashcard[] {
  const cards: Flashcard[] = [];
  let currentQ: string | null = null;
  let currentA: string | null = null;

  const flush = () => {
    if (currentQ && currentA) cards.push({ front: currentQ, back: currentA });
    currentQ = null;
    currentA = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    const q = line.match(/^q:\s*(.+)$/i);
    if (q) {
      flush();
      currentQ = q[1].trim();
      continue;
    }
    const a = line.match(/^a:\s*(.+)$/i);
    if (a && currentQ) {
      currentA = currentA ? `${currentA}\n${a[1].trim()}` : a[1].trim();
    }
  }
  flush();
  return cards;
}
