import { TestBed } from '@angular/core/testing';

import { CoordinateurapigroupeService } from './coordinateurapigroupe.service';

describe('CoordinateurapigroupeService', () => {
  let service: CoordinateurapigroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapigroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
