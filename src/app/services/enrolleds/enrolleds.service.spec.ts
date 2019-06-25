import { TestBed } from '@angular/core/testing';

import { EnrolledsService } from './enrolleds.service';

describe('EnrolledsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrolledsService = TestBed.get(EnrolledsService);
    expect(service).toBeTruthy();
  });
});
