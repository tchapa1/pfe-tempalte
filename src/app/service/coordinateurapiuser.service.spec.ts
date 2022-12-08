import { TestBed } from '@angular/core/testing';

import { CoordinateurapiuserService } from './coordinateurapiuser.service';

describe('CoordinateurapiuserService', () => {
  let service: CoordinateurapiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
