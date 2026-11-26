"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { activeSection } from "./aboutNavigation.mjs";
import styles from "./About.module.scss";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "experience", label: "Work Experience" },
  { id: "education", label: "Education" },
  { id: "expertise", label: "Skills" },
];

export function AboutNavigation() {
  const [active, setActive] = useState(sections[0].id);
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const positions = sections.flatMap(({ id }) => {
        const element = document.getElementById(id);
        return element ? [{ id, top: element.getBoundingClientRect().top }] : [];
      });
      setActive(activeSection(positions, Math.min(240, window.innerHeight * 0.4)));
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function navigate(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const section = document.getElementById(id);
    if (!section) return;
    event.preventDefault();
    if (menu.current) menu.current.open = false;
    window.history.pushState(null, "", "#" + id);
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  }

  function links() {
    return (
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={"#" + id}
              aria-current={active === id ? "location" : undefined}
              onClick={(event) => navigate(event, id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav className={styles.onPage} aria-label="On this page">
      <div className={styles.sideNav}>{links()}</div>
      <details ref={menu} className={styles.compactNav}>
        <summary>On this page</summary>
        {links()}
      </details>
    </nav>
  );
}
