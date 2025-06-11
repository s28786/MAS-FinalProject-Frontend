import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFullRouteComponent } from './room-full-route.component';

describe('RoomFullRouteComponent', () => {
  let component: RoomFullRouteComponent;
  let fixture: ComponentFixture<RoomFullRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomFullRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomFullRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
