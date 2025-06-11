import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "./models/movie.type";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<Movie[]>(environment.apiUrl + '/movie');
  }

  getMovieById(movieId: number) {
    return this.http.get<Movie>(`${environment.apiUrl}/movie/${movieId}`);
  }
}
