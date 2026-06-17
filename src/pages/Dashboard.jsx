import React, { useEffect, useState } from "react";
import WorkoutCheckIn from "../components/WorkoutCheckIn";
import AICoach from "../components/AICoach";

import {
  collection,
  doc,
  getDoc,
  getDocs
} from "firebase/firestore";

import { db, auth } from "../services/firebase";

export default function Dashboard({ user, onLogout }) {
  const [streak, setStreak] = useState(0);
  const [completedWorkouts, setCompletedWorkouts] = useState(0);
  const [todayStatus, setTodayStatus] = useState(null);

  async function loadWorkoutStats() {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const today = new Date().toISOString().split("T")[0];

    const todayRef = doc(db, "users", currentUser.uid, "workouts", today);
    const todaySnap = await getDoc(todayRef);

    if (todaySnap.exists()) {
      setTodayStatus(todaySnap.data());
    } else {
      setTodayStatus(null);
    }

    const workoutsRef = collection(db, "users", currentUser.uid, "workouts");
    const workoutsSnap = await getDocs(workoutsRef);

    let completed = 0;

    workoutsSnap.forEach((workoutDoc) => {
      if (workoutDoc.data().status === "completed") {
        completed += 1;
      }
    });

    setCompletedWorkouts(completed);
    setStreak(completed);
  }

  function completeWorkout(status) {
    loadWorkoutStats();
  }

  useEffect(() => {
    loadWorkoutStats();
  }, []);

  return (
    <main className="page">
      <header className="topbar">
        <div>
          <p className="badge">Beta MVP</p>
          <h1>Welcome back</h1>
          <p>{user?.email}</p>
        </div>

        <button className="ghost" onClick={onLogout}>
          Log out
        </button>
      </header>

      {todayStatus ? (
        <div className="panel">
          <h3>Today's Status:</h3>
          <p>{todayStatus.status}</p>
        </div>
      ) : (
        <div className="panel">
          <h3>No workout logged today</h3>
        </div>
      )}

      <section className="stats">
        <div className="stat">
          <span>🔥</span>
          <h2>{streak}</h2>
          <p>Completed workouts</p>
        </div>

        <div className="stat">
          <span>💪</span>
          <h2>{completedWorkouts}</h2>
          <p>Total completed</p>
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