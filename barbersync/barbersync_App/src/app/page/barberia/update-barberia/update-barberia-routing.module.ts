import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBarberiaPage } from './update-barberia.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBarberiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBarberiaPageRoutingModule {}
