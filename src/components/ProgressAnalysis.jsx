import { useState } from "react";

export default function ProgressAnalysis({
  currentWeight,
  goalWeight,
  streak,
  completedWorkouts
}) {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeProgress() {
    setLoading(true);

    try {
      const res = await fetch("/api/progress-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          currentWeight,
          goalWeight,
          streak,
          completedWorkouts
        })
      });

      const data = await res.json();

      setAnalysis(
        data.analysis ||
        data.error ||
        "Could not analyze progress."
      );
    } catch {
      setAnalysis("Could not connect to analysis service.");
    }

    setLoading(false);
  }

  return (
    <section className="panel">
      <h2>AI Progress Analysis</h2>

      <button onClick={analyzeProgress}>
        {loading ? "Analyzing..." : "Analyze My Progress"}
      </button>

      {analysis && (
        <div style={{ marginTop: "16px", whiteSpace: "pre-wrap" }}>
          {analysis}
        </div>
      )}
    </section>
  );
}