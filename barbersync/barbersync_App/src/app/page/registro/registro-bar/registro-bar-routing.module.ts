

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroBarPage } from './registro-bar.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroBarPageRoutingModule {}
