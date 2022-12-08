import { TestBed } from '@angular/core/testing';

import { DgapiuserService } from './dgapiuser.service';

describe('DgapiuserService', () => {
  let service: DgapiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
