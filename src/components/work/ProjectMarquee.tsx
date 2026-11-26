"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProjectMarquee.module.scss";

export function ProjectMarquee({ images }: { images: string[] }) {
  const [paused, setPaused] = useState(false);

  return (
    <div className={styles.gallery}>
      <div
        className={styles.viewport}
        data-paused={paused}
        aria-label="Selected project imagery"
      >
        <div className={styles.track}>
          {[false, true].map((duplicate) => (
            <div
              key={String(duplicate)}
              className={styles.sequence}
              aria-hidden={duplicate || undefined}
            >
              {images.map((src, index) => (
                <div className={styles.slide} key={src}>
                  <Image
                    src={src}
                    alt={duplicate ? "" : `Selected design work ${index + 1}`}
                    fill
                    sizes="(max-width: 600px) 100vw, 760px"
                    loading="eager"
                  />
                </div>
              ))}
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
