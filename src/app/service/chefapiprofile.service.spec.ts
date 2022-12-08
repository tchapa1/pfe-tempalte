import { TestBed } from '@angular/core/testing';

import { ChefapiprofileService } from './chefapiprofile.service';

describe('ChefapiprofileService', () => {
  let service: ChefapiprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapiprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
