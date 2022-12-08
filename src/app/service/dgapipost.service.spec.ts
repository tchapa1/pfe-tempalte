import { TestBed } from '@angular/core/testing';

import { DgapipostService } from './dgapipost.service';

describe('DgapipostService', () => {
  let service: DgapipostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapipostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
