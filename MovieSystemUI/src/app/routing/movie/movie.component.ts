import { Component, signal } from '@angular/core';
import { Movie } from '../../../api-services/models/movie.type';
import { MovieService } from '../../../api-services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from '../../components/movie-detail/movie-detail.component';
@Component({
  selector: 'app-movie',
  imports: [CommonModule, MovieDetailComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  providers: [MovieService],
})
export class MovieComponent {
  movies = signal<Array<Movie>>([]);

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((movies) => {
      this.movies.set(movies);
    });
  }
}
