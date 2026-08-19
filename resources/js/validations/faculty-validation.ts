import z from "zod";

export const createFacultySchema = z.object({
    title: z.string().min(1, "The title field is required"),
    description: z.string().min(1, "The description field is required"),
    detail_url: z.string().min(1, "The detail url field is required"),
    image: z.union([
        z.string().min(1, "The image field is required"),
        z.file()
    ])
});

export type CreateFacultyForm = z.infer<typeof createFacultySchema>;

export const updateFacultySchema = z.object({
    title: z.string().min(1, "The title field is required"),
    description: z.string().min(1, "The description field is required"),
    detail_url: z.string().min(1, "The detail url field is required"),
    image: z.file().mime(["image/jpeg", "image/png", "image/webp"]).nullable(),
});

export type UpdateFacultyForm = z.infer<typeof updateFacultySchema>;
