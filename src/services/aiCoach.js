import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getCoachAdvice(streak, completedWorkouts) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a world-class fitness coach. Give short, motivating, practical advice."
      },
      {
        role: "user",
        content: `User stats: streak=${streak}, workouts=${completedWorkouts}. Give today's advice.`
      }
    ]
  });

  return response.choices[0].message.content;
}