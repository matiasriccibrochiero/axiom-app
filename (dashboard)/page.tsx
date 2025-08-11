
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Welcome to Axiom</h1>
      <p className="text-gray-600">Capture notes, search semantically, and automate your knowledge flow.</p>
      <div className="flex gap-3">
        <Link href="/notes" className="px-4 py-2 rounded-xl bg-black text-white">New note</Link>
        <Link href="/search" className="px-4 py-2 rounded-xl border">Search</Link>
        <Link href="/automations" className="px-4 py-2 rounded-xl border">Automations</Link>
      </div>
    </div>
  );
}
