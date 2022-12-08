import { TestBed } from '@angular/core/testing';

import { RhapiprofileService } from './rhapiprofile.service';

describe('RhapiprofileService', () => {
  let service: RhapiprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapiprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
