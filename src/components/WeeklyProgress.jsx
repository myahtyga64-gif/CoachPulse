export default function WeeklyProgress({ completedWorkouts }) {
  const weeklyTarget = 4;
  const progress = Math.min((completedWorkouts / weeklyTarget) * 100, 100);

  return (
    <section className="panel">
      <h2>Weekly Progress</h2>
      <p>{completedWorkouts} / {weeklyTarget} workouts completed</p>

      <div style={{
        width: "100%",
        height: "16px",
        background: "#eee",
        borderRadius: "999px",
        overflow: "hidden",
        marginTop: "12px"
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "#7c3aed",
          borderRadius: "999px"
        }} />
      </div>
    </section>
  );
}