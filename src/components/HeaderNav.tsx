"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { person, routes } from "@/resources";
import styles from "./Header.module.scss";

export const HeaderNav = () => {
  const pathname = usePathname() ?? "";
  const workActive = pathname === "/work" || pathname.startsWith("/work/");
  const aboutActive = pathname === "/about";

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <Link href="/" className={styles.name} aria-current={pathname === "/" ? "page" : undefined}>
        {person.name}
      </Link>
      <div className={styles.links}>
        {routes["/work"] && (
          <Link href="/work" aria-current={workActive ? "page" : undefined}>
            Work
          </Link>
        )}
        {routes["/about"] && (
          <Link href="/about" aria-current={aboutActive ? "page" : undefined}>
            About
          </Link>
        )}
        <a href={`mailto:${person.email}`}>
          Contact <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
};
