import { apiDataConverter } from '@app/util/apiDataConverter';
import { ErrorResponseRaw } from './errorResponse.types';
import { ZodErrorResponse } from './errorResponse.zod';

export function errorResponseTransformer(props: ErrorResponseRaw) {
    return props;
}

export const errorResponseBuilder = apiDataConverter(
    ZodErrorResponse.parse,
    errorResponseTransformer,
);
