import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBarberiaPage } from './detail-barberia.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBarberiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBarberiaPageRoutingModule {}
