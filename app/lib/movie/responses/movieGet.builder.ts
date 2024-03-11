import { apiDataConverter } from '@app/util/apiDataConverter';
import { MovieGet, MovieGetRaw } from './movieGet.types';
import { ZodMovieGetRaw } from "./movieGet.zod";
import { movieTransformer } from "../models/movie.builder";

export function movieGetTransformer({ movie, ...rest }: MovieGetRaw): MovieGet {
    return {
        ...rest,
        movie: movieTransformer(movie),
    };
}

export const movieGetBuilder = apiDataConverter(ZodMovieGetRaw.parse, movieGetTransformer);
