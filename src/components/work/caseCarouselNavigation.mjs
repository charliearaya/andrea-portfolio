export function nextSlide(index, direction, count) {
  return Math.max(0, Math.min(count - 1, index + direction));
}

export function swipeDirection(deltaX, deltaY) {
  if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return 0;
  return deltaX < 0 ? 1 : -1;
}
