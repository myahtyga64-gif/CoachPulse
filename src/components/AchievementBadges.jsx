export default function AchievementBadges({
  streak,
  completedWorkouts,
  goal
}) {
  const badges = [];

  if (streak >= 3) {
    badges.push("🔥 3-Day Streak");
  }

  if (streak >= 7) {
    badges.push("🚀 7-Day Streak");
  }

  if (completedWorkouts >= 10) {
    badges.push("💪 10 Workouts");
  }

  if (completedWorkouts >= 25) {
    badges.push("🏅 25 Workouts");
  }

  if (goal && goal !== "Get Fit") {
    badges.push("🎯 Goal Setter");
  }

  return (
    <section className="panel">
      <h2>Achievements</h2>

      {badges.length === 0 ? (
        <p>Complete workouts to unlock badges.</p>
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
  );
}