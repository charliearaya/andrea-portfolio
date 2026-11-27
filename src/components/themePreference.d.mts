export type ThemePreference = "light" | "system" | "dark";
export function normalizePreference(value: unknown): ThemePreference;
export function resolvePreference(
  preference: unknown,
  prefersDark: boolean,
): "light" | "dark";
