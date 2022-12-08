import { TestBed } from '@angular/core/testing';

import { RhapiuserService } from './rhapiuser.service';

describe('RhapiuserService', () => {
  let service: RhapiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
