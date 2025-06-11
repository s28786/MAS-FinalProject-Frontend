import { Component, signal } from '@angular/core';
import { MovieFullComponent } from '../../components/movie-full/movie-full.component';
import { RoomService } from '../../../api-services/room.service';
import { Screening } from '../../../api-services/models/screening.type';
import { Room } from '../../../api-services/models/room.type';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../api-services/movie.service';
import { ScreeningService } from '../../../api-services/screening.service';
import { RoomFullComponent } from "../../components/room-full/room-full.component";
import { ScreeningDetailComponent } from '../../components/screening-detail/screening-detail.component';

@Component({
  selector: 'app-room-full-route',
  imports: [ScreeningDetailComponent, RoomFullComponent],
  templateUrl: './room-full-route.component.html',
  styleUrl: './room-full-route.component.scss',
})
export class RoomFullRouteComponent {
  room = signal<Room | null>(null);
  screenings = signal<Array<Screening>>([]); // Adjust type as needed
  constructor(
    private route: ActivatedRoute,
    private screeningService: ScreeningService,
    private roomService: RoomService
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.roomService.getRoomById(id).subscribe((room) => {
        this.room.set(room);
      });
    } else {
      console.error('Invalid room ID');
    }
    this.screeningService.getScreeningsByRoomId(id).subscribe((screenings) => {
      this.screenings.set(screenings);
    });
  }
}
