import { TestBed } from '@angular/core/testing';

import { NotGuardService } from './not-guard.service';

describe('NotGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotGuardService = TestBed.get(NotGuardService);
    expect(service).toBeTruthy();
  });
});
