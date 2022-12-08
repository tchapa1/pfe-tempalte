import { TestBed } from '@angular/core/testing';

import { RhapinotificationService } from './rhapinotification.service';

describe('RhapinotificationService', () => {
  let service: RhapinotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapinotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
