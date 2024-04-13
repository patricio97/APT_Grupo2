

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroBarComponent } from './registro-bar.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroBarPageRoutingModule {}
