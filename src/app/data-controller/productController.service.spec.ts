import { TestBed } from '@angular/core/testing';

import { ProductControllerService } from './productController.service';

describe('ProductControllerService', () => {
  let service: ProductControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
