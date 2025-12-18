export function calculateScore(
  currentScore: number,
  isCorrect: boolean
): number {
  if (isCorrect) {
    return currentScore + 1;
  }
  return currentScore;
}
