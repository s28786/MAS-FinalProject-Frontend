import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFullComponent } from './room-full.component';

describe('RoomFullComponent', () => {
  let component: RoomFullComponent;
  let fixture: ComponentFixture<RoomFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
