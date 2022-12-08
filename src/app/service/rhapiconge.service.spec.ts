import { TestBed } from '@angular/core/testing';

import { RhapicongeService } from './rhapiconge.service';

describe('RhapicongeService', () => {
  let service: RhapicongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapicongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
