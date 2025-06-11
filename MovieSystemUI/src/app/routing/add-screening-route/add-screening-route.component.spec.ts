import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreeningRouteComponent } from './add-screening-route.component';

describe('AddScreeningRouteComponent', () => {
  let component: AddScreeningRouteComponent;
  let fixture: ComponentFixture<AddScreeningRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddScreeningRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScreeningRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
