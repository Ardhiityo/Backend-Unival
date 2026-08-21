
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from '@inertiajs/react';
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
import { INITIAL_LOGIN } from '@/constants/auth-contant'
import { cn } from "@/lib/utils"
import {
  loginSchema
} from '@/validations/auth-validation';
import type {
  LoginForm as LoginFormSchema
} from '@/validations/auth-validation';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [pending, setPending] = useState(false);

  const { setError, control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: INITIAL_LOGIN,
  });

  const onSubmit = (data: LoginFormSchema) => {
    setPending(true);
    router.post('/login', data, {
      onSuccess: () => {
        toast.success('Login successfully');
      },
      onError: (errors) => {
        Object.entries(errors).forEach(([field, message]) =>
          setError(field as keyof LoginFormSchema, {
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
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="login"
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
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">
                        Password
                      </FieldLabel>
                      <Link
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
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
              <Field>
                <Button type="submit" disabled={pending}>
                  {pending ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    'Login'
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
