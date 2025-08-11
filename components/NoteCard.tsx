
export default function NoteCard({ title, preview, updatedAt }: { title: string; preview: string; updatedAt: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="text-sm text-gray-500">{new Date(updatedAt).toLocaleString()}</div>
      <h3 className="mt-1 font-medium">{title}</h3>
      <p className="mt-1 text-gray-600 line-clamp-3">{preview}</p>
    </div>
  );
}
