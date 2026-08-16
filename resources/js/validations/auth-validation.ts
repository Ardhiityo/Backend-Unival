import z from 'zod';

export const loginSchema = z.object({
    email: z.email(),
    password: z
        .string()
        .min(8, 'The password must be at least 8 character.')
        .max(32, 'Password must be at most 32 characters.'),
});

export type LoginForm = z.infer<typeof loginSchema>;
