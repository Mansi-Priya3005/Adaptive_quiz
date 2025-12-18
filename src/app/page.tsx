"use client";

import { useState } from "react";
import { questions } from "@/src/lib/questions";
import { calculateScore } from "@/src/lib/score";
import { getNextDifficulty } from "@/src/lib/adaptive";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState<
    "easy" | "medium" | "hard"
  >("medium");

  const currentQuestion = questions[index];

  function handleAnswer(optionIndex: number) {
    const isCorrect = optionIndex === currentQuestion.correct;

    setScore((prev) => calculateScore(prev, isCorrect));
    setDifficulty((prev) => getNextDifficulty(prev, isCorrect));
    setIndex((prev) => prev + 1);
  }

  if (index >= questions.length) {
    return <h2>Your Score: {score}</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Adaptive Quiz</h1>
      <p>Score: {score}</p>
      <p>Difficulty: {difficulty}</p>

      <p>{currentQuestion.question}</p>

      {currentQuestion.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(i)}
          style={{ display: "block", margin: "8px 0" }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
