import { TestBed } from '@angular/core/testing';

import { AdminapiabsenceService } from './adminapiabsence.service';

describe('AdminapiabsenceService', () => {
  let service: AdminapiabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
