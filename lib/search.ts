
import { prisma } from "./db";
import { openai } from "./ai";

export async function hybridSearch(query: string) {
  const keyword = await prisma.note.findMany({
    where: { plain: { contains: query, mode: "insensitive" } },
    take: 20,
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, plain: true, updatedAt: true },
  });
  const emb = await openai.embeddings.create({ model: "text-embedding-3-small", input: query });
  const vec = emb.data[0].embedding as any;
  const semantic = await prisma.$queryRawUnsafe<any[]>(
    `SELECT n.id, n.title, n."updatedAt", 1 - (ne.vector <=> $1) AS score
     FROM "NoteEmbedding" ne JOIN "Note" n ON n.id = ne."noteId"
     ORDER BY ne.vector <=> $1 ASC
     LIMIT 20`,
    vec
  );
  const map = new Map<string, any>();
  [...semantic, ...keyword].forEach((r: any) => map.set(r.id, { ...r }));
  return Array.from(map.values()).slice(0, 20);
}
