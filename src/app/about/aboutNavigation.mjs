export function activeSection(positions, threshold) {
  let active = positions[0]?.id ?? "introduction";
  for (const { id, top } of positions) {
    if (top <= threshold) active = id;
  }
  return active;
}
