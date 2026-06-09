"use client";

import { usePathname } from "next/navigation";
import { Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, display, about, work } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const HeaderNav = () => {
  const pathname = usePathname() ?? "";

  return (
    <Row gap="s" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
      {routes["/"] && (
        <ToggleButton size="l" prefixIcon="home" href="/" selected={pathname === "/"} />
      )}
      <Line background="neutral-alpha-medium" vert maxHeight="24" />
      {routes["/about"] && (
        <>
          <Row s={{ hide: true }}>
            <ToggleButton
              size="l"
              prefixIcon="person"
              href="/about"
              label={about.label}
              className={styles["custom-toggle-button"]}
              selected={pathname === "/about"}
            />
          </Row>
          <Row hide s={{ hide: false }}>
            <ToggleButton
              size="l"
              prefixIcon="person"
              href="/about"
              className={styles["custom-toggle-button"]}
              selected={pathname === "/about"}
            />
          </Row>
        </>
      )}
      {routes["/work"] && (
        <>
          <Row s={{ hide: true }}>
            <ToggleButton
              size="l"
              prefixIcon="grid"
              href="/work"
              label={work.label}
              className={styles["custom-toggle-button"]}
              selected={pathname.startsWith("/work")}
            />
          </Row>
          <Row hide s={{ hide: false }}>
            <ToggleButton
              size="l"
              prefixIcon="grid"
              href="/work"
              className={styles["custom-toggle-button"]}
              selected={pathname.startsWith("/work")}
            />
          </Row>
        </>
      )}
      {display.themeSwitcher && (
        <>
          <Line background="neutral-alpha-medium" vert maxHeight="24" />
          <ThemeToggle />
        </>
      )}
    </Row>
  );
};
