import { TestBed } from '@angular/core/testing';

import { ChefapiavancementtacheService } from './chefapiavancementtache.service';

describe('ChefapiavancementtacheService', () => {
  let service: ChefapiavancementtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapiavancementtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
