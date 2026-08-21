import {
    EditorContent,
} from "@tiptap/react";
import type {
    Editor,
} from "@tiptap/react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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
                <Button
                    variant={'outline'}
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBold().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Bold
                </Button>
                <Button
                    variant={'outline'}
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleItalic().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Italic
                </Button>
                <Button
                    variant={'outline'}
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Underline
                </Button>
                <Button
                    variant={'outline'}
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Bullet
                </Button>
                <Button
                    variant={'outline'}
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Number
                </Button>
                <Button
                    variant={'outline'}
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Quote
                </Button>
                <Button
                    variant={'outline'}
                    type="button"
                    onClick={() =>
                        editor.chain().focus().undo().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Undo
                </Button>
                <Button
                    variant={'outline'}
                    type="button"
                    onClick={() =>
                        editor.chain().focus().redo().run()
                    }
                    className="rounded px-3 py-1 hover:bg-gray-100"
                >
                    Redo
                </Button>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
}