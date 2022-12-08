import { TestBed } from '@angular/core/testing';

import { ChefapinotificationService } from './chefapinotification.service';

describe('ChefapinotificationService', () => {
  let service: ChefapinotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapinotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
