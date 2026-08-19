import { zodResolver } from "@hookform/resolvers/zod";
import { Head, router } from '@inertiajs/react';
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { format } from "date-fns"
import { ChevronDownIcon, Loader2Icon, X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { INITIAL_CREATE_NEWS } from "@/constants/news-constant";
import DashboardLayout from "@/pages/layouts/dashboard-layout";
import { createNewsSchema } from "@/validations/news-validation";
import type { CreateNewsForm } from "@/validations/news-validation";
import { RichEditor } from "../_components/rich-editor";

export default function Page() {
    const { handleSubmit, control, setValue, reset, setError } = useForm({
        resolver: zodResolver(createNewsSchema),
        defaultValues: INITIAL_CREATE_NEWS
    })

    const [pending, setPending] = useState(false);

    const [imagePreview, setImagePreview] = useState("");

    const onSubmit = (data: CreateNewsForm) => {
        setPending(true);
        router.post('/news', data, {
            forceFormData: true,
            onSuccess: () => {
                toast.success('News added successfully');
                reset();
                router.visit('/news');
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, message]) =>
                    setError(field as keyof CreateNewsForm, {
                        message,
                    }),
                );
            },
            onFinish: () => {
                setPending(false);
            },
        });
    }


    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link.configure({
                openOnClick: false,
            }),
            Placeholder.configure({
                placeholder: "Write your description here",
            }),
        ],
        content: "<p>Halo dunia!</p>",
    });

    return (
        <>
            <Head title="Create News" />
            <h1 className="text-2xl font-semibold">Create News</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Form Create News</CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam eligendi minima laudantium incidunt nulla ex iure voluptate
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(data => onSubmit(data))} id="create-news">
                        <FieldGroup>
                            <Controller
                                name="date"
                                control={control}
                                render={({ field, fieldState }) =>
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="date">
                                            Date
                                        </FieldLabel>
                                        <Popover>
                                            <PopoverTrigger
                                                render={
                                                    <Button variant={"outline"}
                                                        data-empty={!field.value}
                                                        className="w-53 justify-between text-left font-normal data-[empty=true]:text-muted-foreground">
                                                        {field.value ? format(field.value, "yyyy-MM-dd") : <span>Pick a date</span>}
                                                        <ChevronDownIcon data-icon="inline-end" />
                                                    </Button>} />
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    id="date"
                                                    mode="single"
                                                    selected={field.value ? new Date(field.value) : undefined}
                                                    onSelect={(date) => field.onChange(format(String(date), "yyyy-MM-dd"))}
                                                    defaultMonth={new Date()}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                }
                            />
                            <Controller
                                name="title"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="title">Title</FieldLabel>
                                        <Textarea placeholder="Your title here."
                                            id="title"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                            {...field}
                                            className="resize-none"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError
                                                errors={[fieldState.error]}
                                            />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="description"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="description">
                                            Description
                                        </FieldLabel>
                                        <RichEditor
                                            editor={editor}
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError
                                                errors={[fieldState.error]}
                                            />
                                        )}
                                    </Field>
                                )}
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
                                            <div className="size-auto relative">
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
                    </form>
                </CardContent>
                <CardFooter>
                    <Field orientation="horizontal">
                        <Button type="button" variant="outline" onClick={() => reset()}>
                            Reset
                        </Button>
                        <Button type="submit" form="create-news">
                            {pending ? <Loader2Icon className="animate-spin" /> : "Submit"}
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
