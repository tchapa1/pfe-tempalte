import { TestBed } from '@angular/core/testing';

import { RhapitacheService } from './rhapitache.service';

describe('RhapitacheService', () => {
  let service: RhapitacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapitacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
