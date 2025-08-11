
import { openai } from "./ai";
import { prisma } from "./db";

export async function upsertNoteEmbedding(noteId: string, text: string) {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  const vector = embedding.data[0].embedding as any; // pgvector expects float[]
  // Insert using SQL to pgvector table; Prisma raw is acceptable here
  await prisma.$executeRawUnsafe(
    `INSERT INTO "NoteEmbedding" (id, "noteId", vector) VALUES ($1, $2, $3)
     ON CONFLICT ("noteId") DO UPDATE SET vector = EXCLUDED.vector, "updatedAt" = now()`,
    crypto.randomUUID(),
    noteId,
    vector
  );
}
