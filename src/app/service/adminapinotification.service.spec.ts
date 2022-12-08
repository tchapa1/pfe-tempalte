import { TestBed } from '@angular/core/testing';

import { AdminapinotificationService } from './adminapinotification.service';

describe('AdminapinotificationService', () => {
  let service: AdminapinotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapinotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
