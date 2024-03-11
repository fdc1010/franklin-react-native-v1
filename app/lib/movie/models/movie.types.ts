import { z } from "zod";
import { ZodMovie, ZodMovieRaw } from "./movie.zod";

export type Movie = z.infer<typeof ZodMovie>;
export type MovieRaw = z.infer<typeof ZodMovieRaw>;