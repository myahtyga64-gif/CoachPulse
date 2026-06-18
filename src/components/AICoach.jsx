import { useEffect, useState } from "react";
import { db, auth } from "../services/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";

export default function AICoach({ streak, completedWorkouts, goal }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const messagesRef = collection(db, "users", user.uid, "coachMessages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const savedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setMessages(savedMessages);
    });

    return () => unsubscribe();
  }, []);

  async function saveMessage(role, text) {
    const user = auth.currentUser;
    if (!user) return;

    await addDoc(collection(db, "users", user.uid, "coachMessages"), {
      role,
      text,
      createdAt: serverTimestamp()
    });
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");
    setLoading(true);

    await saveMessage("user", userText);

    try {
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
       body: JSON.stringify({
  message: userText,
  streak,
  workouts: completedWorkouts,
  goal
})
      });

      const data = await res.json();

      await saveMessage(
        "coach",
        data.message || "I’m here with you. Let’s keep going."
      );
    } catch (error) {
      await saveMessage(
        "coach",
        "Sorry, I couldn’t connect to your coach right now."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="panel">
      <h2>AI Coach</h2>

      <div className="chat">
        {messages.length === 0 && (
          <div className="bubble coach">
            Hi, I’m your CoachPulse AI coach. Tell me how your workout went today.
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id} className={`bubble ${message.role}`}>
            {message.text}
          </div>
        ))}

        {loading && <div className="bubble coach">Thinking...</div>}
      </div>

      <div className="chat-input">
        <input
          value={input}
          placeholder="Ask your coach..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage}>Send</button>
      </div>
    </section>
  );
}