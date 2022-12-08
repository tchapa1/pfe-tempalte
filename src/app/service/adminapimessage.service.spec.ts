import { TestBed } from '@angular/core/testing';

import { AdminapimessageService } from './adminapimessage.service';

describe('AdminapimessageService', () => {
  let service: AdminapimessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapimessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
