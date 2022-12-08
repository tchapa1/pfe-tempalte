import { TestBed } from '@angular/core/testing';

import { DgapitacheService } from './dgapitache.service';

describe('DgapitacheService', () => {
  let service: DgapitacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapitacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
