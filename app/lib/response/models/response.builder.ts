import { apiDataConverter } from '@app/util/apiDataConverter';
import { SuccessResponse, SuccessResponseRaw } from './response.types';
import { ZodSuccessResponseRaw } from './response.zod';
export function successResponseTransformer(
    props: SuccessResponseRaw,
): SuccessResponse {
    return props;
}

export const successResponseBuilder = apiDataConverter(
    ZodSuccessResponseRaw.parse,
    successResponseTransformer,
);
