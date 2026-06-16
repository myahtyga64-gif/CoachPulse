import React from 'react';

export default function LandingPage({ onStart }) {
  return (
    <main className="page">
      <section className="hero">
        <p className="badge">AI Workout Accountability</p>
        <h1>Your AI coach that helps you actually work out.</h1>
        <p className="subtitle">
          CoachPulse combines simple workouts, streak tracking, daily check-ins,
          and supportive AI coaching to help you stay consistent.
        </p>
        <button className="primary" onClick={onStart}>
          Start Free Beta
        </button>
      </section>

      <section className="cards">
        <div className="card">
          <h2>Daily check-ins</h2>
          <p>Tell CoachPulse whether you completed, partly completed, or missed your workout.</p>
        </div>
        <div className="card">
          <h2>Streak tracking</h2>
          <p>Build consistency with a simple streak and monthly progress view.</p>
        </div>
        <div className="card">
          <h2>AI accountability</h2>
          <p>Get supportive coaching when you feel tired, busy, or unmotivated.</p>
        </div>
      </section>
    </main>
  );
}
