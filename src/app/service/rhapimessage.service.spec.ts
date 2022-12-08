import { TestBed } from '@angular/core/testing';

import { RhapimessageService } from './rhapimessage.service';

describe('RhapimessageService', () => {
  let service: RhapimessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapimessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
