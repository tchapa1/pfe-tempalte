import { TestBed } from '@angular/core/testing';

import { ChefapiavancementprojetService } from './chefapiavancementprojet.service';

describe('ChefapiavancementprojetService', () => {
  let service: ChefapiavancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapiavancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
