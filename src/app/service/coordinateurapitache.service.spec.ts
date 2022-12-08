import { TestBed } from '@angular/core/testing';

import { CoordinateurapitacheService } from './coordinateurapitache.service';

describe('CoordinateurapitacheService', () => {
  let service: CoordinateurapitacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapitacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
