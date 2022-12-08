import { TestBed } from '@angular/core/testing';

import { AdminapicongeService } from './adminapiconge.service';

describe('AdminapicongeService', () => {
  let service: AdminapicongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapicongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
