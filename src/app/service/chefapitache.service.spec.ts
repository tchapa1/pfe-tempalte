import { TestBed } from '@angular/core/testing';

import { ChefapitacheService } from './chefapitache.service';

describe('ChefapitacheService', () => {
  let service: ChefapitacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapitacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
