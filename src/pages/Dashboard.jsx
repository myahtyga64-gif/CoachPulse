import ProgressAnalysis from "../components/ProgressAnalysis";
import WeightTracker from "../components/WeightTracker";
import WorkoutPlan from "../components/WorkoutPlan";
import AchievementBadges from "../components/AchievementBadges";
import React, { useEffect, useState } from "react";
import WorkoutCheckIn from "../components/WorkoutCheckIn";
import AICoach from "../components/AICoach";
import GoalSelector from "../components/GoalSelector";
import WeeklyProgress from "../components/WeeklyProgress";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db, auth } from "../services/firebase";

export default function Dashboard({ user, onLogout }) {
  const [streak, setStreak] = useState(0);
  const [completedWorkouts, setCompletedWorkouts] = useState(0);
  const [todayStatus, setTodayStatus] = useState(null);
  const [goal, setGoal] = useState("Get Fit");

  function calculateStreak(completedDates) {
    const completedSet = new Set(completedDates);
    let streakCount = 0;
    let currentDate = new Date();

    while (true) {
      const dateKey = currentDate.toISOString().split("T")[0];

      if (completedSet.has(dateKey)) {
        streakCount += 1;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streakCount;
  }

  async function loadWorkoutStats() {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const userRef = doc(db, "users", currentUser.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists() && userSnap.data().goal) {
      setGoal(userSnap.data().goal);
    }

    const today = new Date().toISOString().split("T")[0];

    const todayRef = doc(db, "users", currentUser.uid, "workouts", today);
    const todaySnap = await getDoc(todayRef);

    setTodayStatus(todaySnap.exists() ? todaySnap.data() : null);

    const workoutsRef = collection(db, "users", currentUser.uid, "workouts");
    const workoutsSnap = await getDocs(workoutsRef);

    let completed = 0;
    const completedDates = [];

    workoutsSnap.forEach((workoutDoc) => {
      const data = workoutDoc.data();

      if (data.status === "completed") {
        completed += 1;
        completedDates.push(data.date);
      }
    });

    setCompletedWorkouts(completed);
    setStreak(calculateStreak(completedDates));
  }

  function completeWorkout() {
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

      <GoalSelector currentGoal={goal} onGoalUpdated={setGoal} />
<WeightTracker />
 <ProgressAnalysis
  currentWeight={80}
  goalWeight={70}
  streak={streak}
  completedWorkouts={completedWorkouts}
/>    

      <WorkoutPlan
        goal={goal}
        streak={streak}
        completedWorkouts={completedWorkouts}
      />

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

      <WeeklyProgress completedWorkouts={completedWorkouts} />

      <AchievementBadges
        streak={streak}
        completedWorkouts={completedWorkouts}
        goal={goal}
      />

      <section className="stats">
        <div className="stat">
          <span>🔥</span>
          <h2>{streak}</h2>
          <p>Day streak</p>
        </div>

        <div className="stat">
          <span>💪</span>
          <h2>{completedWorkouts}</h2>
          <p>Total completed</p>
        </div>

        <div className="stat">
          <span>🎯</span>
          <h2>{goal}</h2>
          <p>Current goal</p>
        </div>
      </section>

      <section className="layout">
        <WorkoutCheckIn onSubmit={completeWorkout} />
        <AICoach
          streak={streak}
          completedWorkouts={completedWorkouts}
          goal={goal}
        />
      </section>
    </main>
  );
}