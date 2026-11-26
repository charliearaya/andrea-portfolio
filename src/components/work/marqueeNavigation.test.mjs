import test from "node:test";
import assert from "node:assert/strict";
import { nextOffset, wrapOffset } from "./marqueeNavigation.mjs";

const positions = [0, 120, 300];

test("wraps positive and negative offsets", () => {
  assert.equal(wrapOffset(510, 400), 110);
  assert.equal(wrapOffset(-20, 400), 380);
  assert.equal(wrapOffset(5, 0), 0);
});

test("moves to neighboring slide boundaries", () => {
  assert.equal(nextOffset(40, positions, 400, 1), 120);
  assert.equal(nextOffset(120, positions, 400, 1), 300);
  assert.equal(nextOffset(120, positions, 400, -1), 0);
  assert.equal(nextOffset(200, positions, 400, -1), 120);
});

test("loops in both directions and handles empty lists", () => {
  assert.equal(nextOffset(300, positions, 400, 1), 400);
  assert.equal(nextOffset(0, positions, 400, -1), -100);
  assert.equal(nextOffset(0, [], 0, 1), 0);
});
