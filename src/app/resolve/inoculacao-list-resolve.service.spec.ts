import { TestBed } from '@angular/core/testing';

import { InoculacaoListResolveService } from './inoculacao-list-resolve.service';

describe('InoculacaoListResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InoculacaoListResolveService = TestBed.get(InoculacaoListResolveService);
    expect(service).toBeTruthy();
  });
});
