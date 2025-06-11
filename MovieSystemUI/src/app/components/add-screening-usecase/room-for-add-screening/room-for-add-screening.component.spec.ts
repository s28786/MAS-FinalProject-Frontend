import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomForAddScreeningComponent } from './room-for-add-screening.component';

describe('RoomForAddScreeningComponent', () => {
  let component: RoomForAddScreeningComponent;
  let fixture: ComponentFixture<RoomForAddScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomForAddScreeningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomForAddScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
