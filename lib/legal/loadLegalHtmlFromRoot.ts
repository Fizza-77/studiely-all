import fs from "fs";
import path from "path";

export function loadLegalHtmlFromRoot(fileName: string) {
  const filePath = path.join(process.cwd(), "legal", fileName);
  return fs.readFileSync(filePath, "utf-8");
}

export function loadLegalHtmlFromContent(fileName: string) {
  const filePath = path.join(process.cwd(), "content", "legal", fileName);
  return fs.readFileSync(filePath, "utf-8");
}
