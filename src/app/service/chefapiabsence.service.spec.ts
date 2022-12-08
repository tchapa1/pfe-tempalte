import { TestBed } from '@angular/core/testing';

import { ChefapiabsenceService } from './chefapiabsence.service';

describe('ChefapiabsenceService', () => {
  let service: ChefapiabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapiabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
