import { TestBed } from '@angular/core/testing';

import { DgapiabsenceService } from './dgapiabsence.service';

describe('DgapiabsenceService', () => {
  let service: DgapiabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapiabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
