import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroBarberoComponent } from './registro-barbero.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroBarberoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroBarberoPageRoutingModule {}
