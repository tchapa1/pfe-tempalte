import { TestBed } from '@angular/core/testing';

import { ChefapicongeService } from './chefapiconge.service';

describe('ChefapicongeService', () => {
  let service: ChefapicongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapicongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
