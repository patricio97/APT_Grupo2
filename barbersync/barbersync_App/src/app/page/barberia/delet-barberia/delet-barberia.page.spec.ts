import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletBarberiaPage } from './delet-barberia.page';

describe('DeletBarberiaPage', () => {
  let component: DeletBarberiaPage;
  let fixture: ComponentFixture<DeletBarberiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeletBarberiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
