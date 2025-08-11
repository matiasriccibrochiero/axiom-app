
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen sticky top-0 border-r bg-white p-4 space-y-2">
      <div className="font-semibold">Axiom</div>
      <nav className="flex flex-col gap-1 text-sm">
        <Link href="/" className="px-2 py-1 rounded hover:bg-gray-100">Home</Link>
        <Link href="/notes" className="px-2 py-1 rounded hover:bg-gray-100">Notes</Link>
        <Link href="/search" className="px-2 py-1 rounded hover:bg-gray-100">Search</Link>
        <Link href="/automations" className="px-2 py-1 rounded hover:bg-gray-100">Automations</Link>
        <Link href="/settings" className="px-2 py-1 rounded hover:bg-gray-100">Settings</Link>
      </nav>
    </aside>
  );
}
