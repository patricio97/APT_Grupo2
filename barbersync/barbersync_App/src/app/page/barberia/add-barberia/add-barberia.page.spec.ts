import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBarberiaPage } from './add-barberia.page';

describe('AddBarberiaPage', () => {
  let component: AddBarberiaPage;
  let fixture: ComponentFixture<AddBarberiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddBarberiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
