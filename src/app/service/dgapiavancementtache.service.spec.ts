import { TestBed } from '@angular/core/testing';

import { DgapiavancementtacheService } from './dgapiavancementtache.service';

describe('DgapiavancementtacheService', () => {
  let service: DgapiavancementtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapiavancementtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
