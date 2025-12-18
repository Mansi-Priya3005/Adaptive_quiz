import { questions } from "@/src/lib/questions";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Adaptive Quiz</h1>

      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((opt, i) => (
            <button key={i}>{opt}</button>
          ))}
        </div>
      ))}
    </div>
  );
}
