import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Movie } from '../../../api-services/models/movie.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  movie = input.required<Movie>();
  constructor(private router: Router) {}
  goToDetails(id: number): void {
    this.router.navigate(['/movie', id]); // Navigate to details page
  }
}
