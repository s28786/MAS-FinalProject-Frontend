import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieForAddScreeningComponent } from './movie-for-add-screening.component';

describe('MovieForAddScreeningComponent', () => {
  let component: MovieForAddScreeningComponent;
  let fixture: ComponentFixture<MovieForAddScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieForAddScreeningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieForAddScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
