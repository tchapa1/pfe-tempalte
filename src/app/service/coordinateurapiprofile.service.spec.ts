import { TestBed } from '@angular/core/testing';

import { CoordinateurapiprofileService } from './coordinateurapiprofile.service';

describe('CoordinateurapiprofileService', () => {
  let service: CoordinateurapiprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapiprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
