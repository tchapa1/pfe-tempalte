import { TestBed } from '@angular/core/testing';

import { RhapiavancementtacheService } from './rhapiavancementtache.service';

describe('RhapiavancementtacheService', () => {
  let service: RhapiavancementtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapiavancementtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
