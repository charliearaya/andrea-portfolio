export function normalizePreference(value) {
  return value === "light" || value === "dark" ? value : "system";
}

export function resolvePreference(preference, prefersDark) {
  const normalized = normalizePreference(preference);
  return normalized === "system" ? (prefersDark ? "dark" : "light") : normalized;
}
