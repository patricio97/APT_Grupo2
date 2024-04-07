import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginBarPage } from './login-bar.page';

const routes: Routes = [
  {
    path: '',
    component: LoginBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginBarPageRoutingModule {}
