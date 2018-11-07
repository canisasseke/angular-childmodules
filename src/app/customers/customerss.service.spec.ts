import { TestBed } from '@angular/core/testing';

import { CustomerssService } from './customerss.service';

describe('CustomerssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerssService = TestBed.get(CustomerssService);
    expect(service).toBeTruthy();
  });
});
