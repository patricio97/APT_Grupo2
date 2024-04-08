import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBarberiaPage } from './detail-barberia.page';

describe('DetailBarberiaPage', () => {
  let component: DetailBarberiaPage;
  let fixture: ComponentFixture<DetailBarberiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailBarberiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
