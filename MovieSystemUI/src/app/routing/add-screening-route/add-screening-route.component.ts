import { Component, signal } from '@angular/core';
import { RoomFullComponent } from '../../components/room-full/room-full.component';
import { Room } from '../../../api-services/models/room.type';
import { Movie } from '../../../api-services/models/movie.type';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../api-services/movie.service';
import { RoomService } from '../../../api-services/room.service';
import { MovieFullComponent } from "../../components/movie-full/movie-full.component";
import { RoomDetailComponent } from '../../components/room-detail/room-detail.component';
import { RoomForAddScreeningComponent } from "../../components/add-screening-usecase/room-for-add-screening/room-for-add-screening.component";
import { MovieForAddScreeningComponent } from '../../components/add-screening-usecase/movie-for-add-screening/movie-for-add-screening.component';

@Component({
  selector: 'app-add-screening-route',
  imports: [ MovieForAddScreeningComponent, RoomForAddScreeningComponent],
  templateUrl: './add-screening-route.component.html',
  styleUrl: './add-screening-route.component.scss',
})
export class AddScreeningRouteComponent {
  movie = signal<Movie | null>(null);
  rooms = signal<Array<Room>>([]); // Adjust type as needed
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private roomService: RoomService
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('movieId'));
    if (id) {
      this.movieService.getMovieById(id).subscribe((movie) => {
        this.movie.set(movie);
      });
    } else {
      console.error('Invalid movie ID');
    }
    this.roomService.getAllRooms().subscribe((rooms) => {
      this.rooms.set(rooms);
    });
  }
}

