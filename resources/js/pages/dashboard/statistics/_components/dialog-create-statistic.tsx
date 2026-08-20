import { zodResolver } from "@hookform/resolvers/zod";
import { router } from '@inertiajs/react';
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { INITIAL_CREATE_STATISTIC } from "@/constants/statistic-constant";
import { createStatisticSchema } from "@/validations/statistic-validation";
import type { CreateStatisticForm } from "@/validations/statistic-validation";

type Props = {
    open: boolean,
    setOpen: (value: null) => void
}

export default function DialogCreateStatistic(props: Props) {
    const { open, setOpen } = props;
    const [pending, setPending] = useState(false);

    const { handleSubmit, control, reset, setError } = useForm({
        resolver: zodResolver(createStatisticSchema),
        defaultValues: INITIAL_CREATE_STATISTIC
    });

    const onSubmit = (data: CreateStatisticForm) => {
        setPending(true);
        router.post('/statistics', data, {
            forceFormData: true,
            onSuccess: () => {
                toast.success('Statistic added successfully');
                reset();
                setOpen(null);
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, message]) =>
                    setError(field as keyof CreateStatisticForm, {
                        message,
                    }),
                );
            },
            onFinish: () => {
                setPending(false);
            },
        });
    }

    return (
        <Dialog open={open} onOpenChange={() => setOpen(null)}>
            <form onSubmit={handleSubmit(data => onSubmit(data))} id="create-statistic">
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Create Statsitic</DialogTitle>
                        <DialogDescription>
                            Create new statsitic here. Click save when you&apos;re
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
                        <Button type="submit" form="create-statistic">
                            {pending ? <Loader2Icon className="animate-spin" /> : "Save changes"}</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}