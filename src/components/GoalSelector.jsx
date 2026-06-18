import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../services/firebase";

const goals = [
  "Lose Weight",
  "Build Muscle",
  "Improve Fitness",
  "Run a 5K",
  "Stay Consistent"
];

export default function GoalSelector({ currentGoal, onGoalUpdated }) {
  const [selectedGoal, setSelectedGoal] = useState(currentGoal || "Get Fit");

  async function saveGoal() {
    const user = auth.currentUser;
    if (!user) return;

    await setDoc(
      doc(db, "users", user.uid),
      { goal: selectedGoal },
      { merge: true }
    );

    onGoalUpdated(selectedGoal);
  }

  return (
    <section className="panel">
      <h2>Your Goal</h2>

      <select
        value={selectedGoal}
        onChange={(e) => setSelectedGoal(e.target.value)}
      >
        {goals.map((goal) => (
          <option key={goal} value={goal}>
            {goal}
          </option>
        ))}
      </select>

      <button onClick={saveGoal}>Save Goal</button>
    </section>
  );
}