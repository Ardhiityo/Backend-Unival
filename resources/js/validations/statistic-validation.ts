import z from "zod";

export const createStatisticSchema = z.object({
    title: z.string().min(1, "The title field is required"),
    description: z.string().min(1, "The description field is required"),
    total: z.string().min(1, "The total field is required")
        .refine(value => Number(value) > 0, "Total must be at least 1"),
});

export type CreateStatisticForm = z.infer<typeof createStatisticSchema>;

export const updateStatisticSchema = z.object({
    title: z.string().min(1, "The title field is required"),
    description: z.string().min(1, "The description field is required"),
    total: z.string().min(1, "The total field is required")
        .refine(value => Number(value) > 0, "Total must be at least 1"),
});

export type UpdateStatisticForm = z.infer<typeof updateStatisticSchema>;
