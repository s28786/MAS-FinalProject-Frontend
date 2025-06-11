import { Component, signal } from '@angular/core';
import { Room } from '../../../api-services/models/room.type';
import { RoomService } from '../../../api-services/room.service';
import { RoomDetailComponent } from '../../components/room-detail/room-detail.component';

@Component({
  selector: 'app-room',
  imports: [RoomDetailComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export class RoomComponent {
  rooms = signal<Array<Room>>([]);

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.getAllRooms().subscribe((rooms) => {
      this.rooms.set(rooms);
    });
  }
}
