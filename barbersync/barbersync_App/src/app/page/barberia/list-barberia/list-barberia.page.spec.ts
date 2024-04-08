import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListBarberiaPage } from './list-barberia.page';

describe('ListBarberiaPage', () => {
  let component: ListBarberiaPage;
  let fixture: ComponentFixture<ListBarberiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListBarberiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
