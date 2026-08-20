import z from "zod";

export const createHeroSectionSchema = z.object({
    accreditation: z.string().min(1, "The accreditation field is required"),
    total_industry_partner: z.string().min(1, "The total industry partner field is required")
        .refine(value => Number(value) > 0, "Total industry partner must be at least 1"),
    total_number_of_graduate: z.string().min(1, "The total number of graduate field is required")
        .refine(value => Number(value) > 0, "total number of graduate must be at least 1"),
});

export type CreateHeroSectionForm = z.infer<typeof createHeroSectionSchema>;

export const updateHeroSectionSchema = z.object({
    accreditation: z.string().min(1, "The accreditation field is required"),
    total_industry_partner: z.string().min(1, "The total industry partner field is required")
        .refine(value => Number(value) > 0, "Total industry partner must be at least 1"),
    total_number_of_graduate: z.string().min(1, "The total number of graduate field is required")
        .refine(value => Number(value) > 0, "total number of graduate must be at least 1"),
});

export type UpdateHeroSectionForm = z.infer<typeof updateHeroSectionSchema>;
