
import { z } from "zod";

const envSchema = z.object({
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(16),
  DATABASE_URL: z.string(),
  OPENAI_API_KEY: z.string().startsWith("sk-"),
}).passthrough();

export const env = envSchema.parse(process.env);
