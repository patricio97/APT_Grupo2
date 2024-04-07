import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCliPage } from './login-cli.page';

const routes: Routes = [
  {
    path: '',
    component: LoginCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCliPageRoutingModule {}
