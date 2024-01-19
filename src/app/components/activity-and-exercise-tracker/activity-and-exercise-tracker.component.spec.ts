import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAndExerciseTrackerComponent } from './activity-and-exercise-tracker.component';

describe('ActivityAndExerciseTrackerComponent', () => {
  let component: ActivityAndExerciseTrackerComponent;
  let fixture: ComponentFixture<ActivityAndExerciseTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityAndExerciseTrackerComponent]
    });
    fixture = TestBed.createComponent(ActivityAndExerciseTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
