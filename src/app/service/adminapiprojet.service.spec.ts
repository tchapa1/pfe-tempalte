import { TestBed } from '@angular/core/testing';

import { AdminapiprojetService } from './adminapiprojet.service';

describe('AdminapiprojetService', () => {
  let service: AdminapiprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
