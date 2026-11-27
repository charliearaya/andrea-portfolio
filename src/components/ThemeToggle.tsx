"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@once-ui-system/core";
import { HiOutlineSun, HiOutlineComputerDesktop, HiOutlineMoon } from "react-icons/hi2";
import { normalizePreference, resolvePreference } from "./themePreference.mjs";
import type { ThemePreference } from "./themePreference.mjs";
import styles from "./ThemeToggle.module.scss";

const preferenceKey = "portfolio-theme-preference";
const options = [
  { value: "light", label: "Light", Icon: HiOutlineSun },
  { value: "system", label: "System", Icon: HiOutlineComputerDesktop },
  { value: "dark", label: "Dark", Icon: HiOutlineMoon },
] as const;

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [preference, setPreference] = useState<ThemePreference>("system");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      setPreference(
        normalizePreference(localStorage.getItem(preferenceKey) ?? localStorage.getItem("data-theme")),
      );
    } catch {
      setPreference("system");
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      setTheme(resolvePreference(preference, media.matches));
    };
    apply();

    if (preference === "system") {
      media.addEventListener("change", apply);
      return () => media.removeEventListener("change", apply);
    }
  }, [initialized, preference, setTheme]);

  function select(value: ThemePreference) {
    try {
      localStorage.setItem(preferenceKey, value);
    } catch {
      // Appearance can still be changed when storage is unavailable.
    }
    setPreference(value);
  }

  return (
    <div className={styles.selector} role="group" aria-label="Appearance">
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={label + " appearance"}
          aria-pressed={preference === value}
          title={label}
          onClick={() => select(value)}
        >
          <Icon aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
