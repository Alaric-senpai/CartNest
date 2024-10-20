import { TestBed } from '@angular/core/testing';

import { VendorProductManagementService } from './vendor-product-management.service';

describe('VendorProductManagementService', () => {
  let service: VendorProductManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorProductManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
