import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreeningFinalRouteComponent } from './add-screening-final-route.component';

describe('AddScreeningFinalRouteComponent', () => {
  let component: AddScreeningFinalRouteComponent;
  let fixture: ComponentFixture<AddScreeningFinalRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddScreeningFinalRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScreeningFinalRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
