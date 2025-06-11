import { Component, signal } from '@angular/core';
import { RoomForAddScreeningComponent } from '../../components/add-screening-usecase/room-for-add-screening/room-for-add-screening.component';
import { MovieForAddScreeningComponent } from '../../components/add-screening-usecase/movie-for-add-screening/movie-for-add-screening.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../api-services/models/movie.type';
import { Room } from '../../../api-services/models/room.type';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../api-services/movie.service';
import { RoomService } from '../../../api-services/room.service';
import { ScreeningService } from '../../../api-services/screening.service';
import { Screening } from '../../../api-services/models/screening.type';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AddScreeningDto } from '../../../api-services/dtos/add-screening.dto';
@Component({
  selector: 'app-add-screening-final-route',
  imports: [
    RoomForAddScreeningComponent,
    MovieForAddScreeningComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-screening-final-route.component.html',
  styleUrl: './add-screening-final-route.component.scss',
})
export class AddScreeningFinalRouteComponent {
  movie = signal<Movie | null>(null);
  room = signal<Room | null>(null);
  screenings = signal<Array<Screening>>([]);
  selectedDate = signal<Date | null>(null);
  screeningForm: FormGroup;
  serverErrors = signal<any[]>([]);

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private roomService: RoomService,
    private screeningService: ScreeningService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.screeningForm = this.fb.group({
      screeningTime: ['', Validators.required],
      defaultPrice: [1, [Validators.required, Validators.min(35)]],
    });
  }

  ngOnInit() {
    const movieId = Number(this.route.snapshot.paramMap.get('movieId'));
    const roomId = Number(this.route.snapshot.paramMap.get('roomId'));
    const date = this.route.snapshot.paramMap.get('date');

    if (date) {
      this.selectedDate.set(new Date(date));
    } else {
      console.error('Invalid date');
    }
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

    if (this.selectedDate()) {
      this.screeningService
        .getScreeningsInRoomByDate(roomId, this.selectedDate()!)
        .subscribe((screenings) => {
          this.screenings.set(screenings);
        });
    } else {
      console.error('Getting screenings failed');
    }
  }

  onSubmit() {
    const val = this.screeningForm.value;

    let startDateTime = '';
    let date = this.selectedDate();
    let time = val.screeningTime;
    if (date && time) {
      const [hours, minutes] = time.split(':').map(Number);
      const combined = new Date(date);
      combined.setHours(hours, minutes, 0, 0);

      // Convert to ISO string with timezone (UTC)
      startDateTime = combined.toISOString(); // e.g., "2024-06-12T14:30:00.000Z"
    }
    const screeningDto: AddScreeningDto = {
      movieId: this.movie()?.movieId || 0,
      roomId: this.room()?.roomId || 0,

      startDateTime: startDateTime,
      defaultTicketPrice: val.defaultPrice,
    };
    this.screeningService.createScreening(screeningDto).subscribe({
      next: (screening) => {
        console.log('Screening created successfully:', screening);
        this.router.navigate(['/screening', screening.screeningId]); // Navigate to details page
      },
      error: (err) => {
        console.error('Error creating screening:', err);
        this.serverErrors.set([err.error]);
      },
    });
  }
}
