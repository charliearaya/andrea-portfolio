"use client";

import { Column, Row } from "@once-ui-system/core";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { nextSlide, swipeDirection } from "./caseCarouselNavigation.mjs";
import styles from "./CaseCarousel.module.scss";

type CaseCarouselProps = {
  items: { slide: string; alt?: string }[];
  aspectRatio?: string;
  sizes?: string;
};

export function CaseCarousel({
  items,
  aspectRatio = "16/9",
  sizes = "(max-width: 720px) 100vw, 640px",
}: CaseCarouselProps) {
  const [index, setIndex] = useState(0);
  const start = useRef<{ x: number; y: number } | null>(null);
  if (!items.length) return null;

  const current = Math.min(index, items.length - 1);
  const move = (direction: number) =>
    setIndex((previous) => nextSlide(previous, direction, items.length));

  return (
    <Column fillWidth gap="12" role="region" aria-label="Project image gallery">
      <figure
        className={styles.slide}
        style={{ aspectRatio }}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          start.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchCancel={() => { start.current = null; }}
        onTouchEnd={(event) => {
          const origin = start.current;
          start.current = null;
          if (!origin) return;
          const touch = event.changedTouches[0];
          const direction = swipeDirection(touch.clientX - origin.x, touch.clientY - origin.y);
          if (direction) move(direction);
        }}
      >
        <Image
          src={items[current].slide}
          alt={items[current].alt ?? ""}
          fill
          sizes={sizes}
          className={styles.image}
        />
      </figure>
      {items.length > 1 && (
        <Row fillWidth horizontal="between" vertical="center">
          <span className={styles.counter} aria-live="polite" aria-atomic="true">
            {String(current + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <Row gap="8">
            <button type="button" className={styles.button} aria-label="Previous image" onClick={() => move(-1)} disabled={current === 0}>
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className={styles.button} aria-label="Next image" onClick={() => move(1)} disabled={current === items.length - 1}>
              <FiChevronRight aria-hidden="true" />
            </button>
          </Row>
        </Row>
      )}
    </Column>
  );
}
