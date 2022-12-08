import { TestBed } from '@angular/core/testing';

import { RhapigroupeService } from './rhapigroupe.service';

describe('RhapigroupeService', () => {
  let service: RhapigroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapigroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
