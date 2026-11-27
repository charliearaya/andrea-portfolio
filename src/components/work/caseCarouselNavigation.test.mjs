import assert from "node:assert/strict";
import test from "node:test";
import { nextSlide, swipeDirection } from "./caseCarouselNavigation.mjs";

test("navigation advances and stops at gallery boundaries", () => {
  assert.equal(nextSlide(0, 1, 4), 1);
  assert.equal(nextSlide(2, -1, 4), 1);
  assert.equal(nextSlide(0, -1, 4), 0);
  assert.equal(nextSlide(3, 1, 4), 3);
  assert.equal(nextSlide(0, 1, 1), 0);
  assert.equal(nextSlide(0, 1, 0), 0);
});

test("only deliberate horizontal swipes navigate", () => {
  assert.equal(swipeDirection(-60, 10), 1);
  assert.equal(swipeDirection(60, 10), -1);
  assert.equal(swipeDirection(49, 0), 0);
  assert.equal(swipeDirection(70, 80), 0);
  assert.equal(swipeDirection(50, 50), 0);
});
