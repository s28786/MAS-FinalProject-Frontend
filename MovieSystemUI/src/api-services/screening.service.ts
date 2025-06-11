import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from './models/room.type';
import { Screening } from './models/screening.type';
import { Movie } from './models/movie.type';
import { environment } from '../environments/environment';
import { AddScreeningDto } from './dtos/add-screening.dto';

@Injectable({
  providedIn: 'root',
})
export class ScreeningService {
  constructor(private http: HttpClient) {}

  getAllScreenings() {
    return this.http.get<Screening[]>(environment.apiUrl + '/screening');
  }

  getcSreeningById(screeningId: number) {
    return this.http.get<Screening>(
      `${environment.apiUrl}/screening/${screeningId}`
    );
  }

  getScreeningsByMovieId(movieId: number) {
    return this.http.get<Screening[]>(
      `${environment.apiUrl}/screening/movie/${movieId}`
    );
  }

  getScreeningsByRoomId(roomId: number) {
    return this.http.get<Screening[]>(
      `${environment.apiUrl}/screening/room/${roomId}`
    );
  }

  getScreeningsInRoomByDate(
    roomId: number,
    date: Date
  ) {
    const formattedDate = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
    console.log(
      'Screenings:',
      `${environment.apiUrl}/screening/date/${formattedDate}/room/${roomId}`
    );
    return this.http.get<Screening[]>(
      `${environment.apiUrl}/screening/date/${formattedDate}/room/${roomId}`
    );
  }

  createScreening(screening:AddScreeningDto) {
    console.log('Creating screening:', screening);
    return this.http.post<Screening>(
      environment.apiUrl + '/screening',
      screening
    );
  }
}
