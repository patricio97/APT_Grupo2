import { TestBed } from '@angular/core/testing';

import { FuncionesRegistroService } from './funciones-registro.service';

describe('FuncionesRegistroService', () => {
  let service: FuncionesRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionesRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
