
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { Loader2Icon } from 'lucide-react';
import { useState } from "react"
import { useForm, Controller } from 'react-hook-form';
import { toast } from "sonner";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { INITIAL_RESET_PASSWORD_LINK } from '@/constants/reset-password-link-constant';
import { cn } from "@/lib/utils"
import { resetPasswordLinkSchema } from '@/validations/reset-password-link-validation';
import type { ResetPasswordLinkForm } from '@/validations/reset-password-link-validation';

export function ResetPasswordLink({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [pending, setPending] = useState(false);
    const { setError, control, handleSubmit } = useForm({
        resolver: zodResolver(resetPasswordLinkSchema),
        defaultValues: INITIAL_RESET_PASSWORD_LINK,
    });

    const onSubmit = (data: ResetPasswordLinkForm) => {
        setPending(true);
        router.post('/forgot-password', data, {
            onSuccess: () => {
                toast.success('Reset password link has been send successfully');
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([field, message]) =>
                    setError(field as keyof ResetPasswordLinkForm, {
                        message,
                    }),
                );
            },
            onFinish: () => {
                setPending(false);
            },
        });
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Reset password link to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to reset your password
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        id="send-reset-password-link"
                        onSubmit={handleSubmit((data) => onSubmit(data))}
                    >
                        <FieldGroup>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="email">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="aryaadi229@gmail.com"
                                            autoComplete="off"
                                            {...field}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError
                                                errors={[fieldState.error]}
                                            />
                                        )}
                                    </Field>
                                )}
                            />
                            <Field>
                                <Button type="submit" disabled={pending} form='send-reset-password-link'>
                                    {pending ? (
                                        <Loader2Icon className="animate-spin" />
                                    ) : (
                                        'Send Reset Password Link'
                                    )}
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
