import { TestBed } from '@angular/core/testing';

import { DgapicongeService } from './dgapiconge.service';

describe('DgapicongeService', () => {
  let service: DgapicongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapicongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
