import { TestBed } from '@angular/core/testing';

import { CoordinateurapiabsenceService } from './coordinateurapiabsence.service';

describe('CoordinateurapiabsenceService', () => {
  let service: CoordinateurapiabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapiabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
