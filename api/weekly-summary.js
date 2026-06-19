const OpenAI = require("openai");

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const {
      goal,
      streak,
      completedWorkouts,
      currentWeight,
      goalWeight,
      checkIns
    } = req.body;

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are CoachPulse, a supportive AI fitness coach. Give a short weekly progress summary with encouragement and practical next steps.",
        },
        {
          role: "user",
          content: `
Goal: ${goal}
Current streak: ${streak}
Completed workouts: ${completedWorkouts}
Current weight: ${currentWeight}kg
Goal weight: ${goalWeight}kg
Recent check-ins: ${JSON.stringify(checkIns)}

Write a weekly summary in a friendly coaching tone.
          `,
        },
      ],
    });

    return res.status(200).json({
      summary:
        response.choices?.[0]?.message?.content ||
        "Keep going — you're building momentum.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};