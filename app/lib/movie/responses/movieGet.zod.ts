import { ZodSuccessResponseRaw } from "@app/lib/response";
import { ZodMovie, ZodMovieRaw } from "../models";

export const ZodMovieGetRaw = ZodSuccessResponseRaw.extend({
  movie: ZodMovieRaw
});

export const ZodMovieGet = ZodSuccessResponseRaw.extend({
  movie: ZodMovie
});