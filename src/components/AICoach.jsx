import { useState } from "react";

export default function AICoach({ streak, completedWorkouts }) {
  const [messages, setMessages] = useState([
    {
      role: "coach",
      text: "Hi, I’m your CoachPulse AI coach. Tell me how your workout went today.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          streak,
          workouts: completedWorkouts,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "coach",
          text: data.message || "I’m here with you. Let’s keep going.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "coach",
          text: "Sorry, I couldn’t connect to your coach right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="panel">
      <h2>AI Coach</h2>

      <div className="chat">
        {messages.map((message, index) => (
          <div key={index} className={`bubble ${message.role}`}>
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