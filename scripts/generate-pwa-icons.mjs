import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "icons");
fs.mkdirSync(outDir, { recursive: true });

const PATH_D =
  "M16.6015 10.1568C16.5573 10.2267 16.6015 10.5894 16.5682 10.7589C16.4147 11.536 15.8455 12.0432 15.009 11.9174C13.805 11.7364 14.289 10.2449 14.1813 9.43358C14.0136 8.1641 12.7619 7.45838 11.5716 7.35407C10.1072 7.22558 7.1572 7.13339 5.78352 7.47924C3.17169 8.13715 2.61402 11.5904 5.2115 12.6999C7.22265 13.5589 10.2708 12.9252 12.5588 13.5738C18.4239 15.2375 17.4728 23.2554 11.0623 23.69C7.72583 23.916 2.79195 24.0836 1.39436 20.3599C0.945081 19.163 0.677149 16.4148 2.76877 17.0566C3.65505 17.3284 3.46621 18.2535 3.56165 18.8979C3.69187 19.7779 4.3818 20.5698 5.18423 20.9357C6.34593 21.4659 9.54271 21.4201 10.8905 21.3199C12.8131 21.1773 14.193 19.9885 13.9243 17.981C13.5398 15.105 8.90183 15.6405 6.85251 15.481C3.77368 15.2408 1.58115 13.9216 1.07734 10.7704C1.04803 10.586 1.10461 10.3573 1.05348 10.2012C1.00848 10.0619 0.544893 9.9025 0.38877 9.75715C-0.428654 8.99358 0.124931 7.3985 1.28664 7.35813C1.5048 7.35068 1.6841 7.51555 1.92408 7.39782C2.00453 7.35813 2.78582 6.41961 3.04557 6.21776C3.88344 5.56791 4.9572 5.20662 6.00848 5.07881C6.2696 5.04718 6.92337 5.12724 7.07338 5.02902C7.15789 4.97388 7.37267 4.13696 7.89622 3.80865C8.006 3.74004 8.24259 3.72521 8.26095 3.70434C8.31553 3.64311 8.29371 2.18392 8.25687 2.07695C8.18733 1.87647 7.73532 1.86638 7.66855 1.30395C7.44698 -0.563631 10.0744 -0.3396 9.602 1.4311C9.48744 1.86167 9.03343 1.96729 8.97275 2.16374C8.92704 2.31174 8.92296 3.32896 8.95634 3.5025C9.00545 3.7609 9.44928 3.8113 9.6804 4.05758C9.89927 4.29031 10.1072 4.99942 10.1521 5.03105C10.313 5.14404 12.1156 5.03438 12.5145 5.06939C13.7784 5.18108 14.9217 5.76434 15.7296 6.72035C15.8536 6.86699 16.0929 7.35678 16.1591 7.39647C16.4782 7.5889 17.0024 7.23838 17.5321 7.90305C18.0107 8.50318 17.8608 9.45308 17.2329 9.89173C17.0659 10.0081 16.6186 10.1272 16.6002 10.1561L16.6015 10.1568Z";

function iconSvg(size, padRatio, rounded) {
  const pad = Math.round(size * padRatio);
  const inner = size - pad * 2;
  // Fit 18x24 mark into square inner box, letterboxed
  const scale = Math.min(inner / 18, inner / 24);
  const markW = 18 * scale;
  const markH = 24 * scale;
  const ox = pad + (inner - markW) / 2;
  const oy = pad + (inner - markH) / 2;
  const rx = rounded ? Math.round(size * 0.18) : 0;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${rx}" fill="#E8FF2F"/>
  <g transform="translate(${ox}, ${oy}) scale(${scale})">
    <path d="${PATH_D}" fill="#4F35F2"/>
  </g>
</svg>`;
}

async function writePng(size, file, padRatio, rounded) {
  const out = path.join(outDir, file);
  await sharp(Buffer.from(iconSvg(size, padRatio, rounded))).png().toFile(out);
  console.log("wrote", out);
}

await writePng(192, "pwa-192.png", 0.16, true);
await writePng(512, "pwa-512.png", 0.16, true);
await writePng(512, "pwa-maskable-512.png", 0.22, false);
