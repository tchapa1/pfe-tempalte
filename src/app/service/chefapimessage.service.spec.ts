import { TestBed } from '@angular/core/testing';

import { ChefapimessageService } from './chefapimessage.service';

describe('ChefapimessageService', () => {
  let service: ChefapimessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefapimessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
