import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalHealthTrackingComponent } from './mental-health-tracking.component';

describe('MentalHealthTrackingComponent', () => {
  let component: MentalHealthTrackingComponent;
  let fixture: ComponentFixture<MentalHealthTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentalHealthTrackingComponent]
    });
    fixture = TestBed.createComponent(MentalHealthTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
