import { TestBed } from '@angular/core/testing';

import { DgapimessageService } from './dgapimessage.service';

describe('DgapimessageService', () => {
  let service: DgapimessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapimessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
