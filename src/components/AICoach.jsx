import { useEffect, useState } from "react";

export default function AICoach({ streak, workouts }) {
  const [message, setMessage] = useState("Loading coach...");

  useEffect(() => {
    async function getAI() {
      try {
        const res = await fetch("/api/coach", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            streak,
            workouts
          })
        });

        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        setMessage("AI failed to load");
        console.error(err);
      }
    }

    getAI();
  }, [streak, workouts]);

  return (
    <div>
      <h3>🤖 AI Coach</h3>
      <p>{message}</p>
    </div>
  );
}