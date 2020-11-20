import { TestBed } from '@angular/core/testing';

import { CrudVacaService } from './crud-vaca.service';

describe('CrudVacaService', () => {
  let service: CrudVacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudVacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
