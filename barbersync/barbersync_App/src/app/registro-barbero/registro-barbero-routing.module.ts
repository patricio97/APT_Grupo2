import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroBarberoPage } from './registro-barbero.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroBarberoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroBarberoPageRoutingModule {}
