import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMoodTrackerComponent } from './daily-mood-tracker.component';

describe('DailyMoodTrackerComponent', () => {
  let component: DailyMoodTrackerComponent;
  let fixture: ComponentFixture<DailyMoodTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyMoodTrackerComponent]
    });
    fixture = TestBed.createComponent(DailyMoodTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
