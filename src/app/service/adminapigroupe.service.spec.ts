import { TestBed } from '@angular/core/testing';

import { AdminapigroupeService } from './adminapigroupe.service';

describe('AdminapigroupeService', () => {
  let service: AdminapigroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapigroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
