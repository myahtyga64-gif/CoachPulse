import { useState } from "react";

export default function WeeklySummary({
  goal,
  streak,
  completedWorkouts,
  currentWeight,
  goalWeight,
  checkIns
}) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateSummary() {
    setLoading(true);

    try {
      const res = await fetch("/api/weekly-summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          goal,
          streak,
          completedWorkouts,
          currentWeight,
          goalWeight,
          checkIns
        })
      });

      const data = await res.json();
      setSummary(data.summary || data.error || "Could not generate summary.");
    } catch {
      setSummary("Could not connect to weekly summary service.");
    }

    setLoading(false);
  }

  return (
    <section className="panel">
      <h2>Weekly AI Summary</h2>
      <p>Get a weekly coaching summary based on your progress.</p>

      <button onClick={generateSummary}>
        {loading ? "Creating Summary..." : "Generate Weekly Summary"}
      </button>

      {summary && (
        <div style={{ whiteSpace: "pre-wrap", marginTop: "16px" }}>
          {summary}
        </div>
      )}
    </section>
  );
}