import { TestBed } from '@angular/core/testing';

import { CoordinateurapinotificationService } from './coordinateurapinotification.service';

describe('CoordinateurapinotificationService', () => {
  let service: CoordinateurapinotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapinotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
