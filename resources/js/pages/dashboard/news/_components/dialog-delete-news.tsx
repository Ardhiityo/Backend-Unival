import { router } from "@inertiajs/react";
import { Loader2Icon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle } from "@/components/ui/alert-dialog";
import type { News } from "@/types/general";

type Props = {
    open: boolean,
    setOpen: (value: null) => void
    news: News
}

export default function DialogDeleteNews({ open, setOpen, news }: Props) {
    const [pending, setPending] = useState(false);

    function handleDelete() {
        setPending(true);
        router.delete(`/news/${news.id}`, {
            onSuccess: () => toast.success("Success to deleted the news"),
            onError: (message) => {
                if (message.general) {
                    toast.error(message.general)
                }
            },
            onFinish: () => {
                setOpen(null)
                setPending(false)
            }
        });
    }

    return (
        <AlertDialog open={open} onOpenChange={() => setOpen(null)}>
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <Trash2Icon />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Delete news?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete {news.title}.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                    <AlertDialogAction variant="destructive" disabled={pending} onClick={handleDelete}>
                        {pending ? <Loader2Icon className="animate-spin" /> : "Delete"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}