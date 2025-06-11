import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Movie } from '../../../api-services/models/movie.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-full',
  imports: [CommonModule],
  templateUrl: './movie-full.component.html',
  styleUrl: './movie-full.component.scss',
})
export class MovieFullComponent {
  movie = input.required<Movie>();
  constructor(private router: Router) {}
  goToAssignNewScreening(id: number): void {
    this.router.navigate(['add-screening/movie/', id]); // Navigate to details page
  }
}
