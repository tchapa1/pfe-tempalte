import { TestBed } from '@angular/core/testing';

import { CoordinateurapiavancementprojetService } from './coordinateurapiavancementprojet.service';

describe('CoordinateurapiavancementprojetService', () => {
  let service: CoordinateurapiavancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapiavancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
