
import NoteCard from "@/components/NoteCard";

export default async function NotesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <NoteCard title="Example note" preview="This is a starter." updatedAt={new Date().toISOString()} />
    </div>
  );
}
