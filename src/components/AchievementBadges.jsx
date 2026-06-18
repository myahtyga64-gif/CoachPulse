import { useEffect, useRef, useState } from "react";

export default function AchievementBadges({ streak, completedWorkouts, goal }) {
  const [unlockedBadge, setUnlockedBadge] = useState(null);
  const previousBadgesRef = useRef([]);

  const badges = [];

  if (streak >= 3) badges.push("🔥 3-Day Streak");
  if (streak >= 7) badges.push("🚀 7-Day Streak");
  if (completedWorkouts >= 10) badges.push("💪 10 Workouts");
  if (completedWorkouts >= 25) badges.push("🏅 25 Workouts");
  if (goal && goal !== "Get Fit") badges.push("🎯 Goal Setter");

  useEffect(() => {
    const previousBadges = previousBadgesRef.current;

    const newBadge = badges.find((badge) => !previousBadges.includes(badge));

    if (newBadge) {
      setUnlockedBadge(newBadge);

      const timer = setTimeout(() => {
        setUnlockedBadge(null);
      }, 3500);

      previousBadgesRef.current = badges;

      return () => clearTimeout(timer);
    }

    previousBadgesRef.current = badges;
  }, [streak, completedWorkouts, goal]);

  return (
    <>
      {unlockedBadge && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            background: "white",
            padding: "18px 22px",
            borderRadius: "18px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
            zIndex: 9999
          }}
        >
          <strong>Achievement Unlocked!</strong>
          <p>{unlockedBadge}</p>
        </div>
      )}

      <section className="panel">
        <h2>Achievements</h2>

        {badges.length === 0 ? (
          <p>Complete workouts or set a goal to unlock badges.</p>
        ) : (
          <div>
            {badges.map((badge) => (
              <div key={badge} style={{ marginBottom: "8px" }}>
                {badge}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}