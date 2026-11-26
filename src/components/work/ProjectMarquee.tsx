"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { HiChevronLeft, HiChevronRight, HiPause, HiPlay } from "react-icons/hi2";
import { nextOffset, wrapOffset } from "./marqueeNavigation.mjs";
import styles from "./ProjectMarquee.module.scss";

type Cover = {
  ratio: number;
  background: string;
  inset: string;
  fit: "cover" | "contain";
  position: string;
  alt: string;
  treatment?: "travel" | "flow";
};

const covers: Record<string, Cover> = {
  "/images/projects/sas/cover_01.webp": {
    ratio: 1.30,
    background: "#e9edf8",
    inset: "0",
    fit: "cover",
    position: "center",
    alt: "SAS Blueprint design system",
  },
  "/images/projects/flow/entry.jpg": {
    ratio: 0.75,
    background: "#e7edcc",
    inset: "0",
    fit: "contain",
    position: "center",
    alt: "Flow AI design assistant mobile interface",
    treatment: "flow",
  },
  "/images/projects/youse/cover_01.webp": {
    ratio: 0.9,
    background: "#eeddd5",
    inset: "0",
    fit: "cover",
    position: "74% center",
    alt: "Youse mobile experience",
  },
  "/images/projects/exparang/cover_02.webp": {
    ratio: 1.45,
    background: "#f0ece9",
    inset: "0",
    fit: "cover",
    position: "center",
    alt: "Exparang desktop and mobile experience",
  },
  "/images/eurobonus.jpg": {
    ratio: 824 / 1102,
    background: "#2034ce",
    inset: "0",
    fit: "cover",
    position: "center",
    alt: "SAS EuroBonus checkout on mobile",
  },
  "/images/projects/float/cover_03.webp": {
    ratio: 1.48,
    background: "#e7dfee",
    inset: "8%",
    fit: "contain",
    position: "center",
    alt: "Float funding platform",
  },
  "/images/projects/sas/image_06.webp": {
    ratio: 1.68,
    background: "#e8edf3",
    inset: "5%",
    fit: "contain",
    position: "center",
    alt: "SAS Travel Extras experience",
    treatment: "travel",
  },
  "/images/projects/mcm/cover_01.webp": {
    ratio: 1.38,
    background: "#e7e5e0",
    inset: "0",
    fit: "cover",
    position: "65% center",
    alt: "Monitor Capital Markets website",
  },
  "/images/projects/sas/image_04.webp": {
    ratio: 1.05,
    background: "#e0e3e8",
    inset: "0",
    fit: "cover",
    position: "center",
    alt: "SAS onboard entertainment",
  },
};

export function ProjectMarquee({ images }: { images: string[] }) {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const target = useRef<number | null>(null);
  const hovered = useRef(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    let frame = 0;
    let previous = 0;

    const tick = (now: number) => {
      const track = trackRef.current;
      const sequence = track?.firstElementChild;
      const width = sequence?.getBoundingClientRect().width ?? 0;
      const elapsed = previous ? Math.min(now - previous, 50) : 0;
      previous = now;

      if (track && width > 0) {
        if (target.current !== null) {
          const distance = target.current - offset.current;
          if (reducedMotion || Math.abs(distance) < 1) {
            offset.current = wrapOffset(target.current, width);
            target.current = null;
          } else {
            offset.current += distance * (1 - Math.exp(-elapsed / 85));
          }
        } else if (!paused && !reducedMotion && !hovered.current) {
          offset.current = wrapOffset(offset.current + (width * elapsed) / 105000, width);
        }

        track.style.transform = `translate3d(${-wrapOffset(offset.current, width)}px, 0, 0)`;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, reducedMotion]);

  function step(direction: number) {
    const sequence = trackRef.current?.firstElementChild;
    if (!sequence) return;
    const width = sequence.getBoundingClientRect().width;
    const left = sequence.getBoundingClientRect().left;
    const positions = Array.from(sequence.children, (slide) => slide.getBoundingClientRect().left - left);
    const current = wrapOffset(target.current ?? offset.current, width);
    offset.current = wrapOffset(offset.current, width);
    const destination = nextOffset(current, positions, width, direction);
    // Follow the requested direction even when crossing the loop boundary.
    target.current = direction > 0 && destination < offset.current
      ? destination + width
      : direction < 0 && destination > offset.current
        ? destination - width
        : destination;
    setPaused(true);
  }

  return (
    <div className={styles.gallery}>
      <div
        className={styles.viewport}
        aria-label="Selected project imagery"
        onMouseEnter={() => { hovered.current = true; }}
        onMouseLeave={() => { hovered.current = false; }}
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          touchStart.current = null;
          if (Math.abs(distance) > 40) step(distance < 0 ? 1 : -1);
        }}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        <div className={styles.track} ref={trackRef}>
          {[false, true].map((duplicate) => (
            <div
              key={String(duplicate)}
              className={styles.sequence}
              aria-hidden={duplicate || undefined}
            >
              {images.map((src) => {
                const cover = covers[src];
                return (
                  <div
                    className={styles.slide}
                    key={src}
                    style={{
                      "--cover-ratio": cover?.ratio ?? 1.6,
                      "--cover-background": cover?.background ?? "#efefef",
                      "--cover-inset": cover?.inset ?? "0",
                    } as CSSProperties}
                  >
                    {cover?.treatment === "flow" ||
                    cover?.treatment === "travel" ? (
                      <div className={`${styles.composition} ${styles[cover.treatment]}`}>
                        <div className={styles.crop}>
                          <Image
                            src={cover.treatment === "flow" ? "/images/projects/flow/completion.jpg" : src}
                            alt={duplicate ? "" : cover.alt}
                            width={cover.treatment === "flow" ? 1536 : 980}
                            height={cover.treatment === "flow" ? 960 : 551}
                            quality={95}
                            loading="eager"
                          />
                        </div>
                      </div>
                    ) : (
                    <div className={styles.artwork}>
                      <Image
                        src={src}
                        alt={duplicate ? "" : (cover?.alt ?? "Selected design work")}
                        fill
                        sizes="(max-width: 600px) 100vw, 760px"
                        quality={95}
                        loading="eager"
                        style={{
                          objectFit: cover?.fit ?? "contain",
                          objectPosition: cover?.position ?? "center",
                        }}
                      />
                    </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls} role="group" aria-label="Carousel controls">
        <button type="button" className={styles.control} aria-label="Previous project image" onClick={() => step(-1)}>
          <HiChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className={styles.control}
          aria-label={paused || reducedMotion ? "Play project carousel" : "Pause project carousel"}
          disabled={reducedMotion}
          onClick={() => setPaused((value) => !value)}
        >
          {paused || reducedMotion ? <HiPlay aria-hidden="true" /> : <HiPause aria-hidden="true" />}
        </button>
        <button type="button" className={styles.control} aria-label="Next project image" onClick={() => step(1)}>
          <HiChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
