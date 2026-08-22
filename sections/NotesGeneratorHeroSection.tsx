"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF2D8A";

export const NotesGeneratorHeroSection = () => {
  return (
    <section className="relative overflow-x-clip bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)] pt-[clamp(0.75rem,2vw,1.25rem)]">
      <div className="wrap">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
          <Reveal className="flex flex-col items-start text-left" y={22}>
            <span
              className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-2 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B]"
              style={{ backgroundColor: LIME }}
            >
              Notes Generator
            </span>

            <h1 className="mb-3 font-heading text-[clamp(2rem,4.6vw,3.35rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#1E1B4B] sm:mb-4">
              Notes Generator for Clear,{" "}
              <span style={{ color: BLUE }}>Exam-Ready Study Notes</span>
            </h1>

            <p className="mb-4 max-w-[36rem] font-sans text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-[#5B5A6A]">
              Turn scattered lessons, long textbook sections and messy study
              material into clean notes students can actually revise from.
            </p>

            <p className="mb-6 font-jakarta text-[12px] font-semibold leading-relaxed text-[#78788A] sm:text-[13px]">
              Built for student revision{" "}
              <span className="text-[#C9C8D4]" aria-hidden>
                •
              </span>{" "}
              Works across subjects{" "}
              <span className="text-[#C9C8D4]" aria-hidden>
                •
              </span>{" "}
              Made for Australian study pathways
            </p>

            <div className="flex w-full flex-col gap-3 min-[430px]:w-auto min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center sm:gap-4">
              <Link
                href={STUDIELY_APP.notes}
                className="funky-button inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_28px_rgba(79,53,242,0.35)] min-[430px]:w-auto sm:px-7"
                style={{ backgroundColor: BLUE }}
              >
                Create AI Notes
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#how-it-works"
                className="funky-button inline-flex w-full items-center justify-center rounded-full border-2 bg-transparent px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-[#4F35F2]/5 min-[430px]:w-auto sm:px-7"
                style={{ borderColor: BLUE, color: BLUE }}
              >
                How it works
              </Link>
            </div>
          </Reveal>

          <Reveal
            className="hero-card-float relative mx-auto w-full max-w-[min(100%,460px)] lg:justify-self-end"
            delay={0.12}
            y={28}
          >
            <Image
              src="/hero-star.png"
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
                    alt="Study notes on Studiely"
                    width={244}
                    height={276}
                    decoding="async"
                    fetchPriority="high"
                    className="h-full w-auto max-w-full object-contain drop-shadow-[0_10px_24px_rgba(232,255,47,0.28)]"
                    draggable={false}
                  />
                </div>
                <p className="m-0 max-w-[18rem] font-jakarta text-[14px] font-semibold leading-snug text-white">
                  Clean structure, key explanations, then flashcards, quizzes and
                  practice.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
