import { router } from "@inertiajs/react";
import { Loader2Icon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle } from "@/components/ui/alert-dialog";
import type { Statistic } from "@/types/general";

type Props = {
    open: boolean,
    setOpen: (value: null) => void
    statistic: Statistic
}

export default function DialogDeleteStatistic({ open, setOpen, statistic }: Props) {
    const [pending, setPending] = useState(false);

    function handleDelete() {
        setPending(true);
        router.delete(`/statistics/${statistic.id}`, {
            onSuccess: () => toast.success("Success to deleted the statistic"),
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
                    <AlertDialogTitle>Delete statistic?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete {statistic.title}.
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