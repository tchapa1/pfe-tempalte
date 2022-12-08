import { TestBed } from '@angular/core/testing';

import { AdminapiavancementprojetService } from './adminapiavancementprojet.service';

describe('AdminapiavancementprojetService', () => {
  let service: AdminapiavancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiavancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
