import { apiDataConverter } from '@app/util/apiDataConverter';
import {
    Movie,
    MovieRaw
} from './movie.types';
import { ZodMovieRaw } from './movie.zod';

export function movieBaseTransformer({
    Actors,
    Plot,
    Title,
    Poster,
    Genre,
    Director,
    Released,
    Year,
}: MovieRaw): Movie {
    return {
        actors: Actors.split(","),
        plot: Plot,
        title: Title,
        poster: Poster,
        genre: Genre.split(","),
        director: Director,
        year: parseInt(Year),
        released: Released,
      }
    }

export function movieTransformer({ ...rest }: MovieRaw): Movie {
    return {
        ...movieBaseTransformer(rest)
    };
}

export const movieBuilder = apiDataConverter(ZodMovieRaw.parse, movieTransformer);