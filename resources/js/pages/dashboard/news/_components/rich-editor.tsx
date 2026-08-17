import {
    EditorContent,
} from "@tiptap/react";
import type {
    Editor,
} from "@tiptap/react";
import { useEffect } from "react";

type RichEditorProps = {
    editor: Editor | null;
    value?: string;
    onChange: (value: string) => void;
};

export function RichEditor({
    editor,
    value,
    onChange,
}: RichEditorProps) {
    useEffect(() => {
        if (!editor || value === undefined) {
            return;
        }

        const currentValue = editor.getHTML();

        if (currentValue !== value) {
            editor.commands.setContent(value, {
                emitUpdate: false,
            });
        }
    }, [editor, value]);

    useEffect(() => {
        if (!editor) {
            return;
        }

        const handleUpdate = () => {
            onChange(editor.getHTML());
        };

        editor.on("update", handleUpdate);

        return () => {
            editor.off("update", handleUpdate);
        };
    }, [editor, onChange]);

    if (!editor) {
        return null;
    }

    return (
        <div className="rounded-md border">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-1 border-b p-2">
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBold().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Bold
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleItalic().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Italic
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Underline
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 2 })
                            .run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    H2
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Bullet
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Number
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Quote
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().undo().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Undo
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().redo().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Redo
                </button>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
}