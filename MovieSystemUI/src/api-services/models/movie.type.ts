import { Genre } from "./genre.type";

export type Movie = {
  movieId: number;
  title: string;
  releaseDate: Date;
  duration: string; // Use string to represent TimeSpan
  genres: Genre[];

  movieType: string;
  minimumAge: number;
  alcoholAllowed?: string[]; // Optional property
  snackAllowed?: string[]; // Optional property
}
