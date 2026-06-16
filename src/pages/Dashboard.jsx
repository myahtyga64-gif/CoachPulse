import React, { useEffect, useState } from 'react';
import WorkoutCheckIn from '../components/WorkoutCheckIn';
import AICoach from '../components/AICoach';

import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../services/firebase';

export default function Dashboard({ user, onLogout }) {
  const [streak, setStreak] = useState(0);
  const [completedWorkouts, setCompletedWorkouts] = useState(0);
  const [todayStatus, setTodayStatus] = useState(null);

  function completeWorkout(status) {
    if (status === 'completed') {
      setCompletedWorkouts((value) => value + 1);
      setStreak((value) => value + 1);
    }
  }

  useEffect(() => {
    const fetchToday = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const today = new Date().toISOString().split('T')[0];

      const ref = doc(db, "users", user.uid, "workouts", today);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setTodayStatus(snap.data());
      } else {
        setTodayStatus(null);
      }
    };

    fetchToday();
  }, []);

  return (
    <main className="page">
      <header className="topbar">
        <div>
          <p className="badge">Beta MVP</p>
          <h1>Welcome back</h1>
          <p>{user?.email}</p>
        </div>
        <button className="ghost" onClick={onLogout}>Log out</button>
      </header>

      {todayStatus ? (
        <div>
          <h3>Today's Status:</h3>
          <p>{todayStatus.status}</p>
        </div>
      ) : (
        <div>
          <h3>No workout logged today</h3>
        </div>
      )}

      <section className="stats">
        <div className="stat">
          <span>🔥</span>
          <h2>{streak}</h2>
          <p>Day streak</p>
        </div>
        <div className="stat">
          <span>💪</span>
          <h2>{completedWorkouts}</h2>
          <p>Workouts done</p>
        </div>
        <div className="stat">
          <span>🎯</span>
          <h2>Get Fit</h2>
          <p>Current goal</p>
        </div>
      </section>

      <section className="layout">
        <WorkoutCheckIn onSubmit={completeWorkout} />
        <AICoach streak={streak} completedWorkouts={completedWorkouts} />
      </section>
    </main>
  );
}
