import { TestBed } from '@angular/core/testing';

import { FuncionesLoginService } from './funciones-login.service';

describe('FuncionesLoginService', () => {
  let service: FuncionesLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionesLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
