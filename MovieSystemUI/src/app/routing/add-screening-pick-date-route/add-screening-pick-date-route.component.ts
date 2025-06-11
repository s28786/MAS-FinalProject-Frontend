import { Component, signal } from '@angular/core';
import { RoomForAddScreeningComponent } from "../../components/add-screening-usecase/room-for-add-screening/room-for-add-screening.component";
import { MovieForAddScreeningComponent } from "../../components/add-screening-usecase/movie-for-add-screening/movie-for-add-screening.component";
import { Movie } from '../../../api-services/models/movie.type';
import { Room } from '../../../api-services/models/room.type';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../api-services/movie.service';
import { RoomService } from '../../../api-services/room.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-screening-pick-date-route',
  imports: [
    RoomForAddScreeningComponent,
    MovieForAddScreeningComponent,
    CommonModule,
  ],
  templateUrl: './add-screening-pick-date-route.component.html',
  styleUrl: './add-screening-pick-date-route.component.scss',
})
export class AddScreeningPickDateRouteComponent {
  movie = signal<Movie | null>(null);
  room = signal<Room | null>(null);
  dates = signal<Array<Date>>([]); // Adjust type as needed
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private roomService: RoomService
  ) {}
  ngOnInit() {
    const movieId = Number(this.route.snapshot.paramMap.get('movieId'));
    const roomId = Number(this.route.snapshot.paramMap.get('roomId'));
    if (movieId) {
      this.movieService.getMovieById(movieId).subscribe((movie) => {
        this.movie.set(movie);
      });
    } else {
      console.error('Invalid movie ID');
    }
    if (roomId) {
      this.roomService.getRoomById(roomId).subscribe((room) => {
        this.room.set(room);
      });
    } else {
      console.error('Invalid room ID');
    }

    //get next  7 dates from today
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      this.dates.set([...this.dates(), nextDate]);
    }
  }
  pickDate(date: Date) {
    let selectedDate = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
    if(this.movie() && this.room()) {
      this.router.navigate([
        'add-screening/movie',
        this.movie()?.movieId,
        'room',
        this.room()?.roomId,
        'date',
        selectedDate
      ]); // Navigate to next step
    }
  }
}
