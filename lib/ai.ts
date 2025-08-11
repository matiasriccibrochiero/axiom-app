export async function draftSummary(plain: string) {
  if (!process.env.OPENAI_API_KEY) {
    console.warn("OPENAI_API_KEY not set — skipping AI summary.");
    return "AI features disabled — no summary available.";
  }
  return "";
}
