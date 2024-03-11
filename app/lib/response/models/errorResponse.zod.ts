import { z } from 'zod';

export const ZodErrorResponse = z.object({
    status: z.string().optional(),
    message: z
        .object({
            code: z.string(),
        })
        .or(z.string())
        .optional(),
});
