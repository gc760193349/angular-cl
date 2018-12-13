import { TestBed } from '@angular/core/testing';

import { GlobalMoodServiceService } from './global-mood-service.service';

describe('GlobalMoodServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalMoodServiceService = TestBed.get(GlobalMoodServiceService);
    expect(service).toBeTruthy();
  });
});
