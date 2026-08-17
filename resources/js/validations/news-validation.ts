import z from 'zod';

export const createNewsSchema = z.object({
    title: z.string().min(1, "The title field is required"),
    description: z.string().min(1, "The description field is required"),
    date: z.string().min(1, "The date field is required"),
    image: z.union([
        z.string().min(1, "The image field is required"),
        z.file()
    ])
});

export type CreateNewsForm = z.infer<typeof createNewsSchema>;
