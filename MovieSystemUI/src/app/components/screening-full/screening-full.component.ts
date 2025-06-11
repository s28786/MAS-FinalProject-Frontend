import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Screening } from '../../../api-services/models/screening.type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-screening-full',
  imports: [DatePipe],
  templateUrl: './screening-full.component.html',
  styleUrl: './screening-full.component.scss',
})
export class ScreeningFullComponent {
  screening = input.required<Screening>();


  constructor(private router: Router) {}

}
