import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../services/firebase";

export default function WorkoutPlan({ goal, streak, completedWorkouts }) {
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSavedPlan() {
      const user = auth.currentUser;
      if (!user) return;

      const planRef = doc(db, "users", user.uid, "plans", "weeklyPlan");
      const planSnap = await getDoc(planRef);

      if (planSnap.exists()) {
        setPlan(planSnap.data().plan || "");
      }
    }

    loadSavedPlan();
  }, []);

  async function savePlan(newPlan) {
    const user = auth.currentUser;
    if (!user) return;

    await setDoc(doc(db, "users", user.uid, "plans", "weeklyPlan"), {
      plan: newPlan,
      goal,
      createdAt: serverTimestamp()
    });
  }

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
      const newPlan = data.plan || data.error || "Could not generate plan.";

      setPlan(newPlan);
      await savePlan(newPlan);
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