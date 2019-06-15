import { TestBed } from '@angular/core/testing';

import { InvalidTokenService } from './invalid-token.service';

describe('InvalidTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvalidTokenService = TestBed.get(InvalidTokenService);
    expect(service).toBeTruthy();
  });
});
