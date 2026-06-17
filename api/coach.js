import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const { streak, workouts } = req.body;

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a strict but motivating fitness coach."
        },
        {
          role: "user",
          content: `User streak: ${streak}, workouts: ${workouts}. Give today's advice.`
        }
      ],
    });

    res.status(200).json({
      message: response.choices[0].message.content,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}