import { TestBed } from '@angular/core/testing';

import { ChefapipostService } from './chefapipost.service';

describe('ChefapipostService', () => {
  let service: ChefapipostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapipostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
