import { TestBed } from '@angular/core/testing';

import { InoculacaoService } from './inoculacao.service';

describe('InoculacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InoculacaoService = TestBed.get(InoculacaoService);
    expect(service).toBeTruthy();
  });
});
