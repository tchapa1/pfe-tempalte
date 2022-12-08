import { TestBed } from '@angular/core/testing';

import { ChefapiuserService } from './chefapiuser.service';

describe('ChefapiuserService', () => {
  let service: ChefapiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
