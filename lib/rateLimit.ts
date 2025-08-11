
const hits = new Map<string, { count: number; ts: number }>();
export function rateLimit(key: string, limit = 60, windowMs = 60_000) {
  const now = Date.now();
  const slot = hits.get(key);
  if (!slot || now - slot.ts > windowMs) hits.set(key, { count: 1, ts: now });
  else slot.count++;
  const cur = hits.get(key)!;
  if (cur.count > limit) throw new Error("Rate limit exceeded");
}
