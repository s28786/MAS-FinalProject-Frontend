import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFullComponent } from './movie-full.component';

describe('MovieFullComponent', () => {
  let component: MovieFullComponent;
  let fixture: ComponentFixture<MovieFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
