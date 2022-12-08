import { TestBed } from '@angular/core/testing';

import { CoordinateurapiavancementtacheService } from './coordinateurapiavancementtache.service';

describe('CoordinateurapiavancementtacheService', () => {
  let service: CoordinateurapiavancementtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapiavancementtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
