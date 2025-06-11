import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreeningPickDateRouteComponent } from './add-screening-pick-date-route.component';

describe('AddScreeningPickDateRouteComponent', () => {
  let component: AddScreeningPickDateRouteComponent;
  let fixture: ComponentFixture<AddScreeningPickDateRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddScreeningPickDateRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScreeningPickDateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
