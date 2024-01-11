import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressLevelMonitorComponent } from './stress-level-monitor.component';

describe('StressLevelMonitorComponent', () => {
  let component: StressLevelMonitorComponent;
  let fixture: ComponentFixture<StressLevelMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StressLevelMonitorComponent]
    });
    fixture = TestBed.createComponent(StressLevelMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
