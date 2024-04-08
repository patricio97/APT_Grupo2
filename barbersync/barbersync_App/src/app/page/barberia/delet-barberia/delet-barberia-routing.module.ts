import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletBarberiaPage } from './delet-barberia.page';

const routes: Routes = [
  {
    path: '',
    component: DeletBarberiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletBarberiaPageRoutingModule {}
