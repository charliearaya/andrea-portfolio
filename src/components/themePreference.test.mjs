import assert from "node:assert/strict";
import test from "node:test";
import { normalizePreference, resolvePreference } from "./themePreference.mjs";

test("missing or invalid preference defaults to system", () => {
  for (const value of [null, undefined, "", "invalid", "system"]) {
    assert.equal(normalizePreference(value), "system");
  }
});

test("system follows the current device appearance", () => {
  assert.equal(resolvePreference("system", true), "dark");
  assert.equal(resolvePreference("system", false), "light");
});

test("explicit preference overrides the device appearance", () => {
  assert.equal(resolvePreference("light", true), "light");
  assert.equal(resolvePreference("dark", false), "dark");
});
