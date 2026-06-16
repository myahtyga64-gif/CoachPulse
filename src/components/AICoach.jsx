import React, { useState } from 'react';

function localCoachReply(message, streak, completedWorkouts) {
  const lower = message.toLowerCase();

  if (lower.includes('miss') || lower.includes('tired') || lower.includes('busy')) {
    return `No shame. Keep it small: do 10 minutes today. Your current streak is ${streak}, and consistency matters more than perfection.`;
  }

  if (lower.includes('completed') || lower.includes('done')) {
    return `Great job. That is ${completedWorkouts} workout(s) logged. Lock in the habit and make tomorrow easy.`;
  }

  return `I’m with you. Choose the smallest workout you can do today and start now. Even 10 minutes counts.`;
}

export default function AICoach({ streak, completedWorkouts }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Tell me how today went. Completed, missed, or struggling?' }
  ]);
  const [input, setInput] = useState('');

  function send() {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input.trim() };
    const reply = {
      role: 'assistant',
      text: localCoachReply(input, streak, completedWorkouts)
    };

    setMessages((items) => [...items, userMessage, reply]);
    setInput('');
  }

  return (
    <section className="panel">
      <h2>AI Coach</h2>
      <p className="muted">
        Demo mode uses local replies. Connect Firebase Functions + OpenAI next.
      </p>

      <div className="chat">
        {messages.map((message, index) => (
          <div key={index} className={`bubble ${message.role}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={input}
          placeholder="Message your coach..."
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && send()}
        />
        <button onClick={send}>Send</button>
      </div>
    </section>
  );
}
