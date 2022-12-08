import { TestBed } from '@angular/core/testing';

import { CoordinateurapimessageService } from './coordinateurapimessage.service';

describe('CoordinateurapimessageService', () => {
  let service: CoordinateurapimessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateurapimessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
