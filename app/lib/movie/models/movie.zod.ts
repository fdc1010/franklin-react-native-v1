import { z } from 'zod';

export const ZodMovieRaw = z.object({
    Actors: z.string(),
    Title: z.string(),
    Poster: z.string(),
    Plot: z.string(),
    Genre: z.string(),
    Director: z.string(),
    Released: z.string(),
    Year: z.string(),
});
export const ZodMovie = z.object({
    actors: z.array(z.string()),
    title: z.string(),
    poster: z.string(),
    plot: z.string(),
    genre: z.array(z.string()),
    director: z.string(),
    released: z.string(),
    year: z.number(),
});
