import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCliPageRoutingModule } from './login-cli-routing.module';

import { LoginCliPage } from './login-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCliPageRoutingModule
  ],
  declarations: [LoginCliPage]
})
export class LoginCliPageModule {}
