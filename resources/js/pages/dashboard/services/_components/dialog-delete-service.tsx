import { router } from "@inertiajs/react";
import { Loader2Icon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle } from "@/components/ui/alert-dialog";
import type { Service } from "@/types/general";

type Props = {
    open: boolean,
    setOpen: (value: null) => void
    service: Service
}

export default function DialogDeleteService({ open, setOpen, service }: Props) {
    const [pending, setPending] = useState(false);

    function handleDelete() {
        setPending(true);
        router.delete(`/services/${service.id}`, {
            onSuccess: () => toast.success("Success to deleted the service"),
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
                    <AlertDialogTitle>Delete faculty?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete {service.title}.
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