import { TestBed } from '@angular/core/testing';

import { CoordinateurapiprojetService } from './coordinateurapiprojet.service';

describe('CoordinateurapiprojetService', () => {
  let service: CoordinateurapiprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapiprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
