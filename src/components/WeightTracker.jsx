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
  const [progressSummary, setProgressSummary] = useState(null);
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

    if (entries.length > 0) {
      const latest = Number(entries[0].weight);
      const oldest = Number(entries[entries.length - 1].weight);
      const change = latest - oldest;

      setProgressSummary({
        starting: oldest,
        current: latest,
        change
      });
    }
  }

  useEffect(() => {
    loadWeight();
  }, []);

  async function saveWeight() {
    const user = auth.currentUser;
    if (!user) return;

    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const entryId = `${today}-${now.getTime()}`;

    await setDoc(doc(db, "users", user.uid, "profile", "weight"), {
      currentWeight,
      goalWeight,
      updatedAt: serverTimestamp()
    });

    await setDoc(doc(db, "users", user.uid, "weightHistory", entryId), {
      weight: currentWeight,
      goalWeight,
      date: today,
      createdAt: serverTimestamp()
    });

    setSavedMessage("Weight saved!");
    loadWeight();
  }

  const chartData = [...history].reverse();
  const weights = chartData.map((entry) => Number(entry.weight));
  const maxWeight = Math.max(...weights, 1);
  const minWeight = Math.min(...weights, maxWeight);

  let goalPrediction = null;

  if (chartData.length >= 2 && goalWeight) {
    const firstWeight = Number(chartData[0].weight);
    const latestWeight = Number(chartData[chartData.length - 1].weight);
    const targetWeight = Number(goalWeight);

    const weightLost = firstWeight - latestWeight;
    const remainingWeight = latestWeight - targetWeight;

if (remainingWeight > 0) {
  const weeksTracked = Math.max(chartData.length - 1, 1);
  const lossPerWeek = weightLost > 0 ? weightLost / weeksTracked : 0.5;
  const weeksToGoal = Math.ceil(remainingWeight / lossPerWeek);

  const estimatedDate = new Date();
  estimatedDate.setDate(estimatedDate.getDate() + weeksToGoal * 7);

  goalPrediction = {
    lossPerWeek: lossPerWeek.toFixed(2),
    weeksToGoal,
    date: estimatedDate.toLocaleDateString()
  };
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

      {progressSummary && (
        <div style={{ marginTop: "16px" }}>
          <h3>Weight Progress</h3>
          <p>Starting weight: {progressSummary.starting}kg</p>
          <p>Current weight: {progressSummary.current}kg</p>
          <p>
            Progress: {progressSummary.change > 0 ? "+" : ""}
            {progressSummary.change}kg
          </p>
        </div>
      )}

      {chartData.length > 1 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Progress Chart</h3>

          <div
            style={{
              display: "flex",
              alignItems: "end",
              gap: "8px",
              height: "160px",
              padding: "12px",
              background: "#f7f4ff",
              borderRadius: "16px"
            }}
          >
            {chartData.map((entry) => {
              const weight = Number(entry.weight);
              const height =
                maxWeight === minWeight
                  ? 80
                  : 40 + ((weight - minWeight) / (maxWeight - minWeight)) * 100;

              return (
                <div key={entry.id} style={{ flex: 1, textAlign: "center" }}>
                  <div
                    title={`${entry.date}: ${entry.weight}kg`}
                    style={{
                      height: `${height}px`,
                      background: "#7c3aed",
                      borderRadius: "999px 999px 0 0"
                    }}
                  />
                  <small>{entry.weight}kg</small>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {goalPrediction && (
        <div style={{ marginTop: "20px" }}>
          <h3>Goal Date Prediction</h3>
          <p>Current pace: {goalPrediction.lossPerWeek}kg/week</p>
          <p>Estimated time to goal: {goalPrediction.weeksToGoal} weeks</p>
          <p>Estimated goal date: {goalPrediction.date}</p>
        </div>
      )}

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