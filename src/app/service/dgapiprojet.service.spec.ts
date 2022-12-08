import { TestBed } from '@angular/core/testing';

import { DgapiprojetService } from './dgapiprojet.service';

describe('DgapiprojetService', () => {
  let service: DgapiprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapiprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
