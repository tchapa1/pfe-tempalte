import { TestBed } from '@angular/core/testing';

import { ChefapigroupeService } from './chefapigroupe.service';

describe('ChefapigroupeService', () => {
  let service: ChefapigroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapigroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
