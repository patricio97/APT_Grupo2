import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCliPage } from './login-cli.page';

describe('LoginCliPage', () => {
  let component: LoginCliPage;
  let fixture: ComponentFixture<LoginCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
