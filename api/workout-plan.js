const OpenAI = require("openai");

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { goal, streak, completedWorkouts } = req.body;

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are CoachPulse, an expert fitness coach. Create simple, beginner-friendly weekly workout plans. Keep it practical and safe.",
        },
        {
          role: "user",
          content: `Create a 7-day workout plan for someone whose goal is ${goal}. Current streak: ${streak}. Completed workouts: ${completedWorkouts}.`,
        },
      ],
    });

    return res.status(200).json({
      plan: response.choices?.[0]?.message?.content || "Could not generate plan.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};