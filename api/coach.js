import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { message, streak, workouts } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are CoachPulse, a motivating AI fitness accountability coach. Keep replies short, practical, supportive, and focused on consistency.",
        },
        {
          role: "user",
          content: `User message: ${message}. Streak: ${streak}. Completed workouts: ${workouts}.`,
        },
      ],
    });

    res.status(200).json({
      message: response.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}