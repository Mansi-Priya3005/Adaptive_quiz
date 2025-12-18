export function getNextDifficulty(
  current: "easy" | "medium" | "hard",
  correct: boolean
) {
  if (correct) {
    if (current === "easy") return "medium";
    if (current === "medium") return "hard";
  } else {
    if (current === "hard") return "medium";
    if (current === "medium") return "easy";
  }
  return current;
}
