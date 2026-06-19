import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  serverTimestamp
} from "firebase/firestore";
import { db, auth } from "../services/firebase";

export default function DailyCheckIn({ streak, completedWorkouts, goal }) {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);

  async function loadHistory() {
    const user = auth.currentUser;
    if (!user) return;

    const historyRef = collection(db, "users", user.uid, "dailyCheckIns");
    const q = query(historyRef, orderBy("date", "desc"));
    const snap = await getDocs(q);

    const entries = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setHistory(entries);
  }

  useEffect(() => {
    loadHistory();
  }, []);

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

    loadHistory();
  }

  function statusLabel(status) {
    if (status === "completed") return "✅ Completed";
    if (status === "rest") return "😴 Rest Day";
    if (status === "missed") return "❌ Missed";
    return status;
  }

  return (
    <section className="panel">
      <h2>Daily Check-In</h2>
      <p>Did you complete your workout today?</p>

      <button onClick={() => handleCheckIn("completed")}>✅ Completed</button>
      <button onClick={() => handleCheckIn("rest")}>😴 Rest Day</button>
      <button onClick={() => handleCheckIn("missed")}>❌ Missed</button>

      {message && <p>{message}</p>}

      <h3>Check-In History</h3>

      {history.length === 0 ? (
        <p>No check-ins yet.</p>
      ) : (
        <div>
          {history.map((entry) => (
            <div key={entry.id} style={{ marginBottom: "8px" }}>
              {entry.date}: {statusLabel(entry.status)}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}