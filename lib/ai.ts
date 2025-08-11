
import OpenAI from "openai";
import { env } from "./env";

export const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

export async function draftSummary(plain: string) {
  const res = await openai.chat.completions.create({
    model: "gpt-5",
    messages: [
      { role: "system", content: "You are a crisp technical summarizer." },
      { role: "user", content: `Summarize the following for a daily digest.\n\n${plain}` },
    ],
    temperature: 0.2,
  });
  return res.choices[0]?.message?.content?.trim() ?? "";
}
