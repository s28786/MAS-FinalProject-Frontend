import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from './models/room.type';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = 'https://api.example.com/movies'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllRooms() {
    return this.http.get<Room[]>(environment.apiUrl + '/room');
  }

  getRoomById(roomId: number) {
    return this.http.get<Room>(`${environment.apiUrl}/room/${roomId}`);
  }
}
