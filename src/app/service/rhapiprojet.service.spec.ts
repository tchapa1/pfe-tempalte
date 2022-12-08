import { TestBed } from '@angular/core/testing';

import { RhapiprojetService } from './rhapiprojet.service';

describe('RhapiprojetService', () => {
  let service: RhapiprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapiprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
