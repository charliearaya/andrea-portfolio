"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { person, routes } from "@/resources";
import styles from "./Header.module.scss";

export const HeaderNav = () => {
  const pathname = usePathname() ?? "";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const workActive = pathname === "/work" || pathname.startsWith("/work/");
  const aboutActive = pathname === "/about";

  return (
    <nav
      className={styles.nav}
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <Link onClick={() => setMenuOpen(false)} href="/" className={styles.name} aria-current={pathname === "/" ? "page" : undefined}>
        <span className={styles.avatar}>
          <Image src={person.avatar} alt="" width={96} height={96} quality={95} loading="eager" />
        </span>
        <span className={styles.identity}>
          <span>{person.name}</span>
          <span className={styles.location}>Stockholm, Sweden</span>
        </span>
      </Link>
      <button
        ref={menuButton}
        type="button"
        className={styles.menuButton}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="header-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <div
        id="header-links"
        className={styles.links}
        data-open={menuOpen}
      >
        {routes["/work"] && (
          <Link onClick={() => setMenuOpen(false)} href="/work" aria-current={workActive ? "page" : undefined}>
            Projects
          </Link>
        )}
        {routes["/about"] && (
          <Link onClick={() => setMenuOpen(false)} href="/about" aria-current={aboutActive ? "page" : undefined}>
            About me
          </Link>
        )}
        <Link onClick={() => setMenuOpen(false)} href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
          Contact
        </Link>
      </div>
    </nav>
  );
};
