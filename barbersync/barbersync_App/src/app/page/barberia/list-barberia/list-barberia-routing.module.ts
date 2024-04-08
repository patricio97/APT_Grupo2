import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBarberiaPage } from './list-barberia.page';

const routes: Routes = [
  {
    path: '',
    component: ListBarberiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBarberiaPageRoutingModule {}
