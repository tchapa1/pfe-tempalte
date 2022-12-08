import { TestBed } from '@angular/core/testing';

import { CoordinateurapicongeService } from './coordinateurapiconge.service';

describe('CoordinateurapicongeService', () => {
  let service: CoordinateurapicongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapicongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
