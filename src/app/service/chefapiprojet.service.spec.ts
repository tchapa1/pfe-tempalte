import { TestBed } from '@angular/core/testing';

import { ChefapiprojetService } from './chefapiprojet.service';

describe('ChefapiprojetService', () => {
  let service: ChefapiprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapiprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
