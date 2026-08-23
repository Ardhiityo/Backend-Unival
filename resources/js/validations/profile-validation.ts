import z from 'zod';

export const profileSchema = z.object({
    name: z.string().min(1, "The field name is required"),
    email: z.email(),
    password: z
        .string()
        .min(1, 'The password field is required.')
        .optional(),
    password_confirmation: z
        .string()
        .min(1, 'The password confirmation field is required.')
        .optional()
}).refine(fields => fields.password === fields.password_confirmation, {
    message: "Password do not match",
    path: ["password"],
});;

export type ProfileForm = z.infer<typeof profileSchema>;
