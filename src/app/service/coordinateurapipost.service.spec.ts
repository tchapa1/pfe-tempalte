import { TestBed } from '@angular/core/testing';

import { CoordinateurapipostService } from './coordinateurapipost.service';

describe('CoordinateurapipostService', () => {
  let service: CoordinateurapipostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapipostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
