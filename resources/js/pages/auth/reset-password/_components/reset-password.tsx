
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
import { INITIAL_RESET_PASSWORD } from '@/constants/reset-password-contant';
import { cn } from "@/lib/utils"
import {
} from '@/validations/auth-validation';
import type { ResetPasswordForm } from '@/validations/reset-password-validation';
import { resetPasswordSchema } from '@/validations/reset-password-validation';

export function ResetPassword({ token }: { token: string }) {
  const [pending, setPending] = useState(false);

  const { setError, control, handleSubmit } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: INITIAL_RESET_PASSWORD
  });

  const onSubmit = (data: ResetPasswordForm) => {
    setPending(true);
    router.post('/reset-password', { ...data, token }, {
      onSuccess: () => {
        toast.success('Reset password successfully');
      },
      onError: (errors) => {
        Object.entries(errors).forEach(([field, message]) =>
          setError(field as keyof ResetPasswordForm, {
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
    <div className={cn('flex flex-col gap-6')}>
      <Card>
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>
            Enter your new password below to reset password on your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="reset-password"
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
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">
                      Password
                    </FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      placeholder="your password"
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
                name="password_confirmation"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password_confirmation">
                      Password
                    </FieldLabel>
                    <Input
                      id="password_confirmation"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      placeholder="your password confirmation"
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
                <Button type="submit" disabled={pending} form='reset-password'>
                  {pending ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    'Reset Password'
                  )}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div >
  )
}
