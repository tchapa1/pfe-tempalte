import { TestBed } from '@angular/core/testing';

import { RhapiavancementprojetService } from './rhapiavancementprojet.service';

describe('RhapiavancementprojetService', () => {
  let service: RhapiavancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhapiavancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
