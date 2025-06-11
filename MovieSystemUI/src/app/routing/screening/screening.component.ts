import { Component, signal } from '@angular/core';
import { ScreeningDetailComponent } from '../../components/screening-detail/screening-detail.component';
import { CommonModule } from '@angular/common';
import { ScreeningService } from '../../../api-services/screening.service';
import { Screening } from '../../../api-services/models/screening.type';

@Component({
  selector: 'app-screening',
  imports: [CommonModule, ScreeningDetailComponent],
  templateUrl: './screening.component.html',
  styleUrl: './screening.component.scss',
  providers: [ScreeningService],
})
export class ScreeningComponent {
  screenings = signal<Array<Screening>>([]);

  constructor(private screeningService: ScreeningService) {}

  ngOnInit() {
    this.screeningService.getAllScreenings().subscribe((screenings) => {
      this.screenings.set(screenings);
    });
  }
}
