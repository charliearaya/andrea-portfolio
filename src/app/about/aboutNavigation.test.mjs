import test from "node:test";
import assert from "node:assert/strict";
import { activeSection } from "./aboutNavigation.mjs";

test("selects the first section before scrolling", () => {
  assert.equal(activeSection([{ id: "intro", top: 300 }], 180), "intro");
});

test("selects the latest section past the threshold", () => {
  assert.equal(
    activeSection([
      { id: "intro", top: -500 },
      { id: "work", top: 180 },
      { id: "education", top: 800 },
    ], 180),
    "work",
  );
});

test("handles missing sections", () => {
  assert.equal(activeSection([], 180), "introduction");
});
