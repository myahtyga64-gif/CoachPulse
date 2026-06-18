import { useState } from "react";

export default function WorkoutPlan({ goal, streak, completedWorkouts }) {
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  async function generatePlan() {
    setLoading(true);

    try {
      const res = await fetch("/api/workout-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          goal,
          streak,
          completedWorkouts
        })
      });

      const data = await res.json();
      setPlan(data.plan || data.error || "Could not generate plan.");
    } catch (error) {
      setPlan("Could not connect to workout planner.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="panel">
      <h2>Weekly Workout Plan</h2>
      <p>Generate a plan based on your goal and progress.</p>

      <button onClick={generatePlan}>
        {loading ? "Creating Plan..." : "Generate My Weekly Plan"}
      </button>

      {plan && (
        <div style={{ whiteSpace: "pre-wrap", marginTop: "16px" }}>
          {plan}
        </div>
      )}
    </section>
  );
}