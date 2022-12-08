import { TestBed } from '@angular/core/testing';

import { AdminapitacheService } from './adminapitache.service';

describe('AdminapitacheService', () => {
  let service: AdminapitacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapitacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
