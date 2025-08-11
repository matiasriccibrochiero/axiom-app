
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { upsertNoteEmbedding } from "@/lib/embeddings";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const notes = await prisma.note.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    take: 100,
  });
  return Response.json(notes);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const { title, content, plain } = await req.json();
  const note = await prisma.note.create({ data: { title, content, plain, userId: session.user.id } });
  await upsertNoteEmbedding(note.id, plain || title);
  return Response.json(note, { status: 201 });
}
