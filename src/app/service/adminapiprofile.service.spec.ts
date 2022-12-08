import { TestBed } from '@angular/core/testing';

import { AdminapiprofileService } from './adminapiprofile.service';

describe('AdminapiprofileService', () => {
  let service: AdminapiprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
