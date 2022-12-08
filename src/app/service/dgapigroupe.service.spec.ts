import { TestBed } from '@angular/core/testing';

import { DgapigroupeService } from './dgapigroupe.service';

describe('DgapigroupeService', () => {
  let service: DgapigroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgapigroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
