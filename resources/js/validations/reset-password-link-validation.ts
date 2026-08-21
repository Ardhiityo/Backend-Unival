import z from "zod";

export const resetPasswordLinkSchema = z.object({
    email: z.email(),
});

export type ResetPasswordLinkForm = z.infer<typeof resetPasswordLinkSchema>;
