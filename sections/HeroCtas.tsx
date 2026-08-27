"use client";

import { STUDIELY_APP } from "@/lib/appUrls";

export function HeroCtas() {
  return (
    <div className="flex w-full flex-nowrap items-center gap-2 sm:w-auto sm:gap-4">
      <button
        type="button"
        onClick={() => window.open(STUDIELY_APP.signUp, "_blank")}
        className="funky-button inline-flex min-w-0 flex-1 items-center justify-center rounded-full bg-[#E8FF2F] px-3 py-2.5 text-[clamp(0.75rem,0.65rem+0.4vw,1.05rem)] font-bold text-[#4F35F2] shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:flex-none sm:px-7 sm:py-3"
      >
        Start Studying Free
      </button>
      <button
        type="button"
        onClick={() =>
          document
            .getElementById("how-it-works")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="funky-button inline-flex min-w-0 flex-1 items-center justify-center rounded-full border border-white/45 bg-transparent px-3 py-2.5 text-[clamp(0.75rem,0.65rem+0.4vw,1.05rem)] font-semibold text-white transition-colors hover:bg-white/10 sm:flex-none sm:px-7 sm:py-3"
      >
        See How It Works
      </button>
    </div>
  );
}
