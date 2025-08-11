
"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Editor({ content, onUpdate }: { content?: any; onUpdate?: (json: any, plain: string) => void }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || { type: "doc", content: [] },
    editorProps: { attributes: { class: "prose max-w-none min-h-[300px] p-3" } },
    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getJSON(), editor.getText());
    },
  });
  return <EditorContent editor={editor} />;
}
