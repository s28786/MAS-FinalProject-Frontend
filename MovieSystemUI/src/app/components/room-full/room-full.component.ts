import { Component, input } from '@angular/core';
import { Room } from '../../../api-services/models/room.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-full',
  imports: [],
  templateUrl: './room-full.component.html',
  styleUrl: './room-full.component.scss',
})
export class RoomFullComponent {
  room = input.required<Room>();

  constructor(private router: Router) {}
}
