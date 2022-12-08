import { TestBed } from '@angular/core/testing';

import { RhapipostService } from './rhapipost.service';

describe('RhapipostService', () => {
  let service: RhapipostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapipostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
