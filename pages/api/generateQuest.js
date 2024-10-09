import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a system designed to generate tasks in steps the way quests are laid out in Skyrim the video game." },
        { role: "user", content: "Generate a title, and steps to achieve the following goal or task." },
        { role: "user", content: prompt },
      ],
    });

    res.status(200).json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error fetching completion:", error);
    res.status(500).json({ error: "Error fetching completion" });
  }
}
