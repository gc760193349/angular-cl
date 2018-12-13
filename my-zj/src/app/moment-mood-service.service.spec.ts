import { TestBed } from '@angular/core/testing';

import { MomentMoodServiceService } from './moment-mood-service.service';

describe('MomentMoodServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MomentMoodServiceService = TestBed.get(MomentMoodServiceService);
    expect(service).toBeTruthy();
  });
});
