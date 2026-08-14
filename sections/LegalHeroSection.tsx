import { HOME_SHELL } from "@/lib/homeShell";

const LIME = "#E8FF2F";
const BLUE = "#4F35F2";

type LegalHeroSectionProps = {
  title: string;
  badge?: string;
  metaItems?: string[];
};

export const LegalHeroSection = ({
  title,
  badge = "Legal & Compliance",
  metaItems = [],
}: LegalHeroSectionProps) => {
  return (
    <section
      aria-labelledby="legal-hero-heading"
      className="min-w-0 overflow-x-clip bg-bg-base pb-4 pt-2 sm:pb-5 sm:pt-3 md:pb-6"
    >
      <div className={HOME_SHELL}>
        <div
          className="w-full min-w-0 rounded-[18px] px-4 py-6 text-center sm:rounded-[24px] sm:px-6 sm:py-8 md:rounded-[28px] md:px-8 md:py-9 lg:px-10 lg:py-10"
          style={{ backgroundColor: BLUE }}
        >
          <span
            className="mb-3 inline-flex max-w-full rounded-full px-3.5 py-1.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B] sm:mb-4 sm:px-4 sm:text-[11px]"
            style={{ backgroundColor: LIME }}
          >
            {badge}
          </span>

          <h1
            id="legal-hero-heading"
            className="mb-3 break-words font-hanken text-[clamp(1.45rem,3.8vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white sm:mb-4"
          >
            {title}
          </h1>

          {metaItems.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {metaItems.map((item) => (
                <span
                  key={item}
                  className="max-w-full break-words rounded-full bg-white/10 px-2.5 py-1 font-jakarta text-[10px] font-semibold text-white/85 sm:px-3 sm:py-1.5 sm:text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
