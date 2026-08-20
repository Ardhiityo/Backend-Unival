import { zodResolver } from "@hookform/resolvers/zod";
import { router } from '@inertiajs/react';
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Statistic } from "@/types/general";
import type { UpdateStatisticForm } from "@/validations/statistic-validation";
import { updateStatisticSchema } from "@/validations/statistic-validation";

type Props = {
    open: boolean,
    setOpen: (value: null) => void,
    statistic: Statistic
}

export default function DialogUpdateStatistic(props: Props) {
    const { open, setOpen, statistic } = props;
    const [pending, setPending] = useState(false);

    const { handleSubmit, control, setValue, reset, setError } = useForm({
        resolver: zodResolver(updateStatisticSchema)
    });

    const onSubmit = (data: UpdateStatisticForm) => {
        setPending(true);
        router.patch(`/statistics/${statistic.id}`, data, {
            forceFormData: true,
            onSuccess: () => {
                toast.success('Statistic updated successfully');
                reset();
                setOpen(null);
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, message]) =>
                    setError(field as keyof UpdateStatisticForm, {
                        message,
                    }),
                );
            },
            onFinish: () => {
                setPending(false);
            },
        });
    }

    useEffect(() => {
        if (statistic) {
            setValue("title", statistic.title)
            setValue("description", statistic.description)
            setValue("total", String(statistic.total))
        }
    }, [statistic, setValue])

    return (
        <Dialog open={open} onOpenChange={() => setOpen(null)}>
            <form onSubmit={handleSubmit(data => onSubmit(data))} id="update-statistic">
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Update Statistic</DialogTitle>
                        <DialogDescription>
                            Make change statistic here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                        <FieldGroup>
                            <Controller
                                name="title"
                                control={control}
                                render={({ field, fieldState }) =>
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="title">Title</FieldLabel>
                                        <Input
                                            id="title"
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Your title here."
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                }
                            />
                            <Controller
                                name="description"
                                control={control}
                                render={({ field, fieldState }) =>
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="description">Description</FieldLabel>
                                        <Textarea
                                            placeholder="Your description here."
                                            id="description"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                            {...field}
                                            className="resize-none"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                }
                            />
                            <Controller
                                name="total"
                                control={control}
                                render={({ field, fieldState }) =>
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="total">Total</FieldLabel>
                                        <Input
                                            id="total"
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Your total here."
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                }
                            />
                        </FieldGroup>
                    </div>
                    <DialogFooter>
                        <DialogClose render={<Button variant="outline">Cancel</Button>} />
                        <Button type="submit" form="update-statistic">
                            {pending ? <Loader2Icon className="animate-spin" /> : "Save changes"}</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}