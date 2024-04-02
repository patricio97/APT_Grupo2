import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginBarberoPage } from './login-barbero.page';

describe('LoginBarberoPage', () => {
  let component: LoginBarberoPage;
  let fixture: ComponentFixture<LoginBarberoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginBarberoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
