import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroBarPage } from './registro-bar.page';

describe('RegistroBarPage', () => {
  let component: RegistroBarPage;
  let fixture: ComponentFixture<RegistroBarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
