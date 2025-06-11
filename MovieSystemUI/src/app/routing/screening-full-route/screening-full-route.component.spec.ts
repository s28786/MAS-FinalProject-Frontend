import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningFullRouteComponent } from './screening-full-route.component';

describe('ScreeningFullRouteComponent', () => {
  let component: ScreeningFullRouteComponent;
  let fixture: ComponentFixture<ScreeningFullRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningFullRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningFullRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
