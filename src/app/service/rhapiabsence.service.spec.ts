import { TestBed } from '@angular/core/testing';

import { RhapiabsenceService } from './rhapiabsence.service';

describe('RhapiabsenceService', () => {
  let service: RhapiabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapiabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
