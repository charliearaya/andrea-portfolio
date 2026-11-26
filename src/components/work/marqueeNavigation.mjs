export function wrapOffset(offset, width) {
  return width > 0 ? ((offset % width) + width) % width : 0;
}

export function nextOffset(offset, positions, width, direction) {
  if (!positions.length || width <= 0) return 0;
  const current = wrapOffset(offset, width);
  const epsilon = 2;
  if (direction > 0) {
    return positions.find((position) => position > current + epsilon) ?? width;
  }
  return [...positions].reverse().find((position) => position < current - epsilon)
    ?? positions[positions.length - 1] - width;
}
