import { Component, input } from '@angular/core';
import { Movie } from '../../../../api-services/models/movie.type';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-for-add-screening',
  imports: [DatePipe, CommonModule],
  templateUrl: './movie-for-add-screening.component.html',
  styleUrl: './movie-for-add-screening.component.scss',
})
export class MovieForAddScreeningComponent {
  movie = input.required<Movie>();
  constructor(private router: Router) {}
}
