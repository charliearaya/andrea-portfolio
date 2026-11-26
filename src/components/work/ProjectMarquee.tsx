"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import styles from "./ProjectMarquee.module.scss";

type Cover = {
  ratio: number;
  background: string;
  inset: string;
  fit: "cover" | "contain";
  position: string;
  alt: string;
  treatment?: "eurobonus" | "travel" | "flow";
};

const covers: Record<string, Cover> = {
  "/images/projects/sas/cover_01.webp": {
    ratio: 1.65,
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
    ratio: 1.72,
    background: "#e9dcd6",
    inset: "4%",
    fit: "contain",
    position: "center",
    alt: "Exparang desktop and mobile experience",
  },
  "/images/projects/sas/cover_04.webp": {
    ratio: 0.86,
    background: "#dce3f2",
    inset: "0",
    fit: "cover",
    position: "100% center",
    alt: "SAS EuroBonus checkout on mobile",
    treatment: "eurobonus",
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

  return (
    <div className={styles.gallery}>
      <div className={styles.viewport} data-paused={paused} aria-label="Selected project imagery">
        <div className={styles.track}>
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
                    cover?.treatment === "eurobonus" ||
                    cover?.treatment === "travel" ? (
                      <div className={`${styles.composition} ${styles[cover.treatment]}`}>
                        <div className={styles.crop}>
                          <Image
                            src={cover.treatment === "flow" ? "/images/projects/flow/completion.jpg" : src}
                            alt={duplicate ? "" : cover.alt}
                            width={cover.treatment === "flow" ? 1536 : cover.treatment === "travel" ? 980 : 1200}
                            height={cover.treatment === "flow" ? 960 : cover.treatment === "travel" ? 551 : 674}
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
      <button
        type="button"
        className={styles.control}
        aria-label={paused ? "Play project carousel" : "Pause project carousel"}
        onClick={() => setPaused((value) => !value)}
      >
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}
