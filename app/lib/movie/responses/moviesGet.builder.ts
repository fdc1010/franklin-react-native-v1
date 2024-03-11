import { apiDataConverter } from '@app/util/apiDataConverter';
import { MoviesGet, MoviesGetRaw } from './moviesGet.types';
import { ZodMoviesGetRaw } from "./moviesGet.zod";
import { movieTransformer } from "../models/movie.builder";
import { Movie, MovieRaw } from '../models';
import moviesMock from "@/mocks/movies.json";

export function moviesGetTransformer({ movies, ...rest }: MoviesGetRaw): MoviesGet {
    let list: Array<MovieRaw> = [];
    if(Array.isArray(movies)) list = movies;
    else list = list.concat(movies);
    
    const result = {
        ...rest,
        movies: list.map((movie) => movieTransformer(movie)),
    };

    const movieList = moviesMock as Movie[];

    return { ...result, movies: result.movies.concat(movieList)}
}

export const moviesGetBuilder = apiDataConverter(ZodMoviesGetRaw.parse, moviesGetTransformer);
