import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBarberiaCliPage } from './detail-barberia-cli.page';

describe('DetailBarberiaCliPage', () => {
  let component: DetailBarberiaCliPage;
  let fixture: ComponentFixture<DetailBarberiaCliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailBarberiaCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
