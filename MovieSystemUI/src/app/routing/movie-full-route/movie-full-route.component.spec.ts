import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFullRouteComponent } from './movie-full-route.component';

describe('MovieFullRouteComponent', () => {
  let component: MovieFullRouteComponent;
  let fixture: ComponentFixture<MovieFullRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFullRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFullRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
