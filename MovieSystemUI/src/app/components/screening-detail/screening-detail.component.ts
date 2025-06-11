import { Component, input } from '@angular/core';
import { Screening } from '../../../api-services/models/screening.type';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-screening-detail',
  imports: [DatePipe],
  templateUrl: './screening-detail.component.html',
  styleUrl: './screening-detail.component.scss'
})
export class ScreeningDetailComponent {
  screening = input.required<Screening>();
  //check if current route group is screening
  get isScreeningRoute(): boolean {
    // Checks if the first segment of the current URL is 'screening'
    return this.router.url.startsWith('/screening');
  }



  constructor(private router: Router) {}
  goToDetails(id: number): void {
    this.router.navigate(['/screening', id]); // Navigate to details page
  }
}
