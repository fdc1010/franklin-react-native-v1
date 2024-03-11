import { z } from 'zod';
import { errorResponseTransformer } from './errorResponse.builder';
import { ZodErrorResponse } from './errorResponse.zod';

export type ErrorResponseRaw = z.infer<typeof ZodErrorResponse>;
export type ErrorResponse = ReturnType<typeof errorResponseTransformer>;
