import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginBarPage } from './login-bar.page';

describe('LoginBarPage', () => {
  let component: LoginBarPage;
  let fixture: ComponentFixture<LoginBarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
