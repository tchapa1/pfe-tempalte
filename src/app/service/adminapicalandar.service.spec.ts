import { TestBed } from '@angular/core/testing';

import { AdminapicalandarService } from './adminapicalandar.service';

describe('AdminapicalandarService', () => {
  let service: AdminapicalandarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapicalandarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
