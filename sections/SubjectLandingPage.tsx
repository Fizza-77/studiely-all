import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FaqItem } from "@/components/FaqItem";
import { STUDIELY_APP } from "@/lib/appUrls";
import type { SubjectLandingContent } from "@/lib/curriculum/subject-pages";
import {
  linkifySubjectCopy,
  SUBJECT_FEATURE_HREFS,
  SUBJECT_TOOL_FEATURE_HREF,
} from "@/lib/curriculum/linkifySubjectCopy";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const NAVY = "#1E1B4B";

const LINK_ON_LIGHT =
  "font-semibold text-[#4F35F2] underline decoration-[#4F35F2]/35 underline-offset-[3px] transition-colors hover:decoration-[#4F35F2]";
const LINK_ON_DARK =
  "font-semibold text-[#E8FF2F] underline decoration-[#E8FF2F]/45 underline-offset-[3px] transition-colors hover:decoration-[#E8FF2F]";

type Props = {
  content: SubjectLandingContent;
};

export function SubjectLandingPage({ content }: Props) {
  return (
    <main className="min-h-screen overflow-x-clip bg-bg-base font-jakarta">
      <Hero content={content} />
      <Intro content={content} />
      <CoverTopics content={content} />
      <Support content={content} />
      <Tools content={content} />
      <Why content={content} />
      <Faqs content={content} />
      <Cta content={content} />
    </main>
  );
}

function Hero({ content }: Props) {
  return (
    <section className="relative overflow-x-clip bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)] pt-[clamp(0.75rem,2vw,1.25rem)]">
      <div className="wrap">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
          <Reveal className="flex flex-col items-start text-left" y={22}>
            <span
              className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-2 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B]"
              style={{ backgroundColor: LIME }}
            >
              {content.heroEyebrow}
            </span>

            <h1 className="mb-3 font-heading text-[clamp(1.85rem,4.4vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#1E1B4B] sm:mb-4">
              {content.heroTitle}{" "}
              <span style={{ color: BLUE }}>{content.heroHighlight}</span>
            </h1>

            <p className="mb-6 max-w-[38rem] font-sans text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-[#5B5A6A]">
              {linkifySubjectCopy(content.lead, { className: LINK_ON_LIGHT })}
            </p>

            <div className="flex w-full flex-col gap-3 min-[430px]:w-auto min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center sm:gap-4">
              <Link
                href={content.ctaPrimaryHref}
                className="funky-button inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_28px_rgba(79,53,242,0.35)] min-[430px]:w-auto sm:px-7"
                style={{ backgroundColor: BLUE }}
              >
                {content.ctaPrimaryLabel}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#study-tools"
                className="funky-button inline-flex w-full items-center justify-center rounded-full border-2 bg-transparent px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-[#4F35F2]/5 min-[430px]:w-auto sm:px-7"
                style={{ borderColor: BLUE, color: BLUE }}
              >
                Explore study tools
              </Link>
            </div>
          </Reveal>

          <Reveal
            className="hero-card-float relative mx-auto w-full max-w-[min(100%,460px)] lg:justify-self-end"
            delay={0.12}
            y={28}
          >
            <Image
              src="/hero-star.webp"
              alt=""
              width={180}
              height={180}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 z-[2] h-auto w-[clamp(5.5rem,12vw,8.5rem)] max-w-none select-none drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] sm:-right-10 sm:-top-12"
              draggable={false}
            />
            <Image
              src="/learn-flower.png"
              alt=""
              width={140}
              height={140}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -bottom-9 -left-9 z-[2] h-auto w-[clamp(5rem,12vw,8rem)] max-w-none sm:-bottom-11 sm:-left-11"
              draggable={false}
            />

            <div
              className="relative overflow-hidden rounded-[32px] shadow-[0_18px_48px_rgba(79,53,242,0.22)] sm:rounded-[40px]"
              style={{
                background:
                  "linear-gradient(145deg, #3F2AE8 0%, #4F35F2 48%, #7B3FF0 100%)",
              }}
            >
              <div
                className="pointer-events-none absolute -left-10 top-8 h-40 w-40 rounded-full opacity-50 blur-3xl"
                style={{ backgroundColor: PINK }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-8 bottom-6 h-36 w-36 rounded-full opacity-40 blur-3xl"
                style={{ backgroundColor: LIME }}
                aria-hidden
              />
              <div className="relative z-[1] flex flex-col items-center px-6 py-10 text-center sm:px-8 sm:py-12">
                <div className="mb-5 flex h-[clamp(8.5rem,22vw,11.5rem)] w-full max-w-[16rem] items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/notes.svg"
                    alt=""
                    width={244}
                    height={276}
                    decoding="async"
                    className="h-full w-auto max-w-full object-contain drop-shadow-[0_10px_24px_rgba(232,255,47,0.28)]"
                    draggable={false}
                  />
                </div>
                <p className="m-0 max-w-[18rem] font-jakarta text-[13px] font-semibold leading-snug text-white/90 sm:text-[14px]">
                  {linkifySubjectCopy(content.shortDescription, {
                    className: LINK_ON_DARK,
                  })}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Intro({ content }: Props) {
  return (
    <section
      aria-labelledby="subject-intro-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal y={22}>
          <article className="mx-auto max-w-3xl rounded-[28px] bg-white px-5 py-7 shadow-[0_12px_36px_rgba(30,27,75,0.08)] sm:rounded-[32px] sm:px-9 sm:py-9">
            <h2
              id="subject-intro-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3vw,2.1rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
            >
              {content.introTitle}
            </h2>
            <div className="space-y-4">
              {content.introParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="m-0 font-sans text-[15px] leading-[1.75] text-[#5B5A6A] sm:text-[16px]"
                >
                  {linkifySubjectCopy(paragraph, { className: LINK_ON_LIGHT })}
                </p>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function CoverTopics({ content }: Props) {
  return (
    <section
      aria-labelledby="subject-cover-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={20}>
          <h2
            id="subject-cover-heading"
            className="mb-3 font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            {content.coverTitle}
          </h2>
          <p className="mx-auto m-0 max-w-3xl font-sans text-[15px] leading-relaxed text-[#5B5A6A]">
            {linkifySubjectCopy(content.coverIntro, { className: LINK_ON_LIGHT })}
          </p>
        </Reveal>

        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {content.coverTopics.map((topic, i) => (
            <Reveal key={topic} delay={i * 0.05} y={20}>
              <article
                className="funky-card flex h-full items-center gap-3 rounded-[22px] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(30,27,75,0.08)] sm:rounded-[24px] sm:px-5"
                style={{
                  borderLeft: `4px solid ${i % 2 === 0 ? BLUE : PINK}`,
                }}
              >
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: i % 2 === 0 ? BLUE : PINK }}
                >
                  {i + 1}
                </span>
                <h3 className="m-0 font-jakarta text-[15px] font-extrabold text-[#1E1B4B] sm:text-[16px]">
                  {topic}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal y={18}>
          <p className="mx-auto m-0 max-w-3xl text-center font-sans text-[15px] leading-relaxed text-[#5B5A6A]">
            {linkifySubjectCopy(content.coverClosing, {
              className: LINK_ON_LIGHT,
            })}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Support({ content }: Props) {
  return (
    <section
      aria-labelledby="subject-support-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal y={24}>
          <div
            className="relative overflow-hidden rounded-[28px] px-5 py-7 sm:rounded-[36px] sm:px-10 sm:py-9"
            style={{
              background:
                "linear-gradient(125deg, #3F2AE8 0%, #4F35F2 55%, #6B3DF5 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute -left-12 top-1/3 h-48 w-48 rounded-full opacity-40 blur-3xl"
              style={{ backgroundColor: PINK }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full opacity-35 blur-3xl"
              style={{ backgroundColor: LIME }}
              aria-hidden
            />
            <div className="relative z-[1] mx-auto max-w-4xl text-center">
              <h2
                id="subject-support-heading"
                className="mb-4 font-heading text-[clamp(1.45rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em] text-white"
              >
                {content.supportTitle}
              </h2>
              <div className="space-y-4">
                {content.supportParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="m-0 font-sans text-[14px] leading-[1.75] text-white/90 sm:text-[15px]"
                  >
                    {linkifySubjectCopy(paragraph, { className: LINK_ON_DARK })}
                  </p>
                ))}
              </div>
              {content.supportRows && content.supportRows.length > 0 ? (
                <div className="mt-6 overflow-hidden rounded-[20px] bg-white/12 ring-1 ring-white/20">
                  <div className="hidden grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-0 border-b border-white/20 px-4 py-3 text-left sm:grid sm:px-5">
                    <p className="m-0 font-jakarta text-[11px] font-extrabold uppercase tracking-[0.08em] text-white/75">
                      Study need
                    </p>
                    <p className="m-0 font-jakarta text-[11px] font-extrabold uppercase tracking-[0.08em] text-white/75">
                      How{" "}
                      <Link
                        href={SUBJECT_FEATURE_HREFS.home}
                        className={LINK_ON_DARK}
                      >
                        Studiely
                      </Link>{" "}
                      supports it
                    </p>
                  </div>
                  <ul className="m-0 list-none divide-y divide-white/15 p-0">
                    {content.supportRows.map((row) => (
                      <li
                        key={row.need}
                        className="grid gap-2 px-4 py-3.5 text-left sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-4 sm:px-5"
                      >
                        <p className="m-0 font-jakarta text-[13px] font-bold text-white sm:text-[14px]">
                          {row.need}
                        </p>
                        <p className="m-0 font-sans text-[13px] leading-relaxed text-white/88 sm:text-[14px]">
                          {linkifySubjectCopy(row.support, {
                            className: LINK_ON_DARK,
                          })}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {content.supportAfterParagraphs &&
              content.supportAfterParagraphs.length > 0 ? (
                <div className="mt-5 space-y-3">
                  {content.supportAfterParagraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="m-0 font-sans text-[13px] leading-[1.7] text-white/80 sm:text-[14px]"
                    >
                      {linkifySubjectCopy(paragraph, {
                        className: LINK_ON_DARK,
                      })}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Tools({ content }: Props) {
  return (
    <section
      id="study-tools"
      aria-labelledby="subject-tools-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={20}>
          <h2
            id="subject-tools-heading"
            className="mb-2 font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            Study Tools for{" "}
            <span style={{ color: BLUE }}>This Subject</span>
          </h2>
          <p className="m-0 font-sans text-[15px] text-[#5B5A6A]">
            {linkifySubjectCopy(
              "Revision notes, flashcards, quizzes, exam focus and exam-style practice in one flow.",
              { className: LINK_ON_LIGHT },
            )}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {content.tools.map((tool, i) => {
            const inkOnAccent = tool.accent === LIME ? NAVY : "#FFFFFF";
            const toolHref = SUBJECT_TOOL_FEATURE_HREF[tool.id] ?? tool.href;
            return (
              <Reveal key={tool.id} delay={i * 0.05} y={24}>
                <article
                  className="funky-card relative flex h-full flex-col overflow-hidden rounded-[24px] bg-white p-5 shadow-[0_12px_32px_rgba(30,27,75,0.08)] sm:rounded-[28px] sm:p-6"
                  style={{ borderTop: `4px solid ${tool.accent}` }}
                >
                  <div className="mb-4 flex items-start gap-3">
                    <span
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px]"
                      style={{ backgroundColor: `${tool.accent}22` }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="h-8 w-8 object-contain"
                        draggable={false}
                      />
                    </span>
                    <h3 className="m-0 font-jakarta text-[1.05rem] font-extrabold leading-snug text-[#1E1B4B] sm:text-[1.15rem]">
                      {tool.title}
                    </h3>
                  </div>
                  <p className="mb-4 flex-1 font-sans text-[13px] leading-[1.75] text-[#5B5A6A] sm:text-[14px]">
                    {linkifySubjectCopy(tool.body, { className: LINK_ON_LIGHT })}
                  </p>
                  {tool.bullets && tool.bullets.length > 0 ? (
                    <ul className="mb-5 list-disc space-y-1.5 pl-5 font-sans text-[13px] leading-relaxed text-[#5B5A6A] sm:text-[14px]">
                      {tool.bullets.map((bullet) => (
                        <li key={bullet}>
                          {linkifySubjectCopy(bullet, {
                            className: LINK_ON_LIGHT,
                          })}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link
                    href={toolHref}
                    className="funky-button inline-flex w-fit items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold"
                    style={{
                      backgroundColor: tool.accent,
                      color: inkOnAccent,
                    }}
                  >
                    {tool.cta}
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Why({ content }: Props) {
  return (
    <section
      aria-labelledby="subject-why-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal y={22}>
          <article className="mx-auto max-w-3xl rounded-[28px] border border-[#ECEEF6] bg-white px-5 py-7 sm:rounded-[32px] sm:px-9 sm:py-9">
            <h2
              id="subject-why-heading"
              className="mb-4 font-heading text-[clamp(1.45rem,3vw,2.1rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
            >
              {content.whyTitle}
            </h2>
            <div className="space-y-4">
              {content.whyParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="m-0 font-sans text-[15px] leading-[1.75] text-[#5B5A6A] sm:text-[16px]"
                >
                  {linkifySubjectCopy(paragraph, { className: LINK_ON_LIGHT })}
                </p>
              ))}
            </div>
            {content.whyBullets && content.whyBullets.length > 0 ? (
              <ul className="mt-5 list-disc space-y-2 pl-5 font-sans text-[15px] leading-[1.75] text-[#5B5A6A] sm:text-[16px]">
                {content.whyBullets.map((bullet) => (
                  <li key={bullet}>
                    {linkifySubjectCopy(bullet, { className: LINK_ON_LIGHT })}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function Faqs({ content }: Props) {
  return (
    <section
      aria-labelledby="subject-faq-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal className="mb-6 text-center sm:mb-8" y={20}>
          <h2
            id="subject-faq-heading"
            className="mb-2 font-heading text-[clamp(1.5rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1E1B4B]"
          >
            FAQs
          </h2>
          <p className="m-0 font-sans text-[15px] text-[#5B5A6A]">
            Common questions about studying this subject with{" "}
            <Link href={SUBJECT_FEATURE_HREFS.home} className={LINK_ON_LIGHT}>
              Studiely
            </Link>
            .
          </p>
        </Reveal>

        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {content.faqs.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.04} y={16}>
              <FaqItem question={item.question} variant="marketing">
                <p>
                  {linkifySubjectCopy(item.answer, {
                    className: LINK_ON_LIGHT,
                  })}
                </p>
              </FaqItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta({ content }: Props) {
  return (
    <section
      aria-labelledby="subject-cta-heading"
      className="bg-bg-base pb-[clamp(2rem,5vw,3.25rem)]"
    >
      <div className="wrap">
        <Reveal y={28}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:gap-5">
            <article
              className="funky-card relative overflow-hidden rounded-[28px] px-6 py-8 sm:rounded-[36px] sm:px-9 sm:py-10"
              style={{ backgroundColor: BLUE }}
            >
              <Image
                src="/flower.webp"
                alt=""
                width={220}
                height={220}
                unoptimized
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -right-4 h-auto w-[clamp(7rem,18vw,11rem)] opacity-90 drop-shadow-[0_8px_20px_rgba(255,54,198,0.3)]"
                draggable={false}
              />
              <div
                className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
                style={{ backgroundColor: PINK }}
                aria-hidden
              />

              <div className="relative z-[1] max-w-[34rem]">
                <h2
                  id="subject-cta-heading"
                  className="mb-3 font-heading text-[clamp(1.4rem,2.8vw,2rem)] font-extrabold leading-tight text-white"
                >
                  {content.ctaTitle}
                </h2>
                <p className="mb-7 font-sans text-[14px] leading-[1.7] text-white/88 sm:text-[15px]">
                  {linkifySubjectCopy(content.ctaBody, {
                    className: LINK_ON_DARK,
                  })}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={content.ctaPrimaryHref}
                    className="funky-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-jakarta text-[14px] font-bold text-[#1E1B4B]"
                    style={{ backgroundColor: LIME }}
                  >
                    {content.ctaPrimaryLabel}
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href={SUBJECT_FEATURE_HREFS.home}
                    className="funky-button inline-flex items-center justify-center rounded-full border-2 border-white/70 px-6 py-3.5 font-jakarta text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    Studiely home
                  </Link>
                  <Link
                    href="/curriculum"
                    className="funky-button inline-flex items-center justify-center rounded-full border-2 border-white/70 px-6 py-3.5 font-jakarta text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    Back to pathways
                  </Link>
                </div>
              </div>
            </article>

            <article
              className="funky-card flex flex-col items-center justify-center overflow-hidden rounded-[28px] px-6 py-8 text-center sm:rounded-[36px] sm:px-7 sm:py-9"
              style={{
                backgroundColor: LIME,
                borderBottom: `5px solid ${PINK}`,
                boxShadow: "0 8px 24px rgba(255,54,198,0.22)",
              }}
            >
              <Image
                src="/FAQ-rocket.png"
                alt=""
                width={96}
                height={96}
                unoptimized
                aria-hidden
                className="funky-icon mb-4 h-16 w-16 object-contain sm:h-20 sm:w-20"
              />
              <h3 className="mb-2 font-jakarta text-[clamp(1.2rem,2vw,1.45rem)] font-extrabold text-[#1E1B4B]">
                Ready to Start?
              </h3>
              <p className="mb-5 font-jakarta text-[13px] leading-relaxed text-[#1E1B4B]/80 sm:text-[14px]">
                Create your free account and generate your first study set today.
              </p>
              <Link
                href={STUDIELY_APP.signUp}
                className="funky-button inline-flex items-center justify-center rounded-full px-6 py-3 font-jakarta text-[14px] font-bold text-white"
                style={{ backgroundColor: BLUE }}
              >
                Start free
              </Link>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
