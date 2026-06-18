import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../services/firebase";

export default function WeightTracker() {
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    async function loadWeight() {
      const user = auth.currentUser;
      if (!user) return;

      const ref = doc(db, "users", user.uid, "profile", "weight");
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setCurrentWeight(snap.data().currentWeight || "");
        setGoalWeight(snap.data().goalWeight || "");
      }
    }

    loadWeight();
  }, []);

  async function saveWeight() {
    const user = auth.currentUser;
    if (!user) return;

    await setDoc(doc(db, "users", user.uid, "profile", "weight"), {
      currentWeight,
      goalWeight,
      updatedAt: serverTimestamp()
    });

    setSavedMessage("Weight saved!");
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
    </section>
  );
}