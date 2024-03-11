import { ZodSuccessResponseRaw } from "@app/lib/response";
import { ZodMovie, ZodMovieRaw } from "../models";
import { z } from "zod";

export const ZodMoviesGetRaw = ZodSuccessResponseRaw.extend({
  movies: z.array(ZodMovieRaw)
});

export const ZodMoviesGet = ZodSuccessResponseRaw.extend({
  movies: z.array(ZodMovie)
});