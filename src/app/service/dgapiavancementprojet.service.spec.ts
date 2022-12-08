import { TestBed } from '@angular/core/testing';

import { DgapiavancementprojetService } from './dgapiavancementprojet.service';

describe('DgapiavancementprojetService', () => {
  let service: DgapiavancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapiavancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
