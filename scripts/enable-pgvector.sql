
CREATE EXTENSION IF NOT EXISTS vector;
CREATE TABLE IF NOT EXISTS "NoteEmbedding" (
  id text PRIMARY KEY,
  "noteId" text UNIQUE NOT NULL REFERENCES "Note"(id) ON DELETE CASCADE,
  vector vector(1536) NOT NULL,
  "createdAt" timestamptz DEFAULT now(),
  "updatedAt" timestamptz DEFAULT now()
);
CREATE INDEX IF NOT EXISTS note_embedding_idx ON "NoteEmbedding" USING ivfflat (vector vector_cosine_ops) WITH (lists = 100);
