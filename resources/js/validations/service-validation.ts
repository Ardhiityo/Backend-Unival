import z from "zod";

export const createServiceSchema = z.object({
    title: z.string().min(1, "The title field is required"),
    description: z.string().min(1, "The description field is required"),
    url: z.string().min(1, "The url field is required"),
});

export type CreateServiceForm = z.infer<typeof createServiceSchema>;

export const updateServiceSchema = z.object({
    title: z.string().min(1, "The title field is required"),
    description: z.string().min(1, "The description field is required"),
    url: z.string().min(1, "The url field is required"),
});

export type UpdateServiceForm = z.infer<typeof updateServiceSchema>;