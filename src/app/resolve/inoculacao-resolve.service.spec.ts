import { TestBed } from '@angular/core/testing';

import { InoculacaoResolveService } from './inoculacao-resolve.service';

describe('InoculacaoResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InoculacaoResolveService = TestBed.get(InoculacaoResolveService);
    expect(service).toBeTruthy();
  });
});
