import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBarberiaCliPage } from './detail-barberia-cli.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBarberiaCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBarberiaCliPageRoutingModule {}
