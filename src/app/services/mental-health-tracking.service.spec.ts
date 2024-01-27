import { TestBed } from '@angular/core/testing';

import { MentalHealthTrackingService } from './mental-health-tracking.service';

describe('MentalHealthTrackingService', () => {
  let service: MentalHealthTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalHealthTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
