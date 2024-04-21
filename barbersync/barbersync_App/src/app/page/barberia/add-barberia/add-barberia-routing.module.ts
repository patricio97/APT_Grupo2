import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBarberiaPage } from './add-barberia.page';

const routes: Routes = [
  {
    path: '',
    component: AddBarberiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBarberiaPageRoutingModule {}
