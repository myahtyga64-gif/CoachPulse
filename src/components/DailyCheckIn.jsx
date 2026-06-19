import { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../services/firebase";

export default function DailyCheckIn({ streak, completedWorkouts, goal }) {
  const [message, setMessage] = useState("");

  async function handleCheckIn(status) {
    const user = auth.currentUser;
    if (!user) return;

    const today = new Date().toISOString().split("T")[0];

    await setDoc(doc(db, "users", user.uid, "dailyCheckIns", today), {
      status,
      goal,
      date: today,
      createdAt: serverTimestamp()
    });

    if (status === "completed") {
      setMessage(`Great job! You stayed on track with your ${goal} goal.`);
    }

    if (status === "rest") {
      setMessage("Rest days count too. Recovery helps you come back stronger.");
    }

    if (status === "missed") {
      setMessage("No worries. One missed day does not ruin progress. Reset tomorrow.");
    }
  }

  return (
    <section className="panel">
      <h2>Daily Check-In</h2>
      <p>Did you complete your workout today?</p>

      <button onClick={() => handleCheckIn("completed")}>
        ✅ Completed
      </button>

      <button onClick={() => handleCheckIn("rest")}>
        😴 Rest Day
      </button>

      <button onClick={() => handleCheckIn("missed")}>
        ❌ Missed
      </button>

      {message && <p>{message}</p>}
    </section>
  );
}