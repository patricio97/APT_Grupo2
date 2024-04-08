import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBarberiaPage } from './update-barberia.page';

describe('UpdateBarberiaPage', () => {
  let component: UpdateBarberiaPage;
  let fixture: ComponentFixture<UpdateBarberiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateBarberiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
