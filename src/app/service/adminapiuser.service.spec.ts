import { TestBed } from '@angular/core/testing';

import { AdminapiuserService } from './adminapiuser.service';

describe('AdminapiuserService', () => {
  let service: AdminapiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
