import { z } from 'zod';
import { ZodMoviesGet, ZodMoviesGetRaw } from './moviesGet.zod';

export type MoviesGetRaw = z.infer<typeof ZodMoviesGetRaw>;
export type MoviesGet= z.infer<typeof ZodMoviesGet>;

export type MoviesGetParamsRaw = {
  Title?: string;
};

export type MoviesGetParams = {
  title?: string;
};

