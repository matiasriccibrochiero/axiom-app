
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const session = await auth();
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const note = await prisma.note.findFirst({ where: { id: params.id, userId: session.user.id } });
  if (!note) return new Response("Not found", { status: 404 });
  return Response.json(note);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await auth();
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const { title, content, plain } = await req.json();
  const note = await prisma.note.update({
    where: { id: params.id },
    data: { title, content, plain },
  });
  return Response.json(note);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const session = await auth();
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  await prisma.note.delete({ where: { id: params.id } });
  return new Response(null, { status: 204 });
}
