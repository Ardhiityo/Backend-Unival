import { zodResolver } from "@hookform/resolvers/zod";
import { router } from '@inertiajs/react';
import { Loader2Icon, X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { INITIAL_CREATE_FACULTY } from "@/constants/faculty-constant";
import { createFacultySchema } from "@/validations/faculty-validation";
import type { CreateFacultyForm } from "@/validations/faculty-validation";

type Props = {
    open: boolean,
    setOpen: (value: null) => void
}

export default function DialogCreateFaculty(props: Props) {
    const { open, setOpen } = props;
    const [pending, setPending] = useState(false);

    const [imagePreview, setImagePreview] = useState("");

    const { handleSubmit, control, setValue, reset, setError } = useForm({
        resolver: zodResolver(createFacultySchema),
        defaultValues: INITIAL_CREATE_FACULTY
    });

    const onSubmit = (data: CreateFacultyForm) => {
        setPending(true);
        router.post('/faculties', data, {
            forceFormData: true,
            onSuccess: () => {
                toast.success('Faculty added successfully');
                reset();
                setOpen(null);
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, message]) =>
                    setError(field as keyof CreateFacultyForm, {
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
            <form onSubmit={handleSubmit(data => onSubmit(data))} id="create-faculty">
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Create Faculty</DialogTitle>
                        <DialogDescription>
                            Create new faculty here. Click save when you&apos;re
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
                                name="detail_url"
                                control={control}
                                render={({ field, fieldState }) =>
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="detail_url">Detail Url</FieldLabel>
                                        <Input
                                            id="detail_url"
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Your detail url here."
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                }
                            />
                            <Controller
                                name="image"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <>
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="image">Image</FieldLabel>
                                            <Input placeholder="Your image here."
                                                id="image"
                                                type="file"
                                                accept="image/*"
                                                aria-invalid={fieldState.invalid}
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];

                                                    if (file) {
                                                        field.onChange(file)
                                                        const objectUrl = URL.createObjectURL(file)
                                                        setImagePreview(objectUrl)
                                                    }
                                                }}
                                            />
                                            {fieldState.invalid && (
                                                <FieldError
                                                    errors={[fieldState.error]}
                                                />
                                            )}
                                        </Field>
                                        {imagePreview && (
                                            <div className="h-44 w-full relative">
                                                <img src={imagePreview} className="size-full rounded-lg" />
                                                <X className="absolute top-1 right-1 bg-secondary text-primary rounded-full" onClick={() => {
                                                    setValue("image", "");
                                                    setImagePreview("")
                                                }} />
                                            </div>
                                        )}
                                    </>
                                )}
                            />
                        </FieldGroup>
                    </div>
                    <DialogFooter>
                        <DialogClose render={<Button variant="outline">Cancel</Button>} />
                        <Button type="submit" form="create-faculty">
                            {pending ? <Loader2Icon className="animate-spin" /> : "Save changes"}</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}