import { Component, input } from '@angular/core';
import { Room } from '../../../../api-services/models/room.type';
import { Router } from '@angular/router';
import { PageNotFoundComponent } from '../../../routing/page-not-found/page-not-found.component';

@Component({
  selector: 'app-room-for-add-screening',
  imports: [],
  templateUrl: './room-for-add-screening.component.html',
  styleUrl: './room-for-add-screening.component.scss',
})
export class RoomForAddScreeningComponent {
  room = input.required<Room>();
  movieId = input.required<number>();
  pickable = input<boolean>(true); // Optional input to determine if the room is pickable
  constructor(private router: Router) {}
  nextStep(id: number): void {
    if (this.movieId && id) {
      this.router.navigate(['add-screening/movie', this.movieId(), 'room', id]); // Navigate to next step
    }
  }
}
