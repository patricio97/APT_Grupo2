import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginBarberoPage } from './login-barbero.page';

const routes: Routes = [
  {
    path: '',
    component: LoginBarberoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginBarberoPageRoutingModule {}
