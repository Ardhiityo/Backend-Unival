import z from "zod";

export const resetPasswordSchema = z.object({
    email: z.email(),
    password: z
        .string()
        .min(8, 'The password field must be at least 8 character.'),
    password_confirmation: z
        .string()
        .min(8, 'The password confirmation field must be at least 8 character.'),
}).refine(fields => fields.password === fields.password_confirmation, {
    message: "Password do not match",
    path: ["password"],
});

export type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;
