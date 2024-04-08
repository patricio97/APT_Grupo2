import { TestBed } from '@angular/core/testing';

import { ServiceBarberriaService } from './service-barberria.service';

describe('ServiceBarberriaService', () => {
  let service: ServiceBarberriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBarberriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
