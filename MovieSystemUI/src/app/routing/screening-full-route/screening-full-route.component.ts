import { Component, signal } from '@angular/core';
import { ScreeningFullComponent } from '../../components/screening-full/screening-full.component';
import { RoomDetailComponent } from '../../components/room-detail/room-detail.component';
import { MovieDetailComponent } from '../../components/movie-detail/movie-detail.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../api-services/movie.service';
import { ScreeningService } from '../../../api-services/screening.service';
import { RoomService } from '../../../api-services/room.service';
import { Screening } from '../../../api-services/models/screening.type';
import { Room } from '../../../api-services/models/room.type';
import { Movie } from '../../../api-services/models/movie.type';

@Component({
  selector: 'app-screening-full-route',
  imports: [ScreeningFullComponent, RoomDetailComponent, MovieDetailComponent],
  templateUrl: './screening-full-route.component.html',
  styleUrl: './screening-full-route.component.scss',
})
export class ScreeningFullRouteComponent {
  movie = signal<Movie | null>(null);
  screening = signal<Screening | null>(null);
  room = signal<Room | null>(null);
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private screeningService: ScreeningService,
    private roomService: RoomService
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.screeningService.getcSreeningById(id).subscribe((screening) => {
        this.screening.set(screening);


        if (screening?.movieId) {
          this.movieService
            .getMovieById(screening.movieId)
            .subscribe((movie) => {
              this.movie.set(movie);
            });
        }
        if (screening?.roomId) {
          this.roomService.getRoomById(screening.roomId).subscribe((room) => {
            this.room.set(room);
          });
        }
      });
    } else {
      console.error('Invalid screening ID');
    }


  }
}
