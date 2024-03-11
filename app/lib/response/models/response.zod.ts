import { z } from 'zod';

export const ZodSuccessResponseRaw = z.object({
    status: z.literal("OK"),
    message: z.object({
        code: z.string(),
    }),
});
