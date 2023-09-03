import { TestBed } from '@angular/core/testing';

import { ApiaffectationgroupeService } from './apiaffectationgroupe.service';

describe('ApiaffectationgroupeService', () => {
  let service: ApiaffectationgroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiaffectationgroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
