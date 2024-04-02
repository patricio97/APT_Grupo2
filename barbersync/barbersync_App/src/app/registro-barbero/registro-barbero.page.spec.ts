import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroBarberoPage } from './registro-barbero.page';

describe('RegistroBarberoPage', () => {
  let component: RegistroBarberoPage;
  let fixture: ComponentFixture<RegistroBarberoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroBarberoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
