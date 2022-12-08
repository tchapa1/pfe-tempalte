import { TestBed } from '@angular/core/testing';

import { DgapinotificationService } from './dgapinotification.service';

describe('DgapinotificationService', () => {
  let service: DgapinotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapinotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
