"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { display, person, routes } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const HeaderNav = () => {
  const pathname = usePathname() ?? "";
  const workActive = pathname === "/work" || pathname.startsWith("/work/");
  const aboutActive = pathname === "/about";

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <Link href="/" className={styles.name} aria-current={pathname === "/" ? "page" : undefined}>
        <span className={styles.avatar}>
          <Image src={person.avatar} alt="" width={96} height={96} />
        </span>
        <span className={styles.identity}>
          <span>{person.name}</span>
          <span className={styles.location}>Stockholm, Sweden</span>
        </span>
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
          Contact
        </a>
        {display.themeSwitcher && <ThemeToggle />}
      </div>
    </nav>
  );
};
