import { z } from 'zod';
import { ZodMovieGet, ZodMovieGetRaw } from './movieGet.zod';

export type MovieGetRaw = z.infer<typeof ZodMovieGetRaw>;
export type MovieGet= z.infer<typeof ZodMovieGet>;

export type MovieGetParamsRaw = {
  Title?: string;
};

export type MovieGetParams = {
  title?: string;
};

