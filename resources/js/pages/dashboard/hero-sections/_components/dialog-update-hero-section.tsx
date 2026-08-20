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
import type { HeroSection } from "@/types/general";
import { updateHeroSectionSchema } from "@/validations/hero-section-validation";
import type { UpdateHeroSectionForm } from "@/validations/hero-section-validation";

type Props = {
    open: boolean,
    setOpen: (value: null) => void,
    heroSection: HeroSection
}

export default function DialogUpdateHeroSection(props: Props) {
    const { open, setOpen, heroSection } = props;
    const [pending, setPending] = useState(false);

    const { handleSubmit, control, setValue, reset, setError } = useForm({
        resolver: zodResolver(updateHeroSectionSchema)
    });

    const onSubmit = (data: UpdateHeroSectionForm) => {
        setPending(true);
        router.patch(`/hero-sections/${heroSection.id}`, data, {
            forceFormData: true,
            onSuccess: () => {
                toast.success('Hero section updated successfully');
                reset();
                setOpen(null);
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, message]) =>
                    setError(field as keyof UpdateHeroSectionForm, {
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
        if (heroSection) {
            setValue("accreditation", heroSection.accreditation)
            setValue("total_industry_partner", String(heroSection.total_industry_partner))
            setValue("total_number_of_graduate", String(heroSection.total_number_of_graduate))
        }
    }, [heroSection, setValue])

    return (
        <Dialog open={open} onOpenChange={() => setOpen(null)}>
            <form onSubmit={handleSubmit(data => onSubmit(data))} id="update-hero-section">
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Update Hero section</DialogTitle>
                        <DialogDescription>
                            Make change hero section here. Click save when you&apos;re
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
                                name="total_industry_partner"
                                control={control}
                                render={({ field, fieldState }) =>
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="total_industry_partner">
                                            Total industry partner
                                        </FieldLabel>
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
                                        <FieldLabel htmlFor="total">Total number of graduate</FieldLabel>
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
                        <Button type="submit" form="update-hero-section">
                            {pending ? <Loader2Icon className="animate-spin" /> : "Save changes"}</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}