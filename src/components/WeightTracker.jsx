import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  serverTimestamp
} from "firebase/firestore";
import { db, auth } from "../services/firebase";

export default function WeightTracker() {
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [history, setHistory] = useState([]);
  const [savedMessage, setSavedMessage] = useState("");

  async function loadWeight() {
    const user = auth.currentUser;
    if (!user) return;

    const ref = doc(db, "users", user.uid, "profile", "weight");
    const snap = await getDoc(ref);

    if (snap.exists()) {
      setCurrentWeight(snap.data().currentWeight || "");
      setGoalWeight(snap.data().goalWeight || "");
    }

    const historyRef = collection(db, "users", user.uid, "weightHistory");
    const q = query(historyRef, orderBy("date", "desc"));
    const historySnap = await getDocs(q);

    const entries = historySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setHistory(entries);
  }

  useEffect(() => {
    loadWeight();
  }, []);

  async function saveWeight() {
    const user = auth.currentUser;
    if (!user) return;

    const today = new Date().toISOString().split("T")[0];

    await setDoc(doc(db, "users", user.uid, "profile", "weight"), {
      currentWeight,
      goalWeight,
      updatedAt: serverTimestamp()
    });

    await setDoc(doc(db, "users", user.uid, "weightHistory", today), {
      weight: currentWeight,
      goalWeight,
      date: today,
      createdAt: serverTimestamp()
    });

    setSavedMessage("Weight saved!");
    loadWeight();
  }

  return (
    <section className="panel">
      <h2>Weight Tracking</h2>

      <input
        type="number"
        placeholder="Current weight (kg)"
        value={currentWeight}
        onChange={(e) => setCurrentWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Goal weight (kg)"
        value={goalWeight}
        onChange={(e) => setGoalWeight(e.target.value)}
      />

      <button onClick={saveWeight}>Save Weight</button>

      {savedMessage && <p>{savedMessage}</p>}

      <h3>Weight History</h3>

      {history.length === 0 ? (
        <p>No weight entries yet.</p>
      ) : (
        <div>
          {history.map((entry) => (
            <div key={entry.id} style={{ marginBottom: "8px" }}>
              {entry.date}: {entry.weight}kg
            </div>
          ))}
        </div>
      )}
    </section>
  );
}