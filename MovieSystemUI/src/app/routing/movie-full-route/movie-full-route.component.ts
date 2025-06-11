import { Component, signal } from '@angular/core';
import { Movie } from '../../../api-services/models/movie.type';

import { MovieFullComponent } from '../../components/movie-full/movie-full.component';
import { MovieService } from '../../../api-services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { ScreeningService } from '../../../api-services/screening.service';
import { Screening } from '../../../api-services/models/screening.type';
import { ScreeningDetailComponent } from '../../components/screening-detail/screening-detail.component';

@Component({
  selector: 'app-movie-full-route',
  imports: [MovieFullComponent, ScreeningDetailComponent],
  templateUrl: './movie-full-route.component.html',
  styleUrl: './movie-full-route.component.scss',
})
export class MovieFullRouteComponent {
  movie = signal<Movie | null>(null);
  screenings = signal<Array<Screening>>([]); // Adjust type as needed
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private screeningService: ScreeningService
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.movieService.getMovieById(id).subscribe((movie) => {
        this.movie.set(movie);
      });
    } else {
      console.error('Invalid movie ID');
    }
    this.screeningService.getScreeningsByMovieId(id).subscribe((screenings) => {
      this.screenings.set(screenings);
    });
  }
}
