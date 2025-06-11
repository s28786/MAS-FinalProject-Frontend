import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningFullComponent } from './screening-full.component';

describe('ScreeningFullComponent', () => {
  let component: ScreeningFullComponent;
  let fixture: ComponentFixture<ScreeningFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
