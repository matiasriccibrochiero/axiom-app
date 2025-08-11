
import { auth } from "@/lib/auth";
import { hybridSearch } from "@/lib/search";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });
  const { q } = await req.json();
  const results = await hybridSearch(q);
  return Response.json({ results });
}
