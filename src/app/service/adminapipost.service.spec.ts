import { TestBed } from '@angular/core/testing';

import { AdminapipostService } from './adminapipost.service';

describe('AdminapipostService', () => {
  let service: AdminapipostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapipostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
