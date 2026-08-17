import z from 'zod';

export const loginSchema = z.object({
    email: z.email(),
    password: z
        .string()
        .min(1, 'The password field is required.')
});

export type LoginForm = z.infer<typeof loginSchema>;
