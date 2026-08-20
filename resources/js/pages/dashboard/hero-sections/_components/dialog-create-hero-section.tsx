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
import { INITIAL_CREATE_HERO_SECTION } from "@/constants/hero-section-constant";
import type { CreateHeroSectionForm } from "@/validations/hero-section-validation";
import { createHeroSectionSchema } from "@/validations/hero-section-validation";

type Props = {
    open: boolean,
    setOpen: (value: null) => void
}

export default function DialogCreateHeroSection(props: Props) {
    const { open, setOpen } = props;
    const [pending, setPending] = useState(false);

    const { handleSubmit, control, reset, setError } = useForm({
        resolver: zodResolver(createHeroSectionSchema),
        defaultValues: INITIAL_CREATE_HERO_SECTION
    });

    const onSubmit = (data: CreateHeroSectionForm) => {
        setPending(true);
        router.post('/hero-sections', data, {
            forceFormData: true,
            onSuccess: () => {
                toast.success('Hero section added successfully');
                reset();
                setOpen(null);
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, message]) =>
                    setError(field as keyof CreateHeroSectionForm, {
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
            <form onSubmit={handleSubmit(data => onSubmit(data))} id="create-hero-section">
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Create Hero Section</DialogTitle>
                        <DialogDescription>
                            Create new hero section here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                        <FieldGroup>
                            <Controller
                                name="accreditation"
                                control={control}
                                render={({ field, fieldState }) =>
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="accreditation">Accreditation</FieldLabel>
                                        <Input
                                            id="accreditation"
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Your accreditation here."
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                }
                            />
                            <Controller
                                name="total_industry_partner"
                                control={control}
                                render={({ field, fieldState }) =>
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="total_industry_partner">Total industry partner</FieldLabel>
                                        <Input
                                            id="total_industry_partner"
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Your total industry partner here."
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                }
                            />
                            <Controller
                                name="total_number_of_graduate"
                                control={control}
                                render={({ field, fieldState }) =>
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="total_number_of_graduate">Total number of graduate</FieldLabel>
                                        <Input
                                            id="total_number_of_graduate"
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Your total number of graduate here."
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
                        <Button type="submit" form="create-hero-section">
                            {pending ? <Loader2Icon className="animate-spin" /> : "Save changes"}</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}