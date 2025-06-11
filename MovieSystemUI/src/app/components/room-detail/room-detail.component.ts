import { Component, input } from '@angular/core';
import { Room } from '../../../api-services/models/room.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-detail',
  imports: [],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss',
})
export class RoomDetailComponent {
  room = input.required<Room>();
  constructor(private router: Router) {}
  goToDetails(id: number): void {
    this.router.navigate(['/room', id]); // Navigate to details page
  }
}
