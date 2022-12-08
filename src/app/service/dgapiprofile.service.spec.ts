import { TestBed } from '@angular/core/testing';

import { DgapiprofileService } from './dgapiprofile.service';

describe('DgapiprofileService', () => {
  let service: DgapiprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapiprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
