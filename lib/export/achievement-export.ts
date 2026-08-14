/** Capture a DOM node (medal / certificate) and download or print — not the page behind it. */

type CaptureOptions = {
  /** Transparent PNG — use for medals so there’s no white square behind the badge. */
  transparent?: boolean;
  /** html2canvas washes gold gradients; boost saturation on clone for medals. */
  enrichMedalGold?: boolean;
  scale?: number;
};

async function captureElement(el: HTMLElement, options: CaptureOptions = {}) {
  const html2canvas = (await import("html2canvas")).default;
  const {
    transparent = false,
    enrichMedalGold = false,
    scale = 3,
  } = options;

  return html2canvas(el, {
    backgroundColor: transparent ? null : "#ffffff",
    scale,
    useCORS: true,
    logging: false,
    onclone: (_doc, cloned) => {
      cloned.style.background = "transparent";

      if (!enrichMedalGold) return;

      const disc = cloned.querySelector<HTMLElement>("[data-medal-disc]");
      const face = cloned.querySelector<HTMLElement>("[data-medal-face]");
      const isLegend = disc?.dataset.medalDisc === "legend";

      if (disc) {
        disc.style.background = isLegend
          ? "linear-gradient(145deg, #FFE566 0%, #F0C020 16%, #D4A017 38%, #B8860B 62%, #8B5A00 82%, #5C3A00 100%)"
          : "linear-gradient(145deg, #FFE566 0%, #F0C020 18%, #D4A017 42%, #B8860B 68%, #7A5200 100%)";
        disc.style.filter = "saturate(1.25) contrast(1.08)";
      }

      if (face) {
        face.style.background = isLegend
          ? "radial-gradient(circle at 32% 26%, #FFF3B0 0%, #F5D060 30%, #E0B020 58%, #C9920A 100%)"
          : "radial-gradient(circle at 35% 28%, #FFF3B0 0%, #F5D060 34%, #E8B830 62%, #C9920A 100%)";
      }
    },
  });
}

/** Trim fully-transparent padding so the PNG hugs the medal. */
function trimTransparentCanvas(source: HTMLCanvasElement): HTMLCanvasElement {
  const ctx = source.getContext("2d");
  if (!ctx) return source;

  const { width, height } = source;
  const data = ctx.getImageData(0, 0, width, height).data;

  let top = height;
  let left = width;
  let right = 0;
  let bottom = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * 4 + 3];
      if (a > 8) {
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
      }
    }
  }

  if (right < left || bottom < top) return source;

  const pad = Math.round(Math.max(width, height) * 0.02);
  left = Math.max(0, left - pad);
  top = Math.max(0, top - pad);
  right = Math.min(width - 1, right + pad);
  bottom = Math.min(height - 1, bottom + pad);

  const tw = right - left + 1;
  const th = bottom - top + 1;
  const out = document.createElement("canvas");
  out.width = tw;
  out.height = th;
  const outCtx = out.getContext("2d");
  if (!outCtx) return source;
  outCtx.drawImage(source, left, top, tw, th, 0, 0, tw, th);
  return out;
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** Transparent PNG of just the medal (no white square). */
export async function downloadElementAsPng(
  el: HTMLElement,
  filename: string,
  options: CaptureOptions = {},
) {
  const raw = await captureElement(el, {
    transparent: true,
    enrichMedalGold: true,
    scale: 3,
    ...options,
  });
  const canvas = options.transparent === false ? raw : trimTransparentCanvas(raw);

  await new Promise<void>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Could not create PNG"));
        return;
      }
      triggerDownload(
        blob,
        filename.endsWith(".png") ? filename : `${filename}.png`,
      );
      resolve();
    }, "image/png");
  });
}

export async function downloadElementAsPdf(
  el: HTMLElement,
  filename: string,
  options: CaptureOptions = {},
) {
  const { jsPDF } = await import("jspdf");

  const canvas = await captureElement(el, {
    transparent: false,
    enrichMedalGold: options.enrichMedalGold ?? false,
    scale: options.scale ?? 3,
  });

  const img = canvas.toDataURL("image/png");
  const w = canvas.width;
  const h = canvas.height;

  const maxSideMm = 160;
  const ratio = w / h;
  const pageW = ratio >= 1 ? maxSideMm : maxSideMm * ratio;
  const pageH = ratio >= 1 ? maxSideMm / ratio : maxSideMm;

  const pdf = new jsPDF({
    orientation: pageW >= pageH ? "landscape" : "portrait",
    unit: "mm",
    format: [pageW, pageH],
  });
  pdf.addImage(img, "PNG", 0, 0, pageW, pageH);
  pdf.save(filename.endsWith(".pdf") ? filename : `${filename}.pdf`);
}

export async function printElement(el: HTMLElement, enrichMedalGold = false) {
  const canvas = await captureElement(el, {
    transparent: false,
    enrichMedalGold,
    scale: 2,
  });

  const dataUrl = canvas.toDataURL("image/png");
  const win = window.open("", "_blank", "noopener,noreferrer");
  if (!win) {
    throw new Error("Popup blocked");
  }

  win.document.write(`<!doctype html>
<html>
  <head>
    <title>Print</title>
    <style>
      html, body { margin: 0; padding: 0; background: #fff; }
      img { display: block; max-width: 100%; margin: 24px auto; }
      @media print {
        img { max-width: 100%; page-break-inside: avoid; }
      }
    </style>
  </head>
  <body>
    <img src="${dataUrl}" alt="Achievement" />
  </body>
</html>`);
  win.document.close();

  await new Promise<void>((resolve) => {
    const img = win.document.querySelector("img");
    if (!img) {
      resolve();
      return;
    }
    if (img.complete) {
      resolve();
      return;
    }
    img.onload = () => resolve();
    img.onerror = () => resolve();
  });

  win.focus();
  win.print();
}
