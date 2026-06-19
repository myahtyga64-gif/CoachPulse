const OpenAI = require("openai");

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const {
      currentWeight,
      goalWeight,
      streak,
      completedWorkouts
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
            "You are CoachPulse. Give encouraging, concise fitness progress feedback."
        },
        {
          role: "user",
          content: `
Current weight: ${currentWeight}kg
Goal weight: ${goalWeight}kg
Workout streak: ${streak}
Completed workouts: ${completedWorkouts}

Analyze progress and give practical advice.
          `
        }
      ]
    });

    return res.status(200).json({
      analysis: response.choices[0].message.content
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};