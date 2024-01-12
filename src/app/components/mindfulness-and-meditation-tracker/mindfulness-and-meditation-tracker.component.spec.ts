import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfulnessAndMeditationTrackerComponent } from './mindfulness-and-meditation-tracker.component';

describe('MindfulnessAndMeditationTrackerComponent', () => {
  let component: MindfulnessAndMeditationTrackerComponent;
  let fixture: ComponentFixture<MindfulnessAndMeditationTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MindfulnessAndMeditationTrackerComponent]
    });
    fixture = TestBed.createComponent(MindfulnessAndMeditationTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
