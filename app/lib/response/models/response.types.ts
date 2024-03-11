import { z } from 'zod';
import { ZodSuccessResponseRaw } from './response.zod';

export type SuccessResponseRaw = z.infer<typeof ZodSuccessResponseRaw>;

// no transformation needed
export type SuccessResponse = SuccessResponseRaw;
